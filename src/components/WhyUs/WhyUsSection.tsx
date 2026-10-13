import React from 'react';
import { WHY_US_PILLARS } from '../../data/content';
import { WhyUs3DElement } from './WhyUs3DElement';
import { motion } from 'framer-motion';
import { Sliders, Sparkles, TrendingUp, MessagesSquare, CheckCircle } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'tailored-solutions': return <Sliders className="w-5 h-5 text-purple-400" />;
      case 'design-first': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'scalable-dev': return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case 'transparent-comm': return <MessagesSquare className="w-5 h-5 text-cyan-400" />;
      case 'quality-delivery': return <CheckCircle className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 scroll-mt-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121626] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            OUR APPROACH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Why FineDev.tech?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            We operate as a committed technical partner rather than a transactional vendor.
            Here is how our engineering philosophy drives tangible project outcomes.
          </p>
        </div>

        {/* 2-Column Layout: Central 3D Visual + 5 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3D Core Gyroscope & Architectural Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1222]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative">
              <WhyUs3DElement />

              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <p className="text-sm text-slate-300 font-medium font-display">
                  Engineered with Architectural Discipline
                </p>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Decoupled layers, observable telemetry, and modern type-safety built into every deliverable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Pillars List */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_US_PILLARS.map((pillar, idx) => {
              const isCyan = pillar.accent === 'cyan';
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl bg-[#0e1222]/70 border transition-all duration-300 ${
                    isCyan
                      ? 'border-white/[0.08] hover:border-cyan-500/30 hover:bg-[#12182c]'
                      : 'border-white/[0.08] hover:border-purple-500/30 hover:bg-[#15172c]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                        isCyan
                          ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                          : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                      }`}
                    >
                      {getPillarIcon(pillar.id)}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white font-display">
                          {pillar.title}
                        </h3>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/5">
                          {pillar.metricLabel}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-400 mb-1.5">
                        {pillar.headline}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">
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
