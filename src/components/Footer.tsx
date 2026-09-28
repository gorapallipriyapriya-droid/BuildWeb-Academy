import React from 'react';
import { useApp } from '../context/AppContext';
import { NavSection } from '../types';
import { Award, Map, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentSection, setIsCertificateOpen, setIsSitemapOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (sec: NavSection) => {
    setCurrentSection(sec);
    scrollToTop();
  };

  return (
    <footer className="no-print mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <span className="text-base font-bold text-slate-900 dark:text-white">
              WebCraft Academy
            </span>
            <p className="leading-relaxed text-slate-500">
              An open, comprehensive educational curriculum teaching students to design, develop, test, and ship complete modern websites from scratch.
            </p>
            <div className="text-[11px] text-slate-400">
              Free educational platform · 2026 Edition
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Learning Modules
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-600">Web Fundamentals & DNS</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-600">Semantic HTML5 & Accessibility</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-600">CSS3 Flexbox & Grid Layouts</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-600">JavaScript ES6+ & Fetch APIs</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-600">React, Next.js & Server Components</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-600">Node.js, Express & Databases</button></li>
            </ul>
          </div>

          {/* Hands-on Tools & Practice */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Hands-On Engineering
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => navigateTo('playground')} className="hover:text-blue-600">Live Code Playground</button></li>
              <li><button onClick={() => navigateTo('projects')} className="hover:text-blue-600">6 Production Projects</button></li>
              <li><button onClick={() => navigateTo('process')} className="hover:text-blue-600">10-Step Development Process</button></li>
              <li><button onClick={() => navigateTo('practice')} className="hover:text-blue-600">Interactive Quizzes & Rubrics</button></li>
              <li><button onClick={() => navigateTo('interview')} className="hover:text-blue-600">Technical Interview Prep</button></li>
              <li><button onClick={() => navigateTo('tools')} className="hover:text-blue-600">Developer Tooling Suite</button></li>
            </ul>
          </div>

          {/* Student Hub & Architecture */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Student Resources
            </h4>
            <ul className="space-y-1.5">
              <li><button onClick={() => navigateTo('dashboard')} className="hover:text-blue-600">Personal Dashboard & Notes</button></li>
              <li><button onClick={() => navigateTo('forum')} className="hover:text-blue-600">Discussion Forum</button></li>
              <li><button onClick={() => navigateTo('careers')} className="hover:text-blue-600">Career Guidance & Salaries</button></li>
              <li><button onClick={() => navigateTo('resources')} className="hover:text-blue-600">Curated Free Ecosystem</button></li>
              <li>
                <button
                  onClick={() => setIsCertificateOpen(true)}
                  className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium hover:underline"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Certificate of Completion</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSitemapOpen(true)}
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Sitemap & Database Schema</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2026 WebCraft Academy. Built for students learning web engineering from zero to advanced.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-700 dark:hover:text-slate-200 transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
