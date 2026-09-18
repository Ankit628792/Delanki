import React, { useState, useEffect } from 'react';
import { SEO } from '../components/common/SEO';
import { getProductsCatalogSEO } from '../lib/seo';
import { PRODUCTS_DATA } from '../data/siteData';
import { ProductItem } from '../types';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Check,
  Layers,
  X,
  ArrowLeft,
  Smartphone,
  Terminal,
  Cpu,
  Sparkles,
  Volume2,
  QrCode,
  Radio,
  WifiOff,
  Wind,
  Link2,
  BookOpen,
  ShieldCheck,
  Activity,
  Filter,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useInquiry } from '../context/InquiryContext';
import { triggerPageTransition } from '../lib/pageTransition';

interface ProjectsPageProps {
  onOpenInquiry?: (initialMode?: 'build' | 'hire') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenInquiry }) => {
  const { openInquiry } = useInquiry();
  const handleInquiry = onOpenInquiry || openInquiry;
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Interactive Bento Micro-Widget States
  const [vectofiIcon, setVectofiIcon] = useState<'layers' | 'cpu' | 'terminal' | 'sparkles'>('layers');
  const [yarnPalette, setYarnPalette] = useState<'crimson' | 'amber' | 'cyan' | 'emerald'>('crimson');
  const [earlyLearnerLetter, setEarlyLearnerLetter] = useState<'क' | 'A' | '3' | 'अ'>('क');
  const [storyGenre, setStoryGenre] = useState<'noir' | 'fantasy' | 'cyberpunk'>('noir');
  const [respiraPace, setRespiraPace] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cycle respira breathing pace for dynamic widget feel
  useEffect(() => {
    const timer = setInterval(() => {
      setRespiraPace((prev) => (prev === 'inhale' ? 'hold' : prev === 'hold' ? 'exhale' : 'inhale'));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const categories = ['All', 'Web App', 'Mobile App', 'VS Code Extension'];

  // Precise Bento layout order to guarantee mathematical 12-column grid rows without gaps
  const bentoAllOrder = [
    'product-vectofi',            // Row 1: 8 cols
    'product-kurush-yarn',        // Row 1: 4 cols (8+4 = 12)
    'product-sticky-notes',       // Row 2: 6 cols
    'product-early-learner',      // Row 2: 6 cols (6+6 = 12)
    'product-jira-github-linker', // Row 3: 6 cols (Interchanged with Qrazy)
    'product-love-alarm',         // Row 3: 6 cols (6+6 = 12)
    'product-airbeam-share',      // Row 4: 4 cols
    'product-respira',            // Row 4: 4 cols
    'product-qrazy',              // Row 4: 4 cols (4+4+4 = 12) (Interchanged with Jira & GitHub Linker)
    'product-syntax-storyteller', // Row 5: 12 cols (12 = 12)
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? [...PRODUCTS_DATA].sort((a, b) => bentoAllOrder.indexOf(a.id) - bentoAllOrder.indexOf(b.id))
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  // Responsive bento column span calculation ensuring every row equals 12
  const getBentoSpan = (productId: string): string => {
    if (activeCategory === 'All') {
      switch (productId) {
        case 'product-vectofi':
          return 'col-span-12 lg:col-span-8';
        case 'product-kurush-yarn':
          return 'col-span-12 lg:col-span-4';
        case 'product-sticky-notes':
        case 'product-early-learner':
        case 'product-jira-github-linker':
        case 'product-love-alarm':
          return 'col-span-12 md:col-span-6 lg:col-span-6';
        case 'product-airbeam-share':
        case 'product-respira':
          return 'col-span-12 md:col-span-6 lg:col-span-4';
        case 'product-qrazy':
          return 'col-span-12 md:col-span-12 lg:col-span-4';
        case 'product-syntax-storyteller':
          return 'col-span-12';
        default:
          return 'col-span-12 lg:col-span-6';
      }
    } else if (activeCategory === 'Web App') {
      switch (productId) {
        case 'product-vectofi':
          return 'col-span-12 lg:col-span-8';
        case 'product-kurush-yarn':
          return 'col-span-12 lg:col-span-4';
        case 'product-qrazy':
          return 'col-span-12';
        default:
          return 'col-span-12 lg:col-span-6';
      }
    } else if (activeCategory === 'Mobile App') {
      return 'col-span-12 md:col-span-6 lg:col-span-6';
    } else {
      // VS Code Extension
      switch (productId) {
        case 'product-sticky-notes':
        case 'product-jira-github-linker':
          return 'col-span-12 md:col-span-6 lg:col-span-6';
        case 'product-syntax-storyteller':
          return 'col-span-12';
        default:
          return 'col-span-12 lg:col-span-6';
      }
    }
  };

  // Render bespoke interactive micro-widget for each product with standardized container heights
  const renderBentoMicroWidget = (product: ProductItem) => {
    switch (product.id) {
      case 'product-vectofi':
        return (
          <div className="h-[184px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F22952] animate-pulse" />
                <span>INTERACTIVE SVG LAB // VECTOFI</span>
              </div>
              <span className="text-emerald-400 font-semibold">0 RUNTIME DEPS</span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'layers', label: 'Layers', Icon: Layers },
                { id: 'cpu', label: 'CPU', Icon: Cpu },
                { id: 'terminal', label: 'Shell', Icon: Terminal },
                { id: 'sparkles', label: 'Spark', Icon: Sparkles },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setVectofiIcon(id as any)}
                  className={`p-1.5 rounded-xl border flex flex-col items-center gap-0.5 transition-all ${
                    vectofiIcon === id
                      ? 'bg-[#F22952]/20 border-[#F22952] text-[#F22952]'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-mono text-[8px] uppercase">{label}</span>
                </button>
              ))}
            </div>

            <div className="bg-[#050505] rounded-xl border border-white/10 p-2.5 font-mono text-[10px] space-y-0.5">
              <div className="text-[#F22952] font-semibold">// &lt;{vectofiIcon.toUpperCase()}_GLYPH /&gt;</div>
              <div className="text-white/80 truncate text-[9px]">viewBox="0 0 24 24" strokeWidth=&#123;1.5&#125;</div>
              <div className="text-[#FFBD2E] text-[9px]">Optimized bundle: 1.2 KB (brotli)</div>
            </div>
          </div>
        );

      case 'product-kurush-yarn':
        return (
          <div className="h-[184px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span>TACTILE GALLERY // WEBGL</span>
              </div>
              <span className="text-violet-400 font-semibold">PWA READY</span>
            </div>

            <div className="h-20 rounded-xl bg-[#050505] border border-white/10 relative overflow-hidden flex items-center justify-center p-2.5">
              <div
                className={`absolute inset-0 opacity-25 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] transition-colors ${
                  yarnPalette === 'crimson'
                    ? 'text-[#F22952]'
                    : yarnPalette === 'amber'
                    ? 'text-amber-400'
                    : yarnPalette === 'cyan'
                    ? 'text-cyan-400'
                    : 'text-emerald-400'
                }`}
              />
              <div className="relative z-10 text-center space-y-0.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-white/90 font-bold block">
                  HANDCRAFTED TEXTILE SHADER
                </span>
                <span className="font-mono text-[8px] text-[#B7B7B7] block">
                  60 FPS Smooth WebGL Orbit Controls
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <span className="font-mono text-[9px] text-[#B7B7B7] uppercase">PALETTE:</span>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'crimson', bg: 'bg-[#F22952]' },
                  { id: 'amber', bg: 'bg-amber-400' },
                  { id: 'cyan', bg: 'bg-cyan-400' },
                  { id: 'emerald', bg: 'bg-emerald-400' },
                ].map(({ id, bg }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setYarnPalette(id as any)}
                    className={`w-4 h-4 rounded-full ${bg} transition-transform ${
                      yarnPalette === id ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'product-sticky-notes':
        return (
          <div className="h-[184px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-[10px] text-[#B7B7B7] ml-1.5">editor.ts — VS Code</span>
              </div>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                GUTTER TAGS
              </span>
            </div>

            <div className="font-mono text-[10.5px] space-y-1.5 text-white/90 my-auto">
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-[9px] w-3.5">12</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[8.5px] font-bold border border-amber-500/40">
                  // TODO [P1]
                </span>
                <span className="text-white/70 truncate">Refactor JWT session token</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-[9px] w-3.5">13</span>
                <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[8.5px] font-bold border border-rose-500/40">
                  // FIXME
                </span>
                <span className="text-white/70 truncate">Edge case on offline reconnect</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-[9px] w-3.5">14</span>
                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8.5px] font-bold border border-cyan-500/40">
                  // NOTE
                </span>
                <span className="text-white/70 truncate">Interactive sidebar panel sync</span>
              </div>
            </div>

            <div className="text-[9px] font-mono text-[#B7B7B7] border-t border-white/5 pt-1.5 flex items-center justify-between">
              <span>2-way editor gutter navigation</span>
              <span className="text-emerald-400">ACTIVE IN MARKETPLACE</span>
            </div>
          </div>
        );

      case 'product-early-learner':
        return (
          <div className="h-[184px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#F22952]" />
                <span>LEARN_ENGINE // TRACING</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <Volume2 className="w-3 h-3 animate-pulse" />
                <span>NATIVE AUDIO</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2.5 items-center my-auto">
              <div className="col-span-5 bg-[#050505] rounded-xl border border-white/15 p-2 flex flex-col items-center justify-center">
                <div className="text-3xl font-display font-black text-white py-0.5 drop-shadow-md">
                  {earlyLearnerLetter}
                </div>
                <div className="font-mono text-[8px] text-[#F22952] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
                  <span>STROKE READY</span>
                </div>
              </div>

              <div className="col-span-7 space-y-1">
                <span className="font-mono text-[8.5px] text-[#B7B7B7] uppercase block">TAP TO TEST TRACING:</span>
                <div className="grid grid-cols-4 gap-1">
                  {(['क', 'A', '3', 'अ'] as const).map((letter) => (
                    <button
                      key={letter}
                      type="button"
                      onClick={() => setEarlyLearnerLetter(letter)}
                      className={`py-1 rounded-lg border font-display font-bold text-xs transition-all ${
                        earlyLearnerLetter === letter
                          ? 'bg-[#F22952] border-[#F22952] text-white shadow-md shadow-[#F22952]/40 scale-105'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
                <p className="text-[8.5px] text-[#B7B7B7] truncate pt-0.5">
                  Hindi & English speech pronunciation.
                </p>
              </div>
            </div>

            <div className="text-[9px] font-mono text-emerald-400/90 border-t border-white/5 pt-1.5 flex items-center justify-between">
              <span>Offline progress saved</span>
              <span>100% Kid safe</span>
            </div>
          </div>
        );

      case 'product-qrazy':
        return (
          <div className="h-[160px] rounded-2xl bg-[#090909] border border-white/10 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-[#F22952]" />
                <span>ANTI-COUNTERFEIT</span>
              </div>
              <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[9px]">
                <ShieldCheck className="w-3 h-3" /> VERIFIED
              </span>
            </div>

            <div className="h-16 rounded-xl bg-[#050505] border border-white/15 p-2 flex flex-col items-center justify-between relative overflow-hidden my-auto">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-[#F22952] shadow-[0_0_8px_#F22952] animate-bounce" />
              <div className="flex items-center justify-between w-full font-mono text-[8px] text-[#B7B7B7]">
                <span>UUID: #QR-99420-X</span>
                <span className="text-emerald-400 font-bold">99.8% GENUINE</span>
              </div>
              <div className="font-mono text-center space-y-0.5">
                <div className="text-white text-[9.5px] font-bold uppercase tracking-wide">BRAND AUTHENTICATION</div>
                <div className="text-[8px] text-[#B7B7B7]">Cryptographic seal on chain</div>
              </div>
            </div>

            <div className="text-[8.5px] font-mono text-[#B7B7B7] border-t border-white/5 pt-1 flex items-center justify-between">
              <span>Incident patrol map</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
          </div>
        );

      case 'product-love-alarm':
        return (
          <div className="h-[184px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#F22952] animate-pulse" />
                <span>10M PROXIMITY RADAR</span>
              </div>
              <span className="text-[#F22952] font-semibold">SOCKET.IO</span>
            </div>

            <div className="h-24 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center relative overflow-hidden my-auto">
              <div className="absolute w-20 h-20 rounded-full border border-[#F22952]/20 animate-ping" />
              <div className="absolute w-14 h-14 rounded-full border border-[#F22952]/40" />
              <div className="absolute w-6 h-6 rounded-full bg-[#F22952]/20 border border-[#F22952] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#F22952]" />
              </div>

              <div className="absolute bottom-2 inset-x-0 flex items-center justify-between px-3 font-mono text-[8px] text-[#B7B7B7]">
                <span>ACCURACY: ±0.5M</span>
                <span className="text-emerald-400 font-bold">1 MATCH NEARBY (8.2M)</span>
              </div>
            </div>

            <div className="text-[9px] font-mono text-white/70 border-t border-white/5 pt-1.5 flex items-center justify-between">
              <span>React Native & Socket.IO</span>
              <span className="text-emerald-400">SYNC PING: 24ms</span>
            </div>
          </div>
        );

      case 'product-airbeam-share':
        return (
          <div className="h-[160px] rounded-2xl bg-[#090909] border border-white/10 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <WifiOff className="w-3.5 h-3.5 text-cyan-400" />
                <span>AIR-GAPPED OPTICAL LINK</span>
              </div>
              <span className="text-cyan-400 font-semibold">100% OFFLINE</span>
            </div>

            <div className="h-16 rounded-xl bg-[#050505] border border-white/10 p-2 flex items-center justify-between font-mono text-[9px] my-auto">
              <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/15 flex items-center justify-center">
                <QrCode className="w-7 h-7 text-white/80 animate-pulse" />
              </div>
              <div className="space-y-0.5 text-right">
                <div className="text-white font-bold text-[9.5px]">PACKET STREAM</div>
                <div className="text-cyan-400 text-[8.5px]">FRAME 48 / 120 (40%)</div>
                <div className="text-[#B7B7B7] text-[7.5px]">ZERO BLUETOOTH / ZERO WIFI</div>
              </div>
            </div>

            <div className="text-[8.5px] font-mono text-cyan-400/90 border-t border-white/5 pt-1 flex items-center justify-between">
              <span>Optical camera scan</span>
              <span>Room DB</span>
            </div>
          </div>
        );

      case 'product-respira':
        return (
          <div className="h-[160px] rounded-2xl bg-[#090909] border border-white/10 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-emerald-400" />
                <span>LUNG TRAINING ENGINE</span>
              </div>
              <span className="text-emerald-400 font-semibold uppercase text-[9px]">{respiraPace}</span>
            </div>

            <div className="h-16 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between px-3 my-auto">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full border-2 border-emerald-400 transition-all duration-1000 ${
                    respiraPace === 'inhale' ? 'scale-110 opacity-100' : respiraPace === 'hold' ? 'scale-105 opacity-80' : 'scale-90 opacity-40'
                  }`}
                />
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-right space-y-0.5 font-mono">
                <div className="text-white text-xs font-bold uppercase tracking-wider">{respiraPace.toUpperCase()} (4s)</div>
                <div className="text-[8.5px] text-[#B7B7B7]">Gentle haptic vibration guide</div>
              </div>
            </div>

            <div className="text-[8.5px] font-mono text-emerald-400/90 border-t border-white/5 pt-1 flex items-center justify-between">
              <span>Jetpack Compose</span>
              <span>Calm loop active</span>
            </div>
          </div>
        );

      case 'product-jira-github-linker':
        return (
          <div className="h-[184px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-blue-400" />
                <span>CODELENS & HOVER LINKER</span>
              </div>
              <span className="text-blue-400 font-semibold text-[9px]">VS CODE API</span>
            </div>

            <div className="h-24 rounded-xl bg-[#050505] border border-white/10 p-2.5 font-mono text-[10px] flex flex-col justify-center space-y-1.5 my-auto">
              <div className="text-white/50 text-[9px]">// Clickable code references:</div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-white/80">Fixes issue:</span>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  PROJ-409
                </span>
                <span className="text-white/80">& PR:</span>
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                  #108
                </span>
              </div>
              <div className="text-emerald-400/90 text-[8.5px]">Direct deep-link to Jira ticket & GitHub PR</div>
            </div>

            <div className="text-[9px] font-mono text-[#B7B7B7] border-t border-white/5 pt-1.5 flex items-center justify-between">
              <span>Hover preview cards</span>
              <span className="text-emerald-400">INSTANT JUMP</span>
            </div>
          </div>
        );

      case 'product-syntax-storyteller':
        return (
          <div className="rounded-2xl bg-[#090909] border border-white/10 p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[10px] text-[#B7B7B7] border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>SYNTAX STORYTELLER // AST CODE COMMENTATOR</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-semibold">13+ NARRATIVE GENRES:</span>
                {(['noir', 'fantasy', 'cyberpunk'] as const).map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => setStoryGenre(genre)}
                    className={`px-2 py-0.5 rounded text-[8px] uppercase font-bold border transition-all ${
                      storyGenre === genre
                        ? 'bg-amber-400 text-black border-amber-400'
                        : 'bg-white/5 border-white/10 text-[#B7B7B7] hover:text-white'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[10px]">
              <div className="bg-[#050505] rounded-xl border border-white/10 p-3 space-y-1">
                <div className="text-white/40 text-[9px]">// Original TypeScript function:</div>
                <div className="text-[#F22952]">async function authenticateUser(token) &#123;</div>
                <div className="text-white/80 pl-2">const session = await verify(token);</div>
                <div className="text-[#FFBD2E] pl-2">if (!session) throw new Error();</div>
                <div className="text-[#F22952]">&#125;</div>
              </div>

              <div className="bg-[#050505] rounded-xl border border-amber-500/30 p-3 space-y-1 relative">
                <div className="text-amber-400 font-bold text-[9px] uppercase">// {storyGenre.toUpperCase()} NARRATIVE COMMENT:</div>
                <p className="text-white/90 text-[10px] font-sans italic leading-relaxed">
                  {storyGenre === 'noir' &&
                    '"Rain drummed against the window as the cipher token slid across the desk. Either this identity checks out, or someone is walking home in handcuffs."'}
                  {storyGenre === 'fantasy' &&
                    '"The ancient runes glowed emerald upon the gate. Only those bearing the royal sigil of verify() may traverse the stone threshold into the citadel."'}
                  {storyGenre === 'cyberpunk' &&
                    '"The neural handshake pulsed across sub-orbital satellite relays. Packet encryption validated; clearance granted before Arasaka ICE tripped the node."'}
                </p>
                <div className="text-amber-400/80 text-[8px] font-mono pt-1">
                  1-click generated via Command Palette in VS Code
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-32 w-full rounded-2xl bg-[#090909] border border-white/10 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#B7B7B7]">
              <span>SYSTEM PREVIEW</span>
              <span className="text-emerald-400">READY</span>
            </div>
            <div className="font-mono text-xs text-white/90 text-center font-semibold my-auto">
              {product.description}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white pt-24 sm:pt-28 pb-24 px-4 sm:px-6 md:px-10">
      <SEO {...getProductsCatalogSEO()} />
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Back Link & Header */}
        <div className="space-y-6 border-b border-white/10 pb-8">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              triggerPageTransition('/');
            }}
            className="inline-flex items-center gap-2 font-mono text-xs text-[#B7B7B7] hover:text-[#F22952] transition-colors uppercase py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F22952] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F22952]" />
                <span>SHOWCASE & PRODUCTS</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl text-white uppercase tracking-tight">
                THINGS WE{"'"}VE BUILT<span className="text-[#F22952]">.</span>
              </h1>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-[#B7B7B7] max-w-md font-sans leading-relaxed">
              Explore our full index of web applications, mobile platforms, and developer tooling in a balanced, responsive Bento grid.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-1.5 font-mono text-xs text-[#B7B7B7] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#F22952]" />
            <span className="uppercase text-[11px]">FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs uppercase px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-[#F22952] text-white font-bold shadow-lg shadow-[#F22952]/30'
                  : 'bg-white/5 hover:bg-white/10 text-[#B7B7B7] hover:text-white border border-white/10'
              }`}
            >
              {cat === 'All' ? 'ALL PRODUCTS' : `${cat.toUpperCase()}S`}
            </button>
          ))}
        </div>

        {/* Bento Grid Architecture: Mathematically Aligned 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {filteredProducts.map((product) => {
            const spanClass = getBentoSpan(product.id);
            const isFullWidthStoryteller = product.id === 'product-syntax-storyteller' && spanClass.includes('col-span-12');

            // For the full-width finale card (Syntax Storyteller), provide an editorial 2-column split on desktop
            if (isFullWidthStoryteller) {
              return (
                <div
                  key={product.id}
                  className={`${spanClass} bg-[#121212] border border-white/15 hover:border-[#F22952]/60 rounded-3xl p-6 sm:p-8 transition-all duration-500 group relative overflow-hidden`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full">
                    {/* Left Column: Info & Actions */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                              {product.category}
                            </span>
                            <span className="font-mono text-[10px] sm:text-[11px] text-[#B7B7B7]">{product.year}</span>
                          </div>
                          <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            {product.status}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase group-hover:text-[#F22952] transition-colors">
                            {product.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#B7B7B7] leading-relaxed">
                            {product.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-white/80 leading-relaxed font-sans">
                          {product.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {product.technologies.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#B7B7B7] border border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <ul className="space-y-1.5 text-xs text-white/80 font-sans pt-1">
                          {product.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-center gap-2 min-w-0">
                              <Check className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                              <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-2">
                        <Link
                          to="/product/$slug"
                          params={{ slug: product.slug }}
                          onClick={(e) => {
                            e.preventDefault();
                            triggerPageTransition(`/product/${product.slug}`);
                          }}
                          className="font-mono text-xs text-white hover:text-[#F22952] flex items-center gap-1.5 transition-colors uppercase font-semibold py-1.5"
                        >
                          <span className="sm:hidden">CASE STUDY</span>
                          <span className="hidden sm:inline">VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                          {product.liveUrl && (
                            <a
                              href={product.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-lg bg-white/10 hover:bg-[#F22952] text-white border border-white/20 hover:border-[#F22952] transition-all flex items-center gap-1.5 font-bold"
                            >
                              <span className="sm:hidden">INSTALL</span>
                              <span className="hidden sm:inline">INSTALL EXTENSION</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Interactive Micro-Widget */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      {renderBentoMicroWidget(product)}
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Bento Grid Card: Height-stabilized sections ensuring uniform baselines
            return (
              <div
                key={product.id}
                className={`${spanClass} bg-[#121212] border border-white/15 hover:border-[#F22952]/60 rounded-3xl p-5 sm:p-7 flex flex-col justify-between h-full transition-all duration-500 group relative overflow-hidden`}
              >
                <div className="flex flex-col flex-1 space-y-4">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                        {product.category}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#B7B7B7]">{product.year}</span>
                    </div>

                    <span
                      className={`font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${
                        product.status === 'Live'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : product.status === 'Open Source'
                          ? 'bg-[#F22952]/10 text-[#F22952] border-[#F22952]/30'
                          : 'bg-white/10 text-white/80 border-white/20'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Title & Tagline: Fixed minimum container height for pixel-level desktop alignment */}
                  <div className="space-y-1 h-[78px] sm:h-[84px] flex flex-col justify-start">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase group-hover:text-[#F22952] transition-colors truncate">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B7B7B7] leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Standardized Micro-Widget Container */}
                  <div>
                    {renderBentoMicroWidget(product)}
                  </div>

                  {/* Tech Stack Badges: Fixed height row */}
                  <div className="flex flex-wrap gap-1.5 h-[28px] items-center overflow-hidden">
                    {product.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#B7B7B7] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {product.technologies.length > 4 && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/50">
                        +{product.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Bullet Highlights: Aligned 3-item list */}
                  <ul className="space-y-1.5 text-xs text-white/80 font-sans h-[68px] flex flex-col justify-center">
                    {product.highlights.slice(0, 3).map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 min-w-0">
                        <Check className="w-3.5 h-3.5 text-[#F22952] shrink-0" />
                        <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Row: Pinned to bottom with uniform baseline */}
                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    onClick={(e) => {
                      e.preventDefault();
                      triggerPageTransition(`/product/${product.slug}`);
                    }}
                    className="font-mono text-xs text-white hover:text-[#F22952] flex items-center gap-1.5 transition-colors uppercase font-semibold py-1.5"
                  >
                    <span className="sm:hidden">CASE STUDY</span>
                    <span className="hidden sm:inline">VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {product.liveUrl && (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/10 hover:bg-[#F22952] text-white border border-white/20 hover:border-[#F22952] transition-all flex items-center gap-1 font-bold"
                      >
                        <span className="sm:hidden">{product.category === 'VS Code Extension' ? 'INSTALL' : 'VISIT'}</span>
                        <span className="hidden sm:inline">{product.category === 'VS Code Extension' ? 'INSTALL EXTENSION' : 'VISIT SITE'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {product.githubUrl && (
                      <a
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/10 hover:bg-[#F22952] text-white border border-white/20 hover:border-[#F22952] transition-all flex items-center gap-1 font-bold"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="sm:hidden">CODE</span>
                        <span className="hidden sm:inline">GITHUB</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#121212] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="font-mono text-xs text-[#F22952] uppercase tracking-wider">
                {selectedProduct.category} // {selectedProduct.year}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                {selectedProduct.title}
              </h3>
              <p className="text-sm text-[#B7B7B7]">{selectedProduct.tagline}</p>
            </div>

            <p className="text-sm text-white/90 leading-relaxed border-t border-b border-white/10 py-4">
              {selectedProduct.description}
            </p>

            <div className="space-y-3">
              <span className="font-mono text-xs text-[#B7B7B7] uppercase block">TECHNOLOGY STACK:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.technologies.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded bg-white/5 border border-white/10 text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {selectedProduct.liveUrl && (
                  <a
                    href={selectedProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-[#F22952] text-white font-mono text-xs uppercase transition-colors flex items-center gap-1.5 font-bold"
                  >
                    <span className="sm:hidden">{selectedProduct.category === 'VS Code Extension' ? 'INSTALL' : 'VISIT'}</span>
                    <span className="hidden sm:inline">{selectedProduct.category === 'VS Code Extension' ? 'INSTALL EXTENSION' : 'VISIT LIVE SITE'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProduct.githubUrl && (
                  <a
                    href={selectedProduct.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-[#F22952] text-white font-mono text-xs uppercase transition-colors flex items-center gap-1.5 font-bold"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span className="sm:hidden">CODE</span>
                    <span className="hidden sm:inline">GITHUB CODE</span>
                  </a>
                )}
              </div>

              {handleInquiry && (
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    handleInquiry('build');
                  }}
                  className="px-4 sm:px-6 py-2 rounded-xl bg-[#F22952] text-white font-mono text-xs font-bold uppercase shadow-lg shadow-[#F22952]/30 hover:bg-[#ff305c] transition-colors"
                >
                  <span className="sm:hidden">DISCUSS →</span>
                  <span className="hidden sm:inline">DISCUSS SIMILAR PRODUCT →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
