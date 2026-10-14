import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/content';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, Terminal, Activity } from 'lucide-react';
import { GithubIcon } from '../UI/SocialIcons';

interface ProjectShowcaseSectionProps {
  onStartInquiryWithProject?: (projectTitle: string) => void;
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  onStartInquiryWithProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web Platforms', 'Automation', 'Systems & Desktop'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Web Platforms') return project.category.includes('Web');
    if (activeCategory === 'Automation') return project.category.includes('Automation');
    if (activeCategory === 'Systems & Desktop') return project.category.includes('Desktop') || project.category.includes('Design');
    return true;
  });

  return (
    <section id="work" className="relative py-24 sm:py-32 scroll-mt-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
              PROJECT SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
              Engineered with purpose. <br />
              <span className="text-[var(--accent-primary)]">Built to perform.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
              Explore a curated selection of our digital platforms, automation systems, and architectural implementations engineered with rigorous craftsmanship.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-xs'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-color)] hover:bg-[var(--bg-secondary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Editorial Projects Grid */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            if (project.layoutVariant === 'featured-large') {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 p-8 sm:p-12 shadow-card transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Meta & Summary */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
                        {project.summary}
                      </p>

                      <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                        {project.description}
                      </p>

                      {/* Architecture Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="text-center sm:text-left">
                              <div className="text-[10px] sm:text-xs font-mono uppercase text-[var(--text-muted)]">
                                {metric.label}
                              </div>
                              <div className="text-sm sm:text-base font-bold font-mono text-[var(--accent-primary)] mt-0.5">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Tags & Actions */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] transition-all"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>Source Code</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-all shadow-xs"
                            >
                              <span>Explore Live</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Interactive Architecture Mockup / Telemetry Panel */}
                    <div className="lg:col-span-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 font-mono text-xs shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-[11px] text-[var(--text-muted)]">
                        <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-semibold">
                          <Terminal className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                          <span>ARCHITECTURE TELEMETRY</span>
                        </span>
                        <span className="text-[10px] text-[var(--accent-primary)]">SYSTEM READY</span>
                      </div>

                      <div className="py-4 space-y-3.5">
                        <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                          <div className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Theme Token Synchronizer</div>
                          <div className="text-xs text-[var(--text-primary)] font-mono flex items-center justify-between">
                            <span>Ivory #FBFBF9 / Charcoal #0D1117</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Zero-Flash</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                          <div className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Spatial 3D Canvas Engine</div>
                          <div className="text-xs text-[var(--text-primary)] font-mono flex items-center justify-between">
                            <span>WebGL Studio Lighting & Fallback</span>
                            <span className="text-[var(--accent-primary)] font-semibold">60 FPS</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                          <div className="text-[10px] text-[var(--text-muted)] uppercase mb-1">Inquiry Pipeline Backend</div>
                          <div className="text-xs text-[var(--text-primary)] font-mono flex items-center justify-between">
                            <span>Express REST & Lead File Persistence</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                        <span>Strict TypeScript 5.7</span>
                        <span className="text-[var(--text-primary)]">React 19 & Tailwind</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (project.layoutVariant === 'split-detail') {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 p-8 sm:p-10 shadow-card transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        {project.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onStartInquiryWithProject && onStartInquiryWithProject(project.title)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors focus:outline-none"
                        >
                          <span>Discuss Architecture Pipeline</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Workflow Pipeline Visual */}
                    <div className="lg:col-span-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)] text-[11px] text-[var(--text-muted)]">
                        <span className="flex items-center gap-1.5 text-[var(--accent-primary)] font-semibold">
                          <Activity className="w-3.5 h-3.5" />
                          <span>PIPELINE ORCHESTRATION</span>
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">99.99% SLA</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                        <div className="text-[10px] text-[var(--text-muted)]">01. Webhook Ingestion</div>
                        <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">Automated Payload Filter</div>
                      </div>

                      <div className="p-3 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-semibold">
                        <div className="text-[10px] opacity-80">02. Event Validation</div>
                        <div className="text-xs mt-0.5">Dead-Letter Queue Safe</div>
                      </div>

                      <div className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                        <div className="text-[10px] text-[var(--text-muted)]">03. CRM & Database Dispatch</div>
                        <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">Concurrent Message Router</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Compact cards for remaining projects
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 p-6 sm:p-8 shadow-card transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartInquiryWithProject && onStartInquiryWithProject(project.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors focus:outline-none"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
