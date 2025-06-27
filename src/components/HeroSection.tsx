
import React from 'react';
import { Play, ArrowRight, Download } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  const domains = [
    'Physical', 'Mental', 'Emotional', 'Social', 
    'Financial', 'Spiritual'
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated relative overflow-hidden">
      {/* Optimized Solo Leveling Background Image */}
      <OptimizedImage
        src="https://4kwallpapers.com/images/walls/thumbs_3t/15351.jpg"
        alt="Solo Leveling Background"
        className="absolute inset-0 opacity-20"
        loading="eager"
      />

      {/* Simplified Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-shadow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-monarch/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 55% */}
          <div className="lg:col-span-7 space-y-8">
            {/* Shadow Hunter Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-danger/20 text-accent-danger px-4 py-2 rounded-full text-sm font-medium border border-accent-danger/30 shadow-glass">
              <span className="w-2 h-2 bg-accent-danger rounded-full animate-pulse"></span>
              System Awakening in Progress
            </div>

            {/* Main Headline - Solo Leveling Style */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Awaken Your True{' '}
                <span className="shadow-gradient-text">Potential</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-2xl">
                Rise from E-Rank to S-Rank across 6 life domains. 
                Track your evolution, unlock hidden abilities, and become the ultimate version of yourself.
              </p>
            </div>

            {/* Power Level Stats */}
            <div className="flex items-center gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-shadow">6</div>
                <div className="text-sm text-text-tertiary">Power Domains</div>
              </div>
              <div className="w-px h-12 bg-accent-shadow/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-mana">∞</div>
                <div className="text-sm text-text-tertiary">Level Cap</div>
              </div>
              <div className="w-px h-12 bg-accent-shadow/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-strength">S</div>
                <div className="text-sm text-text-tertiary">Your Rank</div>
              </div>
            </div>

            {/* CTA Buttons - Solo Leveling Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-shadow text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Begin Your Awakening
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-monarch text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-monarch/90 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download App
              </button>
              
              <button 
                onClick={() => document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-accent-mana/50 text-accent-mana px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-mana/10 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Preview
              </button>
            </div>

            {/* Shadow Guild Counter */}
            <p className="text-text-tertiary">
              Join <span className="text-accent-shadow font-semibold">3,247</span> Shadow Hunters
            </p>
          </div>

          {/* Right Visual - 45% Solo Leveling System */}
          <div className="lg:col-span-5 relative">
            <div className="shadow-glass bg-gradient-to-br from-bg-elevated to-bg-secondary p-8 relative overflow-hidden rounded-3xl">
              {/* Shadow System Visualization */}
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Central Shadow Hunter Avatar */}
                <div className="absolute z-10 w-20 h-20 bg-gradient-to-r from-accent-shadow to-accent-monarch rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-16 h-16 bg-bg-primary rounded-full flex items-center justify-center border-2 border-accent-shadow/50">
                    <span className="text-2xl">🗡️</span>
                  </div>
                </div>
                
                {/* Rank Indicator */}
                <div className="absolute top-4 left-4 bg-accent-strength/90 text-bg-primary px-3 py-1 rounded-full text-sm font-bold border border-accent-strength shadow-lg">
                  S-Rank
                </div>

                {/* Power Level */}
                <div className="absolute top-4 right-4 bg-accent-shadow/90 text-white px-3 py-1 rounded-full text-sm font-bold border border-accent-shadow shadow-lg">
                  Lv. 127
                </div>

                {/* Domain Power Nodes */}
                {domains.map((domain, index) => {
                  const angle = (index * 60) - 90;
                  const radius = 140;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  const colors = [
                    'accent-shadow', 'accent-monarch', 'accent-mana',
                    'accent-strength', 'accent-danger', 'accent-necromancy'
                  ];

                  const ranks = ['S', 'A', 'S', 'A', 'S', 'S'];

                  return (
                    <div
                      key={domain}
                      className="absolute w-16 h-16 rounded-full flex flex-col items-center justify-center text-xs font-bold text-center leading-tight shadow-glass border"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                        backgroundColor: `var(--${colors[index]})`,
                        color: 'white',
                        borderColor: `var(--${colors[index]})`,
                      }}
                    >
                      <span className="text-[10px]">{domain}</span>
                      <span className="text-xs font-bold">{ranks[index]}</span>
                    </div>
                  );
                })}

                {/* Simplified Mana Flow Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{animationDuration: '20s'}}>
                  {domains.map((_, index) => {
                    const angle1 = (index * 60) - 90;
                    const angle2 = ((index + 1) % 6 * 60) - 90;
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
                        stroke="var(--accent-shadow)"
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
