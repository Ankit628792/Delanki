import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/siteData';
import { ServiceItem } from '../../types';
import {
  Globe,
  Smartphone,
  Puzzle,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Tablet,
  FileCode2,
  Copy,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('web-apps');
  const [copiedCode, setCopiedCode] = useState(false);
  const [deviceView, setDeviceView] = useState<'mobile' | 'tablet'>('mobile');

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  const handleCopy = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-[#0c0c0c] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
              <span>03 // CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              WHAT WE BUILD<span className="text-[#F22952]">.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
            Four specialized engineering disciplines. We do not do everything—we do these four extraordinarily well with battle-tested architectures.
          </p>
        </div>

        {/* Editorial Service Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_DATA.map((srv) => {
            const isActive = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`w-full h-full p-6 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border relative group ${
                  isActive
                    ? 'bg-[#181818] border-[#F22952] shadow-[0_0_30px_rgba(242,41,82,0.2)] -translate-y-1'
                    : 'bg-[#111111] border-white/10 hover:border-white/30 hover:bg-[#141414]'
                }`}
                data-cursor="SELECT"
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-2xl font-black ${isActive ? 'text-[#F22952]' : 'text-white/30 group-hover:text-white/60'}`}>
                    {srv.number}
                  </span>
                  <div className={`p-2 rounded-lg border ${isActive ? 'bg-[#F22952]/20 border-[#F22952] text-[#F22952]' : 'bg-white/5 border-white/10 text-[#B7B7B7]'}`}>
                    {srv.id === 'web-apps' && <Globe className="w-4 h-4" />}
                    {srv.id === 'cross-platform' && <Smartphone className="w-4 h-4" />}
                    {srv.id === 'chrome-extensions' && <Puzzle className="w-4 h-4" />}
                    {srv.id === 'vscode-extensions' && <Terminal className="w-4 h-4" />}
                  </div>
                </div>

                <div className="mt-6 space-y-1">
                  <h3 className="font-display font-bold text-lg text-white uppercase group-hover:text-[#F22952] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#B7B7B7] line-clamp-2">
                    {srv.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Stage */}
        <div className="bg-[#121212] border border-white/15 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Service Details & Tech */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-black text-[#F22952]">{currentService.number}</span>
              <span className="h-4 w-[1px] bg-white/20" />
              <span className="font-mono text-xs text-[#B7B7B7] uppercase tracking-widest">
                DELANKI SPECIALIZATION
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              {currentService.title}
            </h3>

            <p className="text-base text-[#B7B7B7] leading-relaxed">
              {currentService.description}
            </p>

            {/* Key Capabilities List */}
            <div className="space-y-3 pt-2">
              <div className="font-mono text-[11px] text-[#B7B7B7] uppercase tracking-wider">
                KEY CAPABILITIES:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#F22952] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-[11px] text-[#B7B7B7] uppercase tracking-wider">
                PRIMARY TECHNOLOGIES:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentService.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#F22952]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Action Button */}
            <div className="pt-4">
              <button
                onClick={() => onSelectService(currentService)}
                className="inline-flex items-center gap-3 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(242,41,82,0.3)] hover:shadow-[0_0_30px_rgba(242,41,82,0.6)]"
                data-cursor="DISCUSS"
              >
                <span>REQUEST {currentService.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Live Interactive Visual Mockup / Simulation */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            
            {/* Visual 1: Web App Browser Simulation */}
            {currentService.id === 'web-apps' && (
              <div className="w-full rounded-2xl bg-[#090909] border border-white/15 overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="bg-[#181818] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="font-mono text-[11px] text-[#B7B7B7] bg-[#0c0c0c] px-4 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                    <span className="text-emerald-400">https://</span>
                    <span className="text-white">app.delanki.com/dashboard</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Dashboard Screen Content */}
                <div className="p-6 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <div className="text-[#B7B7B7] text-[10px]">REAL-TIME LATENCY</div>
                      <div className="text-emerald-400 font-bold text-base flex items-center gap-1">
                        <span>12ms</span>
                        <span className="text-[10px] text-white/50">(Global Edge)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#B7B7B7] text-[10px]">UPTIME SLA</div>
                      <div className="text-white font-bold text-base">99.99%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-[#B7B7B7] text-[10px]">CONCURRENCY</div>
                      <div className="text-white font-bold text-sm">100,000+ Req/s</div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F22952] w-3/4 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="text-[#B7B7B7] text-[10px]">SSR HYDRATION</div>
                      <div className="text-emerald-400 font-bold text-sm">0.08s (Zero CLS)</div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-full rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141414] border border-white/10 text-[11px] text-white/70 space-y-1">
                    <span className="text-[#F22952] font-semibold">// Micro-frontend Architecture</span>
                    <p className="text-[10px] text-[#B7B7B7] font-sans">
                      Next.js 15 App Router, React Server Components, tRPC, PostgreSQL with Prisma ORM.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 2: Cross-Platform Mobile Device Simulator */}
            {currentService.id === 'cross-platform' && (
              <div className="w-full max-w-sm flex flex-col items-center gap-3">
                {/* Switcher */}
                <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono">
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      deviceView === 'mobile' ? 'bg-[#F22952] text-white' : 'text-[#B7B7B7] hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>iOS & Android</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      deviceView === 'tablet' ? 'bg-[#F22952] text-white' : 'text-[#B7B7B7] hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>Tablet Adaptive</span>
                  </button>
                </div>

                {/* Device Frame */}
                <div className="w-full bg-[#050505] border-2 border-white/20 rounded-[32px] p-3 shadow-2xl relative overflow-hidden">
                  {/* Dynamic Island Notch */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-end px-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  {/* App Interface Mockup */}
                  <div className="bg-[#141414] rounded-2xl p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F22952]" />
                        <span className="font-bold text-white text-[11px]">REACT NATIVE EXPO</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold">60 FPS NATIVE</span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-16 rounded-xl bg-gradient-to-r from-[#F22952]/20 to-white/5 border border-white/10 p-3 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-[#B7B7B7]">SMOOTH GESTURES</div>
                          <div className="text-white font-bold text-xs font-sans">Reanimated 3 Physics</div>
                        </div>
                        <Play className="w-5 h-5 text-[#F22952] fill-[#F22952]" />
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-[#B7B7B7]">OFFLINE CACHE</div>
                          <div className="text-white font-bold">WatermelonDB</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-[#B7B7B7]">DEPLOYMENT</div>
                          <div className="text-white font-bold">EAS OTA Updates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 3: Chrome Extension Interactive Popup Simulator */}
            {currentService.id === 'chrome-extensions' && (
              <div className="w-full max-w-md rounded-2xl bg-[#0e0e0e] border border-white/15 p-5 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Puzzle className="w-5 h-5 text-[#F22952]" />
                    <span className="font-mono text-xs font-bold text-white uppercase">
                      CHROME MANIFEST V3
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    APPROVED
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-[#161616] p-3 rounded-xl border border-white/10 space-y-1.5">
                    <div className="text-[#B7B7B7] text-[10px] flex items-center justify-between">
                      <span>SERVICE WORKER LIFECYCLE</span>
                      <span className="text-white/60">0ms IDLE MEMORY</span>
                    </div>
                    <div className="text-white text-[11px] leading-tight">
                      Zero DOM memory leaks with modern Shadow DOM content-scripts injection.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[#F22952] text-[10px]">STORAGE SYNC</span>
                      <div className="text-white font-semibold">chrome.storage.local</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[#F22952] text-[10px]">AI MODEL HOOK</span>
                      <div className="text-white font-semibold">Client-side Gemini Nano</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 4: VS Code Extension Terminal Simulator */}
            {currentService.id === 'vscode-extensions' && (
              <div className="w-full rounded-2xl bg-[#090909] border border-white/15 overflow-hidden shadow-2xl">
                {/* VS Code Tab Bar */}
                <div className="bg-[#181818] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-[#F22952]" />
                    <span className="font-mono text-xs text-white font-medium">extension.ts</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[11px] font-mono text-[#B7B7B7] hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-white/90 space-y-1 leading-relaxed bg-[#0c0c0c] overflow-x-auto">
                  <div>
                    <span className="text-[#569CD6]">import</span> *{' '}
                    <span className="text-[#569CD6]">as</span> vscode{' '}
                    <span className="text-[#569CD6]">from</span>{' '}
                    <span className="text-[#CE9178]">'vscode'</span>;
                  </div>
                  <div className="text-white/40 pt-1">// VS Code Extension API activation</div>
                  <div>
                    <span className="text-[#569CD6]">export function</span>{' '}
                    <span className="text-[#DCDCAA]">activate</span>(context: vscode.ExtensionContext) &#123;
                  </div>
                  <div className="pl-4 text-emerald-400">
                    console.log('Delanki Extension Suite Active');
                  </div>
                  <div className="pl-4">
                    context.subscriptions.<span className="text-[#DCDCAA]">push</span>(
                  </div>
                  <div className="pl-8">
                    vscode.commands.<span className="text-[#DCDCAA]">registerCommand</span>(
                    <span className="text-[#CE9178]">'delanki.autoRefactor'</span>,
                    <span className="text-[#569CD6]">() =&gt;</span> copilot.<span className="text-[#DCDCAA]">optimize</span>()
                    )
                  </div>
                  <div className="pl-4">);</div>
                  <div>&#125;</div>
                </div>

                {/* Injected quick diagnostic popup */}
                <div className="bg-[#141414] p-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-[#B7B7B7]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>LSP Diagnostics: 0 Errors • 120ms AST parse</span>
                  </div>
                  <span className="text-[#F22952] font-bold">READY</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
