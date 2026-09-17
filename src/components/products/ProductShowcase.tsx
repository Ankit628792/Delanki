import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../data/siteData';
import { ProductItem } from '../../types';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Check,
  X,
  Layers,
  Terminal,
  Sparkles,
  Volume2,
  Smartphone,
  Cpu,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface ProductShowcaseProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenInquiry }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Interactive mock states for the visual widgets
  const [activeSvgIcon, setActiveSvgIcon] = useState<'layers' | 'cpu' | 'terminal' | 'sparkles'>('layers');
  const [activeLetter, setActiveLetter] = useState<'क' | 'A' | '3' | 'अ'>('क');

  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured === true);

  const vectofi = featuredProducts.find((p) => p.id === 'product-vectofi') || featuredProducts[0];
  const stickyNotes = featuredProducts.find((p) => p.id === 'product-sticky-notes') || featuredProducts[1];
  const earlyLearner = featuredProducts.find((p) => p.id === 'product-early-learner') || featuredProducts[2];

  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>05 // FEATURED SHOWCASE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              FEATURED PROJECTS<span className="text-[#F22952]">.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
              Curated spotlight of our flagship web applications, mobile platforms, and developer tooling.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#F22952] text-white font-mono text-xs font-bold uppercase transition-all shadow-lg hover:shadow-[#F22952]/30"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Balanced Curated Grid Layout: Hero Flagship + Dual Symmetrical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ROW 1: Hero Flagship Card (Full 12 columns, horizontal split) */}
          {vectofi && (
            <div
              className="lg:col-span-12 bg-[#121212] border border-white/15 hover:border-[#F22952]/60 rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 group relative overflow-hidden"
              data-cursor="EXPLORE"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Editorial & Overview */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                        {vectofi.category}
                      </span>
                      <span className="font-mono text-[11px] text-[#B7B7B7]">{vectofi.year}</span>
                      <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#F22952]/20 text-[#F22952] border border-[#F22952]/40">
                        FLAGSHIP PRODUCT
                      </span>
                      <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 ml-auto">
                        {vectofi.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase group-hover:text-[#F22952] transition-colors">
                        {vectofi.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#B7B7B7] leading-relaxed">
                        {vectofi.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {vectofi.description}
                    </p>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/85 font-sans pt-2">
                      {vectofi.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 min-w-0">
                          <Check className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                          <span className="truncate">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions - Minimal Text on Mobile */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProduct(vectofi)}
                      className="font-mono text-xs text-white hover:text-[#F22952] flex items-center gap-1.5 transition-colors uppercase font-semibold py-2"
                    >
                      <span className="sm:hidden">CASE STUDY</span>
                      <span className="hidden sm:inline">VIEW FULL CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {vectofi.liveUrl && (
                        <a
                          href={vectofi.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-[#F22952] text-white border border-white/20 hover:border-[#F22952] transition-all flex items-center gap-1.5 font-bold"
                        >
                          <span className="sm:hidden">VISIT</span>
                          <span className="hidden sm:inline">VISIT LIVE APP</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Interactive Live Visual Lab */}
                <div className="lg:col-span-5 rounded-2xl bg-[#090909] border border-white/10 p-5 flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F22952] animate-pulse" />
                      <span>VECTOFI // INTERACTIVE SVG LAB</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">REACT READY</span>
                  </div>

                  <div className="space-y-4 my-auto">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] text-[#B7B7B7] uppercase block">PREVIEW VECTOR PRIMITIVES:</span>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { id: 'layers', label: 'Layers', Icon: Layers },
                          { id: 'cpu', label: 'CPU', Icon: Cpu },
                          { id: 'terminal', label: 'Terminal', Icon: Terminal },
                          { id: 'sparkles', label: 'Spark', Icon: Sparkles },
                        ].map(({ id, label, Icon }) => (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setActiveSvgIcon(id as any)}
                            className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                              activeSvgIcon === id
                                ? 'bg-[#F22952]/20 border-[#F22952] text-[#F22952]'
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="font-mono text-[8px] uppercase">{label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* SVG Code Output Preview */}
                    <div className="bg-[#050505] rounded-xl border border-white/10 p-3.5 font-mono text-[11px] space-y-1">
                      <div className="text-[#F22952] font-semibold">// &lt;{activeSvgIcon.toUpperCase()}_GLYPH /&gt;</div>
                      <div className="text-white/80 truncate">viewBox="0 0 24 24" fill="none"</div>
                      <div className="text-[#FFBD2E] truncate">stroke="currentColor" strokeWidth=&#123;1.5&#125;</div>
                      <div className="text-emerald-400 text-[10px] pt-1 border-t border-white/5 flex items-center justify-between">
                        <span>✓ Clean DOM node</span>
                        <span>0 runtime deps</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {vectofi.technologies.map((t) => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#B7B7B7] border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ROW 2: Equal Symmetrical Pair (6 cols + 6 cols) */}

          {/* Card 2: Sticky Notes for VS Code */}
          {stickyNotes && (
            <div
              className="lg:col-span-6 bg-[#121212] border border-white/15 hover:border-[#F22952]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
              data-cursor="EXPLORE"
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                      {stickyNotes.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#B7B7B7]">{stickyNotes.year}</span>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {stickyNotes.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase group-hover:text-[#F22952] transition-colors">
                    {stickyNotes.title}
                  </h3>
                  <p className="text-sm text-[#B7B7B7] leading-relaxed">
                    {stickyNotes.tagline}
                  </p>
                </div>

                {/* Editor Simulation Container */}
                <div className="rounded-2xl bg-[#090909] border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-[10px] text-[#B7B7B7] ml-2">editor.ts — VS Code</span>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      GUTTER TAGS
                    </span>
                  </div>

                  <div className="font-mono text-[11px] space-y-2 text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 text-[10px] w-4">12</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold border border-amber-500/40">
                        // TODO [P1]
                      </span>
                      <span className="text-white/70 truncate">Refactor JWT session token</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 text-[10px] w-4">13</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[9px] font-bold border border-rose-500/40">
                        // FIXME
                      </span>
                      <span className="text-white/70 truncate">Edge case on offline reconnect</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 text-[10px] w-4">14</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-bold border border-cyan-500/40">
                        // NOTE
                      </span>
                      <span className="text-white/70 truncate">Interactive sidebar panel sync</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {stickyNotes.technologies.map((t) => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#B7B7B7] border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-xs text-white/80 font-sans">
                  {stickyNotes.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 min-w-0">
                      <Check className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Row - Minimal text on mobile */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProduct(stickyNotes)}
                  className="font-mono text-xs text-white hover:text-[#F22952] flex items-center gap-1.5 transition-colors uppercase font-semibold py-2"
                >
                  <span className="sm:hidden">DETAILS</span>
                  <span className="hidden sm:inline">VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {stickyNotes.liveUrl && (
                    <a
                      href={stickyNotes.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-3 sm:px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F22952] text-white border border-white/20 hover:border-[#F22952] transition-all flex items-center gap-1.5 font-bold"
                    >
                      <span className="sm:hidden">INSTALL</span>
                      <span className="hidden sm:inline">INSTALL EXTENSION</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Early Learner Mobile App */}
          {earlyLearner && (
            <div
              className="lg:col-span-6 bg-[#121212] border border-white/15 hover:border-[#F22952]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
              data-cursor="EXPLORE"
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                      {earlyLearner.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#B7B7B7]">{earlyLearner.year}</span>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/30">
                    {earlyLearner.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase group-hover:text-[#F22952] transition-colors">
                    {earlyLearner.title}
                  </h3>
                  <p className="text-sm text-[#B7B7B7] leading-relaxed">
                    {earlyLearner.tagline}
                  </p>
                </div>

                {/* Interactive Kids Learning Canvas Container */}
                <div className="rounded-2xl bg-[#090909] border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-[#F22952]" />
                      <span>LEARN_ENGINE // TRACING & AUDIO</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      <span>OFFLINE AUDIO</span>
                    </div>
                  </div>

                  {/* Character Selector & Tracing Pad Preview */}
                  <div className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5 bg-[#050505] rounded-xl border border-white/15 p-3 flex flex-col items-center justify-center relative">
                      <div className="text-4xl font-display font-black text-white py-1 drop-shadow-md">
                        {activeLetter}
                      </div>
                      <div className="font-mono text-[8px] text-[#F22952] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
                        <span>STROKE ACTIVE</span>
                      </div>
                    </div>

                    <div className="col-span-7 space-y-1.5">
                      <span className="font-mono text-[9px] text-[#B7B7B7] uppercase block">TAP TO TEST TRACING:</span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {(['क', 'A', '3', 'अ'] as const).map((letter) => (
                          <button
                            key={letter}
                            type="button"
                            onClick={() => setActiveLetter(letter)}
                            className={`py-2 rounded-lg border font-display font-bold text-sm transition-all ${
                              activeLetter === letter
                                ? 'bg-[#F22952] border-[#F22952] text-white shadow-md shadow-[#F22952]/40 scale-105'
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {letter}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-[#B7B7B7] pt-0.5 truncate">
                        Native speech synth & stroke recognition.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {earlyLearner.technologies.map((t) => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#B7B7B7] border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-xs text-white/80 font-sans">
                  {earlyLearner.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 min-w-0">
                      <Check className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Row - Minimal text on mobile */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProduct(earlyLearner)}
                  className="font-mono text-xs text-white hover:text-[#F22952] flex items-center gap-1.5 transition-colors uppercase font-semibold py-2"
                >
                  <span className="sm:hidden">DETAILS</span>
                  <span className="hidden sm:inline">VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {earlyLearner.githubUrl && (
                    <a
                      href={earlyLearner.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-3 sm:px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F22952] text-white border border-white/20 hover:border-[#F22952] transition-all flex items-center gap-1.5 font-bold"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="sm:hidden">CODE</span>
                      <span className="hidden sm:inline">GITHUB REPO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Clean Balanced Bottom Portal Strip (NO project numbers or counts) */}
        <div className="p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl text-white uppercase tracking-tight">
              LOOKING FOR MORE WORK?
            </h4>
            <p className="text-xs sm:text-sm text-[#B7B7B7]">
              Explore our full portfolio archive of web apps, mobile apps, and developer extensions.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs font-bold uppercase transition-all shadow-lg shadow-[#F22952]/30 flex items-center gap-2"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#121212] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="font-mono text-xs text-[#F22952] uppercase tracking-wider">
                {selectedProduct.category} // {selectedProduct.year}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
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

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {selectedProduct.liveUrl && (
                  <a
                    href={selectedProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase transition-colors flex items-center gap-1.5"
                  >
                    <span className="sm:hidden">{selectedProduct.category === 'VS Code Extension' ? 'INSTALL' : 'VISIT'}</span>
                    <span className="hidden sm:inline">{selectedProduct.category === 'VS Code Extension' ? 'INSTALL EXTENSION' : 'VISIT LIVE SITE'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProduct.githubUrl && (
                  <a
                    href={selectedProduct.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span className="sm:hidden">CODE</span>
                    <span className="hidden sm:inline">GITHUB CODE</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedProduct(null);
                  onOpenInquiry('build');
                }}
                className="px-4 sm:px-6 py-2 rounded-xl bg-[#F22952] text-white font-mono text-xs font-bold uppercase shadow-lg shadow-[#F22952]/30 hover:bg-[#ff305c] transition-colors"
              >
                <span className="sm:hidden">DISCUSS →</span>
                <span className="hidden sm:inline">DISCUSS SIMILAR PROJECT →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
