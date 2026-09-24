/**
 * Deterministic Knowledge Graph & AEO/GEO Content Extractor
 * Extracts genuine entities, relationships, direct answers, and Q&As strictly from verified app data.
 */

import {
  PageType,
  EntityDefinition,
  EntityRelationship,
  AttributeEntry,
  OptimizationInput,
} from './types';
import { COMPANY_DATA } from '../../data/common';
import {
  PRODUCTS_DATA,
  SERVICES_DATA,
  FAQ_DATA,
  METRICS_DATA,
} from '../../data/siteData';
import { ProductItem } from '../../types';

export function resolvePageType(routePath: string): PageType {
  const cleanPath = routePath.split('?')[0].replace(/\/+$/, '') || '/';
  if (cleanPath === '/') return 'home';
  if (cleanPath === '/products') return 'products-catalog';
  if (cleanPath.startsWith('/product/')) return 'product';
  if (cleanPath.includes('privacy-policy')) return 'privacy-policy';
  if (cleanPath === '/404') return 'not-found';
  return 'home';
}

/**
 * Extracts Primary Entity for the page
 */
export function extractPrimaryEntity(
  pageType: PageType,
  product?: ProductItem,
  origin: string = 'https://www.delanki.com'
): EntityDefinition {
  if (pageType === 'product' && product) {
    let type = 'SoftwareApplication';
    if (product.category === 'Web App') type = 'WebApplication';
    else if (product.category === 'Mobile App') type = 'MobileApplication';
    else if (product.category.includes('Extension')) type = 'DeveloperApplication';

    return {
      name: product.title,
      type,
      description: product.description || product.tagline,
      url: `${origin}/product/${product.slug}`,
      attributes: {
        category: product.category,
        status: product.status,
        year: product.year || '2026',
        isFeatured: Boolean(product.featured),
        openSource: Boolean(product.githubUrl),
      },
    };
  }

  if (pageType === 'products-catalog') {
    return {
      name: 'Delanki Software Portfolio',
      type: 'CollectionPage',
      description:
        'Official software registry and engineering showcase of web applications, mobile platforms, and developer tooling built by Delanki.',
      url: `${origin}/products`,
      attributes: {
        totalProducts: PRODUCTS_DATA.length,
        platformsCovered: 'Web, Android, iOS, Chrome Extensions, VS Code',
      },
    };
  }

  if (pageType === 'privacy-policy') {
    return {
      name: 'Delanki Privacy & Data Protection Standards',
      type: 'DigitalDocument',
      description:
        'Official data privacy protocols, COPPA compliance commitments, zero-telemetry architectures, and client code confidentiality standards.',
      url: `${origin}/privacy-policy`,
      attributes: {
        gdprCompliant: true,
        coppaCompliant: true,
        telemetryTracking: 'Zero / None',
      },
    };
  }

  // Default: Homepage / Delanki Studio
  return {
    name: COMPANY_DATA.name,
    type: 'Organization',
    description: COMPANY_DATA.statement,
    url: origin,
    sameAs: [
      COMPANY_DATA.founderLinkedin,
      'https://github.com/Ankit628792',
    ],
    attributes: {
      founder: COMPANY_DATA.founderName,
      leadRole: COMPANY_DATA.founderRole,
      established: '2024',
      productsShipped: METRICS_DATA[0]?.value || '25+',
    },
  };
}

/**
 * Extracts Secondary Entities referenced on the page
 */
export function extractSecondaryEntities(
  pageType: PageType,
  product?: ProductItem
): EntityDefinition[] {
  const entities: EntityDefinition[] = [
    {
      name: COMPANY_DATA.name,
      type: 'Organization',
      description: 'Digital product engineering studio specializing in web, mobile, and developer tooling.',
      url: 'https://www.delanki.com',
    },
    {
      name: COMPANY_DATA.founderName,
      type: 'Person',
      description: `${COMPANY_DATA.founderRole} of Delanki, specialized in full-stack architecture, React Native, and browser extensions.`,
      sameAs: [COMPANY_DATA.founderLinkedin],
    },
  ];

  if (pageType === 'product' && product) {
    // Add technologies as technical entities
    product.technologies.forEach((tech) => {
      entities.push({
        name: tech,
        type: 'ComputerLanguageOrFramework',
        description: `Core technology powering ${product.title}.`,
      });
    });

    if (product.liveUrl) {
      entities.push({
        name: `${product.title} Live Deployment`,
        type: 'WebSite',
        description: `Live production instance of ${product.title}.`,
        url: product.liveUrl,
      });
    }

    if (product.githubUrl) {
      entities.push({
        name: `${product.title} Repository`,
        type: 'SoftwareSourceCode',
        description: `Public open-source repository for ${product.title}.`,
        url: product.githubUrl,
      });
    }
  } else if (pageType === 'home' || pageType === 'products-catalog') {
    // Add featured products as entities
    PRODUCTS_DATA.slice(0, 5).forEach((p) => {
      entities.push({
        name: p.title,
        type: 'SoftwareApplication',
        description: p.tagline,
        url: `https://www.delanki.com/product/${p.slug}`,
      });
    });

    // Add service disciplines
    SERVICES_DATA.forEach((s) => {
      entities.push({
        name: s.title,
        type: 'Service',
        description: s.tagline,
      });
    });
  }

  return entities;
}

/**
 * Generates concise authoritative Direct Answer (AEO)
 */
export function extractDirectAnswer(
  pageType: PageType,
  product?: ProductItem,
  existingDescription?: string
): string {
  if (pageType === 'product' && product) {
    return `${product.title} is a ${product.category.toLowerCase()} engineered by Delanki. ${product.tagline} Built using ${product.technologies.slice(0, 3).join(', ')}, it delivers ${product.highlights[0] || 'high-performance execution'}.`;
  }

  if (pageType === 'products-catalog') {
    return `The Delanki Products Directory showcases ${PRODUCTS_DATA.length} production applications, mobile platforms, and developer extensions engineered by Delanki, including Vectofi, AirBeam-Share, Early Learner, and Respira.`;
  }

  if (pageType === 'privacy-policy') {
    return `Delanki adheres to strict offline-first, zero-telemetry data standards. Our consumer products operate locally on user devices without tracking, third-party advertising, or unauthorized data transmission.`;
  }

  return existingDescription ||
    'Delanki is a digital product engineering studio founded by Ankit. Delanki designs and ships resilient web applications, mobile platforms, Chrome extensions, and VS Code developer tools.';
}

/**
 * Extracts Q&A pairs (AEO & GEO) strictly backed by page content
 */
export function extractQuestionsAndAnswers(
  pageType: PageType,
  product?: ProductItem
): Array<{ question: string; answer: string; category?: string }> {
  if (pageType === 'product' && product) {
    const list: Array<{ question: string; answer: string; category?: string }> = [
      {
        question: `What is ${product.title}?`,
        answer: `${product.title} is a ${product.category.toLowerCase()} developed by Delanki. ${product.description || product.tagline}`,
        category: 'Overview',
      },
      {
        question: `What technologies are used in ${product.title}?`,
        answer: `${product.title} is built with ${product.technologies.join(', ')}.`,
        category: 'Architecture',
      },
      {
        question: `What are the key features of ${product.title}?`,
        answer: `${product.title} highlights include: ${product.highlights.join('; ')}.`,
        category: 'Features',
      },
    ];

    if (product.liveUrl) {
      list.push({
        question: `Where can I use or download ${product.title}?`,
        answer: `You can access ${product.title} directly at ${product.liveUrl}.`,
        category: 'Availability',
      });
    }

    if (product.githubUrl) {
      list.push({
        question: `Is ${product.title} open source?`,
        answer: `Yes, the source code for ${product.title} is hosted on GitHub at ${product.githubUrl}.`,
        category: 'Open Source',
      });
    }

    return list;
  }

  if (pageType === 'home') {
    return FAQ_DATA.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
    }));
  }

  if (pageType === 'products-catalog') {
    return [
      {
        question: 'What types of software does Delanki build?',
        answer: 'Delanki builds full-stack web applications, cross-platform mobile apps (React Native), Manifest V3 Chrome extensions, and Visual Studio Code developer tools.',
        category: 'Portfolio',
      },
      {
        question: 'Are Delanki products publicly accessible?',
        answer: 'Yes, our products feature live demos, web application URLs, and public GitHub source repositories for transparent review.',
        category: 'Access',
      },
      {
        question: 'Can I hire Delanki to build a similar software product?',
        answer: 'Yes. Delanki partners with founders and engineering teams through full product builds or dedicated engineering sprint contracts.',
        category: 'Services',
      },
    ];
  }

  if (pageType === 'privacy-policy') {
    return [
      {
        question: 'Does Delanki collect personal identifiable information (PII)?',
        answer: 'No. Delanki apps and mobile utilities are designed with an offline-first architecture, storing user preferences locally on the client device without telemetry tracking.',
        category: 'Data Privacy',
      },
      {
        question: 'Are Delanki apps compliant with children’s privacy standards (COPPA)?',
        answer: 'Yes. Apps such as Early Learner strictly comply with COPPA, GDPR-Kids, and Google Play Families requirements with zero third-party ads and zero biometric telemetry.',
        category: 'Compliance',
      },
      {
        question: 'How is code and proprietary product data protected during client engagements?',
        answer: 'Delanki adheres to strict non-disclosure agreements (NDAs) and confidentiality standards. All intellectual property, source repositories, and deployment pipelines belong 100% to the client.',
        category: 'Confidentiality',
      },
    ];
  }

  return [];
}

/**
 * Extracts Key Facts (AEO & GEO)
 */
export function extractKeyFacts(pageType: PageType, product?: ProductItem): string[] {
  if (pageType === 'product' && product) {
    const facts = [
      `${product.title} is classified as a ${product.category}.`,
      `Engineered with ${product.technologies.slice(0, 3).join(', ')}.`,
      `Primary capability: ${product.highlights[0] || product.tagline}`,
      `Engineered and maintained by Delanki Product Studio.`,
    ];
    if (product.year) facts.push(`Released / Updated in ${product.year}.`);
    if (product.status) facts.push(`Deployment status: ${product.status}.`);
    return facts;
  }

  if (pageType === 'products-catalog') {
    return [
      `Directory contains ${PRODUCTS_DATA.length} active software products.`,
      `Covers 4 specialized platforms: Web Applications, Mobile Apps, Chrome Extensions, and VS Code Extensions.`,
      `All listed products feature verified production demos or open-source GitHub codebases.`,
    ];
  }

  if (pageType === 'privacy-policy') {
    return [
      '100% offline-first local data storage where applicable.',
      'Zero unauthorized tracking or advertising SDKs.',
      'Full compliance with COPPA, GDPR, and Google Play Families guidelines.',
      'Explicit client IP and repository confidentiality on all custom software engagements.',
    ];
  }

  // Home page facts
  return [
    `Delanki is a digital product development studio founded by ${COMPANY_DATA.founderName}.`,
    `Over ${METRICS_DATA[0]?.value || '25+'} products and developer tools built.`,
    `Specializes in React, Next.js, TypeScript, React Native, and Browser Extension APIs.`,
    `Delivers two engagement models: "Build Your Product" (end-to-end) and "Hire Talent" (dedicated sprint engineers).`,
  ];
}

/**
 * Extracts Entity Relationships for Generative Engines (GEO)
 */
export function extractRelationships(
  pageType: PageType,
  product?: ProductItem
): EntityRelationship[] {
  const relationships: EntityRelationship[] = [
    {
      subject: COMPANY_DATA.name,
      predicate: 'foundedBy',
      object: COMPANY_DATA.founderName,
    },
    {
      subject: COMPANY_DATA.name,
      predicate: 'headquartersLocation',
      object: 'Global / Remote',
    },
  ];

  if (pageType === 'product' && product) {
    relationships.push({
      subject: COMPANY_DATA.name,
      predicate: 'engineers',
      object: product.title,
    });

    product.technologies.forEach((tech) => {
      relationships.push({
        subject: product.title,
        predicate: 'implements',
        object: tech,
      });
    });

    relationships.push({
      subject: product.title,
      predicate: 'belongsToCategory',
      object: product.category,
    });

    if (product.liveUrl) {
      relationships.push({
        subject: product.title,
        predicate: 'deployedAt',
        object: product.liveUrl,
      });
    }
  } else {
    // Add product links
    PRODUCTS_DATA.forEach((p) => {
      relationships.push({
        subject: COMPANY_DATA.name,
        predicate: 'engineers',
        object: p.title,
      });
    });

    SERVICES_DATA.forEach((s) => {
      relationships.push({
        subject: COMPANY_DATA.name,
        predicate: 'offersService',
        object: s.title,
      });
    });
  }

  return relationships;
}

/**
 * Extracts Technical Attributes for Generative Search
 */
export function extractAttributes(pageType: PageType, product?: ProductItem): AttributeEntry[] {
  if (pageType === 'product' && product) {
    return [
      { name: 'Application Category', value: product.category },
      { name: 'Primary Tech Stack', value: product.technologies.join(', ') },
      { name: 'Release Status', value: product.status || 'Active' },
      { name: 'Featured Project', value: product.featured ? 'Yes' : 'No' },
      { name: 'Open Source', value: product.githubUrl ? 'Yes (GitHub)' : 'Proprietary' },
      { name: 'Architecture', value: product.highlights.join(' | ') },
    ];
  }

  return [
    { name: 'Organization Name', value: COMPANY_DATA.name },
    { name: 'Founder & Lead Engineer', value: COMPANY_DATA.founderName },
    { name: 'Primary Engineering Focus', value: 'Web Apps, Cross-Platform Mobile, Chrome & VS Code Extensions' },
    { name: 'Client Engagement Tracks', value: 'Build Your Product & Hire Dedicated Talent' },
    { name: 'Average Lighthouse Score', value: '98/100' },
  ];
}
