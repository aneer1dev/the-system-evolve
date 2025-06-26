
import React from 'react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Philosophy Student",
      level: 18,
      quote: "Finally, systematic philosophical growth measurement",
      growth: "Mental C→A, Spiritual D→B+",
      avatar: "MC",
      color: "accent-electric"
    },
    {
      name: "Sarah Rodriguez", 
      role: "Software Engineer",
      level: 23,
      quote: "Gamification makes ancient wisdom actionable",
      growth: "Physical B→A, Social C→B+",
      avatar: "SR",
      color: "accent-growth"
    },
    {
      name: "Elena Kim",
      role: "Meditation Teacher", 
      level: 31,
      quote: "Shadow work revealed patterns I couldn't see",
      growth: "Emotional D→A, Spiritual B→A+",
      avatar: "EK",
      color: "accent-wisdom"
    }
  ];

  const stats = [
    { number: "3,247", label: "Waitlist Members", color: "accent-electric" },
    { number: "89%", label: "Report Meaningful Growth", color: "accent-growth" },
    { number: "12", label: "Average Level Gain (first month)", color: "accent-wisdom" }
  ];

  return (
    <section id="community" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent-energy/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-growth/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Join <span className="gradient-text">The Systematic</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Real growth from real users
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-bg-elevated/30 glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-500 animate-float"
              style={{animationDelay: `${index * 0.5}s`}}
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{background: `var(--${testimonial.color})`}}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-text-tertiary text-sm">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span 
                      className="text-xs font-medium px-2 py-1 rounded-full"
                      style={{
                        background: `var(--${testimonial.color})`,
                        color: 'var(--bg-primary)'
                      }}
                    >
                      Level {testimonial.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-4">
                <p className="text-lg text-white leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Growth Metrics */}
              <div className="bg-bg-secondary/50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-text-tertiary mb-2">Growth Achieved</h4>
                <p 
                  className="text-sm font-medium"
                  style={{color: `var(--${testimonial.color})`}}
                >
                  {testimonial.growth}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-bg-elevated/20 glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-500 animate-float"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div 
                className="text-5xl lg:text-6xl font-bold mb-4"
                style={{color: `var(--${stat.color})`}}
              >
                {stat.number}
              </div>
              <p className="text-text-secondary text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-text-secondary mb-8">
            Ready to join the systematic evolution?
          </p>
          <button className="bg-accent-electric text-bg-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-electric/90 transition-all duration-300 flex items-center justify-center gap-3 mx-auto group animate-pulse-glow">
            Begin Your Journey
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
