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
 * 4a. Early Learner Privacy Policy SEO (/products/early-learner/privacy-policy)
 */
export const getEarlyLearnerPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Early Learner Privacy Policy — Children’s Data Safety & COPPA Compliance | Delanki',
    description:
      'Official privacy policy for Early Learner. 100% offline, zero data collection, zero third-party ads, and full COPPA & Google Play Families policy compliance.',
    keywords: [
      'Early Learner Privacy Policy',
      'COPPA Compliance',
      'Kids Learning App Privacy',
      'Children Data Protection',
      'Google Play Families Policy',
      'Offline Educational App',
      'Delanki Studio',
    ],
    canonicalPath: '/products/early-learner/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Early Learner Privacy Policy & COPPA Compliance',
      url: `${origin}/products/early-learner/privacy-policy`,
      description:
        'Official privacy policy for Early Learner educational app. Complies with COPPA, GDPR-Kids, and Google Play Families requirements.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4b. Respira Privacy Policy SEO (/products/respira/privacy-policy)
 */
export const getRespiraPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Respira Privacy Policy — Mindful Breathing & Health Data Standards | Delanki',
    description:
      'Official privacy policy for Respira. 100% offline-first, local Room database storage, zero biometric telemetry tracking, no ads, and non-diagnostic wellness standards.',
    keywords: [
      'Respira Privacy Policy',
      'Breathing App Privacy',
      'Mindfulness Data Standards',
      'Offline Health Privacy',
      'Room Database Android Privacy',
      'Non-Diagnostic Wellness',
      'Delanki Studio',
    ],
    canonicalPath: '/products/respira/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Respira Privacy Policy & Health Wellness Data Standards',
      url: `${origin}/products/respira/privacy-policy`,
      description:
        'Official privacy policy for Respira breathing assistant. Complete privacy with local Room database and zero biometric telemetry collection.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4c. Love Alarm 2.0 Privacy Policy SEO (/products/love-alarm/privacy-policy)
 */
export const getLoveAlarmPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Love Alarm 2.0 Privacy Policy — High-Precision Geolocation & Proximity Standards | Delanki',
    description:
      'Official privacy policy for Love Alarm 2.0. Ephemeral 10-meter proximity processing, socket synchronization, no location selling, and end-to-end user data controls.',
    keywords: [
      'Love Alarm Privacy Policy',
      'Proximity Location Privacy',
      '10-Meter Location Accuracy',
      'Socket IO Ephemeral Data',
      'Mobile App Location Security',
      'Delanki Studio',
    ],
    canonicalPath: '/products/love-alarm/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Love Alarm 2.0 Privacy Policy & Geolocation Standards',
      url: `${origin}/products/love-alarm/privacy-policy`,
      description:
        'Official privacy policy for Love Alarm 2.0 proximity app. High precision location engine standards and strict non-monetization of location data.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4d. AirBeam-Share Privacy Policy SEO (/products/airbeam-share/privacy-policy)
 */
export const getAirBeamSharePrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'AirBeam-Share Privacy Policy — Zero-Network Optical Transfer & Camera Safety | Delanki',
    description:
      'Official privacy policy for AirBeam-Share. 100% offline air-gapped file sharing, local optical QR stream scanning, zero network permissions, and private Room storage.',
    keywords: [
      'AirBeam Share Privacy Policy',
      'Air-gapped File Sharing Privacy',
      'Zero Network Transfer Safety',
      'Optical QR Stream Camera Privacy',
      'Offline Android Sandbox',
      'Delanki Studio',
    ],
    canonicalPath: '/products/airbeam-share/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'AirBeam-Share Privacy Policy & Air-gapped Optical Standards',
      url: `${origin}/products/airbeam-share/privacy-policy`,
      description:
        'Official privacy policy for AirBeam-Share offline file transfer app. Zero network communication, local optical QR scanning, and local sandbox data safety.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4e. Vectofi Privacy Policy SEO (/products/vectofi/privacy-policy)
 */
export const getVectofiPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Vectofi Privacy Policy — Client-Side Vector Engine & Asset Safety | Delanki',
    description:
      'Official privacy policy for Vectofi. 100% in-browser client-side vector processing, local browser storage, zero remote asset uploading, and strict SVG security.',
    keywords: [
      'Vectofi Privacy Policy',
      'SVG Editor Privacy',
      'Client-Side Vector Engine',
      'Browser Asset Security',
      'Zero Cloud Storage SVG',
      'Delanki Studio',
    ],
    canonicalPath: '/products/vectofi/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Vectofi Privacy Policy & Client-Side Asset Safety',
      url: `${origin}/products/vectofi/privacy-policy`,
      description:
        'Official privacy policy for Vectofi SVG icon laboratory. Client-side vector processing, local browser storage, zero asset telemetry.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4f. Kurush-Yarn Privacy Policy SEO (/products/kurush-yarn/privacy-policy)
 */
export const getKurushYarnPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Kurush-Yarn Privacy Policy — Tactile Art Exhibition & PWA Privacy | Delanki',
    description:
      'Official privacy policy for Kurush-Yarn. PWA offline caching, zero personal data collection, zero third-party trackers, and private WebGL interactive showcase.',
    keywords: [
      'Kurush Yarn Privacy Policy',
      'Textile Art Exhibition Privacy',
      'PWA Offline Data Privacy',
      'Zero Telemetry Web Gallery',
      'Delanki Studio',
    ],
    canonicalPath: '/products/kurush-yarn/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Kurush-Yarn Privacy Policy & Digital Gallery Data Standards',
      url: `${origin}/products/kurush-yarn/privacy-policy`,
      description:
        'Official privacy policy for Kurush-Yarn digital exhibition. Zero tracking, local PWA service worker caching, and complete viewer privacy.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4g. Qrazy Privacy Policy SEO (/products/qrazy/privacy-policy)
 */
export const getQrazyPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Qrazy Privacy Policy — Camera Verification & Anti-Counterfeit Safety | Delanki',
    description:
      'Official privacy policy for Qrazy. In-memory camera QR verification, opt-in privacy-preserving incident reporting, zero camera feed transmission, and brand safety.',
    keywords: [
      'Qrazy Privacy Policy',
      'QR Verification Privacy',
      'Camera API Data Safety',
      'Anti-Counterfeit Protection Privacy',
      'Delanki Studio',
    ],
    canonicalPath: '/products/qrazy/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Qrazy Privacy Policy & QR Verification Data Standards',
      url: `${origin}/products/qrazy/privacy-policy`,
      description:
        'Official privacy policy for Qrazy verification system. Ephemeral in-memory QR decoding, secure incident reporting, zero raw video storage.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4h. Sticky Notes for VS Code Privacy Policy SEO (/products/sticky-notes/privacy-policy)
 */
export const getStickyNotesPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Sticky Notes VS Code Privacy Policy — 100% Local Workspace Privacy | Delanki',
    description:
      'Official privacy policy for Sticky Notes for VS Code. 100% offline, local workspace state storage, zero network access, zero code telemetry, and complete developer privacy.',
    keywords: [
      'Sticky Notes VS Code Privacy Policy',
      'VS Code Extension Privacy',
      'Local Workspace Security',
      'Offline Developer Tool Privacy',
      'Zero Code Telemetry',
      'Delanki Studio',
    ],
    canonicalPath: '/products/sticky-notes/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Sticky Notes for VS Code Privacy Policy & Code Confidentiality',
      url: `${origin}/products/sticky-notes/privacy-policy`,
      description:
        'Official privacy policy for Sticky Notes VS Code extension. Local workspaceState storage, zero network activity, zero analytics.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4i. Jira & GitHub Linker Privacy Policy SEO (/products/jira-github-linker/privacy-policy)
 */
export const getJiraGitHubLinkerPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Jira & GitHub Linker Privacy Policy — Secure Token Storage & Enterprise Privacy | Delanki',
    description:
      'Official privacy policy for Jira & GitHub Linker. Local regex parsing, VS Code SecretStorage for access tokens, direct client-to-API requests, and zero intermediary servers.',
    keywords: [
      'Jira GitHub Linker Privacy Policy',
      'VS Code Extension Security',
      'SecretStorage Access Token Privacy',
      'Direct API Client Privacy',
      'Enterprise Code Confidentiality',
      'Delanki Studio',
    ],
    canonicalPath: '/products/jira-github-linker/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Jira & GitHub Linker Privacy Policy & SecretStorage Standards',
      url: `${origin}/products/jira-github-linker/privacy-policy`,
      description:
        'Official privacy policy for Jira & GitHub Linker VS Code extension. Local regex buffer parsing, SecretStorage encryption, zero telemetry.',
      publisher: {
        '@type': 'Organization',
        name: 'Delanki',
      },
    },
  };
};

/**
 * 4j. Syntax Storyteller Privacy Policy SEO (/products/syntax-storyteller/privacy-policy)
 */
export const getSyntaxStorytellerPrivacyPolicySEO = (): SEOConfig => {
  const origin = getSiteOrigin();
  return {
    title: 'Syntax Storyteller Privacy Policy — Local AST & Direct LLM Privacy | Delanki',
    description:
      'Official privacy policy for Syntax Storyteller. Local AST code parsing, user-managed SecretStorage API keys, direct client-to-provider LLM requests, and zero code retention.',
    keywords: [
      'Syntax Storyteller Privacy Policy',
      'AI Code Extension Privacy',
      'Direct LLM API Privacy',
      'SecretStorage API Key Protection',
      'Zero Code Retention',
      'Delanki Studio',
    ],
    canonicalPath: '/products/syntax-storyteller/privacy-policy',
    ogType: 'article',
    ogImage: `${origin}/da-black.svg`,
    twitterCard: 'summary_large_image',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Syntax Storyteller Privacy Policy & AI Code Confidentiality',
      url: `${origin}/products/syntax-storyteller/privacy-policy`,
      description:
        'Official privacy policy for Syntax Storyteller VS Code extension. Local AST parsing, direct user-owned API requests, zero prompt or code logging.',
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
