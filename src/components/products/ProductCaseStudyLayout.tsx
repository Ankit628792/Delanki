import React, { useEffect } from 'react';
import { ProductItem } from '../../types';
import { PRODUCTS_DATA } from '../../data/siteData';
import { SEO } from '../common/SEO';
import { getProductSEO } from '../../lib/seo';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Calendar,
  Sparkles,
  Layers,
  ChevronRight,
  Share2,
  Check,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { triggerPageTransition } from '../../lib/pageTransition';
import { resetScrollImmediate } from '../../lib/lenis';
import { useInquiry } from '../../context/InquiryContext';
import { ModernCaseStudySections } from './ModernCaseStudySections';

interface ProductCaseStudyLayoutProps {
  product: ProductItem;
  markdownContent: string;
}

export const ProductCaseStudyLayout: React.FC<ProductCaseStudyLayoutProps> = ({
  product,
  markdownContent,
}) => {
  const { openInquiry } = useInquiry();
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    resetScrollImmediate();
  }, [product.slug]);

  // Find next and previous products for easy navigation
  const currentIndex = PRODUCTS_DATA.findIndex((p) => p.slug === product.slug);
  const prevProduct = currentIndex > 0 ? PRODUCTS_DATA[currentIndex - 1] : PRODUCTS_DATA[PRODUCTS_DATA.length - 1];
  const nextProduct = currentIndex < PRODUCTS_DATA.length - 1 ? PRODUCTS_DATA[currentIndex + 1] : PRODUCTS_DATA[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white pt-24 pb-20 selection:bg-[#F22952] selection:text-white">
      <SEO {...getProductSEO(product)} />
      {/* Background Ambience Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <Link
              to="/products"
              onClick={(e) => {
                e.preventDefault();
                triggerPageTransition('/products');
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#B7B7B7] hover:text-[#F22952] transition-colors py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALL PRODUCTS</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="font-mono text-xs sm:text-sm text-white/70 truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#B7B7B7] hover:text-white transition-colors"
              title="Copy Case Study Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED!' : 'SHARE'}</span>
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <header className="space-y-6 pt-2">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#F22952]/15 text-[#F22952] border border-[#F22952]/30">
              {product.category}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#F22952]" />
              <span>RELEASE YEAR: {product.year}</span>
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              {product.status}
            </span>
            {product.featured && (
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>FEATURED</span>
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight uppercase">
              {product.title}
              <span className="text-[#F22952]">.</span>
            </h1>
            <p className="font-sans text-lg sm:text-xl text-[#B7B7B7] max-w-3xl leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Action Links & Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {product.liveUrl && (
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs font-bold uppercase transition-all shadow-lg shadow-[#F22952]/20"
              >
                <span>{product.category === 'VS Code Extension' ? 'INSTALL EXTENSION' : 'VISIT LIVE SITE'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {product.githubUrl && (
              <a
                href={product.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase transition-all border border-white/15"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            )}
            {(product.slug === 'early-learner' || product.slug === 'respira') && (
              <Link
                to={`/products/${product.slug}/privacy-policy`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold uppercase transition-all border border-emerald-500/30"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>PRIVACY POLICY</span>
              </Link>
            )}
            <button
              onClick={() => openInquiry('build')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white font-mono text-xs uppercase transition-all border border-white/10 ml-auto"
            >
              <MessageSquare className="w-4 h-4 text-[#F22952]" />
              <span>DISCUSS SIMILAR BUILD</span>
            </button>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-white/50 mr-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#F22952]" />
              <span>CORE TECHNOLOGIES:</span>
            </span>
            {product.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 rounded-md bg-[#161616] text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Highlights Banner */}
        {product.highlights && product.highlights.length > 0 && (
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#F22952] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>KEY HIGHLIGHTS AT A GLANCE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#171717] border border-white/5 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#F22952]/20 text-[#F22952] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{index + 1}
                  </span>
                  <p className="text-sm text-white/90 leading-relaxed font-sans">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Study Story Content (Separated Modular Layout) */}
        <ModernCaseStudySections
          markdown={markdownContent}
          tagline={product.tagline}
        />

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-br from-[#1c1c1c] via-[#141414] to-[#0d0d0d] border border-white/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>STUDIO COLLABORATION</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              INSPIRED BY THIS PRODUCT<span className="text-[#F22952]">?</span>
            </h3>
            <p className="text-sm text-[#B7B7B7] max-w-lg leading-relaxed">
              We engineer custom web apps, mobile solutions, and developer extensions with meticulous attention to design and performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => openInquiry('build')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs font-bold uppercase transition-all shadow-lg shadow-[#F22952]/30 flex items-center justify-center gap-2"
            >
              <span>DISCUSS YOUR BUILD</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <Link
            to="/product/$slug"
            params={{ slug: prevProduct.slug }}
            onClick={(e) => {
              e.preventDefault();
              triggerPageTransition(`/product/${prevProduct.slug}`);
            }}
            className="group p-5 rounded-2xl bg-[#111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
          >
            <span className="font-mono text-xs text-[#B7B7B7] flex items-center gap-1.5 group-hover:text-[#F22952] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS PRODUCT</span>
            </span>
            <div>
              <h4 className="font-display font-bold text-lg text-white group-hover:text-white uppercase">
                {prevProduct.title}
              </h4>
              <p className="text-xs text-white/50 line-clamp-1">{prevProduct.tagline}</p>
            </div>
          </Link>

          <Link
            to="/product/$slug"
            params={{ slug: nextProduct.slug }}
            onClick={(e) => {
              e.preventDefault();
              triggerPageTransition(`/product/${nextProduct.slug}`);
            }}
            className="group p-5 rounded-2xl bg-[#111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 text-right items-end"
          >
            <span className="font-mono text-xs text-[#B7B7B7] flex items-center gap-1.5 group-hover:text-[#F22952] transition-colors">
              <span>NEXT PRODUCT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
            <div>
              <h4 className="font-display font-bold text-lg text-white group-hover:text-white uppercase">
                {nextProduct.title}
              </h4>
              <p className="text-xs text-white/50 line-clamp-1">{nextProduct.tagline}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
