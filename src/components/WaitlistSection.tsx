
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [focusArea, setFocusArea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && focusArea) {
      setIsSubmitted(true);
      // In a real app, you'd send this to your backend
      console.log('Waitlist signup:', { email, focusArea });
    }
  };

  const focusOptions = [
    'Physical Health',
    'Mental Clarity',
    'Emotional Balance',
    'Social Connections',
    'Financial Growth',
    'Creative Expression',
    'Spiritual Development',
    'Knowledge Expansion'
  ];

  const benefits = [
    { icon: '🎯', text: 'Priority early access' },
    { icon: '💡', text: 'Exclusive development updates' },
    { icon: '🎁', text: 'Founding member pricing' },
    { icon: '📊', text: 'Beta testing opportunities' }
  ];

  if (isSubmitted) {
    return (
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent-electric rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <span className="text-3xl">✨</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">Welcome to The System!</h2>
            
            <p className="text-xl text-text-secondary mb-8">
              You're now part of an exclusive group of systematic improvers. 
              We'll keep you updated on our progress and notify you when early access becomes available.
            </p>

            <div className="bg-accent-growth/20 glass-effect rounded-2xl p-6 mb-8">
              <p className="text-accent-growth font-semibold">
                🚀 Your journey begins here. Check your email for next steps.
              </p>
            </div>

            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-accent-electric hover:text-accent-electric/80 transition-colors"
            >
              ← Back to landing page
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-96 h-96 bg-accent-electric/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent-wisdom/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Begin Your <span className="gradient-text">Systematic Evolution</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Limited early access spots available
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Form */}
            <div className="bg-bg-elevated/30 glass-effect rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-bg-primary border-2 border-bg-elevated text-white px-4 py-3 rounded-xl focus:border-accent-electric focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Growth Focus Dropdown */}
                <div>
                  <label htmlFor="focus" className="block text-white font-medium mb-3">
                    Primary Growth Focus
                  </label>
                  <select
                    id="focus"
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full bg-bg-primary border-2 border-bg-elevated text-white px-4 py-3 rounded-xl focus:border-accent-electric focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select your main focus area</option>
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
                  className="w-full bg-accent-electric text-bg-primary py-4 rounded-xl font-semibold text-lg hover:bg-accent-electric/90 transition-all duration-300 flex items-center justify-center gap-3 group animate-pulse-glow"
                >
                  Secure Your Spot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Live Counter */}
                <div className="text-center pt-4">
                  <p className="text-text-tertiary">
                    <span className="text-accent-electric font-semibold">3,247</span> others waiting
                  </p>
                </div>
              </form>
            </div>

            {/* Right - Benefits & Visual */}
            <div className="space-y-8">
              {/* Benefits List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-bg-elevated/20 rounded-xl hover:bg-bg-elevated/30 transition-colors animate-float"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-text-secondary text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Progression Visual */}
              <div className="bg-bg-elevated/20 glass-effect rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">Your Journey Progression</h4>
                <div className="flex items-center justify-between">
                  {['1', '2', '3', '4', '∞'].map((step, index) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{
                            background: index === 0 
                              ? 'var(--accent-electric)' 
                              : 'var(--bg-elevated)',
                            color: index === 0 ? 'var(--bg-primary)' : 'var(--text-tertiary)'
                          }}
                        >
                          {step}
                        </div>
                        <span className="text-xs text-text-tertiary mt-2">
                          {index === 0 && 'Start'}
                          {index === 1 && 'Assess'}
                          {index === 2 && 'Track'} 
                          {index === 3 && 'Improve'}
                          {index === 4 && 'Evolve'}
                        </span>
                      </div>
                      {index < 4 && (
                        <div className="flex-1 h-px bg-bg-elevated mx-2"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-center text-text-tertiary mt-4 text-sm">
                  Your journey begins here
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
