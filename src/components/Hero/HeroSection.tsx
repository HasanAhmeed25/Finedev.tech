import React from 'react';
import { Hero3DComposition } from './Hero3DComposition';
import { BRAND_INFO } from '../../data/content';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column: Brand Statement & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141828]/80 border border-purple-500/30 backdrop-blur-md w-fit mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wider text-purple-200 uppercase">
                {BRAND_INFO.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                Digital Experiences
              </span>{' '}
              That Move Businesses Forward.
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              {BRAND_INFO.supportingText}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onStartProject}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.55)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-slate-200 bg-[#12162a]/70 hover:bg-[#1a2038] border border-white/10 hover:border-purple-400/40 backdrop-blur-md transition-all duration-300 hover:text-white"
              >
                Explore Our Services
              </button>
            </div>

            {/* Small Trust Statement */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="tracking-wide text-slate-300">
                {BRAND_INFO.trustStatement}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Premium 3D Interactive Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <Hero3DComposition />
          </motion.div>
        </div>
      </div>

      {/* Small Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToServices();
          }}
          className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono text-slate-400 group-hover:text-cyan-400">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce mt-0.5" />
        </a>
      </div>
    </section>
  );
};
