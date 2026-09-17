import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { DelankiLogo } from '../common/DelankiLogo';
import { scrollToElement, scrollToTop } from '../../lib/lenis';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { triggerPageTransition } from '../../lib/pageTransition';

interface NavbarProps {
  onOpenInquiry: (initialMode?: 'build' | 'hire') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isSubPage = !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['services', 'products', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', target: '#services' },
    { label: 'Products', href: '#products', target: '#products' },
    { label: 'About', href: '#about', target: '#about' },
    { label: 'Contact', href: '#contact', target: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isSubPage) {
      triggerPageTransition('/');
      setTimeout(() => {
        scrollToElement(target);
      }, 700);
    } else {
      scrollToElement(target);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isSubPage) {
      triggerPageTransition('/');
    } else {
      scrollToTop();
    }
  };

  return (
    <>
      {/* Top Floating Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#090909]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo with Brand Glow */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
            data-cursor="DELANKI"
            aria-label="Delanki Home"
          >
            <DelankiLogo variant="dark" size={36} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121212]/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'text-white font-semibold bg-[#F22952]/20 border border-[#F22952]/40 text-[#F22952]'
                      : 'text-[#B7B7B7] hover:text-white hover:bg-white/5'
                  }`}
                  data-cursor="NAVIGATE"
                >
                  {link.label}
                  {isActive && (
                    <span className="inline-block w-1 h-1 rounded-full bg-[#F22952] ml-1.5 animate-pulse" />
                  )}
                </a>
              );
            })}

           
          </nav>

          {/* Right Action: Studio Status & CTA */}
          <div className="hidden md:flex items-center gap-4">

            <button
              onClick={() => onOpenInquiry('build')}
              className="group relative inline-flex items-center gap-2 bg-[#F22952] hover:bg-[#ff3b63] text-white text-xs font-mono uppercase tracking-widest font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(242,41,82,0.35)] hover:shadow-[0_0_30px_rgba(242,41,82,0.6)] active:scale-95"
              data-cursor="BUILD"
            >
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>BUILD WITH US</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => onOpenInquiry('build')}
              className="bg-[#F22952] text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-full"
            >
              BUILD
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white border border-white/20 rounded-lg bg-[#121212]/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F22952]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Y2K Editorial Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#090909] transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col gap-5">
          <span className="font-mono text-xs tracking-widest text-[#F22952] uppercase">
            // INDEX & EXPLORATION
          </span>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.target)}
              className="group flex items-baseline justify-between py-2 border-b border-white/10 text-3xl font-display font-black uppercase text-white hover:text-[#F22952] transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#B7B7B7]">0{idx + 1}</span>
                <span>{link.label}</span>
              </div>
              <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-white/15">
          <div className="flex justify-between items-center font-mono text-xs text-[#B7B7B7]">
            <span>DELANKI STUDIO</span>
            <Link
              to="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F22952] hover:text-[#ff3b63] underline underline-offset-2 transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('hire');
              }}
              className="w-full py-3 text-center border border-white/20 text-white font-mono text-xs uppercase tracking-wider rounded-lg hover:border-[#F22952]"
            >
              HIRE TALENT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('build');
              }}
              className="w-full py-3 text-center bg-[#F22952] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-lg shadow-lg shadow-[#F22952]/30"
            >
              BUILD WITH US →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
