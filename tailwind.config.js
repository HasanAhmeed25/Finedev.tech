/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#07080d',
          secondary: '#0d101a',
          tertiary: '#121624',
          card: 'rgba(16, 20, 34, 0.72)',
          elevated: 'rgba(23, 29, 48, 0.85)'
        },
        brand: {
          violet: '#8b5cf6',
          'violet-light': '#a855f7',
          'violet-dark': '#6d28d9',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          'cyan-dark': '#0891b2',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(139, 92, 246, 0.25)',
          'glow-cyan': 'rgba(6, 182, 212, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.12) 35%, rgba(7, 8, 13, 0) 70%)',
        'card-glow': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
      },
      boxShadow: {
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-hover': '0 12px 40px 0 rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
