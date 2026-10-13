import React, { useState } from 'react';
import { BackgroundGrid } from './components/UI/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { ServicesSection } from './components/Services/ServicesSection';
import { SolutionsSection } from './components/Solutions/SolutionsSection';
import { ProcessSection } from './components/Process/ProcessSection';
import { WhyUsSection } from './components/WhyUs/WhyUsSection';
import { TechStackSection } from './components/TechStack/TechStackSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('RootErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07080d] text-white p-8 flex flex-col items-center justify-center font-mono">
          <div className="max-w-xl p-6 rounded-2xl bg-red-950/50 border border-red-500/40 text-left">
            <h2 className="text-xl font-bold text-red-300 mb-2">Rendering Error Detected</h2>
            <p className="text-sm text-red-200 mb-4">{this.state.error?.message}</p>
            <pre className="text-xs bg-black/50 p-4 rounded text-slate-300 overflow-auto max-h-60">
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 rounded bg-red-600 text-white text-xs font-bold"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  const [inquiryProjectType, setInquiryProjectType] = useState<string>('');

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      setInquiryProjectType(projectType);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <RootErrorBoundary>
      <div className="relative min-h-screen bg-[#07080d] text-slate-100 overflow-x-hidden selection:bg-purple-600/30 selection:text-cyan-300">
        {/* Ambient Visual Grid & Glow Background */}
        <BackgroundGrid />

        {/* Main Content Layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation Bar */}
          <Navbar onOpenContact={() => scrollToContact()} />

          {/* Hero Section */}
          <HeroSection
            onStartProject={() => scrollToContact()}
            onExploreServices={scrollToServices}
          />

          {/* Services Section */}
          <ServicesSection
            onSelectServiceForInquiry={(serviceTitle) => scrollToContact(serviceTitle)}
          />

          {/* Featured Solutions Section */}
          <SolutionsSection
            onStartInquiryWithSolution={(solutionTitle) => scrollToContact(solutionTitle)}
          />

          {/* Development Process Section */}
          <ProcessSection />

          {/* Why FineDev.tech Section */}
          <WhyUsSection />

          {/* Technology Ecosystem Section */}
          <TechStackSection />

          {/* Project Inquiry / Contact Section */}
          <ContactSection initialProjectType={inquiryProjectType} />

          {/* Footer */}
          <Footer onSelectService={(serviceTitle) => scrollToContact(serviceTitle)} />
        </div>
      </div>
    </RootErrorBoundary>
  );
};

export default App;
