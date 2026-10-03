import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getStickyNotesPrivacyPolicySEO } from '../../../lib/seo';
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
  WifiOff,
  Terminal,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const StickyNotesPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & Extension Scope' },
    { id: 'local-workspace-storage', label: '2. Local workspaceState Sandbox' },
    { id: 'zero-network-activity', label: '3. 100% Offline Network Guarantee' },
    { id: 'source-code-privacy', label: '4. Source Code Confidentiality' },
    { id: 'no-telemetry', label: '5. Zero Analytics & No Trackers' },
    { id: 'vscode-permissions', label: '6. VS Code Extension Sandbox' },
    { id: 'data-deletion', label: '7. Notes Deletion & Cleanup' },
    { id: 'enterprise-compliance', label: '8. Enterprise Security & NDAs' },
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
      <SEO {...getStickyNotesPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'STICKY NOTES', to: '/product/$slug', params: { slug: 'sticky-notes' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <Terminal className="w-3.5 h-3.5" />,
            label: 'VS CODE EXTENSION',
            variant: 'emerald',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>STICKY NOTES // EXTENSION PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            STICKY NOTES PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Delanki is committed to absolute code confidentiality and developer privacy. Sticky Notes for VS Code is engineered as a 100% offline editor extension: your workspace notes, comments, and file contents never leave your workstation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-emerald-400 font-bold">STATUS: VERIFIED &amp; 100% OFFLINE</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: JANUARY 2025</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>STORAGE: LOCAL WORKSPACE STATE</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <WifiOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              100% Offline
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Zero network requests. Safe for air-gapped workstations, classified codebases, and financial enterprise environments.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Local Workspace
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Notes are scoped to your local editor workspaceState and never synced to remote clouds or third-party servers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Code Confidential
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              The extension parses comments in memory without reading external files or transmitting intellectual property.
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
              No Application Insights, no Sentry crash beacons, and no usage analytics pings sent to Delanki.
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
                params={{ slug: 'sticky-notes' }}
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
                <span>DEVELOPER TOOLING SCOPE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction &amp; Extension Scope
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) is the author of <strong>Sticky Notes for VS Code</strong>, an editor extension that lets software engineers manage inline sticky notes and TODO tags across their active codebase.
                </p>
                <p>
                  We recognize that developer workstations host proprietary intellectual property, trade secrets, and client repositories. Sticky Notes for VS Code was constructed with zero external connectivity.
                </p>
                <p>
                  This Privacy Policy applies to the official extension package distributed through the Visual Studio Code Marketplace and Open VSX Registry.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="local-workspace-storage"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>WORKSPACE STORAGE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. Local workspaceState Sandbox
              </h2>
              <div className="space-y-4">
                <p>
                  When you create a sticky note or tag an inline comment:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>Notes are saved into VS Code’s internal <code className="text-[#F22952] font-mono text-xs">ExtensionContext.workspaceState</code> storage mechanism on your local disk.</li>
                  <li>Notes are isolated strictly to that project folder and are not uploaded to remote servers.</li>
                  <li>Deleting or closing the workspace isolates the state on your machine.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="zero-network-activity"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>OFFLINE GUARANTEE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. 100% Offline Network Guarantee
              </h2>
              <div className="space-y-4">
                <p>
                  The extension codebase contains zero network communication modules:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>No imports of Node.js <code className="text-[#F22952] font-mono text-xs">http</code>, <code className="text-[#F22952] font-mono text-xs">https</code>, or <code className="text-[#F22952] font-mono text-xs">fetch</code> modules.</li>
                  <li>Fully compatible with air-gapped workstations, offline lab systems, and secured corporate intranets.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="source-code-privacy"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>CODE CONFIDENTIALITY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. Source Code Confidentiality
              </h2>
              <div className="space-y-4">
                <p>
                  The extension inspects active editor text lines solely to render gutter badges and sidebar navigation:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/90">
                  <li>Regex comment scanning runs in volatile memory only while files are actively opened in the editor.</li>
                  <li>No code snippets, file paths, or git repository names are ever permanently cached or transmitted.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="no-telemetry"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>ZERO TELEMETRY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Zero Analytics &amp; No Trackers
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki does not include Microsoft Application Insights, Sentry, or custom telemetry probes in Sticky Notes for VS Code.
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
                <span>EXTENSION SANDBOX</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. VS Code Extension Sandbox
              </h2>
              <div className="space-y-4">
                <p>
                  The extension executes inside the standard VS Code extension host process with minimal privileges:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 space-y-2 font-mono text-xs text-[#B7B7B7]">
                  <div>• <span className="text-emerald-400 font-bold">window.createTextEditorDecorationType:</span> Gutter badge highlights.</div>
                  <div>• <span className="text-emerald-400 font-bold">window.registerTreeDataProvider:</span> Sidebar notes tree view.</div>
                  <div>• <span className="text-emerald-400 font-bold">commands.registerCommand:</span> Shortcut keystrokes for adding/clearing notes.</div>
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
                7. Notes Deletion &amp; Cleanup
              </h2>
              <div className="space-y-4">
                <p>
                  You can delete notes individually in the sidebar tree view or execute <code className="text-[#F22952] font-mono text-xs">Sticky Notes: Clear All Workspace Notes</code> from the Command Palette (<kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Ctrl+Shift+P</kbd> / <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Cmd+Shift+P</kbd>).
                </p>
                <p className="text-xs text-[#888888]">
                  Uninstalling the extension from VS Code immediately clears all registered decorations and listeners.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="enterprise-compliance"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>08</span>
                <span className="text-white/20">/</span>
                <span>ENTERPRISE SECURITY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. Enterprise Security &amp; NDAs
              </h2>
              <div className="space-y-4">
                <p>
                  Because Sticky Notes for VS Code contains zero network activity, it adheres to enterprise SOC 2, HIPAA code workstation guidelines, and bilateral Non-Disclosure Agreements (NDAs).
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
                  https://www.delanki.com/products/sticky-notes/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      STICKY NOTES DEVELOPER PRIVACY INQUIRIES
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
                      href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent('Sticky Notes Privacy Inquiry')}`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: STICKY NOTES FOR VS CODE</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'sticky-notes' }}
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
