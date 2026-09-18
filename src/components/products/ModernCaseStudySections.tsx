import React, { useState } from 'react';
import {
  Quote,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  Target,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Zap,
  Code2,
  Copy,
  Check,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface SectionBlock {
  id: string;
  rawTitle: string;
  numberPrefix?: string;
  cleanTitle: string;
  iconType: 'quote' | 'overview' | 'problem' | 'flow' | 'highlights' | 'impact' | 'general';
  content: string;
}

interface MarkdownContentProps {
  markdown: string;
  tagline?: string;
}

// Utility to parse markdown into logical structured sections based on H2 headers (##)
function parseMarkdownSections(markdown: string): { heroQuote: string | null; sections: SectionBlock[] } {
  const lines = markdown.split('\n');
  let heroQuote: string | null = null;
  const sections: SectionBlock[] = [];

  let currentTitle = '';
  let currentContent: string[] = [];
  let currentNumber: string | undefined = undefined;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect hero blockquote at the top before H2s
    if (sections.length === 0 && !currentTitle && line.trim().startsWith('>')) {
      const quoteText = line.replace(/^>\s*/, '').replace(/^["*]|["*]$/g, '').trim();
      if (!heroQuote) {
        heroQuote = quoteText;
      } else {
        heroQuote += ' ' + quoteText;
      }
      continue;
    }

    // Check for H2 section header: "## 1. What is...", "## 2. The Problem...", etc.
    const h2Match = line.match(/^##\s+(?:(\d+)\.\s*)?(.+)$/);
    if (h2Match) {
      if (currentTitle) {
        sections.push(createSectionBlock(currentTitle, currentNumber, currentContent.join('\n'), sections.length));
      }
      currentNumber = h2Match[1] ? `0${h2Match[1]}` : undefined;
      currentTitle = h2Match[2].trim();
      currentContent = [];
      continue;
    }

    // Ignore top-level H1 (already in hero header) and horizontal rules at the top
    if (sections.length === 0 && !currentTitle && (line.startsWith('# ') || line.trim() === '---')) {
      continue;
    }

    currentContent.push(line);
  }

  // Push the final section
  if (currentTitle) {
    sections.push(createSectionBlock(currentTitle, currentNumber, currentContent.join('\n'), sections.length));
  }

  return { heroQuote, sections };
}

function createSectionBlock(
  rawTitle: string,
  numberPrefix: string | undefined,
  content: string,
  index: number
): SectionBlock {
  const lower = rawTitle.toLowerCase();
  let iconType: SectionBlock['iconType'] = 'general';

  if (lower.includes('what is') || lower.includes('overview') || lower.includes('about')) {
    iconType = 'overview';
  } else if (lower.includes('problem') || lower.includes('friction') || lower.includes('struggle') || lower.includes('trap')) {
    iconType = 'problem';
  } else if (lower.includes('how it works') || lower.includes('step by step') || lower.includes('pillars') || lower.includes('genres')) {
    iconType = 'flow';
  } else if (lower.includes('highlight') || lower.includes('features') || lower.includes('capabilities')) {
    iconType = 'highlights';
  } else if (lower.includes('impact') || lower.includes('real-world') || lower.includes('value') || lower.includes('results')) {
    iconType = 'impact';
  }

  const id = `section-${rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || index}`;

  return {
    id,
    rawTitle,
    numberPrefix: numberPrefix || `0${index + 1}`,
    cleanTitle: rawTitle,
    iconType,
    content: content.trim(),
  };
}

export const ModernCaseStudySections: React.FC<MarkdownContentProps> = ({ markdown }) => {
  const { heroQuote, sections } = parseMarkdownSections(markdown);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (codeText: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText);
      setCopiedCode(codeText);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };


  // Custom markdown component overrides to look magazine-grade and responsive
  const markdownComponents = {
    p: ({ children }: any) => (
      <p className="text-[#c8c8c8] text-base sm:text-lg leading-relaxed font-sans mb-4 font-normal">
        {children}
      </p>
    ),
    h3: ({ children }: any) => (
      <div className="flex items-center gap-3 mt-8 mb-4 pt-2">
        <span className="w-2 h-2 rounded-full bg-[#F22952] shrink-0" />
        <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
          {children}
        </h3>
      </div>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-mono text-sm uppercase tracking-wider text-[#F22952] font-bold mt-5 mb-2 flex items-center gap-2">
        <ArrowRight className="w-3.5 h-3.5" />
        <span>{children}</span>
      </h4>
    ),
    ul: ({ children }: any) => (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 not-prose">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="space-y-3 my-5 not-prose counter-reset-step">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="p-4 rounded-xl bg-gradient-to-br from-[#161616] to-[#111] border border-white/10 hover:border-white/20 transition-all flex items-start gap-3 shadow-md group">
        <CheckCircle2 className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
        <div className="text-sm sm:text-base text-[#d8d8d8] leading-relaxed font-sans">
          {children}
        </div>
      </li>
    ),
    blockquote: ({ children }: any) => (
      <div className="my-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#F22952]/10 via-white/[0.03] to-transparent border-l-4 border-[#F22952] border-y border-r border-white/5 relative overflow-hidden">
        <Quote className="w-8 h-8 text-[#F22952]/30 absolute top-4 right-4 pointer-events-none" />
        <div className="italic text-white text-base sm:text-lg leading-relaxed relative z-10 font-sans">
          {children}
        </div>
      </div>
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const codeString = String(children).replace(/\n$/, '');
      if (inline) {
        return (
          <code className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-[#ff4b6e] border border-white/10">
            {children}
          </code>
        );
      }
      return (
        <div className="relative group my-5 rounded-2xl overflow-hidden border border-white/15 bg-[#090909]">
          <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 font-mono text-xs text-white/60">
            <span className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#F22952]" />
              <span>CODE PREVIEW</span>
            </span>
            <button
              onClick={() => handleCopyCode(codeString)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            >
              {copiedCode === codeString ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span className="text-[11px]">COPY</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto leading-relaxed bg-[#080808]">
            {children}
          </pre>
        </div>
      );
    },
    strong: ({ children }: any) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    hr: () => (
      <div className="my-8 border-t border-white/10" />
    ),
  };

  return (
    <div className="space-y-10">
      {/* 1. Hero Quote Capsule (Warm & Atmospheric) */}
      {heroQuote && (
        <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1b1b1b] via-[#121212] to-[#0a0a0a] border border-white/15 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial Red Glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#F22952]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-6 left-6 text-[#F22952]/25">
            <Quote className="w-12 h-12" />
          </div>
          <div className="relative z-10 pl-6 sm:pl-10 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F22952] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE PHILOSOPHY & VISION</span>
            </span>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-white font-medium italic tracking-tight leading-relaxed">
              "{heroQuote}"
            </p>
          </div>
        </div>
      )}


      {/* 3. Section Containers (Bespoke Editorial Blocks) */}
      <div className="space-y-12">
        {sections.map((section, idx) => {
          const isProblem = section.iconType === 'problem';
          const isFlow = section.iconType === 'flow';
          const isOverview = section.iconType === 'overview';
          const isHighlights = section.iconType === 'highlights';
          const isImpact = section.iconType === 'impact';

          return (
            <section
              key={section.id}
              id={section.id}
              className={`rounded-3xl p-6 sm:p-10 md:p-12 border transition-all relative overflow-hidden scroll-mt-28 ${
                isProblem
                  ? 'bg-gradient-to-b from-[#161214] via-[#100e10] to-[#0a0a0a] border-red-500/20 shadow-red-950/20'
                  : isFlow
                  ? 'bg-gradient-to-b from-[#131518] via-[#0f1114] to-[#0a0a0a] border-cyan-500/20 shadow-cyan-950/20'
                  : isHighlights
                  ? 'bg-gradient-to-b from-[#161613] via-[#121210] to-[#0a0a0a] border-amber-500/20 shadow-amber-950/20'
                  : isImpact
                  ? 'bg-gradient-to-b from-[#121614] via-[#0f1210] to-[#0a0a0a] border-emerald-500/20 shadow-emerald-950/20'
                  : 'bg-[#101010] border-white/10'
              }`}
            >
              {/* Top Section Badge & Decorative Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-bold text-sm border ${
                      isProblem
                        ? 'bg-red-500/10 text-red-400 border-red-500/30'
                        : isFlow
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                        : isHighlights
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : isImpact
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-[#F22952]/10 text-[#F22952] border-[#F22952]/30'
                    }`}
                  >
                    {isProblem && <AlertTriangle className="w-5 h-5" />}
                    {isFlow && <Zap className="w-5 h-5" />}
                    {isHighlights && <Cpu className="w-5 h-5" />}
                    {isImpact && <Target className="w-5 h-5" />}
                    {isOverview && <Lightbulb className="w-5 h-5" />}
                    {section.iconType === 'general' && <span>{section.numberPrefix}</span>}
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                      CHAPTER {section.numberPrefix || `0${idx + 1}`}
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
                      {section.cleanTitle}
                    </h2>
                  </div>
                </div>

                {/* Section Tag Badge */}
                <div className="hidden sm:inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                  <Layers className="w-3.5 h-3.5 text-[#F22952]" />
                  <span>
                    {isProblem && 'PROBLEM & CONTEXT'}
                    {isFlow && 'STEP-BY-STEP WORKFLOW'}
                    {isHighlights && 'CAPABILITIES'}
                    {isImpact && 'OUTCOMES & IMPACT'}
                    {isOverview && 'ARCHITECTURE OVERVIEW'}
                    {section.iconType === 'general' && 'DETAILED ANALYSIS'}
                  </span>
                </div>
              </div>

              {/* Render Section Markdown with Rich Styled Elements */}
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown components={markdownComponents}>
                  {section.content}
                </ReactMarkdown>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
