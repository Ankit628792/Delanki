import React, { useState } from 'react';
import { UserCheck, Rocket, ArrowUpRight, Check, Code, ShieldCheck, Zap, Laptop, Clock, Cpu } from 'lucide-react';

interface HireVsBuildProps {
  onSelectMode: (mode: 'hire' | 'build') => void;
}

export const HireVsBuild: React.FC<HireVsBuildProps> = ({ onSelectMode }) => {
  const [hoveredPanel, setHoveredPanel] = useState<'hire' | 'build' | null>(null);

  return (
    <section id="engagement" className="py-24 md:py-32 px-6 md:px-10 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>02 // ENGAGEMENT MODELS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              HOW DO YOU WANT TO <br />
              <span className="text-chrome">WORK WITH US?</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            Whether you need dedicated engineers to boost velocity or a full studio team to build your product from zero, we adapt to your roadmap.
          </p>
        </div>

        {/* Dual Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: HIRE A TALENT */}
          <div className="h-full">
            <div
              onMouseEnter={() => setHoveredPanel('hire')}
              onMouseLeave={() => setHoveredPanel(null)}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col justify-between overflow-hidden border h-full ${
                hoveredPanel === 'hire'
                  ? 'bg-[#151515] border-[#F22952] shadow-[0_0_40px_rgba(242,41,82,0.2)]'
                  : 'bg-[#101010] border-white/10 hover:border-white/30'
              }`}
            >
              {/* Top Badge & Icon */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-white/10 text-white font-medium border border-white/15">
                    OPTION 01 // TALENT AUGMENTATION
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <UserCheck className="w-6 h-6 text-[#F22952]" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase">
                    HIRE A TALENT
                  </h3>
                  <p className="text-base text-[#B7B7B7] leading-relaxed">
                    Bring in experienced engineers for a sprint, milestone, or extended project.
                  </p>
                </div>

                {/* Engagement Highlights */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="font-mono text-[11px] text-[#B7B7B7] uppercase tracking-wider block">
                    WHAT YOU GET:
                  </span>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Dedicated Full-Stack or Mobile Engineers</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Direct integration into your Slack & GitHub</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Direct builder communication without agency bloat</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Flexible weekly or monthly commitments</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 text-white/80 border border-white/10 flex items-center gap-1">
                    <Code className="w-3 h-3 text-[#F22952]" /> React / Next.js
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 text-white/80 border border-white/10 flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-[#F22952]" /> React Native / Mobile
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 text-white/80 border border-white/10 flex items-center gap-1">
                    <Laptop className="w-3 h-3 text-[#F22952]" /> Chrome / VS Code APIs
                  </span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <button
                  onClick={() => onSelectMode('hire')}
                  className="w-full group inline-flex items-center justify-between bg-white/10 hover:bg-[#F22952] text-white font-mono text-xs md:text-sm uppercase tracking-wider font-bold py-4 px-6 rounded-xl transition-all duration-300 border border-white/15 hover:border-[#F22952]"
                  data-cursor="HIRE"
                >
                  <span>HIRE TALENT FOR SPRINT</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: BUILD YOUR PRODUCT */}
          <div className="h-full">
            <div
              onMouseEnter={() => setHoveredPanel('build')}
              onMouseLeave={() => setHoveredPanel(null)}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col justify-between overflow-hidden border h-full ${
                hoveredPanel === 'build'
                  ? 'bg-[#151515] border-[#F22952] shadow-[0_0_40px_rgba(242,41,82,0.25)]'
                  : 'bg-[#121212] border-white/15 hover:border-[#F22952]/50'
              }`}
            >
              {/* Top Badge & Icon */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-[#F22952]/20 text-[#F22952] font-semibold border border-[#F22952]/40">
                    OPTION 02 // FULL-CYCLE STUDIO
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#F22952]/20 border border-[#F22952]/30 flex items-center justify-center text-[#F22952]">
                    <Rocket className="w-6 h-6 text-[#F22952]" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase">
                    BUILD YOUR PRODUCT
                  </h3>
                  <p className="text-base text-[#B7B7B7] leading-relaxed">
                    Turn your idea into a shipped product. We handle discovery, UX/UI design, engineering, and launch.
                  </p>
                </div>

                {/* Engagement Highlights */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="font-mono text-[11px] text-[#B7B7B7] uppercase tracking-wider block">
                    WHAT WE DELIVER:
                  </span>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Product Strategy, User Flows & High-Fi UX/UI</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Full-Stack Codebase (Web, Mobile, or Extensions)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Automated CI/CD & Cloud Infrastructure</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#F22952] shrink-0" />
                      <span>Store Approvals & Post-Launch Optimization</span>
                    </li>
                  </ul>
                </div>

                {/* Lifecycle Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F22952]/10 text-white/90 border border-[#F22952]/30 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#F22952]" /> 2–4 Wk MVP
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F22952]/10 text-white/90 border border-[#F22952]/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#F22952]" /> Fixed-Milestone Budget
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F22952]/10 text-white/90 border border-[#F22952]/30 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F22952]" /> 100% IP Ownership
                  </span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <button
                  onClick={() => onSelectMode('build')}
                  className="w-full group inline-flex items-center justify-between bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs md:text-sm uppercase tracking-wider font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(242,41,82,0.4)]"
                  data-cursor="BUILD"
                >
                  <span>BUILD WITH DELANKI</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
