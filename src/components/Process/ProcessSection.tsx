import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/content';
import { motion } from 'framer-motion';
import { CheckCircle2, Compass, PenTool, Code2, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-purple-400" />;
      case 1: return <PenTool className="w-5 h-5 text-cyan-400" />;
      case 2: return <Code2 className="w-5 h-5 text-purple-400" />;
      case 3: return <Rocket className="w-5 h-5 text-cyan-400" />;
      default: return <Compass className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121626] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            A Clear Process. A Better Product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Predictable delivery requires structured methodology. We guide projects through four
            transparent stages, keeping architecture rigorous and milestones accountable.
          </p>
        </div>

        {/* Step Navigation Cards / Connected Indicators */}
        <div className="relative mb-12">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-white/10 z-0">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-500"
              style={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 relative border ${
                    isActive
                      ? 'bg-[#151a30] border-purple-500/50 shadow-[0_0_25px_rgba(139,92,246,0.25)]'
                      : 'bg-[#0e1222]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#12162a]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-bold font-mono ${
                        isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400' : 'text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 font-light">
                    {step.headline}
                  </p>

                  {/* Active Indicator Pin */}
                  {isActive && (
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Container */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#0f1326]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>STAGE {PROCESS_STEPS[activeStep].number} OF 04</span>
                <span>•</span>
                <span>ACTIVE METHODOLOGY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                {PROCESS_STEPS[activeStep].title} — {PROCESS_STEPS[activeStep].headline}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Guaranteed Standards:
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 font-mono text-purple-300">
                  Documented Specs
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 font-mono text-cyan-300">
                  Version Controlled
                </span>
              </div>
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080b16] border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Milestone Deliverables:
              </h4>

              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
