import React from 'react';

interface GeometricLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const GeometricLogo: React.FC<GeometricLogoProps> = ({
  className = '',
  size = 36,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Geometric 3D Hexagonal / Cube Mark */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105 shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(40,95,232,0.18)]"
        >
          <defs>
            <linearGradient id="logoTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F80F0" />
              <stop offset="100%" stopColor="#285FE8" />
            </linearGradient>
            <linearGradient id="logoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E4CB8" />
              <stop offset="100%" stopColor="#173B94" />
            </linearGradient>
            <linearGradient id="logoRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B71E8" />
              <stop offset="100%" stopColor="#2557D6" />
            </linearGradient>
          </defs>

          {/* Isometric Cube Faces */}
          {/* Top Face */}
          <polygon
            points="24,6 39,14.5 24,23 9,14.5"
            fill="url(#logoTop)"
            opacity="0.95"
          />
          {/* Left Face */}
          <polygon
            points="9,14.5 24,23 24,40 9,31.5"
            fill="url(#logoLeft)"
          />
          {/* Right Face */}
          <polygon
            points="24,23 39,14.5 39,31.5 24,40"
            fill="url(#logoRight)"
          />

          {/* Clean Core Lines */}
          <line x1="24" y1="23" x2="24" y2="40" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="24" y1="23" x2="9" y2="14.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="24" y1="23" x2="39" y2="14.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />

          {/* Subtle Central Core Dot */}
          <circle cx="24" cy="23" r="2" fill="#FFFFFF" opacity="0.95" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center text-lg font-bold tracking-tight text-[var(--text-primary)] font-display transition-colors">
            <span>Fine</span>
            <span className="text-[var(--accent-primary)] ml-0.5">Dev</span>
            <span className="text-[var(--text-muted)] font-mono text-xs ml-0.5 opacity-90">.tech</span>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-mono -mt-1 hidden sm:block">
            Software Studio
          </span>
        </div>
      )}
    </div>
  );
};
