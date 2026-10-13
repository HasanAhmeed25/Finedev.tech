import { Terminal, Sparkles, Cpu } from 'lucide-react';

export const HeroFallback3D: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] lg:h-[540px] flex items-center justify-center select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-purple-600/20 blur-[90px] animate-pulse-slow" />
        <div className="w-64 h-64 rounded-full bg-cyan-500/15 blur-[80px] -translate-x-12 translate-y-12" />
      </div>

      {/* Isometric 3D Layer Stack */}
      <div className="relative z-10 w-full max-w-md perspective-1000 transform-style-3d">
        {/* Top Floating Glass Card - Analytics & Strategy */}
        <div className="relative mx-auto w-72 sm:w-80 p-5 rounded-2xl bg-[#12162a]/80 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-950/50 transform -rotate-2 hover:rotate-0 transition-transform duration-500 animate-float-slow">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-medium text-cyan-300">SYSTEM ARCHITECTURE</span>
            </div>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          <div className="py-3 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Cloud Compute Pipeline</span>
              <span className="text-purple-300 font-mono">99.98% High Availability</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-950/60 border border-purple-800/40 text-purple-300">
                TypeScript
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 border border-slate-700 text-slate-300">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>

        {/* Central Geometric 3D Glass Cube Mockup */}
        <div className="relative -mt-6 mx-auto w-64 h-44 rounded-2xl bg-gradient-to-br from-purple-900/40 via-[#0d1020]/90 to-cyan-900/30 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_15px_40px_rgba(6,182,212,0.15)] p-5 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Full-Stack Digital Engine</p>
              <p className="text-xs text-slate-400 font-mono">Connected Nodes • Microservices</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-cyan-400 font-mono font-bold">API Sync</div>
              <div className="text-[10px] text-slate-400">Real-Time Webhooks</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-purple-400 font-mono font-bold">Resilient UX</div>
              <div className="text-[10px] text-slate-400">Reactive Interfaces</div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Code Panel */}
        <div className="relative -mt-4 mx-auto w-72 p-4 rounded-xl bg-[#0a0d18]/90 backdrop-blur-md border border-white/10 shadow-lg text-xs font-mono text-slate-300 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-2 pb-2 text-slate-400 border-b border-white/5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px]">finedev.engine.start()</span>
          </div>
          <p className="text-slate-400 pt-2 text-[11px] leading-relaxed">
            <span className="text-purple-400">const</span> status = <span className="text-cyan-400">await</span> studio.<span className="text-amber-300">deploy</span>(&#123;
            <br />
            &nbsp;&nbsp;performance: <span className="text-emerald-400">'optimized'</span>,
            <br />
            &nbsp;&nbsp;reliability: <span className="text-cyan-400">true</span>
            <br />
            &#125;);
          </p>
        </div>
      </div>
    </div>
  );
};
