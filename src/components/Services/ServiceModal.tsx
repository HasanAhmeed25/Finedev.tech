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
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6" />;
      case 'Monitor': return <Monitor className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  const handleInquire = () => {
    onSelectServiceForInquiry(service.title);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-[var(--accent-soft)] text-[var(--accent-primary)]">
            {getIcon(service.iconName)}
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Service Overview
            </span>
            <h3 id="service-modal-title" className="text-2xl font-bold text-[var(--text-primary)] font-display">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 font-light">
          {service.detailedDescription}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Core Deliverables & Specifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-primary)]"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[var(--accent-primary)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
            Key Technology Ecosystem
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleInquire}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm"
          >
            Inquire About {service.title}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
