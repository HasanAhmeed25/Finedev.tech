import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'FineDev.tech Production API'
  });
});

// API inquiry endpoint
app.post('/api/inquiry', (req, res) => {
  try {
    const { name, email, company, projectType, budget, description } = req.body;

    if (!name || !name.trim() || !email || !email.trim() || !projectType || !description || !description.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Project Type, and Description).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const inquiryRecord = {
      id: 'INQ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : null,
      projectType,
      budget: budget || 'Not specified',
      description: description.trim(),
    };

    const dataDir = path.join(rootDir, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, 'inquiries.json');
    let inquiries = [];
    if (fs.existsSync(filePath)) {
      try {
        inquiries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      } catch (e) {
        inquiries = [];
      }
    }

    inquiries.push(inquiryRecord);
    fs.writeFileSync(filePath, JSON.stringify(inquiries, null, 2), 'utf-8');

    console.log(`[INQUIRY RECORDED] Reference: ${inquiryRecord.id} from ${inquiryRecord.name} (${inquiryRecord.email})`);

    return res.status(200).json({
      success: true,
      message: 'Your project inquiry has been received successfully. Our engineering team will review it and reply within 24 hours.',
      referenceId: inquiryRecord.id,
      submittedAt: inquiryRecord.receivedAt
    });
  } catch (error) {
    console.error('Error handling inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error processing inquiry. Please try again or reach out directly.'
    });
  }
});

// Serve frontend build if present
const distPath = path.join(rootDir, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`FineDev.tech API Server running on port ${PORT}`);
});
