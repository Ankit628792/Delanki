import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getKurushYarnPrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  EyeOff,
  Share2,
  ChevronRight,
  Palette,
  WifiOff,
  Globe,
  Database,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const KurushYarnPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Exhibition Scope' },
    { id: 'pwa-caching', label: '2. PWA Offline Caching' },
    { id: 'zero-collection', label: '3. Zero Personal Data & Cookies' },
    { id: 'webgl-rendering', label: '4. WebGL Canvas Acceleration' },
    { id: 'no-third-party', label: '5. Zero Ads & Analytics' },
    { id: 'cache-management', label: '6. Clearing Service Worker Cache' },
    { id: 'global-compliance', label: '7. GDPR & Global Rights' },
    { id: 'contact-desk', label: '8. Policy Updates & Contact Desk' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id);
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleShareLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO {...getKurushYarnPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'KURUSH-YARN', to: '/product/$slug', params: { slug: 'kurush-yarn' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <Palette className="w-3.5 h-3.5" />,
            label: 'TACTILE ART EXHIBITION',
            variant: 'rose',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>KURUSH-YARN // EXHIBITION PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            KURUSH-YARN PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Kurush-Yarn is engineered as a peaceful, offline-capable digital exhibition showcasing handcrafted textile art. We operate on a strict zero-surveillance philosophy: no user accounts, no tracking cookies, no advertising SDKs, and zero collection of personal information.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-emerald-400 font-bold">STATUS: ACTIVE &amp; PWA SECURE</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: JANUARY 2026</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>STORAGE: LOCAL BROWSER CACHE ONLY</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <WifiOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              PWA Offline
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Service workers cache visual assets locally so you can browse the art gallery fully offline with zero network latency.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Zero Accounts
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              No signups, no emails, no passwords, and no user profiles. Your exhibition viewing remains completely anonymous.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Cookie-Free
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Zero behavioral advertising cookies, zero analytics beacons, and no marketing tags used on the domain.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <Globe className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Pure Exhibition
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              A serene digital space dedicated strictly to textile art, handcrafted kurush stitches, and visual presentation.
            </p>
          </div>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 p-5 rounded-2xl bg-[#121212]/90 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F22952] font-bold">
                // LEGAL OUTLINE
              </span>
              <span className="font-mono text-[10px] text-[#B7B7B7]">{navItems.length} SECTIONS</span>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToElement(`#${item.id}`)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F22952]/15 text-white font-bold border border-[#F22952]/40'
                        : 'text-[#B7B7B7] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="truncate pr-2">{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F22952] shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <Link
                to="/product/$slug"
                params={{ slug: 'kurush-yarn' }}
                className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>VIEW CASE STUDY</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Legal Sections Body */}
          <article className="lg:col-span-8 space-y-12 text-[#B7B7B7] text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <section
              id="introduction"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>01</span>
                <span className="text-white/20">/</span>
                <span>EXHIBITION SCOPE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction &amp; Exhibition Scope
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) presents <strong>Kurush-Yarn</strong>, a digital gallery celebrating handcrafted kurush and textile art objects.
                </p>
                <p>
                  Our gallery philosophy emphasizes mindful, distraction-free art exploration. We do not gather viewer analytics, build audience behavioral graphs, or display commercial marketing units.
                </p>
                <p>
                  This Privacy Policy applies to all visitors accessing Kurush-Yarn on the web or installed as a PWA.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="pwa-caching"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>OFFLINE ARCHITECTURE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. Progressive Web App (PWA) Offline Caching
              </h2>
              <div className="space-y-4">
                <p>
                  Kurush-Yarn employs a client-side Service Worker to cache exhibition assets locally on your device:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li><strong>Static Asset Cache:</strong> 3D geometry, high-resolution photography, and fonts are stored in your device’s Cache Storage for instant offline loading.</li>
                  <li><strong>No Network Logging:</strong> The service worker intercepts asset requests solely to fulfill them from local storage, without sending telemetry to our studio.</li>
                  <li><strong>Standalone Sandbox:</strong> Installing the PWA to your home screen or desktop runs within standard browser sandboxing with no elevated system permissions.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="zero-collection"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>DATA EXCLUSION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. Zero Personal Data &amp; Zero Cookies
              </h2>
              <div className="space-y-4">
                <p>
                  Kurush-Yarn operates on a strict non-collection standard:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>No names, emails, or phone numbers</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>No location or GPS coordinates</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>No IP logging or telemetry</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>No marketing or profiling cookies</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="webgl-rendering"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>GRAPHICS SAFETY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. WebGL Canvas Acceleration
              </h2>
              <div className="space-y-4">
                <p>
                  Interactive textile objects are rendered using HTML5 Canvas and local WebGL shaders:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>Texture shading and yarn lighting compute entirely in your local graphics hardware.</li>
                  <li>No device fingerprinting or persistent hardware identifiers are captured.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="no-third-party"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>ZERO ADVERTISING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Zero Ads &amp; Analytics
              </h2>
              <div className="space-y-4">
                <p>
                  The exhibition contains zero third-party commercial SDKs, ad networks, or user tracking tags.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="cache-management"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>USER CONTROL</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Clearing Service Worker Cache
              </h2>
              <div className="space-y-4">
                <p>
                  You can purge all cached artwork files and unregister the service worker at any time:
                </p>
                <ol className="space-y-2 list-decimal list-inside text-white/90">
                  <li>Open your browser settings and navigate to <strong className="text-white">Site Settings / Storage</strong>.</li>
                  <li>Find <strong className="text-white">kurush-yarn.vercel.app</strong> or <strong className="text-white">delanki.com</strong>.</li>
                  <li>Click <strong className="text-white">Clear data and unregister</strong>.</li>
                </ol>
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="global-compliance"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>REGULATORY COMPLIANCE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. GDPR &amp; Global Rights
              </h2>
              <div className="space-y-4">
                <p>
                  Because Kurush-Yarn collects zero personal data, your rights under GDPR (EU), CCPA (California), and international frameworks are naturally respected.
                </p>
              </div>
            </section>

            {/* Section 8: Contact Desk */}
            <section
              id="contact-desk"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#F22952]/40 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>CONTACT DESK</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. Policy Updates &amp; Contact Desk
              </h2>
              <div className="space-y-4">
                <p>
                  We may periodically review and update this Privacy Policy. Any revisions will be published directly to this URL:
                </p>
                <p className="font-mono text-xs text-[#F22952]">
                  https://www.delanki.com/products/kurush-yarn/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      KURUSH-YARN CURATORIAL &amp; PRIVACY INQUIRIES
                    </span>
                    <span className="font-mono text-sm sm:text-base text-white font-bold">
                      {COMPANY_DATA.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase flex items-center gap-1.5 transition-colors"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedEmail ? 'COPIED' : 'COPY EMAIL'}</span>
                    </button>
                    <a
                      href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent('Kurush-Yarn Privacy Inquiry')}`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: KURUSH-YARN</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'kurush-yarn' }}
                      className="text-white hover:text-[#F22952] transition-colors"
                    >
                      CASE STUDY
                    </Link>
                    <Link
                      to="/products"
                      className="text-white hover:text-[#F22952] transition-colors"
                    >
                      ALL PRODUCTS
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};
