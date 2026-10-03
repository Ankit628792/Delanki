import { PRODUCTS_DATA } from '../data/siteData';

export interface TransitionData {
  title: string;
  tag: string;
  description: string;
}

export const DEFAULT_PRODUCTS_DATA: TransitionData = {
  title: 'PRODUCTS',
  tag: '01 // DIRECTORY',
  description: 'Curated digital products, software tools & studio engineering.',
};

export const DEFAULT_STUDIO_DATA: TransitionData = {
  title: 'STUDIO',
  tag: '00 // HEADQUARTERS',
  description: 'Design & engineering agency for ambitious digital products.',
};

export const DEFAULT_CASE_STUDY_DATA: TransitionData = {
  title: 'CASE STUDY',
  tag: '02 // DEEP DIVE',
  description: 'Product architecture, user problem & engineering impact.',
};

export const DEFAULT_PRIVACY_DATA: TransitionData = {
  title: 'PRIVACY',
  tag: '03 // COMPLIANCE',
  description: 'Data privacy policy, terms of service and compliance standards.',
};

export interface PageTransitionEventDetail {
  to: string;
  data?: Partial<TransitionData>;
}

export const TRANSITION_EVENT = 'delanki:page-transition';

/**
 * Resolve the appropriate transition title, tag and description for any destination route.
 */
export function resolveTransitionData(to: string, customData?: Partial<TransitionData>): TransitionData {
  let baseData = DEFAULT_STUDIO_DATA;

  if (to.includes('privacy-policy') || to.endsWith('/privacy-policy')) {
    const slug = to
      .replace(/^\/products?\//, '')
      .replace(/\/privacy-policy.*$/, '')
      .split(/[?#/]/)[0];
    const product = PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);

    baseData = {
      title: 'PRIVACY',
      tag: product ? `03 // ${product.title.toUpperCase()} COMPLIANCE` : DEFAULT_PRIVACY_DATA.tag,
      description: product
        ? `${product.title} data privacy policy, terms of service and compliance standards.`
        : DEFAULT_PRIVACY_DATA.description,
    };
  } else if (to.startsWith('/product/') || to === '/product') {
    const slug = to.replace(/^\/product\//, '').split(/[?#/]/)[0];
    const product = PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
    baseData = {
      title: 'CASE STUDY',
      tag: product ? `02 // ${product.title.toUpperCase()}` : DEFAULT_CASE_STUDY_DATA.tag,
      description: product ? product.tagline : DEFAULT_CASE_STUDY_DATA.description,
    };
  } else if (to.startsWith('/products')) {
    baseData = DEFAULT_PRODUCTS_DATA;
  } else if (to === '/' || to === '') {
    baseData = DEFAULT_STUDIO_DATA;
  }

  return {
    title: customData?.title || baseData.title,
    tag: customData?.tag || baseData.tag,
    description: customData?.description || baseData.description,
  };
}

/**
 * Trigger the full-screen cinematic GSAP page transition.
 * Safe to call from anywhere (React components, event handlers, etc.)
 */
export function triggerPageTransition(to: string, customData?: Partial<TransitionData>) {
  if (typeof window !== 'undefined') {
    const fullData = resolveTransitionData(to, customData);

    window.dispatchEvent(
      new CustomEvent<PageTransitionEventDetail>(TRANSITION_EVENT, {
        detail: {
          to,
          data: fullData,
        },
      })
    );
  }
}
