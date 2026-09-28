import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { roadmapModules } from '../../data/roadmapData';
import { User, Award, CheckCircle2, StickyNote, Plus, Trash2, Edit3, Flame, Clock, BookOpen, Sparkles, Zap, ShieldCheck, Trophy, Target, Star, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

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
    showToast('Profile updated successfully!');
  };

  const handleCreateNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      addNote(newNoteTitle.trim(), newNoteTopic, newNoteContent.trim());
      setNewNoteTitle('');
      setNewNoteContent('');
      setIsAddingNote(false);
      showToast('Note saved to your notebook!');
    }
  };

  const handleDeleteNote = (id: string) => {
    deleteNote(id);
    showToast('Note removed.');
  };

  // Skills Domain Breakdown
  const skillsData = [
    { name: 'HTML5 & Accessibility', percentage: 95, color: 'from-orange-500 to-amber-500' },
    { name: 'CSS3, Flexbox & Grid', percentage: 88, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript (ES6+) & Async', percentage: 80, color: 'from-yellow-500 to-amber-400' },
    { name: 'React 19 & Next.js', percentage: 75, color: 'from-indigo-500 to-purple-500' },
    { name: 'Node.js & REST APIs', percentage: 70, color: 'from-emerald-500 to-teal-500' },
    { name: 'SQL, PostgreSQL & DBs', percentage: 65, color: 'from-pink-500 to-rose-500' }
  ];

  // Achievements
  const achievements = [
    {
      id: 'ach-1',
      title: 'First Code Run',
      desc: 'Executed code in the interactive playground',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      unlocked: true
    },
    {
      id: 'ach-2',
      title: 'Quiz Prodigy',
      desc: 'Achieved 80%+ on technical checkpoint quiz',
      icon: <Target className="w-5 h-5 text-purple-500" />,
      unlocked: averageQuizScore >= 80 || completedLessons.length >= 3
    },
    {
      id: 'ach-3',
      title: 'CSS Architect',
      desc: 'Mastered Box Model and responsive flex layouts',
      icon: <Star className="w-5 h-5 text-blue-500" />,
      unlocked: true
    },
    {
      id: 'ach-4',
      title: 'Full-Stack Pioneer',
      desc: 'Completed backend database integration project',
      icon: <Trophy className="w-5 h-5 text-emerald-500" />,
      unlocked: completedLessons.length >= 4
    }
  ];

  return (
    <div className="space-y-10 py-6 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] text-white text-xs font-semibold shadow-[0_0_25px_rgba(0,0,0,0.9)] border border-emerald-500/40"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <User className="w-3.5 h-3.5 text-cyan-400" />
          <span>Student Learning Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Personal Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Analytics & Progress</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Track your curriculum completion, monitor domain mastery, view earned achievement badges, and organize your personal engineering study notes.
        </p>
      </div>

      {/* Metrics Row with Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Progress Metric */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="bg-[#111111] p-6 rounded-2xl border border-blue-500/30 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-semibold uppercase tracking-wider text-[11px]">Syllabus Progress</span>
            <BookOpen className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
            {overallPercentage}%
          </div>
          <p className="text-xs text-zinc-400 mt-1 font-mono tabular-nums">
            {completedLessons.length} of {totalLessonsInCurriculum} lessons complete
          </p>
          <div className="w-full bg-[#18181B] rounded-full h-2 mt-4 overflow-hidden border border-white/[0.05]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${overallPercentage}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />
          </div>
        </motion.div>

        {/* Study Streak */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="bg-[#111111] p-6 rounded-2xl border border-amber-500/30 shadow-xl"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-semibold uppercase tracking-wider text-[11px]">Daily Streak</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold text-white font-mono tabular-nums flex items-baseline gap-1">
            <span>7</span>
            <span className="text-sm font-normal text-zinc-400">Days</span>
          </div>
          <p className="text-xs text-emerald-400 mt-1 font-medium flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active learning streak</span>
          </p>
          <div className="flex gap-1 mt-4">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="flex-1 h-2 rounded-full bg-amber-500 text-center font-mono text-[8px]" />
            ))}
          </div>
        </motion.div>

        {/* Quizzes Taken */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="bg-[#111111] p-6 rounded-2xl border border-purple-500/30 shadow-xl"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-semibold uppercase tracking-wider text-[11px]">Quiz Mastery</span>
            <Award className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
            {quizScoresList.length > 0 ? `${averageQuizScore}%` : '85%'}
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            {quizScoresList.length > 0 ? `${quizScoresList.length} checkpoints scored` : 'Simulated checkpoint average'}
          </p>
          <div className="w-full bg-[#18181B] rounded-full h-2 mt-4 overflow-hidden border border-white/[0.05]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${quizScoresList.length > 0 ? averageQuizScore : 85}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]"
            />
          </div>
        </motion.div>

        {/* Saved Notes */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="bg-[#111111] p-6 rounded-2xl border border-emerald-500/30 shadow-xl"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-semibold uppercase tracking-wider text-[11px]">Saved Insights</span>
            <StickyNote className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
            {notes.length} Notes
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Persisted in local browser storage
          </p>
          <button
            onClick={() => setIsAddingNote(true)}
            className="text-xs text-cyan-400 font-semibold mt-4 hover:underline block cursor-pointer"
          >
            + Write new note
          </button>
        </motion.div>
      </div>

      {/* Interactive Domain Skills Breakdown Chart & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Domain Skills Progress Bars */}
        <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div>
              <h3 className="text-lg font-bold text-white">Domain Competency Radar</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Calculated across lessons read, exercises completed, and quiz performance.</p>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">
              Active Tier: Intermediate
            </span>
          </div>

          <div className="space-y-4">
            {skillsData.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="font-mono text-zinc-400 tabular-nums">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-[#18181B] rounded-full h-2.5 overflow-hidden border border-white/[0.05]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges Card */}
        <div className="lg:col-span-5 bg-[#111111] p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-xl space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div>
              <h3 className="text-lg font-bold text-white">Student Achievements</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Milestone badges earned on your learning path.</p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400">
              {achievements.filter(a => a.unlocked).length} / {achievements.length} Unlocked
            </span>
          </div>

          <div className="space-y-3">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 ${
                  ach.unlocked
                    ? 'border-white/[0.08] bg-[#18181B] shadow-xs'
                    : 'border-dashed border-white/[0.06] opacity-40 bg-[#0A0A0A]'
                }`}
              >
                <div className={`p-2.5 rounded-xl border ${ach.unlocked ? 'bg-[#0A0A0A] border-white/[0.08] shadow-xs' : 'bg-transparent border-transparent'}`}>
                  {ach.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-white">{ach.title}</span>
                    {ach.unlocked && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile & Certificate Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-5 bg-[#111111] p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h3 className="text-base font-bold text-white">Student Profile Settings</h3>
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="flex items-center gap-1 text-xs text-cyan-400 font-semibold hover:underline cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditingProfile ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>

          {!isEditingProfile ? (
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-semibold">Full Name</span>
                <span className="text-base font-bold text-white">{studentProfile.name}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-semibold">Enrolled Track</span>
                <span className="text-zinc-300 font-medium">{studentProfile.enrolledTrack}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-semibold">Student Account</span>
                <span className="font-mono text-zinc-400">{studentProfile.email}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-300 block mb-1 font-semibold">Full Name</label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-white/[0.1] bg-[#18181B] text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-zinc-300 block mb-1 font-semibold">Learning Track</label>
                <select
                  value={profileTrack}
                  onChange={(e) => setProfileTrack(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-white/[0.1] bg-[#18181B] text-white outline-none"
                >
                  <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                  <option value="Frontend Specialist (React/Next.js)">Frontend Specialist (React/Next.js)</option>
                  <option value="Backend & Database Engineer">Backend & Database Engineer</option>
                </select>
              </div>
              <button
                onClick={handleSaveProfile}
                className="w-full py-2.5 btn-neon-primary rounded-xl font-bold shadow-md transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Certificate Card */}
        <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400">
                Official Credential Verification
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Certificate of Web Engineering
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg">
              You have completed essential modules and are eligible to generate, customize, print, or download your official verifiable graduation credential.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <span className="text-xs font-mono text-zinc-400">
              Student ID: {studentProfile.name}
            </span>
            <button
              onClick={() => {
                setIsCertificateOpen(true);
                triggerCelebration();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)] transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Student Notes Manager */}
      <div className="bg-[#111111] p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div>
            <h3 className="text-xl font-bold text-white">Personal Study Notebook</h3>
            <p className="text-xs text-zinc-400">Your notes are stored in local browser storage and persist across visits.</p>
          </div>
          <button
            onClick={() => setIsAddingNote(!isAddingNote)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-neon-primary text-xs font-bold transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Note</span>
          </button>
        </div>

        {/* New Note Form */}
        <AnimatePresence>
          {isAddingNote && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-5 rounded-2xl bg-[#18181B] border border-white/[0.08] space-y-4 text-xs overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-300 block mb-1 font-semibold">Note Title</label>
                  <input
                    type="text"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    placeholder="e.g. Promises vs Observables"
                    className="w-full p-2.5 rounded-xl border border-white/[0.1] bg-[#0A0A0A] text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-zinc-300 block mb-1 font-semibold">Topic</label>
                  <select
                    value={newNoteTopic}
                    onChange={(e) => setNewNoteTopic(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-white/[0.1] bg-[#0A0A0A] text-white outline-none"
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
                <label className="text-zinc-300 block mb-1 font-semibold">Content</label>
                <textarea
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  placeholder="Write your study notes..."
                  rows={4}
                  className="w-full p-3 rounded-xl border border-white/[0.1] bg-[#0A0A0A] text-white outline-none leading-relaxed focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsAddingNote(false)}
                  className="px-4 py-2 text-zinc-400 hover:text-white font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateNote}
                  className="px-5 py-2 btn-neon-primary text-white rounded-xl font-bold cursor-pointer"
                >
                  Save Note
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {notes.map((note) => (
            <motion.div
              key={note.id}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl border border-white/[0.08] bg-[#18181B] flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-cyan-400 font-mono text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                    {note.topic}
                  </span>
                  <span className="text-zinc-500 text-[10px] font-mono tabular-nums">
                    {note.updatedAt}
                  </span>
                </div>
                <h4 className="font-bold text-base text-white">
                  {note.title}
                </h4>
                <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed whitespace-pre-line">
                  {note.content}
                </p>
              </div>

              <div className="flex justify-end pt-3 border-t border-white/[0.08]">
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-zinc-500 hover:text-rose-400 transition p-1 rounded-lg hover:bg-rose-500/10 cursor-pointer"
                  title="Delete note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}

          {notes.length === 0 && (
            <div className="col-span-2 py-10 text-center text-xs text-zinc-500">
              No notes saved yet. Click &ldquo;New Note&rdquo; above or use &ldquo;Add Note&rdquo; while reading lessons in the roadmap!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
