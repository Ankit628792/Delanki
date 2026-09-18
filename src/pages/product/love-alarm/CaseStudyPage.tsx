import React from 'react';
import { ProductCaseStudyLayout } from '../../../components/products/ProductCaseStudyLayout';
import { PRODUCTS_DATA } from '../../../data/siteData';
import caseStudyMarkdown from './case-study.md?raw';

export const LoveAlarmCaseStudyPage: React.FC = () => {
  const product = PRODUCTS_DATA.find((p) => p.slug === 'love-alarm') || PRODUCTS_DATA[4];

  return (
    <ProductCaseStudyLayout
      product={product}
      markdownContent={caseStudyMarkdown}
    />
  );
};
