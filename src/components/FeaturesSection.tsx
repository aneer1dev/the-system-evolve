
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Daily Quests",
      icon: "⚔️",
      description: "Gamified habit tracking with XP rewards and streak bonuses",
      color: "accent-electric"
    },
    {
      title: "Skill Trees", 
      icon: "🌳",
      description: "Unlock abilities with earned points across all life domains",
      color: "accent-growth"
    },
    {
      title: "Progress Analytics",
      icon: "📈", 
      description: "Beautiful growth visualizations and trend analysis",
      color: "accent-wisdom"
    },
    {
      title: "Shadow Work",
      icon: "🔮",
      description: "Private reflection space for deep introspection",
      color: "accent-energy"
    },
    {
      title: "Guild System",
      icon: "🛡️",
      description: "Connect with like-minded individuals for accountability",
      color: "accent-gold"
    },
    {
      title: "Achievement System",
      icon: "🏆",
      description: "Celebrate breakthrough moments and major milestones",
      color: "accent-electric"
    }
  ];

  // Mock data for the assessment chart - 6 domains
  const domainScores = [
    { domain: 'Physical', score: 7.2 },
    { domain: 'Mental', score: 8.5 },
    { domain: 'Emotional', score: 6.8 },
    { domain: 'Social', score: 7.9 },
    { domain: 'Financial', score: 6.5 },
    { domain: 'Spiritual', score: 7.3 }
  ];

  const CircularProgress = ({ score, domain, index }) => {
    const colors = [
      'accent-electric', 'accent-energy', 'accent-growth', 
      'accent-wisdom', 'accent-gold', 'accent-mana'
    ];
    const percentage = (score / 10) * 100;
    const strokeDasharray = 2 * Math.PI * 28; // 2 * PI * radius
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;
    
    return (
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-2">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-bg-elevated"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke={`var(--${colors[index]})`}
              strokeWidth="4"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
              style={{
                animationDelay: `${index * 0.2}s`,
                strokeLinecap: 'round'
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white">{score}</span>
          </div>
        </div>
        <div className="text-xs text-text-tertiary">{domain}</div>
      </div>
    );
  };

  return (
    <section id="features" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images4.alphacoders.com/136/1369363.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-electric/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-energy/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Your Personal{' '}
            <span className="gradient-text">Evolution Engine</span>
          </h2>
        </div>

        {/* Main Feature - Assessment Matrix */}
        <div className="mb-16">
          <div className="bg-bg-elevated/50 glass-effect rounded-3xl p-8 lg:p-12 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent-electric/20 text-accent-electric px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-accent-electric rounded-full animate-pulse"></span>
                  Live Assessment
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold">
                  6-Domain Life Assessment
                </h3>
                
                <p className="text-xl text-text-secondary leading-relaxed">
                  Get real-time insights into your life balance with our comprehensive 
                  assessment system. Track progress across all domains and identify 
                  areas for focused improvement.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-electric rounded-full"></div>
                    <span className="text-text-secondary">Real-time scoring algorithm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-growth rounded-full"></div>
                    <span className="text-text-secondary">Personalized improvement suggestions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-wisdom rounded-full"></div>
                    <span className="text-text-secondary">Historical trend analysis</span>
                  </div>
                </div>
              </div>

              {/* Right - Interactive Chart */}
              <div className="relative">
                <div className="bg-bg-secondary/80 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-accent-electric mb-2">7.5</div>
                    <div className="text-text-tertiary">Overall Score</div>
                  </div>
                  
                  {/* Domain Progress Rings */}
                  <div className="grid grid-cols-2 gap-4">
                    {domainScores.map((item, index) => (
                      <CircularProgress
                        key={item.domain}
                        score={item.score}
                        domain={item.domain}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-bg-elevated/30 glass-effect rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 group-hover:h-2"
                style={{background: `var(--${feature.color})`}}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
