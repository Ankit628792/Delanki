import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DelankiLogo } from '../common/DelankiLogo';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'ready' | 'hidden'>('loading');

  useEffect(() => {
    // Check session storage to keep subsequent intra-session route changes ultra-fast
    const hasLoaded = sessionStorage.getItem('delanki_init_loaded');
    const totalDuration = hasLoaded ? 400 : 750;
    const startTime = performance.now();

    const frame = () => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(frame);
      } else {
        setPhase('ready');
        sessionStorage.setItem('delanki_init_loaded', 'true');
        setTimeout(() => {
          setPhase('hidden');
          onComplete?.();
        }, 320);
      }
    };

    const rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'hidden' && (
        <motion.div
          key="delanki-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#090909] text-white select-none pointer-events-none"
        >
          {/* Subtle Ambient Background Grid & Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(242,41,82,0.12),transparent_60%)] pointer-events-none" />
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Center Card */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 max-w-sm w-full">
            {/* Animated Logo Container with Pulse Ring */}
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ripple ring */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: 'easeInOut',
                }}
                className="absolute w-28 h-28 rounded-full border border-[#F22952]/30 pointer-events-none"
              />

              {/* Glowing back-layer blur */}
              <div className="absolute -inset-4 bg-[#F22952]/25 rounded-full blur-2xl pointer-events-none animate-pulse" />

              {/* Brand Logo with dynamic scale */}
              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 p-3 rounded-2xl bg-[#111111]/80 border border-white/10 shadow-2xl backdrop-blur-md"
              >
                <DelankiLogo variant="dark" size={64} animated />
              </motion.div>
            </div>

            {/* Studio Badge & Status */}
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#B7B7B7] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F22952] animate-ping" />
                <span>DEL<span className="text-[#F22952]">ANKI</span> STUDIO</span>
              </div>
              <p className="text-xs font-mono text-[#B7B7B7]/70 tracking-wider">
                ENGINEERING AMBITIOUS PRODUCTS
              </p>
            </div>

            {/* Subtle Progress Bar & Shimmer Skeleton */}
            <div className="w-full max-w-[220px] flex flex-col gap-2">
              <div className="h-1 w-full bg-white/10 overflow-hidden relative rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#F22952] via-[#FF6B8B] to-[#F22952] relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  {/* Subtle light shimmer sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.2s_infinite]" />
                </motion.div>
              </div>

              <div className="flex justify-between items-center font-mono text-[10px] text-[#888888] tracking-widest uppercase">
                <span>SYSTEM</span>
                <span className="text-[#F22952] font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

