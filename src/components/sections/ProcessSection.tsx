import React, { useState } from 'react';
import { devProcessSteps } from '../../data/processData';
import { Layers, CheckCircle2, ArrowRight, Lightbulb, Wrench } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [selectedStepNumber, setSelectedStepNumber] = useState<number>(1);
  const activeStep = devProcessSteps.find(s => s.stepNumber === selectedStepNumber) || devProcessSteps[0];

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Layers className="w-4 h-4" />
          <span>Professional Software Lifecycle</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          The 10-Step Website Development Process
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          From first concept and user requirements to wireframing, architecture, testing, and production deployment. Follow the battle-tested engineering methodology used by leading product teams.
        </p>
      </div>

      {/* Process Step Pipeline Buttons */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-2 gap-2">
        {devProcessSteps.map((step) => {
          const isSelected = step.stepNumber === selectedStepNumber;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setSelectedStepNumber(step.stepNumber)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
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
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
              Phase 0{activeStep.stepNumber} of 10
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {activeStep.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          {/* Key Activities */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Core Engineering Activities
            </h3>
            <ul className="space-y-2">
              {activeStep.keyActivities.map((act, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 text-xs space-y-2">
            <div className="font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Senior Engineer Insights & Pitfalls to Avoid</span>
            </div>
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              {activeStep.proTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step pagination controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            <button
              onClick={() => setSelectedStepNumber(prev => Math.max(1, prev - 1))}
              disabled={selectedStepNumber === 1}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Previous Phase
            </button>
            <span className="text-slate-400 font-mono">Step {selectedStepNumber} / 10</span>
            <button
              onClick={() => setSelectedStepNumber(prev => Math.min(10, prev + 1))}
              disabled={selectedStepNumber === 10}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sidebar Deliverables & Recommended Tools */}
        <div className="lg:col-span-4 space-y-6">
          {/* Deliverables Card */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Required Deliverables</span>
            </h3>
            <div className="space-y-2 text-xs">
              {activeStep.deliverables.map((deliv, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {deliv}
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tools Card */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-blue-500" />
              <span>Recommended Tooling</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {activeStep.recommendedTools.map((tool) => (
                <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
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
