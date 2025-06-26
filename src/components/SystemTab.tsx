
import React, { useState } from 'react';
import { ExternalLink, Lock, Unlock } from 'lucide-react';

const SystemTab = () => {
  const [email, setEmail] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUnlocked(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const notionLink = "https://notion.so/your-system-template"; // Replace with actual link

  return (
    <section className="py-16 bg-bg-primary relative overflow-hidden" data-section="system-tab">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-bg-elevated to-bg-secondary rounded-2xl p-8 shadow-glass border border-accent-shadow/20">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {isUnlocked ? (
                <Unlock className="w-8 h-8 text-accent-mana" />
              ) : (
                <Lock className="w-8 h-8 text-accent-shadow" />
              )}
              <h3 className="text-2xl font-bold text-white">
                The System Template
              </h3>
            </div>

            {!isUnlocked ? (
              <>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Unlock our exclusive Notion template to start building your systematic life improvement framework. 
                  Get the same structure used by thousands of successful individuals.
                </p>

                <form onSubmit={handleUnlock} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email to unlock"
                      className="w-full px-4 py-3 bg-bg-secondary border border-accent-shadow/30 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-accent-shadow focus:ring-2 focus:ring-accent-shadow/20"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full bg-accent-shadow text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Unlocking...
                      </>
                    ) : (
                      <>
                        <Unlock className="w-4 h-4" />
                        Unlock Template Access
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-text-tertiary mt-4">
                  Your email will only be used to send you the template and system updates.
                </p>
              </>
            ) : (
              <div className="space-y-6">
                <div className="text-accent-mana mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4">
                  Template Unlocked! 🎉
                </h4>
                
                <p className="text-text-secondary mb-6">
                  Access your exclusive System template and start building your life optimization framework today.
                </p>

                <a
                  href={notionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-mana text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-mana/90 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open System Template
                </a>

                <p className="text-xs text-text-tertiary mt-4">
                  Template sent to {email} as well!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemTab;
