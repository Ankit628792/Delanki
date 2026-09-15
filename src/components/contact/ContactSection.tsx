import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_DATA } from '../../data/siteData';
import { Send, CheckCircle2, Mail, Github, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialMode?: 'build' | 'hire';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMode = 'build' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F22952', '#FFFFFF', '#090909'],
        });
      } catch {
        // fallback
      }
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-10 bg-[#0c0c0c] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>12 // INITIATE COLLABORATION</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              LET'S MAKE <br />
              <span className="text-chrome">SOMETHING REAL.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            Send us a quick note about what you want to build or email us directly at <span className="text-white font-mono">{COMPANY_DATA.email}</span>. We reply within 24 hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Direct Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121212] border border-white/15 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#F22952] uppercase tracking-widest font-bold">
                  DIRECT CHANNELS
                </span>
                <h3 className="font-display font-bold text-2xl text-white uppercase">
                  TALK TO BUILDERS
                </h3>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F22952] flex items-center justify-between text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#F22952]" />
                    <span>{COMPANY_DATA.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B7B7B7]" />
                </a>

                <a
                  href={COMPANY_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-between text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span>github.com/Ankit628792/Delanki</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B7B7B7]" />
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 space-y-1 font-mono text-[11px] text-[#B7B7B7]">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CURRENT AVAILABILITY</span>
                </div>
                <p>Accepting new product development builds & sprint talent for 2023.</p>
              </div>
            </div>
          </div>

          {/* Right: Essential, Zero-Friction Form (Name, Email, Message) */}
          <div className="lg:col-span-8 bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F22952]/20 border border-[#F22952] flex items-center justify-center text-[#F22952]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-3xl text-white uppercase">
                    MESSAGE RECEIVED.
                  </h3>
                  <p className="text-[#B7B7B7] max-w-md mx-auto text-sm">
                    Thank you for reaching out, {formData.name || 'there'}! The Del<span className="text-[#F22952]">anki</span> team will review your message and follow up within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-[#B7B7B7] uppercase">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the product you want to build, engineering talent you need, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#090909] border border-white/15 focus:border-[#F22952] rounded-xl p-3.5 text-sm text-white focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#F22952] hover:bg-[#ff305c] disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(242,41,82,0.35)] flex items-center justify-center gap-2 active:scale-[0.99]"
                  data-cursor="SUBMIT"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'TRANSMITTING...' : 'SEND THE IDEA →'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
