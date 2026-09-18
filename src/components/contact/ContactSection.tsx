import React, { useState } from 'react';
import { COMPANY_DATA } from '../../data/siteData';
import { Mail, Linkedin, ArrowUpRight, Copy, Check, ShieldAlert, Sparkles, User, Terminal, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  initialMode?: 'build' | 'hire';
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(COMPANY_DATA.founderEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-10 bg-[#0c0c0c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>12 // DIRECT FOUNDER ACCESS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              REACH ANKIT <br />
              <span className="text-chrome">DIRECTLY.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            The automated contact form is currently disabled. All project scoping, custom development, and talent partnerships are handled directly by Ankit.
          </p>
        </div>

        {/* Status Callout Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-[#F22952]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/15 border border-[#F22952]/40 flex items-center justify-center shrink-0 text-[#F22952]">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase text-white tracking-wider">
                  ONLINE FORM CURRENTLY DISABLED
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#F22952]" />
                <span className="hidden sm:inline font-mono text-[11px] text-[#B7B7B7]">DIRECT PROTOCOL ACTIVE</span>
              </div>
              <p className="text-xs text-[#B7B7B7]">
                Please contact Ankit directly via email or LinkedIn for immediate response without agency intermediaries.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <button
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>
            <a
              href={`mailto:${COMPANY_DATA.founderEmail}?subject=Project%20Inquiry%20-%20Delanki`}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs uppercase font-bold transition-all shadow-[0_0_20px_rgba(242,41,82,0.35)] flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL ANKIT</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Left Ankit Card + Right Direct Protocol & Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Ankit Profile & Founder Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/15 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F22952]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Profile Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F22952] to-[#800f24] text-white flex items-center justify-center font-display font-black text-2xl shadow-lg shadow-[#F22952]/25 border border-white/20">
                    A
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-2xl text-white uppercase">
                        {COMPANY_DATA.founderName}
                      </h3>
                      <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#F22952]/20 text-[#F22952] border border-[#F22952]/40">
                        FOUNDER
                      </span>
                    </div>
                    <p className="font-mono text-xs text-[#B7B7B7]">
                      {COMPANY_DATA.founderRole}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DIRECT ACCESS</span>
                </div>
              </div>

              {/* Bio / Focus */}
              <p className="text-sm text-[#B7B7B7] leading-relaxed font-sans">
                Leading engineering and architecture across all Delanki web platforms, cross-platform apps, developer tools, and browser extensions. Available for end-to-end builds, technical advisory, and dedicated sprint talent.
              </p>

              {/* Direct Reach Buttons */}
              <div className="space-y-3 font-mono text-xs pt-2">
                <a
                  href={`mailto:${COMPANY_DATA.founderEmail}?subject=Project%20Inquiry%20-%20Delanki`}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F22952] flex items-center justify-between text-white transition-all group hover:bg-[#F22952]/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F22952]/20 text-[#F22952] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#B7B7B7] uppercase block">DIRECT EMAIL</span>
                      <span className="font-bold">{COMPANY_DATA.founderEmail}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B7B7B7] group-hover:text-[#F22952] transition-colors" />
                </a>

                <a
                  href={COMPANY_DATA.founderLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2] flex items-center justify-between text-white transition-all group hover:bg-[#0A66C2]/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#B7B7B7] uppercase block">LINKEDIN PROFILE</span>
                      <span className="font-bold">linkedin.com/in/ankit628792</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B7B7B7] group-hover:text-[#0A66C2] transition-colors" />
                </a>
              </div>

              {/* Founder Guarantee */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#B7B7B7]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>SLA: Response within 24h</span>
                </span>
                <span>NO MIDDLEMEN // NO REPS</span>
              </div>
            </div>
          </div>

          {/* Right: What to Include & Disabled Form Preview */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Guide on reaching Ankit */}
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/15 space-y-5">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#F22952] uppercase tracking-widest font-bold">
                  PROJECT TRANSMISSION GUIDE
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  WHAT TO INCLUDE IN YOUR NOTE
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#B7B7B7] leading-relaxed">
                When reaching out to Ankit directly, sharing any of the following details helps fast-track your scoping and architecture blueprint:
              </p>

              <ul className="space-y-3 font-mono text-xs text-white">
                <li className="p-3 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[#F22952]/20 text-[#F22952] flex items-center justify-center shrink-0 font-bold">1</span>
                  <div>
                    <span className="text-white font-bold block mb-0.5">Product Scope or Problem</span>
                    <span className="text-[#B7B7B7] text-[11px]">What does the tool do, who is it for, and what problem does it solve?</span>
                  </div>
                </li>
                <li className="p-3 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[#F22952]/20 text-[#F22952] flex items-center justify-center shrink-0 font-bold">2</span>
                  <div>
                    <span className="text-white font-bold block mb-0.5">Target Platform(s)</span>
                    <span className="text-[#B7B7B7] text-[11px]">Web application, React Native mobile app, Chrome MV3 extension, or VS Code extension.</span>
                  </div>
                </li>
                <li className="p-3 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-[#F22952]/20 text-[#F22952] flex items-center justify-center shrink-0 font-bold">3</span>
                  <div>
                    <span className="text-white font-bold block mb-0.5">Timeline & Urgency</span>
                    <span className="text-[#B7B7B7] text-[11px]">Immediate 2-week MVP sprint, ongoing embedded engineering, or flexible timeline.</span>
                  </div>
                </li>
              </ul>

              {/* Fast Action CTA */}
              <div className="pt-2">
                <a
                  href={`mailto:${COMPANY_DATA.founderEmail}?subject=Project%20Inquiry%20-%20Delanki`}
                  className="w-full py-3.5 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(242,41,82,0.35)] flex items-center justify-center gap-2 text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>COMPOSE EMAIL TO ANKIT NOW →</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
