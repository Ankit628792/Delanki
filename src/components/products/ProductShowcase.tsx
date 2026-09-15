import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../data/siteData';
import { ProductItem } from '../../types';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Check, X, Layers, Cpu } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenInquiry }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>05 // SHOWCASE & PRODUCTS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              THINGS WE'VE BUILT<span className="text-[#F22952]">.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            Delanki builds its own software alongside client engagements. Here is a curated selection of tools, extensions, and applications we have engineered.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((product, idx) => (
            <div
              key={product.id}
              className="bg-[#121212] border border-white/15 hover:border-[#F22952]/60 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
              data-cursor="EXPLORE"
            >
              <div className="space-y-6">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                      {product.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#B7B7B7]">{product.year}</span>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border ${
                      product.status === 'Live'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : product.status === 'Open Source'
                        ? 'bg-[#F22952]/10 text-[#F22952] border-[#F22952]/30'
                        : 'bg-white/10 text-white/80 border-white/20'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Product Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase group-hover:text-[#F22952] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#B7B7B7] leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Product Mockup Container */}
                <div className="h-44 sm:h-52 w-full rounded-2xl bg-[#090909] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F22952]" />
                      <span>{product.title.toUpperCase()} // SYSTEM</span>
                    </div>
                    <span>READY</span>
                  </div>

                  <div className="my-auto space-y-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F22952]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-xs text-white/90 font-semibold">{product.description}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {product.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#B7B7B7] border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-xs text-white/80 font-sans">
                  {product.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="font-mono text-xs text-white hover:text-[#F22952] flex items-center gap-1.5 transition-colors uppercase font-semibold"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenInquiry('build')}
                  className="font-mono text-[11px] px-3.5 py-1.5 rounded-lg bg-[#F22952]/10 hover:bg-[#F22952] text-[#F22952] hover:text-white border border-[#F22952]/30 transition-all"
                >
                  BUILD SIMILAR →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#121212] border border-white/20 rounded-3xl p-8 max-w-xl w-full space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#F22952] uppercase tracking-wider">
                {selectedProduct.category} // {selectedProduct.year}
              </span>
              <h3 className="font-display font-extrabold text-3xl text-white uppercase">
                {selectedProduct.title}
              </h3>
              <p className="text-sm text-[#B7B7B7]">{selectedProduct.tagline}</p>
            </div>

            <p className="text-sm text-white/90 leading-relaxed border-t border-b border-white/10 py-4">
              {selectedProduct.description}
            </p>

            <div className="space-y-3">
              <span className="font-mono text-xs text-[#B7B7B7] uppercase block">TECHNOLOGY STACK:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.technologies.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded bg-white/5 border border-white/10 text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/5 transition-colors"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  onOpenInquiry('build');
                }}
                className="px-6 py-3 rounded-xl bg-[#F22952] text-white font-mono text-xs font-bold uppercase shadow-lg shadow-[#F22952]/30 hover:bg-[#ff305c] transition-colors"
              >
                REQUEST CASE STUDY OR BUILD →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
