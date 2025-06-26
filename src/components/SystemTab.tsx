
import React, { useState } from 'react';
import { FileText, Mail, Lock, Unlock } from 'lucide-react';

const SystemTab = () => {
  const [email, setEmail] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUnlocked(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="system-tab" data-section="system-tab" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/4231465.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-72 h-72 bg-accent-shadow/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-mana/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The System <span className="shadow-gradient-text">Template</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Unlock our exclusive Notion template to start building your systematic life improvement framework. 
              Get the same structure used by thousands of successful individuals.
            </p>
          </div>

          {/* Template Access Card */}
          <div className="bg-gradient-to-br from-bg-elevated to-bg-secondary shadow-glass rounded-3xl p-8 lg:p-12 border border-accent-shadow/20 relative">
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-bg-primary/80 rounded-3xl backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              {!isUnlocked ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-shadow/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-10 h-10 text-accent-shadow" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    System Template Access
                  </h3>
                  
                  <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                    Enter your email to unlock immediate access to our comprehensive life systematization framework. 
                    Transform your daily routine into a powerful growth engine.
                  </p>

                  <form onSubmit={handleUnlock} className="max-w-md mx-auto">
                    <div className="flex gap-3 mb-4">
                      <div className="flex-1 relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-bg-elevated/50 border border-accent-shadow/30 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-accent-shadow transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={!email || isLoading}
                      className="w-full bg-accent-shadow text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-shadow-pulse"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Unlocking...
                        </div>
                      ) : (
                        'Unlock Template Access'
                      )}
                    </button>
                  </form>

                  <p className="text-text-tertiary text-sm mt-4">
                    Your email will only be used to send you the template and system updates.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-mana/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Unlock className="w-10 h-10 text-accent-mana" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    🎉 Template Unlocked!
                  </h3>
                  
                  <p className="text-text-secondary mb-8">
                    Access your complete system template and start your transformation journey.
                  </p>

                  <div className="bg-accent-mana/10 border border-accent-mana/30 rounded-2xl p-6 mb-6">
                    <FileText className="w-8 h-8 text-accent-mana mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      The Complete System Framework
                    </h4>
                    <p className="text-text-secondary text-sm mb-4">
                      6-domain assessment • Daily quest templates • Progress tracking • Reflection frameworks
                    </p>
                    
                    <a
                      href="https://notion.so/your-template-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent-mana text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-mana/90 transition-all duration-300"
                    >
                      <FileText className="w-5 h-5" />
                      Open Notion Template
                    </a>
                  </div>

                  <div className="text-text-tertiary text-sm">
                    Template sent to: {email}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemTab;
