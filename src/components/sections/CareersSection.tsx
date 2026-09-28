import React, { useState } from 'react';
import { careerPaths } from '../../data/careerData';
import { Briefcase, TrendingUp, DollarSign, Award, CheckCircle2 } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(careerPaths[0].id);
  const activeRole = careerPaths.find(r => r.id === selectedRoleId) || careerPaths[0];

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Briefcase className="w-4 h-4" />
          <span>Tech Industry Career Guide</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Web Engineering Career Paths & Salaries
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Discover what skills tech companies hire for, current industry compensation benchmarks, day-to-day responsibilities, and how to fast-track your progression from Junior to Staff Engineer.
        </p>
      </div>

      {/* Role Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-2 gap-2">
        {careerPaths.map((role) => {
          const isSelected = role.id === activeRole.id;
          return (
            <button
              key={role.id}
              onClick={() => setSelectedRoleId(role.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              <span>{role.role}</span>
            </button>
          );
        })}
      </div>

      {/* Role Details Card */}
      <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {activeRole.role}
          </h2>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
            {activeRole.tagline}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed max-w-3xl">
            {activeRole.overview}
          </p>
        </div>

        {/* Salary Benchmark Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-emerald-500" />
            <span>Market Compensation Benchmarks (Annual USD)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 block">Junior (0 - 2 Years)</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-1 block">
                {activeRole.salaryRanges.junior}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
              <span className="text-xs text-blue-600 dark:text-blue-400 block font-medium">Mid-Level (2 - 5 Years)</span>
              <span className="text-lg font-bold text-blue-900 dark:text-blue-200 font-mono mt-1 block">
                {activeRole.salaryRanges.mid}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
              <span className="text-xs text-purple-600 dark:text-purple-400 block font-medium">Senior / Lead (5+ Years)</span>
              <span className="text-lg font-bold text-purple-900 dark:text-purple-200 font-mono mt-1 block">
                {activeRole.salaryRanges.senior}
              </span>
            </div>
          </div>
        </div>

        {/* Required Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Must-Have Core Skills
            </h3>
            <ul className="space-y-2 text-xs">
              {activeRole.requiredSkills.core.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              High-Value Bonus Skills
            </h3>
            <ul className="space-y-2 text-xs">
              {activeRole.requiredSkills.goodToHave.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Growth Ladder */}
        <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span>Career Progression Ladder</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {activeRole.careerGrowthSteps.map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold block mb-1">
                  Level 0{idx + 1}
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Prep Guidance */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            <span>How to Ace {activeRole.role} Technical Interviews</span>
          </h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {activeRole.interviewPrepTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold font-mono">#{i + 1}</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
