import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/content';
import { ServiceItem } from '../../types';
import { ServiceModal } from './ServiceModal';
import { Globe, Smartphone, LayoutGrid, Monitor, Palette, Cpu, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string) => {
    return (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent-soft)] text-[var(--accent-primary)] mb-6 transition-transform duration-200 group-hover:scale-105">
        {iconName === 'Globe' && <Globe className="w-6 h-6" />}
        {iconName === 'Smartphone' && <Smartphone className="w-6 h-6" />}
        {iconName === 'LayoutGrid' && <LayoutGrid className="w-6 h-6" />}
        {iconName === 'Monitor' && <Monitor className="w-6 h-6" />}
        {iconName === 'Palette' && <Palette className="w-6 h-6" />}
        {iconName === 'Cpu' && <Cpu className="w-6 h-6" />}
      </div>
    );
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 scroll-mt-12 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
            Technology shaped around your ambition.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            From modern responsive web applications to enterprise desktop utilities and automated systems,
            we engineer robust digital products with rigorous craftsmanship.
          </p>
        </div>

        {/* Editorial Layout: 2 Featured Services + 4 Supporting Services */}
        <div className="space-y-8">
          {/* Top Row: Two Featured Services (Asymmetric / Wide Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {[SERVICES_DATA[0], SERVICES_DATA[2]].map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-[var(--accent-soft)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                      Featured Discipline 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      CORE CAPABILITY
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    {renderIcon(service.iconName)}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors font-display">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono text-[var(--accent-primary)] mt-1">
                        High-Performance Engineering
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-[var(--text-secondary)] leading-relaxed font-light mb-6">
                    {service.detailedDescription}
                  </p>

                  {/* Key Deliverables Preview */}
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-6">
                    <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2.5">
                      Included Architecture
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                      {service.deliverables.slice(0, 4).map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform">
                    Explore Architecture
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Four Supporting Services (Clean 4-Column Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[SERVICES_DATA[1], SERVICES_DATA[3], SERVICES_DATA[4], SERVICES_DATA[5]].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 hover:bg-[var(--bg-secondary)]/50 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {renderIcon(service.iconName)}
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      0{index + 3}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors font-display mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light line-clamp-3 mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {service.techStack.slice(0, 2).join(' · ')}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-primary)] group-hover:translate-x-0.5 transition-transform">
                    View
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForInquiry={onSelectServiceForInquiry}
      />
    </section>
  );
};
