import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { roadmapModules } from '../../data/roadmapData';
import { User, Award, CheckCircle2, StickyNote, Plus, Trash2, Edit3, Flame, Clock, BookOpen, Sparkles } from 'lucide-react';

export const StudentDashboardSection: React.FC = () => {
  const {
    studentProfile,
    updateStudentProfile,
    completedLessons,
    completedQuizzes,
    notes,
    addNote,
    deleteNote,
    setIsCertificateOpen,
    setCurrentSection,
    setSelectedModuleId,
    triggerCelebration
  } = useApp();

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileName, setProfileName] = useState(studentProfile.name);
  const [profileTrack, setProfileTrack] = useState(studentProfile.enrolledTrack);

  // New Note state
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteTopic, setNewNoteTopic] = useState('HTML & CSS');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  // Overall calculations
  const totalLessonsInCurriculum = roadmapModules.reduce((acc, m) => acc + m.lessons.length, 0);
  const overallPercentage = Math.round((completedLessons.length / totalLessonsInCurriculum) * 100);

  const quizScoresList = Object.values(completedQuizzes);
  const averageQuizScore = quizScoresList.length > 0
    ? Math.round(quizScoresList.reduce((a, b) => a + b, 0) / quizScoresList.length)
    : 0;

  const handleSaveProfile = () => {
    updateStudentProfile({ name: profileName, enrolledTrack: profileTrack });
    setIsEditingProfile(false);
  };

  const handleCreateNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      addNote(newNoteTitle.trim(), newNoteTopic, newNoteContent.trim());
      setNewNoteTitle('');
      setNewNoteContent('');
      setIsAddingNote(false);
    }
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <User className="w-4 h-4" />
          <span>Personal Student Hub</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Student Learning Dashboard
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Track your progression across all 8 modules, manage saved study notes, view quiz performance, and claim your verifiable certificate of completion.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Progress Metric */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Syllabus Completed</span>
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
            {overallPercentage}%
          </div>
          <p className="text-[11px] text-slate-400 mt-1 font-mono tabular-nums">
            {completedLessons.length} of {totalLessonsInCurriculum} lessons
          </p>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" style={{ width: `${overallPercentage}%` }} />
          </div>
        </div>

        {/* Study Streak */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Study Streak</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
            7 Days
          </div>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
            Active daily learner
          </p>
        </div>

        {/* Quizzes Taken */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Quiz Mastery</span>
            <Award className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
            {quizScoresList.length > 0 ? `${averageQuizScore}%` : 'N/A'}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {quizScoresList.length} assessment checkpoints evaluated
          </p>
        </div>

        {/* Saved Notes */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Notebook</span>
            <StickyNote className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
            {notes.length} Notes
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Saved personal study insights
          </p>
        </div>
      </div>

      {/* Profile & Certificate Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-5 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Student Profile</h3>
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditingProfile ? 'Cancel' : 'Edit'}</span>
            </button>
          </div>

          {!isEditingProfile ? (
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Full Name</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{studentProfile.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Primary Track</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{studentProfile.enrolledTrack}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Enrolled Email</span>
                <span className="font-mono text-slate-600 dark:text-slate-400">{studentProfile.email}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-600 dark:text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                />
              </div>
              <div>
                <label className="text-slate-600 dark:text-slate-400 block mb-1">Learning Track</label>
                <select
                  value={profileTrack}
                  onChange={(e) => setProfileTrack(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                >
                  <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                  <option value="Frontend Specialist (React/Next.js)">Frontend Specialist (React/Next.js)</option>
                  <option value="Backend & Database Engineer">Backend & Database Engineer</option>
                </select>
              </div>
              <button
                onClick={handleSaveProfile}
                className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-xs"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Certificate Card */}
        <div className="lg:col-span-7 p-6 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-linear-to-br from-amber-500/10 via-amber-500/5 to-transparent shadow-xs flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-xs uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400">
                Official Credential Ready
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Certificate of Web Engineering
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              You are eligible to preview, customize, and print your verifiable Certificate of Completion signed by WebCraft Academy curriculum leads.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Issued to: {studentProfile.name}
            </span>
            <button
              onClick={() => {
                setIsCertificateOpen(true);
                triggerCelebration();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View & Print Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Student Notes Manager */}
      <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Study Notebook</h3>
            <p className="text-xs text-slate-500">Your notes are stored in local browser storage and persist across visits.</p>
          </div>
          <button
            onClick={() => setIsAddingNote(!isAddingNote)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Note</span>
          </button>
        </div>

        {/* New Note Form */}
        {isAddingNote && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-600 dark:text-slate-400 block mb-1">Note Title</label>
                <input
                  type="text"
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  placeholder="e.g. Promises vs Observables"
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none"
                />
              </div>
              <div>
                <label className="text-slate-600 dark:text-slate-400 block mb-1">Topic</label>
                <select
                  value={newNoteTopic}
                  onChange={(e) => setNewNoteTopic(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none"
                >
                  <option value="Web Fundamentals">Web Fundamentals</option>
                  <option value="HTML & CSS">HTML & CSS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React & Next.js">React & Next.js</option>
                  <option value="Backend & Database">Backend & Database</option>
                  <option value="Deployment">Deployment</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-slate-600 dark:text-slate-400 block mb-1">Content</label>
              <textarea
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                placeholder="Write your study notes..."
                rows={4}
                className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none leading-relaxed"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsAddingNote(false)}
                className="px-3 py-1.5 text-slate-500 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNote}
                className="px-4 py-1.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Save Note
              </button>
            </div>
          </div>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 font-mono text-[10px]">
                    {note.topic}
                  </span>
                  <span className="text-slate-400 text-[10px] font-mono tabular-nums">
                    {note.updatedAt}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {note.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed whitespace-pre-line">
                  {note.content}
                </p>
              </div>

              <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-slate-400 hover:text-red-500 transition"
                  title="Delete note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {notes.length === 0 && (
            <div className="col-span-2 py-8 text-center text-xs text-slate-500">
              No notes saved yet. Click &ldquo;New Note&rdquo; above or use &ldquo;Add Note&rdquo; while reading lessons in the roadmap!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
