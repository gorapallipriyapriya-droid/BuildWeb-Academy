import React from 'react';
import { useApp } from '../../context/AppContext';
import { websiteTypes, webPillars, frontendVsBackendComparison } from '../../data/introData';
import { InteractiveWebFlow } from '../InteractiveWebFlow';
import { ArrowRight, BookOpen, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const { setCurrentSection, setSelectedModuleId } = useApp();

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span>Zero-to-Full-Stack Web Development Academy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
              Learn How to Build Complete Websites from Scratch.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              An open, comprehensive, and student-focused engineering platform. Master web fundamentals, semantic HTML5, modern CSS3 layouts, asynchronous JavaScript, React architecture, backend APIs, databases, and continuous cloud deployment.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setCurrentSection('roadmap')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition shadow-sm"
              >
                <span>Explore Full Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSection('playground')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-900 dark:text-white font-medium text-sm transition"
              >
                <Code2 className="w-4 h-4 text-blue-500" />
                <span>Launch Live Playground</span>
              </button>
            </div>

            {/* Micro proof line with typographic separators (zero pills) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span>8 Comprehensive Modules</span>
              <span aria-hidden="true">·</span>
              <span>6 Production Projects</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Sandboxes</span>
              <span aria-hidden="true">·</span>
              <span>Free Student Credential</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md aspect-16/9 bg-slate-100 dark:bg-slate-800">
              <img
                src="/src/assets/images/hero_webdev_learning_1790581158694.jpg"
                alt="Web development workstation displaying code and responsive layouts"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: What is a website & The 5 Web Pillars */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Chapter 1</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            What is a Website & How Does It Work?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            At its core, a website is a collection of publicly accessible web pages, images, and documents stored on a computer (server) connected to the internet. When you visit a website, your browser requests these files, downloads them, and renders them visually for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {webPillars.map((pillar, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                  Pillar 0{i + 1}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{pillar.term}</h3>
                <span className="text-xs text-slate-500 italic block mb-2">{pillar.analogy}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Isometric Architecture Diagram & Interactive Step-by-Step Flow */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <img
                src="/src/assets/images/web_architecture_diagram_1790581173666.jpg"
                alt="Client server and DNS request architecture flow diagram"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">The Web Request Lifecycle</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Whenever you click a link or hit Enter in the URL bar, an intricate dance happens across thousands of miles in a fraction of a second. Explore each step below using the interactive simulation.
              </p>
              <InteractiveWebFlow />
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Types of Websites */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Chapter 2</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Types of Websites in the Modern Web
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Websites serve diverse purposes, ranging from static portfolios to dynamic distributed applications. Understanding their architectural differences helps you choose the right tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {websiteTypes.map((type) => (
            <div
              key={type.title}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-700 transition"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{type.category}</span>
                  <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-semibold">{type.recommendedTech.split(',')[0]}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{type.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{type.description}</p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block text-[11px]">Key Features:</span>
                  <ul className="space-y-1 text-slate-500 dark:text-slate-400 text-[11px]">
                    {type.keyFeatures.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span>Examples: {type.examples.slice(0, 2).join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 3: Frontend vs Backend Development */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Chapter 3</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Frontend vs Backend Development
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Software engineering is divided into client-side (Frontend) and server-side (Backend). Together, they form the complete Full-Stack architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Card */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {frontendVsBackendComparison.frontend.title}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                  Client Browser
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {frontendVsBackendComparison.frontend.subtitle}
              </p>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs italic text-slate-500">
                &ldquo;{frontendVsBackendComparison.frontend.analogy}&rdquo;
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {frontendVsBackendComparison.frontend.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {frontendVsBackendComparison.frontend.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedModuleId('html');
                setCurrentSection('roadmap');
              }}
              className="mt-6 w-full py-2 text-xs font-medium rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition text-center"
            >
              Start Frontend Lessons &rarr;
            </button>
          </div>

          {/* Backend Card */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {frontendVsBackendComparison.backend.title}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900">
                  Cloud Server & DB
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {frontendVsBackendComparison.backend.subtitle}
              </p>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs italic text-slate-500">
                &ldquo;{frontendVsBackendComparison.backend.analogy}&rdquo;
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {frontendVsBackendComparison.backend.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {frontendVsBackendComparison.backend.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedModuleId('backend-development');
                setCurrentSection('roadmap');
              }}
              className="mt-6 w-full py-2 text-xs font-medium rounded-lg border border-purple-200 dark:border-purple-900 bg-purple-50/50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition text-center"
            >
              Start Backend Lessons &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Call to action card */}
      <section className="p-8 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Ready to Start Building Websites?</h3>
          <p className="text-sm text-blue-100 mt-1 max-w-xl">
            Follow the curated step-by-step curriculum from Web Fundamentals to Full-Stack Deployment. Take interactive quizzes, practice in live sandboxes, and earn your certificate.
          </p>
        </div>
        <button
          onClick={() => setCurrentSection('roadmap')}
          className="px-6 py-3 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm transition shrink-0 shadow-md"
        >
          Begin Learning Track &rarr;
        </button>
      </section>
    </div>
  );
};
