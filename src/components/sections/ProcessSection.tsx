import React, { useState } from 'react';
import { devProcessSteps } from '../../data/processData';
import { Layers, CheckCircle2, ArrowRight, Lightbulb, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const [selectedStepNumber, setSelectedStepNumber] = useState<number>(1);
  const activeStep = devProcessSteps.find(s => s.stepNumber === selectedStepNumber) || devProcessSteps[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional Software Lifecycle</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          The 10-Step Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Development Process</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          From first concept and user requirements to wireframing, architecture, testing, and production deployment. Follow the battle-tested engineering methodology used by leading product teams.
        </p>
      </div>

      {/* Process Step Pipeline Buttons */}
      <div className="flex border-b border-white/[0.08] overflow-x-auto pb-3 gap-2">
        {devProcessSteps.map((step) => {
          const isSelected = step.stepNumber === selectedStepNumber;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setSelectedStepNumber(step.stepNumber)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'border-blue-500/80 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'border-white/[0.08] bg-[#111111] text-zinc-300 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                isSelected ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xs' : 'bg-[#18181B] text-zinc-400'
              }`}>
                {step.stepNumber}
              </span>
              <span>{step.title.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Details */}
        <motion.div 
          key={activeStep.stepNumber}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 p-6 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#111111] shadow-[0_0_30px_rgba(0,0,0,0.7)] space-y-6"
        >
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Phase 0{activeStep.stepNumber} of 10
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {activeStep.title}
            </h2>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          {/* Key Activities */}
          <div className="space-y-3 pt-6 border-t border-white/[0.08]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Core Engineering Activities
            </h3>
            <ul className="space-y-2.5">
              {activeStep.keyActivities.map((act, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/5 to-transparent border border-amber-500/30 text-xs space-y-2.5">
            <div className="font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Senior Engineer Insights & Pitfalls to Avoid</span>
            </div>
            <ul className="space-y-2 text-zinc-300">
              {activeStep.proTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step pagination controls */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.08] text-xs">
            <button
              onClick={() => setSelectedStepNumber(prev => Math.max(1, prev - 1))}
              disabled={selectedStepNumber === 1}
              className="px-4 py-2 rounded-xl border border-white/[0.08] bg-[#18181B] hover:bg-[#202024] text-zinc-300 disabled:opacity-40 transition cursor-pointer"
            >
              Previous Phase
            </button>
            <span className="text-zinc-500 font-mono">Step {selectedStepNumber} / 10</span>
            <button
              onClick={() => setSelectedStepNumber(prev => Math.min(10, prev + 1))}
              disabled={selectedStepNumber === 10}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-neon-primary disabled:opacity-40 font-bold cursor-pointer"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Sidebar Deliverables & Recommended Tools */}
        <div className="lg:col-span-4 space-y-6">
          {/* Deliverables Card */}
          <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111111] shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>Required Deliverables</span>
            </h3>
            <div className="space-y-2.5 text-xs">
              {activeStep.deliverables.map((deliv, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#18181B] border border-white/[0.06] text-zinc-300 font-medium">
                  {deliv}
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tools Card */}
          <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111111] shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Recommended Tooling</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {activeStep.recommendedTools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 rounded-xl bg-[#18181B] border border-white/[0.08] text-zinc-300 text-xs font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
