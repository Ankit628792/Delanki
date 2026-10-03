import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { getPrivacyPolicySEO } from '../lib/seo';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Code2, 
  CheckCircle2, 
  Copy, 
  Check, 
  FileText, 
  Sparkles,
  EyeOff
} from 'lucide-react';
import { COMPANY_DATA } from '../data/siteData';
import { useInquiry } from '../context/InquiryContext';
import { scrollToElement, scrollToTop } from '../lib/lenis';

export const PrivacyPolicyPage: React.FC = () => {
  const { openInquiry } = useInquiry();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'information-collected',
        'data-usage',
        'code-confidentiality',
        'developer-tools',
        'third-party',
        'data-security',
        'retention-deletion',
        'user-rights',
        'cookies-storage',
        'policy-updates',
        'contact-privacy',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
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

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Scope' },
    { id: 'information-collected', label: '2. Information We Collect' },
    { id: 'data-usage', label: '3. How We Use Data' },
    { id: 'code-confidentiality', label: '4. Code & IP Protection' },
    { id: 'developer-tools', label: '5. Extensions & Tools' },
    { id: 'third-party', label: '6. Infrastructure Partners' },
    { id: 'data-security', label: '7. Security Protocols' },
    { id: 'retention-deletion', label: '8. Retention & Deletion' },
    { id: 'user-rights', label: '9. Your Privacy Rights' },
    { id: 'cookies-storage', label: '10. Cookies & Storage' },
    { id: 'policy-updates', label: '11. Updates to Policy' },
    { id: 'contact-privacy', label: '12. Contact Privacy Desk' },
  ];

  return (
    <div className="min-h-screen bg-[#090909] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO {...getPrivacyPolicySEO()} />
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'LEGAL COMPLIANCE', isCurrent: false },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />,
            label: 'STATUS: ACTIVE (SINCE 2023)',
            variant: 'neutral',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL SPECIFICATION // DOC-REV4</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Delanki is committed to transparent data practices, rigorous client source code confidentiality, and responsible engineering across our web applications, native mobile builds, Chrome extensions, and developer tooling.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4 font-mono text-xs text-[#B7B7B7]">
            <span>EFFECTIVE DATE: SINCE SEPTEMBER 2023</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: RECENTLY UPDATED</span>
            <span className="text-white/20">•</span>
            <span>JURISDICTION: APPLICABLE GLOBAL STANDARDS (GDPR / CCPA ALIGNED)</span>
          </div>
        </header>

        {/* Core Commitments / Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Zero Data Selling
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              We never sell, rent, broker, or trade client inquiries, telemetry, or user information to third-party advertisers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Code & IP Protection
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Proprietary client algorithms, repositories, and blueprints remain 100% owned by the client with strict NDA enforcement.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Local Tool Execution
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Our Chrome and VS Code extensions process code locally on your machine with zero unauthorized remote telemetry.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Encrypted Pipelines
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              All communications, form submissions, and data transit use industry-standard TLS cryptographic protocols.
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
              <span className="font-mono text-[10px] text-[#B7B7B7]">12 SECTIONS</span>
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
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <span className="font-mono text-[11px] text-[#B7B7B7] block">
                Have a privacy inquiry or custom enterprise NDA request?
              </span>
              <button
                onClick={() => openInquiry('build')}
                className="w-full py-2 px-3 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>INQUIRE WITH STUDIO</span>
              </button>
            </div>
          </aside>

          {/* Legal Sections Body */}
          <article className="lg:col-span-8 space-y-12 text-[#B7B7B7] text-sm sm:text-base leading-relaxed">
            {/* Section 1: Introduction */}
            <section id="introduction" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>01</span>
                <span className="text-white/20">/</span>
                <span>STATEMENT OF SCOPE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction & Studio Identity
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) operates as a dedicated software product development studio providing full-cycle digital product engineering, high-throughput mobile development, browser extensions, developer tools, and staff augmentation.
                </p>
                <p>
                  This Privacy Policy delineates how Delanki collects, secures, manages, and utilizes information across our public website (<code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">www.delanki.com</code>), project estimator interfaces, client communication portals, open-source repositories, and digital utility extensions.
                </p>
                <p>
                  By engaging with our studio, transmitting a project brief, or deploying our developer extensions, you acknowledge the terms established within this policy document.
                </p>
              </div>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="information-collected" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>DATA MINIMIZATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki adheres to a strict principle of data minimization: we only capture information directly necessary to scope technical projects, coordinate engineering sprints, and provide resilient software solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-[#090909] border border-white/10">
                    <h3 className="font-mono text-xs font-bold text-white uppercase mb-2">
                      A. Direct Inquiries & Client Intake
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#B7B7B7]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0 mt-0.5" />
                        <span>Name, business email, and company identity</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0 mt-0.5" />
                        <span>Product concept briefs & scope parameters</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0 mt-0.5" />
                        <span>Target timeline, budget tier & engagement preference</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#090909] border border-white/10">
                    <h3 className="font-mono text-xs font-bold text-white uppercase mb-2">
                      B. Technical Telemetry (Aggregated)
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#B7B7B7]">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0 mt-0.5" />
                        <span>Standard server request headers & HTTP status codes</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0 mt-0.5" />
                        <span>Browser engine, device screen resolution & platform</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F22952] shrink-0 mt-0.5" />
                        <span>Aggregated, non-personally identifiable diagnostic logs</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs">
                  Note: We do not intentionally harvest or process sensitive categories of personal data (such as financial account numbers, credit reports, biometrics, or government identification cards) via our public site.
                </p>
              </div>
            </section>

            {/* Section 3: How We Use Data */}
            <section id="data-usage" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>PROCESSING INTENT</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. How We Use Collected Information
              </h2>
              <div className="space-y-4">
                <p>Information submitted to Delanki is used strictly for legitimate business execution:</p>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#F22952] shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-white block font-mono text-sm">Product Scoping & Engineering Estimates:</strong>
                      Evaluating system architecture, estimating sprint velocity, drafting technical milestone proposals, and preparing master service agreements.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#F22952] shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-white block font-mono text-sm">Contractual Service Delivery:</strong>
                      Building software features, conducting code reviews, coordinating deployment infrastructure, and delivering dedicated engineering talent.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#F22952] shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-white block font-mono text-sm">Infrastructure Reliability & Security:</strong>
                      Monitoring denial-of-service attempts, preventing cross-site scripting vulnerabilities, and verifying platform availability.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Code Confidentiality & IP Protection */}
            <section id="code-confidentiality" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-[#F22952]/30 scroll-mt-32 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F22952]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>CORE GUARANTEE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. Code Confidentiality & Intellectual Property
              </h2>
              <div className="space-y-4">
                <p className="text-white font-medium">
                  At Delanki, we operate with paramount respect for intellectual property rights and code confidentiality:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#090909] border border-white/10">
                    <h3 className="font-mono text-xs font-bold text-[#F22952] uppercase mb-1">
                      Full Client IP Ownership
                    </h3>
                    <p className="text-xs text-[#B7B7B7]">
                      All codebases, design tokens, data models, and proprietary assets authored by Delanki for custom client engagements are assigned exclusively to the client upon milestone payment as specified in client agreements.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#090909] border border-white/10">
                    <h3 className="font-mono text-xs font-bold text-[#F22952] uppercase mb-1">
                      No AI Model Training on Client Source Code
                    </h3>
                    <p className="text-xs text-[#B7B7B7]">
                      We do not feed, upload, or index proprietary client repositories or confidential product logic into public machine learning training sets or unvetted external models.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#090909] border border-white/10">
                    <h3 className="font-mono text-xs font-bold text-[#F22952] uppercase mb-1">
                      Strict Mutual Non-Disclosure
                    </h3>
                    <p className="text-xs text-[#B7B7B7]">
                      We routinely execute bilateral Non-Disclosure Agreements (NDAs) before reviewing sensitive source code, patent-pending algorithms, or unannounced commercial products.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Extensions & Developer Tools */}
            <section id="developer-tools" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>TOOL ECOSYSTEM</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Developer Tools & Extensions (Chrome & VS Code)
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki designs and publishes extensions for modern developer ecosystems, including Google Chrome (Manifest V3) and Visual Studio Code:
                </p>
                <ul className="space-y-2 text-sm text-[#B7B7B7]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span><strong>Local Environment Execution:</strong> All syntax evaluation, UI inspection, and helper utilities operate strictly within your local browser runtime or local IDE workspace.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span><strong>No Source Code Exfiltration:</strong> Our extensions never inspect, extract, transmit, or replicate your open file buffers, environment variables, or private API keys to Delanki servers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span><strong>Scoped Manifest Permissions:</strong> We request only the bare minimum system permissions required for the tool&apos;s advertised utility.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Third-Party Infrastructure */}
            <section id="third-party" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>PARTNER PIPELINE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Third-Party Infrastructure Partners
              </h2>
              <div className="space-y-4">
                <p>
                  To deliver scalable, globally distributed digital services, Delanki coordinates with top-tier infrastructure and cloud vendors:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-0.5">Cloud Hosting & CDN:</strong>
                    <span>Vercel, Cloudflare, Google Cloud Platform (Edge distribution & SSL encryption)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-0.5">Version Control & CI/CD:</strong>
                    <span>GitHub Enterprise (Encrypted repository hosting & automated build pipelines)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-0.5">Communications & Mail:</strong>
                    <span>Google Workspace (TLS-secured enterprise mail handling)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-0.5">Zero Data Brokerage:</strong>
                    <span>We maintain zero commercial ties with ad-tech aggregators, trackers, or data brokers.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Data Security Protocols */}
            <section id="data-security" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>DEFENSE IN DEPTH</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. Security Protocols & Safeguards
              </h2>
              <div className="space-y-4">
                <p>
                  We implement multi-layered administrative, operational, and technical defenses:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span><strong>Transport Security:</strong> 100% of web traffic and API routes are forced over HTTPS via modern TLS 1.3 encryption.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span><strong>Access Governance:</strong> Role-based access control (RBAC), multi-factor hardware authentication, and least-privilege credentialing for all studio engineers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span><strong>Environment Segregation:</strong> Complete physical and logical isolation between development, staging, production, and client sandbox instances.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: Retention & Deletion */}
            <section id="retention-deletion" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>LIFECYCLE MANAGEMENT</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. Retention & Deletion Policy
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki retains submitted business inquiry data only as long as required to fulfill prospective scoping dialogues, adhere to accounting obligations, or execute active contract engagements.
                </p>
                <p>
                  If an inquiry does not materialize into an active development engagement within 180 days, prospective project briefs are scheduled for routine deletion unless ongoing communications remain active.
                </p>
              </div>
            </section>

            {/* Section 9: Your Privacy Rights */}
            <section id="user-rights" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>09</span>
                <span className="text-white/20">/</span>
                <span>GLOBAL COMPLIANCE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                9. Your Privacy Rights (GDPR & CCPA Aligned)
              </h2>
              <div className="space-y-4">
                <p>
                  Regardless of your geographical location, Delanki grants you full authority over your personal information:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-1">Right to Access & Portability:</strong>
                    <span>Request a complete digital record of personal contact details and communication logs retained by Delanki.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-1">Right to Erasure (Forgotten):</strong>
                    <span>Request irrevocable deletion of your inquiry details, records, and contact briefs from our internal databases.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-1">Right to Rectification:</strong>
                    <span>Update or rectify inaccurate email contacts, business designations, or scope briefs.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090909] border border-white/10">
                    <strong className="text-white block font-mono mb-1">Non-Discrimination:</strong>
                    <span>Exercising your privacy rights will never result in service degradation, penalty, or refusal to scope technical projects.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Cookies & Storage */}
            <section id="cookies-storage" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>10</span>
                <span className="text-white/20">/</span>
                <span>BROWSER RUNTIME</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                10. Cookies & Functional Storage
              </h2>
              <div className="space-y-4">
                <p>
                  Our site is intentionally engineered without intrusive third-party behavioral advertising cookies, Facebook pixels, or fingerprinting scripts.
                </p>
                <p>
                  We utilize standard browser session storage solely for essential interface dynamics: maintaining smooth scrolling memory (<code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">Lenis</code>), modal dismissal states, and custom cursor accessibility flags.
                </p>
              </div>
            </section>

            {/* Section 11: Policy Updates */}
            <section id="policy-updates" className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>11</span>
                <span className="text-white/20">/</span>
                <span>VERSION CONTROL</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                11. Updates to This Policy
              </h2>
              <div className="space-y-4">
                <p>
                  As Delanki expands into new platform ecosystems (e.g., Apple visionOS, web3 architectures, edge AI primitives), we may periodically refresh this Privacy Policy.
                </p>
                <p>
                  Any revisions will be posted directly to this URL with an updated revision date. Material alterations will be highlighted via our studio newsletter and repository release notes.
                </p>
              </div>
            </section>

            {/* Section 12: Contact & Data Officer */}
            <section id="contact-privacy" className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#F22952]/40 scroll-mt-32">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>12</span>
                <span className="text-white/20">/</span>
                <span>DIRECT ACCESS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                12. Contact Delanki Privacy Desk
              </h2>
              <div className="space-y-4">
                <p>
                  For privacy questions, formal Data Processing Addendum (DPA) execution, or immediate data deletion requests, contact our privacy officer directly:
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">OFFICIAL PRIVACY CONTACT</span>
                    <span className="font-mono text-sm sm:text-base text-white font-bold">{COMPANY_DATA.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase flex items-center gap-1.5 transition-colors"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'COPIED' : 'COPY EMAIL'}</span>
                    </button>
                    <a
                      href={`mailto:${COMPANY_DATA.email}?subject=Privacy%20Policy%20Inquiry%20-%20Delanki`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT DEVELOPMENT COLLECTIVE</span>
                  <Link to="/" className="text-white hover:text-[#F22952] transition-colors flex items-center gap-1">
                    <span>RETURN TO MAIN STUDIO</span>
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};
