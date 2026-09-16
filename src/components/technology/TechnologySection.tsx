import React, { useState } from 'react';
import { TECHNOLOGIES_DATA } from '../../data/siteData';
import { TechOrbitScene } from '../three/TechOrbitScene';
import { Layers, Sparkles, Check, Terminal } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const categories = [
    'All',
    'Frontend & Web',
    'Mobile & Native',
    'Extensions & Tooling',
    'Backend & Cloud',
    'Creative 3D & Motion',
  ] as const;

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredTechnologies =
    activeCategory === 'All'
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="technology" className="py-24 md:py-32 px-6 md:px-10 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>08 // TECH MATRIX</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              BUILT WITH THE <br />
              <span className="text-chrome">RIGHT TOOLS.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            We don't chase every hype cycle. We select proven, high-throughput technologies that guarantee long-term stability, developer ergonomics, and speed.
          </p>
        </div>

        {/* 3D Tech Orbit Constellation Interactive View */}
        <div className="bg-[#121212] border border-white/15 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#F22952] uppercase tracking-wider bg-[#F22952]/10 border border-[#F22952]/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              <span>INTERACTIVE TECH RADAR</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
              ORBITING STACK CONSTELLATION
            </h3>
            <p className="text-sm text-[#B7B7B7] leading-relaxed">
              Every technology in our core stack is deeply integrated—from React frontends and React Native mobile apps to Chrome Manifest V3 APIs and GSAP motion drivers.
            </p>
            <div className="font-mono text-xs text-[#B7B7B7] pt-2">
              <span>HOVER NODES TO INSPECT // LIVE VECTOR RADAR</span>
            </div>
          </div>

          <div className="lg:col-span-7 h-[350px] sm:h-[420px] w-full relative">
            <TechOrbitScene activeCategory={activeCategory} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#F22952] text-white font-bold shadow-[0_0_15px_rgba(242,41,82,0.3)]'
                  : 'bg-white/5 text-[#B7B7B7] hover:text-white hover:bg-white/10'
              }`}
              data-cursor="FILTER"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#F22952]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#F22952] transition-colors">
                    {tech.name}
                  </h4>
                  {tech.highlight && (
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#F22952]/20 text-[#F22952] border border-[#F22952]/40 font-bold">
                      CORE
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#B7B7B7] leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#B7B7B7]">
                <span>{tech.category}</span>
                <span className="text-white font-semibold">{tech.proficiency}% MASTERY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
