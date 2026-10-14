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
    <section id="tech-stack" className="relative py-24 sm:py-32 scroll-mt-12 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
            Technology Ecosystem.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            We architect with battle-tested toolchains. Technologies are deployed based on project-specific
            requirements, scalability targets, and team maintenance objectives.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[var(--border-color)]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)]'
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 text-left"
        >
          {filteredTechs.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              key={`${tech.category}-${tech.name}`}
              className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group shadow-card"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  {tech.category}
                </span>
                <span className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors font-display block">
                  {tech.name}
                </span>
              </div>

              <div className="mt-3 pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span className="truncate">{tech.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]/40 group-hover:bg-[var(--accent-primary)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capability Note */}
        <div className="mt-10 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-start gap-3 max-w-2xl text-xs text-[var(--text-secondary)] leading-relaxed text-left">
          <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
          <span>
            These technologies represent vetted technical competencies. Each solution is engineered using the
            optimal stack specifically suited to your security, budget, and operational constraints.
          </span>
        </div>
      </div>
    </section>
  );
};
