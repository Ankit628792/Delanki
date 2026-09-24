import React, { useEffect, useMemo } from 'react';
import { SEOConfig, applyDocumentSEO } from '../../lib/seo';
import { generateOptimizationData, applyAeoGeoToDOM } from '../../lib/aeo-geo';
import { ProductItem } from '../../types';

export type { SEOConfig };

export interface ExtendedSEOConfig extends SEOConfig {
  product?: ProductItem;
  enableAeoGeo?: boolean;
}

export const SEO: React.FC<ExtendedSEOConfig> = (props) => {
  const enableAeoGeo = props.enableAeoGeo !== false;

  useEffect(() => {
    applyDocumentSEO(props);
  }, [
    props.title,
    props.description,
    props.canonicalPath,
    props.ogType,
    props.ogImage,
    props.noindex,
    props.schema,
  ]);

  const routePath =
    props.canonicalPath ||
    (typeof window !== 'undefined' ? window.location.pathname : '/');

  const aeoGeoData = useMemo(() => {
    if (!enableAeoGeo) return null;
    return generateOptimizationData({
      routePath,
      existingSeo: props,
      product: props.product,
    });
  }, [
    routePath,
    props.title,
    props.description,
    props.canonicalPath,
    props.product?.slug,
    enableAeoGeo,
  ]);

  useEffect(() => {
    if (enableAeoGeo && aeoGeoData) {
      applyAeoGeoToDOM(aeoGeoData);
    }
  }, [aeoGeoData, enableAeoGeo]);

  return null;
};

