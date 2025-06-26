
import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [focusArea, setFocusArea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && focusArea) {
      setIsSubmitted(true);
      console.log('Shadow Hunter registration:', { email, focusArea });
    }
  };

  const focusOptions = [
    'Physical Power',
    'Mental Strength',
    'Emotional Balance',
    'Social Connections',
    'Financial Growth',
    'Creative Expression',
    'Spiritual Development',
    'Knowledge Mastery'
  ];

  const benefits = [
    { icon: '⚡', text: 'Priority Shadow Access', color: 'accent-shadow' },
    { icon: '🎯', text: 'Exclusive Hunter Updates', color: 'accent-monarch' },
    { icon: '💎', text: 'Founder Rank Pricing', color: 'accent-mana' },
    { icon: '🗡️', text: 'Beta System Testing', color: 'accent-strength' }
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 bg-bg-secondary relative overflow-hidden necromancer-particles">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent-shadow rounded-full flex items-center justify-center mx-auto mb-8 animate-shadow-pulse">
              <span className="text-3xl">⚡</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 shadow-gradient-text">
              Welcome to the Shadow Guild!
            </h2>
            
            <p className="text-xl text-text-secondary mb-8">
              You've been registered as a Shadow Hunter. 
              Your awakening journey will begin when the System goes live.
            </p>

            <div className="bg-accent-mana/20 shadow-glass rounded-2xl p-6 mb-8 border border-accent-mana/30">
              <p className="text-accent-mana font-semibold flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                System activation imminent. Check your email for mission briefing.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 bg-bg-secondary relative overflow-hidden necromancer-particles">
      {/* Shadow Realm Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-96 h-96 bg-accent-shadow/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent-monarch/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Join the <span className="shadow-gradient-text">Shadow Guild</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Limited Shadow Hunter recruitment ongoing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Registration Form */}
            <div className="bg-bg-elevated/30 shadow-glass rounded-3xl p-8 border border-accent-shadow/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-accent-shadow">⚔️</span>
                  Hunter Registration
                </h3>
                <p className="text-text-secondary">Begin your awakening journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    Hunter Identity
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-bg-primary border-2 border-bg-elevated text-white px-4 py-3 rounded-xl focus:border-accent-shadow focus:outline-none transition-colors shadow-glass"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Power Focus Dropdown */}
                <div>
                  <label htmlFor="focus" className="block text-white font-medium mb-3">
                    Primary Power Focus
                  </label>
                  <select
                    id="focus"
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full bg-bg-primary border-2 border-bg-elevated text-white px-4 py-3 rounded-xl focus:border-accent-shadow focus:outline-none transition-colors shadow-glass"
                    required
                  >
                    <option value="">Choose your main power domain</option>
                    {focusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent-shadow text-white py-4 rounded-xl font-semibold text-lg hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-3 group animate-shadow-pulse monarch-energy"
                >
                  Join Shadow Guild
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Live Counter */}
                <div className="text-center pt-4">
                  <p className="text-text-tertiary">
                    <span className="text-accent-shadow font-semibold animate-pulse">3,247</span> Shadow Hunters awaiting
                  </p>
                </div>
              </form>
            </div>

            {/* Right - Benefits & Progression */}
            <div className="space-y-8">
              {/* Benefits List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-accent-monarch">🛡️</span>
                  Guild Benefits
                </h3>
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-bg-elevated/20 rounded-xl hover:bg-bg-elevated/30 transition-colors animate-float shadow-glass border border-accent-shadow/10"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-text-secondary text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Rank Progression Visual */}
              <div className="bg-bg-elevated/20 shadow-glass rounded-2xl p-6 border border-accent-shadow/20">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-accent-strength">⭐</span>
                  Rank Progression
                </h4>
                <div className="flex items-center justify-between">
                  {['E', 'D', 'C', 'B', 'A', 'S'].map((rank, index) => (
                    <React.Fragment key={rank}>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 transition-all duration-300"
                          style={{
                            background: index === 0 
                              ? 'var(--accent-shadow)' 
                              : 'var(--bg-elevated)',
                            borderColor: index === 0 ? 'var(--accent-shadow)' : 'var(--text-tertiary)',
                            boxShadow: index === 0 ? '0 0 20px rgba(139, 92, 246, 0.5)' : 'none'
                          }}
                        >
                          {rank}
                        </div>
                        <span className="text-xs text-text-tertiary mt-2">
                          {index === 0 && 'Start'}
                          {index === 1 && 'Awaken'}
                          {index === 2 && 'Evolve'} 
                          {index === 3 && 'Advance'}
                          {index === 4 && 'Master'}
                          {index === 5 && 'Transcend'}
                        </span>
                      </div>
                      {index < 5 && (
                        <div className="flex-1 h-px bg-accent-shadow/30 mx-2 animate-pulse"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-center text-text-tertiary mt-4 text-sm">
                  Your shadow awakening begins at E-Rank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
