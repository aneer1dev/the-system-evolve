import React, { useState } from 'react';

const AppPreviewSection = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', name: 'Command', icon: '⚡' },
    { id: 'progress', name: 'Evolution', icon: '📈' },
    { id: 'quests', name: 'Quests', icon: '⚔️' },
    { id: 'guild', name: 'Guild', icon: '🛡️' },
    { id: 'profile', name: 'Hunter', icon: '👤' }
  ];

  const screenContent = {
    home: {
      title: "Command Center",
      content: (
        <div className="space-y-6">
          <div className="bg-accent-shadow/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Level 12</div>
            <div className="text-accent-shadow">Alex Chen</div>
            <div className="text-text-tertiary text-sm">Shadow Hunter</div>
          </div>
          
          <div className="bg-bg-elevated/50 rounded-xl p-4">
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-accent-mana">8.2/10</div>
              <div className="text-text-tertiary text-sm">Overall Score</div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['Physical', 'Mental', 'Emotional', 'Social', 'Financial', 'Spiritual'].map((domain, index) => (
                <div key={domain} className="text-center">
                  <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-accent-shadow/30 flex items-center justify-center">
                    <div className="text-xs text-white">{7 + index * 0.2}</div>
                  </div>
                  <div className="text-xs text-text-tertiary">{domain}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    progress: {
      title: "Evolution Analytics",
      content: (
        <div className="space-y-4">
          <div className="bg-bg-elevated/50 rounded-xl p-4">
            <h4 className="text-white font-semibold mb-3">30-Day Growth</h4>
            <div className="h-32 bg-accent-shadow/10 rounded-lg flex items-end justify-around p-2">
              {[6, 8, 7, 9, 8, 10, 9].map((height, index) => (
                <div
                  key={index}
                  className="bg-accent-shadow rounded-sm w-4 transition-all duration-500"
                  style={{ height: `${height * 10}%` }}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-accent-mana/20 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-accent-mana">+2.3</div>
              <div className="text-xs text-text-tertiary">Avg Increase</div>
            </div>
            <div className="bg-accent-strength/20 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-accent-strength">94%</div>
              <div className="text-xs text-text-tertiary">Quest Rate</div>
            </div>
          </div>
        </div>
      )
    },
    quests: {
      title: "Daily Quests",
      content: (
        <div className="space-y-3">
          {[
            { task: "Morning Meditation", xp: 50, completed: true },
            { task: "Read 30 minutes", xp: 40, completed: true },
            { task: "Exercise 45 min", xp: 60, completed: false },
            { task: "Connect with friend", xp: 30, completed: false }
          ].map((quest, index) => (
            <div key={index} className={`p-3 rounded-xl ${quest.completed ? 'bg-accent-mana/20' : 'bg-bg-elevated/50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${quest.completed ? 'bg-accent-mana' : 'bg-text-tertiary/30'}`} />
                  <span className={`text-sm ${quest.completed ? 'text-white line-through' : 'text-text-secondary'}`}>
                    {quest.task}
                  </span>
                </div>
                <span className="text-accent-strength text-xs">+{quest.xp} XP</span>
              </div>
            </div>
          ))}
          
          <div className="bg-accent-shadow/20 rounded-xl p-3 text-center">
            <div className="text-accent-shadow font-semibold">🔥 5 Day Streak</div>
          </div>
        </div>
      )
    },
    guild: {
      title: "Shadow Guild",
      content: (
        <div className="space-y-4">
          <div className="bg-bg-elevated/50 rounded-xl p-4 text-center">
            <div className="text-lg font-bold text-white mb-2">Shadow Hunters</div>
            <div className="text-accent-shadow">247 Members</div>
            <div className="text-text-tertiary text-sm">Rank #12 Global</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-semibold text-white mb-2">Recent Activity</div>
            {[
              "Alex completed Physical quest",
              "Sarah unlocked Mental milestone", 
              "Mike joined the guild"
            ].map((activity, index) => (
              <div key={index} className="bg-bg-elevated/30 rounded-lg p-2">
                <div className="text-xs text-text-secondary">{activity}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    profile: {
      title: "Hunter Profile",
      content: (
        <div className="space-y-4">
          <div className="bg-accent-shadow/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-accent-shadow rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div className="text-white font-bold">Alex Chen</div>
            <div className="text-accent-shadow">Level 12 Shadow Hunter</div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-bg-elevated/50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-accent-mana">1,247</div>
              <div className="text-xs text-text-tertiary">Total XP</div>
            </div>
            <div className="bg-bg-elevated/50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-accent-strength">23</div>
              <div className="text-xs text-text-tertiary">Achievements</div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="preview" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images5.alphacoders.com/137/1372162.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            See The System <span className="shadow-gradient-text">in Action</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Interactive preview of your personal evolution platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Interactive Dashboard */}
            <div className="space-y-8">
              <div className="bg-bg-elevated/30 shadow-glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Interactive Dashboard
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Navigate through different aspects of your growth journey. 
                  Each tab provides unique insights and tools for systematic improvement.
                </p>
                
                {/* Tab Description */}
                <div className="space-y-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-accent-shadow text-white'
                          : 'bg-bg-elevated/50 text-text-secondary hover:bg-bg-elevated/70'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{tab.icon}</span>
                        <span className="font-medium">{tab.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - iPhone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* iPhone Frame */}
                <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-bg-primary rounded-[2.5rem] overflow-hidden relative">
                    
                    {/* Screen Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-white text-sm font-semibold">9:41</span>
                        <span className="text-white text-sm">100%</span>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 overflow-hidden">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {screenContent[activeTab].title}
                        </h3>
                        {screenContent[activeTab].content}
                      </div>

                      {/* Bottom Navigation */}
                      <div className="mt-6 bg-bg-elevated/50 rounded-2xl p-3">
                        <div className="flex justify-around">
                          {tabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`p-3 rounded-xl transition-all duration-300 ${
                                activeTab === tab.id
                                  ? 'bg-accent-shadow text-white'
                                  : 'text-text-tertiary hover:text-accent-shadow'
                              }`}
                            >
                              <div className="text-lg">{tab.icon}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;