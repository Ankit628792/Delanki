import React, { useState, useEffect } from 'react';
import { COMPANY_DATA } from '../../data/siteData';
import { X, Mail, Linkedin, Copy, Check, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'build' | 'hire';
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'build',
}) => {
  const [mode, setMode] = useState<'build' | 'hire'>(initialMode);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(COMPANY_DATA.founderEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const emailSubject = encodeURIComponent(
    mode === 'hire' ? 'Hire Talent / Engineering Support - Delanki' : 'New Product Build Inquiry - Delanki'
  );

  return (
    <div
      className="fixed inset-0 z-[9000] overflow-y-auto bg-black/85 backdrop-blur-xl p-4 sm:p-6 flex items-start justify-center min-h-screen py-8 sm:py-12 animate-fade-in"
      data-lenis-prevent="true"
      onClick={onClose}
    >
      <div
        className="bg-[#111111] border border-white/20 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative shadow-2xl my-auto max-h-[85vh] overflow-y-auto overscroll-contain space-y-6"
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT PROTOCOL // ANKIT</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
            REACH ANKIT DIRECTLY
          </h3>
          <p className="text-xs sm:text-sm text-[#B7B7B7]">
            The current contact form is disabled. To discuss your build, software architecture, or engineering talent, reach out to Ankit directly.
          </p>
        </div>

        {/* Status Callout */}
        <div className="p-3.5 rounded-2xl bg-[#1a1415] border border-[#F22952]/40 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#F22952]/20 text-[#F22952] flex items-center justify-center shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div className="text-xs space-y-0.5">
            <span className="font-mono font-bold text-white uppercase block">
              AUTOMATED FORM CURRENTLY DISABLED
            </span>
            <span className="text-[#B7B7B7] text-[11px] block">
              Connect directly with the founder for swift evaluation and scope breakdown.
            </span>
          </div>
        </div>

        {/* Ankit Founder Card */}
        <div className="p-6 rounded-2xl bg-[#090909] border border-white/15 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F22952] to-[#800f24] text-white flex items-center justify-center font-display font-black text-xl shadow-md border border-white/20">
                A
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-lg text-white uppercase">
                    {COMPANY_DATA.founderName}
                  </h4>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#F22952]/20 text-[#F22952] font-bold">
                    FOUNDER
                  </span>
                </div>
                <p className="font-mono text-xs text-[#B7B7B7]">
                  {COMPANY_DATA.founderRole}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>
          </div>

          <div className="text-xs text-[#B7B7B7] leading-relaxed">
            Directly oversees all software architecture, MVP sprints, full-stack systems, and extension development at Delanki.
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-1">
            <a
              href={`mailto:${COMPANY_DATA.founderEmail}?subject=${emailSubject}`}
              className="w-full py-3.5 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(242,41,82,0.4)] flex items-center justify-center gap-2 text-center"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ANKIT DIRECTLY ({COMPANY_DATA.founderEmail}) →</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase border border-white/10 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL ADDRESS'}</span>
              </button>

              <a
                href={COMPANY_DATA.founderLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase border border-white/10 hover:border-[#0A66C2]/50 transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LINKEDIN PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B7B7B7]" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#B7B7B7] pt-2 border-t border-white/10">
          <span>RESPONSE SLA: &lt; 24 HOURS</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#F22952] transition-colors underline"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
