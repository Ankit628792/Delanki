import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import gsap from 'gsap';
import {
  TransitionData,
  DEFAULT_PRODUCTS_DATA,
  DEFAULT_STUDIO_DATA,
  TRANSITION_EVENT,
  PageTransitionEventDetail,
} from '../../lib/pageTransition';
import { resetScrollImmediate } from '../../lib/lenis';

export const PageTransition: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const [activeData, setActiveData] = useState<TransitionData>(DEFAULT_PRODUCTS_DATA);
  const isAnimatingRef = useRef(false);
  const prevPathnameRef = useRef(location.pathname);
  const isFirstRender = useRef(true);

  // Play the full-screen cinematic transition timeline
  const runTransition = useRef((to: string | null, data: TransitionData) => {
    if (!overlayRef.current) {
      if (to) navigate({ to });
      return;
    }

    isAnimatingRef.current = true;
    setActiveData(data);

    const overlay = overlayRef.current;
    const tag = tagRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const progressBar = progressBarRef.current;
    const status = statusRef.current;

    // Kill any existing animations
    gsap.killTweensOf([overlay, tag, title, desc, progressBar, status]);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlay, { display: 'none', yPercent: 100 });
        isAnimatingRef.current = false;
      },
    });

    // Step 1: Slide overlay up from bottom to cover the screen
    tl.set(overlay, { display: 'flex', yPercent: 100, opacity: 1 });
    tl.set([tag, title, desc, progressBar, status], { opacity: 0 });

    tl.to(overlay, {
      yPercent: 0,
      duration: 0.4,
      ease: 'power3.inOut',
    });

    // Step 2: Route switch and immediate scroll reset while hidden under overlay
    if (to) {
      tl.add(() => {
        navigate({ to });
        resetScrollImmediate();
      });
    } else {
      tl.add(() => {
        resetScrollImmediate();
      });
    }

    // Step 3: Fade and translate the content into the center
    tl.fromTo(
      tag,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
    );

    tl.fromTo(
      title,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power4.out' },
      '-=0.25'
    );

    tl.fromTo(
      desc,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
      '-=0.3'
    );

    tl.fromTo(
      [progressBar, status],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.08 },
      '-=0.2'
    );

    // Step 4: Cinematic brief hold after loaded
    tl.to({}, { duration: 0.4 });

    // Step 5: The entire page slides to top after loaded!
    tl.to(overlay, {
      yPercent: -100,
      duration: 0.85,
      ease: 'power4.inOut',
    });
  });

  // Listen to the custom event triggered by clicks on buttons/nav items
  useEffect(() => {
    const handleTransitionEvent = (e: Event) => {
      const customEvent = e as CustomEvent<PageTransitionEventDetail>;
      const { to, data } = customEvent.detail;
      const isTargetProducts = to.startsWith('/products');
      const baseData = isTargetProducts ? DEFAULT_PRODUCTS_DATA : DEFAULT_STUDIO_DATA;
      const fullData: TransitionData = {
        title: data?.title || baseData.title,
        tag: data?.tag || baseData.tag,
        description: data?.description || baseData.description,
      };

      runTransition.current(to, fullData);
    };

    window.addEventListener(TRANSITION_EVENT, handleTransitionEvent);
    return () => {
      window.removeEventListener(TRANSITION_EVENT, handleTransitionEvent);
    };
  }, []);

  // Handle direct route changes (e.g. browser back/forward, direct router navigation)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathnameRef.current = location.pathname;
      return;
    }

    const prev = prevPathnameRef.current;
    const curr = location.pathname;
    prevPathnameRef.current = curr;

    const isHomeToProducts = prev === '/' && curr.startsWith('/products');
    const isProductsToHome = prev.startsWith('/products') && curr === '/';

    // If navigation happened between home and products and not already animating
    if ((isHomeToProducts || isProductsToHome) && !isAnimatingRef.current && overlayRef.current) {
      const isTargetProducts = curr.startsWith('/products');
      const targetData: TransitionData = isTargetProducts ? DEFAULT_PRODUCTS_DATA : DEFAULT_STUDIO_DATA;
      runTransition.current(null, targetData);
    }
  }, [location.pathname]);

  return (
    <div
      ref={overlayRef}
      id="delanki-page-transition-overlay"
      className="fixed inset-0 z-[9990] bg-[#070707] text-white hidden flex-col justify-between p-6 sm:p-12 md:p-16 select-none overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Background Ambience: Subtle Radial Glow & Fine Studio Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,41,82,0.14),transparent_65%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top Studio Coordinate Bar */}
      <div className="relative z-10 w-full flex items-center justify-between font-mono text-[11px] text-[#B7B7B7]/70 tracking-widest uppercase border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F22952] animate-pulse" />
          <span className="text-white font-semibold">DEL<span className="text-[#F22952]">ANKI</span></span>
          <span className="hidden sm:inline text-white/30">//</span>
          <span className="hidden sm:inline">TRANSITION PROTOCOL</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="hidden md:inline text-emerald-400 font-mono">SYS.SYNC: OPTIMAL</span>
          <span className="font-mono text-white/60">3.1.0</span>
        </div>
      </div>

      {/* Main Center Content: Large Font & Short Description with Fade & Translation */}
      <div
        ref={contentRef}
        className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full"
      >
        {/* Subtle Category/System Eyebrow Tag */}
        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-[#B7B7B7] uppercase tracking-widest mb-4 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
          <span>{activeData.tag}</span>
        </div>

        {/* Large Font Title */}
        <h1
          ref={titleRef}
          className="font-display font-black text-5xl sm:text-7xl md:text-9xl tracking-tight uppercase text-white leading-none select-none drop-shadow-2xl"
        >
          {activeData.title}
          <span className="text-[#F22952]">.</span>
        </h1>

        {/* Short Little Description in Center */}
        <p
          ref={descRef}
          className="text-sm sm:text-base md:text-lg text-[#B7B7B7] max-w-lg mx-auto text-center font-sans tracking-wide leading-relaxed mt-4 sm:mt-6 select-none"
        >
          {activeData.description}
        </p>

        {/* Minimalist Studio Progress Line */}
        <div
          ref={progressBarRef}
          className="h-[2px] w-44 sm:w-56 bg-white/10 rounded-full overflow-hidden mx-auto mt-8 sm:mt-10 relative"
        >
          <div className="h-full bg-gradient-to-r from-transparent via-[#F22952] to-transparent w-full animate-[shimmer_1s_infinite]" />
        </div>

        {/* System Load Status */}
        <div
          ref={statusRef}
          className="font-mono text-[10px] sm:text-[11px] text-white/50 tracking-[0.25em] uppercase text-center mt-3"
        >
          <span>ENGINEERING AMBITIOUS PRODUCTS</span>
        </div>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="relative z-10 w-full flex items-center justify-between font-mono text-[10px] text-white/40 tracking-widest uppercase border-t border-white/10 pt-4">
        <div>// DIGITAL PRODUCT STUDIO</div>
        <div className="text-white/60">DELANKI.COM</div>
      </div>
    </div>
  );
};
