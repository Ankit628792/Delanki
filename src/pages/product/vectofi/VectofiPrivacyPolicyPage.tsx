import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getVectofiPrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  EyeOff,
  Database,
  Share2,
  ChevronRight,
  Code2,
  Cpu,
  Lock,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const VectofiPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Client Architecture' },
    { id: 'zero-cloud-storage', label: '2. Zero Cloud Storage & Isolation' },
    { id: 'local-browser-storage', label: '3. LocalStorage Sandbox' },
    { id: 'svg-sanitization', label: '4. SVG Security & Sanitization' },
    { id: 'webgl-rendering', label: '5. WebGL Hardware Acceleration' },
    { id: 'zero-trackers', label: '6. Zero Ads & No Tracking SDKs' },
    { id: 'data-deletion', label: '7. Clearing Local State' },
    { id: 'global-compliance', label: '8. GDPR & CCPA Compliance' },
    { id: 'contact-desk', label: '9. Policy Updates & Contact Desk' },
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
      <SEO {...getVectofiPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'VECTOFI', to: '/product/$slug', params: { slug: 'vectofi' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <Code2 className="w-3.5 h-3.5" />,
            label: 'CLIENT-SIDE VECTOR ENGINE',
            variant: 'violet',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>VECTOFI // APP PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            VECTOFI PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Delanki is committed to the absolute protection of developer intellectual property and vector assets. Vectofi is engineered from the ground up as a 100% in-browser vector graphics laboratory with zero cloud uploads, zero remote databases, zero account mandates, and zero tracking telemetry.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-emerald-400 font-bold">STATUS: ACTIVE &amp; CLIENT-ISOLATED</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: JANUARY 2026</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>STORAGE: 100% CLIENT BROWSER SANDBOX</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              100% In-Browser
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              All Bezier paths and SVG nodes calculate locally via client JavaScript and WebGL. No files upload to remote servers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Local Sandbox
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Custom presets, export preferences, and hex palettes reside exclusively in your browser’s isolated LocalStorage.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              SVG Sanitized
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Executable scripts and inline handlers are stripped client-side automatically to prevent Cross-Site Scripting (XSS).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Zero Telemetry
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              No banner advertising, no tracking pixels, and no analytics SDKs. A pure developer-first creative sanctuary.
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
                params={{ slug: 'vectofi' }}
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
                <span>CLIENT-SIDE ARCHITECTURE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction &amp; Client Architecture
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) is the engineering entity behind <strong>Vectofi</strong>, an interactive browser-based vector graphics engine and code generator for developers and digital product teams.
                </p>
                <p>
                  We believe developer assets belong exclusively on developer workstations. Vectofi was deliberately built without central rendering servers or asset databases: every Bezier curve calculation, node interpolation, color matrix shift, and multi-framework export executes locally in your browser window.
                </p>
                <p>
                  This Privacy Policy applies specifically to the Vectofi web application across all modern desktop and mobile browsers.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="zero-cloud-storage"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>DATA ISOLATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. Zero Cloud Storage &amp; Isolation
              </h2>
              <div className="space-y-4">
                <p>
                  When you modify icons or import custom SVG markup into the Vectofi Laboratory:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li><strong>Zero File Uploads:</strong> Vectors are parsed directly into DOM elements on your screen. No file payloads or binary streams are transmitted to our servers.</li>
                  <li><strong>No Image Content Telemetry:</strong> We do not log filenames, node counts, color values, or vector coordinates.</li>
                  <li><strong>No Account Requirements:</strong> Vectofi operates freely without user accounts, emails, passwords, or profile tracking.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="local-browser-storage"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>STORAGE SANDBOX</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. LocalStorage Sandbox
              </h2>
              <div className="space-y-4">
                <p>
                  To preserve your active canvas choices between browser sessions (such as stroke thickness, export framework target, and custom hex palettes), Vectofi uses standard <code className="text-[#F22952] font-mono text-xs">window.localStorage</code>:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 space-y-2 font-mono text-xs text-[#B7B7B7]">
                  <div>• <span className="text-[#F22952]">vectofi_theme:</span> Stores user UI preference (dark/light mode).</div>
                  <div>• <span className="text-[#F22952]">vectofi_palette:</span> Active hex codes for live color token previews.</div>
                  <div>• <span className="text-[#F22952]">vectofi_export_fmt:</span> Default export language (React JSX, SVG, Vue, React Native).</div>
                </div>
                <p className="text-xs text-[#888888]">
                  These keys remain sandboxed strictly to the application origin and are inaccessible to outside domains.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="svg-sanitization"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>ASSET HYGIENE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. SVG Security &amp; Sanitization
              </h2>
              <div className="space-y-4">
                <p>
                  SVG markup can be vulnerable to Cross-Site Scripting (XSS) if untrusted files contain embedded JavaScript. Vectofi enforces automated client-side sanitization:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>Strips all <code className="text-[#F22952] font-mono text-xs">&lt;script&gt;</code>, <code className="text-[#F22952] font-mono text-xs">&lt;iframe&gt;</code>, and <code className="text-[#F22952] font-mono text-xs">&lt;foreignObject&gt;</code> elements upon ingestion.</li>
                  <li>Removes inline JavaScript event attributes (<code className="text-[#F22952] font-mono text-xs">onload</code>, <code className="text-[#F22952] font-mono text-xs">onclick</code>, <code className="text-[#F22952] font-mono text-xs">onerror</code>).</li>
                  <li>Ensures exported component code is clean, production-ready, and dependency-safe.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="webgl-rendering"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>GRAPHICS HARDWARE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. WebGL Hardware Acceleration
              </h2>
              <div className="space-y-4">
                <p>
                  Vectofi engages GPU hardware acceleration via WebGL context to ensure sub-millisecond anti-aliasing and zero-latency path zoom:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>WebGL contexts run strictly inside the browser canvas sandbox.</li>
                  <li>No GPU hardware fingerprinting or persistent device IDs are captured.</li>
                  <li>Gracefully falls back to standard 2D Canvas if hardware acceleration is disabled.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="zero-trackers"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>ZERO ADVERTISING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Zero Ads &amp; No Tracking SDKs
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki does not monetize Vectofi through banner ads, marketing pixels, or behavioral profiling:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero Google Ads / AdSense</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero Meta / TikTok Pixels</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero Session Replay Recorders</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10 font-mono text-xs text-white/90 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero Data Broker Partnerships</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="data-deletion"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>USER CONTROL</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. Clearing Local State
              </h2>
              <div className="space-y-4">
                <p>
                  Because all data resides locally on your client machine, you have complete control over data purging:
                </p>
                <ol className="space-y-2 list-decimal list-inside text-white/90">
                  <li>Open your browser settings and navigate to <strong className="text-white">Privacy &amp; Security &rarr; Cookies and Site Data</strong>.</li>
                  <li>Search for <strong className="text-white">vectofi.vercel.app</strong> or <strong className="text-white">delanki.com</strong>.</li>
                  <li>Click <strong className="text-white">Clear Data</strong> to immediately remove all local preferences.</li>
                </ol>
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="global-compliance"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>REGULATORY COMPLIANCE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. GDPR &amp; CCPA Compliance
              </h2>
              <div className="space-y-4">
                <p>
                  Vectofi collects no personal data or device identifiers. As a result, your statutory rights under the European General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) are inherently upheld by architecture.
                </p>
              </div>
            </section>

            {/* Section 9: Contact Desk */}
            <section
              id="contact-desk"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#F22952]/40 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>09</span>
                <span className="text-white/20">/</span>
                <span>CONTACT DESK</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                9. Policy Updates &amp; Contact Desk
              </h2>
              <div className="space-y-4">
                <p>
                  We may periodically review and update this Privacy Policy. Any revisions will be published directly to this URL:
                </p>
                <p className="font-mono text-xs text-[#F22952]">
                  https://www.delanki.com/products/vectofi/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      VECTOFI PRIVACY &amp; ASSET SECURITY INQUIRIES
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
                      href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent('Vectofi Privacy Inquiry')}`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: VECTOFI</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'vectofi' }}
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
