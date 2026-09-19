import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { getRespiraPrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  EyeOff,
  Database,
  Smartphone,
  Share2,
  ChevronRight,
  AlertTriangle,
  Wind,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const RespiraPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Wellness Scope' },
    { id: 'health-commitment', label: '2. Health Data Protection Commitment' },
    { id: 'room-database', label: '3. Local Room Database Architecture' },
    { id: 'android-permissions', label: '4. Android System Permissions & Sensors' },
    { id: 'audio-safety', label: '5. Audio Engine (No Microphone Access)' },
    { id: 'medical-disclaimer', label: '6. Non-Diagnostic Medical Disclaimer' },
    { id: 'zero-trackers', label: '7. Zero Ads & No Tracking SDKs' },
    { id: 'data-deletion', label: '8. Local Session Wipe & Deletion' },
    { id: 'global-compliance', label: '9. GDPR & CCPA Compliance' },
    { id: 'contact-developer', label: '10. Policy Updates & Developer Contact' },
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
      <SEO {...getRespiraPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
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
              params={{ slug: 'respira' }}
              className="hover:text-white transition-colors text-white/80"
            >
              RESPIRA
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#F22952] font-bold">PRIVACY POLICY</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 font-mono text-[11px] text-cyan-400">
              <Wind className="w-3.5 h-3.5" />
              <span>RESPIRA WELLNESS SANCTUARY</span>
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
              <span>RESPIRA // APP PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            RESPIRA PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Respira is engineered as a calm, offline-first breathing and lung capacity assistant. We treat your personal breath and wellness routines as deeply confidential: your session records remain 100% on your Android device in a local Room database, with zero biometric surveillance and zero cloud uploads.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-cyan-400 font-bold">STATUS: ACTIVE & PRIVACY FIRST</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: JANUARY 2026</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: SEPTEMBER 2026</span>
            <span className="text-white/20">•</span>
            <span>STORAGE: 100% ON-DEVICE ROOM DB</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Wind className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Zero Cloud Sync
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              No central server, no cloud accounts, and no remote databases. Your breathing patterns never leave your phone.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Zero Health Tracking
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              We never broker, share, or monetize mindfulness duration or respiratory hold capacity with insurance or ad brokers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Local Room DB
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Custom intervals and minutes practiced reside strictly within the encrypted Android application sandbox.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Playback Only
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Audio engine plays offline ambient acoustic chimes. The app does not request or record microphone audio.
            </p>
          </div>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Table of Contents Sidebar - Visible only on desktop (hidden on mobile and tablet) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 p-5 rounded-2xl bg-[#121212]/90 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F22952] font-bold">
                // LEGAL OUTLINE
              </span>
              <span className="font-mono text-[10px] text-[#B7B7B7]">10 SECTIONS</span>
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
                params={{ slug: 'respira' }}
                className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <span>VIEW CASE STUDY</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Legal Sections Body */}
          <article className="lg:col-span-8 space-y-12 text-[#B7B7B7] text-sm sm:text-base leading-relaxed">
            {/* Section 1: Introduction */}
            <section
              id="introduction"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>01</span>
                <span className="text-white/20">/</span>
                <span>STATEMENT OF SCOPE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction & Wellness Scope
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki operates <strong>Respira</strong>, a native Android mobile application designed to assist users in mindful conscious breathing, Box Breathing cadence (4-4-4-4), 4-7-8 relaxing sleep breath, and gentle lung capacity holding exercises.
                </p>
                <p>
                  We recognize that mindfulness, breathing habits, and stress relief are deeply personal matters. Unlike modern digital platforms that require continuous network access and cloud logins, Respira was intentionally constructed as an offline sanctuary.
                </p>
                <p>
                  This Privacy Policy delineates our rigorous data handling practices, explains our local on-device database architecture, and confirms that Respira never captures, transmits, or monetizes your wellness data.
                </p>
              </div>
            </section>

            {/* Section 2: Health Data Protection */}
            <section
              id="health-commitment"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-cyan-500/30 scroll-mt-32 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>CONFIDENTIALITY PROTOCOL</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. Health & Wellness Data Protection Commitment
              </h2>
              <div className="space-y-4">
                <p className="text-white font-medium">
                  We adhere to a zero-telemetry principle regarding personal health and biometric data:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block uppercase">Zero Biometric Harvesting:</strong>
                      <span className="text-[#B7B7B7]">
                        Respira does not integrate pulse oximeter APIs, camera heart-rate sensors, or facial respiration analysis algorithms.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block uppercase">No Health Brokerage:</strong>
                      <span className="text-[#B7B7B7]">
                        We do not sell, license, share, or broker your practice frequency, session timestamps, or breath-hold duration to health insurers, marketers, or analytics providers.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block uppercase">No Mandatory Account or Email:</strong>
                      <span className="text-[#B7B7B7]">
                        You can immediately launch and practice with Respira without entering an email address, name, or phone number.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Local Room Database */}
            <section
              id="room-database"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>ON-DEVICE STORAGE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. Local Android Room Database Architecture
              </h2>
              <div className="space-y-4">
                <p>
                  Respira utilizes the Android Jetpack <strong>Room Database</strong> (an abstraction layer over native SQLite) situated exclusively within the private application sandbox:
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 space-y-2 text-xs">
                  <h3 className="font-mono text-xs font-bold text-white uppercase">
                    Data stored locally inside the Room Database:
                  </h3>
                  <ul className="space-y-1.5 text-[#B7B7B7] pl-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Completed session logs (date, duration in minutes, technique chosen)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Custom breathing cadence intervals (e.g., inhale 4s, hold 4s, exhale 4s)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Personal best breath-hold time recorded during voluntary capacity exercises</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Interface preferences: haptic feedback intensity, soundscape choice, and dark mode state</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-[#B7B7B7]">
                  <strong>No Remote Replication:</strong> This database resides entirely in local application sandbox storage on your device. It is never uploaded to any remote host, AWS, Firebase, or external cloud storage.
                </p>
              </div>
            </section>

            {/* Section 4: Android System Permissions */}
            <section
              id="android-permissions"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>SYSTEM HARDWARE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. Android System Permissions & Sensors
              </h2>
              <div className="space-y-4">
                <p>
                  Respira requests only essential permissions necessary to provide sensory guidance during breathing sessions:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                    <Smartphone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block mb-0.5">
                        android.permission.VIBRATE:
                      </strong>
                      <span>
                        Allows the app to trigger gentle tactile haptic vibration pulses that cue inhale, hold, and exhale transitions. This enables seamless &quot;eyes-closed&quot; meditation.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                    <Lock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block mb-0.5">
                        android.permission.WAKE_LOCK:
                      </strong>
                      <span>
                        Prevents the device processor from sleeping mid-exercise so that timer cadences remain mathematically precise even when the display dims.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                    <EyeOff className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block mb-0.5">
                        Permissions NOT Requested:
                      </strong>
                      <span>
                        Respira <strong>DOES NOT</strong> request Location (GPS), Camera, Contacts, SMS, Phone State, or External Storage permissions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Audio Safety */}
            <section
              id="audio-safety"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>AUDIO ENGINE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Audio Engine (Strict Playback Only)
              </h2>
              <div className="space-y-4">
                <p>
                  Respira features calming acoustic soundscapes (such as singing bowl chimes, gentle rain, and harmonic drones) to enrich the mindfulness experience:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white font-bold">100% Bundled Assets:</span>
                    <span>All ambient tracks are pre-compiled and bundled inside the APK. No external audio streams are downloaded.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white font-bold">Zero Microphone Access:</span>
                    <span>Respira never activates your device microphone or listens to ambient room acoustics.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Non-Diagnostic Disclaimer */}
            <section
              id="medical-disclaimer"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-amber-500/30 scroll-mt-32 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>IMPORTANT NOTICE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Non-Diagnostic Medical Disclaimer
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#090909] border border-amber-500/25 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <strong className="text-white font-mono uppercase block">
                      Wellness Tool — Not a Medical Device:
                    </strong>
                    <p className="text-[#B7B7B7] leading-relaxed">
                      Respira is an informational, mindfulness, and respiratory conditioning tool intended exclusively to promote general physical and mental relaxation. Respira is <strong>NOT</strong> an FDA-approved medical device, diagnostic system, or clinical treatment for asthma, chronic obstructive pulmonary disease (COPD), sleep apnea, hyperventilation syndrome, or cardiac conditions.
                    </p>
                    <p className="text-[#B7B7B7] leading-relaxed">
                      Never disregard professional medical advice or delay seeking medical attention because of any exercise practiced in this application. If you experience dizziness, lightheadedness, chest discomfort, or shortness of breath, cease the exercise immediately and consult a qualified medical professional.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Zero Advertising */}
            <section
              id="zero-trackers"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>NO ADVERTISING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. Zero Advertising & No Third-Party Trackers
              </h2>
              <div className="space-y-4">
                <p>
                  A calm breathing session should never be interrupted by loud advertisements or commercial tracking scripts:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Ad Networks:</strong> Respira does not integrate Google AdMob, Unity, Meta Audience Network, or any commercial ad SDK.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Analytics SDKs:</strong> We do not include Firebase Analytics, AppsFlyer, or segment trackers that record screen dwell times.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: Local Session Wipe */}
            <section
              id="data-deletion"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>USER SOVEREIGNTY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. Local Session Wipe & Irrevocable Deletion
              </h2>
              <div className="space-y-4">
                <p>
                  You have full autonomy to clear your history at any time:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <strong className="text-white font-mono block mb-1">In-App Reset:</strong>
                    <span>
                      Tap &quot;Reset All Data&quot; inside the Respira settings menu to wipe the local Room database tables in a single transaction.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <strong className="text-white font-mono block mb-1">Android OS Storage Clear:</strong>
                    <span>
                      Navigate to Android Settings &gt; Apps &gt; Respira &gt; Storage &gt; Clear Data. All databases and cached files are permanently deleted.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: GDPR & CCPA Compliance */}
            <section
              id="global-compliance"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>09</span>
                <span className="text-white/20">/</span>
                <span>GLOBAL STANDARDS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                9. GDPR, CCPA, and Global Health Privacy Alignment
              </h2>
              <div className="space-y-4">
                <p>
                  Respira adheres to the highest global data privacy standards:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 text-xs space-y-2">
                  <p>
                    <strong>European Union GDPR (Regulation 2016/679):</strong> Data minimization (Article 5(1)(c)) is fully satisfied since no personal identification or health telemetry is gathered.
                  </p>
                  <p>
                    <strong>California Consumer Privacy Act (CCPA / CPRA):</strong> We do not &quot;sell&quot; or &quot;share&quot; personal consumer data as defined under California statutory law.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Policy Updates & Developer Contact */}
            <section
              id="contact-developer"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#F22952]/40 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>10</span>
                <span className="text-white/20">/</span>
                <span>CONTACT DESK</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                10. Updates to Policy & Developer Contact
              </h2>
              <div className="space-y-4">
                <p>
                  As Respira introduces new breath training modules or Android operating system compatibility enhancements, this policy will be maintained accordingly at:
                </p>
                <p className="font-mono text-xs text-[#F22952]">
                  https://www.delanki.com/products/respira/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      RESPIRA PRIVACY INQUIRIES & SUPPORT
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
                      href={`mailto:${COMPANY_DATA.email}?subject=Respira%20Health%20%26%20Privacy%20Inquiry`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: RESPIRA</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'respira' }}
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
