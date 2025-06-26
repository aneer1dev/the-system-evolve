
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
    <footer className="bg-bg-primary border-t border-bg-elevated/50 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-electric to-accent-wisdom rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <span className="text-2xl font-bold text-white">The System</span>
            </div>
            
            <p className="text-text-secondary leading-relaxed max-w-sm">
              Systematic personal evolution through philosophical precision and modern measurement.
            </p>

            <div className="text-sm text-text-tertiary">
              <p className="mb-2">thesystem.co.ai</p>
              <p>Launching 2024</p>
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
                      className="text-text-secondary hover:text-accent-electric transition-colors"
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
        <div className="border-t border-bg-elevated/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright & Quote */}
            <div className="text-center lg:text-left">
              <p className="text-text-tertiary text-sm mb-2">
                © 2024 The System. All rights reserved.
              </p>
              <p className="text-text-tertiary text-sm italic">
                "The unexamined life is not worth living." — Socrates
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-bg-elevated/50 hover:bg-accent-electric/20 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-electric transition-all duration-300 group"
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
