import React from 'react';

interface DelankiLogoProps {
  variant?: 'light' | 'dark' | 'color'; // 'dark' = for dark backgrounds (white 'a' leg), 'light' = for light backgrounds (black 'a' leg)
  size?: number | string;
  className?: string;
  showText?: boolean;
  textColor?: string;
  animated?: boolean;
}

export const DelankiLogo: React.FC<DelankiLogoProps> = ({
  variant = 'dark',
  size = 40,
  className = '',
  showText = false,
  textColor,
  animated = false,
}) => {
  const pinkColor = '#F22952';
  const legColor = variant === 'dark' ? '#FFFFFF' : '#090909';
  const textFill = textColor || (variant === 'dark' ? '#F7F5F0' : '#090909');

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 transition-transform duration-500 ${animated ? 'hover:rotate-6 hover:scale-105' : ''}`}
        aria-label="Delanki Logo"
      >
        {/* Delanki 'd' Hand Glyph (Pink #F22952) */}
        <g id="delanki-hand-d">
          {/* Main circle/loop of 'd' */}
          <path
            d="M 360 400 
               C 270 400 200 470 200 560 
               C 200 650 270 720 360 720 
               C 440 720 500 660 510 580 
               L 510 200 
               C 510 165 475 135 440 135 
               C 405 135 370 165 370 200 
               L 370 440 
               C 340 420 300 420 280 440 
               C 250 470 250 530 280 560 
               C 310 590 370 590 400 560 
               L 400 700 
               Z"
            fill="none"
          />
          
          {/* Precise geometric recreation of the Delanki hand 'da' glyph */}
          {/* Finger 1 (left/main stem of d) */}
          <rect x="430" y="115" width="75" height="520" rx="37.5" fill={pinkColor} />
          
          {/* Finger 2 (middle) */}
          <rect x="506" y="145" width="75" height="460" rx="37.5" fill={pinkColor} />
          
          {/* Finger 3 (right) */}
          <rect x="582" y="175" width="75" height="380" rx="37.5" fill={pinkColor} />

          {/* d-loop bottom circle */}
          <path
            d="M 467.5 400
               C 330 400 230 480 230 600
               C 230 720 330 800 467.5 800
               C 500 800 530 780 540 750
               C 550 710 510 680 480 680
               C 380 680 320 630 320 570
               C 320 510 380 470 467.5 470
               Z"
            fill={pinkColor}
          />
          
          {/* The connecting 'd' counter-loop contour (O-shape) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 440 400
               C 300 400 190 500 190 620
               C 190 730 290 820 420 820
               C 475 820 505 770 505 710
               L 505 400
               Z
               M 430 500
               L 430 700
               C 350 700 290 650 290 590
               C 290 530 350 490 430 500
               Z"
            fill={pinkColor}
          />
        </g>

        {/* Delanki 'a' Leg Stroke (White on Dark / Black on Light) */}
        <g id="delanki-leg-a">
          {/* Diagonal rising leg from bottom-left to center-right */}
          <path
            d="M 370 820
               L 720 460
               C 745 435 780 435 800 460
               C 820 485 820 520 800 545
               L 450 900
               C 425 925 390 925 370 900
               C 350 875 350 840 370 820
               Z"
            fill={legColor}
          />
          {/* Vertical right pillar */}
          <rect x="725" y="470" width="75" height="360" rx="37.5" fill={legColor} />
        </g>
      </svg>

      {showText && (
        <span 
          className="font-display font-black tracking-[-0.04em] text-xl md:text-2xl uppercase transition-colors"
          style={{ color: textFill }}
        >
          Del<span style={{ color: pinkColor }}>anki</span><span style={{ color: pinkColor }}>.</span>
        </span>
      )}
    </div>
  );
};
