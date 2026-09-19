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
// 2. Navigation Links
// -----------------------------------------------------------------------------
export const NAV_LINKS: NavLinkItem[] = [
  { id: 'services', label: 'Services', href: '#services', target: '#services' },
  { id: 'products', label: 'Products', href: '#products', target: '#products' },
  { id: 'about', label: 'About', href: '#about', target: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact', target: '#contact' },
];

