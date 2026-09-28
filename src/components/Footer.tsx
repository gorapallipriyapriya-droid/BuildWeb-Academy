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
    <footer className="no-print mt-20 border-t border-white/[0.08] bg-[#000000] text-zinc-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-mono font-bold">
                &lt;/&gt;
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                WebCraft Academy
              </span>
            </div>
            <p className="leading-relaxed text-zinc-400 text-xs">
              A premium, comprehensive educational platform teaching students to design, develop, test, and ship complete modern websites from scratch.
            </p>
            <div className="text-[11px] text-zinc-500 font-mono">
              Free educational platform · 2026 Edition
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Learning Modules
            </h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-400 transition-colors">Web Fundamentals & DNS</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-400 transition-colors">Semantic HTML5 & Accessibility</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-400 transition-colors">CSS3 Flexbox & Grid Layouts</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-400 transition-colors">JavaScript ES6+ & Fetch APIs</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-400 transition-colors">React, Next.js & Server Components</button></li>
              <li><button onClick={() => navigateTo('roadmap')} className="hover:text-blue-400 transition-colors">Node.js, Express & Databases</button></li>
            </ul>
          </div>

          {/* Hands-on Tools & Practice */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Hands-On Engineering
            </h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('playground')} className="hover:text-cyan-400 transition-colors">Live Code Playground</button></li>
              <li><button onClick={() => navigateTo('projects')} className="hover:text-cyan-400 transition-colors">6 Production Projects</button></li>
              <li><button onClick={() => navigateTo('process')} className="hover:text-cyan-400 transition-colors">10-Step Development Process</button></li>
              <li><button onClick={() => navigateTo('practice')} className="hover:text-cyan-400 transition-colors">Interactive Quizzes & Rubrics</button></li>
              <li><button onClick={() => navigateTo('interview')} className="hover:text-cyan-400 transition-colors">Technical Interview Prep</button></li>
              <li><button onClick={() => navigateTo('tools')} className="hover:text-cyan-400 transition-colors">Developer Tooling Suite</button></li>
            </ul>
          </div>

          {/* Student Hub & Architecture */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Student Resources
            </h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('dashboard')} className="hover:text-purple-400 transition-colors">Personal Dashboard & Notes</button></li>
              <li><button onClick={() => navigateTo('forum')} className="hover:text-purple-400 transition-colors">Discussion Forum</button></li>
              <li><button onClick={() => navigateTo('careers')} className="hover:text-purple-400 transition-colors">Career Guidance & Salaries</button></li>
              <li><button onClick={() => navigateTo('resources')} className="hover:text-purple-400 transition-colors">Curated Free Ecosystem</button></li>
              <li>
                <button
                  onClick={() => setIsCertificateOpen(true)}
                  className="flex items-center gap-1.5 text-amber-400 font-medium hover:text-amber-300 transition-colors"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Certificate of Completion</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSitemapOpen(true)}
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Sitemap & Database Schema</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; 2026 WebCraft Academy. Engineered for students mastering modern full-stack web development.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
