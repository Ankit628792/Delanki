/**
 * Schema.org Builder for AEO & GEO
 * Generates verified, non-duplicate structured data linked via unambiguous @id nodes.
 */

import { PageType, QuestionAnswer, EntityDefinition } from './types';
import { ProductItem } from '../../types';
import { COMPANY_DATA } from '../../data/common';

export function buildComplementarySchemas(params: {
  pageType: PageType;
  canonicalUrl: string;
  questions: QuestionAnswer[];
  product?: ProductItem;
  primaryEntity: EntityDefinition;
  existingSchemas?: Array<Record<string, unknown>>;
}): Array<Record<string, unknown>> {
  const {
    pageType,
    canonicalUrl,
    questions,
    product,
    primaryEntity,
    existingSchemas = [],
  } = params;

  const existingTypes = new Set(
    existingSchemas
      .map((s) => (typeof s['@type'] === 'string' ? s['@type'] : ''))
      .filter(Boolean)
  );

  const schemas: Array<Record<string, unknown>> = [];

  // 1. FAQPage Schema (Only when questions genuinely exist and no existing FAQPage schema)
  if (questions.length > 0 && !existingTypes.has('FAQPage')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      url: canonicalUrl,
      mainEntity: questions.map((qa) => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer,
        },
      })),
    });
  }

  // 2. TechArticle / Case Study Schema for Product Pages (Complementing existing SoftwareApplication)
  if (pageType === 'product' && product && !existingTypes.has('TechArticle') && !existingTypes.has('Article')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      '@id': `${canonicalUrl}#case-study`,
      headline: `${product.title} Architecture & Engineering Breakdown`,
      description: product.description || product.tagline,
      inLanguage: 'en-US',
      url: canonicalUrl,
      datePublished: product.year ? `${product.year}-01-01` : '2026-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      author: {
        '@type': 'Person',
        name: COMPANY_DATA.founderName,
        url: COMPANY_DATA.founderLinkedin,
      },
      publisher: {
        '@type': 'Organization',
        name: COMPANY_DATA.name,
        url: 'https://www.delanki.com',
        logo: 'https://www.delanki.com/da-black.svg',
      },
      about: {
        '@type': 'SoftwareApplication',
        name: product.title,
        applicationCategory: product.category,
      },
      keywords: [
        product.category,
        ...product.technologies,
        ...product.highlights,
      ].join(', '),
    });
  }

  // 3. BreadcrumbList for Pages where existing schema omitted it
  if (!existingTypes.has('BreadcrumbList') && pageType !== 'home') {
    const itemListElement: Array<Record<string, unknown>> = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.delanki.com',
      },
    ];

    if (pageType === 'products-catalog') {
      itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${canonicalUrl}`,
      });
    } else if (pageType === 'privacy-policy') {
      itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Privacy Policy',
        item: `${canonicalUrl}`,
      });
    } else if (pageType === 'product' && product) {
      itemListElement.push(
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://www.delanki.com/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.title,
          item: canonicalUrl,
        }
      );
    }

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumbs`,
      itemListElement,
    });
  }

  return schemas;
}
