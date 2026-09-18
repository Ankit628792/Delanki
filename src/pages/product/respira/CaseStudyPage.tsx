import React from 'react';
import { ProductCaseStudyLayout } from '../../../components/products/ProductCaseStudyLayout';
import { PRODUCTS_DATA } from '../../../data/siteData';
import caseStudyMarkdown from './case-study.md?raw';

export const RespiraCaseStudyPage: React.FC = () => {
  const product = PRODUCTS_DATA.find((p) => p.slug === 'respira') || PRODUCTS_DATA[6];

  return (
    <ProductCaseStudyLayout
      product={product}
      markdownContent={caseStudyMarkdown}
    />
  );
};
