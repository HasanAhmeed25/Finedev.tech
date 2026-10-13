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
        className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]"
        >
          <defs>
            <linearGradient id="logoViolet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C084FC" />
              <stop offset="100%" stop-color="#7C3AED" />
            </linearGradient>
            <linearGradient id="logoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#22D3EE" />
              <stop offset="100%" stop-color="#0284C7" />
            </linearGradient>
            <linearGradient id="logoTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#A855F7" />
              <stop offset="100%" stop-color="#06B6D4" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Hexagonal Isometric Polygon Nodes */}
          {/* Top Face */}
          <polygon
            points="24,6 38,14 24,22 10,14"
            fill="url(#logoTop)"
            opacity="0.9"
            className="transition-opacity duration-300 hover:opacity-100"
          />
          {/* Left Face */}
          <polygon
            points="10,14 24,22 24,38 10,30"
            fill="url(#logoViolet)"
            opacity="0.8"
          />
          {/* Right Face */}
          <polygon
            points="24,22 38,14 38,30 24,38"
            fill="url(#logoCyan)"
            opacity="0.85"
          />

          {/* High-tech Inner Circuit Lines */}
          <line x1="24" y1="22" x2="24" y2="38" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="24" y1="22" x2="10" y2="14" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="24" y1="22" x2="38" y2="14" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />

          {/* Glowing central junction core */}
          <circle cx="24" cy="22" r="2.5" fill="#ffffff" filter="url(#logoGlow)" />
          
          {/* Floating outer nodes */}
          <circle cx="24" cy="6" r="1.5" fill="#38BDF8" />
          <circle cx="38" cy="14" r="1.5" fill="#C084FC" />
          <circle cx="10" cy="14" r="1.5" fill="#C084FC" />
          <circle cx="24" cy="38" r="1.5" fill="#22D3EE" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center text-lg font-bold tracking-tight text-white font-display">
            <span>Fine</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Dev
            </span>
            <span className="text-cyan-400 font-mono text-sm ml-0.5 opacity-90">.tech</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-1 hidden sm:block">
            Software Studio
          </span>
        </div>
      )}
    </div>
  );
};
