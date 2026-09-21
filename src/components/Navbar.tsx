import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';
import logo from '../../asset/logo-Cjsy4UPV.png';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'solutions', 'products', 'services', 'ai-architecture', 'saas', 'process', 'why-us', 'work', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'AI Layer', href: '#ai-architecture' },
    { label: 'SaaS Engine', href: '#saas' },
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Why Us', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-bg/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="SpiderLap home"
          >
            <img
              src={logo}
              alt="SpiderLap logo"
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.2)]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenProjectModal}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white overflow-hidden transition-all duration-300 border border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="relative font-medium tracking-wide">Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenProjectModal}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] p-4 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-sm font-medium text-slate-200 border border-white/5"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="mt-3 w-full py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

