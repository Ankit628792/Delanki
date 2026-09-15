import React from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { DelankiLogo } from '../common/DelankiLogo';
import { COMPANY_DATA } from '../../data/siteData';
import { scrollToElement, scrollToTop } from '../../lib/lenis';
import { ArrowUp, Github, Mail, Globe, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPrivacyPage = location.pathname.startsWith('/privacy-policy');

  const handleSectionClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (isPrivacyPage) {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          scrollToElement(target);
        }, 150);
      });
    } else {
      scrollToElement(target);
    }
  };
  return (
    <footer className="bg-[#060606] text-white border-t border-white/10 pt-16 pb-16 md:pb-24 px-6 md:px-10 relative overflow-x-clip">
      
      {/* Top Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
        
        {/* Col 1: Studio Brand & Summary */}
        <div className="sm:col-span-2 lg:col-span-2 space-y-4">
          <DelankiLogo variant="dark" size={34} showText={true} />
          <p className="text-sm text-[#B7B7B7] max-w-sm font-sans leading-relaxed pt-2">
            A digital product development studio turning ambitious ideas into resilient web apps, mobile software, and browser extensions.
          </p>

          <div className="pt-2 font-mono text-xs text-[#B7B7B7] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>STUDIO READY // GLOBAL DISPATCH</span>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="space-y-3 font-mono text-xs">
          <span className="text-[#F22952] uppercase font-bold tracking-wider block">
            // SERVICES
          </span>
          <ul className="space-y-2 text-[#B7B7B7]">
            <li>
              <a href="#services" onClick={(e) => handleSectionClick(e, '#services')} className="hover:text-white transition-colors">
                Web App Development
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSectionClick(e, '#services')} className="hover:text-white transition-colors">
                Cross-Device Mobile
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSectionClick(e, '#services')} className="hover:text-white transition-colors">
                Chrome Extensions (MV3)
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSectionClick(e, '#services')} className="hover:text-white transition-colors">
                VS Code Extensions
              </a>
            </li>
            <li>
              <a href="#engagement" onClick={(e) => handleSectionClick(e, '#engagement')} className="hover:text-white transition-colors">
                Hire Dedicated Talent
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div className="space-y-3 font-mono text-xs">
          <span className="text-[#F22952] uppercase font-bold tracking-wider block">
            // NAVIGATION
          </span>
          <ul className="space-y-2 text-[#B7B7B7]">
            <li>
              <a href="#products" onClick={(e) => handleSectionClick(e, '#products')} className="hover:text-white transition-colors">
                Products & Showcase
              </a>
            </li>
            <li>
              <a href="#process" onClick={(e) => handleSectionClick(e, '#process')} className="hover:text-white transition-colors">
                Delivery Process
              </a>
            </li>
            <li>
              <a href="#technology" onClick={(e) => handleSectionClick(e, '#technology')} className="hover:text-white transition-colors">
                Tech Matrix
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleSectionClick(e, '#faq')} className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <Link 
                to="/privacy-policy" 
                onClick={() => scrollToTop()}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Studio Connect */}
        <div className="space-y-3 font-mono text-xs">
          <span className="text-[#F22952] uppercase font-bold tracking-wider block">
            // CONNECT
          </span>
          <ul className="space-y-2 text-[#B7B7B7]">
            <li>
              <a
                href={COMPANY_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-[#F22952]" />
                <span>GitHub Repository</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#F22952]" />
                <span>{COMPANY_DATA.email}</span>
              </a>
            </li>
            <li className="pt-2">
              <button
                onClick={() => onOpenInquiry('build')}
                className="px-3.5 py-1.5 bg-[#F22952] text-white rounded font-bold uppercase text-[10px] hover:bg-[#ff305c] transition-colors"
              >
                BUILD WITH US →
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Massive Editorial "DELANKI." Typographic Mark */}
      <div className="max-w-7xl mx-auto pt-8 sm:pt-10 md:pt-14 pb-6 sm:pb-8 select-none overflow-visible flex items-center justify-center group px-4">
        <h2 className="font-display font-black text-center select-none uppercase tracking-tight leading-none text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] xl:text-[10rem] whitespace-nowrap transition-colors w-full">
          <span className="text-white/10 group-hover:text-white/20 transition-colors">DEL</span>
          <span className="text-[#F22952] group-hover:text-[#ff3b65] transition-colors">ANKI</span>
          <span className="text-[#F22952]">.</span>
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#B7B7B7]">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
          <span>© {COMPANY_DATA.year} Delanki. All rights reserved.</span>
        </div>

        <button
          onClick={() => scrollToTop()}
          className="group flex items-center gap-2 text-white hover:text-[#F22952] transition-colors"
          data-cursor="TOP"
        >
          <span>BACK TO TOP</span>
          <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#F22952] flex items-center justify-center group-hover:-translate-y-1 transition-all">
            <ArrowUp className="w-3 h-3" />
          </span>
        </button>
      </div>

    </footer>
  );
};
