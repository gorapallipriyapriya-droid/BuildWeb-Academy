import React, { useState } from 'react';
import { interviewQuestions } from '../../data/interviewData';
import { CodingChallengesRunner } from '../CodingChallengesRunner';
import { HelpCircle, ChevronDown, ChevronUp, Search, Code2, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const InterviewSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(interviewQuestions[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Backend', 'Database'];

  const filteredQuestions = interviewQuestions.filter((q) => {
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) || q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Technical Assessment Prep</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Technical Interview <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Questions & Challenges</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Prepare for frontend and full-stack technical rounds with real questions asked at top tech companies, along with an in-browser live code assessment simulator.
        </p>
      </div>

      {/* Part 1: Live Interactive Coding Challenges */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Part 1</span>
          <h2 className="text-2xl font-bold text-white mt-0.5">
            Interactive Live Coding Challenge Runner
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Solve algorithmic problems directly in your browser. Run automated test cases to verify correctness.
          </p>
        </div>
        <CodingChallengesRunner />
      </div>

      {/* Part 2: Categorized Interview Q&A */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Part 2</span>
          <h2 className="text-2xl font-bold text-white mt-0.5">
            Frequently Asked Conceptual Interview Questions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Browse essential questions covering the DOM, CSS specificity, the Event Loop, React reconciliation, JWTs, and database normalization.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#111111] rounded-2xl border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                    : 'text-zinc-400 hover:text-white hover:bg-[#18181B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search interview questions..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-white/[0.08] bg-[#111111] text-white placeholder-zinc-500 outline-none focus:border-blue-500/80 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition"
            />
          </div>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="bg-[#111111] rounded-2xl border border-white/[0.08] shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#18181B]/50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#18181B] text-cyan-400 border border-white/[0.08]">
                      {q.category}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {q.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      q.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      q.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}>
                      {q.difficulty}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 pt-2 border-t border-white/[0.08] text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 overflow-hidden bg-[#0A0A0A]/50"
                    >
                      <p>{q.answer}</p>
                      {q.codeExample && (
                        <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] text-zinc-200 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                          <pre className="whitespace-pre">{q.codeExample}</pre>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="py-12 text-center text-xs text-zinc-500">
              No interview questions match your filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
