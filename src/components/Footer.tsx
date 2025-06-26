import React from 'react';

const Footer = () => {
  const footerLinks = {
    Philosophy: [
      { name: 'Our Approach', href: '#philosophy' },
      { name: 'Scientific Method', href: '#' },
      { name: 'Ancient Wisdom', href: '#' },
      { name: 'Modern Tools', href: '#' }
    ],
    Community: [
      { name: 'Join Guild', href: '#community' },
      { name: 'Discord', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Discord', href: '#', icon: '💬' },
    { name: 'GitHub', href: '#', icon: '🔗' },
    { name: 'Blog', href: '#', icon: '📝' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/32/ec/1c/32ec1c5b24f02a28280ada5ebb550d4e.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          transform: 'translateY(-2%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <span className="text-2xl font-bold text-white">The System</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Systematic personal evolution through philosophical precision and modern measurement.
            </p>

            <div className="text-sm text-gray-500">
              <p className="mb-2">thesystem.co.ai</p>
              <p>Launching 2025</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright & Quote */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm mb-2">
                © 2025 The System. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm italic">
                "You are not this body. You are not your mind. You are the eternal Witness — the Self (Atman) — untouched by birth, pain, or death." — Advaita Vedanta
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;