import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getEarlyLearnerPrivacyPolicySEO } from '../../../lib/seo';
import {
  ArrowLeft,
  Lock,
  Baby,
  Smile,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  EyeOff,
  Database,
  Smartphone,
  WifiOff,
  Share2,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const EarlyLearnerPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Studio Commitment' },
    { id: 'coppa-compliance', label: '2. COPPA & Child Safety Guarantee' },
    { id: 'zero-collection', label: '3. Data We Do NOT Collect' },
    { id: 'sqlite-storage', label: '4. 100% Local SQLite Architecture' },
    { id: 'device-permissions', label: '5. Hardware & Device Permissions' },
    { id: 'zero-advertising', label: '6. Zero Ads & No Third-Party SDKs' },
    { id: 'parental-rights', label: '7. Parental Rights & Data Deletion' },
    { id: 'safety-gates', label: '8. External Links & Safety Gates' },
    { id: 'google-play-families', label: '9. Google Play Families Policy' },
    { id: 'policy-updates', label: '10. Policy Updates & Contact Desk' },
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
      <SEO {...getEarlyLearnerPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'EARLY LEARNER', to: '/product/$slug', params: { slug: 'early-learner' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <Baby className="w-3.5 h-3.5" />,
            label: 'COPPA & FAMILIES VERIFIED',
            variant: 'emerald',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>EARLY LEARNER // APP PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            EARLY LEARNER PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Delanki is committed to the absolute protection of children’s digital safety and family privacy. Early Learner is engineered from the ground up as a 100% offline educational environment containing zero advertising, zero remote analytics, zero accounts, and zero collection of personal identifiable information.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-emerald-400 font-bold">STATUS: COPPA & GDPR-K COMPLIANT</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: SEPTEMBER 2023</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: SEPTEMBER 2026</span>
            <span className="text-white/20">•</span>
            <span>AUDIENCE: CHILDREN UNDER 13 & PARENTS</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Baby className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              COPPA & Kids First
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Strict compliance with the U.S. Children&apos;s Online Privacy Protection Act and global children’s codes. Zero child data collection.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              100% Ad-Free
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              No banner ads, no interstitial popups, and no commercial marketing trackers. A clean, distraction-free sanctuary for young minds.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
              <WifiOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              100% Offline-First
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              All learning assets, phonetics, and tracing mechanics run entirely offline without requiring network connectivity.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Local SQLite Only
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Stars and lesson progress remain stored exclusively in the sandbox storage on the child&apos;s physical device.
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
                params={{ slug: 'early-learner' }}
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
                <span>CHILD SAFETY FOUNDATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction & Studio Commitment to Children’s Privacy
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) is the developer and publisher of <strong>Early Learner</strong>, an interactive foundational learning mobile application created for toddlers, preschoolers, and young children.
                </p>
                <p>
                  We believe that childhood is sacred and that educational technology should be a safe, quiet garden for exploration—free from commercial surveillance, behavioral conditioning, and data harvesting.
                </p>
                <p>
                  This Privacy Policy applies specifically to the <strong>Early Learner</strong> mobile software application across all supported device platforms (including Android builds distributed via APK and official application stores). It explains in clear, plain language how our software operates with respect to user information, device storage, and parental rights.
                </p>
              </div>
            </section>

            {/* Section 2: COPPA Compliance */}
            <section
              id="coppa-compliance"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-emerald-500/30 scroll-mt-32 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>REGULATORY COMPLIANCE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. COPPA & Global Child Protection Standards
              </h2>
              <div className="space-y-4">
                <p className="text-white font-medium">
                  Early Learner is fully compliant with the <strong>United States Children&apos;s Online Privacy Protection Act (COPPA)</strong> (16 CFR Part 312), the <strong>United Kingdom Age Appropriate Design Code</strong>, and <strong>GDPR-Kids (GDPR Article 8)</strong> standards.
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-white font-mono text-xs block uppercase">No Collection of Under-13 Personal Information:</strong>
                      <span className="text-xs text-[#B7B7B7]">
                        We do not collect, request, require, or maintain personal identifiable information from children under the age of 13 under any circumstances.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-white font-mono text-xs block uppercase">No Mandatory Registration:</strong>
                      <span className="text-xs text-[#B7B7B7]">
                        Children and parents can immediately launch the app without creating an account, supplying an email, setting a password, or linking a social media profile.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-white font-mono text-xs block uppercase">No Behavioral Profiling:</strong>
                      <span className="text-xs text-[#B7B7B7]">
                        We never construct psychometric profiles, track learning speeds for commercial targeting, or share behavioral metrics with third parties.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Data We Do NOT Collect */}
            <section
              id="zero-collection"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>DATA MINIMIZATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. Information We Do NOT Collect
              </h2>
              <div className="space-y-4">
                <p>
                  To provide absolute peace of mind to parents and educators, here is an explicit enumeration of data categories that Early Learner <strong>NEVER</strong> collects, accesses, or stores:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <span className="font-mono text-xs text-[#F22952] font-bold block mb-1">
                      ✗ No Names or Biometric Identifiers
                    </span>
                    <p className="text-[#B7B7B7]">
                      No full name, child nickname, age, date of birth, gender, facial photos, or voice recordings are ever requested or stored.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <span className="font-mono text-xs text-[#F22952] font-bold block mb-1">
                      ✗ No Advertising IDs or Fingerprinting
                    </span>
                    <p className="text-[#B7B7B7]">
                      We do not read Google Advertising ID (GAID), IDFA, Android ID, IMEI, MAC addresses, or browser canvas fingerprints.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <span className="font-mono text-xs text-[#F22952] font-bold block mb-1">
                      ✗ No Precise or Coarse Location
                    </span>
                    <p className="text-[#B7B7B7]">
                      We do not request GPS location, cellular tower triangulation, or Wi-Fi SSID network details.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <span className="font-mono text-xs text-[#F22952] font-bold block mb-1">
                      ✗ No In-App Payment Data
                    </span>
                    <p className="text-[#B7B7B7]">
                      There are no microtransactions, credit card input forms, subscription traps, or currency purchases in the app.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Local SQLite Architecture */}
            <section
              id="sqlite-storage"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>ON-DEVICE STORAGE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. 100% Local SQLite Architecture
              </h2>
              <div className="space-y-4">
                <p>
                  Early Learner is engineered with an <strong>Offline-First & Local-Only</strong> architecture. All educational state and interaction data are stored exclusively on the user&apos;s physical device:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 space-y-2 text-xs">
                  <h3 className="font-mono text-xs font-bold text-white uppercase">
                    What is stored inside the local SQLite database:
                  </h3>
                  <ul className="space-y-1.5 text-[#B7B7B7] pl-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Alphabet & Hindi Varnamala lesson completion progress (e.g., &quot;Lesson A completed&quot;)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Star Garden reward tokens earned during quizzes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Temporary handwriting tracing canvas points (discarded after letter completion)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Audio volume toggle preferences (sound enabled / muted)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-[#B7B7B7]">
                  <strong>Zero Cloud Replication:</strong> This SQLite database is contained inside the Android application&apos;s private sandbox. It is never synced to external cloud databases, Google Firebase, or remote analytics endpoints.
                </p>
              </div>
            </section>

            {/* Section 5: Device Permissions */}
            <section
              id="device-permissions"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>SYSTEM HARDWARE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Hardware & Device Permissions
              </h2>
              <div className="space-y-4">
                <p>
                  Early Learner requests only the minimal technical capabilities required to play educational sounds and render smooth handwriting strokes:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                    <Smartphone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block mb-0.5">
                        Audio Playback (Sound Synthesizer / AudioTrack):
                      </strong>
                      <span>
                        Used exclusively to play offline phonetic audio pronunciations of letters and animal sounds. The app <strong>DOES NOT request or utilize microphone access</strong> or record children&apos;s speech.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                    <Smile className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block mb-0.5">
                        Tactile Touch & Finger Tracing:
                      </strong>
                      <span>
                        Canvas touch coordinates are processed in real-time within volatile device memory to provide visual feedback as children trace characters.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10 flex items-start gap-3">
                    <Lock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-mono block mb-0.5">
                        No Camera, Contacts, or External Media Access:
                      </strong>
                      <span>
                        The app never requests access to the device camera, photo gallery, contacts book, or SMS.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Zero Advertising */}
            <section
              id="zero-advertising"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>NO ADVERTISING SDKS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Zero Advertising & No Third-Party Trackers
              </h2>
              <div className="space-y-4">
                <p>
                  Commercial advertising networks have no place in early childhood learning environments. We explicitly affirm that:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Ad Networks:</strong> We do not integrate Google AdMob, Unity Ads, AppLovin, ironSource, or any commercial ad exchange.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Analytics SDKs:</strong> We do not include Firebase Analytics, AppsFlyer, Mixpanel, or adjust trackers in the application code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Data Brokering:</strong> We have zero commercial agreements with data brokers, aggregators, or marketing firms.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7: Parental Rights */}
            <section
              id="parental-rights"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>GUARDIAN CONTROL</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. Parental Rights & Data Deletion
              </h2>
              <div className="space-y-4">
                <p>
                  Parents and legal guardians retain complete, sovereign authority over all aspects of their child&apos;s use of Early Learner:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <strong className="text-white font-mono block mb-1">Instant Local Progress Reset:</strong>
                    <span>
                      Parents can wipe all completed lessons and stars with a single tap in the app&apos;s parent settings or by clearing app storage via Android Settings.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#090909] border border-white/10">
                    <strong className="text-white font-mono block mb-1">Permanent Removal:</strong>
                    <span>
                      Uninstalling Early Learner permanently purges the local SQLite database and all cached resources from the device filesystem immediately.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: External Links & Safety Gates */}
            <section
              id="safety-gates"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>RESTRICTED NAVIGATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. External Links & Safety Gates
              </h2>
              <div className="space-y-4">
                <p>
                  To prevent accidental browser navigation by young children:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>The core learning gameplay contains no active hyperlinks or web browsing capabilities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Any external link (such as viewing the open-source code repository or contacting support) is restricted behind a parental gate (e.g., requiring an arithmetic challenge or parent confirmation).</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 9: Google Play Families */}
            <section
              id="google-play-families"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>09</span>
                <span className="text-white/20">/</span>
                <span>STORE POLICIES</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                9. Google Play Families & App Store Policy Alignment
              </h2>
              <div className="space-y-4">
                <p>
                  Early Learner is specifically structured to comply with Google Play&apos;s Families Policy:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 text-xs space-y-2">
                  <p>
                    <strong>Target Age Group:</strong> Toddlers and children ages 5 and under, and ages 6 to 8.
                  </p>
                  <p>
                    <strong>App Content & Experience:</strong> Free of violence, inappropriate language, fear triggers, or adult themes.
                  </p>
                  <p>
                    <strong>SDK Verification:</strong> Zero non-family-certified SDKs are included in the build.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Policy Updates & Contact Desk */}
            <section
              id="policy-updates"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#F22952]/40 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>10</span>
                <span className="text-white/20">/</span>
                <span>PARENT CONTACT</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                10. Updates & Parental Contact Desk
              </h2>
              <div className="space-y-4">
                <p>
                  We may periodically review and update this Privacy Policy to reflect new regulatory requirements or app improvements. Any revisions will be published directly to this URL:
                </p>
                <p className="font-mono text-xs text-[#F22952]">
                  https://www.delanki.com/products/early-learner/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      EARLY LEARNER PARENTAL PRIVACY INQUIRIES
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
                      href={`mailto:${COMPANY_DATA.email}?subject=Early%20Learner%20Privacy%20%26%20COPPA%20Inquiry`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: EARLY LEARNER</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'early-learner' }}
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
