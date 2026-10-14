import React from 'react';
import { Terminal, Sparkles, Cpu } from 'lucide-react';

export const HeroFallback3D: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] lg:h-[540px] flex items-center justify-center select-none">
      {/* Isometric Layer Stack */}
      <div className="relative z-10 w-full max-w-md perspective-1000 transform-style-3d">
        {/* Top Floating Card - Architecture & Strategy */}
        <div className="relative mx-auto w-72 sm:w-80 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card transform -rotate-1 hover:rotate-0 transition-transform duration-300 animate-float-gentle">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-xs font-mono font-medium text-[var(--accent-primary)]">SYSTEM ARCHITECTURE</span>
            </div>
            <Sparkles className="w-4 h-4 text-[var(--text-muted)]" />
          </div>

          <div className="py-3 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--text-secondary)]">Cloud Infrastructure</span>
              <span className="text-[var(--text-primary)] font-mono font-medium">99.98% High Availability</span>
            </div>
            <div className="w-full h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-[var(--accent-primary)] rounded-full" />
            </div>

            <div className="pt-2 flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                TypeScript
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--accent-soft)] border border-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>

        {/* Central Software Engine Panel */}
        <div className="relative -mt-6 mx-auto w-64 h-44 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card p-5 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-primary)]">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Full-Stack Digital Engine</p>
              <p className="text-xs text-[var(--text-muted)] font-mono">Microservices • APIs</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="text-[var(--accent-primary)] font-mono font-bold">API Sync</div>
              <div className="text-[10px] text-[var(--text-muted)]">Real-Time Pipes</div>
            </div>
            <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="text-[var(--text-primary)] font-mono font-bold">Resilient UX</div>
              <div className="text-[10px] text-[var(--text-muted)]">Reactive Layouts</div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Code Panel */}
        <div className="relative -mt-4 mx-auto w-72 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card text-xs font-mono text-[var(--text-secondary)] transform -rotate-1 hover:rotate-0 transition-transform duration-300 text-left">
          <div className="flex items-center gap-2 pb-2 text-[var(--text-muted)] border-b border-[var(--border-color)]">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="text-[11px]">finedev.engine.start()</span>
          </div>
          <p className="pt-2 text-[11px] leading-relaxed text-[var(--text-secondary)]">
            <span className="text-[var(--accent-primary)]">const</span> status = <span className="text-[var(--accent-primary)]">await</span> studio.deploy(&#123;
            <br />
            &nbsp;&nbsp;performance: <span className="text-emerald-600 dark:text-emerald-400">'optimized'</span>,
            <br />
            &nbsp;&nbsp;reliability: <span className="text-[var(--accent-primary)]">true</span>
            <br />
            &#125;);
          </p>
        </div>
      </div>
    </div>
  );
};
