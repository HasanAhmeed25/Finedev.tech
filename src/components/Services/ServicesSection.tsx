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
            Technology Built Around Your Vision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            From modern responsive web applications to enterprise desktop utilities and automated systems,
            we engineer robust digital products with rigorous craftsmanship.
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between h-full p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent-primary)]/40 hover:shadow-card-hover shadow-card text-left"
              >
                {/* Card Content Top */}
                <div>
                  <div className="flex items-center justify-between">
                    {renderIcon(service.iconName)}
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors font-display mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Footer / CTA */}
                <div className="pt-6 mt-8 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-primary)] transition-transform duration-200 group-hover:translate-x-0.5">
                    Explore Service
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
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
