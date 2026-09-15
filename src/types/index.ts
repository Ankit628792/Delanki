export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  visualType: 'browser' | 'devices' | 'extension' | 'vscode';
  metrics?: { label: string; value: string }[];
}

export interface BentoCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  colSpan: string; // e.g. 'col-span-12 md:col-span-8'
  category: 'core' | 'engineering' | 'ai' | 'tooling' | 'ux';
  interactiveType?: 'code' | 'terminal' | 'stats' | 'extension' | 'devices' | 'api';
  badge?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Web App' | 'Developer Tool' | 'Chrome Extension' | 'Mobile App' | 'VS Code Extension';
  description: string;
  status: 'Live' | 'Beta' | 'In Production' | 'Open Source';
  technologies: string[];
  featuredImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  year: string;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend & Web' | 'Mobile & Native' | 'Extensions & Tooling' | 'Backend & Cloud' | 'Creative 3D & Motion';
  description: string;
  proficiency: number;
  highlight?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  location: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  avatarSeed: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Engagement' | 'Development' | 'Extensions' | 'Startups & Pricing';
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}
