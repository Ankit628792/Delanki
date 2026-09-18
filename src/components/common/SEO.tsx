import React, { useEffect } from 'react';
import { SEOConfig, applyDocumentSEO } from '../../lib/seo';

export type { SEOConfig };

export const SEO: React.FC<SEOConfig> = (props) => {
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

  return null;
};
