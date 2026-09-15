import React from 'react';
import { ShieldCheck, Zap, Users, MessageSquare, Target, Code } from 'lucide-react';

export const WhyDelanki: React.FC = () => {
  const statements = [
    {
      title: 'SMALL TEAM.',
      subtitle: 'Zero middle-management bloat or bureaucratic lag.',
      icon: Users,
    },
    {
      title: 'LESS BUREAUCRACY.',
      subtitle: 'You speak directly with the engineers writing your code.',
      icon: Zap,
    },
    {
      title: 'MORE FOCUS.',
      subtitle: 'We take on limited concurrent projects for deep attention.',
      icon: Target,
    },
    {
      title: 'BETTER COMMUNICATION.',
      subtitle: 'Daily async updates, weekly deployments, zero marketing fluff.',
      icon: MessageSquare,
    },
    {
      title: 'REAL OWNERSHIP.',
      subtitle: '100% IP handover, clean documentation, strict testing.',
      icon: ShieldCheck,
    },
    {
      title: 'SHIPPED PRODUCTS.',
      subtitle: 'Working software in production, not endless slide decks.',
      icon: Code,
    },
  ];

  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-10 bg-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>06 // STUDIO PHILOSOPHY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              WHY DEL<span className="text-[#F22952]">ANKI</span><span className="text-[#F22952]">?</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            Traditional agencies throw 15 people at a project and bill you for endless meetings. We work as a tight, senior engineering unit with relentless execution speed.
          </p>
        </div>

        {/* 6 Core Typographic Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 hover:border-[#F22952]/40 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#B7B7B7]">0{idx + 1} //</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B7B7B7] group-hover:text-[#F22952] group-hover:border-[#F22952]/30 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#F22952] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#B7B7B7] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
