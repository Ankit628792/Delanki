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
  year: 'Since 2023',
  established: 'Since 2023',
  email: 'hello@delanki.com',
  website: import.meta.env.VITE_APP_URL || 'https://delanki.vercel.com',
  github: 'https://github.com/Ankit628792/Delanki',
  location: 'Global / Remote',
  brandColor: '#F22952',
  status: 'Available for New Builds & Talent',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-apps',
    number: '01',
    title: 'Web App Development',
    tagline: 'Fast, resilient architectures built for scale and conversion.',
    description:
      'We engineer full-stack web applications, SaaS platforms, and data dashboards optimized for speed, accessible UI, and clean code bases.',
    capabilities: [
      'Modern React, Next.js & TypeScript',
      'High-throughput SaaS Architecture',
      'Real-time WebSockets & State Sync',
      'Sub-second Performance Optimization',
      'Admin Systems & Data Visualizations',
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
    id: 'cross-platform',
    number: '02',
    title: 'Cross-Platform App Development',
    tagline: 'Tactile cross-platform apps for mobile, tablet, and desktop.',
    description:
      'We craft cross-platform mobile apps using React Native and Expo, featuring fluid micro-interactions, offline caching, and native hardware integrations.',
    capabilities: [
      'React Native for iOS & Android',
      'Expo Application Delivery',
      'Offline-First Sync & Caching',
      'Biometric, Camera & Sensor APIs',
      'Micro-animations & 120Hz Haptics',
      'App Store & Play Store Deployment',
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
    tagline: 'Deep browser integrations and productivity tools inside the tab.',
    description:
      'We build secure Manifest V3 browser extensions, including AI copilot sidebars, workflow automators, web scrapers, and page-level enhancements.',
    capabilities: [
      'Manifest V3 & Background Service Workers',
      'DOM Mutation & Page Context Injection',
      'AI Assistant & LLM Context Integrations',
      'Web Clipboard & Automation Pipelines',
      'Secure Cross-Origin API Proxies',
      'Chrome Store Review & Launch',
    ],
    technologies: ['Chrome Extension APIs', 'Manifest V3', 'TypeScript', 'Tailwind CSS', 'Chrome Storage API'],
    visualType: 'extension',
    metrics: [
      { label: 'Store Standard', value: 'MV3 Strict' },
      { label: 'RAM Footprint', value: '< 25 MB' },
    ],
  },
  {
    id: 'vscode-extensions',
    number: '04',
    title: 'VS Code Extension Development',
    tagline: 'Custom developer tools built directly inside the code editor.',
    description:
      'We build extensions for VS Code and Cursor that eliminate boilerplate, enforce code patterns, provide language servers, and streamline editor workflows.',
    capabilities: [
      'Language Server Protocol (LSP) & AST Tools',
      'Custom Webview Panels & Editor UIs',
      'Inline Code Diagnostics & Quick Fixes',
      'Tree Views, Sidebars & Custom Commands',
      'AI Code Completion & Prompt Tools',
      'VS Code Marketplace Packaging',
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
    description: 'We translate complex requirements into robust, production-tested software with clean architecture.',
    colSpan: 'col-span-12 lg:col-span-7',
    category: 'core',
    interactiveType: 'code',
    badge: 'CORE PILLAR',
  },
  {
    id: 'bento-ai-integrations',
    title: 'AI & Copilot Workflows',
    subtitle: 'Context-Aware Intelligence',
    description: 'Custom LLM agents, local embeddings, vector search, and automated document processing.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-5',
    category: 'ai',
    interactiveType: 'terminal',
    badge: 'INTELLIGENCE',
  },
  {
    id: 'bento-extensions',
    title: 'Browser & Editor Tools',
    subtitle: 'Extensions at Scale',
    description: 'Bespoke tools built into Chrome tabs and VS Code workspaces for daily developer productivity.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    category: 'tooling',
    interactiveType: 'extension',
    badge: 'ECOSYSTEM',
  },
  {
    id: 'bento-mobile-web',
    title: 'Cross-Platform Precision',
    subtitle: 'React Native + Web Synergy',
    description: 'Consistent user experiences across iOS, Android, and web browsers with shared design tokens.',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    category: 'engineering',
    interactiveType: 'devices',
    badge: 'ADAPTIVE',
  },
  {
    id: 'bento-performance',
    title: 'Performance & APIs',
    subtitle: 'Zero-Jank Reliability',
    description: 'Edge-rendered pages, sub-millisecond database queries, optimized WebGL, and secure APIs.',
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
    tagline: 'Developer productivity monitor & PR assistant for GitHub.',
    category: 'Chrome Extension',
    description:
      'A browser extension that analyzes pull requests, flags performance regressions, and tracks CI status directly in the toolbar.',
    status: 'Live',
    technologies: ['Manifest V3', 'TypeScript', 'GitHub REST API', 'Tailwind CSS'],
    highlights: ['1-click PR audit', 'Local token security', 'Zero background battery drain'],
    year: '2023',
  },
  {
    id: 'product-syncwave',
    title: 'Nova Dashboard Engine',
    tagline: 'Real-time telemetry and state workspace for distributed teams.',
    category: 'Web App',
    description:
      'A web application delivering real-time metrics streaming, custom query builders, and collaborative multi-user canvases.',
    status: 'In Production',
    technologies: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Sub-100ms sync latency', 'Modular widget grid', 'Automated alerts'],
    year: '2025',
  },
  {
    id: 'product-codecraft',
    title: 'Syntax Studio for VS Code',
    tagline: 'Intelligent snippet generator and context inspector for code workflows.',
    category: 'VS Code Extension',
    description:
      'An editor integration providing architectural suggestions, AST-based refactorings, and interactive markdown previews.',
    status: 'Open Source',
    technologies: ['VS Code Extension API', 'TypeScript', 'AST Parser', 'Node.js'],
    highlights: ['Instant AST diagnostics', 'Custom command palettes', 'Zero configuration'],
    year: '2024-2025',
  },
  {
    id: 'product-orbitmobile',
    title: 'Aura Mobile Experience',
    tagline: 'Cross-platform lifestyle & habit tracker built in React Native.',
    category: 'Mobile App',
    description:
      'A mobile app featuring fluid haptics, gesture navigation, encrypted offline storage, and daily productivity widgets.',
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
    tagline: 'Deconstruct the problem space before writing code.',
    description:
      'We analyze user workflows, technical constraints, and market benchmarks to define the core value loop and eliminate friction.',
    deliverables: ['Architecture Blueprint', 'User Journey Map', 'Milestone Roadmap', 'Tech Stack Selection'],
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'DEFINE',
    tagline: 'Shape the scope, wireframes, and design system.',
    description:
      'We design component systems, API contracts, data schemas, and interactive prototypes with clear edge case handling.',
    deliverables: ['Design System', 'Schema & API Specs', 'Interactive Prototype', 'Security Architecture'],
    duration: 'Week 2',
  },
  {
    number: '03',
    title: 'BUILD',
    tagline: 'Iterative engineering with continuous deployment.',
    description:
      'We build in rapid weekly sprints with preview environments, strict TypeScript typing, automated testing, and continuous feedback.',
    deliverables: ['Staging Previews', 'Modular Codebase', 'Automated Test Suite', 'Weekly Demos'],
    duration: 'Weeks 3–8',
  },
  {
    number: '04',
    title: 'LAUNCH',
    tagline: 'Zero-downtime deployment, observability, and post-launch iteration.',
    description:
      'We handle DNS switchovers, load testing, store submissions, and telemetry monitoring, continuously optimizing post-launch.',
    deliverables: ['Cloud Deployment', 'Store Release', 'Telemetry & Monitoring', 'Knowledge Handover'],
    duration: 'Final Sprint',
  },
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  // Frontend & Web
  { name: 'React 19', category: 'Frontend & Web', description: 'Modern reactive component architecture', proficiency: 98, highlight: true },
  { name: 'Next.js', category: 'Frontend & Web', description: 'Server-side rendering & edge deployment', proficiency: 96, highlight: true },
  { name: 'TypeScript', category: 'Frontend & Web', description: 'Strict type safety across the stack', proficiency: 98, highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend & Web', description: 'Utility-first design token engine', proficiency: 95 },
  
  // Mobile & Native
  { name: 'React Native', category: 'Mobile & Native', description: 'Cross-platform unified mobile apps', proficiency: 96, highlight: true },
  { name: 'Expo Ecosystem', category: 'Mobile & Native', description: 'Framework for rapid mobile delivery', proficiency: 94, highlight: true },
  { name: 'iOS & Android Bridges', category: 'Mobile & Native', description: 'Native modules & system APIs', proficiency: 88 },
  
  // Extensions & Tooling
  { name: 'Chrome Extension APIs', category: 'Extensions & Tooling', description: 'Manifest V3 browser automation & tools', proficiency: 96, highlight: true },
  { name: 'VS Code Extension API', category: 'Extensions & Tooling', description: 'Custom IDE integrations & language tools', proficiency: 92, highlight: true },
  { name: 'GitHub Actions & CI/CD', category: 'Extensions & Tooling', description: 'Automated testing & release pipelines', proficiency: 94 },

  // Backend & Cloud
  { name: 'Node.js', category: 'Backend & Cloud', description: 'High-concurrency async server runtimes', proficiency: 94 },
  { name: 'PostgreSQL', category: 'Backend & Cloud', description: 'Relational database with strict integrity', proficiency: 92 },
  { name: 'Firebase & Firestore', category: 'Backend & Cloud', description: 'Real-time database and managed auth', proficiency: 95 },
  { name: 'REST & GraphQL APIs', category: 'Backend & Cloud', description: 'Contract-first high-speed endpoints', proficiency: 96 },

  // Creative 3D & Motion
  { name: 'GSAP & ScrollTrigger', category: 'Creative 3D & Motion', description: 'Cinematic timeline and scroll orchestration', proficiency: 98, highlight: true },
  { name: 'Three.js & WebGL', category: 'Creative 3D & Motion', description: 'Interactive 3D geometry & shaders', proficiency: 90, highlight: true },
  { name: 'Lenis Smooth Scroll', category: 'Creative 3D & Motion', description: 'Physics-based smooth scrolling', proficiency: 95 },
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: 'Ankit',
    role: 'Founder & Lead Product Engineer',
    specialty: 'Full-Stack Architecture, React Native & Developer Tooling',
    bio: 'Passionate about building tools that empower developers and users. Specializes in Web, Cross-Platform Mobile, and Extensions.',
    location: 'Global',
    github: 'https://github.com/Ankit628792',
    avatarSeed: 'ankit',
  },
  {
    name: 'Delanki Engineering Core',
    role: 'Product, Design & Systems Specialists',
    specialty: 'UI/UX Engineering, 3D WebGL, Cloud Infrastructure',
    bio: 'A multidisciplinary team combining product design, systems engineering, and creative frontend craftsmanship.',
    location: 'Remote & Global',
    avatarSeed: 'core',
  },
];

export const METRICS_DATA: MetricItem[] = [
  { value: '25+', label: 'Products & Tools Built', detail: 'From concept to production launch' },
  { value: '100%', label: 'Focused Engineering', detail: 'Direct communication with founders' },
  { value: '4+', label: 'Specialized Platforms', detail: 'Web, Mobile, Chrome, VS Code' },
  { value: '< 2wk', label: 'Rapid MVP Sprint', detail: 'Fast discovery to working prototype' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What kind of projects does Delanki build?',
    answer:
      'We build web apps, cross-platform mobile apps (React Native & Expo), Chrome Extensions (Manifest V3), and VS Code developer extensions.',
    category: 'Development',
  },
  {
    question: 'Can I hire a dedicated developer instead of building an entire product?',
    answer:
      'Yes. Through our "Hire Talent" track, you can embed experienced Delanki engineers into your team for focused sprints or ongoing engineering support.',
    category: 'Engagement',
  },
  {
    question: 'Can you take an idea from zero to a live, shipped product?',
    answer:
      'Yes. Our "Build Your Product" track covers discovery, UI/UX design, architecture, full-stack engineering, testing, and deployment.',
    category: 'Engagement',
  },
  {
    question: 'Do you build Chrome Extensions and VS Code Extensions?',
    answer:
      'Yes. Browser and developer extensions are our core specialty. We build MV3-compliant Chrome extensions and feature-rich VS Code extensions.',
    category: 'Extensions',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'Our primary stack includes React, Next.js, React Native, TypeScript, Expo, Node.js, PostgreSQL, Firebase, GSAP, Three.js, and Extension APIs.',
    category: 'Development',
  },
  {
    question: 'Do you work with early-stage startups and founders?',
    answer:
      'Yes. We move fast, communicate clearly without agency bloat, and prioritize shipping high-quality products to market.',
    category: 'Startups & Pricing',
  },
  {
    question: 'How do you structure pricing and timelines?',
    answer:
      'We offer fixed-price milestone contracts for product builds and sprint engagements for dedicated talent. Timelines range from 2–4 weeks for MVPs/extensions to 8–12 weeks for complex platforms.',
    category: 'Startups & Pricing',
  },
];

