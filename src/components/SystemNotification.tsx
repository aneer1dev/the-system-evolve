
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
      <div 
        className="relative bg-gradient-to-br from-bg-elevated to-bg-secondary border-2 border-accent-shadow/50 rounded-2xl p-8 shadow-2xl max-w-md mx-4"
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp13598317.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-tertiary hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* System Alert Header */}
        <div className="text-center mb-6">
          <div className="bg-accent-danger/20 text-accent-danger px-3 py-1 rounded-full text-sm font-bold border border-accent-danger/30 inline-block mb-4">
            SYSTEM ALERT
          </div>
          <div className="text-white/50 text-xs mb-4">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>
          <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <span>🌟</span>
            GROWTH SYSTEM ACTIVATED
          </h3>
        </div>

        {/* Message */}
        <div className="text-center space-y-4 mb-6">
          <p className="text-text-secondary">
            A powerful transformation opportunity has appeared
          </p>
          <p className="text-white font-medium">
            This window of opportunity closes in <span className="text-accent-shadow font-bold">{timeLeft}s</span>
          </p>
          <p className="text-text-tertiary text-sm">
            Missing this chance means staying at your current level.
          </p>
        </div>

        {/* Question */}
        <div className="text-center mb-6">
          <p className="text-white font-semibold">
            Will you accept the awakening?
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleJoin}
            className="w-full bg-accent-shadow text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-shadow/90 transition-all duration-300 flex items-center justify-center gap-2 animate-shadow-pulse"
          >
            <span>⚡</span>
            Yes - Download App
          </button>
          
          <button
            onClick={handleClose}
            className="w-full border border-accent-shadow/30 text-text-secondary px-6 py-2 rounded-xl font-medium hover:bg-accent-shadow/10 hover:text-accent-shadow transition-all duration-300"
          >
            No - Stay Asleep
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemNotification;
