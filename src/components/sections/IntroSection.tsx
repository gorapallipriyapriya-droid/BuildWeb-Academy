import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { websiteTypes, webPillars, frontendVsBackendComparison } from '../../data/introData';
import { InteractiveWebFlow } from '../InteractiveWebFlow';
import { ArrowRight, Code2, CheckCircle2, Globe, Cpu, Layers, ShieldCheck, Zap, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const { setCurrentSection, setSelectedModuleId } = useApp();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-24 py-8 relative">
      {/* Background Decorative Mesh & Vibrant Aurora Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-28 right-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-64 left-1/3 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111]/85 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
      >
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-dark-grid opacity-50 pointer-events-none" />

        {/* Ambient radial glow inside hero card */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            {/* Version / Category Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] border border-white/[0.12] text-xs font-semibold text-zinc-300 backdrop-blur-md shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4] animate-ping" />
              <span className="text-white">Full-Stack Web Engineering</span>
              <span className="text-zinc-600">·</span>
              <span className="text-cyan-400 font-mono text-[11px]">2026 Edition</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Learn to Build Complete Websites{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                from Scratch.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl"
            >
              A premium, high-performance curriculum engineered for aspiring developers. Master internet protocols, semantic HTML5, modern CSS3 layouts, asynchronous JavaScript, React 19 architecture, Node.js APIs, and cloud deployment.
            </motion.p>

            {/* Modern Call-To-Action Buttons with Neon Effects */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => setCurrentSection('roadmap')}
                className="group relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl btn-neon-primary font-semibold text-sm cursor-pointer"
              >
                <span>Explore Interactive Roadmap</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => setCurrentSection('playground')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl btn-neon-secondary font-semibold text-sm cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Launch Live Code Sandbox</span>
              </button>
            </motion.div>

            {/* Clean Metadata Micro-Proof (Zero-Pills Discipline) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 pt-5 border-t border-white/[0.08]">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 8 In-Depth Modules
              </span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-zinc-300">6 Production Projects</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-zinc-300">Browser Code Sandbox</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-purple-400 font-medium">Free Verified Certificate</span>
            </div>
          </div>

          {/* Hero Visual Stage with Floating Code Snippets and 3D Tilt */}
          <div 
            className="lg:col-span-5 relative perspective-1000 py-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Floating Code Snippet 1 (Top Left) */}
            <div className="absolute -top-3 -left-6 z-30 hidden sm:block p-3 rounded-xl bg-[#0A0A0A]/95 border border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-xl animate-code-1 max-w-[240px]">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/[0.06] text-[10px] text-zinc-400 font-mono">
                <span className="text-blue-400 font-semibold">LiveServer.ts</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <pre className="font-mono text-[11px] text-zinc-300 leading-tight">
                <code>
                  <span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();{'\n'}
                  app.<span className="text-emerald-400">listen</span>(<span className="text-amber-400">3000</span>);
                </code>
              </pre>
            </div>

            {/* Floating Code Snippet 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-4 z-30 hidden sm:block p-3 rounded-xl bg-[#0A0A0A]/95 border border-purple-500/40 shadow-[0_0_25px_rgba(139,92,246,0.3)] backdrop-blur-xl animate-code-2 max-w-[260px]">
              <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/[0.06] text-[10px] text-zinc-400 font-mono">
                <span className="text-purple-400 font-semibold">App.tsx</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">React 19</span>
              </div>
              <pre className="font-mono text-[11px] text-zinc-300 leading-tight">
                <code>
                  <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> Web() {'{'}{'\n'}
                  {'  '}<span className="text-purple-400">return</span> &lt;<span className="text-cyan-400">FullStackCanvas</span> /&gt;;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>

            {/* Floating Tech Badge (Top Right) */}
            <div className="absolute -top-5 right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#18181B] border border-cyan-500/40 text-xs font-mono font-bold text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] animate-float-gentle">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>TypeScript + Vite</span>
            </div>

            {/* 3D Visual Screen Container */}
            <div 
              className="relative rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_0_35px_rgba(0,0,0,0.9)] aspect-16/9 bg-[#0A0A0A] group transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 14}deg) rotateX(${-mousePos.y * 14}deg) scale3d(1.02, 1.02, 1.02)`,
              }}
            >
              <img
                src="/src/assets/images/hero_webdev_learning_1790581158694.jpg"
                alt="Web development workstation displaying code and responsive layouts"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
              
              {/* Overlay terminal status bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[11px] text-zinc-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  webcraft-dev-environment
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  ● Build: Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Part 1: What is a website & The 5 Web Pillars */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181B] text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-500/30">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Chapter 1: Web Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What is a Website & How Does It Work?
          </h2>
          <p className="text-base text-zinc-400 mt-2 leading-relaxed">
            At its core, a website is a collection of publicly accessible web pages, images, and documents stored on a computer (server) connected to the internet. When you visit a website, your browser requests these files, downloads them, and renders them visually for you.
          </p>
        </div>

        {/* 5 Pillars with Modern Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {webPillars.map((pillar, i) => {
            const accentBorders = [
              'hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] text-blue-400',
              'hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] text-purple-400',
              'hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] text-cyan-400',
              'hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] text-emerald-400',
              'hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] text-amber-400'
            ];
            const currentAccent = accentBorders[i % accentBorders.length];

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`bg-[#111111] p-5 rounded-2xl flex flex-col justify-between border border-white/[0.08] transition-all duration-300 ${currentAccent}`}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#18181B] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs mb-3 text-zinc-300">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">{pillar.term}</h3>
                  <span className="text-xs font-medium italic block mb-2 opacity-90">{pillar.analogy}</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Isometric Architecture Diagram & Interactive Step-by-Step Flow */}
        <div className="bg-[#111111] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden border border-white/[0.1] bg-[#0A0A0A] shadow-md group">
              <img
                src="/src/assets/images/web_architecture_diagram_1790581173666.jpg"
                alt="Client server and DNS request architecture flow diagram"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-purple-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>The Client-Server Pipeline</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">The Web Request Lifecycle</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                Whenever you click a link or hit Enter in the URL bar, an intricate dance happens across thousands of miles in a fraction of a second. Explore each step below using the interactive simulation.
              </p>
              <InteractiveWebFlow />
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Types of Websites */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181B] text-purple-400 text-xs font-bold uppercase tracking-wider mb-2 border border-purple-500/30">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Chapter 2: Project Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Types of Websites in the Modern Web
          </h2>
          <p className="text-base text-zinc-400 mt-2 leading-relaxed">
            Websites serve diverse purposes, ranging from static portfolios to dynamic distributed applications. Understanding their architectural differences helps you choose the right tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type) => (
            <motion.div
              key={type.title}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-[#111111] p-6 rounded-2xl flex flex-col justify-between border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <span className="font-semibold px-2 py-0.5 rounded-md bg-[#18181B] text-zinc-300 border border-white/[0.08]">
                    {type.category}
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400 font-semibold">
                    {type.recommendedTech.split(',')[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {type.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {type.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/[0.08] text-xs">
                  <span className="font-bold text-zinc-300 block text-[11px] uppercase tracking-wider">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5 text-zinc-400 text-xs">
                    {type.keyFeatures.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500">
                <span className="truncate">Notable: {type.examples.slice(0, 2).join(', ')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Part 3: Frontend vs Backend Development */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Chapter 3: Full Stack Divide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frontend vs. Backend Engineering
          </h2>
          <p className="text-base text-zinc-400 mt-2 leading-relaxed">
            Software engineering is divided into client-side (Frontend) and server-side (Backend). Together, they form the complete Full-Stack architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-[#111111] p-8 rounded-3xl border border-blue-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  {frontendVsBackendComparison.frontend.title}
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 text-cyan-400 border border-blue-500/40 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                  Client Browser
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {frontendVsBackendComparison.frontend.subtitle}
              </p>

              <div className="p-4 rounded-xl bg-[#18181B] border border-blue-500/30 text-xs italic text-blue-200">
                &ldquo;{frontendVsBackendComparison.frontend.analogy}&rdquo;
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                  {frontendVsBackendComparison.frontend.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {frontendVsBackendComparison.frontend.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-[#18181B] text-zinc-200 border border-white/[0.08] font-medium">
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
              className="mt-8 w-full py-3.5 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] text-center cursor-pointer"
            >
              Start Frontend Lessons &rarr;
            </button>
          </motion.div>

          {/* Backend Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-[#111111] p-8 rounded-3xl border border-purple-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  {frontendVsBackendComparison.backend.title}
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                  Cloud Server & DB
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {frontendVsBackendComparison.backend.subtitle}
              </p>

              <div className="p-4 rounded-xl bg-[#18181B] border border-purple-500/30 text-xs italic text-purple-200">
                &ldquo;{frontendVsBackendComparison.backend.analogy}&rdquo;
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                  {frontendVsBackendComparison.backend.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {frontendVsBackendComparison.backend.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-[#18181B] text-zinc-200 border border-white/[0.08] font-medium">
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
              className="mt-8 w-full py-3.5 text-xs font-semibold rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] text-center cursor-pointer"
            >
              Start Backend Lessons &rarr;
            </button>
          </motion.div>
        </div>
      </section>

      {/* Call to action card with animated gradient border */}
      <section className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/[0.12] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Begin Your Engineering Journey
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Build Your First Full-Stack Website?
          </h3>
          <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
            Follow our structured curriculum from Web Fundamentals to Cloud Deployment. Write code, solve interactive challenges, and claim your credential.
          </p>
        </div>
        <button
          onClick={() => setCurrentSection('roadmap')}
          className="relative z-10 px-8 py-3.5 rounded-xl btn-neon-primary font-bold text-sm shrink-0 cursor-pointer"
        >
          Begin Learning Track &rarr;
        </button>
      </section>
    </div>
  );
};
