
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SystemNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // Show notification after 10 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsVisible(false);
    }
  }, [isVisible, timeLeft]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleJoin = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] animate-scale-in">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      
      {/* Notification Panel */}
      <div className="relative bg-gradient-to-br from-bg-elevated to-bg-secondary border-2 border-accent-shadow/50 rounded-2xl p-8 shadow-2xl max-w-md mx-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-tertiary hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* System Alert Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">⚔️</div>
          <div className="bg-accent-danger/20 text-accent-danger px-3 py-1 rounded-full text-sm font-bold border border-accent-danger/30 inline-block mb-4">
            SYSTEM ALERT
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Shadow Hunter Invitation
          </h3>
        </div>

        {/* Message */}
        <div className="text-center space-y-4 mb-6">
          <p className="text-text-secondary">
            You have been selected for the{' '}
            <span className="text-accent-shadow font-semibold">Shadow Hunter Program</span>.
          </p>
          <p className="text-white font-medium">
            Begin your awakening and unlock your true potential.
          </p>
        </div>

        {/* Timer */}
        <div className="text-center mb-6">
          <div className="bg-accent-shadow/20 rounded-xl p-3 border border-accent-shadow/30">
            <div className="text-accent-shadow font-bold text-lg">
              Auto-close in {timeLeft}s
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleJoin}
            className="w-full bg-accent-shadow text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-2 animate-shadow-pulse"
          >
            <span>⚡</span>
            Accept Invitation
          </button>
          
          <button
            onClick={handleClose}
            className="w-full border border-accent-shadow/30 text-text-secondary px-6 py-2 rounded-xl font-medium hover:bg-accent-shadow/10 hover:text-accent-shadow transition-all duration-300"
          >
            Maybe Later
          </button>
        </div>

        {/* System Signature */}
        <div className="text-center mt-4 pt-4 border-t border-accent-shadow/20">
          <p className="text-xs text-text-tertiary">
            - The System Administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemNotification;
