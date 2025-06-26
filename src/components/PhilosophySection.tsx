
import React from 'react';

const PhilosophySection = () => {
  const principles = [
    {
      title: "Measurement Creates Awareness",
      icon: "📊",
      quote: "What gets measured gets managed.",
      author: "Peter Drucker",
      description: "Transform abstract growth into trackable progress",
      color: "accent-electric",
      bgColor: "bg-accent-electric/10",
      borderColor: "border-l-accent-electric"
    },
    {
      title: "Systems Beat Motivation",
      icon: "🎯",
      quote: "We are what we repeatedly do.",
      author: "Aristotle", 
      description: "Structure trumps sporadic inspiration",
      color: "accent-growth",
      bgColor: "bg-accent-growth/10",
      borderColor: "border-l-accent-growth"
    },
    {
      title: "Balanced Evolution",
      icon: "⚖️",
      quote: "A sound mind in a sound body.",
      author: "Juvenal",
      description: "Holistic growth across all life domains",
      color: "accent-wisdom",
      bgColor: "bg-accent-wisdom/10", 
      borderColor: "border-l-accent-wisdom"
    },
    {
      title: "Continuous Improvement",
      icon: "🔄",
      quote: "The only constant is change.",
      author: "Heraclitus",
      description: "Adapt and evolve your approach systematically",
      color: "accent-energy",
      bgColor: "bg-accent-energy/10",
      borderColor: "border-l-accent-energy"
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent-wisdom/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent-growth/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The Philosophy Behind{' '}
            <span className="gradient-text">The System</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Ancient wisdom meets modern measurement
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`
                ${principle.bgColor} glass-effect rounded-3xl p-8 
                border-l-4 ${principle.borderColor}
                hover:scale-105 hover:shadow-2xl
                transition-all duration-500 group
                animate-float
              `}
              style={{
                animationDelay: `${index * 0.5}s`,
                clipPath: index % 2 === 0 
                  ? 'polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)'
                  : 'polygon(10% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%, 0% 20%)'
              }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {principle.title}
              </h3>

              {/* Quote */}
              <blockquote className="mb-4">
                <p className="text-lg italic text-text-secondary mb-2">
                  "{principle.quote}"
                </p>
                <cite className={`text-sm font-medium text-${principle.color}`}>
                  — {principle.author}
                </cite>
              </blockquote>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {principle.description}
              </p>

              {/* Hover Glow Effect */}
              <div 
                className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 
                  transition-opacity duration-500 pointer-events-none
                `}
                style={{
                  background: `var(--${principle.color})`,
                  filter: 'blur(20px)'
                }}
              ></div>
            </div>
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
