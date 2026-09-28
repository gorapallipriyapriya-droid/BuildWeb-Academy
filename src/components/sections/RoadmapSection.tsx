import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { roadmapModules } from '../../data/roadmapData';
import { InteractiveWebFlow } from '../InteractiveWebFlow';
import { InteractiveBoxModel } from '../InteractiveBoxModel';
import { InteractiveFlexbox } from '../InteractiveFlexbox';
import { CheckCircle2, Circle, Clock, Copy, Check, ChevronRight, ChevronLeft, StickyNote, Code2, Sparkles, BookOpen } from 'lucide-react';

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
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSaveNote = () => {
    if (noteContent.trim()) {
      addNote(currentLesson.title, currentModule.title, noteContent.trim());
      setNoteContent('');
      setNotePromptOpen(false);
    }
  };

  // Find next and previous lesson
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
  const prevLesson = currentLessonIndex > 0 ? currentModule.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < currentModule.lessons.length - 1 ? currentModule.lessons[currentLessonIndex + 1] : null;

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          <span>Curriculum Modules A through H</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Complete Web Development Roadmap
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Follow the structured curriculum designed to take you from understanding internet packets to shipping production-grade full-stack web applications with databases and CI/CD pipelines.
        </p>
      </div>

      {/* Module Horizontal Track Selector */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-2 gap-2">
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
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                {mod.letter}
              </span>
              <div className="text-left">
                <div className="font-semibold">{mod.title}</div>
                <div className="text-[10px] text-slate-400 font-mono tabular-nums">
                  {completedInMod}/{mod.lessons.length} done
                </div>
              </div>
              {allDone && <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-1" />}
            </button>
          );
        })}
      </div>

      {/* Module Layout: Left Syllabus Sidebar, Right Active Lesson Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Syllabus List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase">
                  Module {currentModule.letter}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{currentModule.title}</h3>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {currentModule.difficulty}
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 my-3 leading-relaxed">
              {currentModule.summary}
            </p>

            {/* Progress bar */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-600 dark:text-slate-400">Module Progress</span>
                <span className="text-blue-600 dark:text-blue-400 font-mono tabular-nums">{modulePercent}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${modulePercent}%` }}
                />
              </div>
            </div>

            {/* Lesson list */}
            <div className="mt-5 space-y-1.5">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2">
                Lessons in this module
              </div>
              {currentModule.lessons.map((lesson, idx) => {
                const isSelected = lesson.id === currentLesson.id;
                const isDone = isLessonCompleted(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      setSelectedLessonId(lesson.id);
                      setShowSolution(false);
                    }}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition text-xs ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium border border-blue-200 dark:border-blue-900'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLessonCompletion(lesson.id);
                      }}
                      className="mt-0.5 text-slate-400 hover:text-emerald-500 transition"
                      title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50 dark:fill-emerald-950" />
                      ) : (
                        <Circle className="w-4 h-4" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="truncate">{lesson.title}</div>
                      <div className="text-[11px] text-slate-400 truncate">{lesson.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Active Lesson View */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            {/* Lesson Title & Controls */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  <span>Module {currentModule.letter}</span>
                  <span aria-hidden="true">·</span>
                  <span>Estimated: {currentModule.estimatedHours}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {currentLesson.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {currentLesson.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setNotePromptOpen(!notePromptOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition"
                >
                  <StickyNote className="w-3.5 h-3.5 text-amber-500" />
                  <span>Add Note</span>
                </button>

                <button
                  onClick={() => toggleLessonCompletion(currentLesson.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition shadow-xs ${
                    isLessonCompleted(currentLesson.id)
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isLessonCompleted(currentLesson.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Completed</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3.5 h-3.5" />
                      <span>Mark as Done</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Note Input (if open) */}
            {notePromptOpen && (
              <div className="my-4 p-4 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs space-y-2">
                <span className="font-semibold text-amber-900 dark:text-amber-200 block">Save Note for this Lesson</span>
                <textarea
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="Jot down key takeaways, reminders, or questions..."
                  className="w-full p-2.5 rounded border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none resize-y"
                  rows={3}
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setNotePromptOpen(false)}
                    className="px-2.5 py-1 rounded text-slate-600 dark:text-slate-400 hover:bg-amber-100 dark:hover:bg-amber-900/50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveNote}
                    className="px-3 py-1 rounded bg-amber-600 text-white hover:bg-amber-700 font-medium"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            )}

            {/* Lesson Body Prose */}
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed my-6 whitespace-pre-line">
              {currentLesson.content}
            </div>

            {/* Interactive Embedded Sandboxes */}
            {currentLesson.interactiveComponent === 'web-flow' && <InteractiveWebFlow />}
            {currentLesson.interactiveComponent === 'box-model' && <InteractiveBoxModel />}
            {currentLesson.interactiveComponent === 'flexbox' && <InteractiveFlexbox />}

            {/* Code Snippet Box */}
            {currentLesson.codeSnippet && (
              <div className="my-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <span>Language: {currentLesson.language || 'code'}</span>
                  <button
                    onClick={() => copyCode(currentLesson.codeSnippet || '')}
                    className="flex items-center gap-1 hover:text-white transition"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed">
                  <pre className="whitespace-pre">{currentLesson.codeSnippet}</pre>
                </div>
              </div>
            )}

            {/* Practical Tips */}
            {currentLesson.tips && currentLesson.tips.length > 0 && (
              <div className="my-6 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs space-y-2">
                <div className="font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>Senior Engineer Best Practices & Tips</span>
                </div>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                  {currentLesson.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Practical Exercise Box */}
            {currentLesson.exercise && (
              <div className="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-emerald-500" />
                    <span>Hands-On Mini Exercise</span>
                  </div>
                  {currentLesson.exercise.solution && (
                    <button
                      onClick={() => setShowSolution(!showSolution)}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {showSolution ? 'Hide Solution' : 'Reveal Solution'}
                    </button>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-300">{currentLesson.exercise.prompt}</p>
                {showSolution && currentLesson.exercise.solution && (
                  <div className="p-3 rounded bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
                    <pre className="whitespace-pre">{currentLesson.exercise.solution}</pre>
                  </div>
                )}
              </div>
            )}

            {/* Navigation buttons: Prev and Next */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-xs">
              {prevLesson ? (
                <button
                  onClick={() => {
                    setSelectedLessonId(prevLesson.id);
                    setShowSolution(false);
                  }}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
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
                  }}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium shadow-xs"
                >
                  <span className="truncate max-w-[140px] sm:max-w-xs">{nextLesson.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
