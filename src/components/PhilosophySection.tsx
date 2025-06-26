
import React, { useState, useEffect } from 'react';

const PhilosophySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const philosophies = [
    {
      domain: "Physical",
      title: "Body as Foundation",
      icon: "💪",
      quote: "Take care of your body. It's the only place you have to live.",
      author: "Jim Rohn",
      description: "Track workouts, nutrition, and vitality. Your physical form is your vessel for greatness.",
      feature: "Fitness tracking, meal logging, and energy monitoring",
      color: "accent-strength",
      bgColor: "bg-accent-strength/10",
      borderColor: "border-l-accent-strength"
    },
    {
      domain: "Mental",
      title: "Mind Over Matter",
      icon: "🧠",
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
      description: "Develop focus, learning capacity, and cognitive strength through systematic practice.",
      feature: "Reading progress, focus sessions, and learning streaks",
      color: "accent-shadow",
      bgColor: "bg-accent-shadow/10",
      borderColor: "border-l-accent-shadow"
    },
    {
      domain: "Emotional",
      title: "Master Your Emotions",
      icon: "❤️",
      quote: "Between stimulus and response there is a space. In that space is our power.",
      author: "Viktor Frankl",
      description: "Build emotional intelligence and resilience through mindful awareness.",
      feature: "Mood tracking, stress management, and emotional pattern recognition",
      color: "accent-danger",
      bgColor: "bg-accent-danger/10",
      borderColor: "border-l-accent-danger"
    },
    {
      domain: "Social",
      title: "Human Connection",
      icon: "🤝",
      quote: "We are what we repeatedly do. Excellence is not an act, but a habit.",
      author: "Aristotle",
      description: "Strengthen relationships and build meaningful connections systematically.",
      feature: "Relationship tracking, social goals, and communication skills",
      color: "accent-mana",
      bgColor: "bg-accent-mana/10",
      borderColor: "border-l-accent-mana"
    },
    {
      domain: "Financial",
      title: "Economic Mastery",
      icon: "💰",
      quote: "Rich people plan for three generations. Poor people plan for Saturday night.",
      author: "Gloria Steinem",
      description: "Build wealth through disciplined tracking and strategic financial habits.",
      feature: "Expense tracking, investment monitoring, and wealth building goals",
      color: "accent-strength",
      bgColor: "bg-accent-strength/10",
      borderColor: "border-l-accent-strength"
    },
    {
      domain: "Spiritual",
      title: "Inner Awakening",
      icon: "🕯️",
      quote: "The spiritual journey is individual, highly personal. It can't be organized or regulated.",
      author: "Krishnamurti",
      description: "Cultivate inner peace, purpose, and connection to something greater.",
      feature: "Meditation tracking, gratitude practice, and purpose alignment",
      color: "accent-necromancy",
      bgColor: "bg-accent-necromancy/10",
      borderColor: "border-l-accent-necromancy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % philosophies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentPhil = philosophies[currentIndex];

  return (
    <section id="philosophy" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent-necromancy/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent-mana/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The Philosophy Behind{' '}
            <span className="shadow-gradient-text">The System</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Ancient wisdom meets modern measurement
          </p>
        </div>

        {/* Main Philosophy Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            key={currentIndex}
            className={`
              ${currentPhil.bgColor} shadow-glass rounded-3xl p-12 
              border-l-4 ${currentPhil.borderColor}
              transition-all duration-1000 transform
              animate-fade-in
            `}
          >
            {/* Domain Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">{currentPhil.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentPhil.domain} Domain
                </h3>
                <h4 className="text-xl text-accent-shadow font-semibold">
                  {currentPhil.title}
                </h4>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mb-8">
              <p className="text-2xl italic text-text-secondary mb-4 leading-relaxed">
                "{currentPhil.quote}"
              </p>
              <cite className={`text-lg font-medium text-${currentPhil.color}`}>
                — {currentPhil.author}
              </cite>
            </blockquote>

            {/* Description & Feature */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Philosophy</h5>
                <p className="text-text-secondary leading-relaxed">
                  {currentPhil.description}
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">App Features</h5>
                <p className="text-text-secondary leading-relaxed">
                  {currentPhil.feature}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Navigation Dots */}
        <div className="flex justify-center gap-4 mb-8">
          {philosophies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-shadow scale-125' 
                  : 'bg-accent-shadow/30 hover:bg-accent-shadow/60'
              }`}
            />
          ))}
        </div>

        {/* Domain Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {philosophies.map((phil, index) => (
            <button
              key={phil.domain}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex 
                  ? `${phil.bgColor} scale-105 shadow-lg` 
                  : 'bg-bg-elevated/30 hover:bg-bg-elevated/50'
              }`}
            >
              <div className="text-2xl mb-2">{phil.icon}</div>
              <div className="text-sm font-medium text-white">{phil.domain}</div>
            </button>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-tertiary italic">
            "The unexamined life is not worth living." — Socrates
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
