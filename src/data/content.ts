import { ServiceItem, SolutionItem, ProcessStepItem, WhyUsPillar, TechCategory, ProjectItem } from '../types';

export const BRAND_INFO = {
  name: 'FineDev.tech',
  tagline: 'We Design. We Develop. We Deliver.',
  heroBadge: 'DIGITAL CONSULTANCY · SOFTWARE STUDIO',
  headline: {
    line1: 'Digital ideas.',
    line2: 'Precisely engineered.'
  },
  supportingText: 'We design and build thoughtful digital products, custom applications, and connected experiences that help businesses move forward.',
  trustStatement: 'Web • Mobile • Desktop • Digital Strategy',
  email: 'contact@finedev.tech',
  contactChannels: {
    email: 'contact@finedev.tech',
    github: 'https://github.com/HasanAhmeed25/Finedev.tech',
    linkedin: 'https://linkedin.com/company/finedev-tech',
    x: 'https://x.com/finedev_tech'
  },
  closingLine: 'Built for ideas that move forward.'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Modern, responsive websites, business websites, e-commerce platforms, landing pages, and custom web portals.',
    detailedDescription: 'We engineer high-performance web experiences designed to engage users and convert visitors into long-term clients. Built with modern standards, semantic markup, and optimal Lighthouse scores.',
    iconName: 'Globe',
    deliverables: [
      'Corporate & Brand Websites',
      'High-Conversion Landing Pages',
      'Modern E-Commerce Solutions',
      'Interactive Customer Web Portals',
      'SEO & Performance Tuning'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    accentColor: 'violet'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Android and iOS applications with intuitive user experiences, secure integrations, and scalable architecture.',
    detailedDescription: 'Cross-platform and native mobile solutions that feel fluid, responsive, and reliable. From offline-first capabilities to push notification architectures, we build mobile apps your users love.',
    iconName: 'Smartphone',
    deliverables: [
      'iOS & Android Cross-Platform Apps',
      'Native Experience Optimization',
      'Offline-First Data Syncing',
      'Push Notification & Analytics Pipes',
      'App Store & Play Store Deployment'
    ],
    techStack: ['Flutter', 'React Native', 'Dart', 'Firebase', 'REST/GraphQL'],
    accentColor: 'cyan'
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    shortDescription: 'Custom SaaS platforms, dashboards, admin panels, customer portals, and cloud-connected business applications.',
    detailedDescription: 'Robust web applications crafted for heavy workflows, real-time data visualization, and seamless user collaboration. Built with security, role-based access, and enterprise scalability.',
    iconName: 'LayoutGrid',
    deliverables: [
      'Multi-tenant SaaS Platforms',
      'Real-time Analytics Dashboards',
      'Role-based Admin Consoles',
      'B2B Operations Management Systems',
      'API-driven Single Page Applications'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redis'],
    accentColor: 'violet'
  },
  {
    id: 'desktop-application-development',
    title: 'Desktop Application Development',
    shortDescription: 'Windows desktop software, internal business tools, productivity applications, and custom enterprise utilities.',
    detailedDescription: 'Specialized desktop software engineered for offline security, high-throughput file processing, hardware interfacing, and intensive workplace productivity.',
    iconName: 'Monitor',
    deliverables: [
      'Windows Enterprise Applications',
      'Internal Desktop Business Utilities',
      'Local Hardware & Peripheral Integration',
      'High-performance Data Processing Tools',
      'Secure Offline-capable Workstations'
    ],
    techStack: ['Electron', 'C# / .NET', 'Node.js', 'Python', 'SQLite'],
    accentColor: 'cyan'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    shortDescription: 'User research, wireframes, prototypes, design systems, interface design, and interactive product experiences.',
    detailedDescription: 'Design that marries aesthetic elegance with ergonomic usability. We map intuitive user journeys and produce scalable design systems that streamline engineering execution.',
    iconName: 'Palette',
    deliverables: [
      'Comprehensive Design Systems',
      'High-Fidelity Interactive Prototypes',
      'Information Architecture & Wireframes',
      'Design Token Specifications',
      'WCAG 2.1 AA Accessibility Auditing'
    ],
    techStack: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Flows'],
    accentColor: 'violet'
  },
  {
    id: 'digital-consultancy-automation',
    title: 'Digital Consultancy & Automation',
    shortDescription: 'Technical consulting, software architecture, API integrations, workflow automation, and digital transformation.',
    detailedDescription: 'Actionable technical advice and smart automations that eliminate manual bottlenecks, integrate fragmented business tools, and lay a resilient engineering foundation.',
    iconName: 'Cpu',
    deliverables: [
      'Software Architecture Audits',
      'Custom API & Webhook Integrations',
      'Business Workflow Automations',
      'Cloud Migration & Infrastructure Advice',
      'Technical Roadmap Strategy'
    ],
    techStack: ['Python', 'Node.js', 'REST APIs', 'Cloud Functions', 'CI/CD Pipelines'],
    accentColor: 'cyan'
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'business-digitalization',
    category: 'Operational Modernization',
    title: 'Business Digitalization',
    description: 'Websites, customer portals, booking systems, and business management platforms tailored to digitize legacy workflows.',
    tag: 'Digital Transformation',
    features: [
      'Seamless digital client onboarding & self-service portals',
      'Automated scheduling, appointment & booking engines',
      'Centralized operations & unified administrative panels',
      'Paperless workflows with automated document pipelines'
    ],
    capabilities: [
      'Custom Portals',
      'Booking Engines',
      'Client Dashboards',
      'Self-Service Hubs'
    ],
    accent: 'violet'
  },
  {
    id: 'custom-software-products',
    category: 'Proprietary Engineering',
    title: 'Custom Software Products',
    description: 'SaaS products, web applications, desktop tools, and mobile applications built with bespoke architecture for high scalability.',
    tag: 'SaaS & Custom Apps',
    features: [
      'Architected for modular multi-tenant growth',
      'Microservices and decoupled frontend/backend infrastructure',
      'Cross-platform desktop and mobile ecosystem synchronization',
      'Production-grade reliability with automated regression test suites'
    ],
    capabilities: [
      'SaaS Platforms',
      'Cross-Platform Apps',
      'Native Windows Utilities',
      'Cloud Architecture'
    ],
    accent: 'cyan'
  },
  {
    id: 'smart-automation',
    category: 'System Integration',
    title: 'Smart Automation',
    description: 'API integrations, workflow optimization, reporting dashboards, and connected digital systems that eliminate repetitive tasks.',
    tag: 'Workflow Orchestration',
    features: [
      'Unified data synchronization between billing, CRM, and inventory',
      'Trigger-based webhook processors and background job runners',
      'Automated KPI aggregation and executive reporting feeds',
      'Resilient retry mechanisms with monitoring and alerting'
    ],
    capabilities: [
      'API Integrations',
      'Automated Pipelines',
      'Real-time Reporting',
      'Webhook Architecture'
    ],
    accent: 'violet'
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discover',
    headline: 'Understanding your business and engineering requirements',
    description: 'Understand the business, requirements, target audience, and goals. We conduct structured requirement workshops to define functional scopes, user expectations, and architectural boundaries before writing any code.',
    deliverables: [
      'Technical Requirement Specification',
      'Target User Persona & Journey Mapping',
      'System Architecture Blueprint',
      'Milestone & Delivery Roadmap'
    ]
  },
  {
    number: '02',
    title: 'Design',
    headline: 'Crafting user journeys, wireframes, and design systems',
    description: 'Develop user journeys, wireframes, visual systems, and interactive prototypes. We turn requirements into high-fidelity clickable models, validating interaction flow and visual aesthetics early.',
    deliverables: [
      'Interactive Figma Prototypes',
      'Component & Design Token Library',
      'Responsive Wireframe Layouts',
      'Accessibility & Usability Validation'
    ]
  },
  {
    number: '03',
    title: 'Develop',
    headline: 'Engineering scalable, type-safe, and tested software',
    description: 'Build, integrate, test, and optimize the solution using suitable technologies. We work in clean, test-driven iterations with continuous integration, performance benchmarks, and strict code quality checks.',
    deliverables: [
      'Modular Codebase in Git',
      'Unit & Integration Test Coverage',
      'Secure API & Database Integration',
      'Staging Deployment for Milestone Review'
    ]
  },
  {
    number: '04',
    title: 'Deliver',
    headline: 'Production deployment, handover, and ongoing support',
    description: 'Deploy the product, provide handover documentation, and offer agreed maintenance support. We ensure a zero-downtime release, provide complete walkthroughs, and stand by for SLA-backed maintenance.',
    deliverables: [
      'Production Cloud Release & DNS Setup',
      'Complete Source Code Handover',
      'Technical Documentation & API Specs',
      'Post-Launch Stability Monitoring'
    ]
  }
];

export const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    id: 'tailored-solutions',
    title: 'Tailored Solutions',
    headline: 'No one-size-fits-all products',
    description: 'Every solution is custom-architected to your exact operational challenges and strategic growth trajectory, never forced into generic cookie-cutter templates.',
    metricLabel: 'Bespoke Architecture',
    accent: 'violet'
  },
  {
    id: 'design-first',
    title: 'Design-First Thinking',
    headline: 'Interfaces built around real users',
    description: 'Form and function move together. We design intuitive workflows that reduce friction, shorten user onboarding curves, and elevate your brand presence.',
    metricLabel: 'Ergonomic Precision',
    accent: 'cyan'
  },
  {
    id: 'scalable-dev',
    title: 'Scalable Development',
    headline: 'Architecture designed for future growth',
    description: 'Clean abstractions, modular codebases, and decoupled services allow your systems to scale effortlessly as your traffic and transaction volume multiply.',
    metricLabel: 'Future-Proof Code',
    accent: 'violet'
  },
  {
    id: 'transparent-comm',
    title: 'Transparent Communication',
    headline: 'Clear milestones and expectations',
    description: 'You get direct technical transparency: shared roadmaps, weekly demos, clear milestone criteria, and direct access to the engineers building your product.',
    metricLabel: 'Direct Engineering Sync',
    accent: 'cyan'
  },
  {
    id: 'quality-delivery',
    title: 'Quality-Focused Delivery',
    headline: 'Testing, performance, and maintainability',
    description: 'We adhere to strict engineering standards: automated testing, strict linting, type safety, optimal load times, and comprehensive documentation for seamless handovers.',
    metricLabel: 'Rigorous Verification',
    accent: 'violet'
  }
];

export const TECH_ECOSYSTEM: TechCategory[] = [
  {
    category: 'Frontend',
    description: 'Modern, responsive client interfaces with fluid micro-interactions and high performance.',
    technologies: [
      { name: 'React', category: 'Frontend', tag: 'Core UI' },
      { name: 'Next.js', category: 'Frontend', tag: 'SSR & SSG' },
      { name: 'TypeScript', category: 'Frontend', tag: 'Type Safety' },
      { name: 'JavaScript', category: 'Frontend', tag: 'Modern ESNext' },
      { name: 'HTML5 & CSS3', category: 'Frontend', tag: 'Standards' },
      { name: 'Tailwind CSS', category: 'Frontend', tag: 'Design Tokens' }
    ]
  },
  {
    category: 'Backend',
    description: 'Scalable server-side architectures, RESTful APIs, microservices, and background workers.',
    technologies: [
      { name: 'Node.js', category: 'Backend', tag: 'Runtime' },
      { name: 'Express', category: 'Backend', tag: 'API Framework' },
      { name: 'Python', category: 'Backend', tag: 'Data & Automation' },
      { name: 'PHP', category: 'Backend', tag: 'Web Services' }
    ]
  },
  {
    category: 'Databases',
    description: 'ACID-compliant relational engines, flexible document stores, and real-time state synchronizers.',
    technologies: [
      { name: 'PostgreSQL', category: 'Databases', tag: 'Relational' },
      { name: 'MySQL', category: 'Databases', tag: 'Relational' },
      { name: 'MongoDB', category: 'Databases', tag: 'NoSQL Document' },
      { name: 'Firebase', category: 'Databases', tag: 'Realtime & Auth' }
    ]
  },
  {
    category: 'Mobile',
    description: 'Cross-platform mobile applications for iOS and Android with native performance.',
    technologies: [
      { name: 'Flutter', category: 'Mobile', tag: 'Cross-Platform' },
      { name: 'React Native', category: 'Mobile', tag: 'Cross-Platform' }
    ]
  },
  {
    category: 'Design',
    description: 'Precision user experience modeling, atomic component design systems, and interaction testing.',
    technologies: [
      { name: 'Figma', category: 'Design', tag: 'UI/UX Tooling' },
      { name: 'Design Systems', category: 'Design', tag: 'Design Tokens' },
      { name: 'Prototyping', category: 'Design', tag: 'User Testing' }
    ]
  },
  {
    category: 'Cloud & Deployment',
    description: 'Automated CI/CD pipelines, containerization, cloud infrastructure, and version management.',
    technologies: [
      { name: 'Git & GitHub', category: 'DevOps', tag: 'Version Control' },
      { name: 'Cloud Hosting', category: 'DevOps', tag: 'Scalable Compute' },
      { name: 'CI/CD Pipelines', category: 'DevOps', tag: 'Automated Deploy' },
      { name: 'Docker', category: 'DevOps', tag: 'Containerization' }
    ]
  }
];

export const PROJECT_TYPES = [
  'Website Development',
  'Mobile App Development',
  'Web Application (SaaS)',
  'Desktop Application',
  'UI/UX & Product Design',
  'Digital Consultancy & Automation',
  'Other Custom Requirement'
];

export const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $60,000',
  '$60,000+'
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'finedev-studio-platform',
    title: 'FineDev Studio Digital Platform',
    category: 'Web Application & Architecture',
    badge: 'Studio Flagship',
    status: 'Active Release',
    summary: 'A high-performance digital consultancy platform engineered with React 19, TypeScript, dynamic Three.js spatial scenes, and a resilient Express inquiry pipeline.',
    description: 'Bespoke web architecture pairing Swiss-inspired minimalist typography with interactive WebGL geometry. Features zero-flash theme persistence, strict type safety, modular micro-interactions, and a secure backend lead intake engine.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Express', 'Node.js'],
    liveUrl: 'https://finedev.tech',
    githubUrl: 'https://github.com/HasanAhmeed25/Finedev.tech',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Hydration Latency', value: '< 120ms' },
      { label: 'Token Uniformity', value: '100% CSS Vars' }
    ],
    deliverables: [
      'Centralized Token System (Ivory/Platinum/Cobalt)',
      'Interactive Three.js Studio Scene & Fallback',
      'Anti-Flash System Theme Synchronization',
      'API Rate-Limited Inquiry Engine'
    ],
    layoutVariant: 'featured-large'
  },
  {
    id: 'pulseflow-automation-gateway',
    title: 'PulseFlow Automation Gateway',
    category: 'Smart Automation & System Integration',
    badge: 'Integration Pipeline',
    status: 'Production Architecture',
    summary: 'An event-driven orchestration bridge synchronizing multi-channel customer inquiries, CRM pipelines, and background notification workers with guaranteed delivery.',
    description: 'Engineered for service enterprises seeking to eliminate manual customer triage, this microservice pipeline orchestrates webhook deliveries, validates payloads, and routes inquiries to team communication channels with automatic retries and dead-letter queues.',
    techStack: ['Node.js', 'TypeScript', 'Express', 'Redis', 'REST Webhooks', 'Docker'],
    metrics: [
      { label: 'Throughput', value: '2,500 req/s' },
      { label: 'Delivery Guarantee', value: '99.99%' },
      { label: 'Error Fallback', value: 'Self-Healing' }
    ],
    deliverables: [
      'Webhook Ingestion Gateway',
      'Dead-Letter Queue Worker',
      'Role-Based Audit Logging',
      'Automated Health Monitors'
    ],
    layoutVariant: 'split-detail'
  },
  {
    id: 'omnidesk-workspace-suite',
    title: 'OmniDesk Executive Workspace Suite',
    category: 'Desktop Application Development',
    badge: 'Offline Enterprise',
    status: 'Case Study',
    summary: 'An offline-first Windows business utility engineered for secure local file processing, batch document parsing, and automated hardware reporting.',
    description: 'Built with Electron and SQLite to provide operations teams with instantaneous, air-gapped data manipulation and automated compliance exports without external cloud dependencies or recurring API costs.',
    techStack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Tailwind CSS'],
    metrics: [
      { label: 'Memory Footprint', value: '< 85 MB' },
      { label: 'Local I/O Speed', value: '1.2 GB/s' }
    ],
    deliverables: [
      'Air-Gapped Local Storage',
      'Custom SQLite Query Engine',
      'Hardware Peripheral Drivers',
      'Automated Installer Packaging'
    ],
    layoutVariant: 'card'
  },
  {
    id: 'novacore-design-system',
    title: 'NovaCore Multi-Theme Design Tokens',
    category: 'UI/UX & Design Systems',
    badge: 'Design Architecture',
    status: 'Studio Framework',
    summary: 'An accessible, token-driven multi-theme UI architecture maintaining visual cohesion across web applications, client dashboards, and mobile views.',
    description: 'A modular component design system unifying ivory/charcoal canvases, cobalt accent hierarchies, WCAG 2.1 AA contrast standards, and responsive layout primitives for enterprise interfaces.',
    techStack: ['Figma Tokens', 'Tailwind CSS', 'TypeScript', 'WCAG 2.1 AA', 'Storybook'],
    metrics: [
      { label: 'WCAG Compliance', value: 'AA Level' },
      { label: 'Token Coverage', value: '100% UI' }
    ],
    deliverables: [
      'Atomic Component Library',
      'Dual-Theme Token Schema',
      'Figma Auto-Layout Specs',
      'Interactive Documentation'
    ],
    layoutVariant: 'card'
  }
];
