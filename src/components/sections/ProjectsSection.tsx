import React, { useState } from 'react';
import { projectTutorials } from '../../data/projectsData';
import { ProjectTutorial } from '../../types';
import { FolderGit2, CheckCircle2, Copy, Check, Terminal, ExternalLink, Rocket, FolderTree, Code2, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectTutorials[0].id);
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeProject = projectTutorials.find(p => p.id === selectedProjectId) || projectTutorials[0];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyCode = () => {
    const file = activeProject.files[activeFileIndex];
    if (file) {
      navigator.clipboard.writeText(file.code);
      setCopied(true);
      showToast(`Copied ${file.filename} to clipboard!`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-10 py-6 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] text-white text-xs font-semibold shadow-[0_0_25px_rgba(0,0,0,0.9)] border border-emerald-500/40"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Project-Based Learning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Complete Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Web Projects</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Build 6 complete, production-grade applications with full multi-file source code, architectural folder trees, step-by-step explanations, and real-world deployment instructions.
        </p>
      </div>

      {/* Project selector tabs */}
      <div className="flex border-b border-white/[0.08] overflow-x-auto pb-3 gap-2.5">
        {projectTutorials.map((proj) => {
          const isSelected = proj.id === activeProject.id;
          return (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                setActiveFileIndex(0);
              }}
              className={`px-4 py-3 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'border-blue-500/80 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'border-white/[0.08] bg-[#111111] text-zinc-300 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{proj.title}</span>
            </button>
          );
        })}
      </div>

      {/* Project Overview Card */}
      <motion.div 
        key={activeProject.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111111] p-6 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl space-y-8"
      >
        {/* Title, Level, Tech Stack */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold ${
                activeProject.level === 'Beginner'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : activeProject.level === 'Intermediate'
                  ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/40'
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
              }`}>
                {activeProject.level} Project
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {activeProject.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              {activeProject.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 self-center">
            {activeProject.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-xl bg-[#18181B] border border-white/[0.08] text-zinc-300 text-xs font-mono font-medium shadow-2xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Checklist & Folder Structure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Features */}
          <div className="p-6 rounded-2xl bg-[#18181B] border border-white/[0.08] space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Features Implemented</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {activeProject.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Folder Structure */}
          <div className="p-6 rounded-2xl bg-[#0A0A0A] text-zinc-100 border border-white/[0.08] space-y-2.5 overflow-x-auto shadow-inner">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pb-2 border-b border-white/[0.08]">
              <FolderTree className="w-4 h-4 text-blue-400" />
              <span>Project Directory Structure</span>
            </div>
            <pre className="text-xs font-mono leading-relaxed text-zinc-300 whitespace-pre">
              {activeProject.folderStructure}
            </pre>
          </div>
        </div>

        {/* Multi-File Source Code Viewer */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Full Multi-File Source Code</span>
            </h3>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl border border-white/[0.08] bg-[#18181B] text-zinc-300 hover:text-white hover:bg-[#202024] transition cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied File' : 'Copy Active File'}</span>
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] text-zinc-100 shadow-2xl">
            {/* File Tabs */}
            <div className="flex border-b border-white/[0.08] bg-[#000000] px-3 gap-1 overflow-x-auto">
              {activeProject.files.map((file, idx) => (
                <button
                  key={file.filename}
                  onClick={() => setActiveFileIndex(idx)}
                  className={`px-3.5 py-2.5 text-xs font-mono whitespace-nowrap transition border-b-2 cursor-pointer ${
                    activeFileIndex === idx
                      ? 'border-blue-500 text-white font-bold bg-[#0A0A0A]'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  {file.filename}
                </button>
              ))}
            </div>

            {/* Code Body */}
            <div className="p-5 overflow-x-auto text-xs font-mono leading-relaxed max-h-[480px]">
              <pre className="whitespace-pre">
                {activeProject.files[activeFileIndex]?.code || '// No file selected'}
              </pre>
            </div>
          </div>
        </div>

        {/* Step-by-Step Explanation */}
        <div className="space-y-3 pt-6 border-t border-white/[0.08]">
          <h3 className="text-sm font-bold text-white">
            Architecture Walkthrough & Concepts
          </h3>
          <div className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
            {activeProject.stepByStepExplanation.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#18181B] border border-white/[0.08]">
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Guide */}
        <div className="p-6 rounded-2xl bg-[#18181B] border border-blue-500/30 space-y-3 text-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span>Production Deployment Guide</span>
          </h3>
          <ul className="space-y-2 text-zinc-300">
            {activeProject.deploymentGuide.map((dep, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold font-mono">0{i + 1}.</span>
                <span className="leading-relaxed">{dep}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
