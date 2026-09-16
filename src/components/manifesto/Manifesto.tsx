import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const values = [
    'Sub-second performance by default',
    'Opinionated, clean architecture',
    'Zero agency fluff, direct engineering access',
    'Full ownership from wireframe to deployment',
  ];

  return (
    <section
      id="manifesto"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pink-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        {/* Section Header Micro */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
            <span>01 // STUDIO MANIFESTO</span>
          </div>
          <span className="font-mono text-xs text-[#B7B7B7]">
            PRODUCT PHILOSOPHY & CRAFT
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight uppercase text-white">
            WE DON'T JUST WRITE CODE<span className="text-[#F22952]">.</span> <br />
            <span className="text-chrome">WE BUILD THINGS PEOPLE USE.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#B7B7B7] max-w-3xl leading-relaxed pt-2">
            Most digital agencies sell billable hours. We sell shipped products. We partner with founders, venture-backed startups, and modern product teams to turn bold concepts into high-converting, resilient digital software.
          </p>
        </div>

        {/* Value Points Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#141414] border border-white/10 hover:border-[#F22952]/40 transition-all duration-300 flex items-start gap-3.5 group"
            >
              <CheckCircle2 className="w-5 h-5 text-[#F22952] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-white/90 leading-snug">
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Concept Stream: IDEA -> DESIGN -> ENGINEERING -> LAUNCH */}
        <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#111111] border border-white/15 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#B7B7B7] uppercase shrink-0">
            <Sparkles className="w-4 h-4 text-[#F22952]" />
            <span>EXECUTION STREAM</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-display font-bold text-sm sm:text-lg md:text-xl text-white tracking-wide">
            <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">IDEA</span>
            <ArrowRight className="w-4 h-4 text-[#F22952]" />
            <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">DESIGN</span>
            <ArrowRight className="w-4 h-4 text-[#F22952]" />
            <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">ENGINEERING</span>
            <ArrowRight className="w-4 h-4 text-[#F22952]" />
            <span className="px-3.5 py-1.5 rounded-lg bg-[#F22952]/20 border border-[#F22952] text-[#F22952] font-black">LAUNCH</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee of Studio Capabilities */}
      <div className="mt-16 w-full overflow-hidden border-t border-b border-white/10 py-4 bg-[#090909]">
        <div className="animate-marquee-left flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest text-[#B7B7B7] uppercase">
          <span>WEB APPLICATIONS</span>
          <span className="text-[#F22952]">✦</span>
          <span>CROSS-Platform APPS</span>
          <span className="text-[#F22952]">✦</span>
          <span>CHROME EXTENSIONS</span>
          <span className="text-[#F22952]">✦</span>
          <span>VS CODE EXTENSIONS</span>
          <span className="text-[#F22952]">✦</span>
          <span>DEDICATED TALENT</span>
          <span className="text-[#F22952]">✦</span>
          <span>REACT NATIVE & EXPO</span>
          <span className="text-[#F22952]">✦</span>
          <span>NEXT.JS & TYPESCRIPT</span>
          <span className="text-[#F22952]">✦</span>
          <span>PRODUCT STRATEGY</span>
          <span className="text-[#F22952]">✦</span>
          <span>WEB APPLICATIONS</span>
          <span className="text-[#F22952]">✦</span>
          <span>CROSS-PLATFORM APPS</span>
          <span className="text-[#F22952]">✦</span>
          <span>CHROME EXTENSIONS</span>
          <span className="text-[#F22952]">✦</span>
          <span>VS CODE EXTENSIONS</span>
          <span className="text-[#F22952]">✦</span>
          <span>DEDICATED TALENT</span>
          <span className="text-[#F22952]">✦</span>
        </div>
      </div>
    </section>
  );
};
