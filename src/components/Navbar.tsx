import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavSection } from '../types';
import { Search, Sun, Moon, User, Menu, X, Award, Map, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { currentSection, setCurrentSection, theme, toggleTheme, setIsSearchOpen, setIsCertificateOpen, setIsSitemapOpen, completedLessons } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavSection; label: string }[] = [
    { id: 'intro', label: 'Overview' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'tools', label: 'Tools' },
    { id: 'process', label: 'Process' },
    { id: 'projects', label: 'Projects' },
    { id: 'playground', label: 'Playground' },
    { id: 'interview', label: 'Interview' },
    { id: 'practice', label: 'Practice' }
  ];

  const handleNavClick = (section: NavSection) => {
    setCurrentSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000000]/85 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element brand wordmark */}
        <button
          onClick={() => handleNavClick('intro')}
          className="group relative flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-colors whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all">
            <span className="font-mono text-sm font-black">&lt;/&gt;</span>
          </div>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-blue-300 bg-clip-text text-transparent font-bold">
            WebCraft Academy
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-zinc-400">
          {navLinks.slice(0, 6).map((link) => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition text-zinc-400">
              <span>More</span>
              <span className="text-[10px] text-zinc-500 transition-transform group-hover:rotate-180">▾</span>
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-52 pt-2">
              <div className="bg-[#0A0A0A] rounded-xl p-1.5 space-y-0.5 text-xs shadow-2xl border border-white/[0.08] backdrop-blur-2xl">
                <button
                  onClick={() => handleNavClick('careers')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] text-zinc-300 hover:text-blue-400 transition"
                >
                  Career Guidance & Salaries
                </button>
                <button
                  onClick={() => handleNavClick('interview')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] text-zinc-300 hover:text-purple-400 transition"
                >
                  Interview Prep & Coding
                </button>
                <button
                  onClick={() => handleNavClick('practice')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] text-zinc-300 hover:text-cyan-400 transition"
                >
                  Quizzes & Assignments
                </button>
                <button
                  onClick={() => handleNavClick('resources')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] text-zinc-300 hover:text-emerald-400 transition"
                >
                  Curated Resources
                </button>
                <button
                  onClick={() => handleNavClick('forum')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] text-zinc-300 hover:text-blue-400 transition"
                >
                  Student Community Forum
                </button>
                <div className="border-t border-white/[0.08] my-1" />
                <button
                  onClick={() => setIsSitemapOpen(true)}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] text-zinc-300 flex items-center justify-between group transition"
                >
                  <span>Sitemap & Architecture</span>
                  <Map className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2">
          {/* Quick Search trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400 bg-[#18181B] hover:bg-[#202024] hover:text-white rounded-lg border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition"
            title="Search topics (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline px-1 py-0.5 text-[10px] font-mono bg-black/60 border border-white/10 rounded text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" /> : <Moon className="w-4 h-4 text-zinc-300 hover:-rotate-12 transition-transform" />}
          </button>

          {/* Student Dashboard button with neon glow */}
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
              currentSection === 'dashboard'
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-1 ring-blue-400/50'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20 text-white font-mono tabular-nums">
              {completedLessons.length}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/[0.08] bg-[#0A0A0A] px-4 py-3 space-y-1 overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentSection === link.id
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-zinc-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => { setIsCertificateOpen(true); setMobileMenuOpen(false); }}
                className="p-2 text-center rounded-lg border border-white/[0.08] bg-[#18181B] text-zinc-300 font-medium hover:text-white"
              >
                Certificate
              </button>
              <button
                onClick={() => { setIsSitemapOpen(true); setMobileMenuOpen(false); }}
                className="p-2 text-center rounded-lg border border-white/[0.08] bg-[#18181B] text-zinc-300 font-medium hover:text-white"
              >
                Sitemap & Schema
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

