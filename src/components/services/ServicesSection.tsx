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
  Monitor,
  Tablet,
  FileCode2,
  Sparkles,
  Maximize2,
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
                className={`p-6 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border relative group ${
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
                {currentService.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics and Action */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {currentService.metrics && (
                <div className="flex items-center gap-6">
                  {currentService.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="font-mono text-xl font-bold text-[#F22952]">{m.value}</div>
                      <div className="font-mono text-[10px] text-[#B7B7B7] uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => onSelectService(currentService)}
                className="group inline-flex items-center gap-2 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs uppercase tracking-wider font-bold px-5 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(242,41,82,0.3)] ml-auto"
                data-cursor="INQUIRE"
              >
                <span>INQUIRE ABOUT {currentService.title.split(' ')[0]}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Interactive Specialized Visual Mockup */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            
            {/* Visual 1: Web App Browser Window */}
            {currentService.id === 'web-apps' && (
              <div className="w-full rounded-2xl bg-[#090909] border border-white/15 overflow-hidden shadow-2xl">
                {/* Browser top chrome */}
                <div className="bg-[#141414] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="bg-[#090909] border border-white/10 rounded-md px-4 py-1 text-[11px] font-mono text-[#B7B7B7] flex items-center gap-2">
                    <span className="text-emerald-400">https://</span>app.delanki-client.io/analytics
                  </div>
                  <div className="flex items-center gap-2 text-[#B7B7B7]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono">LIVE</span>
                  </div>
                </div>

                {/* Simulated Web App UI */}
                <div className="p-6 space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <div>
                      <div className="text-white font-bold font-sans text-base">Workspace Dashboard</div>
                      <div className="text-[10px] text-[#B7B7B7]">Sub-second edge data sync</div>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-[10px]">
                      Latency: 14ms
                    </span>
                  </div>

                  {/* Simulated Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded bg-white/5 border border-white/10">
                      <div className="text-[10px] text-[#B7B7B7]">RPS THROUGHPUT</div>
                      <div className="text-lg font-bold text-white font-sans mt-1">14.2k</div>
                    </div>
                    <div className="p-3 rounded bg-white/5 border border-white/10">
                      <div className="text-[10px] text-[#B7B7B7]">CACHE HIT</div>
                      <div className="text-lg font-bold text-[#F22952] font-sans mt-1">99.4%</div>
                    </div>
                    <div className="p-3 rounded bg-white/5 border border-white/10">
                      <div className="text-[10px] text-[#B7B7B7]">UPTIME</div>
                      <div className="text-lg font-bold text-emerald-400 font-sans mt-1">99.99%</div>
                    </div>
                  </div>

                  {/* Live Activity Feed simulation */}
                  <div className="p-3 rounded bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-white">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#F22952]" /> Active Sync Pipeline
                      </span>
                      <span className="text-emerald-400">OPTIMAL</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#F22952] to-emerald-400 w-4/5 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 2: Cross-Platform App Mockup */}
            {currentService.id === 'cross-platform' && (
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 bg-[#141414] p-1.5 rounded-xl border border-white/10 font-mono text-xs">
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      deviceView === 'mobile' ? 'bg-[#F22952] text-white' : 'text-[#B7B7B7] hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile (React Native)
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      deviceView === 'tablet' ? 'bg-[#F22952] text-white' : 'text-[#B7B7B7] hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" /> Tablet Adaptive
                  </button>
                </div>

                {/* Device Frame */}
                <div className={`transition-all duration-500 rounded-3xl bg-[#090909] border-4 border-[#242424] p-4 shadow-2xl ${
                  deviceView === 'mobile' ? 'w-64 sm:w-72 h-96' : 'w-full max-w-md h-96'
                }`}>
                  <div className="w-full h-full rounded-2xl bg-[#141414] border border-white/10 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center font-mono text-[10px] text-[#B7B7B7]">
                      <span>9:41 AM</span>
                      <span className="text-[#F22952]">120 FPS</span>
                    </div>

                    <div className="space-y-3 my-auto text-center">
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F22952]/20 border border-[#F22952] flex items-center justify-center text-[#F22952]">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div className="font-display font-bold text-white text-base">
                        React Native UI
                      </div>
                      <p className="text-xs text-[#B7B7B7]">
                        Cross-platform native performance, offline SQLite cache & gesture engine.
                      </p>
                    </div>

                    <div className="h-10 w-full rounded-xl bg-[#F22952] flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg shadow-[#F22952]/30">
                      INTERACT →
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 3: Chrome Extension Simulator */}
            {currentService.id === 'chrome-extensions' && (
              <div className="w-full max-w-md rounded-2xl bg-[#090909] border border-white/15 overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="bg-[#181818] p-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="bg-[#090909] border border-white/10 rounded px-3 py-1 text-[10px] font-mono text-[#B7B7B7]">
                    github.com/pull/482
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-[#F22952]/20 border border-[#F22952] rounded">
                    <Puzzle className="w-3.5 h-3.5 text-[#F22952]" />
                  </div>
                </div>

                {/* Injected Extension Popup View */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F22952] animate-ping" />
                      <span className="font-display font-bold text-sm text-white">Del<span className="text-[#F22952]">anki</span> Browser Copilot</span>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                      MV3 ACTIVE
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-[#B7B7B7]">DOM Node Inspection:</span>
                      <span className="text-white">Active (34 nodes)</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-[#B7B7B7]">AI Summarizer Pipeline:</span>
                      <span className="text-emerald-400">Hooked to Tab</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-[#B7B7B7]">Storage Quota:</span>
                      <span className="text-[#F22952]">0.8 MB / 10 MB</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-[#F22952] hover:bg-[#ff305c] text-white font-mono text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Play className="w-3.5 h-3.5" /> Execute Workflow Automation
                  </button>
                </div>
              </div>
            )}

            {/* Visual 4: VS Code Extension Simulator */}
            {currentService.id === 'vscode-extensions' && (
              <div className="w-full rounded-2xl bg-[#090909] border border-white/15 overflow-hidden shadow-2xl font-mono text-xs">
                {/* VS Code titlebar */}
                <div className="bg-[#181818] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#B7B7B7]">
                    <FileCode2 className="w-3.5 h-3.5 text-[#F22952]" />
                    <span className="text-[11px] text-white font-medium">extension.ts — Del<span className="text-[#F22952]">anki</span> Studio</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[10px] text-[#B7B7B7] hover:text-white"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Code Window */}
                <div className="p-4 bg-[#0d0d0d] space-y-1.5 overflow-x-auto text-[11px] leading-relaxed">
                  <div className="text-[#6A9955]">// Delanki Custom VS Code Language Protocol Server</div>
                  <div>
                    <span className="text-[#C586C0]">export async function</span>{' '}
                    <span className="text-[#DCDCAA]">activate</span>(
                    <span className="text-[#9CDCFE]">context</span>: <span className="text-[#4EC9B0]">ExtensionContext</span>
                    ) &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#9CDCFE]">const</span> <span className="text-[#4FC1FF]">copilot</span> ={' '}
                    <span className="text-[#C586C0]">new</span> <span className="text-[#4EC9B0]">DelankiASTInspector</span>();
                  </div>
                  <div className="pl-4">
                    <span className="text-[#9CDCFE]">context</span>.subscriptions.<span className="text-[#DCDCAA]">push</span>(
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
