/**
 * Dynamic AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) Types
 * Delanki Product Studio
 */

import { SEOConfig } from '../seo';
import { ProductItem } from '../../types';

export type PageType =
  | 'home'
  | 'product'
  | 'products-catalog'
  | 'privacy-policy'
  | 'not-found'
  | 'about';

export interface NormalizedPageMeta {
  url: string;
  title: string;
  description: string;
  type: PageType;
  canonical: string;
}

export interface EntityDefinition {
  name: string;
  type: string; // e.g. 'Organization', 'SoftwareApplication', 'Person', 'TechArticle'
  description: string;
  url?: string;
  sameAs?: string[];
  attributes?: Record<string, string | number | boolean>;
}

export interface EntityRelationship {
  subject: string;
  predicate: string; // e.g. 'engineers', 'maintains', 'foundedBy', 'compliesWith', 'implements'
  object: string;
}

export interface QuestionAnswer {
  question: string;
  answer: string;
  category?: string;
  sourceConfidence?: number; // 0.0 - 1.0 based on deterministic evidence
  contextSnippet?: string;
}

export interface AEOData {
  directAnswer: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
  keyFacts: string[];
  questionHeadings?: string[];
  definitions?: Array<{
    term: string;
    definition: string;
  }>;
}

export interface AttributeEntry {
  name: string;
  value: string;
}

export interface GEOData {
  summary: string;
  entities: EntityDefinition[];
  topics: string[];
  attributes: AttributeEntry[];
  relationships: EntityRelationship[];
  keyFacts: string[];
  questions: Array<{
    question: string;
    answer: string;
  }>;
  citations?: Array<{
    title: string;
    url: string;
  }>;
}

export interface ValidationIssue {
  type: 'error' | 'warning';
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  warnings: string[];
  errors: string[];
  duplicateSchemasAvoided: number;
  checksRun: number;
}

export interface PageOptimizationData {
  page: {
    url: string;
    title: string;
    description: string;
    type: PageType;
  };
  entity: {
    name: string;
    type: string;
    description: string;
  };
  aeo: {
    directAnswer: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
    keyFacts: string[];
  };
  geo: {
    summary: string;
    entities: EntityDefinition[];
    topics: string[];
    attributes: AttributeEntry[];
    relationships: EntityRelationship[];
    keyFacts: string[];
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  schema: Array<Record<string, unknown>>;
  meta: {
    generatedAt: string;
    contentHash: string;
    validation: ValidationResult;
    sourceSummary: string;
  };
}

export interface OptimizationInput {
  routePath: string;
  existingSeo?: Partial<SEOConfig>;
  product?: ProductItem;
  markdownContent?: string;
  policyType?: 'main' | 'early-learner' | 'respira' | 'love-alarm' | 'airbeam-share';
}
