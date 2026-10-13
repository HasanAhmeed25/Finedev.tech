import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Vite dev server middleware for handling contact/inquiry API requests during local development
function apiDevServerPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server: any) {
      server.middlewares.use('/api/inquiry', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { name, email, projectType, description } = data;

              // Basic validation
              if (!name || !name.trim() || !email || !email.trim() || !projectType || !description || !description.trim()) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'Please fill in all required fields (Name, Email, Project Type, and Description).'
                }));
                return;
              }

              // Simple email regex validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'Please enter a valid email address.'
                }));
                return;
              }

              const inquiryRecord = {
                id: 'INQ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
                timestamp: new Date().toISOString(),
                ...data
              };

              // Ensure data directory exists and append record
              const dataDir = path.resolve(process.cwd(), 'data');
              if (!fs.existsSync(dataDir)) {
                fs.mkdirSync(dataDir, { recursive: true });
              }
              const filePath = path.join(dataDir, 'inquiries.json');
              let inquiries: any[] = [];
              if (fs.existsSync(filePath)) {
                try {
                  inquiries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                } catch {
                  inquiries = [];
                }
              }
              inquiries.push(inquiryRecord);
              fs.writeFileSync(filePath, JSON.stringify(inquiries, null, 2), 'utf-8');

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                message: 'Your project inquiry has been received successfully. Our engineering team will review it and reply within 24 hours.',
                referenceId: inquiryRecord.id,
                submittedAt: inquiryRecord.timestamp
              }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'Server error processing your inquiry. Please try again or reach out directly.'
              }));
            }
          });
        } else {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
        }
      });

      server.middlewares.use('/api/client-error', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            console.error('\n🚨 [CLIENT BROWSER ERROR]:', body, '\n');
            res.statusCode = 200;
            res.end('ok');
          });
        }
      });

      server.middlewares.use('/api/health', (_req: any, res: any) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok', service: 'FineDev.tech API', time: new Date().toISOString() }));
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), apiDevServerPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
