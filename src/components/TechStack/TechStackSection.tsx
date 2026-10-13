import React, { useState } from 'react';
import { TECH_ECOSYSTEM } from '../../data/content';
import { motion } from 'framer-motion';
import { Terminal, Layers, Database, Smartphone, Palette, Cloud, CheckCircle } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...TECH_ECOSYSTEM.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Layers className="w-4 h-4" />;
      case 'Backend': return <Terminal className="w-4 h-4" />;
      case 'Databases': return <Database className="w-4 h-4" />;
      case 'Mobile': return <Smartphone className="w-4 h-4" />;
      case 'Design': return <Palette className="w-4 h-4" />;
      case 'Cloud & Deployment': return <Cloud className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const allTechs = TECH_ECOSYSTEM.flatMap((cat) => cat.technologies);
  const filteredTechs =
    activeCategory === 'All'
      ? allTechs
      : TECH_ECOSYSTEM.find((c) => c.category === activeCategory)?.technologies || [];

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121626] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Technology Ecosystem.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            We architect with battle-tested toolchains. Technologies are deployed based on project-specific
            requirements, scalability targets, and team maintenance objectives.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/[0.08]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/30 to-cyan-500/30 text-white border border-purple-500/50 shadow-sm'
                    : 'bg-[#101426]/60 text-slate-400 hover:text-white hover:bg-[#141930] border border-white/5'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4"
        >
          {filteredTechs.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              key={`${tech.category}-${tech.name}`}
              className="p-4 rounded-xl bg-[#0e1222]/80 border border-white/[0.08] hover:border-purple-500/30 hover:bg-[#12162a] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {tech.category}
                </span>
                <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display block">
                  {tech.name}
                </span>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="truncate">{tech.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capability Disclaimer / Note */}
        <div className="mt-10 p-4 rounded-2xl bg-[#0c1020]/60 border border-white/5 flex items-start gap-3 max-w-2xl text-xs text-slate-400 leading-relaxed">
          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>
            These technologies represent vetted technical competencies. Each solution is engineered using the
            optimal stack specifically suited to your security, budget, and operational constraints.
          </span>
        </div>
      </div>
    </section>
  );
};
