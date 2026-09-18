import { ProductItem } from '../types';
import { PRODUCTS_DATA, COMPANY_DATA } from '../data/siteData';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  publishedTime?: string;
  author?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_ORIGIN = 'https://www.delanki.com';

export const getSiteOrigin = (): string => {
  if (typeof window !== 'undefined' && window.location.origin) {
    const origin = window.location.origin;
    if (origin.includes('run.app') || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return DEFAULT_ORIGIN;
    }
    return origin;
  }
  return DEFAULT_ORIGIN;
};

/**
 * 1. Home Page SEO
 */
export const getHomeSEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Delanki — Digital Product Development Studio',
    description:
      'Delanki builds modern web apps, cross-platform mobile software, Chrome extensions, and VS Code tools for high-velocity teams. Explore our live products.',
    keywords: [
      'Delanki',
      'Digital Product Studio',
      'Web Development',
      'Mobile Apps',
      'VS Code Extensions',
      'Chrome Extensions',
      'React',
      'TypeScript',
      'Software Engineering',
      'Hire Engineers',
    ],
    canonicalPath: '/',
    ogType: 'website',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    author: 'Ankit, Delanki',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: COMPANY_DATA.name,
        legalName: COMPANY_DATA.legalName,
        url: origin,
        logo: `${origin}/da-black.svg`,
        description: COMPANY_DATA.statement,
        founder: {
          '@type': 'Person',
          name: COMPANY_DATA.founderName,
          jobTitle: COMPANY_DATA.founderRole,
          email: COMPANY_DATA.founderEmail,
          sameAs: [
            COMPANY_DATA.founderLinkedin,
            'https://github.com/Ankit628792',
          ],
        },
        sameAs: [COMPANY_DATA.linkedin],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Founder & Customer Support',
          email: COMPANY_DATA.founderEmail,
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Delanki',
        url: origin,
        description:
          'Delanki builds modern web applications, mobile platforms, and developer tooling.',
        publisher: {
          '@type': 'Organization',
          name: 'Delanki',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Delanki Digital Product Studio',
        url: origin,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Global / Remote',
        },
        serviceType: [
          'Web App Development',
          'Cross-Platform Mobile Apps',
          'Chrome Extensions',
          'VS Code Extensions',
          'Sprint Engineering Talent',
        ],
      },
    ],
  };
};

/**
 * 2. Products Catalog SEO (/products)
 */
export const getProductsCatalogSEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Products & Labs — Built by Delanki Studio',
    description:
      'Explore Delanki’s production-grade web applications, mobile apps, and VS Code extensions. Test live demos, inspect tech stacks, and read deep case studies.',
    keywords: [
      'Delanki Products',
      'Vectofi',
      'Sticky Notes VS Code',
      'Jira GitHub Linker',
      'Syntax Storyteller',
      'Early Learner',
      'Respira',
      'AirBeam-Share',
      'Developer Tools',
      'Open Source Software',
    ],
    canonicalPath: '/products',
    ogType: 'website',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Delanki Products & Developer Tools Directory',
      url: `${origin}/products`,
      description:
        'A comprehensive directory of software products and developer tools engineered by Delanki.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: PRODUCTS_DATA.map((product, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: product.title,
          url: `${origin}/product/${product.slug}`,
          description: product.tagline,
        })),
      },
    },
  };
};

/**
 * 3. Dynamic Product Case Study SEO (/product/$slug)
 */
export const getProductSEO = (product: ProductItem): SEOConfig => {
  const origin = getSiteOrigin();
  const canonicalUrl = `${origin}/product/${product.slug}`;

  // Tailored title: between 35 and 60 characters
  const pageTitle = `${product.title} — ${product.category} Case Study | Delanki`;

  // Tailored description: 120-160 characters with clear call to action
  let pageDesc = `${product.title}: ${product.tagline} Engineered with ${product.technologies.slice(0, 3).join(', ')}. Explore the case study and architecture breakdown.`;
  if (pageDesc.length > 160) {
    pageDesc = `${product.title}: ${product.tagline} Explore full case study, architecture, and live demo by Delanki.`;
  }
  if (pageDesc.length > 160) {
    pageDesc = pageDesc.substring(0, 157) + '...';
  }

  // Determine Schema.org Application Category & OS
  let appCategory = 'UtilitiesApplication';
  let operatingSystem = 'All (Web Browser)';

  if (product.category === 'Web App') {
    appCategory = 'WebApplication';
    operatingSystem = 'All (Modern Web Browsers)';
  } else if (product.category === 'Mobile App') {
    appCategory = 'MobileApplication';
    operatingSystem = 'Android, iOS, Cross-Platform';
  } else if (product.category === 'VS Code Extension') {
    appCategory = 'DeveloperApplication';
    operatingSystem = 'Visual Studio Code, Cursor (macOS, Windows, Linux)';
  }

  const schemaJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: product.title,
      headline: product.tagline,
      description: product.description,
      applicationCategory: appCategory,
      operatingSystem,
      softwareVersion: '1.0',
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'Delanki',
        url: origin,
      },
      creator: {
        '@type': 'Person',
        name: COMPANY_DATA.founderName,
        url: COMPANY_DATA.founderLinkedin,
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      keywords: [
        product.category,
        ...product.technologies,
        ...product.highlights,
      ].join(', '),
      downloadUrl: product.liveUrl || product.githubUrl || canonicalUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: origin,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: `${origin}/products`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      product.title,
      product.category,
      ...product.technologies,
      ...product.highlights,
      'Delanki Case Study',
      'Software Architecture',
    ],
    canonicalPath: `/product/${product.slug}`,
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    author: `${COMPANY_DATA.founderName}, Delanki`,
    schema: schemaJsonLd,
  };
};

/**
 * 4. Privacy Policy SEO (/privacy-policy)
 */
export const getPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Privacy Policy & Data Security Standards — Delanki',
    description:
      'Review Delanki’s privacy policy, data protection standards, strict code confidentiality commitments, and client security protocols.',
    keywords: [
      'Delanki Privacy Policy',
      'Data Protection',
      'Confidentiality Agreement',
      'Security Standards',
      'GDPR Compliance',
    ],
    canonicalPath: '/privacy-policy',
    ogType: 'website',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Delanki Privacy Policy & Data Security Standards',
      url: `${origin}/privacy-policy`,
      description: 'Privacy policy and data protection terms for Delanki Product Studio.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 5. Not Found / 404 Page SEO
 */
export const getNotFoundSEO = (): SEOConfig => {
  return {
    title: '404 Page Not Found — Delanki Product Studio',
    description:
      'The requested page or case study could not be located in Delanki studio’s registry. Return to home or explore our product directory.',
    noindex: true,
  };
};

/**
 * Core Head DOM Synchronizer:
 * Safely updates title, meta tags, canonical link, and JSON-LD structured data.
 */
export const applyDocumentSEO = (config: SEOConfig): void => {
  if (typeof document === 'undefined') return;

  const origin = getSiteOrigin();
  const canonicalUrl = config.canonicalPath
    ? `${origin}${config.canonicalPath}`
    : typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : origin;

  // 1. Update Title
  document.title = config.title;

  // 2. Helper to set or create meta tags by name or property
  const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attribute, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Standard Meta Tags
  setMeta('name', 'description', config.description);
  if (config.keywords && config.keywords.length > 0) {
    setMeta('name', 'keywords', config.keywords.join(', '));
  }
  if (config.author) {
    setMeta('name', 'author', config.author);
  }

  // Robots indexing directive
  if (config.noindex) {
    setMeta('name', 'robots', 'noindex, nofollow');
  } else {
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1');
  }

  // OpenGraph Tags
  setMeta('property', 'og:type', config.ogType || 'website');
  setMeta('property', 'og:title', config.title);
  setMeta('property', 'og:description', config.description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:site_name', 'Delanki');
  setMeta('property', 'og:image', config.ogImage || `${origin}/da-black.svg`);

  // Twitter / X Tags
  setMeta('name', 'twitter:card', config.twitterCard || 'summary_large_image');
  setMeta('name', 'twitter:title', config.title);
  setMeta('name', 'twitter:description', config.description);
  setMeta('name', 'twitter:url', canonicalUrl);
  setMeta('name', 'twitter:image', config.ogImage || `${origin}/da-black.svg`);

  // 3. Update or create <link rel="canonical">
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // 4. Update or create Schema.org JSON-LD structured data script
  const SCRIPT_ID = 'delanki-schema-ldjson';
  let scriptEl = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (config.schema) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = SCRIPT_ID;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(config.schema, null, 2);
  } else if (scriptEl) {
    scriptEl.remove();
  }
};
