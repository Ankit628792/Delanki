import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { SEO } from '../../../components/common/SEO';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';
import { getSyntaxStorytellerPrivacyPolicySEO } from '../../../lib/seo';
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
  Sparkles,
  BookOpen,
  Key,
} from 'lucide-react';
import { COMPANY_DATA } from '../../../data/siteData';
import { scrollToElement, scrollToTop } from '../../../lib/lenis';

export const SyntaxStorytellerPrivacyPolicyPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    scrollToTop(0.1);
  }, []);

  const navItems = [
    { id: 'introduction', label: '1. Introduction & AI Storytelling Scope' },
    { id: 'ast-parsing', label: '2. Local AST Code Parsing & Isolation' },
    { id: 'api-key-security', label: '3. Bring-Your-Own-Key & SecretStorage Vault' },
    { id: 'direct-llm-calls', label: '4. Direct Client-to-LLM Requests (Zero Proxy)' },
    { id: 'zero-code-retention', label: '5. Zero Code Retention & No Model Training' },
    { id: 'genre-prompts', label: '6. Prompt Architecture & Sanitization' },
    { id: 'cache-and-purge', label: '7. Local Memory Clearing & Key Revocation' },
    { id: 'enterprise-compliance', label: '8. Enterprise AI Governance & IP Rights' },
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
      <SEO {...getSyntaxStorytellerPrivacyPolicySEO()} />

      {/* Decorative Technical Grid Background */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumbs & Top Actions */}
        <Breadcrumbs
          items={[
            { label: 'DELANKI STUDIO', to: '/' },
            { label: 'PRODUCTS', to: '/products' },
            { label: 'SYNTAX STORYTELLER', to: '/product/$slug', params: { slug: 'syntax-storyteller' } },
            { label: 'PRIVACY POLICY', isCurrent: true },
          ]}
          badge={{
            icon: <BookOpen className="w-3.5 h-3.5" />,
            label: 'AI CODE ANNOTATION',
            variant: 'purple',
          }}
          showShare={true}
        />

        {/* Header Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F22952]/10 border border-[#F22952]/30 text-[#F22952] font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>SYNTAX STORYTELLER // AI CODE PRIVACY</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
            SYNTAX STORYTELLER PRIVACY POLICY<span className="text-[#F22952]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B7B7B7] max-w-3xl leading-relaxed">
            Syntax Storyteller is an AI-assisted VS Code extension that explains complex algorithms as engaging narrative stories. The extension operates on a strict direct client-to-model architecture: Delanki provides no middleman proxy servers, retains zero code snippets, and does not train artificial intelligence models on your code.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-xs text-[#B7B7B7]">
            <span className="text-purple-400 font-bold">STATUS: ACTIVE &amp; DIRECT-TO-MODEL</span>
            <span className="text-white/20">•</span>
            <span>EFFECTIVE DATE: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>LAST REVIEWED: OCTOBER 2026</span>
            <span className="text-white/20">•</span>
            <span>STORAGE: ZERO SERVER RETENTION</span>
          </div>
        </header>

        {/* Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Local AST Parsing
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Abstract Syntax Trees are extracted locally on your computer with zero remote code uploads.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Key className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              BYOK Security
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Your personal API keys are encrypted inside VS Code SecretStorage and OS hardware keychains.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              Zero Intermediary
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Inference requests flow directly between your machine and LLM endpoints. Zero proxy hops.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#F22952]/10 border border-[#F22952]/30 flex items-center justify-center text-[#F22952] mb-3">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
              No Training
            </h2>
            <p className="text-xs text-[#B7B7B7] leading-relaxed">
              Code snippets are never retained, logged, or used to train public machine learning models.
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
                params={{ slug: 'syntax-storyteller' }}
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
                <span>AI STORYTELLING SCOPE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                1. Introduction &amp; AI Storytelling Scope
              </h2>
              <div className="space-y-4">
                <p>
                  Syntax Storyteller reimagines documentation by transforming dense functions, regular expressions, and legacy algorithms into narratives—such as a Sci-Fi warp sequence or a Victorian mystery.
                </p>
                <p>
                  Because developers work with proprietary codebases, intellectual property, and trade secrets, our architecture prioritizes strict local parsing, direct model communication, and zero data logging.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="ast-parsing"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>LOCAL AST PARSING</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                2. Local AST Code Parsing &amp; Isolation
              </h2>
              <div className="space-y-4">
                <p>
                  When you select code to be explained, the extension runs local Tree-sitter / Babel AST traversers strictly within your VS Code Node.js extension host runtime.
                </p>
                <p>
                  It isolates function signatures, variable scopes, and loop conditions locally. Your complete file system, unselected files, and environment configuration remain untouched and unread.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="api-key-security"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>KEY VAULT SECURITY</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                3. Bring-Your-Own-Key &amp; SecretStorage Vault
              </h2>
              <div className="space-y-4">
                <p>
                  Syntax Storyteller operates on a Bring-Your-Own-Key (BYOK) model. Users supply their own OpenAI, Anthropic, or Google Gemini API keys:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li>API keys are encrypted using VS Code <code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">SecretStorage</code>.</li>
                  <li>Keys are decoded in memory solely when sending a generation request.</li>
                  <li>Delanki Studio never sees, receives, or stores your API credentials.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="direct-llm-calls"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>04</span>
                <span className="text-white/20">/</span>
                <span>DIRECT LLM CALLS</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                4. Direct Client-to-LLM Requests (Zero Proxy)
              </h2>
              <div className="space-y-4">
                <p>
                  Inference requests are sent directly via encrypted HTTPS connections from your local machine to the official foundation model endpoint:
                </p>
                <div className="p-4 rounded-xl bg-[#090909] border border-white/10 space-y-2 font-mono text-xs text-[#B7B7B7]">
                  <div>• OpenAI API: <code className="text-white">api.openai.com/v1/chat/completions</code></div>
                  <div>• Anthropic Claude: <code className="text-white">api.anthropic.com/v1/messages</code></div>
                  <div>• Google Gemini: <code className="text-white">generativelanguage.googleapis.com</code></div>
                </div>
                <p>
                  No intermediate proxy server or logging gateway operated by Delanki participates in this data transmission.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="zero-code-retention"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>05</span>
                <span className="text-white/20">/</span>
                <span>ZERO RETENTION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                5. Zero Code Retention &amp; No Model Training
              </h2>
              <div className="space-y-4">
                <p>
                  Delanki retains 0% of your source code snippets. When using standard enterprise tier API keys (OpenAI API, Anthropic API, or Vertex AI), providers explicitly commit to zero data retention for model training under their commercial terms of service.
                </p>
                <p>
                  Syntax Storyteller adds no analytical telemetry or remote debugging monitors to your editor session.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="genre-prompts"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>06</span>
                <span className="text-white/20">/</span>
                <span>PROMPT SANITIZATION</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                6. Prompt Architecture &amp; Sanitization
              </h2>
              <div className="space-y-4">
                <p>
                  System prompts injected into narrative generation are strictly stylistic constraints instructing the LLM to format the response into comments or documentation.
                </p>
                <p>
                  The extension automatically strips common API key patterns, bearer tokens, and private SSH keys from selected code prior to prompt dispatch.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="cache-and-purge"
              className="p-6 sm:p-8 rounded-2xl bg-[#121212]/50 border border-white/10 scroll-mt-32"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase font-semibold mb-2">
                <span>07</span>
                <span className="text-white/20">/</span>
                <span>LOCAL MEMORY PURGE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                7. Local Memory Clearing &amp; Key Revocation
              </h2>
              <div className="space-y-4">
                <p>
                  Story generation results reside only in volatile memory inside your active editor document. You can revoke and clear all stored credentials at any time:
                </p>
                <ol className="space-y-2 list-decimal list-inside text-white/90">
                  <li>Run <code className="text-[#F22952] font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">Syntax Storyteller: Clear Stored API Keys</code> from the Command Palette.</li>
                  <li>Revoke API keys directly within your LLM provider dashboard.</li>
                </ol>
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
                <span>AI GOVERNANCE</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                8. Enterprise AI Governance &amp; IP Rights
              </h2>
              <div className="space-y-4">
                <p>
                  Generated narrative comments inserted into your editor belong 100% to you and your organization under your existing codebase license. Delanki claims zero copyright, ownership, or royalty over generated text.
                </p>
                <p>
                  Enterprise development teams can deploy Syntax Storyteller alongside corporate internal AI governance protocols without third-party licensing complications.
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
                  For questions regarding AI safety, enterprise licenses, security audits, or bug reports regarding Syntax Storyteller:
                </p>
                <p className="font-mono text-xs text-[#F22952]">
                  https://www.delanki.com/products/syntax-storyteller/privacy-policy
                </p>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div>
                    <span className="font-mono text-xs text-[#B7B7B7] block mb-1">
                      DELANKI AI &amp; DEVELOPER TOOLING DESK
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
                      href={`mailto:${COMPANY_DATA.email}?subject=${encodeURIComponent('Syntax Storyteller Privacy Inquiry')}`}
                      className="px-4 py-2 rounded-lg bg-[#F22952] hover:bg-[#ff3b63] text-white font-mono text-xs font-bold uppercase transition-colors"
                    >
                      COMPOSE EMAIL →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-3 font-mono text-xs text-[#B7B7B7]">
                  <span>DELANKI STUDIO // PRODUCT: SYNTAX STORYTELLER</span>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/product/$slug"
                      params={{ slug: 'syntax-storyteller' }}
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
