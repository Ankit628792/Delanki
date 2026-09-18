/**
 * common.ts
 * Centralized common data, site configurations, company constants,
 * navigation routes, and brand tokens for Delanki Product Studio.
 */

export interface CompanyInfo {
  name: string;
  legalName: string;
  version: string;
  tagline: string;
  statement: string;
  year: string;
  established: string;
  email: string;
  founderName: string;
  founderRole: string;
  founderEmail: string;
  founderLinkedin: string;
  website: string;
  domain: string;
  linkedin: string;
  location: string;
  brandColor: string;
  status: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  target: string;
  isExternal?: boolean;
}

export interface SocialLinkItem {
  name: string;
  url: string;
  display: string;
  type: 'email' | 'linkedin' | 'website' | 'github';
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
    isRoute?: boolean;
  }[];
}

// -----------------------------------------------------------------------------
// 1. Studio & Company Core Data
// -----------------------------------------------------------------------------
export const COMPANY_DATA: CompanyInfo = {
  name: 'Delanki',
  legalName: 'Delanki Product Studio',
  version: '3.1.1',
  tagline: 'We Turn Ideas Into Digital Products.',
  statement: 'We build products people actually use.',
  year: 'Since 2023',
  established: 'Since 2023',
  email: 'ankit628792@gmail.com',
  founderName: 'Ankit',
  founderRole: 'Founder & Lead Product Engineer',
  founderEmail: 'ankit628792@gmail.com',
  founderLinkedin: 'https://www.linkedin.com/in/ankit628792',
  website: 'https://www.delanki.com',
  domain: 'www.delanki.com',
  linkedin: 'https://www.linkedin.com/in/ankit628792',
  location: 'Global / Remote',
  brandColor: '#F22952',
  status: 'Available for New Builds & Talent',
};

// -----------------------------------------------------------------------------
// 2. Site Configuration & Global Metadata
// -----------------------------------------------------------------------------
export const SITE_CONFIG = {
  name: COMPANY_DATA.name,
  legalName: COMPANY_DATA.legalName,
  url: COMPANY_DATA.website,
  domain: COMPANY_DATA.domain,
  title: `${COMPANY_DATA.name} — Digital Product Development Studio`,
  titleTemplate: `%s — ${COMPANY_DATA.name}`,
  description:
    'Delanki builds modern web apps, cross-platform applications, Chrome extensions, VS Code extensions, and digital products for ambitious teams.',
  keywords: [
    'Digital Product Studio',
    'Full Stack Web Development',
    'Chrome Extensions',
    'VS Code Extensions',
    'Cross-Platform Mobile Apps',
    'React Next.js TypeScript',
    'Product Engineering',
    'SaaS Development',
  ],
  logoDark: '/da-black.svg',
  logoWhite: '/da-white.svg',
  ogImage: '/da-black.svg',
  themeColor: '#090909',
  backgroundColor: '#070707',
  availabilityStatus: 'STUDIO READY // GLOBAL DISPATCH',
};

// -----------------------------------------------------------------------------
// 3. Navigation Links
// -----------------------------------------------------------------------------
export const NAV_LINKS: NavLinkItem[] = [
  { id: 'services', label: 'Services', href: '#services', target: '#services' },
  { id: 'products', label: 'Products', href: '#products', target: '#products' },
  { id: 'about', label: 'About', href: '#about', target: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact', target: '#contact' },
];

// -----------------------------------------------------------------------------
// 4. Social & Communication Channels
// -----------------------------------------------------------------------------
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'LinkedIn',
    url: COMPANY_DATA.linkedin,
    display: 'linkedin.com/in/ankit628792',
    type: 'linkedin',
  },
  {
    name: 'Email Founder',
    url: `mailto:${COMPANY_DATA.founderEmail}?subject=Project%20Inquiry%20-%20Delanki`,
    display: COMPANY_DATA.founderEmail,
    type: 'email',
  },
  {
    name: 'Official Website',
    url: COMPANY_DATA.website,
    display: COMPANY_DATA.domain,
    type: 'website',
  },
];

// -----------------------------------------------------------------------------
// 5. Footer Link Architecture
// -----------------------------------------------------------------------------
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: '// SERVICES',
    links: [
      { label: 'Web App Development', href: '#services' },
      { label: 'Cross-Platform Mobile', href: '#services' },
      { label: 'Chrome & VS Code Extensions', href: '#services' },
      { label: 'Cloud Architecture & DevOps', href: '#services' },
    ],
  },
  {
    title: '// PRODUCTS',
    links: [
      { label: 'Vectofi (Design Studio)', href: '/product/vectofi', isRoute: true },
      { label: 'Kurush-Yarn (E-Commerce)', href: '/product/kurush-yarn', isRoute: true },
      { label: 'Sticky Notes for VS Code', href: '/product/sticky-notes', isRoute: true },
      { label: 'View All 10 Products →', href: '/products', isRoute: true },
    ],
  },
  {
    title: '// STUDIO',
    links: [
      { label: 'Engineering Manifesto', href: '#manifesto' },
      { label: 'Delivery Process', href: '#process' },
      { label: 'Bento Capabilities', href: '#capabilities' },
      { label: 'Technology Orbit', href: '#technology' },
      { label: 'FAQ Matrix', href: '#faq' },
    ],
  },
  {
    title: '// LEGAL & CONNECT',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
      { label: 'LinkedIn // Founder', href: COMPANY_DATA.founderLinkedin, isExternal: true },
      { label: `Direct Mail: ${COMPANY_DATA.founderEmail}`, href: `mailto:${COMPANY_DATA.founderEmail}`, isExternal: true },
    ],
  },
];

// -----------------------------------------------------------------------------
// 6. Brand Design Tokens & Palette Constants
// -----------------------------------------------------------------------------
export const BRAND_TOKENS = {
  primary: '#F22952',
  primaryHover: '#D91F44',
  primaryMuted: 'rgba(242, 41, 82, 0.1)',
  bgCanvas: '#070707',
  bgSurface: '#0c0c0c',
  bgCard: '#121212',
  borderSubtle: 'rgba(255, 255, 255, 0.1)',
  borderActive: 'rgba(242, 41, 82, 0.3)',
  textPrimary: '#FFFFFF',
  textSecondary: '#B7B7B7',
  textTertiary: '#737373',
};

// -----------------------------------------------------------------------------
// 7. Product Catalog Metadata Categories
// -----------------------------------------------------------------------------
export const PRODUCT_CATEGORIES = [
  'All',
  'Web App',
  'Developer Tool',
  'Chrome Extension',
  'Mobile App',
  'VS Code Extension',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

// -----------------------------------------------------------------------------
// 8. Studio Engagement Modes
// -----------------------------------------------------------------------------
export const ENGAGEMENT_MODES = {
  BUILD: {
    id: 'build',
    label: 'Build a Product',
    headline: 'Full-Cycle Product Engineering',
    tagline: 'From blank canvas to production launch in 4–8 weeks.',
  },
  HIRE: {
    id: 'hire',
    label: 'Hire Talent',
    headline: 'Senior Engineering Augmentation',
    tagline: 'Embed seasoned senior product engineers directly into your sprints.',
  },
} as const;

// -----------------------------------------------------------------------------
// 9. Utility Helpers for Common Data
// -----------------------------------------------------------------------------
export const getMailtoUrl = (subject?: string, body?: string): string => {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const query = params.toString();
  return `mailto:${COMPANY_DATA.founderEmail}${query ? `?${query}` : ''}`;
};

export const getAbsoluteUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${COMPANY_DATA.website}${cleanPath}`;
};
