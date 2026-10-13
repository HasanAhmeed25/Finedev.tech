import React, { useState } from 'react';
import { GeometricLogo } from '../UI/GeometricLogo';
import { BRAND_INFO, SERVICES_DATA } from '../../data/content';
import { LegalModal } from '../UI/LegalModal';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#05060a] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-left">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Info (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <GeometricLogo size={34} />
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm mt-3">
              A futuristic digital consultancy and software engineering studio. We design, develop, and deliver
              scalable digital products that help ambitious businesses grow.
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-400">
              {BRAND_INFO.tagline}
            </div>
          </div>

          {/* Quick Navigation (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleNavClick(e, '#solutions')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, '#why-us')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Why FineDev.tech
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  onClick={(e) => handleNavClick(e, '#tech-stack')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Tech Ecosystem
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Links (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="hover:text-purple-300 text-left transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">
              Get in Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Have questions or need technical advice? Drop our engineering leads a note directly.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <Mail className="w-4 h-4" />
                {BRAND_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.contactChannels.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0e1220] border border-white/10 text-slate-400 hover:text-white hover:border-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.contactChannels.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0e1220] border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.contactChannels.x}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0e1220] border border-white/10 text-slate-400 hover:text-white hover:border-purple-400 transition-colors font-mono text-xs px-2.5"
                aria-label="X"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Closing Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© {currentYear} FineDev.tech. All rights reserved.</span>
          </div>

          {/* Closing Line */}
          <div className="text-slate-300 font-medium tracking-wide">
            "{BRAND_INFO.closingLine}"
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLegalModalType('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </footer>
  );
};
