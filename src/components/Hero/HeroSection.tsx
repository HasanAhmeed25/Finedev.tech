import React from 'react';
import { Hero3DComposition } from './Hero3DComposition';
import { BRAND_INFO } from '../../data/content';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onExploreServices();
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center min-h-[calc(100vh-7rem)]">
          {/* Left Column: Brand Statement & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Consultancy Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border-color)] w-fit mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse-subtle" />
              <span className="text-xs font-mono font-medium tracking-wider text-[var(--accent-primary)] uppercase">
                {BRAND_INFO.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] font-display">
              Digital ideas.<br />
              <span className="text-[var(--accent-primary)]">
                Precisely engineered.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-light">
              {BRAND_INFO.supportingText}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => {
                  const workEl = document.getElementById('work');
                  if (workEl) {
                    workEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    scrollToServices();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                Explore Our Work
              </button>
            </div>

            {/* Compact Capabilities Line */}
            <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] font-mono">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
              <span className="tracking-wide">
                {BRAND_INFO.trustStatement}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Premium 3D Interactive Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <Hero3DComposition />
          </motion.div>
        </div>
      </div>

      {/* Small Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToServices();
          }}
          className="flex flex-col items-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer group"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-[var(--accent-primary)] animate-bounce mt-0.5" />
        </a>
      </div>
    </section>
  );
};
