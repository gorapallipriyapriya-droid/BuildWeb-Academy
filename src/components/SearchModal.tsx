import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { roadmapModules } from '../data/roadmapData';
import { webTools } from '../data/toolsData';
import { projectTutorials } from '../data/projectsData';
import { interviewQuestions } from '../data/interviewData';
import { devProcessSteps } from '../data/processData';
import { Search, X, BookOpen, Wrench, FolderGit2, HelpCircle, Layers } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setCurrentSection, setSelectedModuleId, setSelectedLessonId } = useApp();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  // Filter lessons
  const matchingLessons = roadmapModules.flatMap(m => 
    m.lessons
      .filter(l => l.title.toLowerCase().includes(query.toLowerCase()) || l.description.toLowerCase().includes(query.toLowerCase()))
      .map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title }))
  );

  // Filter tools
  const matchingTools = webTools.filter(t => 
    t.name.toLowerCase().includes(query.toLowerCase()) || t.purpose.toLowerCase().includes(query.toLowerCase())
  );

  // Filter projects
  const matchingProjects = projectTutorials.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  // Filter interview questions
  const matchingQuestions = interviewQuestions.filter(q => 
    q.question.toLowerCase().includes(query.toLowerCase()) || q.answer.toLowerCase().includes(query.toLowerCase())
  );

  // Filter process steps
  const matchingProcess = devProcessSteps.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase())
  );

  const navigateTo = (section: any, moduleId?: string, lessonId?: string) => {
    setCurrentSection(section);
    if (moduleId) setSelectedModuleId(moduleId);
    if (lessonId) setSelectedLessonId(lessonId);
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, tools, projects, interview questions..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-xs">
          {/* Lessons */}
          {matchingLessons.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Roadmap Lessons ({matchingLessons.length})</span>
              </div>
              <div className="space-y-1">
                {matchingLessons.slice(0, 5).map(l => (
                  <button
                    key={l.id}
                    onClick={() => navigateTo('roadmap', l.moduleId, l.id)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center group transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {l.title}
                      </div>
                      <div className="text-slate-500 line-clamp-1">{l.description}</div>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">{l.moduleTitle}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {matchingTools.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-2">
                <Wrench className="w-3.5 h-3.5" />
                <span>Developer Tools ({matchingTools.length})</span>
              </div>
              <div className="space-y-1">
                {matchingTools.map(t => (
                  <button
                    key={t.id}
                    onClick={() => navigateTo('tools')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center group transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600">
                        {t.name}
                      </div>
                      <div className="text-slate-500 line-clamp-1">{t.purpose}</div>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase">{t.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {matchingProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Projects ({matchingProjects.length})</span>
              </div>
              <div className="space-y-1">
                {matchingProjects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => navigateTo('projects')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center group transition"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600">
                        {p.title}
                      </div>
                      <div className="text-slate-500 line-clamp-1">{p.tagline}</div>
                    </div>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">{p.level}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Interview Questions */}
          {matchingQuestions.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Interview Q&A ({matchingQuestions.length})</span>
              </div>
              <div className="space-y-1">
                {matchingQuestions.slice(0, 4).map(q => (
                  <button
                    key={q.id}
                    onClick={() => navigateTo('interview')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center group transition"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 line-clamp-1">
                      {q.question}
                    </div>
                    <span className="text-[10px] text-slate-400">{q.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchingLessons.length === 0 && matchingTools.length === 0 && matchingProjects.length === 0 && matchingQuestions.length === 0 && (
            <div className="py-8 text-center text-slate-500">
              No results found for &ldquo;{query}&rdquo;. Try searching for &ldquo;flexbox&rdquo;, &ldquo;react&rdquo;, &ldquo;sql&rdquo;, or &ldquo;portfolio&rdquo;.
            </div>
          )}
        </div>

        {/* Footer tip */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex justify-between">
          <span>Tip: Press ESC to close</span>
          <span>Shortcut: Cmd+K / Ctrl+K</span>
        </div>
      </div>
    </div>
  );
};
