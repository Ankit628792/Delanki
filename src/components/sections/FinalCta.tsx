import React from 'react';
import { CtaObjectScene } from '../three/CtaObjectScene';
import { ArrowUpRight, Sparkles, UserCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10 bg-[#090909] relative overflow-hidden border-t border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-pink-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Typography & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 border border-subtle-pink bg-[#F22952]/10 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#F22952] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest text-[#F22952] uppercase">
              READY TO SHIP // 2023
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight uppercase text-white">
            HAVE AN IDEA<span className="text-[#F22952]">?</span> <br />
            <span className="text-chrome">LET'S BUILD IT.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#B7B7B7] max-w-xl font-normal leading-relaxed">
            Tell us what you're thinking. We'll help you figure out what to build, how to architect it, and where to start shipping with zero fluff.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenInquiry('build')}
              className="group relative inline-flex items-center gap-3 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs md:text-sm uppercase tracking-wider font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(242,41,82,0.45)] hover:shadow-[0_0_50px_rgba(242,41,82,0.7)] hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="BUILD"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenInquiry('hire')}
              className="group inline-flex items-center gap-3 bg-[#141414] hover:bg-[#1f1f1f] text-white font-mono text-xs md:text-sm uppercase tracking-wider font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="HIRE"
            >
              <UserCheck className="w-4 h-4 text-[#F22952]" />
              <span>HIRE TALENT</span>
              <span className="text-[#F22952] group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right 3D Visual Jewel */}
        <div className="lg:col-span-5 h-[340px] sm:h-[420px] w-full relative flex items-center justify-center">
          <CtaObjectScene />
        </div>

      </div>
    </section>
  );
};
