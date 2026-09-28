import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { quizQuestions, practiceAssignments, capstoneProjects } from '../../data/quizzesData';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, BookCheck, ClipboardCheck } from 'lucide-react';

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
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <BookCheck className="w-4 h-4" />
          <span>Interactive Student Practice</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Quizzes, Assignments & Capstone Projects
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Test your comprehension with automated multiple-choice checkpoints, complete hands-on student assignments evaluated by rubric, and tackle comprehensive capstone prompts.
        </p>
      </div>

      {/* Segmented Tab Controls */}
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition ${
            activeTab === 'quizzes'
              ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Interactive Quizzes ({quizQuestions.length})
        </button>
        <button
          onClick={() => setActiveTab('assignments')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition ${
            activeTab === 'assignments'
              ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Practical Assignments ({practiceAssignments.length})
        </button>
        <button
          onClick={() => setActiveTab('capstones')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition ${
            activeTab === 'capstones'
              ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Capstone Prompts ({capstoneProjects.length})
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'quizzes' && (
        <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Quiz progress info */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono">
                    Topic: {activeQuestion.topic}
                  </span>
                  <div className="text-slate-400 mt-0.5">
                    Question {currentQuizIndex + 1} of {quizQuestions.length}
                  </div>
                </div>
                <div className="text-right font-mono text-slate-500">
                  Current Score: {quizScore} / {currentQuizIndex}
                </div>
              </div>

              {/* Question prompt */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {activeQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {activeQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === activeQuestion.correctIndex;

                  let borderClass = 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600';
                  let bgClass = 'bg-slate-50/50 dark:bg-slate-850';

                  if (submitted) {
                    if (isCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                    } else if (isSelected && !isCorrect) {
                      borderClass = 'border-rose-500 bg-rose-50/60 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                    }
                  } else if (isSelected) {
                    borderClass = 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/50';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={submitted}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium transition border flex items-center justify-between ${borderClass} ${bgClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {submitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />}
                      {submitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation (shown after submit) */}
              {submitted && (
                <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                  <span className="font-bold block mb-1">Explanation:</span>
                  <p>{activeQuestion.explanation}</p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
                {!submitted ? (
                  <button
                    onClick={handleConfirmAnswer}
                    disabled={selectedOption === null}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs disabled:opacity-40 hover:bg-blue-700 shadow-xs"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 shadow-xs"
                  >
                    {currentQuizIndex < quizQuestions.length - 1 ? 'Next Question &rarr;' : 'Finish Quiz'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center mx-auto text-blue-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Quiz Evaluation Completed!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                You scored <span className="font-bold text-blue-600 font-mono text-base">{quizScore} / {quizQuestions.length}</span> ({Math.round((quizScore / quizQuestions.length) * 100)}%).
              </p>
              <div className="flex justify-center gap-3 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'assignments' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practiceAssignments.map((assign) => (
            <div
              key={assign.id}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-1">
                    <span className="font-mono">{assign.time}</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{assign.level}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {assign.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Assignment Objectives
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {assign.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">Evaluation Rubric:</span>
                  {assign.rubric}
                </div>
              </div>

              <button
                onClick={triggerCelebration}
                className="mt-6 w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 text-center"
              >
                Mark Ready for Submission
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'capstones' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capstoneProjects.map((cap) => (
            <div
              key={cap.id}
              className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {cap.description}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Required Deliverables for Portfolio
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {cap.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
