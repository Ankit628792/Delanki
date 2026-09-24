import React, { useEffect, useMemo } from 'react';
import { OptimizationInput, PageOptimizationData } from '../../lib/aeo-geo/types';
import { generateOptimizationData } from '../../lib/aeo-geo/generator';
import { applyAeoGeoToDOM } from '../../lib/aeo-geo/dom-injector';

export interface AeoGeoHeadProps extends OptimizationInput {
  // Optional flag to disable DOM injection if only using data
  suppressDomInjection?: boolean;
}

/**
 * Custom Hook for accessing AEO & GEO Data in components
 */
export function useAeoGeo(input: OptimizationInput): PageOptimizationData {
  return useMemo(() => generateOptimizationData(input), [
    input.routePath,
    input.product?.slug,
    input.existingSeo?.title,
    input.existingSeo?.description,
  ]);
}

/**
 * Head component that dynamically generates and synchronizes AEO & GEO signals.
 * Runs alongside existing <SEO /> without replacing or duplicating any tags.
 */
export const AeoGeoHead: React.FC<AeoGeoHeadProps> = (props) => {
  const data = useAeoGeo(props);

  useEffect(() => {
    if (!props.suppressDomInjection) {
      applyAeoGeoToDOM(data);
    }
  }, [data, props.suppressDomInjection]);

  return null;
};
