
import React, { useState, useEffect } from 'react';
import { FileText, X } from 'lucide-react';

const FloatingTemplatePrompt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showPrompt = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Show for 5 seconds
    };

    // Show every 1 minute
    const interval = setInterval(showPrompt, 60000);
    
    // Show first prompt after 30 seconds
    const initialTimer = setTimeout(showPrompt, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, []);

  const handleClick = () => {
    const systemTabElement = document.querySelector('[data-section="system-tab"]');
    if (systemTabElement) {
      systemTabElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-scale-in">
      <div className="bg-gradient-to-r from-accent-shadow to-accent-monarch shadow-glass rounded-2xl p-4 max-w-xs border border-accent-shadow/30 animate-shadow-pulse">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-bg-elevated rounded-full flex items-center justify-center text-text-tertiary hover:text-white transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <FileText className="w-6 h-6 text-white" />
          <div>
            <h4 className="text-white font-semibold text-sm">Free System Template</h4>
            <p className="text-text-secondary text-xs">Unlock your growth framework</p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="w-full bg-white text-accent-shadow px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/90 transition-all duration-300"
        >
          Get Template →
        </button>
      </div>
    </div>
  );
};

export default FloatingTemplatePrompt;
