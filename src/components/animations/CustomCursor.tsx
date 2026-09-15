import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const ghostDotRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  useEffect(() => {
    // Detect touch device or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);
    document.body.classList.add('custom-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let ghostX = mouseX;
    let ghostY = mouseY;
    let ghostDotX = mouseX;
    let ghostDotY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check hovered element data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
        const cursorData = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        
        if (cursorData) {
          setCursorText(cursorData);
          setIsHovered(true);
          setIsPointer(false);
        } else if (interactive) {
          setCursorText('');
          setIsHovered(false);
          setIsPointer(true);
        } else {
          setCursorText('');
          setIsHovered(false);
          setIsPointer(false);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const render = () => {
      // Lerp calculations for smooth trailing physics
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      ghostX += (mouseX - ghostX) * 0.075;
      ghostY += (mouseY - ghostY) * 0.075;
      ghostDotX += (mouseX - ghostDotX) * 0.25;
      ghostDotY += (mouseY - ghostDotY) * 0.25;
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;

      if (ghostRef.current) {
        ghostRef.current.style.transform = `translate3d(${ghostX}px, ${ghostY}px, 0) translate(-50%, -50%)`;
      }
      if (ghostDotRef.current) {
        ghostDotRef.current.style.transform = `translate3d(${ghostDotX}px, ${ghostDotY}px, 0) translate(-50%, -50%)`;
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
      style={{ pointerEvents: 'none' }}
    >
      {/* Trailing Ghost Capsule Effect (Delayed smooth lag) */}
      <div
        ref={ghostRef}
        className={`fixed top-0 left-0 pointer-events-none transition-opacity duration-500 rounded-full select-none ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '102px' : isPointer ? '54px' : '42px',
          height: isHovered ? '102px' : isPointer ? '54px' : '42px',
          border: isHovered
            ? '1px dashed rgba(242, 41, 82, 0.6)'
            : isPointer
            ? '1px dashed rgba(255, 255, 255, 0.35)'
            : '1px solid rgba(242, 41, 82, 0.25)',
          backgroundColor: isHovered
            ? 'rgba(242, 41, 82, 0.08)'
            : 'rgba(242, 41, 82, 0.03)',
          boxShadow: isHovered ? '0 0 30px rgba(242, 41, 82, 0.25)' : '0 0 14px rgba(242, 41, 82, 0.1)',
          pointerEvents: 'none',
          transition: 'width 0.35s ease-out, height 0.35s ease-out, border-color 0.35s ease-out, background-color 0.35s ease-out, opacity 0.4s ease-out',
        }}
      />

      {/* Trailing Ghost Dot */}
      <div
        ref={ghostDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none transition-opacity duration-300 ${
          isVisible && !isHovered ? 'opacity-35' : 'opacity-0'
        }`}
        style={{
          backgroundColor: '#F22952',
          boxShadow: '0 0 6px #F22952',
          pointerEvents: 'none',
        }}
      />

      {/* Main Outer Cursor Ring / Capsule */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 transition-opacity duration-300 pointer-events-none flex items-center justify-center font-mono text-[10px] font-bold tracking-wider uppercase text-white select-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '90px' : isPointer ? '48px' : '36px',
          height: isHovered ? '90px' : isPointer ? '48px' : '36px',
          backgroundColor: isHovered ? 'rgba(242, 41, 82, 0.85)' : isPointer ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          border: isHovered ? '1px solid #F22952' : isPointer ? '1.5px solid rgba(242, 41, 82, 0.8)' : '1px solid rgba(255, 255, 255, 0.35)',
          borderRadius: '50%',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          boxShadow: isHovered ? '0 0 24px rgba(242, 41, 82, 0.4)' : 'none',
          pointerEvents: 'none',
          transition: 'width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out, border-color 0.25s ease-out',
        }}
      >
        {cursorText && (
          <span className="animate-pulse select-none px-1 text-center leading-none pointer-events-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-opacity duration-200 ${
          isVisible && !isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundColor: '#F22952',
          boxShadow: '0 0 8px #F22952',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
