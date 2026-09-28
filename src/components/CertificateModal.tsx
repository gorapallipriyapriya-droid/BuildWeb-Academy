import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Award, Printer, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CertificateModal: React.FC = () => {
  const { isCertificateOpen, setIsCertificateOpen, studentProfile, updateStudentProfile, completedLessons } = useApp();
  const [studentName, setStudentName] = useState(studentProfile.name || 'Alex Rivera');
  const [isEditing, setIsEditing] = useState(false);

  if (!isCertificateOpen) return null;

  const certificateId = `WC-${Math.abs(studentName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 1234)).toString(16).toUpperCase()}-2026`;
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const handlePrint = () => {
    window.print();
  };

  const celebrate = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  const handleSaveName = () => {
    updateStudentProfile({ name: studentName });
    setIsEditing(false);
    celebrate();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        {/* Controls bar (hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-slate-900 dark:text-white">Certificate of Achievement</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => setIsCertificateOpen(false)}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Body (The actual printable certificate) */}
        <div className="p-8 sm:p-12 text-center bg-white text-slate-900 relative">
          <div className="border-4 border-double border-amber-600/30 p-8 sm:p-12 rounded-xl relative">
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600" />

            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Official Credential</span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
                Certificate of Web Engineering
              </h1>
              <p className="text-sm text-slate-500 mt-1">WebCraft Academy · Global Online Curriculum</p>
            </div>

            <p className="text-sm text-slate-600 max-w-md mx-auto my-6">
              This certifies that the recipient has demonstrated hands-on mastery of full-stack web development principles, including HTML5 semantics, CSS Grid/Flexbox layouts, asynchronous JavaScript, React architecture, backend APIs, and cloud deployment.
            </p>

            {/* Recipient Name */}
            <div className="my-8">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">Proudly Presented To</span>
              {isEditing ? (
                <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="text-center font-serif text-2xl font-bold border-b-2 border-amber-600 outline-none px-2 py-1 w-full"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 group cursor-pointer" onClick={() => setIsEditing(true)}>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 underline decoration-amber-500/40 decoration-2 underline-offset-8">
                    {studentName}
                  </h2>
                  <span className="no-print opacity-0 group-hover:opacity-100 text-xs text-blue-600 transition">Edit</span>
                </div>
              )}
            </div>

            {/* Signatures & Seal */}
            <div className="grid grid-cols-3 items-end pt-8 mt-6 border-t border-slate-200">
              <div className="text-left">
                <div className="font-serif italic text-base text-slate-800">David K. Vance</div>
                <div className="h-0.5 w-32 bg-slate-400 my-1" />
                <span className="text-[11px] text-slate-500 block">Lead Curriculum Architect</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500 bg-amber-50 flex items-center justify-center text-amber-700 font-serif font-bold text-xs shadow-inner">
                  VERIFIED
                </div>
                <span className="text-[10px] font-mono text-slate-400 mt-1 tabular-nums">
                  ID: {certificateId}
                </span>
              </div>

              <div className="text-right">
                <div className="font-mono text-xs text-slate-700 tabular-nums">{issueDate}</div>
                <div className="h-0.5 w-32 bg-slate-400 my-1 ml-auto" />
                <span className="text-[11px] text-slate-500 block">Date of Issuance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info (no-print) */}
        <div className="no-print p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Click on your name above to customize it before printing.</span>
          <button
            onClick={celebrate}
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Celebrate Milestone</span>
          </button>
        </div>
      </div>
    </div>
  );
};
