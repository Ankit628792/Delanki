import React, { useState } from 'react';
import { BENTO_CAPABILITIES } from '../../data/siteData';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Sparkles,
  ArrowUpRight,
  Shield,
  Gauge,
  Workflow,
  Smartphone,
  Puzzle,
} from 'lucide-react';

export const BentoCapabilities: React.FC = () => {
  const [aiPrompt, setAiPrompt] = useState('Build a real-time analytics dashboard in Next.js + PostgreSQL');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiLatency, setApiLatency] = useState(12);

  const handleTestAi = () => {
    setIsGenerating(true);
    setAiResponse(null);
    setTimeout(() => {
      setAiResponse(
        '✓ Architecture plan generated: App Router with Server Components, Drizzle ORM queries, WebSocket event stream at 12ms latency, Tailwind 2023 design tokens.'
      );
      setIsGenerating(false);
    }, 600);
  };

  const handlePing = () => {
    setApiLatency(Math.floor(8 + Math.random() * 8));
  };

  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-10 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>04 // BENTO CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              SMALL TEAM<span className="text-[#F22952]">.</span> <br />
              <span className="text-chrome">WIDE CAPABILITY.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            By avoiding bloated management layers and leveraging senior engineering depth, we match and exceed the technical reach of agencies 10x our size.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Card 1: Product Engineering (Large 7-col) */}
          <div className="col-span-12 lg:col-span-7 bg-[#121212] border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#F22952]/50 transition-all duration-500">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#F22952]/20 text-[#F22952] border border-[#F22952]/30 font-bold">
                  CORE PILLAR // 01
                </span>
                <Code2 className="w-5 h-5 text-[#B7B7B7] group-hover:text-[#F22952] transition-colors" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                PRODUCT ENGINEERING
              </h3>
              <p className="text-sm text-[#B7B7B7] max-w-lg leading-relaxed">
                Full-lifecycle execution: database architecture, secure authentication, reactive state trees, type-safe API boundaries, and continuous edge deployments.
              </p>
            </div>

            {/* Visual: Live Code/Architecture Stack preview */}
            <div className="mt-6 p-4 rounded-2xl bg-[#090909] border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-[#B7B7B7]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F22952]" />
                  <span>ARCHITECTURE_VALIDATOR.ts</span>
                </div>
                <span className="text-emerald-400">100% TYPE SAFETY</span>
              </div>
              <div className="text-[#B7B7B7] text-[11px] leading-relaxed">
                <span className="text-[#F22952]">const</span> product = <span className="text-white">createDelankiApp</span>({'{'}
                <br />
                &nbsp;&nbsp;frontend: <span className="text-[#FFBD2E]">'Next.js 19 + TypeScript + GSAP'</span>,
                <br />
                &nbsp;&nbsp;mobile: <span className="text-[#FFBD2E]">'React Native + Expo'</span>,
                <br />
                &nbsp;&nbsp;extensions: <span className="text-[#FFBD2E]">'Chrome MV3 + VS Code LSP'</span>,
                <br />
                &nbsp;&nbsp;cloud: <span className="text-[#FFBD2E]">'PostgreSQL + Edge Compute'</span>
                <br />
                {'}'});
              </div>
            </div>
          </div>

          {/* Card 2: AI & Copilot Workflows (5-col) */}
          <div className="col-span-12 lg:col-span-5 bg-[#121212] border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/40 transition-all duration-500">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white font-medium">
                  INTELLIGENCE // 02
                </span>
                <Sparkles className="w-5 h-5 text-[#F22952]" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                AI & COPILOT WORKFLOWS
              </h3>
              <p className="text-sm text-[#B7B7B7] leading-relaxed">
                We integrate practical, context-grounded AI capabilities directly into application logic and browser sidebars.
              </p>
            </div>

            {/* Mini AI prompt test interactive widget */}
            <div className="mt-6 p-4 rounded-2xl bg-[#090909] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-[#F22952]"
                  placeholder="Ask product prompt..."
                />
                <button
                  onClick={handleTestAi}
                  disabled={isGenerating}
                  className="px-3 py-2 bg-[#F22952] hover:bg-[#ff305c] text-white rounded-lg text-[10px] font-bold shrink-0 transition-colors"
                >
                  {isGenerating ? '...' : 'PROMPT'}
                </button>
              </div>
              {aiResponse ? (
                <div className="text-[10px] text-emerald-400 leading-snug bg-emerald-950/20 p-2.5 rounded border border-emerald-500/20">
                  {aiResponse}
                </div>
              ) : (
                <div className="text-[10px] text-[#B7B7B7] italic">
                  Press Prompt to test Del<span className="text-[#F22952]">anki</span> context inference.
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Browser & Editor Tools (4-col) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#121212] border border-white/15 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#F22952]/40 transition-all duration-500">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Puzzle className="w-5 h-5 text-[#F22952]" />
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/10 text-white">MV3 & LSP</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white uppercase">
                BROWSER & EDITOR EXTENSIONS
              </h4>
              <p className="text-xs text-[#B7B7B7] leading-relaxed">
                Bespoke extensions that inject custom toolbars into Chrome or automate repetitive code transformations in VS Code.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-[#090909] border border-white/10 font-mono text-[11px]">
              <span className="text-[#B7B7B7]">Chrome Web Store:</span>
              <span className="text-emerald-400 font-bold">100% COMPLIANT</span>
            </div>
          </div>

          {/* Card 4: Cross-Device Precision (4-col) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#121212] border border-white/15 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#F22952]/40 transition-all duration-500">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Smartphone className="w-5 h-5 text-white" />
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#F22952]/10 text-[#F22952] border border-[#F22952]/20">REACT NATIVE</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white uppercase">
                CROSS-DEVICE FLUIDITY
              </h4>
              <p className="text-xs text-[#B7B7B7] leading-relaxed">
                Adaptive layout logic ensuring your application looks intentional and tactile on 375px mobile up to 4K ultra-wide monitors.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-[#090909] border border-white/10 font-mono text-[11px]">
              <span className="text-[#B7B7B7]">Target Frame Rate:</span>
              <span className="text-[#F22952] font-bold">120 FPS FLUID</span>
            </div>
          </div>

          {/* Card 5: Performance & Speed (4-col) */}
          <div className="col-span-12 sm:col-span-12 lg:col-span-4 bg-[#121212] border border-white/15 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#F22952]/40 transition-all duration-500">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Gauge className="w-5 h-5 text-[#F22952]" />
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/10 text-white">SUB-SECOND</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white uppercase">
                PERFORMANCE & EDGE APIS
              </h4>
              <p className="text-xs text-[#B7B7B7] leading-relaxed">
                Zero-jank animations, WebGL GPU acceleration, edge asset caching, and lightning-fast database query design.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-[#090909] border border-white/10 font-mono text-[11px]">
              <span className="text-[#B7B7B7]">Edge Roundtrip:</span>
              <button
                onClick={handlePing}
                className="text-emerald-400 font-bold hover:underline"
                title="Click to test ping"
              >
                {apiLatency}ms (Test Ping)
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
