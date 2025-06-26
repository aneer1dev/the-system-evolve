
import React from 'react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: "Jinwoo",
      title: "Shadow Monarch",
      level: "S-Rank Hunter",
      quote: "Let's get stronger together! The System transformed my approach to growth.",
      growth: "Physical E→S, Mental D→S+",
      avatar: "https://i.pinimg.com/564x/9a/9b/4c/9a9b4c8e9c5f4a4b4c8a9b5c4d8e9f4a.jpg", // Jinwoo avatar
      bgColor: "bg-accent-shadow/20",
      borderColor: "border-accent-shadow"
    },
    {
      name: "Hae-In",
      title: "Blade Master",
      level: "S-Rank Hunter", 
      quote: "Don't be late for the training! Systematic growth beats random effort every time.",
      growth: "Physical B→S, Social C→A+",
      avatar: "https://i.pinimg.com/564x/5c/8d/9e/5c8d9e4f5a6b7c8d9e0f1a2b3c4d5e6f.jpg", // Hae-In avatar
      bgColor: "bg-accent-mana/20",
      borderColor: "border-accent-mana"
    },
    {
      name: "Marcus Chen",
      title: "Philosophy Student",
      level: "Level 18",
      quote: "Finally, systematic philosophical growth measurement that actually works!",
      growth: "Mental C→A, Spiritual D→B+",
      avatar: "/api/placeholder/60/60",
      bgColor: "bg-accent-necromancy/20",
      borderColor: "border-accent-necromancy"
    }
  ];

  const stats = [
    { number: "3,247", label: "Shadow Hunters", color: "text-accent-shadow" },
    { number: "89%", label: "Report Meaningful Growth", color: "text-accent-mana" },
    { number: "12", label: "Average Rank Increase", color: "text-accent-strength" }
  ];

  return (
    <section id="community" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-72 h-72 bg-accent-mana/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-necromancy/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Join The <span className="shadow-gradient-text">Shadow Guild</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Real growth from real hunters
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`${testimonial.bgColor} shadow-glass rounded-2xl p-6 border-l-4 ${testimonial.borderColor} hover:scale-105 transition-all duration-300`}
            >
              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-accent-shadow/50"
                    onError={(e) => {
                      e.currentTarget.src = "/api/placeholder/60/60";
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-accent-strength text-bg-primary text-xs px-2 py-0.5 rounded-full font-bold">
                    {testimonial.level.includes('S-Rank') ? 'S' : testimonial.level.split(' ')[1]}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold">{testimonial.name}</h3>
                  <p className="text-accent-shadow text-sm font-medium">{testimonial.title}</p>
                  <p className="text-text-tertiary text-xs">{testimonial.level}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-4">
                <p className="text-text-secondary italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Growth Stats */}
              <div className="bg-bg-elevated/50 rounded-xl p-3">
                <div className="text-xs text-text-tertiary mb-1">Growth Achieved</div>
                <div className="text-sm font-medium text-accent-mana">
                  {testimonial.growth}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-bg-elevated to-bg-secondary rounded-3xl p-8 shadow-glass border border-accent-shadow/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color} animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guild Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: "🛡️", title: "Guild Support", desc: "Weekly check-ins with fellow hunters" },
            { icon: "🏆", title: "Leaderboards", desc: "Compete in friendly growth challenges" },
            { icon: "📈", title: "Progress Sharing", desc: "Celebrate wins with the community" },
            { icon: "🎯", title: "Group Quests", desc: "Team challenges for bonus XP" }
          ].map((feature, index) => (
            <div key={feature.title} className="bg-bg-elevated/30 rounded-xl p-4 text-center hover:bg-bg-elevated/50 transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-text-tertiary text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
