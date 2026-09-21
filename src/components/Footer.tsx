import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import logo from '../../asset/logo-Cjsy4UPV.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-white/[0.08] text-slate-400 font-sans pt-16 pb-12 overflow-hidden">
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-cyan-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start pr-4">
            
            {/* Logo */}
            <a href="#home" className="flex items-center mb-4 group" aria-label="SpiderLap home">
              <img
                src={logo}
                alt="SpiderLap logo"
                className="h-14 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Building digital products, AI systems, and scalable technology for ambitious businesses. From idea to AI-powered product.
            </p>

            {/* Live Operational Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Operational</span>
              <span className="text-slate-600">·</span>
              <span className="text-cyan-400">v2.6-edge</span>
            </div>

          </div>

          {/* Col 1: Solutions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">AI Products & Agents</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">SaaS Platforms</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">Web Applications</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">Mobile Applications</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">Business Automation</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">Custom Enterprise Software</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#why-us" className="hover:text-cyan-300 transition-colors">About SpiderLap</a>
              </li>
              <li>
                <a href="#work" className="hover:text-cyan-300 transition-colors">Our Work & Case Studies</a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition-colors">Engineering Process</a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-300 transition-colors">Internal Products & R&D</a>
              </li>
              <li>
                <a href="#tech" className="hover:text-cyan-300 transition-colors">2026 Tech Stack</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact Architects</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@spiderlap.com"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>contact@spiderlap.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Security Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 SpiderLap Inc. All rights reserved. Engineering Digital Products That Move Businesses Forward.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Architecture</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Security Center</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

