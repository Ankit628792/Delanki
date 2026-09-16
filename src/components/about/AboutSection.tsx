import React from 'react';
import { METRICS_DATA, COMPANY_DATA } from '../../data/siteData';
import { ArrowUpRight, Sparkles, Terminal, CheckCircle2, Globe2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>09 // ABOUT DEL<span className="text-[#F22952]">ANKI</span></span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              A SMALL TEAM<span className="text-[#F22952]">.</span> <br />
              <span className="text-chrome">BUILDING BIG IDEAS.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#B7B7B7] bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <Globe2 className="w-3.5 h-3.5 text-[#F22952]" />
            <span>GLOBAL MINDSET // EST. {COMPANY_DATA.established}</span>
          </div>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#B7B7B7] leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-medium leading-snug">
              Del<span className="text-[#F22952]">anki</span> is a product development studio turning ideas into fast, intuitive, and reliable digital software.
            </p>

            <p>
              We partner directly with founders and teams to build full-stack web apps, mobile experiences, and extension ecosystems.
            </p>

            <p>
              We believe great software comes from small, senior engineering teams who ship fast and focus on product quality.
            </p>

            {/* Principles checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#141414] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F22952] shrink-0 mt-0.5" />
                <div className="text-xs text-white/90">
                  <strong className="block font-sans text-sm text-white">Direct Access</strong>
                  Talk directly with senior builders.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#141414] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F22952] shrink-0 mt-0.5" />
                <div className="text-xs text-white/90">
                  <strong className="block font-sans text-sm text-white">Production Quality</strong>
                  Strict TypeScript, full IP ownership.
                </div>
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/15 rounded-3xl p-8 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-[#F22952] uppercase tracking-widest font-bold">
                STUDIO CREDIBILITY
              </span>
              <Terminal className="w-4 h-4 text-[#B7B7B7]" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {METRICS_DATA.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-white">
                    {metric.value}
                  </div>
                  <div className="font-display font-bold text-xs text-[#F22952] uppercase">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#B7B7B7] leading-tight">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenInquiry('build')}
                className="w-full py-3.5 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,41,82,0.3)]"
                data-cursor="CONNECT"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
