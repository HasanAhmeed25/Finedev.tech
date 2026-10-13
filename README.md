# FineDev.tech — Futuristic Digital Consultancy Website

> **Tagline:** We Design. We Develop. We Deliver.  
> **Positioning:** Digital consultancy offering custom website development, mobile application development, desktop and web application development, UI/UX design, business automation, and software consulting.

---

## 🌟 Overview

**FineDev.tech** is a premium, futuristic 3D website built for a modern digital product studio and software consultancy. The design embodies technological sophistication: dark midnight-blue and deep charcoal aesthetics, electric violet and cyan ambient accents, glassmorphic interfaces, interactive React Three Fiber 3D elements, and clean typography.

Built from scratch with zero generic agency templates, prioritizing high-conversion UX, accessible semantic code, and verifiable full-stack backend integrations.

---

## 🚀 Key Features & Architecture

### 1. Brand Identity & Minimalist Navbar
- Minimal FineDev.tech vector logo with custom geometric hexagonal/isometric 3D mark and ambient glow.
- Sticky, transparent header that blurs into frosted glass on scroll.
- Responsive mobile drawer navigation with smooth backdrop blur.
- Accessible keyboard navigation and ARIA landmarks.

### 2. Immersive Hero Section
- **Split Layout:**
  - **Left:** Studio badge with pulsing radar indicator, headline with violet-to-cyan gradient on highlighted words, strategic supporting copy, primary CTA *"Start a Project ↗"*, secondary CTA *"Explore Our Services"*, and technology trust statement.
  - **Right:** Interactive 3D composition with a floating translucent glass cube, glowing core nodes, connected rays, orbiting rings, floating software interface panels, and particle dust.
  - Interactive status pill: *“Ideas → Design → Development → Launch”*.
- Scroll indicator with animated chevron for smooth section traversal.

### 3. Services Section
- 6 comprehensive service cards arranged in a responsive grid:
  1. **Web Development**
  2. **Mobile App Development**
  3. **Web Application Development**
  4. **Desktop Application Development**
  5. **UI/UX & Product Design**
  6. **Digital Consultancy & Automation**
- Interactive **"Explore Service ↗"** deep-dive modal detailing core deliverables, architecture specifications, and technology stack.
- Direct handoff button to pre-fill the inquiry form for the selected service.

### 4. Featured Solutions Section
- Editorial asymmetric layout covering 3 core software disciplines:
  1. **Business Digitalization** (Portals, booking engines, self-service hubs)
  2. **Custom Software Products** (SaaS architectures, cross-platform apps, microservices)
  3. **Smart Automation** (API integrations, webhook orchestration, data pipelines)
- Real-world architecture representations without fictitious clients or manufactured statistics.

### 5. Development Process
- 4-stage connected methodology: **01 Discover → 02 Design → 03 Develop → 04 Deliver**.
- Interactive stage selector with progress line and milestone deliverables.

### 6. Why FineDev.tech?
- 5 foundational pillars: *Tailored Solutions*, *Design-First Thinking*, *Scalable Development*, *Transparent Communication*, and *Quality-Focused Delivery*.
- Central abstract 3D gyroscopic core visual with orbital rings.

### 7. Technology Stack
- Categorized technology capabilities: **Frontend**, **Backend**, **Databases**, **Mobile**, **Design**, and **Cloud & Deployment**.
- Interactive category filter with capability badges and honest engineering positioning.

### 8. High-Conversion Project Inquiry & Contact Form
- **Form Fields:** Full Name, Email Address, Company (optional), Project Type dropdown, Budget Tier, Project Description.
- **Genuine Full-Stack Integration:** Submissions are validated and transmitted via `POST /api/inquiry`.
- Returns an authentic reference tracking ID (e.g., `INQ-MV6R8L7Z-...`) and timestamp.
- Submissions are persistently stored in `data/inquiries.json`.
- Visual confetti celebration on genuine delivery.
- Comprehensive client-side validation, accessible labels, loading spinner, and error retry handling.
- Direct email link to `contact@finedev.tech` and configurable social channels (GitHub, LinkedIn, 𝕏).

### 9. Premium Footer & Legal Modals
- Brand identity, agency overview, navigation links, services directory, dynamic copyright year, and closing motto: *"Built for ideas that move forward."*
- Interactive modal popups for **Privacy Policy** and **Terms of Service**.

### 10. Motion & 3D Resilience
- **React Three Fiber & Three.js:** Smooth 60fps object rotation, mouse-tracking parallax, soft lighting.
- **WebGL Error Boundary & CSS Fallback:** Automatic detection of WebGL availability with an isometric CSS 3D fallback (`HeroFallback3D.tsx`) for restricted devices.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion
- **3D & Visuals:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons & Effects:** Lucide React, `canvas-confetti`
- **Backend API:** Node.js, Express, Vite Dev API Middleware
- **Typography:** Space Grotesk, Inter

---

## 📂 Project Structure

```text
FineDev.tech/
├── data/
│   └── inquiries.json           # Persistently recorded project inquiries
├── legacy_backup/               # Archived prior static files
├── public/
│   ├── favicon.svg              # Custom futuristic isometric 3D favicon
│   └── og-image.png             # Open Graph preview
├── server/
│   └── index.js                 # Standalone Express production API server
├── src/
│   ├── components/
│   │   ├── Contact/
│   │   │   └── ContactSection.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Hero/
│   │   │   ├── Hero3DComposition.tsx
│   │   │   ├── HeroFallback3D.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── Process/
│   │   │   └── ProcessSection.tsx
│   │   ├── Services/
│   │   │   ├── ServiceModal.tsx
│   │   │   └── ServicesSection.tsx
│   │   ├── Solutions/
│   │   │   └── SolutionsSection.tsx
│   │   ├── TechStack/
│   │   │   └── TechStackSection.tsx
│   │   ├── UI/
│   │   │   ├── BackgroundGrid.tsx
│   │   │   ├── GeometricLogo.tsx
│   │   │   ├── LegalModal.tsx
│   │   │   └── SocialIcons.tsx
│   │   ├── WhyUs/
│   │   │   ├── WhyUs3DElement.tsx
│   │   │   └── WhyUsSection.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── content.ts           # Centralized copy and configuration
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Root application layout
│   ├── index.css                # Tailwind directives & futuristic glassmorphism
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML template with SEO & fonts
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Theme extensions and color tokens
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration with built-in API middleware
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18 or higher (v24+ recommended)
- **npm**: v9 or higher

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd D:\FineDev.tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally (Development Mode)

Start the Vite development server with the integrated `/api/inquiry` middleware:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. All form submissions are handled natively by the dev server middleware and stored in `data/inquiries.json`.

### Building for Production

Compile TypeScript and build the optimized production bundle:
```bash
npm run build
```

The production assets will be generated in `dist/`.

### Running Production Server

To run the complete production server (Express backend serving static frontend + API):
```bash
npm start
```
The server will run on [http://localhost:5000](http://localhost:5000) (or the `PORT` environment variable).

---

## 🛡️ Form Submission API Endpoint

- **Endpoint:** `POST /api/inquiry`
- **Request Payload:**
  ```json
  {
    "name": "Jordan Blake",
    "email": "jordan@example.com",
    "company": "Horizon Systems",
    "projectType": "Web Application (SaaS)",
    "budget": "$15,000 – $30,000",
    "description": "Custom customer portal with real-time analytics."
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Your project inquiry has been received successfully...",
    "referenceId": "INQ-MV6R8L7Z-IVRT",
    "submittedAt": "2026-10-13T14:06:49.967Z"
  }
  ```

---

## 📄 License & Attribution

Designed and engineered for **FineDev.tech**. All rights reserved.
