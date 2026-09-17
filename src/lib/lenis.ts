import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): () => void {
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return () => {};
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.0,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenisInstance?.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const handleResize = () => {
      lenisInstance?.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Watch for document layout shifts (dynamic component rendering, accordion toggles, tablet reflows)
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        lenisInstance?.resize();
      });
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      resizeObserver?.disconnect();
      gsap.ticker.remove(updateTicker);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  } catch (e) {
    console.warn('Lenis smooth scroll failed to initialize:', e);
    return () => {};
  }
}

export function scrollToElement(selector: string, offset: number = -80): void {
  const target = document.querySelector(selector);
  if (target) {
    if (lenisInstance) {
      lenisInstance.scrollTo(target as HTMLElement, { offset, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export function scrollToTop(duration: number = 1.2): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function resetScrollImmediate(): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  }
  window.scrollTo(0, 0);
}
