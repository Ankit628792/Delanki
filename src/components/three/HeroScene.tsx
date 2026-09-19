import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Activity, CheckCircle2, Sparkles, Smartphone, Globe, Chrome } from 'lucide-react';

interface BuildLog {
  id: string;
  time: string;
  type: 'info' | 'success' | 'build';
  message: string;
}

const MODES = [
  { id: 'web', label: 'NEXT.JS EDGE', icon: Globe, metric: '24ms TTFB', color: '#61dafb' },
  { id: 'ext', label: 'CHROME EXT MV3', icon: Chrome, metric: '42KB Bundle', color: '#F22952' },
  { id: 'mobile', label: 'REACT NATIVE', icon: Smartphone, metric: '120 FPS Target', color: '#61dafb' },
];

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<number>(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  // Build terminal logs stream
  const logs: BuildLog[] = [
    { id: '1', time: '0.04s', type: 'info', message: 'delanki init --pipeline production' },
    { id: '2', time: '0.12s', type: 'build', message: 'bundling AST tree • 0 runtime overhead' },
    { id: '3', time: '0.28s', type: 'success', message: 'Lighthouse verified: 100/100 performance' },
    { id: '4', time: '0.34s', type: 'success', message: 'Zero-latency edge distribution deployed' },
  ];

  // Handle smooth 3D tilt tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePos({ x, y });
      // Range: -12 to +12 deg
      targetRotY = (x - 0.5) * 24;
      targetRotX = -(y - 0.5) * 24;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const render = () => {
      currentRotX += (targetRotX - currentRotX) * 0.1;
      currentRotY += (targetRotY - currentRotY) * 0.1;
      setRotation({ x: currentRotX, y: currentRotY });
      animId = requestAnimationFrame(render);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Automatic mode cycle every 4.5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveMode((prev) => (prev + 1) % MODES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentMode = MODES[activeMode];

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center select-none py-4"
      style={{ perspective: '1200px' }}
      data-cursor="INSPECT MATRIX"
    >
      {/* Background Kinetic Radar Grid & Ambient Plasma */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Deep Pulsing Glow */}
        <div
          className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full blur-3xl opacity-25 transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${currentMode.color} 0%, rgba(242,41,82,0.15) 50%, transparent 70%)`,
            transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)`,
          }}
        />

        {/* Concentric Rotating Vector Rings */}
        <svg
          className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] opacity-20 animate-spin"
          style={{ animationDuration: '60s' }}
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="195" fill="none" stroke="#F22952" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="12 12" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#F22952" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 6" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
        </svg>

        {/* Counter-rotating technical crosshair */}
        <svg
          className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] opacity-25 animate-spin"
          style={{ animationDuration: '35s', animationDirection: 'reverse' }}
          viewBox="0 0 300 300"
        >
          <circle cx="150" cy="150" r="145" fill="none" stroke="#F22952" strokeWidth="1.2" strokeDasharray="20 40" />
          <rect x="146" y="2" width="8" height="8" fill="#F22952" />
          <rect x="146" y="290" width="8" height="8" fill="#F22952" />
          <rect x="2" y="146" width="8" height="8" fill="#FFFFFF" />
          <rect x="290" y="146" width="8" height="8" fill="#FFFFFF" />
        </svg>
      </div>

      {/* 3D Holographic Perspective Main Card Stack */}
      <div
        className="w-full max-w-[440px] sm:max-w-[480px] relative z-10 transition-transform duration-75 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Specular Sheen Over Container */}
        <div
          className="absolute -inset-1 rounded-3xl opacity-40 blur-xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(242,41,82,0.4) 0%, transparent 60%)`,
          }}
        />

        {/* Central Terminal & Digital Architecture Cockpit */}
        <div className="relative rounded-2xl bg-[#0D0D0D]/90 border border-white/15 backdrop-blur-2xl shadow-2xl p-5 sm:p-6 overflow-hidden">
          {/* Glass Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F22952] animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-mono text-[11px] font-bold tracking-wider text-white uppercase ml-1">
                DEL<span className="text-[#F22952]">ANKI</span>_CORE
              </span>
            </div>

            {/* Live FPS / Edge Status Badge */}
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 font-mono text-[10px] text-[#B7B7B7]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-medium">120 FPS</span>
              <span className="text-white/30">•</span>
              <span className="text-[#F22952]">LIVE MATRIX</span>
            </div>
          </div>

          {/* Interactive Stack Mode Switcher Tabs */}
          <div className="grid grid-cols-3 gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10 mb-4">
            {MODES.map((mode, idx) => {
              const Icon = mode.icon;
              const isSelected = activeMode === idx;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(idx)}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg font-mono text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#F22952] text-white shadow-lg shadow-[#F22952]/30 scale-[1.02]'
                      : 'text-[#B7B7B7] hover:text-white hover:bg-white/5'
                  }`}
                  data-cursor="SWITCH MODE"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="truncate">{mode.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Target Telemetry Panel */}
          <div className="bg-[#121212] border border-white/10 rounded-xl p-4 mb-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#F22952]" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  {currentMode.label}
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                {currentMode.metric}
              </span>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-[#B7B7B7] uppercase">LATENCY</span>
                <div className="font-mono text-xs font-bold text-white">0.08s</div>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-[#B7B7B7] uppercase">HEALTH</span>
                <div className="font-mono text-xs font-bold text-emerald-400">100.0%</div>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-[#B7B7B7] uppercase">SECURITY</span>
                <div className="font-mono text-xs font-bold text-white">ZERO-LEAK</div>
              </div>
            </div>
          </div>

          {/* Simulated Streaming Compiler Console */}
          <div className="bg-black/80 rounded-xl p-3 border border-white/5 font-mono text-[11px] space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-[#B7B7B7] pb-1 border-b border-white/5">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#F22952]" />
                <span>BUILD TELEMETRY STREAM</span>
              </span>
              <span className="text-[#F22952] font-semibold animate-pulse">STREAMING</span>
            </div>

            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                <span className="text-white/30 text-[10px] select-none">{log.time}</span>
                <span
                  className={`flex-1 truncate ${
                    log.type === 'success'
                      ? 'text-emerald-400'
                      : log.type === 'build'
                      ? 'text-white'
                      : 'text-[#B7B7B7]'
                  }`}
                >
                  {log.type === 'success' && '✓ '}
                  {log.message}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-[#F22952] pt-0.5">
              <span className="animate-pulse">❯</span>
              <span className="w-2 h-3.5 bg-[#F22952] animate-pulse inline-block" />
            </div>
          </div>

          {/* Studio Execution Stamp */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#B7B7B7]">
            <span className="flex items-center gap-1 text-white">
              <Sparkles className="w-3 h-3 text-[#F22952]" />
              <span>RAPID SHIP VELOCITY</span>
            </span>
            <span className="text-[#F22952] font-bold">2–4 WK TO PRODUCTION</span>
          </div>
        </div>

        {/* Floating Satellite Badge 01: Top Right */}
        <div
          className="absolute -top-5 -right-3 sm:-right-6 bg-[#161616]/95 border border-white/20 backdrop-blur-xl px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 pointer-events-none transition-transform duration-200"
          style={{
            transform: `translateZ(40px) translate(${(mousePos.x - 0.5) * 15}px, ${(mousePos.y - 0.5) * 15}px)`,
          }}
        >
          <div className="w-6 h-6 rounded-lg bg-[#F22952]/20 border border-[#F22952]/40 flex items-center justify-center text-[#F22952]">
            <Activity className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-mono text-[9px] text-[#B7B7B7] uppercase tracking-wider">LIGHTHOUSE</div>
            <div className="font-mono text-xs font-bold text-white">99/100 P99</div>
          </div>
        </div>

        {/* Floating Satellite Badge 02: Bottom Left */}
        <div
          className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#161616]/95 border border-white/20 backdrop-blur-xl px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 pointer-events-none transition-transform duration-200"
          style={{
            transform: `translateZ(30px) translate(${-(mousePos.x - 0.5) * 15}px, ${-(mousePos.y - 0.5) * 15}px)`,
          }}
        >
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-mono text-[9px] text-[#B7B7B7] uppercase tracking-wider">PRODUCTION</div>
            <div className="font-mono text-xs font-bold text-white">100% TYPE SAFE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
