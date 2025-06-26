
import React from 'react';
import { Play, ArrowRight, Download, Smartphone } from 'lucide-react';

const HeroSection = () => {
  const domains = [
    'Physical', 'Mental', 'Emotional', 'Social', 
    'Financial', 'Spiritual'
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated relative overflow-hidden">
      {/* Solo Leveling Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://4kwallpapers.com/images/walls/thumbs_3t/15351.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Solo Leveling Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-shadow/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-monarch/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-necromancy/10 rounded-full blur-3xl"></div>
      </div>

      {/* Shadow Hunter Portal Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-shadow/5 via-transparent to-accent-monarch/5"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-accent-shadow/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-accent-monarch/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
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
                <span className="shadow-gradient-text animate-shadow-pulse">Potential</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-2xl">
                Rise from E-Rank to S-Rank across 6 life domains. 
                Track your evolution, unlock hidden abilities, and become the ultimate version of yourself.
              </p>
            </div>

            {/* Power Level Stats */}
            <div className="flex items-center gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-shadow animate-shadow-pulse">6</div>
                <div className="text-sm text-text-tertiary">Power Domains</div>
              </div>
              <div className="w-px h-12 bg-accent-shadow/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-mana animate-monarch-glow">∞</div>
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
              <button className="bg-accent-shadow text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-3 group animate-shadow-pulse monarch-energy">
                Begin Your Awakening
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-accent-monarch text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-monarch/90 transition-all duration-300 flex items-center justify-center gap-3 group animate-monarch-glow">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download App
              </button>
              
              <button className="border-2 border-accent-mana/50 text-accent-mana px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-mana/10 transition-all duration-300 flex items-center justify-center gap-3 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Preview
              </button>
            </div>

            {/* Shadow Guild Counter */}
            <p className="text-text-tertiary">
              Join <span className="text-accent-shadow font-semibold animate-pulse">3,247</span> Shadow Hunters
            </p>
          </div>

          {/* Right Visual - 45% Solo Leveling System */}
          <div className="lg:col-span-5 relative">
            <div className="shadow-shape bg-gradient-to-br from-bg-elevated to-bg-secondary p-8 relative overflow-hidden shadow-glass">
              {/* Shadow System Visualization */}
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Central Shadow Hunter Avatar */}
                <div className="absolute z-10 w-20 h-20 bg-gradient-to-r from-accent-shadow to-accent-monarch rounded-full flex items-center justify-center shadow-2xl animate-shadow-pulse">
                  <div className="w-16 h-16 bg-bg-primary rounded-full flex items-center justify-center border-2 border-accent-shadow/50">
                    <span className="text-2xl">🗡️</span>
                  </div>
                </div>
                
                {/* Rank Indicator */}
                <div className="absolute top-4 left-4 bg-accent-strength/90 text-bg-primary px-3 py-1 rounded-full text-sm font-bold border border-accent-strength shadow-lg">
                  S-Rank
                </div>

                {/* Power Level */}
                <div className="absolute top-4 right-4 bg-accent-shadow/90 text-white px-3 py-1 rounded-full text-sm font-bold border border-accent-shadow shadow-lg animate-pulse">
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

                  const ranks = ['S', 'A', 'B', 'A', 'S', 'A'];

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

                {/* Mana Flow Lines */}
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
                        strokeWidth="2"
                        opacity="0.4"
                        className="animate-pulse"
                        style={{animationDelay: `${index * 0.2}s`}}
                      />
                    );
                  })}
                </svg>

                {/* Power Aura Effect */}
                <div className="absolute inset-0 border-2 border-accent-shadow/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border border-accent-monarch/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
