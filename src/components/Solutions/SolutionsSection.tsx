import React from 'react';
import { SOLUTIONS_DATA } from '../../data/content';
import { motion } from 'framer-motion';
import { Check, Shield, Layers, Zap, Workflow, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onStartInquiryWithSolution: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onStartInquiryWithSolution,
}) => {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 scroll-mt-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            CORE ARCHITECTURES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
            From Concept to Real-World Solutions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            We architect solutions across three specialized disciplines, converting complex operational
            challenges into streamlined, high-availability software products.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Solution 1: Business Digitalization (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card relative group hover:border-[var(--accent-primary)]/40 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/15">
                  {SOLUTIONS_DATA[0].tag}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  CATEGORY 01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mb-3">
                {SOLUTIONS_DATA[0].title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-light mb-8">
                {SOLUTIONS_DATA[0].description}
              </p>

              {/* Visual Architecture Representation */}
              <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-8">
                <div className="text-xs font-mono text-[var(--text-muted)] mb-3 flex items-center justify-between">
                  <span>UNIFIED DIGITAL WORKSPACE</span>
                  <span className="text-[var(--accent-primary)] font-semibold">SECURE TLS 1.3</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SOLUTIONS_DATA[0].capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-center text-xs font-medium text-[var(--text-primary)] shadow-xs"
                    >
                      <Layers className="w-4 h-4 text-[var(--accent-primary)] mx-auto mb-1.5 opacity-90" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                {SOLUTIONS_DATA[0].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="p-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-primary)] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onStartInquiryWithSolution(SOLUTIONS_DATA[0].title)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors group/btn pt-4 border-t border-[var(--border-color)]"
            >
              Discuss Business Digitalization
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Solution 2: Custom Software Products (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card relative group hover:border-[var(--accent-primary)]/40 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/15">
                  {SOLUTIONS_DATA[1].tag}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  CATEGORY 02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mb-3">
                {SOLUTIONS_DATA[1].title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-light mb-8">
                {SOLUTIONS_DATA[1].description}
              </p>

              {/* Visual Architecture Box */}
              <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1.5 text-[var(--accent-primary)] font-semibold">
                    <Shield className="w-3.5 h-3.5" /> High Scalability Cluster
                  </span>
                  <span>Cloud Sync</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex justify-between text-[var(--text-primary)]">
                    <span>Decoupled API Backend</span>
                    <span className="text-[var(--accent-primary)]">REST & WS</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex justify-between text-[var(--text-primary)]">
                    <span>Reactive Client Interfaces</span>
                    <span className="text-[var(--accent-primary)]">Web / Native</span>
                  </div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                {SOLUTIONS_DATA[1].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="p-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-primary)] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onStartInquiryWithSolution(SOLUTIONS_DATA[1].title)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors group/btn pt-4 border-t border-[var(--border-color)]"
            >
              Discuss Custom Software Products
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Solution 3: Smart Automation (Span 12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-12 p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card relative group hover:border-[var(--accent-primary)]/40 transition-all duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/15">
                    {SOLUTIONS_DATA[2].tag}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    CATEGORY 03
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mb-3">
                  {SOLUTIONS_DATA[2].title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-light mb-6">
                  {SOLUTIONS_DATA[2].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {SOLUTIONS_DATA[2].features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <Zap className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onStartInquiryWithSolution(SOLUTIONS_DATA[2].title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors group/btn"
                >
                  Discuss Automation & Integrations
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Graphic Flow Representation */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono text-xs text-[var(--text-secondary)]">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-[11px] text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5 text-[var(--accent-primary)]">
                    <Workflow className="w-3.5 h-3.5" /> ORCHESTRATION PIPELINE
                  </span>
                  <span>EVENT DISPATCH</span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-secondary)]">Trigger: Inbound Event</span>
                    <span className="text-[var(--accent-primary)] font-semibold">Webhook Received</span>
                  </div>
                  <div className="flex justify-center text-[var(--text-muted)] -my-1 text-xs">
                    ↓
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-primary)]/20 text-[var(--text-primary)]">
                    <span>Validation & Normalization</span>
                    <span className="text-[var(--accent-primary)] font-semibold">Auto-Filtered</span>
                  </div>
                  <div className="flex justify-center text-[var(--text-muted)] -my-1 text-xs">
                    ↓
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]">
                    <span>Dispatch to Operations Hub</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Instant Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
