import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base theme background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)] transition-colors duration-250" />

      {/* Very soft, subtle blue ambient light in the top center */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--accent-soft) 0%, rgba(36, 89, 232, 0) 70%)',
        }}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 subtle-grid opacity-75 [mask-image:radial-gradient(ellipse_75%_50%_at_50%_35%,#000_60%,transparent_100%)]" />
    </div>
  );
};
