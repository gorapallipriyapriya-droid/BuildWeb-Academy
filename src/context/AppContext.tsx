import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavSection, StudentNote, ForumPost } from '../types';
import confetti from 'canvas-confetti';

interface StudentProfile {
  name: string;
  email: string;
  enrolledTrack: string;
  joinedDate: string;
}

interface AppContextType {
  currentSection: NavSection;
  setCurrentSection: (section: NavSection) => void;
  selectedModuleId: string;
  setSelectedModuleId: (id: string) => void;
  selectedLessonId: string;
  setSelectedLessonId: (id: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  
  // Progress & Completion
  completedLessons: string[];
  toggleLessonCompletion: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  
  completedQuizzes: Record<string, number>;
  recordQuizScore: (quizId: string, score: number) => void;
  
  // Student Profile
  studentProfile: StudentProfile;
  updateStudentProfile: (updates: Partial<StudentProfile>) => void;
  
  // Student Notes
  notes: StudentNote[];
  addNote: (title: string, topic: string, content: string) => void;
  updateNote: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
  
  // Forum
  forumPosts: ForumPost[];
  addForumPost: (title: string, topic: string, content: string) => void;
  addForumReply: (postId: string, replyContent: string) => void;
  upvotePost: (postId: string) => void;
  
  // Modals & UI
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCertificateOpen: boolean;
  setIsCertificateOpen: (open: boolean) => void;
  isSitemapOpen: boolean;
  setIsSitemapOpen: (open: boolean) => void;
  
  triggerCelebration: () => void;
}

const defaultNotes: StudentNote[] = [
  {
    id: 'note-1',
    title: 'CSS Box Sizing Rule',
    topic: 'CSS3',
    content: 'Always remember: box-sizing: border-box prevents padding and borders from inflating total element dimensions.',
    updatedAt: '2026-03-25'
  },
  {
    id: 'note-2',
    title: 'HTTP Status Code Cheat Sheet',
    topic: 'Web Fundamentals',
    content: '200 = Success, 201 = Created, 400 = Bad Request, 401 = Unauthorized, 404 = Not Found, 500 = Server Error.',
    updatedAt: '2026-03-26'
  }
];

const defaultForumPosts: ForumPost[] = [
  {
    id: 'post-1',
    author: 'Elena Rostova',
    avatarSeed: 'elena',
    topic: 'CSS',
    title: 'When should I use CSS Grid instead of Flexbox in real projects?',
    content: 'I find myself defaulting to Flexbox for everything. Are there specific scenarios where Grid is substantially cleaner or more maintainable?',
    upvotes: 14,
    createdAt: '2 days ago',
    replies: [
      {
        id: 'rep-1',
        author: 'Marcus Chen',
        content: 'Use Flexbox for 1D layouts (single row or column, like a navbar or button cluster). Use CSS Grid for 2D layouts (rows AND columns simultaneously, like a photo gallery, dashboard, or card grid). Grid also lets you define responsive columns with repeat(auto-fit, minmax(280px, 1fr)) without writing any media queries!',
        createdAt: '1 day ago'
      }
    ]
  },
  {
    id: 'post-2',
    author: 'Devon Miles',
    avatarSeed: 'devon',
    topic: 'JavaScript',
    title: 'Why do we need async/await if Promises already work?',
    content: 'Is async/await just syntactic sugar, or does it offer genuine architectural benefits when building complex API calls?',
    upvotes: 9,
    createdAt: '3 days ago',
    replies: [
      {
        id: 'rep-2',
        author: 'Sarah Connor',
        content: 'It is syntactic sugar over Promises, but the true benefit is readability and error handling. With async/await you can use standard try/catch blocks instead of chaining multiple .then().catch() calls, which avoids callback nesting and makes debugging stack traces much clearer in DevTools.',
        createdAt: '2 days ago'
      }
    ]
  },
  {
    id: 'post-3',
    author: 'Priya Patel',
    avatarSeed: 'priya',
    topic: 'Backend',
    title: 'How do you securely handle JWT storage on the frontend?',
    content: 'Should tokens be kept in localStorage or httpOnly cookies? What are the security trade-offs for student projects vs production?',
    upvotes: 21,
    createdAt: '4 days ago',
    replies: [
      {
        id: 'rep-3',
        author: 'Alex Thorne',
        content: 'For production, httpOnly Secure SameSite cookies are recommended because JavaScript running in the browser cannot access them, protecting you from Cross-Site Scripting (XSS) attacks. For quick student prototypes, localStorage is easier to set up, but understand that any malicious script can read localStorage.',
        createdAt: '3 days ago'
      }
    ]
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<NavSection>('intro');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('web-fundamentals');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('internet-basics');
  
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('webcraft_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('webcraft_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Completed Lessons
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('webcraft_completed_lessons');
      return saved ? JSON.parse(saved) : ['internet-basics'];
    } catch {
      return ['internet-basics'];
    }
  });

  useEffect(() => {
    localStorage.setItem('webcraft_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => {
      const next = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      if (!prev.includes(lessonId)) {
        triggerCelebration();
      }
      return next;
    });
  };

  const isLessonCompleted = (lessonId: string) => completedLessons.includes(lessonId);

  // Completed Quizzes
  const [completedQuizzes, setCompletedQuizzes] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('webcraft_quizzes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const recordQuizScore = (quizId: string, score: number) => {
    setCompletedQuizzes(prev => {
      const updated = { ...prev, [quizId]: score };
      localStorage.setItem('webcraft_quizzes', JSON.stringify(updated));
      return updated;
    });
    if (score >= 80) {
      triggerCelebration();
    }
  };

  // Student Profile
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('webcraft_profile');
      return saved ? JSON.parse(saved) : {
        name: 'Jordan Lee',
        email: 'jordan.student@university.edu',
        enrolledTrack: 'Full Stack Web Developer',
        joinedDate: 'March 2026'
      };
    } catch {
      return {
        name: 'Jordan Lee',
        email: 'jordan.student@university.edu',
        enrolledTrack: 'Full Stack Web Developer',
        joinedDate: 'March 2026'
      };
    }
  });

  const updateStudentProfile = (updates: Partial<StudentProfile>) => {
    setStudentProfile(prev => {
      const updated = { ...prev, ...updates };
      localStorage.setItem('webcraft_profile', JSON.stringify(updated));
      return updated;
    });
  };

  // Student Notes
  const [notes, setNotes] = useState<StudentNote[]>(() => {
    try {
      const saved = localStorage.getItem('webcraft_notes');
      return saved ? JSON.parse(saved) : defaultNotes;
    } catch {
      return defaultNotes;
    }
  });

  useEffect(() => {
    localStorage.setItem('webcraft_notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, topic: string, content: string) => {
    const newNote: StudentNote = {
      id: `note-${Date.now()}`,
      title,
      topic,
      content,
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const updateNote = (id: string, content: string) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, content, updatedAt: new Date().toISOString().split('T')[0] } : n));
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  // Forum
  const [forumPosts, setForumPosts] = useState<ForumPost[]>(() => {
    try {
      const saved = localStorage.getItem('webcraft_forum');
      return saved ? JSON.parse(saved) : defaultForumPosts;
    } catch {
      return defaultForumPosts;
    }
  });

  useEffect(() => {
    localStorage.setItem('webcraft_forum', JSON.stringify(forumPosts));
  }, [forumPosts]);

  const addForumPost = (title: string, topic: string, content: string) => {
    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      author: studentProfile.name || 'Anonymous Student',
      avatarSeed: studentProfile.name.toLowerCase().replace(/\s+/g, '-'),
      topic,
      title,
      content,
      upvotes: 1,
      createdAt: 'Just now',
      replies: []
    };
    setForumPosts(prev => [newPost, ...prev]);
  };

  const addForumReply = (postId: string, replyContent: string) => {
    setForumPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          replies: [
            ...p.replies,
            {
              id: `rep-${Date.now()}`,
              author: studentProfile.name || 'Anonymous Student',
              content: replyContent,
              createdAt: 'Just now'
            }
          ]
        };
      }
      return p;
    }));
  };

  const upvotePost = (postId: string) => {
    setForumPosts(prev => prev.map(p => p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p));
  };

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  // Confetti helper
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        selectedModuleId,
        setSelectedModuleId,
        selectedLessonId,
        setSelectedLessonId,
        theme,
        toggleTheme,
        completedLessons,
        toggleLessonCompletion,
        isLessonCompleted,
        completedQuizzes,
        recordQuizScore,
        studentProfile,
        updateStudentProfile,
        notes,
        addNote,
        updateNote,
        deleteNote,
        forumPosts,
        addForumPost,
        addForumReply,
        upvotePost,
        isSearchOpen,
        setIsSearchOpen,
        isCertificateOpen,
        setIsCertificateOpen,
        isSitemapOpen,
        setIsSitemapOpen,
        triggerCelebration
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
