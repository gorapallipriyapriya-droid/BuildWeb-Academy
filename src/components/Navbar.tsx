import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavSection } from '../types';
import { Search, Sun, Moon, User, Menu, X, Award, Map } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element brand wordmark */}
        <button
          onClick={() => handleNavClick('intro')}
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
        >
          WebCraft Academy
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.slice(0, 6).map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`whitespace-nowrap transition-colors py-1 ${
                currentSection === link.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white py-1">
              <span>More</span>
              <span className="text-[10px] text-slate-400">▾</span>
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-44 pt-2 shadow-lg">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1.5 space-y-0.5 text-xs shadow-xl">
                <button
                  onClick={() => handleNavClick('careers')}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Career Guidance
                </button>
                <button
                  onClick={() => handleNavClick('interview')}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Interview Prep
                </button>
                <button
                  onClick={() => handleNavClick('practice')}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Quizzes & Practice
                </button>
                <button
                  onClick={() => handleNavClick('resources')}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Curated Resources
                </button>
                <button
                  onClick={() => handleNavClick('forum')}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Student Forum
                </button>
                <div className="border-t border-slate-100 dark:border-slate-800 my-1" />
                <button
                  onClick={() => setIsSitemapOpen(true)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Sitemap & Schema</span>
                  <Map className="w-3 h-3 text-slate-400" />
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
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition"
            title="Search topics (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline px-1 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Student Dashboard button */}
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              currentSection === 'dashboard'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500 text-white font-mono tabular-nums">
              {completedLessons.length}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentSection === link.id
                  ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => { setIsCertificateOpen(true); setMobileMenuOpen(false); }}
              className="p-2 text-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              Certificate
            </button>
            <button
              onClick={() => { setIsSitemapOpen(true); setMobileMenuOpen(false); }}
              className="p-2 text-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              Sitemap & Schema
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
