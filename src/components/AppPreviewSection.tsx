
import React, { useState } from 'react';

const AppPreviewSection = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const screens = [
    {
      id: 'dashboard',
      title: 'Command',
      content: (
        <div className="p-6 space-y-6">
          {/* User Profile */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-electric to-accent-wisdom rounded-full flex items-center justify-center">
              <span className="text-white text-lg">AC</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Alex Chen</h3>
              <p className="text-text-tertiary text-sm">Level 12</p>
            </div>
          </div>

          {/* Overall Score */}
          <div className="text-center bg-bg-elevated/50 rounded-2xl p-6">
            <div className="text-4xl font-bold text-accent-electric mb-2">8.2</div>
            <div className="text-text-tertiary">Overall Score</div>
          </div>

          {/* Domain Progress */}
          <div className="space-y-3">
            <h4 className="text-white font-medium">Today's Focus</h4>
            {['Physical', 'Mental', 'Social'].map((domain, index) => (
              <div key={domain} className="flex items-center justify-between p-3 bg-bg-elevated/30 rounded-xl">
                <span className="text-text-secondary">{domain}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-bg-elevated rounded-full">
                    <div 
                      className="h-full bg-accent-electric rounded-full"
                      style={{width: `${70 + index * 10}%`}}
                    ></div>
                  </div>
                  <span className="text-accent-electric text-sm">{7 + index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      title: 'Analytics',
      content: (
        <div className="p-6 space-y-6">
          <h3 className="text-white font-semibold">30-Day Growth</h3>
          
          {/* Mock Chart */}
          <div className="bg-bg-elevated/50 rounded-2xl p-4 h-40 flex items-end justify-between">
            {[6.2, 6.5, 6.8, 7.1, 7.4, 7.8, 8.2].map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className="w-6 bg-accent-electric rounded-t"
                  style={{height: `${value * 8}px`}}
                ></div>
                <span className="text-xs text-text-tertiary">{value}</span>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="text-white font-medium">Recent Achievements</h4>
            <div className="bg-accent-growth/20 p-3 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🏆</span>
                <span className="text-white font-medium">Consistency Master</span>
              </div>
              <p className="text-text-tertiary text-sm">7-day streak across all domains</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'quests',
      title: 'Quests',
      content: (
        <div className="p-6 space-y-6">
          <h3 className="text-white font-semibold">Daily Quests</h3>
          
          <div className="space-y-3">
            {[
              { task: 'Complete workout', xp: 50, done: true },
              { task: 'Read for 30 minutes', xp: 30, done: true },
              { task: 'Meditate 10 minutes', xp: 25, done: false },
              { task: 'Social interaction', xp: 40, done: false }
            ].map((quest, index) => (
              <div key={index} className={`p-3 rounded-xl ${quest.done ? 'bg-accent-growth/20' : 'bg-bg-elevated/30'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded border-2 ${quest.done ? 'bg-accent-growth border-accent-growth' : 'border-text-tertiary'}`}>
                      {quest.done && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span className={`${quest.done ? 'text-white line-through' : 'text-text-secondary'}`}>
                      {quest.task}
                    </span>
                  </div>
                  <span className="text-accent-gold text-sm font-medium">+{quest.xp} XP</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-elevated/50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">Today's Progress</span>
              <span className="text-accent-electric">105/145 XP</span>
            </div>
            <div className="w-full h-2 bg-bg-elevated rounded-full">
              <div className="w-3/4 h-full bg-accent-electric rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'guild',
      title: 'Guild',
      content: (
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h3 className="text-white font-semibold">Systematic Growth Guild</h3>
            <p className="text-text-tertiary text-sm">47 members</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-medium">Recent Activity</h4>
            {[
              { user: 'Sarah', action: 'completed Physical domain', time: '2h' },
              { user: 'Marcus', action: 'unlocked new skill', time: '4h' },
              { user: 'Elena', action: 'started 7-day streak', time: '6h' }
            ].map((activity, index) => (
              <div key={index} className="p-3 bg-bg-elevated/30 rounded-xl">
                <p className="text-text-secondary text-sm">
                  <span className="text-white font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-text-tertiary text-xs">{activity.time} ago</p>
              </div>
            ))}
          </div>

          <div className="bg-accent-wisdom/20 p-4 rounded-xl">
            <h4 className="text-white font-medium mb-2">Guild Leaderboard</h4>
            <div className="space-y-2">
              {['You - Level 12', 'Sarah - Level 15', 'Marcus - Level 11'].map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm ${index === 0 ? 'text-accent-electric' : 'text-text-secondary'}`}>
                    #{index + 1} {member}
                  </span>
                  <span className="text-accent-gold text-xs">⭐</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'profile',
      title: 'Profile',
      content: (
        <div className="p-6 space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-accent-electric to-accent-wisdom rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">AC</span>
            </div>
            <h3 className="text-white font-semibold">Alex Chen</h3>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-accent-electric">Level 12</span>
              <span className="text-text-tertiary">•</span>
              <span className="text-text-tertiary">1,247 XP</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium">Achievement Collection</h4>
            <div className="grid grid-cols-3 gap-3">
              {['🏆', '⚡', '🎯', '🌟', '🔥', '💪'].map((achievement, index) => (
                <div key={index} className="bg-bg-elevated/30 p-3 rounded-xl text-center">
                  <div className="text-2xl mb-1">{achievement}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-elevated/50 p-4 rounded-xl">
            <h4 className="text-white font-medium mb-3">Level Progress</h4>
            <div className="flex items-center justify-between mb-2">
              <span className="text-text-secondary text-sm">Level 12</span>
              <span className="text-text-secondary text-sm">Level 13</span>
            </div>
            <div className="w-full h-2 bg-bg-elevated rounded-full">
              <div className="w-2/3 h-full bg-gradient-to-r from-accent-electric to-accent-wisdom rounded-full"></div>
            </div>
            <p className="text-text-tertiary text-xs mt-2">753 XP to next level</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="preview" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-wisdom/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            See <span className="gradient-text">The System</span> in Action
          </h2>
        </div>

        {/* iPhone Mockup */}
        <div className="max-w-sm mx-auto">
          <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
            {/* iPhone Frame */}
            <div className="bg-black rounded-[2.5rem] overflow-hidden">
              {/* Status Bar */}
              <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-sm">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="bg-bg-primary h-[600px] relative">
                {/* Dynamic Content */}
                <div className="h-[520px] overflow-hidden">
                  {screens.find(screen => screen.id === activeScreen)?.content}
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-bg-elevated/90 backdrop-blur-sm">
                  <div className="flex justify-around py-3">
                    {screens.map((screen) => (
                      <button
                        key={screen.id}
                        onClick={() => setActiveScreen(screen.id)}
                        className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                          activeScreen === screen.id 
                            ? 'text-accent-electric bg-accent-electric/20' 
                            : 'text-text-tertiary hover:text-accent-electric'
                        }`}
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          {screen.id === 'dashboard' && '📊'}
                          {screen.id === 'analytics' && '📈'}
                          {screen.id === 'quests' && '⚔️'}
                          {screen.id === 'guild' && '🛡️'}
                          {screen.id === 'profile' && '👤'}
                        </div>
                        <span className="text-xs font-medium">{screen.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent-electric/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Tracking</h3>
            <p className="text-text-secondary">Live updates across all life domains</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent-growth/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Gamified Progress</h3>
            <p className="text-text-secondary">Level up with every improvement</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent-wisdom/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
            <p className="text-text-secondary">Connect with fellow improvers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
