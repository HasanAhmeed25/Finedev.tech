import React, { useState, useEffect } from 'react';
import { GeometricLogo } from './UI/GeometricLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['hero', 'services', 'solutions', 'process', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Our Process', href: '#process', id: 'process' },
    { name: 'About', href: '#why-us', id: 'why-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#080a12]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
              aria-label="FineDev.tech - Home"
            >
              <GeometricLogo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#101424]/60 border border-white/[0.06] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full -z-10 animate-fade-in" />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={handleCtaClick}
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-semibold tracking-wide">
                  Let’s Talk
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-xl animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 left-4 right-4 bg-[#0e1222] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-purple-600/20 text-white border border-purple-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full py-3 px-5 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-900/40"
              >
                Let’s Talk
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
