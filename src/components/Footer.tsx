import React from 'react';
import {  Mail, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kwierman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kwierman', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/kwierman', label: 'Twitter' },
    { icon: Mail, href: 'mailto:kwierman@gmail.com', label: 'Email' },
  ];

  const footerLinks = {
    Product: [
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'CV', path: '/cv' },
    ],
    Company: [
      { label: 'About', path: '/' },
      { label: 'Contact', path: '/contact' },
    ],
    Legal: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              DS
            </h3>
            <p className="text-sm text-foreground/60">
              Data scientist & software developer crafting insights from data.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground/50">
            © {currentYear} Data Scientist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;