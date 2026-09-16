import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_DATA } from '../../data/siteData';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#F22952', '#FFFFFF', '#090909'],
        });
      } catch {
        // fallback
      }
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-[9000] overflow-y-auto bg-black/85 backdrop-blur-xl p-4 sm:p-6 flex items-start justify-center min-h-screen py-8 sm:py-12 animate-fade-in"
      data-lenis-prevent="true"
      onClick={onClose}
    >
      <div
        className="bg-[#111111] border border-white/20 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative shadow-2xl my-auto max-h-[85vh] overflow-y-auto overscroll-contain"
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

        {submitted ? (
          <div className="py-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F22952]/20 border border-[#F22952] flex items-center justify-center text-[#F22952]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-3xl text-white uppercase">
                INQUIRY DISPATCHED.
              </h3>
              <p className="text-[#B7B7B7] text-sm max-w-md mx-auto">
                Thanks, {formData.name || 'there'}! The Del<span className="text-[#F22952]">anki</span> engineering team will reach out directly at <strong className="text-white">{formData.email}</strong> within 24 hours.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs font-bold uppercase rounded-xl transition-all"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DEL<span className="text-[#F22952]">ANKI</span> PROJECT DESK</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
                LET'S BUILD SOMETHING REAL
              </h3>
              <p className="text-xs sm:text-sm text-[#B7B7B7]">
                Connect directly with our engineering team to scope your build, embed dedicated talent, or explore a collaboration.
              </p>
            </div>

            {/* Form with essential fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#B7B7B7] uppercase">NAME *</label>
                <input
                  required
                  type="text"
                  placeholder="Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 focus:border-[#F22952] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#B7B7B7] uppercase">EMAIL *</label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 focus:border-[#F22952] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#B7B7B7] uppercase">MESSAGE / SCOPE *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you'd like to build, talent requirements, tech stack, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 focus:border-[#F22952] rounded-xl p-3.5 text-sm text-white focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#F22952] hover:bg-[#ff305c] disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(242,41,82,0.4)] flex items-center justify-center gap-2 mt-2 active:scale-[0.99]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{loading ? 'TRANSMITTING...' : 'DISPATCH INQUIRY →'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
