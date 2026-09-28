import React, { useState } from 'react';
import { interviewQuestions } from '../../data/interviewData';
import { CodingChallengesRunner } from '../CodingChallengesRunner';
import { HelpCircle, ChevronDown, ChevronUp, Search, Code2, Terminal } from 'lucide-react';

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
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <HelpCircle className="w-4 h-4" />
          <span>Technical Assessment Prep</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Technical Interview Questions & Coding Challenges
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Prepare for frontend and full-stack technical rounds with real questions asked at top tech companies, along with an in-browser live code assessment simulator.
        </p>
      </div>

      {/* Part 1: Live Interactive Coding Challenges */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Part 1</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
            Interactive Live Coding Challenge Runner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Solve algorithmic problems directly in your browser. Run automated test cases to verify correctness.
          </p>
        </div>
        <CodingChallengesRunner />
      </div>

      {/* Part 2: Categorized Interview Q&A */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Part 2</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
            Frequently Asked Conceptual Interview Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse essential questions covering the DOM, CSS specificity, the Event Loop, React reconciliation, JWTs, and database normalization.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-850 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {q.category}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {q.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      q.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                      q.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                      'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {q.difficulty}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
                    <p>{q.answer}</p>
                    {q.codeExample && (
                      <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 p-3 font-mono text-xs overflow-x-auto">
                        <pre className="whitespace-pre">{q.codeExample}</pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-500">
              No interview questions match your filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
