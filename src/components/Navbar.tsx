import React, { useState, useEffect } from 'react';
import { GeometricLogo } from './UI/GeometricLogo';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['hero', 'services', 'solutions', 'process', 'work', 'why-us', 'contact'];
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
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Work', href: '#work', id: 'work' },
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
        className={`fixed top-0 left-0 right-0 z-50 h-[76px] sm:h-[80px] lg:h-[88px] transition-all duration-200 flex items-center ${
          isScrolled
            ? 'bg-[var(--bg-card)]/95 backdrop-blur-md border-b border-[var(--border-color)] shadow-xs'
            : 'bg-[var(--bg-card)]/90 backdrop-blur-sm border-b border-[var(--border-color)]/80'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-12 items-center h-full">
            {/* Left: Logo (col-span-6 on mobile, col-span-3 on desktop) */}
            <div className="col-span-6 lg:col-span-3 flex items-center justify-start">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg py-1 inline-flex items-center"
                aria-label="FineDev.tech - Home"
              >
                <GeometricLogo size={32} />
              </a>
            </div>

            {/* Center: Clean Text Navigation (col-span-6, hidden below lg) */}
            <nav className="hidden lg:flex items-center justify-center col-span-6 gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1.5 text-sm tracking-normal transition-colors duration-150 group font-medium ${
                      isActive
                        ? 'text-[var(--accent-primary)] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-primary)] rounded-full transition-all" />
                    ) : (
                      <span className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 bg-[var(--accent-primary)] opacity-0 group-hover:left-0 group-hover:right-0 group-hover:opacity-60 rounded-full transition-all duration-200" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Theme Toggle & CTA (col-span-6 on mobile, col-span-3 on desktop) */}
            <div className="col-span-6 lg:col-span-3 flex items-center justify-end gap-2.5 sm:gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] transition-all shrink-0"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 transition-transform duration-200" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200" />
                )}
              </button>

              {/* Desktop CTA */}
              <button
                type="button"
                onClick={handleCtaClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-xs hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] shrink-0"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile / Tablet Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] shrink-0"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 sm:top-24 left-4 right-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl flex flex-col gap-4"
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
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-primary)] font-semibold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[var(--border-color)] flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full py-3 px-5 rounded-xl text-center font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] flex items-center justify-center gap-2 shadow-sm"
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
