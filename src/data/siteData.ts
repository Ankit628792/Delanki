import {
  ServiceItem,
  ProductItem,
  TechnologyItem,
  ProcessStep,
  TeamMember,
  FaqItem,
  MetricItem,
} from '../types';
import { COMPANY_DATA } from './common';

export { COMPANY_DATA };
export * from './common';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-apps',
    number: '01',
    title: 'Web Applications',
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
    title: 'Cross-Platform Apps',
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
    title: 'Chrome Extensions',
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
    title: 'VS Code Extensions',
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

export const PRODUCTS_DATA: ProductItem[] = [
  // WEB APPS
  {
    id: 'product-vectofi',
    slug: 'vectofi',
    title: 'Vectofi',
    tagline: 'Developer-first SVG icon library with interactive lab and code generators.',
    category: 'Web App',
    description:
      'An interactive vector icon system featuring static and animated icons, live laboratory editor, framework code generators, and clean design system tokens.',
    status: 'Live',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveUrl: 'https://vectofi.vercel.app/',
    highlights: [
      'Interactive SVG laboratory editor',
      'Static & animated icon suite',
      'Multi-framework code generator',
    ],
    year: '2026',
  },
  {
    id: 'product-kurush-yarn',
    slug: 'kurush-yarn',
    title: 'Kurush-Yarn',
    tagline: 'A soft-futuristic digital gallery showcasing handcrafted textile art.',
    category: 'Web App',
    description:
      'A web exhibition highlighting handcrafted textile objects built with Kurush and yarn, blending tactile art with smooth WebGL visual presentation.',
    status: 'Live',
    technologies: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'WebGL'],
    liveUrl: 'https://kurush-yarn.vercel.app/',
    highlights: [
      'Soft-futuristic WebGL interactive showcase',
      'PWA offline support',
      'Tactile digital art exhibition',
    ],
    year: '2026',
  },
  {
    id: 'product-qrazy',
    slug: 'qrazy',
    title: 'Qrazy (Prototype)',
    tagline: 'Smart QR verification system to protect brands from fake products.',
    category: 'Web App',
    description:
      'A smart QR application that helps consumers instantly verify product authenticity, report counterfeit goods to brand protection teams, and claim rewards.',
    status: 'Open Source',
    technologies: ['Next.js', 'Shadcn UI', 'TypeScript', 'Tailwind CSS', 'Mapbox GL'],
    githubUrl: 'https://github.com/Ankit628792/qrazy',
    highlights: [
      'Smart QR authenticity scanner',
      'Real-time counterfeit incident map',
      'Brand loyalty & rewards engine',
    ],
    year: '2024',
  },

  // MOBILE APPS
  {
    id: 'product-early-learner',
    slug: 'early-learner',
    title: 'Early Learner',
    tagline: 'Simple learning app for kids to explore alphabets, numbers, and drawing.',
    category: 'Mobile App',
    description:
      'A fun educational app that helps young kids learn Hindi Varnamala, English Alphabets, and Numbers through tracing, native audio sounds, and visual games.',
    status: 'Open Source',
    featured: true,
    technologies: ['React Native', 'Android', 'Material 3', 'SQLite Database', 'Kotlin'],
    githubUrl: 'https://github.com/Ankit628792/Early-Learner',
    highlights: [
      'Handwriting tracing canvas for letters',
      'Clear audio pronunciation for words',
      'Offline progress saved locally',
    ],
    year: '2026',
  },
  {
    id: 'product-love-alarm',
    slug: 'love-alarm',
    title: 'Love Alarm 2.0',
    tagline: 'Proximity alerts powered by a 10-meter accuracy location engine.',
    category: 'Mobile App',
    description:
      'A location-aware app that alerts users when someone within a high-precision 10-meter radius shares mutual interest, featuring real-time Socket.IO synchronization.',
    status: 'Live',
    technologies: ['React Native', 'MERN Stack', 'React Query', 'Socket.IO', 'Geolocation API'],
    liveUrl: 'https://lovealarm2.vercel.app/',
    highlights: [
      '10-meter high-precision radius accuracy',
      'Real-time Socket.IO mutual-interest alerts',
      'Optimized React Query location state',
    ],
    year: '2023',
  },
  {
    id: 'product-airbeam-share',
    slug: 'airbeam-share',
    title: 'AirBeam-Share',
    tagline: 'Air-gapped zero-network optical file sharing via animated QR code stream.',
    category: 'Mobile App',
    description:
      'A zero-network file sharing app that transfers files and photos across devices using an animated QR code stream scanned by the camera—100% offline.',
    status: 'Open Source',
    technologies: ['Jetpack Compose', 'Android', 'Camera API', 'Data Encoding', 'Room Database'],
    githubUrl: 'https://github.com/Ankit628792/AirBeam-Share',
    highlights: [
      'Air-gapped 100% offline file transfer',
      'Animated QR code stream encoder',
      'Local Room Database history',
    ],
    year: '2026',
  },
  {
    id: 'product-respira',
    slug: 'respira',
    title: 'Respira',
    tagline: 'Calming breathing assistant for daily relaxation and lung training.',
    category: 'Mobile App',
    description:
      'A simple breathing app with custom timers, visual guides, and gentle feedback to help you relax, focus, and improve lung capacity.',
    status: 'Open Source',
    technologies: ['Android', 'Jetpack Compose', 'Room Database', 'Kotlin', 'Audio Engine'],
    githubUrl: 'https://github.com/Ankit628792/Respira',
    highlights: [
      'Custom breathing timers and paces',
      'Gentle haptic vibration cues',
      'Calming ambient relaxation sounds',
    ],
    year: '2026',
  },

  // VS CODE EXTENSIONS
  {
    id: 'product-sticky-notes',
    slug: 'sticky-notes',
    title: 'Sticky Notes for VS Code',
    tagline: 'Manage inline sticky notes and TODO comments directly inside code editor.',
    category: 'VS Code Extension',
    description:
      'A lightweight extension that parses comments into an interactive color-coded badges, line navigation, and editor gutter indicators.',
    status: 'Live',
    featured: true,
    technologies: ['TypeScript', 'VS Code Extension API', 'Node.js', 'NPM'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Ankit628792.sticky-notes',
    highlights: [
      'Interactive sidebar panel',
      'Editor gutter badges',
      '2-way file navigation',
    ],
    year: '2025',
  },
  {
    id: 'product-jira-github-linker',
    slug: 'jira-github-linker',
    title: 'Jira & GitHub Linker',
    tagline: 'Instantly turn Jira tickets and GitHub issues/PRs into clickable links in VS Code.',
    category: 'VS Code Extension',
    description:
      'Automatically converts inline Jira ticket references (e.g., PROJ-123) and GitHub issues or PRs into clickable links with hover previews and keyboard commands.',
    status: 'Live',
    technologies: ['TypeScript', 'VS Code Extension API', 'JavaScript', 'esbuild'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Ankit628792.jira-github-linker',
    highlights: [
      'Clickable Jira & GitHub references',
      'Hover & CodeLens quick actions',
      'Keyboard-driven command workflow',
    ],
    year: '2025',
  },
  {
    id: 'product-syntax-storyteller',
    slug: 'syntax-storyteller',
    title: 'Syntax Storyteller',
    tagline: 'Bring your code to life with creative, narrative-style comments.',
    category: 'VS Code Extension',
    description:
      'Wraps selected code snippets in creative narrative comments—turning dry functions into stories across 13+ genres including Fantasy, Sci-Fi, Noir, and Shakespeare.',
    status: 'Live',
    technologies: ['TypeScript', 'VS Code Extension API', 'Node.js', 'AST Parser'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Ankit628792.syntax-storyteller',
    highlights: [
      '13+ narrative writing genres',
      'Command Palette & context menu trigger',
      'Instant code-to-story comment generator',
    ],
    year: '2025',
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
  { name: 'React.js', category: 'Frontend & Web', description: 'Modern reactive component architecture', proficiency: 98, highlight: true },
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
    linkedin: 'https://www.linkedin.com/in/ankit628792',
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

