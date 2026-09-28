import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { roadmapModules } from '../../data/roadmapData';
import { InteractiveWebFlow } from '../InteractiveWebFlow';
import { InteractiveBoxModel } from '../InteractiveBoxModel';
import { InteractiveFlexbox } from '../InteractiveFlexbox';
import { CheckCircle2, Circle, Clock, Copy, Check, ChevronRight, ChevronLeft, StickyNote, Code2, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RoadmapSection: React.FC = () => {
  const {
    selectedModuleId,
    setSelectedModuleId,
    selectedLessonId,
    setSelectedLessonId,
    completedLessons,
    toggleLessonCompletion,
    isLessonCompleted,
    addNote
  } = useApp();

  const [copiedCode, setCopiedCode] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [notePromptOpen, setNotePromptOpen] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Find active module & lesson
  const currentModule = roadmapModules.find(m => m.id === selectedModuleId) || roadmapModules[0];
  const currentLesson = currentModule.lessons.find(l => l.id === selectedLessonId) || currentModule.lessons[0];

  // Calculate module completion stats
  const moduleTotalLessons = currentModule.lessons.length;
  const moduleCompletedLessons = currentModule.lessons.filter(l => isLessonCompleted(l.id)).length;
  const modulePercent = Math.round((moduleCompletedLessons / moduleTotalLessons) * 100);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    showToast('Code copied to clipboard!');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSaveNote = () => {
    if (noteContent.trim()) {
      addNote(currentLesson.title, currentModule.title, noteContent.trim());
      setNoteContent('');
      setNotePromptOpen(false);
      showToast('Note added to your study notebook!');
    }
  };

  // Find next and previous lesson
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
  const prevLesson = currentLessonIndex > 0 ? currentModule.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < currentModule.lessons.length - 1 ? currentModule.lessons[currentLessonIndex + 1] : null;

  return (
    <div className="space-y-8 py-6 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold shadow-2xl border border-slate-700 dark:border-slate-200"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>Curriculum Modules A through H</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Full-Stack Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Engineering Roadmap</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Follow the structured curriculum designed to take you from internet protocols and semantic markup to shipping scalable full-stack applications with databases and CI/CD pipelines.
        </p>
      </div>

      {/* Module Horizontal Track Selector */}
      <div className="flex border-b border-white/[0.08] overflow-x-auto pb-3 gap-2.5">
        {roadmapModules.map((mod) => {
          const isSelected = mod.id === currentModule.id;
          const completedInMod = mod.lessons.filter(l => isLessonCompleted(l.id)).length;
          const allDone = completedInMod === mod.lessons.length;

          return (
            <button
              key={mod.id}
              onClick={() => {
                setSelectedModuleId(mod.id);
                setSelectedLessonId(mod.lessons[0].id);
                setShowSolution(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'border-blue-500/80 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'border-white/[0.08] bg-[#111111] text-zinc-300 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                isSelected ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-xs' : 'bg-[#18181B] text-zinc-400 border border-white/[0.08]'
              }`}>
                {mod.letter}
              </span>
              <div className="text-left">
                <div className="font-bold text-white">{mod.title}</div>
                <div className="text-[10px] text-zinc-400 font-mono tabular-nums">
                  {completedInMod}/{mod.lessons.length} complete
                </div>
              </div>
              {allDone && <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-1" />}
            </button>
          );
        })}
      </div>

      {/* Module Layout: Left Syllabus Sidebar, Right Active Lesson Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Syllabus List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#111111] p-6 rounded-3xl border border-white/[0.08] shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Module {currentModule.letter}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{currentModule.title}</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#18181B] text-cyan-400 border border-white/[0.08]">
                {currentModule.difficulty}
              </span>
            </div>

            <p className="text-xs text-zinc-400 my-3 leading-relaxed">
              {currentModule.summary}
            </p>

            {/* Progress bar */}
            <div className="space-y-1.5 pt-2 border-t border-white/[0.08]">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-400">Module Progress</span>
                <span className="text-cyan-400 font-mono tabular-nums">{modulePercent}%</span>
              </div>
              <div className="w-full bg-[#18181B] rounded-full h-2 overflow-hidden border border-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${modulePercent}%` }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                />
              </div>
            </div>

            {/* Lesson list */}
            <div className="mt-6 space-y-2">
              <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider px-2">
                Lessons in this module
              </div>
              {currentModule.lessons.map((lesson) => {
                const isSelected = lesson.id === currentLesson.id;
                const isDone = isLessonCompleted(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      setSelectedLessonId(lesson.id);
                      setShowSolution(false);
                    }}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 text-xs ${
                      isSelected
                        ? 'bg-[#18181B] text-white font-semibold border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                        : 'hover:bg-white/[0.04] text-zinc-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLessonCompletion(lesson.id);
                        if (!isDone) showToast('Lesson marked complete!');
                      }}
                      className="mt-0.5 text-zinc-500 hover:text-emerald-400 transition cursor-pointer"
                      title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
                      ) : (
                        <Circle className="w-4 h-4" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="truncate font-semibold text-white">{lesson.title}</div>
                      <div className="text-[11px] text-zinc-400 truncate">{lesson.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Active Lesson View */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div 
            key={currentLesson.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111111] p-6 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl"
          >
            {/* Lesson Title & Controls */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold mb-1.5">
                  <span>Module {currentModule.letter}</span>
                  <span aria-hidden="true">·</span>
                  <span>Estimated: {currentModule.estimatedHours}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentLesson.title}
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  {currentLesson.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setNotePromptOpen(!notePromptOpen)}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-white/[0.08] bg-[#18181B] hover:bg-[#202024] text-zinc-300 transition cursor-pointer"
                >
                  <StickyNote className="w-4 h-4 text-amber-400" />
                  <span>Add Note</span>
                </button>

                <button
                  onClick={() => {
                    toggleLessonCompletion(currentLesson.id);
                    if (!isLessonCompleted(currentLesson.id)) showToast('Milestone complete! Great job!');
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    isLessonCompleted(currentLesson.id)
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                      : 'btn-neon-primary'
                  }`}
                >
                  {isLessonCompleted(currentLesson.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Completed</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4" />
                      <span>Mark as Done</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Note Input (if open) */}
            <AnimatePresence>
              {notePromptOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="my-5 p-5 rounded-2xl bg-[#18181B] border border-amber-500/30 text-xs space-y-3 overflow-hidden shadow-lg"
                >
                  <span className="font-bold text-amber-300 block text-sm">Save Note for this Lesson</span>
                  <textarea
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Jot down key takeaways, reminders, or questions..."
                    className="w-full p-3 rounded-xl border border-white/[0.1] bg-[#0A0A0A] text-white outline-none resize-y"
                    rows={3}
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setNotePromptOpen(false)}
                      className="px-3.5 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNote}
                      className="px-4 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-500 font-bold shadow-xs cursor-pointer"
                    >
                      Save Note
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lesson Body Prose */}
            <div className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed my-8 whitespace-pre-line">
              {currentLesson.content}
            </div>

            {/* Interactive Embedded Sandboxes */}
            {currentLesson.interactiveComponent === 'web-flow' && <InteractiveWebFlow />}
            {currentLesson.interactiveComponent === 'box-model' && <InteractiveBoxModel />}
            {currentLesson.interactiveComponent === 'flexbox' && <InteractiveFlexbox />}

            {/* Code Snippet Box */}
            {currentLesson.codeSnippet && (
              <div className="my-8 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] text-zinc-100 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#000000] border-b border-white/[0.08] text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Language: {currentLesson.language || 'code'}</span>
                  </span>
                  <button
                    onClick={() => copyCode(currentLesson.codeSnippet || '')}
                    className="flex items-center gap-1 text-zinc-300 hover:text-white transition cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <div className="p-5 overflow-x-auto text-xs font-mono leading-relaxed">
                  <pre className="whitespace-pre">{currentLesson.codeSnippet}</pre>
                </div>
              </div>
            )}

            {/* Practical Tips */}
            {currentLesson.tips && currentLesson.tips.length > 0 && (
              <div className="my-8 p-5 rounded-2xl bg-[#18181B] border border-blue-500/30 text-xs space-y-2.5">
                <div className="font-bold text-blue-300 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Senior Engineer Best Practices & Tips</span>
                </div>
                <ul className="space-y-2 text-zinc-300">
                  {currentLesson.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-bold text-sm leading-none">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Practical Exercise Box */}
            {currentLesson.exercise && (
              <div className="my-8 p-5 rounded-2xl bg-[#18181B] border border-white/[0.08] text-xs space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white flex items-center gap-2 text-sm">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>Hands-On Mini Exercise</span>
                  </div>
                  {currentLesson.exercise.solution && (
                    <button
                      onClick={() => setShowSolution(!showSolution)}
                      className="text-cyan-400 hover:underline font-bold text-xs cursor-pointer"
                    >
                      {showSolution ? 'Hide Solution' : 'Reveal Solution'}
                    </button>
                  )}
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">{currentLesson.exercise.prompt}</p>
                {showSolution && currentLesson.exercise.solution && (
                  <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08] text-zinc-200 font-mono text-[11px] overflow-x-auto shadow-inner">
                    <pre className="whitespace-pre">{currentLesson.exercise.solution}</pre>
                  </div>
                )}
              </div>
            )}

            {/* Navigation buttons: Prev and Next */}
            <div className="flex items-center justify-between pt-6 mt-8 border-t border-white/[0.08] text-xs">
              {prevLesson ? (
                <button
                  onClick={() => {
                    setSelectedLessonId(prevLesson.id);
                    setShowSolution(false);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-[#18181B] text-zinc-300 hover:text-white hover:bg-[#202024] font-medium transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="truncate max-w-[140px] sm:max-w-xs">{prevLesson.title}</span>
                </button>
              ) : <div />}

              {nextLesson ? (
                <button
                  onClick={() => {
                    setSelectedLessonId(nextLesson.id);
                    setShowSolution(false);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl btn-neon-primary font-bold transition cursor-pointer"
                >
                  <span className="truncate max-w-[140px] sm:max-w-xs">{nextLesson.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : <div />}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
