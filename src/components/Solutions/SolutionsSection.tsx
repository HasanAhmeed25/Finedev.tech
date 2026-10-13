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
    <section id="solutions" className="relative py-24 sm:py-32 scroll-mt-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121626] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            CORE ARCHITECTURES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            From Concept to Real-World Solutions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            We architect solutions across three specialized disciplines, converting complex operational
            challenges into streamlined, high-availability software products.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Solution 1: Business Digitalization (Span 12 cols or 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#101428]/90 via-[#0e1220]/80 to-[#12182c]/90 border border-purple-500/20 backdrop-blur-xl shadow-2xl relative group hover:border-purple-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {SOLUTIONS_DATA[0].tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  CATEGORY 01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {SOLUTIONS_DATA[0].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                {SOLUTIONS_DATA[0].description}
              </p>

              {/* Visual Architecture Representation */}
              <div className="p-5 rounded-2xl bg-[#090b14]/70 border border-white/5 mb-8">
                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                  <span>UNIFIED DIGITAL WORKSPACE</span>
                  <span className="text-cyan-400 font-semibold">SECURE TLS 1.3</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SOLUTIONS_DATA[0].capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs font-medium text-slate-200"
                    >
                      <Layers className="w-4 h-4 text-purple-400 mx-auto mb-1.5 opacity-80" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                {SOLUTIONS_DATA[0].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="p-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors group/btn pt-4 border-t border-white/5"
            >
              Discuss Business Digitalization
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Solution 2: Custom Software Products (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1220]/90 via-[#0a0f1c]/80 to-[#10172c]/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl relative group hover:border-cyan-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {SOLUTIONS_DATA[1].tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  CATEGORY 02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {SOLUTIONS_DATA[1].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                {SOLUTIONS_DATA[1].description}
              </p>

              {/* Visual Microservices Architecture Box */}
              <div className="p-5 rounded-2xl bg-[#080c18]/80 border border-cyan-500/15 mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                    <Shield className="w-3.5 h-3.5" /> High Scalability Cluster
                  </span>
                  <span className="text-slate-400">Cloud Sync</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-800/30 flex justify-between text-cyan-200">
                    <span>Decoupled API Backend</span>
                    <span className="text-cyan-400">REST & WS</span>
                  </div>
                  <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/30 flex justify-between text-purple-200">
                    <span>Reactive Client Interfaces</span>
                    <span className="text-purple-400">Web / Native</span>
                  </div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                {SOLUTIONS_DATA[1].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white transition-colors group/btn pt-4 border-t border-white/5"
            >
              Discuss Custom Software Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Solution 3: Smart Automation (Span 12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12162a]/80 via-[#0e1222]/80 to-[#101426]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative group hover:border-purple-400/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {SOLUTIONS_DATA[2].tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    CATEGORY 03
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                  {SOLUTIONS_DATA[2].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {SOLUTIONS_DATA[2].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {SOLUTIONS_DATA[2].features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onStartInquiryWithSolution(SOLUTIONS_DATA[2].title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors group/btn"
                >
                  Discuss Automation & Integrations
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Graphic Flow Representation */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090b16]/90 border border-white/5 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Workflow className="w-3.5 h-3.5" /> ORCHESTRATION PIPELINE
                  </span>
                  <span>EVENT DISPATCH</span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400">Trigger: Inbound Event</span>
                    <span className="text-purple-400">Webhook Received</span>
                  </div>
                  <div className="flex justify-center text-slate-400 -my-1 text-xs">
                    ↓
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-200">
                    <span>Data Validation & Normalization</span>
                    <span className="text-cyan-400">Auto-Filtered</span>
                  </div>
                  <div className="flex justify-center text-slate-400 -my-1 text-xs">
                    ↓
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-200">
                    <span>Dispatch to CRM / ERP / Sync Hub</span>
                    <span className="text-emerald-400">Instant Sync</span>
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
