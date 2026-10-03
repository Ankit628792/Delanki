import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getJiraGitHubLinkerPrivacyPolicySEO } from '../../../lib/seo';
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
  Lock,
  Link2,
  Key,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const JiraGitHubLinkerPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Workflow Scope' },
    { id: 'secretstorage-tokens', label: '2. SecretStorage & Access Token Encryption' },
    { id: 'direct-api-calls', label: '3. Direct Client-to-API Calls (No Delanki Proxy)' },
    { id: 'buffer-regex-parsing', label: '4. In-Memory Regex Pattern Matching' },
    { id: 'zero-code-harvesting', label: '5. Zero Code Harvesting & Zero Telemetry' },
    { id: 'vscode-permissions', label: '6. VS Code Extension Permissions' },
    { id: 'token-revocation', label: '7. Token Revocation & Data Purge' },
    { id: 'enterprise-security', label: '8. Enterprise Security, SOC 2 & NDAs' },
    { id: 'contact-desk', label: '9. Revisions & Developer Contact Desk' },
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
      <SEO {...getJiraGitHubLinkerPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'JIRA & GITHUB LINKER', to: '/product/$slug', params: { slug: 'jira-github-linker' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <Link2 className="w-3.5 h-3.5" />,
            label: 'ENTERPRISE WORKFLOW EXTENSION',
            variant: 'blue',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>JIRA &amp; GITHUB LINKER // EXTENSION PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            JIRA &amp; GITHUB LINKER PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Delanki is committed to absolute code confidentiality and developer privacy. Jira &amp; GitHub Linker turns ticket keys and pull request mentions into clickable references inside VS Code, connecting directly from your local machine to your authorized Atlassian and GitHub instances with zero intermediate proxy servers.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-emerald-400 font-bold">STATUS: ACTIVE &amp; CLIENT-DIRECT</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>STORAGE: VS CODE SECRETSTORAGE ONLY</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Key className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Encrypted Secrets
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              API tokens and PATs are encrypted in the operating system keychain via VS Code SecretStorage.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Direct Client-to-API
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Queries connect directly from your machine to Atlassian/GitHub. Zero Delanki backend proxy.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              In-Memory Regex
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Document scanning runs transiently in active editor buffer memory. Zero disk persistence.
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
              Zero tracking beacons, zero analytics pings, and zero repository code harvesting.
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
                params={{ slug: 'jira-github-linker' }}
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
                <span>ENTERPRISE WORKFLOW</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction &amp; Workflow Scope
              </h2>
              <div className="space-y-4">
                <p>
                  Engineering teams frequently reference Jira ticket numbers (e.g., <code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">ENG-4102</code>) and GitHub issues or PRs within code comments, git commit messages, and documentation. Jira &amp; GitHub Linker detects these references and turns them into interactive links with hover summaries.
                </p>
                <p>
                  All operations run entirely in local process memory on your workstation. Delanki operates no external proxy infrastructure and retains zero customer code.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="secretstorage-tokens"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>ENCRYPTED SECRETS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. SecretStorage &amp; Access Token Encryption
              </h2>
              <div className="space-y-4">
                <p>
                  Authentication tokens (Jira API tokens and GitHub Personal Access Tokens) are stored strictly inside VS Code&apos;s native <code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">SecretStorage</code> API.
                </p>
                <p>
                  This bridges directly into the operating system&apos;s hardware-backed credential locker:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li><strong>macOS:</strong> Apple Keychain</li>
                  <li><strong>Windows:</strong> Windows Credential Manager</li>
                  <li><strong>Linux:</strong> libsecret / GNOME Keyring / KWallet</li>
                </ul>
                <p>
                  Tokens are never saved to plain text workspace settings, global configurations, or remote cloud servers.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="direct-api-calls"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>ZERO PROXY CALLS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. Direct Client-to-API Calls (No Delanki Proxy)
              </h2>
              <div className="space-y-4">
                <p>
                  When you hover over an issue key, the extension dispatches an HTTPS request:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li>To your configured Atlassian Cloud domain (<code className="text-[#F22952] font-mono text-xs">your-domain.atlassian.net/rest/api/3/issue/...</code>)</li>
                  <li>Or to GitHub&apos;s REST/GraphQL API (<code className="text-[#F22952] font-mono text-xs">api.github.com</code> or GitHub Enterprise Server)</li>
                </ul>
                <p>
                  All network requests travel strictly between your local development workstation and the authorized vendor APIs via TLS 1.3 encryption. Delanki operates zero middleman servers.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="buffer-regex-parsing"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>IN-MEMORY MATCHING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. In-Memory Regex Pattern Matching
              </h2>
              <div className="space-y-4">
                <p>
                  The extension uses an optimized regex tokenizer (<code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">DocumentLinkProvider</code>) that scans text buffers in your active editor.
                </p>
                <p>
                  Only matched issue identifier tokens (such as <code className="text-[#F22952] font-mono text-xs">PROJ-123</code> or <code className="text-[#F22952] font-mono text-xs">org/repo#45</code>) are parsed. Your broader source code, file contents, secrets, and architecture logic are never read, indexed, or uploaded.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="zero-code-harvesting"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>ZERO HARVESTING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Zero Code Harvesting &amp; Zero Telemetry
              </h2>
              <div className="space-y-4">
                <p>
                  Jira &amp; GitHub Linker contains zero analytics trackers, telemetry beacons, error logging services, or user tracking packages.
                </p>
                <p>
                  Delanki has no technical capability to see which issue keys you reference, what repositories you work on, or what codebases you maintain.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="vscode-permissions"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>EXTENSION CAPABILITIES</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. VS Code Extension Permissions
              </h2>
              <div className="space-y-4">
                <p>
                  In accordance with the VS Code Extension Marketplace manifest standards, Jira &amp; GitHub Linker declares only the minimal set of activation events:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="text-white font-bold">onLanguage:*</span>
                    <span className="text-emerald-400">Provide Document Links on Open Editors</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="text-white font-bold">secretStorage</span>
                    <span className="text-emerald-400">Read &amp; Write Hardware-Encrypted Tokens</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="token-revocation"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>TOKEN REVOCATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. Token Revocation &amp; Data Purge
              </h2>
              <div className="space-y-4">
                <p>
                  You can remove your Jira and GitHub credentials at any moment:
                </p>
                <ol className="space-y-2 list-decimal list-inside text-white/90">
                  <li>Run <code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">Jira Linker: Clear Stored Tokens</code> from the VS Code Command Palette.</li>
                  <li>Revoke Personal Access Tokens directly in your Atlassian Security or GitHub Developer Settings dashboards.</li>
                </ol>
                <p>
                  Uninstalling the extension instantly and permanently purges all stored secrets from your OS keychain.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="enterprise-security"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>ENTERPRISE COMPLIANCE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. Enterprise Security, SOC 2 &amp; NDAs
              </h2>
              <div className="space-y-4">
                <p>
                  Because there are no Delanki backend databases or intermediate processing steps, the extension complies with enterprise IT procurement policies, SOC 2 Type II vendor reviews, and ISO 27001 workstation audits.
                </p>
                <p>
                  Engineering organizations can safely deploy this extension across developer fleets without exposing intellectual property, security tokens, or ticket metadata to third parties.
                </p>
              </div>
            </section>

            {/* Section 9: Policy Updates & Developer Contact Desk */}
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
                9. Revisions &amp; Developer Contact Desk
              </h2>
              <div className="space-y-4">
                <p>
                  For enterprise security inquiries, security audit questionnaire support, or bug submissions regarding Jira &amp; GitHub Linker:
                </p>
                <p className="font-mono text-xs text-[#F22952]">
                  https://www.delanki.com/products/jira-github-linker/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      DELANKI DEVELOPER TOOLING PRIVACY DESK
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
                      href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent('Jira GitHub Linker Privacy Inquiry')}`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: JIRA &amp; GITHUB LINKER</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'jira-github-linker' }}
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
