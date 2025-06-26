
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/06/e5/5c/06e55cc22206299bbe1a3c4d4d2e4e07.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-shadow/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-monarch/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent-danger/20 text-accent-danger px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent-danger rounded-full animate-pulse"></span>
              Limited Shadow Hunter recruitment ongoing
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to <span className="shadow-gradient-text">Awaken</span> Your Potential?
            </h2>
            
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Join thousands of Shadow Hunters who have already begun their systematic evolution. 
              The app launches soon, and early access is limited.
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="bg-gradient-to-br from-bg-elevated to-bg-secondary shadow-glass rounded-3xl p-8 lg:p-12 border border-accent-shadow/20 max-w-2xl mx-auto">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get Early Access
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-tertiary w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email to join the waitlist"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-bg-elevated/50 border border-accent-shadow/30 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-accent-shadow transition-colors text-lg"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!email || isLoading}
                    className="w-full bg-accent-shadow text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-shadow/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-shadow-pulse flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Joining Shadow Guild...
                      </>
                    ) : (
                      <>
                        Join The Shadow Guild
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-text-tertiary text-sm">
                  <p>🎯 Early access to all features</p>
                  <p>⚡ Exclusive Shadow Hunter rank</p>
                  <p>🛡️ Priority guild placement</p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-shadow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Welcome to the Shadow Guild!
                </h3>
                
                <p className="text-text-secondary mb-6">
                  You've been added to our exclusive waitlist. Prepare for your awakening.
                </p>

                <div className="bg-accent-shadow/10 border border-accent-shadow/30 rounded-xl p-4">
                  <p className="text-accent-shadow font-medium">
                    Check your email for your Shadow Hunter welcome package
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "10,000+", label: "Hunters Waiting" },
              { number: "S-Rank", label: "Launch Preparation" },
              { number: "2024", label: "Awakening Year" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent-shadow mb-2">
                  {stat.number}
                </div>
                <div className="text-text-tertiary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
