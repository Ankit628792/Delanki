import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../lib/lenis';

export const ScrollToTop: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

          if (scrollHeight > 0) {
            const calculatedProgress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
            setProgress(calculatedProgress);
          } else {
            setProgress(0);
          }

          // Show floating button after user scrolls past 200px
          setIsVisible(scrollTop > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // SVG circular geometry
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const roundedProgress = Math.round(progress);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-white/[0.04]"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={roundedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-gradient-to-r from-[#F22952]/70 via-[#F22952] to-[#ff4e71] shadow-[0_0_10px_rgba(242,41,82,0.7)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Scroll to Top Button with Circular Progress Ring */}
      <div
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Tooltip / Reading Indicator on Hover */}
        <div
          className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212]/95 border border-white/15 backdrop-blur-md shadow-xl transition-all duration-200 pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F22952] animate-pulse" />
          <span className="font-mono text-[11px] font-semibold tracking-wider text-white uppercase whitespace-nowrap">
            SCROLL TO TOP <span className="text-[#F22952] ml-1">{roundedProgress}%</span>
          </span>
        </div>

        {/* Action Button with Ring */}
        <button
          id="scroll-to-top-button"
          onClick={() => scrollToTop()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative w-12 h-12 rounded-full bg-[#121212]/90 hover:bg-[#181818] border border-white/15 hover:border-[#F22952]/60 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F22952]/50"
          aria-label={`Scroll to top of page (Reading progress: ${roundedProgress}%)`}
          data-cursor="TOP"
        >
          {/* Radial SVG Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            {/* Background Track Ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="text-white/10"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Active Reading Progress Ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#F22952"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Central Arrow and Progress Percentage on mobile */}
          <div className="relative flex flex-col items-center justify-center">
            <ArrowUp className="w-4 h-4 text-white group-hover:text-[#F22952] group-hover:-translate-y-0.5 transition-all duration-200" />
            <span className="font-mono text-[9px] font-bold text-[#B7B7B7] group-hover:text-white leading-none mt-0.5">
              {roundedProgress}%
            </span>
          </div>

          {/* Subtle Ambient Glow */}
          <span className="absolute inset-0 rounded-full bg-[#F22952]/0 group-hover:bg-[#F22952]/10 transition-colors pointer-events-none" />
        </button>
      </div>
    </>
  );
};
