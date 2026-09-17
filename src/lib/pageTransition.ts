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

export interface PageTransitionEventDetail {
  to: string;
  data?: Partial<TransitionData>;
}

export const TRANSITION_EVENT = 'delanki:page-transition';

/**
 * Trigger the full-screen cinematic GSAP page transition.
 * Safe to call from anywhere (React components, event handlers, etc.)
 */
export function triggerPageTransition(to: string, customData?: Partial<TransitionData>) {
  if (typeof window !== 'undefined') {
    const isTargetingProducts = to.startsWith('/products');
    const baseData = isTargetingProducts ? DEFAULT_PRODUCTS_DATA : DEFAULT_STUDIO_DATA;
    const fullData: TransitionData = {
      title: customData?.title || baseData.title,
      tag: customData?.tag || baseData.tag,
      description: customData?.description || baseData.description,
    };

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
