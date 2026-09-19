import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/siteData';
import { CheckCircle2, Clock } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>07 // WORKFLOW & TIMELINE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              FROM ZERO TO <br />
              <span className="text-chrome">SHIPPED.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            A battle-tested 4-phase delivery system. Transparent sprints, testable staging links, and zero surprises on launch day.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isCurrent
                    ? 'bg-[#181818] border-[#F22952] shadow-[0_0_30px_rgba(242,41,82,0.2)] -translate-y-1'
                    : 'bg-[#111111] border-white/10 hover:border-white/30 hover:bg-[#141414]'
                }`}
                data-cursor="PHASE"
              >
                <div className="space-y-6">
                  {/* Step Top */}
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-3xl font-black ${isCurrent ? 'text-[#F22952]' : 'text-white/20'}`}>
                      {step.number}
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F22952]" /> {step.duration}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-black text-2xl text-white uppercase">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#F22952] font-mono">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#B7B7B7] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <span className="font-mono text-[10px] text-[#B7B7B7] uppercase tracking-wider block">
                      DELIVERABLES:
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-white/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#B7B7B7]">
                  <span>PHASE 0{idx + 1}</span>
                  <span className={isCurrent ? 'text-[#F22952] font-bold' : ''}>
                    {isCurrent ? 'ACTIVE PHASE' : 'EXPLORE'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
