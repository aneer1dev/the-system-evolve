
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
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'w-[90%] max-w-4xl' 
          : 'w-[95%] max-w-5xl'
      }`}>
        <div className={`shadow-glass backdrop-blur-xl rounded-2xl border border-accent-shadow/20 transition-all duration-500 ${
          isScrolled ? 'py-2 px-4' : 'py-3 px-6'
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative">
                <div className={`bg-gradient-to-r from-accent-shadow to-accent-monarch rounded-xl flex items-center justify-center animate-shadow-pulse transition-all duration-500 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}>
                  <span className={`text-white font-bold transition-all duration-500 ${
                    isScrolled ? 'text-sm' : 'text-lg'
                  }`}>⚡</span>
                </div>
              </div>
              <span className={`text-white font-bold transition-all duration-500 ${
                isScrolled ? 'text-sm' : 'text-lg'
              } group-hover:text-accent-shadow whitespace-nowrap`}>
                The System
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-accent-shadow text-white shadow-lg' 
                        : 'text-text-secondary hover:text-accent-shadow hover:bg-accent-shadow/10'
                    } ${isScrolled ? 'text-xs' : 'text-sm'}`}
                  >
                    <Icon className={isScrolled ? 'w-3 h-3' : 'w-4 h-4'} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={scrollToWaitlist}
                className={`bg-accent-shadow text-white rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center gap-2 group animate-shadow-pulse ${
                  isScrolled ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'
                }`}
              >
                <span>Join Waitlist</span>
                <svg 
                  className={`group-hover:translate-x-1 transition-transform ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`}
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
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 shadow-glass backdrop-blur-xl rounded-2xl border border-accent-shadow/20">
            <div className="p-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 p-3 text-text-secondary hover:text-accent-shadow hover:bg-accent-shadow/10 rounded-xl transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <div className="border-t border-accent-shadow/20 pt-3 mt-2">
                  <button 
                    onClick={scrollToWaitlist}
                    className="w-full bg-accent-shadow text-white px-5 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-2"
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
      <div className="h-20"></div>
    </>
  );
};

export default TopNavigation;
