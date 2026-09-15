import React, { useState } from 'react';
import { Sparkles, Layers, Cpu, CheckCircle2, Zap } from 'lucide-react';

interface TechOrbitSceneProps {
  activeCategory?: string;
  onHoverTech?: (techName: string | null) => void;
}

interface TechNode {
  id: string;
  name: string;
  category: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  ring: 1 | 2 | 3;
  color: string;
  tag: string;
  metric: string;
  description: string;
}

const TECH_NODES: TechNode[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'web',
    x: 28,
    y: 22,
    ring: 2,
    color: '#FFFFFF',
    tag: 'SSR & Edge',
    metric: '< 20ms TTFB',
    description: 'Server Components, dynamic edge routing, and streaming architecture.',
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'web',
    x: 72,
    y: 24,
    ring: 2,
    color: '#61dafb',
    tag: 'Reactive UI',
    metric: '120fps UI Thread',
    description: 'Concurrent rendering and component architecture for web applications.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'web',
    x: 18,
    y: 50,
    ring: 3,
    color: '#3178c6',
    tag: 'Type Safety',
    metric: '100% Strict Type',
    description: 'End-to-end typed contracts across client and server boundaries.',
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'mobile',
    x: 82,
    y: 50,
    ring: 3,
    color: '#7f52ff',
    tag: 'Android Native',
    metric: 'Zero JNI Lag',
    description: 'Multiplatform native core for resilient mobile engineering.',
  },
  {
    id: 'compose',
    name: 'Jetpack Compose',
    category: 'mobile',
    x: 70,
    y: 78,
    ring: 2,
    color: '#4285f4',
    tag: 'Declarative UI',
    metric: 'Hardware Accel',
    description: 'Modern native UI toolkit for silky-smooth Android interfaces.',
  },
  {
    id: 'chrome',
    name: 'Chrome MV3',
    category: 'extensions',
    x: 30,
    y: 78,
    ring: 2,
    color: '#F22952',
    tag: 'Manifest V3',
    metric: 'Service Worker',
    description: 'High-performance background workers, content scripts, and web runtime bridges.',
  },
  {
    id: 'vscode',
    name: 'VS Code APIs',
    category: 'extensions',
    x: 48,
    y: 14,
    ring: 3,
    color: '#007acc',
    tag: 'IDE Engine',
    metric: 'Language Server',
    description: 'Custom language extensions, tree views, and developer tooling integrations.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    x: 50,
    y: 86,
    ring: 3,
    color: '#68a063',
    tag: 'Event Loop',
    metric: 'Asynchronous I/O',
    description: 'High-throughput microservices and event-driven API backends.',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'backend',
    x: 85,
    y: 34,
    ring: 3,
    color: '#336791',
    tag: 'Relational DB',
    metric: 'ACID Compliant',
    description: 'Scalable relational data modeling, indexing, and transactional integrity.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'web',
    x: 15,
    y: 34,
    ring: 3,
    color: '#38bdf8',
    tag: 'Design System',
    metric: '0 Unused CSS',
    description: 'Ultra-lean utility styling compiled ahead-of-time with sub-millisecond loads.',
  },
];

export const TechOrbitScene: React.FC<TechOrbitSceneProps> = ({
  activeCategory = 'ALL',
  onHoverTech,
}) => {
  const [hoveredNode, setHoveredNode] = useState<TechNode | null>(null);

  const isCategoryMatch = (nodeCategory: string) => {
    if (!activeCategory || activeCategory === 'ALL') return true;
    const cat = activeCategory.toLowerCase();
    if (cat.includes('web') && nodeCategory === 'web') return true;
    if (cat.includes('mobile') && nodeCategory === 'mobile') return true;
    if (cat.includes('ext') && nodeCategory === 'extensions') return true;
    if (cat.includes('back') && nodeCategory === 'backend') return true;
    return false;
  };

  const handleMouseEnter = (node: TechNode) => {
    setHoveredNode(node);
    onHoverTech?.(node.name);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
    onHoverTech?.(null);
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center select-none overflow-hidden p-2 sm:p-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#F22952]/10 blur-3xl pointer-events-none" />
      </div>

      {/* Interactive Radar Vector Canvas */}
      <div className="w-full max-w-[560px] aspect-square relative flex items-center justify-center">
        {/* SVG Radar Rings and Laser Network */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          {/* Concentric Radar Guides */}
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(242,41,82,0.25)" strokeWidth="0.8" strokeDasharray="2 3" />
          
          {/* Radar Crosshairs */}
          <line x1="50" y1="6" x2="50" y2="94" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" strokeDasharray="1 2" />
          <line x1="6" y1="50" x2="94" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" strokeDasharray="1 2" />

          {/* Dynamic Laser Connections from Nodes to Center Core */}
          {TECH_NODES.map((node) => {
            const isMatch = isCategoryMatch(node.category);
            const isHovered = hoveredNode?.id === node.id;
            return (
              <line
                key={`line-${node.id}`}
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke={isHovered ? '#F22952' : isMatch ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.04)'}
                strokeWidth={isHovered ? '0.8' : isMatch ? '0.35' : '0.2'}
                strokeDasharray={isHovered ? 'none' : '1 2'}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Rotating Radar Sweep Beam */}
          <g className="origin-center animate-spin" style={{ animationDuration: '14s' }}>
            <line x1="50" y1="50" x2="50" y2="6" stroke="url(#radarGradient)" strokeWidth="1.2" />
            <defs>
              <linearGradient id="radarGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#F22952" stopOpacity="0" />
                <stop offset="100%" stopColor="#F22952" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </g>
        </svg>

        {/* Center Delanki Production Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
          <div className="relative group cursor-pointer" data-cursor="CORE">
            <div className="absolute -inset-3 rounded-full bg-[#F22952]/20 blur-md animate-pulse" />
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0D0D0D] border-2 border-[#F22952] flex items-center justify-center shadow-[0_0_20px_rgba(242,41,82,0.4)]">
              <Zap className="w-6 h-6 text-[#F22952] animate-pulse" />
            </div>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-white font-bold uppercase mt-2 bg-[#090909]/90 px-2 py-0.5 rounded border border-white/10">
            DEL<span className="text-[#F22952]">ANKI</span> CORE
          </span>
        </div>

        {/* Interactive Technology Orbit Nodes */}
        {TECH_NODES.map((node) => {
          const isMatch = isCategoryMatch(node.category);
          const isHovered = hoveredNode?.id === node.id;

          return (
            <div
              key={node.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 cursor-pointer ${
                isMatch ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              onMouseEnter={() => handleMouseEnter(node)}
              onMouseLeave={handleMouseLeave}
              data-cursor={node.name}
            >
              {/* Outer Ring on Hover or Active Match */}
              <div
                className={`relative px-2.5 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 ${
                  isHovered
                    ? 'bg-[#F22952] border-white text-white shadow-[0_0_20px_rgba(242,41,82,0.6)] scale-110 -translate-y-1'
                    : isMatch
                    ? 'bg-[#121212]/95 border-white/25 text-white hover:border-[#F22952] hover:bg-[#1C1C1C]'
                    : 'bg-black/60 border-white/10 text-[#777777]'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300"
                  style={{
                    backgroundColor: isHovered ? '#FFFFFF' : node.color,
                    boxShadow: isHovered ? '0 0 8px #FFFFFF' : `0 0 6px ${node.color}`,
                  }}
                />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap">
                  {node.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Real-time Hovered Technology Inspection Telemetry Card */}
        {hoveredNode && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 bg-[#161616]/95 border border-[#F22952]/60 rounded-2xl p-3 sm:p-4 backdrop-blur-xl shadow-2xl max-w-[280px] sm:max-w-xs w-full animate-fade-in pointer-events-none">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: hoveredNode.color }}
                />
                <span className="font-mono text-xs font-bold text-white uppercase">
                  {hoveredNode.name}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#F22952] font-semibold bg-[#F22952]/10 border border-[#F22952]/30 px-2 py-0.5 rounded-full">
                {hoveredNode.tag}
              </span>
            </div>

            <p className="text-xs text-[#B7B7B7] leading-relaxed mb-2 font-sans">
              {hoveredNode.description}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[10px]">
              <span className="text-[#888888] uppercase">BENCHMARK</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {hoveredNode.metric}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
