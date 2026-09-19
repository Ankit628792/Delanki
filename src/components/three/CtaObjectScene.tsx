import React, { useState, useEffect, useRef } from 'react';
import { Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export const CtaObjectScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ignited, setIgnited] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetY = x * 28;
      targetX = -y * 28;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      setRotation({ x: currentX, y: currentY });
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

  const handleIgnite = () => {
    setIgnited(true);
    setTimeout(() => setIgnited(false), 2400);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center select-none cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleIgnite}
      data-cursor="IGNITE SHIP"
    >
      {/* Background Volumetric Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full blur-3xl transition-all duration-700 ${
            ignited
              ? 'bg-[#F22952]/40 scale-125'
              : isHovered
              ? 'bg-[#F22952]/25 scale-110'
              : 'bg-[#F22952]/15 scale-100'
          }`}
        />
      </div>

      {/* 3D Perspective Gyroscopic Reactor Core */}
      <div
        className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] relative flex items-center justify-center transition-transform duration-75 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* SVG Outer Gyroscopic Ring 1 (Slow Clockwise) */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin pointer-events-none"
          style={{ animationDuration: ignited ? '8s' : '45s' }}
          viewBox="0 0 300 300"
        >
          <circle cx="150" cy="150" r="142" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="150" cy="150" r="136" fill="none" stroke="#F22952" strokeWidth="0.8" strokeDasharray="16 32" />
          {/* Tick marks */}
          <line x1="150" y1="4" x2="150" y2="12" stroke="#F22952" strokeWidth="2" />
          <line x1="150" y1="288" x2="150" y2="296" stroke="#F22952" strokeWidth="2" />
          <line x1="4" y1="150" x2="12" y2="150" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="288" y1="150" x2="296" y2="150" stroke="#FFFFFF" strokeWidth="2" />
        </svg>

        {/* SVG Intermediate Gyroscopic Ring 2 (Counter-Clockwise) */}
        <svg
          className="absolute inset-4 sm:inset-6 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] h-[calc(100%-32px)] sm:h-[calc(100%-48px)] animate-spin pointer-events-none"
          style={{ animationDuration: ignited ? '5s' : '30s', animationDirection: 'reverse' }}
          viewBox="0 0 260 260"
        >
          <circle cx="130" cy="130" r="122" fill="none" stroke="#F22952" strokeWidth="1.2" strokeDasharray="60 20" />
          <circle cx="130" cy="130" r="114" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>

        {/* SVG Inner Hexagonal Shield Ring 3 */}
        <svg
          className="absolute inset-10 sm:inset-14 w-[calc(100%-80px)] sm:w-[calc(100%-112px)] h-[calc(100%-80px)] sm:h-[calc(100%-112px)] animate-spin pointer-events-none"
          style={{ animationDuration: ignited ? '3s' : '20s' }}
          viewBox="0 0 200 200"
        >
          <polygon
            points="100,10 180,55 180,145 100,190 20,145 20,55"
            fill="none"
            stroke={ignited ? '#FFFFFF' : '#F22952'}
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="transition-colors duration-300"
          />
        </svg>

        {/* Center Faceted Luminous Energy Core */}
        <div
          className={`relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-[#25000A] border-2 transition-all duration-500 flex flex-col items-center justify-center shadow-2xl ${
            ignited
              ? 'border-[#FFFFFF] shadow-[0_0_50px_rgba(242,41,82,0.9)] scale-110 rotate-45'
              : isHovered
              ? 'border-[#F22952] shadow-[0_0_35px_rgba(242,41,82,0.6)] scale-105 rotate-12'
              : 'border-[#F22952]/60 shadow-[0_0_20px_rgba(242,41,82,0.3)] rotate-0'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Core Pulsing Icon */}
          <div className="relative">
            <Zap
              className={`w-10 h-10 transition-all duration-300 ${
                ignited ? 'text-white scale-125' : 'text-[#F22952]'
              }`}
            />
            {ignited && (
              <Sparkles className="w-6 h-6 text-white absolute -top-2 -right-2 animate-ping" />
            )}
          </div>
          
          <span className="font-mono text-[9px] font-bold tracking-widest text-white uppercase mt-1">
            {ignited ? 'LAUNCH' : 'IGNITE'}
          </span>
        </div>

        {/* Orbiting Satellite 1: Top Tag */}
        <div
          className="absolute -top-2 right-4 sm:right-8 bg-[#141414]/90 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-[9px] text-white flex items-center gap-1.5 shadow-lg pointer-events-none transition-transform duration-200"
          style={{ transform: 'translateZ(30px)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>ZERO COLD START</span>
        </div>

        {/* Orbiting Satellite 2: Bottom Left Tag */}
        <div
          className="absolute -bottom-2 left-4 sm:left-8 bg-[#141414]/90 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-[9px] text-[#B7B7B7] flex items-center gap-1.5 shadow-lg pointer-events-none transition-transform duration-200"
          style={{ transform: 'translateZ(25px)' }}
        >
          <CheckCircle2 className="w-3 h-3 text-[#F22952]" />
          <span className="text-white">SHIPS IN WEEKS</span>
        </div>
      </div>
    </div>
  );
};
