import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getQrazyPrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  Share2,
  ChevronRight,
  Camera,
  MapPin,
  QrCode,
  Github,
  EyeOff,
  Database,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const QrazyPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Anti-Counterfeit Scope' },
    { id: 'camera-verification', label: '2. In-Memory Camera QR Scanning' },
    { id: 'incident-reporting', label: '3. Opt-In Incident Reporting' },
    { id: 'geolocation-privacy', label: '4. Fuzzed Geolocation Standards' },
    { id: 'brand-integrity', label: '5. Zero Sale of Consumer Telemetry' },
    { id: 'open-source-audit', label: '6. Open Source Code Transparency' },
    { id: 'data-deletion', label: '7. Scan History Deletion' },
    { id: 'global-compliance', label: '8. GDPR & Global Compliance' },
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
      <SEO {...getQrazyPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'QRAZY', to: '/product/$slug', params: { slug: 'qrazy' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <QrCode className="w-3.5 h-3.5" />,
            label: 'SMART QR VERIFICATION',
            variant: 'amber',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>QRAZY // APP PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            QRAZY PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Qrazy is engineered as an open-source anti-counterfeit QR scanner to protect consumers and brands. We process camera streams strictly in device memory without cloud ingestion, never sell shopper data, and fuzz incident locations to protect consumer privacy.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-amber-400 font-bold">STATUS: OPEN SOURCE PROTOTYPE</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: OCTOBER 2024</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>PROCESSING: EPHEMERAL DEVICE RAM</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Camera className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              In-Memory Scan
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Video frames are decoded client-side in RAM and immediately overwritten. No video or photos upload to remote servers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <MapPin className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Fuzzed Location
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Voluntary counterfeit incident reports truncate GPS coordinates to city-level clusters to protect exact user location.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              No Data Selling
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Consumer scan habits and verification telemetry are never sold, rented, or brokered to advertising networks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <Github className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Open Source
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              All scanning mechanics and verification routines are publicly auditable in our GitHub repository.
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
                params={{ slug: 'qrazy' }}
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
                <span>ANTI-COUNTERFEIT SCOPE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction &amp; Anti-Counterfeit Scope
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) is the creator of <strong>Qrazy</strong>, an open-source prototype demonstrating client-side cryptographic QR verification to combat counterfeit goods and protect brand integrity.
                </p>
                <p>
                  Our architecture guarantees that your camera feed remains private and confined to your physical device. We do not operate surveillance infrastructure or store raw video captures.
                </p>
                <p>
                  This Privacy Policy applies to the Qrazy web application and its source code distribution.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="camera-verification"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>CAMERA PRIVACY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. In-Memory Camera QR Scanning
              </h2>
              <div className="space-y-4">
                <p>
                  Qrazy accesses the camera hardware solely to decode QR patterns in device memory:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li><strong>Zero Video Transmission:</strong> Video frames are analyzed locally in volatile memory and instantly discarded. No raw footage or still snapshots are ever sent to our servers.</li>
                  <li><strong>No Facial or Biometric Scans:</strong> The scanner contains zero facial recognition or biometric tracking code.</li>
                  <li><strong>Permission Controlled:</strong> Camera access is only initiated after explicit browser permission prompts and ceases when the scanner window is closed.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="incident-reporting"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>VOLUNTARY REPORTING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. Opt-In Incident Reporting
              </h2>
              <div className="space-y-4">
                <p>
                  If an authenticity scan indicates a counterfeit item, users may voluntarily submit an incident report:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>Incident submissions are 100% voluntary and require manual confirmation.</li>
                  <li>Reports can be submitted anonymously without providing personal email addresses or contact details.</li>
                  <li>Submitted information is used exclusively to alert brand protection analysts.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="geolocation-privacy"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>FUZZED GEOLOCATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. Fuzzed Geolocation Standards
              </h2>
              <div className="space-y-4">
                <p>
                  When reporting a counterfeit incident to the community cluster map:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>Exact GPS coordinates are truncated to city-level precision (roughly 1 kilometer radius) to prevent identification of residential addresses or individual homes.</li>
                  <li>Map pins reflect general regional counterfeit clusters rather than specific user locations.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="brand-integrity"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>COMMERCIAL INTEGRITY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Zero Sale of Consumer Telemetry
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki does not monetize verification signals, scan patterns, or brand databases. We do not sell consumer shopping activity to data aggregators, advertising networks, or retail trackers.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="open-source-audit"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>TRANSPARENCY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Open Source Code Transparency
              </h2>
              <div className="space-y-4">
                <p>
                  Qrazy is licensed under open-source terms. The entire scanning pipeline, API contract, and front-end interface can be inspected on GitHub to verify our camera and privacy safeguards:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex items-center justify-between gap-4">
                  <div className="font-mono text-xs text-white/90 truncate">
                    github.com/Ankit628792/qrazy
                  </div>
                  <a
                    href="https://github.com/Ankit628792/qrazy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase transition-all shrink-0"
                  >
                    AUDIT CODE
                  </a>
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
                7. Scan History Deletion
              </h2>
              <div className="space-y-4">
                <p>
                  Scan logs saved locally in your browser storage can be cleared by tapping <strong className="text-white">Clear History</strong> in the application interface or clearing site storage through browser settings.
                </p>
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
                8. GDPR &amp; Global Compliance
              </h2>
              <div className="space-y-4">
                <p>
                  Qrazy complies with global consumer data privacy frameworks. Anonymous incident telemetry is processed under the legitimate interest of preventing criminal fraud and counterfeit distribution.
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
                  https://www.delanki.com/products/qrazy/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      QRAZY SECURITY &amp; BRAND INTEGRITY INQUIRIES
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
                      href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent('Qrazy Security Inquiry')}`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: QRAZY</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'qrazy' }}
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
