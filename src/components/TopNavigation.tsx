
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Zap, Users, Eye, BookOpen } from 'lucide-react';

const TopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('philosophy');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'philosophy', label: 'Philosophy', icon: BookOpen },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'community', label: 'Community', icon: Users },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 shadow-glass' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative">
                <div className={`bg-gradient-to-r from-accent-shadow to-accent-monarch rounded-xl flex items-center justify-center animate-shadow-pulse transition-all duration-500 ${
                  isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  <span className={`text-white font-bold transition-all duration-500 ${
                    isScrolled ? 'text-lg' : 'text-xl'
                  }`}>⚡</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-shadow to-accent-monarch rounded-xl opacity-20 blur-md animate-pulse"></div>
              </div>
              <span className={`text-white font-bold transition-all duration-500 ${
                isScrolled ? 'text-lg' : 'text-xl'
              } group-hover:text-accent-shadow`}>
                The System
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-accent-shadow text-white shadow-lg' 
                        : 'text-text-secondary hover:text-accent-shadow hover:bg-accent-shadow/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={scrollToWaitlist}
                className="bg-accent-shadow text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center gap-2 group animate-shadow-pulse"
              >
                <span>Join Waitlist</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent-shadow transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 shadow-glass backdrop-blur-xl border-t border-accent-shadow/20">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 p-3 text-text-secondary hover:text-accent-shadow hover:bg-accent-shadow/10 rounded-xl transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <div className="border-t border-accent-shadow/20 pt-4 mt-2">
                  <button 
                    onClick={scrollToWaitlist}
                    className="w-full bg-accent-shadow text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Join Waitlist</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-24"></div>
    </>
  );
};

export default TopNavigation;
