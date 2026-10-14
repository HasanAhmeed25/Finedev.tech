import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/content';
import { motion } from 'framer-motion';
import { CheckCircle2, Compass, PenTool, Code2, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 1: return <PenTool className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 2: return <Code2 className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 3: return <Rocket className="w-5 h-5 text-[var(--accent-primary)]" />;
      default: return <Compass className="w-5 h-5 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 scroll-mt-12 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
            A Clear Process. A Better Product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            Predictable delivery requires structured methodology. We guide projects through four
            transparent stages, keeping architecture rigorous and milestones accountable.
          </p>
        </div>

        {/* Step Navigation Cards / Connected Indicators */}
        <div className="relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[var(--border-color)] z-0">
            <div
              className="h-full bg-[var(--accent-primary)] transition-all duration-300"
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
                  className={`text-left p-6 rounded-2xl transition-all duration-200 relative border ${
                    isActive
                      ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] shadow-card'
                      : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-bold font-mono ${
                        isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[var(--accent-soft)]">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-display mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 font-light">
                    {step.headline}
                  </p>

                  {/* Active Indicator Pin */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-[var(--accent-primary)]" />
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
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card text-left"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] mb-2 font-semibold">
                <span>STAGE {PROCESS_STEPS[activeStep].number} OF 04</span>
                <span>•</span>
                <span>ACTIVE METHODOLOGY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mb-2">
                {PROCESS_STEPS[activeStep].title} — {PROCESS_STEPS[activeStep].headline}
              </h3>

              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-light mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Guaranteed Standards:
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-[var(--text-primary)]">
                  Documented Specs
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-[var(--accent-soft)] border border-[var(--accent-primary)]/20 font-mono text-[var(--accent-primary)]">
                  Version Controlled
                </span>
              </div>
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-4">
                Milestone Deliverables:
              </h4>

              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-primary)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
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
