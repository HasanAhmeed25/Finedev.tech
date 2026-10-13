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

  const renderIcon = (iconName: string, accentColor: 'violet' | 'cyan') => {
    const isCyan = accentColor === 'cyan';
    const colorClasses = isCyan
      ? 'text-cyan-400 group-hover:text-cyan-300'
      : 'text-purple-400 group-hover:text-purple-300';
    const bgClasses = isCyan
      ? 'bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'
      : 'bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]';

    return (
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 mb-5 ${bgClasses}`}
      >
        {iconName === 'Globe' && <Globe className={`w-6 h-6 ${colorClasses}`} />}
        {iconName === 'Smartphone' && <Smartphone className={`w-6 h-6 ${colorClasses}`} />}
        {iconName === 'LayoutGrid' && <LayoutGrid className={`w-6 h-6 ${colorClasses}`} />}
        {iconName === 'Monitor' && <Monitor className={`w-6 h-6 ${colorClasses}`} />}
        {iconName === 'Palette' && <Palette className={`w-6 h-6 ${colorClasses}`} />}
        {iconName === 'Cpu' && <Cpu className={`w-6 h-6 ${colorClasses}`} />}
      </div>
    );
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 scroll-mt-12">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121626] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Technology Built Around Your Vision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            From modern responsive web applications to enterprise desktop utilities and automated systems,
            we engineer robust digital products with rigorous craftsmanship.
          </p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isCyan = service.accentColor === 'cyan';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedService(service)}
                className={`group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-2xl bg-[#0e1222]/80 backdrop-blur-xl border border-white/[0.08] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${
                  isCyan
                    ? 'hover:border-cyan-500/40 hover:shadow-[0_12px_35px_-10px_rgba(6,182,212,0.25)]'
                    : 'hover:border-purple-500/40 hover:shadow-[0_12px_35px_-10px_rgba(139,92,246,0.25)]'
                }`}
              >
                {/* Subtle card top glow on hover */}
                <div
                  className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isCyan ? 'via-cyan-400' : 'via-purple-400'
                  }`}
                />

                {/* Card Content Top */}
                <div>
                  <div className="flex items-center justify-between">
                    {renderIcon(service.iconName, service.accentColor)}
                    <span className="text-[11px] font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 font-display mb-3"
                    style={{
                      backgroundImage: isCyan
                        ? 'linear-gradient(to right, #ffffff, #67e8f9)'
                        : 'linear-gradient(to right, #ffffff, #c084fc)'
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Footer / CTA */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold transition-transform duration-300 group-hover:translate-x-1 ${
                      isCyan ? 'text-cyan-400' : 'text-purple-400'
                    }`}
                  >
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
