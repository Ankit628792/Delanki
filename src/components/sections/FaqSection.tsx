import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/siteData';
import { ChevronDown, Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenInquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Development', 'Engagement', 'Extensions', 'Startups & Pricing'];

  const filteredFaqs =
    activeCategory === 'All' ? FAQ_DATA : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>11 // FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              FREQUENT QUESTIONS<span className="text-[#F22952]">.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-sm font-sans leading-relaxed">
            Straight answers about how we build, hire, price, and deliver high-impact digital products.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
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

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#141414] border-[#F22952]/60 shadow-[0_0_25px_rgba(242,41,82,0.15)]'
                    : 'bg-[#111111] border-white/10 hover:border-white/25'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                  data-cursor="EXPAND"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#B7B7B7]">0{idx + 1}</span>
                    <span className="font-display font-bold text-base sm:text-xl text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#F22952] border-[#F22952] text-white rotate-180'
                        : 'border-white/20 text-[#B7B7B7]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#B7B7B7] leading-relaxed border-t border-white/5 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-[#B7B7B7]">
            <MessageSquare className="w-5 h-5 text-[#F22952] shrink-0" />
            <span>Have a unique question not covered here?</span>
          </div>
          <button
            onClick={onOpenInquiry}
            className="font-mono text-xs uppercase px-5 py-2.5 bg-white/10 hover:bg-[#F22952] text-white rounded-xl transition-all font-bold"
          >
            ASK THE TEAM DIRECTLY →
          </button>
        </div>

      </div>
    </section>
  );
};
