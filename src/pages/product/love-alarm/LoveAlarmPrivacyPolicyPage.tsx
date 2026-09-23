import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { getLoveAlarmPrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  MapPin,
  Radio,
  Share2,
  ChevronRight,
  AlertTriangle,
  Zap,
  Users,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const LoveAlarmPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Application Scope' },
    { id: 'location-engine', label: '2. 10-Meter Proximity Location Engine' },
    { id: 'socket-sync', label: '3. Ephemeral Socket.IO Synchronization' },
    { id: 'data-collection', label: '4. Information We Collect & Use' },
    { id: 'no-selling', label: '5. Zero Location Data Monetization' },
    { id: 'permissions', label: '6. System Permissions & Geolocation' },
    { id: 'data-security', label: '7. Transport Encryption & Security' },
    { id: 'user-rights', label: '8. Account Deletion & Profile Removal' },
    { id: 'global-compliance', label: '9. GDPR & CCPA Rights' },
    { id: 'contact-developer', label: '10. Updates & Developer Contact' },
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
      <SEO {...getLoveAlarmPrivacyPolicySEO()} />

      {/* Decorative Grid */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center flex-wrap gap-2 font-mono text-xs text-[#B7B7B7]">
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#F22952]" />
              <span>DELANKI STUDIO</span>
            </Link>
            <span className="text-white/20">/</span>
            <Link to="/products" className="hover:text-white transition-colors">
              PRODUCTS
            </Link>
            <span className="text-white/20">/</span>
            <Link
              to="/product/$slug"
              params={{ slug: 'love-alarm' }}
              className="hover:text-white transition-colors text-white/80"
            >
              LOVE ALARM 2.0
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#F22952] font-bold">PRIVACY POLICY</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 font-mono text-[11px] text-rose-400">
              <Radio className="w-3.5 h-3.5" />
              <span>PROXIMITY ENGINE PROTOCOL</span>
            </span>
            <button
              onClick={handleShareLink}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-white/15 hover:border-white/30 text-xs font-mono text-[#B7B7B7] hover:text-white transition-all"
              title="Share Policy URL"
            >
              {copiedShare ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Share2 className="w-3 h-3" />
              )}
              <span>{copiedShare ? 'LINK COPIED' : 'SHARE'}</span>
            </button>
          </div>
        </div>

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>LOVE ALARM 2.0 // PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            LOVE ALARM 2.0 PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Love Alarm 2.0 is built to power high-precision 10-meter proximity interactions while rigorously protecting your real-world location privacy. Your geographic coordinates are processed ephemerally for instant proximity calculations, never saved to permanent movement tracking logs, and never sold to third-party ad brokers.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">
              EFFECTIVE DATE: SEPTEMBER 22, 2026
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">
              VERSION: 2.0.0
            </span>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
              ZERO LOCATION MONETIZATION
            </span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-5 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F22952] font-bold">
                  // LEGAL OUTLINE
                </span>
                <span className="font-mono text-[10px] text-[#B7B7B7]">10 SECTIONS</span>
              </div>

              <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToElement(item.id, 100)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#F22952]/15 text-[#F22952] border border-[#F22952]/30 font-bold'
                          : 'text-[#B7B7B7] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      <ChevronRight
                        className={`w-3 h-3 flex-shrink-0 transition-transform ${
                          isActive ? 'rotate-90 text-[#F22952]' : 'opacity-40'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

               <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <Link
                to="/product/$slug"
                params={{ slug: 'love-alarm' }}
                className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>VIEW CASE STUDY</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            </div>
          </aside>

          {/* Right Column: Detailed Legal & Technical Sections */}
          <main className="lg:col-span-8 space-y-12">
            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  1. Introduction & Application Scope
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Delanki Studio operates <strong>Love Alarm 2.0</strong>, a location-aware mobile application that triggers real-time proximity alerts when users within a high-precision 10-meter radius share mutual application interaction.
                </p>
                <p>
                  We understand that GPS coordinates and real-time location data are exceptionally sensitive information. Love Alarm 2.0 was architected around a strict &quot;ephemeral calculation&quot; philosophy: your exact location is processed live to evaluate distance thresholds, without creating permanent movement trails or selling historical trajectory data to third parties.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="location-engine" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  2. 10-Meter Proximity Location Engine
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Our high-precision proximity engine processes location data strictly to determine whether two active users fall within the 10-meter radius:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li><strong>Live Distance Computation:</strong> Latitude and longitude coordinates are converted into spatial points to calculate Haversine distance calculations in real time.</li>
                  <li><strong>No Movement History Logging:</strong> Coordinates are evaluated for proximity and immediately overwritten by subsequent spatial updates. We do not store historic GPS path logs or timestamps of where you walked yesterday.</li>
                  <li><strong>Active Session Only:</strong> Proximity scanning functions while you interact with the app. You can pause or disable location updates at any time inside your device settings.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="socket-sync" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Radio className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  3. Ephemeral Socket.IO Synchronization
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  To deliver instantaneous alerts without lag, Love Alarm 2.0 maintains websocket connections via Socket.IO:
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono text-white/80">
                  <p className="text-[#F22952] font-bold">// EPHEMERAL REALTIME PROTOCOL</p>
                  <p>1. App establishes WebSocket connection over TLS 1.3 encryption.</p>
                  <p>2. Distance threshold (≤ 10m) is calculated on server memory.</p>
                  <p>3. Notification payload dispatched instantly to matched active sockets.</p>
                  <p>4. Upon session disconnect, socket memory references are destroyed.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="data-collection" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  4. Information We Collect & Use
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-mono text-xs text-white font-bold mb-2 uppercase">Account & Profile</h4>
                    <p className="text-xs text-[#B7B7B7]">User display name, chosen profile handle, and account credentials used strictly for account authorization and app interaction.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-mono text-xs text-white font-bold mb-2 uppercase">Proximity Telemetry</h4>
                    <p className="text-xs text-[#B7B7B7]">High-accuracy GPS coordinates processed ephemerally during active sessions to measure relative 10m proximity.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="no-selling" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  5. Zero Location Data Monetization
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-emerald-200">
                    <strong>Pledge Against Data Brokers:</strong> Love Alarm 2.0 does NOT buy, sell, rent, or trade user location records, device identifiers, or interaction logs with data brokers, ad networks, or marketing intermediaries.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="permissions" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  6. System Permissions & Geolocation
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Love Alarm 2.0 requests access only to location services required for distance detection:
                </p>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="text-white font-bold">ACCESS_FINE_LOCATION</span>
                    <span className="text-emerald-400">Required for 10m Accuracy</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="text-white font-bold">INTERNET & NETWORK STATE</span>
                    <span className="text-emerald-400">Required for Socket Sync</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="data-security" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  7. Transport Encryption & Security
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  All client-to-server traffic is transmitted over HTTPS and Secure WebSockets (WSS) using TLS 1.3 encryption standards to protect against interception on public Wi-Fi networks.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="user-rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  8. Account Deletion & Profile Removal
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  You hold full control over your profile data. You can delete your account at any time directly through the app settings or by submitting an email request to Delanki Studio. Account deletion immediately purges profile records and active session handles.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="global-compliance" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  9. GDPR & CCPA Rights
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Under global privacy frameworks (including GDPR for EU residents and CCPA/CPRA for California residents), you have the right to inspect, rectify, or erase personal data associated with your account without discrimination.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="contact-developer" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Copy className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  10. Updates & Developer Contact
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-6 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  If you have questions about Love Alarm 2.0&apos;s proximity architecture or privacy safeguards, reach out directly to Delanki Studio:
                </p>

                <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] uppercase block">PRIVACY DESK</span>
                    <span className="font-mono text-sm font-bold text-white">{COMPANY_DATA.email}</span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs font-bold uppercase transition-all"
                  >
                    {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
