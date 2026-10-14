import React from 'react';
import { WHY_US_PILLARS } from '../../data/content';
import { WhyUs3DElement } from './WhyUs3DElement';
import { motion } from 'framer-motion';
import { Sliders, Sparkles, TrendingUp, MessagesSquare, CheckCircle } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'tailored-solutions': return <Sliders className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'design-first': return <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'scalable-dev': return <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'transparent-comm': return <MessagesSquare className="w-5 h-5 text-[var(--accent-primary)]" />;
      case 'quality-delivery': return <CheckCircle className="w-5 h-5 text-[var(--accent-primary)]" />;
      default: return <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 scroll-mt-24 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            OUR APPROACH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
            Why FineDev.tech?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            We operate as a committed technical partner rather than a transactional vendor.
            Here is how our engineering philosophy drives tangible project outcomes.
          </p>
        </div>

        {/* 2-Column Layout: Central 3D Visual + 5 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          {/* Left Column: 3D Core Gyroscope & Architectural Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-card relative">
              <WhyUs3DElement />

              <div className="mt-4 pt-4 border-t border-[var(--border-color)] text-center">
                <p className="text-sm text-[var(--text-primary)] font-medium font-display">
                  Engineered with Architectural Discipline
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                  Decoupled layers, observable telemetry, and modern type-safety built into every deliverable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Pillars List */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_US_PILLARS.map((pillar, idx) => {
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 shadow-xs hover:shadow-card transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[var(--accent-soft)] shrink-0 mt-0.5">
                      {getPillarIcon(pillar.id)}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                          {pillar.title}
                        </h3>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                          {pillar.metricLabel}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[var(--accent-primary)] mb-1.5 font-medium">
                        {pillar.headline}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
