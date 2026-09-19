import React from 'react';
import { Link } from '@tanstack/react-router';
import { Home, Shield, Sparkles } from 'lucide-react';
import { scrollToTop } from '../lib/lenis';
import { SEO } from '../components/common/SEO';
import { getNotFoundSEO } from '../lib/seo';

export const NotFoundPage: React.FC = () => {

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <SEO {...getNotFoundSEO()} />
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F22952]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#B7B7B7]">
          <Sparkles className="w-3.5 h-3.5 text-[#F22952]" />
          <span>ERROR 404 // ROUTE NOT FOUND</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold font-syne text-white tracking-tight">
            Lost in Cyberspace?
          </h2>
          <p className="text-sm md:text-base text-[#B7B7B7] font-sans max-w-md mx-auto leading-relaxed">
            The page you are looking for has either been moved, decommissioned, or does not exist in our production registry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            onClick={() => scrollToTop()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-[0_0_25px_rgba(242,41,82,0.4)] hover:shadow-[0_0_35px_rgba(242,41,82,0.6)] transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio</span>
          </Link>

          <Link
            to="/privacy-policy"
            onClick={() => scrollToTop()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#171717] hover:bg-[#222222] border border-white/15 text-white font-mono text-xs uppercase tracking-wider font-medium transition-all duration-300"
          >
            <Shield className="w-4 h-4 text-[#F22952]" />
            <span>Privacy Policy</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
