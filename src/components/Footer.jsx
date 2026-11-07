import React from 'react';
import { Code2, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1120] border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white mb-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-500/40 shadow-sm flex-shrink-0">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span>
                YADHU<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="text-sm text-slate-400">
              {personalInfo.name} — {personalInfo.title}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind CSS & modern web standards
          </p>
        </div>

      </div>
    </footer>
  );
}
