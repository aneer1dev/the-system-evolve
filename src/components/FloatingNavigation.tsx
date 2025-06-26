
import React, { useState } from 'react';
import { User, Zap, Users, Eye, BookOpen } from 'lucide-react';

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('philosophy');

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
  };

  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="glass-effect rounded-3xl px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-electric to-accent-wisdom rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">⚡</span>
            </div>
            <span className="hidden sm:block text-white font-semibold">The System</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
                    ${isActive 
                      ? 'bg-accent-electric text-bg-primary' 
                      : 'text-text-secondary hover:text-accent-electric hover:bg-accent-electric/10'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:block text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <button className="bg-accent-electric text-bg-primary px-6 py-2 rounded-xl font-semibold hover:bg-accent-electric/90 transition-all duration-300 flex items-center gap-2 group">
            <span className="hidden sm:block">Join Waitlist</span>
            <span className="sm:hidden">Join</span>
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
      </div>
    </nav>
  );
};

export default FloatingNavigation;
