import React, { useEffect } from 'react';
import { ServiceItem } from '../../types';
import { X, CheckCircle2, ArrowUpRight, Globe, Smartphone, LayoutGrid, Monitor, Palette, Cpu } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-purple-400" />;
      case 'Monitor': return <Monitor className="w-6 h-6 text-cyan-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      default: return <Globe className="w-6 h-6 text-purple-400" />;
    }
  };

  const handleInquire = () => {
    onSelectServiceForInquiry(service.title);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1224] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div
          className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            service.accentColor === 'cyan' ? 'bg-cyan-500/20' : 'bg-purple-500/20'
          }`}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`p-3 rounded-xl border ${
              service.accentColor === 'cyan'
                ? 'bg-cyan-500/10 border-cyan-500/30'
                : 'bg-purple-500/10 border-purple-500/30'
            }`}
          >
            {getIcon(service.iconName)}
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Service Overview
            </span>
            <h3 id="service-modal-title" className="text-2xl font-bold text-white font-display">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
          {service.detailedDescription}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Core Deliverables & Specifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    service.accentColor === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Key Technology Ecosystem
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[#151a30] border border-white/10 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleInquire}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-900/40 transition-all duration-300"
          >
            Inquire About {service.title}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
