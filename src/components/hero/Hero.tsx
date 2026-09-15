import React from 'react';
import { HeroScene } from '../three/HeroScene';
import { scrollToElement } from '../../lib/lenis';
import { ArrowDown, ArrowUpRight, Terminal, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-10 overflow-hidden bg-[#090909]"
    >
      {/* Background Decorative Tech Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F22952]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#FFFFFF]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Top Metadata Row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 font-mono text-xs text-[#B7B7B7]">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952]">
            <Terminal className="w-3 h-3" />
          </span>
          <span className="font-medium">DELANKI</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline">FULL-STACK & EXTENSIONS</span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-[#B7B7B7]">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#F22952]" />
            <span>2023 EDITION</span>
          </div>
          <span className="text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">SYS_READY</span>
          </div>
        </div>
      </div>

      {/* Main Hero Center Composition: Typography + 3D Object */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center py-6">
        
        {/* Left Column: Oversized Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          
          {/* Micro Tag */}
          <div className="inline-flex items-center gap-2 border border-subtle-pink bg-[#F22952]/5 rounded-full px-3.5 py-1 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#F22952] animate-pulse" />
            <span className="font-mono text-[11px] font-semibold tracking-widest text-[#F22952] uppercase">
              STUDIO & TALENT COLLECTIVE
            </span>
          </div>

          {/* Huge Main Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.92] tracking-[-0.035em] text-white uppercase select-none">
            WE TURN <br />
            <span className="text-chrome">IDEAS INTO</span> <br />
            <span className="relative inline-block text-white">
              DIGITAL
              <span className="text-[#F22952]"> PRODUCTS</span>
              <span className="text-[#F22952]">.</span>
            </span>
          </h1>

          {/* Concise Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#B7B7B7] max-w-xl font-normal leading-relaxed">
            Delanki is a product development studio helping ambitious founders, startups, and engineering teams design, build, launch, and evolve digital products across Web, Mobile, Chrome, and VS Code.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenInquiry('build')}
              className="group relative inline-flex items-center gap-3 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs md:text-sm uppercase tracking-wider font-bold px-7 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(242,41,82,0.4)] hover:shadow-[0_0_40px_rgba(242,41,82,0.7)] hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="START"
            >
              <span>BUILD WITH US</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenInquiry('hire')}
              className="group inline-flex items-center gap-3 bg-[#141414] hover:bg-[#1f1f1f] text-white font-mono text-xs md:text-sm uppercase tracking-wider font-medium px-7 py-4 rounded-full border border-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="HIRE"
            >
              <span>HIRE TALENT</span>
              <span className="text-[#F22952] group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Metadata Badges */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 max-w-lg">
            <div>
              <div className="font-mono text-[10px] text-[#B7B7B7] uppercase tracking-wider">PLATFORMS</div>
              <div className="font-sans text-xs font-semibold text-white mt-0.5">Web • Mobile • Ext</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#B7B7B7] uppercase tracking-wider">SPEED</div>
              <div className="font-sans text-xs font-semibold text-white mt-0.5">2–4 Wk MVP Cycle</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#B7B7B7] uppercase tracking-wider">CORE TECH</div>
              <div className="font-sans text-xs font-semibold text-[#F22952] mt-0.5">Next • Kotlin • TS</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Kinetic Hologram Matrix */}
        <div className="lg:col-span-5 h-[380px] sm:h-[450px] lg:h-[580px] w-full relative flex items-center justify-center">
          <div className="w-full h-full relative">
            <HeroScene />
          </div>

          {/* Floating Y2K Technical Tag overlay */}
          <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:flex flex-col items-end gap-1 font-mono text-[10px] text-[#B7B7B7] bg-[#090909]/80 backdrop-blur-md px-3 py-2 border border-white/10 rounded-lg">
            <div className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952] animate-ping" />
              <span>KINETIC MATRIX // 120 FPS</span>
            </div>
            <span className="text-[9px] text-[#B7B7B7]">POINTER PARALLAX • REAL-TIME TELEMETRY</span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar & Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-white/10 font-mono text-xs text-[#B7B7B7]">
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-white">EST. 2023</span>
          <span className="text-white/20">/</span>
          <span>GLOBAL CLIENTS</span>
          <span className="text-white/20">/</span>
          <span className="text-[#F22952]">100% PRODUCTION READY</span>
        </div>

        <button
          onClick={() => scrollToElement('#manifesto')}
          className="group flex items-center gap-2 text-white hover:text-[#F22952] transition-colors ml-auto sm:ml-0"
          data-cursor="SCROLL"
        >
          <span className="text-xs uppercase tracking-widest font-mono">EXPLORE STUDIO</span>
          <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#F22952] flex items-center justify-center group-hover:translate-y-1 transition-all">
            <ArrowDown className="w-3 h-3 text-white group-hover:text-[#F22952]" />
          </span>
        </button>
      </div>
    </section>
  );
};
