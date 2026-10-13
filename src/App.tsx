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
  );
};

export default App;
