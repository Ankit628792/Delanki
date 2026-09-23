import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { getAirBeamSharePrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  Camera,
  WifiOff,
  Share2,
  ChevronRight,
  Database,
  QrCode,
  HardDrive,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const AirBeamSharePrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Offline Scope' },
    { id: 'airgapped-architecture', label: '2. Air-Gapped Zero-Network Protocol' },
    { id: 'camera-optical-scan', label: '3. Camera API & Animated QR Stream' },
    { id: 'local-room-db', label: '4. Local Room Database Sandbox' },
    { id: 'system-permissions', label: '5. Android System Permissions' },
    { id: 'no-third-party', label: '6. Zero Ads, Analytics & Trackers' },
    { id: 'data-deletion', label: '7. Local Transfer Log Wipe & Deletion' },
    { id: 'global-compliance', label: '8. GDPR & CCPA Compliance' },
    { id: 'contact-developer', label: '9. Policy Updates & Developer Contact' },
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
      <SEO {...getAirBeamSharePrivacyPolicySEO()} />

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
              params={{ slug: 'airbeam-share' }}
              className="hover:text-white transition-colors text-white/80"
            >
              AIRBEAM-SHARE
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#F22952] font-bold">PRIVACY POLICY</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 font-mono text-[11px] text-cyan-400">
              <WifiOff className="w-3.5 h-3.5" />
              <span>AIR-GAPPED OPTICAL SANCTUARY</span>
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
              <span>AIRBEAM-SHARE // PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            AIRBEAM-SHARE PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            AirBeam-Share is an air-gapped, zero-network file transfer application engineered to move files between devices using high-speed animated QR code streams. It operates with zero internet permissions, zero cloud servers, and complete device isolation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">
              EFFECTIVE DATE: SEPTEMBER 22, 2026
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10">
              VERSION: 1.0.0
            </span>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
              100% AIR-GAPPED & OFFLINE
            </span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Index */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-5 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F22952] font-bold">
                  // LEGAL OUTLINE
                </span>
                <span className="font-mono text-[10px] text-[#B7B7B7]">9 SECTIONS</span>
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
                params={{ slug: 'airbeam-share' }}
                className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>VIEW CASE STUDY</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            </div>
          </aside>

          {/* Right Main Body */}
          <main className="lg:col-span-8 space-y-12">
            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  1. Introduction & Offline Scope
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Delanki Studio presents <strong>AirBeam-Share</strong>, an offline optical file sharing app built with Jetpack Compose.
                </p>
                <p>
                  AirBeam-Share converts files, photos, and documents into an animated stream of QR codes on the sender&apos;s screen. The receiver&apos;s camera scans this optical stream to reconstruct the original data—completely offline without requiring Wi-Fi networks, Bluetooth pairing, cellular data, or cloud servers.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="airgapped-architecture" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  2. Air-Gapped Zero-Network Protocol
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-start gap-3">
                  <WifiOff className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-cyan-200">
                    <strong>Zero Network Permissions:</strong> AirBeam-Share does not request Android <code className="font-mono bg-white/10 px-1 py-0.5 rounded">INTERNET</code> or network state permissions. It is physically impossible for the app to send data to external remote servers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="camera-optical-scan" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <QrCode className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  3. Camera API & Animated QR Stream
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  To read incoming QR code streams, AirBeam-Share requests access to your device camera:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li><strong>Optical Scanning Only:</strong> The camera feed is processed live in memory purely to decode QR stream frames.</li>
                  <li><strong>No Photo/Video Recording:</strong> AirBeam-Share does not save photo captures or video files from your camera to storage.</li>
                  <li><strong>Local Frame Processing:</strong> Every scanned frame is decoded instantly and discarded once chunk bytes are parsed.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="local-room-db" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  4. Local Room Database Sandbox
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Transfer logs and history are saved inside an Android Jetpack <strong>Room Database</strong> in your private application sandbox storage. This database remains exclusively on your device.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="system-permissions" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Camera className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  5. Android System Permissions
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-3 font-mono text-xs">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                  <span className="text-white font-bold">CAMERA</span>
                  <span className="text-emerald-400">Scan Optical QR Stream</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                  <span className="text-white font-bold">READ / WRITE STORAGE</span>
                  <span className="text-emerald-400">Save Transferred Files Locally</span>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="no-third-party" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  6. Zero Ads, Analytics & Trackers
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  AirBeam-Share contains zero advertisement SDKs (no AdMob, Meta, Unity), zero telemetry trackers (no Firebase Analytics or Mixpanel), and zero crash reporting beacons.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="data-deletion" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  7. Local Transfer Log Wipe & Deletion
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  You can clear your transfer history instantly by selecting &quot;Clear Transfer History&quot; inside settings or going to Android Settings &gt; Apps &gt; AirBeam-Share &gt; Storage &gt; Clear Data.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="global-compliance" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  8. GDPR & CCPA Compliance
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  Because AirBeam-Share transmits zero user data to remote servers, users automatically retain 100% data sovereignty under global regulations including GDPR and CCPA.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="contact-developer" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">
                  <Copy className="w-5 h-5" />
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                  9. Policy Updates & Developer Contact
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-6 text-sm text-[#B7B7B7] leading-relaxed">
                <p>
                  For inquiries regarding AirBeam-Share&apos;s optical file transfer architecture, contact Delanki Studio directly:
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
