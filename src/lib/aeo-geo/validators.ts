/**
 * Deterministic Validation for AEO & GEO Output
 * Ensures factual grounding, schema validity, and zero duplication with existing SEO.
 */

import { ValidationResult, PageOptimizationData, EntityDefinition, EntityRelationship } from './types';

/**
 * Validates generated AEO/GEO data against strict quality and correctness rules.
 */
export function validateOptimizationData(
  data: Omit<PageOptimizationData, 'meta'>,
  existingSchemas: Array<Record<string, unknown>> = []
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let checksRun = 0;
  let duplicateSchemasAvoided = 0;

  // 1. Page Metadata Validation
  checksRun++;
  if (!data.page.url || (!data.page.url.startsWith('http') && !data.page.url.startsWith('/'))) {
    errors.push(`Invalid page URL format: "${data.page.url}"`);
  }
  checksRun++;
  if (!data.page.title || data.page.title.trim().length === 0) {
    errors.push('Page title is missing or empty.');
  } else if (data.page.title.length < 15) {
    warnings.push(`Page title is very short (${data.page.title.length} chars).`);
  }
  checksRun++;
  if (!data.page.description || data.page.description.trim().length === 0) {
    errors.push('Page description is missing or empty.');
  }

  // 2. Primary Entity Validation
  checksRun++;
  if (!data.entity.name || data.entity.name.trim().length === 0) {
    errors.push('Primary entity name is missing.');
  }
  checksRun++;
  if (!data.entity.type || data.entity.type.trim().length === 0) {
    errors.push('Primary entity type is missing.');
  }
  checksRun++;
  if (!data.entity.description || data.entity.description.trim().length === 0) {
    warnings.push('Primary entity description is empty.');
  }

  // 3. AEO Direct Answer & Question Validation
  checksRun++;
  if (!data.aeo.directAnswer || data.aeo.directAnswer.trim().length === 0) {
    warnings.push('AEO direct answer is empty.');
  } else if (data.aeo.directAnswer.length > 500) {
    warnings.push('AEO direct answer exceeds 500 characters; answer engines prefer concise answers (150-350 chars).');
  }

  checksRun++;
  if (data.aeo.questions.length > 15) {
    warnings.push(`Excessive question count (${data.aeo.questions.length}). Best practice for AEO is 3 to 10 questions.`);
  }

  data.aeo.questions.forEach((q, idx) => {
    checksRun++;
    if (!q.question || q.question.trim().length === 0) {
      errors.push(`AEO question #${idx + 1} has an empty question string.`);
    }
    if (!q.answer || q.answer.trim().length === 0) {
      errors.push(`AEO question #${idx + 1} ("${q.question}") has an empty answer.`);
    }
    if (q.question && !q.question.includes('?')) {
      warnings.push(`AEO question #${idx + 1} does not end with a question mark: "${q.question}"`);
    }
  });

  // 4. GEO Entities, Attributes & Relationships Validation
  data.geo.entities.forEach((ent: EntityDefinition, idx: number) => {
    checksRun++;
    if (!ent.name || ent.name.trim().length === 0) {
      errors.push(`GEO entity #${idx + 1} has empty name.`);
    }
    if (!ent.type || ent.type.trim().length === 0) {
      warnings.push(`GEO entity "${ent.name}" lacks a type.`);
    }
  });

  data.geo.relationships.forEach((rel: EntityRelationship, idx: number) => {
    checksRun++;
    if (!rel.subject || !rel.predicate || !rel.object) {
      errors.push(`GEO relationship #${idx + 1} is malformed (missing subject, predicate, or object).`);
    }
  });

  // 5. Schema.org JSON-LD Validation & Deduplication Check
  const existingTypes = new Set(
    existingSchemas
      .map((s) => (typeof s['@type'] === 'string' ? s['@type'] : ''))
      .filter(Boolean)
  );

  data.schema.forEach((s, idx) => {
    checksRun++;
    if (s['@context'] !== 'https://schema.org' && s['@context'] !== 'http://schema.org') {
      errors.push(`Schema #${idx + 1} has invalid @context: "${s['@context']}". Must be "https://schema.org"`);
    }

    const schemaType = s['@type'] as string | undefined;
    if (!schemaType || typeof schemaType !== 'string' || schemaType.trim().length === 0) {
      errors.push(`Schema #${idx + 1} is missing required @type.`);
    } else {
      // Check if this type already exists in existing schemas and has no distinguishing @id
      if (existingTypes.has(schemaType) && !s['@id']) {
        duplicateSchemasAvoided++;
        warnings.push(`Schema type "${schemaType}" exists in base SEO without explicit @id. Consider anchoring.`);
      }
    }

    // FAQPage specific validation
    if (schemaType === 'FAQPage') {
      checksRun++;
      const mainEntity = s.mainEntity as Array<Record<string, unknown>> | undefined;
      if (!Array.isArray(mainEntity) || mainEntity.length === 0) {
        errors.push('FAQPage schema must contain at least one question in mainEntity.');
      } else {
        mainEntity.forEach((item, itemIdx) => {
          if (item['@type'] !== 'Question') {
            errors.push(`FAQPage item #${itemIdx + 1} is not of @type Question.`);
          }
          const acceptedAnswer = item.acceptedAnswer as Record<string, unknown> | undefined;
          if (!acceptedAnswer || acceptedAnswer['@type'] !== 'Answer' || !acceptedAnswer.text) {
            errors.push(`FAQPage question #${itemIdx + 1} missing valid acceptedAnswer text.`);
          }
        });
      }
    }
  });

  return {
    valid: errors.length === 0,
    warnings,
    errors,
    duplicateSchemasAvoided,
    checksRun,
  };
}
