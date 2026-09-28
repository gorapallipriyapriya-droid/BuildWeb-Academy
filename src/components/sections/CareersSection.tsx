import React, { useState } from 'react';
import { careerPaths } from '../../data/careerData';
import { Briefcase, TrendingUp, DollarSign, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CareersSection: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(careerPaths[0].id);
  const activeRole = careerPaths.find(r => r.id === selectedRoleId) || careerPaths[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>Tech Industry Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Web Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Career Paths & Salaries</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Discover what skills tech companies hire for, current industry compensation benchmarks, day-to-day responsibilities, and how to fast-track your progression from Junior to Staff Engineer.
        </p>
      </div>

      {/* Role Tabs */}
      <div className="flex border-b border-white/[0.08] overflow-x-auto pb-3 gap-2.5">
        {careerPaths.map((role) => {
          const isSelected = role.id === activeRole.id;
          return (
            <button
              key={role.id}
              onClick={() => setSelectedRoleId(role.id)}
              className={`px-4 py-3 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'border-blue-500/80 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'border-white/[0.08] bg-[#111111] text-zinc-300 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{role.role}</span>
            </button>
          );
        })}
      </div>

      {/* Role Details Card */}
      <motion.div 
        key={activeRole.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111111] p-6 sm:p-10 rounded-3xl border border-white/[0.08] shadow-[0_0_30px_rgba(0,0,0,0.7)] space-y-8"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {activeRole.role}
          </h2>
          <p className="text-xs sm:text-sm text-cyan-400 font-semibold mt-1">
            {activeRole.tagline}
          </p>
          <p className="text-sm text-zinc-300 mt-3 leading-relaxed max-w-3xl">
            {activeRole.overview}
          </p>
        </div>

        {/* Salary Benchmark Grid */}
        <div className="space-y-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Market Compensation Benchmarks (Annual USD)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-[#18181B] border border-white/[0.08] shadow-sm">
              <span className="text-xs text-zinc-400 block font-medium">Junior (0 - 2 Years)</span>
              <span className="text-xl font-extrabold text-white font-mono mt-1.5 block">
                {activeRole.salaryRanges.junior}
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-[#18181B] border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 block font-semibold">Mid-Level (2 - 5 Years)</span>
              <span className="text-xl font-extrabold text-cyan-300 font-mono mt-1.5 block">
                {activeRole.salaryRanges.mid}
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-[#18181B] border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <span className="text-xs text-purple-400 block font-semibold">Senior / Lead (5+ Years)</span>
              <span className="text-xl font-extrabold text-purple-300 font-mono mt-1.5 block">
                {activeRole.salaryRanges.senior}
              </span>
            </div>
          </div>
        </div>

        {/* Required Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
          <div className="p-6 rounded-2xl bg-[#18181B] border border-white/[0.08] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Must-Have Core Skills</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {activeRole.requiredSkills.core.map((skill, i) => (
                <li key={i} className="flex items-start gap-2.5 text-zinc-300">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#18181B] border border-white/[0.08] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>High-Value Bonus Competencies</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {activeRole.requiredSkills.goodToHave.map((skill, i) => (
                <li key={i} className="flex items-start gap-2.5 text-zinc-300">
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Growth Ladder */}
        <div className="space-y-3.5 pt-6 border-t border-white/[0.08]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span>Career Progression Ladder</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {activeRole.careerGrowthSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#18181B] border border-white/[0.08]">
                <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1.5">
                  Stage 0{idx + 1}
                </span>
                <p className="text-zinc-200 leading-relaxed font-semibold">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Prep Guidance */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/5 to-transparent border border-amber-500/30 space-y-3.5 text-xs">
          <h3 className="font-bold text-white flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>How to Ace {activeRole.role} Technical Interviews</span>
          </h3>
          <ul className="space-y-2 text-zinc-300">
            {activeRole.interviewPrepTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold font-mono">#{i + 1}</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
