import React from 'react';
import { TEAM_DATA } from '../../data/siteData';
import { Github, Linkedin, Twitter, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-10 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>10 // THE TEAM</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              THE PEOPLE BEHIND <br />
              <span className="text-chrome">THE PIXELS.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            Engineers, system architects, and interaction designers who live and breathe high-performance software.
          </p>
        </div>

        {/* Team Editorial Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-white/15 hover:border-[#F22952]/50 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden"
              data-cursor="MEMBER"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#B7B7B7]">
                    ROLE 0{idx + 1} //
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/5 text-white/80 border border-white/10">
                    {member.location}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase group-hover:text-[#F22952] transition-colors">
                    {member.name}
                  </h3>
                  <div className="font-mono text-xs text-[#F22952] font-semibold">
                    {member.role}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#090909] border border-white/10 text-xs font-mono text-white/90">
                  <span className="text-[#B7B7B7] block text-[10px] uppercase mb-1">Specialization:</span>
                  {member.specialty}
                </div>

                <p className="text-sm text-[#B7B7B7] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social and Profile */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                      title="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE ON PROJECTS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
