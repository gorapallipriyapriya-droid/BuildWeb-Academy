import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { quizQuestions, practiceAssignments, capstoneProjects } from '../../data/quizzesData';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, BookCheck, ClipboardCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PracticeSection: React.FC = () => {
  const { completedQuizzes, recordQuizScore, triggerCelebration } = useApp();
  const [activeTab, setActiveTab] = useState<'quizzes' | 'assignments' | 'capstones'>('quizzes');

  // Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeQuestion = quizQuestions[currentQuizIndex];

  const handleSelectOption = (index: number) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    const isCorrect = selectedOption === activeQuestion.correctIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      setQuizFinished(true);
      const finalPercentage = Math.round(((quizScore + (selectedOption === activeQuestion.correctIndex ? 1 : 0)) / quizQuestions.length) * 100);
      recordQuizScore('web-mastery-quiz', finalPercentage);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <BookCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Student Practice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Quizzes, Assignments & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Capstone Projects</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Test your comprehension with automated multiple-choice checkpoints, complete hands-on student assignments evaluated by rubric, and tackle comprehensive capstone prompts.
        </p>
      </div>

      {/* Segmented Tab Controls */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#0A0A0A] rounded-2xl w-fit border border-white/[0.08]">
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === 'quizzes'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Interactive Quizzes ({quizQuestions.length})
        </button>
        <button
          onClick={() => setActiveTab('assignments')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === 'assignments'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Practical Assignments ({practiceAssignments.length})
        </button>
        <button
          onClick={() => setActiveTab('capstones')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            activeTab === 'capstones'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Capstone Prompts ({capstoneProjects.length})
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'quizzes' && (
        <div className="bg-[#111111] p-6 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl">
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Quiz progress info */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs">
                <div>
                  <span className="text-cyan-400 font-bold font-mono">
                    Topic: {activeQuestion.topic}
                  </span>
                  <div className="text-zinc-400 mt-0.5">
                    Question {currentQuizIndex + 1} of {quizQuestions.length}
                  </div>
                </div>
                <div className="text-right font-mono text-zinc-400 font-semibold">
                  Score: {quizScore} / {currentQuizIndex}
                </div>
              </div>

              {/* Question prompt */}
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {activeQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5">
                {activeQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === activeQuestion.correctIndex;

                  let borderClass = 'border-white/[0.08] hover:border-blue-500/50';
                  let bgClass = 'bg-[#18181B] text-zinc-200';

                  if (submitted) {
                    if (isCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-500/15 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]';
                    } else if (isSelected && !isCorrect) {
                      borderClass = 'border-rose-500 bg-rose-500/15 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.3)]';
                    }
                  } else if (isSelected) {
                    borderClass = 'border-blue-500 bg-blue-500/15 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]';
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileHover={!submitted ? { x: 4 } : {}}
                      onClick={() => handleSelectOption(idx)}
                      disabled={submitted}
                      className={`w-full p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all border flex items-center justify-between cursor-pointer ${borderClass} ${bgClass}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-7 h-7 rounded-xl border border-white/[0.1] flex items-center justify-center font-mono text-xs font-bold shrink-0 bg-[#0A0A0A] text-white">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {submitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />}
                      {submitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation (shown after submit) */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-[#18181B] border border-blue-500/30 text-xs text-zinc-300 leading-relaxed space-y-1 shadow-inner"
                  >
                    <span className="font-bold text-cyan-300 block text-sm">Explanation:</span>
                    <p>{activeQuestion.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action buttons */}
              <div className="flex justify-end pt-4 border-t border-white/[0.08]">
                {!submitted ? (
                  <button
                    onClick={handleConfirmAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-2.5 rounded-xl btn-neon-primary font-bold text-xs disabled:opacity-40 cursor-pointer"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-neon-primary font-bold text-xs cursor-pointer"
                  >
                    <span>{currentQuizIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 space-y-5"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 border border-blue-500/50 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Quiz Evaluation Completed!
              </h3>
              <p className="text-base text-zinc-300 max-w-md mx-auto">
                You scored <span className="font-bold text-cyan-400 font-mono text-xl">{quizScore} / {quizQuestions.length}</span> ({Math.round((quizScore / quizQuestions.length) * 100)}%).
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-neon-primary text-xs font-bold cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {activeTab === 'assignments' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practiceAssignments.map((assign) => (
            <motion.div
              key={assign.id}
              whileHover={{ y: -4 }}
              className="bg-[#111111] p-6 sm:p-7 rounded-3xl border border-white/[0.08] shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs text-zinc-400 mb-1.5">
                    <span className="font-mono font-medium">{assign.time}</span>
                    <span className="font-bold text-cyan-400">{assign.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {assign.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Assignment Objectives
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {assign.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18181B] border border-white/[0.08] text-xs text-zinc-400">
                  <span className="font-bold text-zinc-300 block mb-1">Evaluation Rubric:</span>
                  {assign.rubric}
                </div>
              </div>

              <button
                onClick={triggerCelebration}
                className="mt-6 w-full py-2.5 rounded-xl border border-white/[0.08] bg-[#18181B] hover:bg-[#202024] hover:border-blue-500/50 text-xs font-bold text-white text-center transition cursor-pointer"
              >
                Mark Ready for Submission
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'capstones' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capstoneProjects.map((cap) => (
            <motion.div
              key={cap.id}
              whileHover={{ y: -4 }}
              className="bg-[#111111] p-8 rounded-3xl border border-white/[0.08] shadow-xl space-y-5"
            >
              <h3 className="text-xl font-bold text-white">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {cap.description}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                  Required Deliverables for Portfolio
                </h4>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {cap.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-400 font-bold">•</span>
                      <span className="leading-relaxed">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
