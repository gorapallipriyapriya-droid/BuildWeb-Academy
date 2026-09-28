import React, { useState } from 'react';
import { projectTutorials } from '../../data/projectsData';
import { ProjectTutorial } from '../../types';
import { FolderGit2, CheckCircle2, Copy, Check, Terminal, ExternalLink, Rocket, FolderTree, Code2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectTutorials[0].id);
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const activeProject = projectTutorials.find(p => p.id === selectedProjectId) || projectTutorials[0];

  const handleCopyCode = () => {
    const file = activeProject.files[activeFileIndex];
    if (file) {
      navigator.clipboard.writeText(file.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <FolderGit2 className="w-4 h-4" />
          <span>Project-Based Learning</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Complete Production Web Projects
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Build 6 complete, production-grade applications with full multi-file source code, architectural folder trees, step-by-step explanations, and real-world deployment instructions.
        </p>
      </div>

      {/* Project selector tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-2 gap-2">
        {projectTutorials.map((proj) => {
          const isSelected = proj.id === activeProject.id;
          return (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                setActiveFileIndex(0);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              <span>{proj.title}</span>
            </button>
          );
        })}
      </div>

      {/* Project Overview Card */}
      <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-8">
        {/* Title, Level, Tech Stack */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-xs px-2 py-0.5 rounded font-mono font-medium ${
                activeProject.level === 'Beginner'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : activeProject.level === 'Intermediate'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
              }`}>
                {activeProject.level} Project
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {activeProject.title}
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              {activeProject.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 self-center">
            {activeProject.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Checklist & Folder Structure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Features */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Key Features Implemented
            </h3>
            <ul className="space-y-2 text-xs">
              {activeProject.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Folder Structure */}
          <div className="p-5 rounded-xl bg-slate-950 text-slate-100 border border-slate-800 space-y-2 overflow-x-auto">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <FolderTree className="w-3.5 h-3.5 text-blue-400" />
              <span>Project Directory Structure</span>
            </div>
            <pre className="text-xs font-mono leading-relaxed text-slate-300 whitespace-pre">
              {activeProject.folderStructure}
            </pre>
          </div>
        </div>

        {/* Multi-File Source Code Viewer */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-500" />
              <span>Full Project Source Code</span>
            </h3>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied File' : 'Copy File'}</span>
            </button>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
            {/* File Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-900 px-2 gap-1 overflow-x-auto">
              {activeProject.files.map((file, idx) => (
                <button
                  key={file.filename}
                  onClick={() => setActiveFileIndex(idx)}
                  className={`px-3 py-2 text-xs font-mono whitespace-nowrap transition border-b-2 ${
                    activeFileIndex === idx
                      ? 'border-blue-500 text-white font-semibold bg-slate-950'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {file.filename}
                </button>
              ))}
            </div>

            {/* Code Body */}
            <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed max-h-[460px]">
              <pre className="whitespace-pre">
                {activeProject.files[activeFileIndex]?.code || '// No file selected'}
              </pre>
            </div>
          </div>
        </div>

        {/* Step-by-Step Explanation */}
        <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Implementation Walkthrough
          </h3>
          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {activeProject.stepByStepExplanation.map((step, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Guide */}
        <div className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-3 text-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
            <Rocket className="w-4 h-4 text-blue-500" />
            <span>Production Deployment Guide</span>
          </h3>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
            {activeProject.deploymentGuide.map((dep, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold font-mono">0{i + 1}.</span>
                <span>{dep}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
