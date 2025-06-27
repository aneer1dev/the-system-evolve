
import React, { useState } from 'react';
import { Zap, TrendingUp, Trophy, Target, Users, Brain } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Physical Evolution",
      description: "Track workouts, nutrition, and energy levels. Monitor your body's transformation with precision.",
      color: "accent-strength",
      progress: 85
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Mastery",
      description: "Develop focus, learning capacity, and cognitive strength through systematic practice.",
      color: "accent-shadow",
      progress: 78
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Emotional Intelligence",
      description: "Build resilience and emotional awareness through mindful tracking and reflection.",
      color: "accent-danger",
      progress: 92
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Connections",
      description: "Strengthen relationships and build meaningful connections systematically.",
      color: "accent-mana",
      progress: 73
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Growth",
      description: "Track expenses, investments, and build wealth through disciplined habits.",
      color: "accent-necromancy",
      progress: 67
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Spiritual Awakening",
      description: "Cultivate inner peace, purpose, and connection to something greater.",
      color: "accent-energy",
      progress: 88
    }
  ];

  const assessmentScores = [
    { domain: "Physical", score: 7, maxScore: 10, color: "accent-strength" },
    { domain: "Mental", score: 8, maxScore: 10, color: "accent-shadow" },
    { domain: "Emotional", score: 6, maxScore: 10, color: "accent-danger" },
    { domain: "Social", score: 9, maxScore: 10, color: "accent-mana" },
    { domain: "Financial", score: 5, maxScore: 10, color: "accent-necromancy" },
    { domain: "Spiritual", score: 7, maxScore: 10, color: "accent-energy" }
  ];

  return (
    <section id="features" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Optimized Background Image */}
      <OptimizedImage
        src="https://images4.alphacoders.com/136/1369363.jpeg"
        alt="Features Background"
        className="absolute inset-0 opacity-10"
      />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-strength/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-shadow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Your Personal <span className="shadow-gradient-text">Evolution Engine</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary">
            Master all 6 life domains with precision tracking and systematic improvement
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="shadow-glass rounded-2xl p-8 hover:bg-bg-elevated/50 transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-16 h-16 rounded-xl bg-${feature.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${feature.color}`}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-tertiary">Progress</span>
                  <span className={`text-${feature.color} font-semibold`}>
                    {feature.progress}%
                  </span>
                </div>
                <div className="w-full bg-bg-primary/50 rounded-full h-2">
                  <div
                    className={`bg-${feature.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: hoveredFeature === index ? `${feature.progress}%` : '0%'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Assessment Demo */}
        <div className="shadow-glass rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Live Assessment
            </h3>
            <p className="text-xl text-text-secondary">
              6-Domain Life Assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentScores.map((item, index) => {
              const percentage = (item.score / item.maxScore) * 100;
              const circumference = 2 * Math.PI * 45;
              const strokeDasharray = circumference;
              const strokeDashoffset = circumference - (percentage / 100) * circumference;

              return (
                <div key={item.domain} className="text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Background Circle */}
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-bg-primary/50"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={`var(--${item.color})`}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    {/* Score Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`text-2xl font-bold text-${item.color}`}>
                          {item.score}
                        </div>
                        <div className="text-xs text-text-tertiary">
                          /{item.maxScore}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.domain}
                  </h4>
                  
                  <div className={`text-sm text-${item.color} font-medium`}>
                    {item.score >= 8 ? 'S-Rank' : item.score >= 6 ? 'A-Rank' : item.score >= 4 ? 'B-Rank' : 'C-Rank'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
