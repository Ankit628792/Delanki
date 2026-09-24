/**
 * Dynamic AEO & GEO Generator
 * Primary entry point: analyze page context, generate normalized optimization data,
 * validate against schema rules, and cache results for sub-millisecond lookups.
 */

import {
  OptimizationInput,
  PageOptimizationData,
  EntityDefinition,
} from './types';
import {
  resolvePageType,
  extractPrimaryEntity,
  extractSecondaryEntities,
  extractDirectAnswer,
  extractQuestionsAndAnswers,
  extractKeyFacts,
  extractRelationships,
  extractAttributes,
} from './extractors';
import { buildComplementarySchemas } from './schema-builder';
import { validateOptimizationData } from './validators';
import { COMPANY_DATA } from '../../data/common';
import { PRODUCTS_DATA } from '../../data/siteData';

// In-memory cache for fast lookups and SSR re-use
const cache = new Map<string, PageOptimizationData>();

/**
 * Generates a simple, fast content hash
 */
function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

/**
 * Public Cache Invalidation API
 */
export function invalidateOptimizationCache(routePath?: string): void {
  if (routePath) {
    for (const key of cache.keys()) {
      if (key.startsWith(routePath)) {
        cache.delete(key);
      }
    }
  } else {
    cache.clear();
  }
}

/**
 * Primary Generator function: generateOptimizationData(input)
 */
export function generateOptimizationData(input: OptimizationInput): PageOptimizationData {
  const origin = 'https://www.delanki.com';
  const routePath = input.routePath || '/';
  const pageType = resolvePageType(routePath);

  // Match product if not explicitly passed
  let product = input.product;
  if (!product && pageType === 'product') {
    const slugMatch = routePath.match(/\/product\/([^/?#]+)/);
    if (slugMatch) {
      const slug = slugMatch[1];
      product = PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug || p.id === `product-${slug}`);
    }
  }

  // Derive Canonical URL
  const canonicalUrl = input.existingSeo?.canonicalPath
    ? `${origin}${input.existingSeo.canonicalPath}`
    : `${origin}${routePath.split('?')[0]}`;

  // Cache Key check
  const cacheKey = `${routePath}:${product?.slug || ''}:${hashString(input.existingSeo?.title || '')}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    // 1. Entities
    const primaryEntity = extractPrimaryEntity(pageType, product, origin);
    const secondaryEntities = extractSecondaryEntities(pageType, product);
    const allEntities: EntityDefinition[] = [primaryEntity, ...secondaryEntities];

    // 2. Direct Answer
    const directAnswer = extractDirectAnswer(
      pageType,
      product,
      input.existingSeo?.description
    );

    // 3. Questions & Answers
    const questions = extractQuestionsAndAnswers(pageType, product);

    // 4. Key Facts
    const keyFacts = extractKeyFacts(pageType, product);

    // 5. Relationships
    const relationships = extractRelationships(pageType, product);

    // 6. Attributes
    const attributes = extractAttributes(pageType, product);

    // 7. Topics
    const topics: string[] = [
      'Digital Product Studio',
      'Web Application Engineering',
      'Mobile App Development',
      'React & TypeScript',
      'Browser Extensions',
    ];
    if (product) {
      topics.push(product.category, ...product.technologies.slice(0, 4));
    }

    // 8. GEO Summary
    const geoSummary = `${primaryEntity.name} (${primaryEntity.type}): ${directAnswer} Key entities referenced include ${secondaryEntities.slice(0, 3).map((e) => e.name).join(', ')}.`;

    // 9. Existing Schemas array extraction
    let existingSchemas: Array<Record<string, unknown>> = [];
    if (input.existingSeo?.schema) {
      if (Array.isArray(input.existingSeo.schema)) {
        existingSchemas = input.existingSeo.schema as Array<Record<string, unknown>>;
      } else if (typeof input.existingSeo.schema === 'object') {
        existingSchemas = [input.existingSeo.schema as Record<string, unknown>];
      }
    }

    // 10. Build Complementary Schemas
    const generatedSchemas = buildComplementarySchemas({
      pageType,
      canonicalUrl,
      questions,
      product,
      primaryEntity,
      existingSchemas,
    });

    // 11. Normalize Output Data
    const partialData: Omit<PageOptimizationData, 'meta'> = {
      page: {
        url: canonicalUrl,
        title: input.existingSeo?.title || primaryEntity.name,
        description: input.existingSeo?.description || directAnswer,
        type: pageType,
      },
      entity: {
        name: primaryEntity.name,
        type: primaryEntity.type,
        description: primaryEntity.description,
      },
      aeo: {
        directAnswer,
        questions: questions.map((q) => ({ question: q.question, answer: q.answer })),
        keyFacts,
      },
      geo: {
        summary: geoSummary,
        entities: allEntities,
        topics,
        attributes,
        relationships,
        keyFacts,
        questions: questions.map((q) => ({ question: q.question, answer: q.answer })),
      },
      schema: generatedSchemas,
    };

    // 12. Run Deterministic Validation
    const validation = validateOptimizationData(partialData, existingSchemas);

    const result: PageOptimizationData = {
      ...partialData,
      meta: {
        generatedAt: new Date().toISOString(),
        contentHash: hashString(`${canonicalUrl}:${primaryEntity.name}:${directAnswer}`),
        validation,
        sourceSummary: `Derived deterministically from siteData and verified product registry.`,
      },
    };

    // Store in cache
    cache.set(cacheKey, result);

    return result;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[AEO-GEO] Error generating optimization data for "${routePath}":`, errorMsg);

    // Safe fallback so rendering never fails
    return {
      page: {
        url: canonicalUrl,
        title: input.existingSeo?.title || COMPANY_DATA.name,
        description: input.existingSeo?.description || COMPANY_DATA.statement,
        type: pageType,
      },
      entity: {
        name: COMPANY_DATA.name,
        type: 'Organization',
        description: COMPANY_DATA.statement,
      },
      aeo: {
        directAnswer: COMPANY_DATA.statement,
        questions: [],
        keyFacts: [],
      },
      geo: {
        summary: COMPANY_DATA.statement,
        entities: [],
        topics: [],
        attributes: [],
        relationships: [],
        keyFacts: [],
        questions: [],
      },
      schema: [],
      meta: {
        generatedAt: new Date().toISOString(),
        contentHash: 'fallback',
        validation: {
          valid: false,
          warnings: [],
          errors: [errorMsg],
          duplicateSchemasAvoided: 0,
          checksRun: 1,
        },
        sourceSummary: 'Fallback baseline data.',
      },
    };
  }
}
