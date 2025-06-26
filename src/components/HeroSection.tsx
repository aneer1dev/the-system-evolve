
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const domains = [
    'Physical', 'Mental', 'Emotional', 'Social', 
    'Financial', 'Creative', 'Spiritual', 'Knowledge'
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-electric/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-wisdom/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 55% */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-energy/20 text-accent-energy px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent-energy rounded-full animate-pulse"></span>
              Now in Development
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your Life Into a{' '}
                <span className="gradient-text">Systematic Journey</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-2xl">
                Level up across 8 life domains with philosophical precision. 
                Track meaningful progress, unlock abilities, and architect your evolution.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-electric">8</div>
                <div className="text-sm text-text-tertiary">Life Domains</div>
              </div>
              <div className="w-px h-12 bg-text-tertiary/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-growth">∞</div>
                <div className="text-sm text-text-tertiary">Growth Potential</div>
              </div>
              <div className="w-px h-12 bg-text-tertiary/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-wisdom">1</div>
                <div className="text-sm text-text-tertiary">You</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-electric text-bg-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-electric/90 transition-all duration-300 flex items-center justify-center gap-3 group animate-pulse-glow">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-accent-electric/50 text-accent-electric px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-electric/10 transition-all duration-300 flex items-center justify-center gap-3 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Preview
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-text-tertiary">
              Join <span className="text-accent-electric font-semibold">3,247</span> systematic improvers
            </p>
          </div>

          {/* Right Visual - 45% */}
          <div className="lg:col-span-5 relative">
            <div className="organic-shape bg-gradient-to-br from-bg-elevated to-bg-secondary p-8 relative overflow-hidden">
              {/* 8-Domain Visualization */}
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Central User Avatar */}
                <div className="absolute z-10 w-20 h-20 bg-gradient-to-r from-accent-electric to-accent-wisdom rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-16 h-16 bg-bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
                
                {/* Level Indicator */}
                <div className="absolute top-4 left-4 bg-accent-gold/90 text-bg-primary px-3 py-1 rounded-full text-sm font-bold">
                  Level 1
                </div>

                {/* Domain Nodes */}
                {domains.map((domain, index) => {
                  const angle = (index * 45) - 90; // Start from top
                  const radius = 140;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  const colors = [
                    'accent-electric', 'accent-energy', 'accent-growth', 'accent-wisdom',
                    'accent-gold', 'accent-electric', 'accent-energy', 'accent-growth'
                  ];

                  return (
                    <div
                      key={domain}
                      className="absolute w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium text-center leading-tight animate-float"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                        backgroundColor: `var(--${colors[index]})`,
                        color: 'var(--bg-primary)',
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      {domain}
                    </div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full animate-rotate" style={{animationDuration: '60s'}}>
                  {domains.map((_, index) => {
                    const angle1 = (index * 45) - 90;
                    const angle2 = ((index + 1) % 8 * 45) - 90;
                    const radius = 140;
                    const x1 = Math.cos(angle1 * Math.PI / 180) * radius + 192;
                    const y1 = Math.sin(angle1 * Math.PI / 180) * radius + 192;
                    const x2 = Math.cos(angle2 * Math.PI / 180) * radius + 192;
                    const y2 = Math.sin(angle2 * Math.PI / 180) * radius + 192;
                    
                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="var(--accent-electric)"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
