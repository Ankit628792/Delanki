import React from 'react';
import { ProductCaseStudyLayout } from '../../../components/products/ProductCaseStudyLayout';
import { PRODUCTS_DATA } from '../../../data/siteData';
import caseStudyMarkdown from './case-study.md?raw';

export const EarlyLearnerCaseStudyPage: React.FC = () => {
  const product = PRODUCTS_DATA.find((p) => p.slug === 'early-learner') || PRODUCTS_DATA[3];

  return (
    <ProductCaseStudyLayout
      product={product}
      markdownContent={caseStudyMarkdown}
    />
  );
};
