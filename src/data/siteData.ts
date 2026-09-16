import {
  ServiceItem,
  BentoCapability,
  ProductItem,
  TechnologyItem,
  ProcessStep,
  TeamMember,
  FaqItem,
  MetricItem,
} from '../types';

export const COMPANY_DATA = {
  name: 'Delanki',
  legalName: 'Delanki Product Studio',
  version: '3.0.1',
  tagline: 'We Turn Ideas Into Digital Products.',
  statement: 'We build products people actually use.',
  year: '2023',
  established: '2023',
  email: 'hello@delanki.com',
  website: import.meta.env.VITE_APP_URL || 'https://delanki.vercel.com',
  github: 'https://github.com/Ankit628792/Delanki',
  location: 'Global / Remote & India',
  brandColor: '#F22952',
  status: 'Available for Q2/Q3 Product Builds & Dedicated Talent',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-apps',
    number: '01',
    title: 'Web App Development',
    tagline: 'Lightning-fast, resilient architectures designed for scale and conversion.',
    description:
      'We engineer full-stack modern web applications from ground up. Whether it is an interactive SaaS platform, complex data dashboard, real-time collaboration workspace, or high-converting digital experience, we obsess over sub-second latency, accessible UI, and clean maintainable codebases.',
    capabilities: [
      'Modern React, Next.js & TypeScript',
      'High-throughput SaaS & Cloud Architectures',
      'Real-time WebSockets & State Sync',
      'Sub-second Performance Optimization',
      'Complex Admin Systems & Data Visualizations',
      'Zero-downtime CI/CD & Cloud Deployments',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'GSAP'],
    visualType: 'browser',
    metrics: [
      { label: 'Avg. Lighthouse Score', value: '98/100' },
      { label: 'Time-to-Interactive', value: '< 0.8s' },
    ],
  },
  {
    id: 'cross-device',
    number: '02',
    title: 'Cross-Device App Development',
    tagline: 'Cohesive, tactile native applications spanning mobile, tablet, and desktop.',
    description:
      'We craft cross-platform mobile apps that feel right at home on every screen. Leveraging modern React Native, Expo, and optimized core platforms, we build fluid micro-interactions, offline-first persistence, native hardware integrations, and delightful touch mechanics.',
    capabilities: [
      'React Native Cross-Platform iOS & Android',
      'Expo Application Development & Delivery',
      'Offline-First Local Sync & Caching',
      'Biometric, Camera & Sensor Integrations',
      'Micro-animations & 120Hz Haptic Physics',
      'App Store & Play Store Release Engineering',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'SQLite', 'REST & GraphQL'],
    visualType: 'devices',
    metrics: [
      { label: 'Frame Rate Target', value: '120 FPS' },
      { label: 'Crash-Free Rate', value: '99.9%' },
    ],
  },
  {
    id: 'chrome-extensions',
    number: '03',
    title: 'Chrome Extension Development',
    tagline: 'Deep browser integrations and productivity superchargers right inside the tab.',
    description:
      'We architect robust, secure browser extensions utilizing the modern Manifest V3 standard. From AI copilot sidebars and web scrapers to workflow automators, CRM injectors, and enterprise page-level enhancements, we deliver seamless browser tooling used by thousands.',
    capabilities: [
      'Manifest V3 Architecture & Background Workers',
      'DOM Mutation & Page Context Injection',
      'AI Assistant & LLM Context Hookups',
      'Web-wide Clipboard & Automation Pipelines',
      'Secure Cross-Origin API Proxies',
      'Chrome Web Store Optimization & Review Handling',
    ],
    technologies: ['Chrome Extension APIs', 'Manifest V3', 'TypeScript', 'Tailwind CSS', 'Chrome Storage API'],
    visualType: 'extension',
    metrics: [
      { label: 'Store Compatibility', value: 'MV3 Strict' },
      { label: 'RAM Footprint', value: '< 25 MB' },
    ],
  },
  {
    id: 'vscode-extensions',
    number: '04',
    title: 'VS Code Extension Development',
    tagline: 'Custom developer tools built directly into the engineer’s natural habitat.',
    description:
      'We build purpose-crafted extensions for Visual Studio Code and Cursor that eliminate boilerplate, enforce code conventions, provide custom language servers, generate test suites, or integrate proprietary internal APIs right inside the code editor.',
    capabilities: [
      'Language Server Protocol (LSP) & AST Tooling',
      'Custom Webview Panels & Interactive UIs',
      'Inline Code Lens, Diagnostics & Quick Fixes',
      'Tree Views, Sidebars & Custom Commands',
      'AI Code Completion & Prompt Orchestrators',
      'VS Code Marketplace Packaging & Release',
    ],
    technologies: ['VS Code Extension API', 'Language Server Protocol', 'TypeScript', 'Node.js', 'ESBuild'],
    visualType: 'vscode',
    metrics: [
      { label: 'Startup Latency', value: '< 80ms' },
      { label: 'Marketplace Ready', value: '100%' },
    ],
  },
];

export const BENTO_CAPABILITIES: BentoCapability[] = [
  {
    id: 'bento-product-eng',
    title: 'Product Engineering',
    subtitle: 'End-to-End Execution',
    description: 'We translate messy product requirements into tight, production-tested software with strict architectural boundaries.',
    colSpan: 'col-span-12 lg:col-span-7',
    category: 'core',
    interactiveType: 'code',
    badge: 'CORE PILLAR',
  },
  {
    id: 'bento-ai-integrations',
    title: 'AI & Copilot Workflows',
    subtitle: 'Context-Aware Intelligence',
    description: 'Practical AI integration: custom LLM agents, local embeddings, vector retrieval, and automated document processors.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-5',
    category: 'ai',
    interactiveType: 'terminal',
    badge: 'INTELLIGENCE',
  },
  {
    id: 'bento-extensions',
    title: 'Browser & Editor Tools',
    subtitle: 'Extensions at Scale',
    description: 'Bespoke tools built into Chrome tabs and VS Code workspaces for frictionless daily developer speed.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    category: 'tooling',
    interactiveType: 'extension',
    badge: 'ECOSYSTEM',
  },
  {
    id: 'bento-mobile-web',
    title: 'Cross-Device Precision',
    subtitle: 'React Native + Web Synergy',
    description: 'Zero visual friction across iOS, Android, and desktop browsers with shared design tokens and responsive fluidity.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    category: 'engineering',
    interactiveType: 'devices',
    badge: 'ADAPTIVE',
  },
  {
    id: 'bento-performance',
    title: 'Performance & APIs',
    subtitle: 'Zero-Jank Reliability',
    description: 'Edge-rendered pages, sub-millisecond database queries, optimized WebGL, and bulletproof security rules.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    category: 'engineering',
    interactiveType: 'api',
    badge: 'SPEED',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'product-devflow',
    title: 'Delanki Pulse Extension',
    tagline: 'Instant developer productivity monitor & PR assistant for GitHub & Chrome.',
    category: 'Chrome Extension',
    description:
      'A streamlined browser extension that analyzes pull requests, flags performance regressions in real-time, and aggregates continuous integration statuses directly in the browser toolbar.',
    status: 'Live',
    technologies: ['Manifest V3', 'TypeScript', 'GitHub REST API', 'Tailwind CSS'],
    highlights: ['1-click PR audit', 'Local token security', 'Zero background battery drain'],
    year: '2023',
  },
  {
    id: 'product-syncwave',
    title: 'Nova Dashboard Engine',
    tagline: 'Real-time telemetry and state-orchestration workspace for distributed teams.',
    category: 'Web App',
    description:
      'A high-concurrency web application delivering real-time metrics streaming, custom query builders, and collaborative multi-user canvas boards with sub-second WebSocket updates.',
    status: 'In Production',
    technologies: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Sub-100ms sync latency', 'Modular widget grid', 'Automated alerts'],
    year: '2025',
  },
  {
    id: 'product-codecraft',
    title: 'Syntax Studio for VS Code',
    tagline: 'Intelligent snippet generator and context inspector for modern full-stack workflows.',
    category: 'VS Code Extension',
    description:
      'A deep editor integration providing architectural pattern suggestions, AST-based refactorings, and interactive markdown preview with embedded live runtime playground.',
    status: 'Open Source',
    technologies: ['VS Code Extension API', 'TypeScript', 'AST Parser', 'Node.js'],
    highlights: ['Instant AST diagnostics', 'Custom command palettes', 'Zero configuration'],
    year: '2024-2025',
  },
  {
    id: 'product-orbitmobile',
    title: 'Aura Mobile Experience',
    tagline: 'Sensory cross-platform lifestyle & habit tracker built in modern React Native.',
    category: 'Mobile App',
    description:
      'An intuitive mobile application with fluid haptic feedback, 120Hz gesture navigation, encrypted on-device storage, and dynamic widgets for daily productivity routines.',
    status: 'Live',
    technologies: ['React Native', 'Expo', 'SQLite', 'Tailwind CSS'],
    highlights: ['Pure React Native', '100% offline mode', 'Custom haptic engine'],
    year: '2024',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Deconstruct the problem space before writing a line of code.',
    description:
      'We dig into user workflows, product constraints, technical feasibility, and market benchmarks. We identify the core value loop and ruthlessly eliminate unnecessary friction.',
    deliverables: ['Technical Architecture Blueprint', 'User Journey Mapping', 'Sprint & Milestone Roadmap', 'Tech Stack Selection'],
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'DEFINE',
    tagline: 'Shape the scope, interactive wireframes, and design system.',
    description:
      'We produce high-fidelity component systems, API contracts, data schemas, and interactive prototypes. Every interaction is specified with clear states and edge cases.',
    deliverables: ['Production Design System', 'Schema & API Specifications', 'Interactive Click-Through Prototype', 'Security & Auth Spec'],
    duration: 'Week 2',
  },
  {
    number: '03',
    title: 'BUILD',
    tagline: 'Iterative, battle-tested engineering with continuous deployment.',
    description:
      'We build in rapid weekly sprints with preview environments for every feature branch. Code is written with strict TypeScript, unit tests, and performance instrumentation.',
    deliverables: ['Continuous Staging Previews', 'Clean Modular Codebase', 'Automated Test Suites', 'Weekly Progress Walkthroughs'],
    duration: 'Weeks 3–8',
  },
  {
    number: '04',
    title: 'LAUNCH',
    tagline: 'Zero-downtime deployment, observability, and post-launch iteration.',
    description:
      'We execute DNS switchovers, load testing, app store submissions, and telemetry monitoring. After launch, we monitor real-world user metrics and optimize relentlessly.',
    deliverables: ['Production Cloud Deployment', 'App Store / Web Store Release', 'Telemetry & Error Monitoring', 'Handover & Knowledge Docs'],
    duration: 'Final Sprint & Beyond',
  },
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  // Frontend & Web
  { name: 'React 19', category: 'Frontend & Web', description: 'Modern reactive component architecture', proficiency: 98, highlight: true },
  { name: 'Next.js', category: 'Frontend & Web', description: 'Server-side rendering & edge deployment', proficiency: 96, highlight: true },
  { name: 'TypeScript', category: 'Frontend & Web', description: 'Strict type safety across the full stack', proficiency: 98, highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend & Web', description: 'Utility-first modern design token engine', proficiency: 95 },
  
  // Mobile & Native
  { name: 'React Native', category: 'Mobile & Native', description: 'Cross-platform unified mobile apps', proficiency: 96, highlight: true },
  { name: 'Expo Ecosystem', category: 'Mobile & Native', description: 'Modern framework for rapid React Native app delivery', proficiency: 94, highlight: true },
  { name: 'iOS & Android Bridges', category: 'Mobile & Native', description: 'Native modules & system APIs integrations', proficiency: 88 },
  
  // Extensions & Tooling
  { name: 'Chrome Extension APIs', category: 'Extensions & Tooling', description: 'Manifest V3 browser automation & tools', proficiency: 96, highlight: true },
  { name: 'VS Code Extension API', category: 'Extensions & Tooling', description: 'Custom IDE integrations & language tools', proficiency: 92, highlight: true },
  { name: 'GitHub Actions & CI/CD', category: 'Extensions & Tooling', description: 'Automated testing and release pipelines', proficiency: 94 },

  // Backend & Cloud
  { name: 'Node.js', category: 'Backend & Cloud', description: 'High-concurrency async server runtimes', proficiency: 94 },
  { name: 'PostgreSQL', category: 'Backend & Cloud', description: 'Relational database with strict integrity', proficiency: 92 },
  { name: 'Firebase & Firestore', category: 'Backend & Cloud', description: 'Real-time database and managed auth', proficiency: 95 },
  { name: 'REST & GraphQL APIs', category: 'Backend & Cloud', description: 'Contract-first high-speed endpoints', proficiency: 96 },

  // Creative 3D & Motion
  { name: 'GSAP & ScrollTrigger', category: 'Creative 3D & Motion', description: 'Cinematic timeline and scroll orchestration', proficiency: 98, highlight: true },
  { name: 'Three.js & WebGL', category: 'Creative 3D & Motion', description: 'Interactive 3D geometry & shaders', proficiency: 90, highlight: true },
  { name: 'Lenis Smooth Scroll', category: 'Creative 3D & Motion', description: 'Physics-based butter-smooth scrolling', proficiency: 95 },
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: 'Ankit',
    role: 'Founder & Lead Product Engineer',
    specialty: 'Full-Stack Architecture, React Native & Developer Tooling',
    bio: 'Obsessed with building tools and products that empower developers and users. Specializes in modern Web, Cross-Platform Mobile, and Extension ecosystems.',
    location: 'India → Global',
    github: 'https://github.com/Ankit628792',
    avatarSeed: 'ankit',
  },
  {
    name: 'Delanki Engineering Core',
    role: 'Product, Design & Systems Specialists',
    specialty: 'UI/UX Engineering, 3D WebGL, Cloud Infrastructure',
    bio: 'A multidisciplinary collective combining product design, systems engineering, and creative frontend craftsmanship.',
    location: 'Remote & Global',
    avatarSeed: 'core',
  },
];

export const METRICS_DATA: MetricItem[] = [
  { value: '25+', label: 'Products & Tools Built', detail: 'From concept to production launch' },
  { value: '100%', label: 'Focused Engineering', detail: 'Zero bureaucracy, direct founder communication' },
  { value: '4+', label: 'Specialized Platforms', detail: 'Web, Mobile, Chrome, VS Code' },
  { value: '< 2wk', label: 'Rapid MVP Sprint', detail: 'Fast discovery to working prototype' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What kind of projects does Delanki build?',
    answer:
      'We build full-stack web applications, cross-platform mobile apps (React Native & Expo), Chrome Extensions (Manifest V3), and VS Code developer extensions. We also build custom internal tools, AI copilot workflows, and high-performance digital products.',
    category: 'Development',
  },
  {
    question: 'Can I hire a dedicated developer instead of building an entire product?',
    answer:
      'Yes! Through our "Hire Talent" engagement, you can embed experienced Delanki engineers into your team for focused sprints, specific platform features, or long-term engineering bandwidth.',
    category: 'Engagement',
  },
  {
    question: 'Can you take an idea from zero to a live, shipped product?',
    answer:
      'Absolutely. Our "Build Your Product" track covers discovery, UX/UI design, technical architecture, frontend/backend engineering, QA testing, deployment, and post-launch maintenance.',
    category: 'Engagement',
  },
  {
    question: 'Do you build Chrome Extensions and VS Code Extensions?',
    answer:
      'Yes, browser and developer extensions are one of our core specialties. We build MV3-compliant Chrome extensions with rich DOM interactions and secure background workers, as well as custom VS Code extensions with language server capabilities.',
    category: 'Extensions',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'Our primary stack includes React, Next.js, React Native, TypeScript, Expo, Node.js, PostgreSQL, Firebase, GSAP, Three.js, and Chrome/VS Code Extension APIs.',
    category: 'Development',
  },
  {
    question: 'Do you work with early-stage startups and founders?',
    answer:
      'Yes! We love working with ambitious founders. We move fast, communicate clearly without bloated agency meetings, and prioritize shipping a high-quality product that real users can test.',
    category: 'Startups & Pricing',
  },
  {
    question: 'How do you structure pricing and timelines?',
    answer:
      'We offer flexible fixed-price milestone contracts for end-to-end product builds, or weekly/monthly sprint engagements for dedicated engineering talent. Timelines typically range from 2–4 weeks for extensions/MVPs to 8–12 weeks for comprehensive platforms.',
    category: 'Startups & Pricing',
  },
];
