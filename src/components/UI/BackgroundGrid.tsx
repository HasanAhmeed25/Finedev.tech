import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark base layer */}
      <div className="absolute inset-0 bg-[#07080d]" />

      {/* Ambient glowing radial orbs */}
      <div 
        className="absolute -top-[20%] left-[10%] w-[650px] h-[650px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-gradient-to-br from-purple-600 to-indigo-900"
      />
      <div 
        className="absolute top-[35%] -right-[15%] w-[550px] h-[550px] rounded-full opacity-15 blur-[130px] pointer-events-none bg-gradient-to-bl from-cyan-500 to-blue-900"
      />
      <div 
        className="absolute bottom-[5%] left-[20%] w-[700px] h-[700px] rounded-full opacity-15 blur-[160px] pointer-events-none bg-gradient-to-tr from-purple-900 to-cyan-900"
      />

      {/* Subtle futuristic coordinate grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />

      {/* Ultra-subtle dot grid overlay */}
      <div className="absolute inset-0 cyber-dots opacity-30" />
    </div>
  );
};
