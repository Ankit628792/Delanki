import React, { useEffect, useState } from 'react';
import { DelankiLogo } from '../common/DelankiLogo';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 900; // load sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 450);
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#090909] text-white transition-all duration-500 ${
        isFading ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-8 relative px-6 text-center">
        {/* Animated Delanki Logo Centerpiece */}
        <div className="relative">
          <div className="absolute -inset-6 bg-[#F22952]/20 rounded-full blur-2xl animate-pulse" />
          <DelankiLogo variant="dark" size={88} animated />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F22952] animate-ping" />
            <span className="font-mono text-xs tracking-widest text-[#B7B7B7] uppercase">
              DEL<span className="text-[#F22952]">ANKI</span> STUDIO
            </span>
          </div>

          <div className="font-display text-xl font-bold tracking-tight text-white">
            WE TURN IDEAS INTO DIGITAL PRODUCTS<span className="text-[#F22952]">.</span>
          </div>
        </div>

        {/* Progress Bar & Counter */}
        <div className="w-64 max-w-full flex flex-col gap-2">
          <div className="h-[2px] w-full bg-white/10 overflow-hidden relative rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#F22952] to-[#FF6B8B] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center font-mono text-[10px] text-[#B7B7B7]">
            <span>INITIALIZING SYSTEM</span>
            <span className="text-[#F22952] font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
