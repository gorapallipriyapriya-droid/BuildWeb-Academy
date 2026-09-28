import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Network, Database, FolderTree, Compass, Layers, Rocket } from 'lucide-react';

export const SitemapModal: React.FC = () => {
  const { isSitemapOpen, setIsSitemapOpen } = useApp();
  const [activeTab, setActiveTab] = useState<'sitemap' | 'schema' | 'folder' | 'future'>('sitemap');

  if (!isSitemapOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Architecture & Blueprint Center</h3>
              <p className="text-xs text-slate-500">Sitemap, database schemas, directory structure, & future milestones</p>
            </div>
          </div>
          <button
            onClick={() => setIsSitemapOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/40 px-6 gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${activeTab === 'sitemap' ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold' : 'border-transparent text-slate-600 dark:text-slate-400'}`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Sitemap & Pages</span>
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${activeTab === 'schema' ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold' : 'border-transparent text-slate-600 dark:text-slate-400'}`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Database Schemas</span>
          </button>
          <button
            onClick={() => setActiveTab('folder')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${activeTab === 'folder' ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold' : 'border-transparent text-slate-600 dark:text-slate-400'}`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>Standard Folder Structure</span>
          </button>
          <button
            onClick={() => setActiveTab('future')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${activeTab === 'future' ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold' : 'border-transparent text-slate-600 dark:text-slate-400'}`}
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Future Enhancements</span>
          </button>
        </div>

        {/* Content area */}
        <div className="p-6 overflow-y-auto flex-1 text-xs space-y-6">
          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Full Application Information Architecture</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 text-xs mb-2">1. Foundations & Curriculum</h5>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/</span> - Hero, Web Overview, Types of Websites, Frontend vs Backend</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/roadmap</span> - Web Fundamentals (DNS, TCP, HTTP), HTML5, CSS3, JS ES6+</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/roadmap#react</span> - React, Next.js, Node.js, Express, PostgreSQL, Git</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/tools</span> - VS Code, GitHub, Figma, Chrome DevTools, Postman, Vercel</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <h5 className="font-semibold text-emerald-600 dark:text-emerald-400 text-xs mb-2">2. Hands-on Engineering</h5>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/process</span> - 10-Step Website Development Lifecycle Guide</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/projects</span> - 6 Full Projects: Portfolio, College, Student CRUD, Blog, E-commerce, LMS</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/playground</span> - In-browser live HTML/CSS/JS sandbox with iframe preview</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/practice</span> - Interactive Quizzes, Assignments, and Capstone Prompts</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400 text-xs mb-2">3. Career & Interview Prep</h5>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/careers</span> - Frontend, Backend, Full Stack, UI/UX, DevOps role breakdowns</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/interview</span> - Categorized Technical Questions (HTML, CSS, JS, React, DB)</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/interview#challenges</span> - Live Coding Challenge Runner with test assertions</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <h5 className="font-semibold text-amber-600 dark:text-amber-400 text-xs mb-2">4. Student Tools & Community</h5>
                  <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/dashboard</span> - Progress metrics, syllabus checklist, personal notes</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/certificate</span> - Official verifiable Certificate of Web Engineering</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/forum</span> - Student Q&A discussion board with threads & replies</li>
                    <li>• <span className="font-mono text-slate-900 dark:text-white">/resources</span> - Curated free courses, docs, YouTube, open-source repos</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Production Relational (PostgreSQL) Database Schemas</h4>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 font-mono text-[11px] space-y-3 overflow-x-auto">
                <div className="text-slate-400">// 1. Users Table (Core authentication & role management)</div>
                <pre>{`CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'student' CHECK (role IN ('student', 'instructor', 'admin')),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`}</pre>

                <div className="text-slate-400 pt-2">// 2. Courses & Modules Table (Curriculum hierarchy)</div>
                <pre>{`CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  estimated_hours INT DEFAULT 10
);

CREATE TABLE lessons (
  id SERIAL PRIMARY KEY,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  content_markdown TEXT NOT NULL,
  sort_order INT NOT NULL
);`}</pre>

                <div className="text-slate-400 pt-2">// 3. Student Progress & Submissions Table</div>
                <pre>{`CREATE TABLE enrollments (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  progress_percentage INT DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  certificate_issued_at TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY (user_id, course_id)
);`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'folder' && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Standard Full-Stack Web Application Folder Architecture</h4>
              
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 font-mono text-[11px] overflow-x-auto">
                <pre>{`fullstack-web-application/
├── client/                     # Frontend Application (React / Next.js)
│   ├── public/                 # Static assets (favicons, fonts, images)
│   ├── src/
│   │   ├── assets/             # SVGs, icons, illustrations
│   │   ├── components/         # Reusable UI primitives (Button, Modal, Card)
│   │   ├── context/            # Global React Context state providers
│   │   ├── hooks/              # Custom React hooks (useAuth, useLocalStorage)
│   │   ├── pages/ or app/      # Page route views
│   │   ├── services/           # API fetch client functions
│   │   ├── types/              # TypeScript interfaces & types
│   │   └── App.tsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
├── server/                     # Backend API Server (Node.js & Express)
│   ├── src/
│   │   ├── config/             # DB connection, env variables validation
│   │   ├── controllers/        # Request handlers (authController, studentController)
│   │   ├── middleware/         # Auth verify, error handler, rate limit
│   │   ├── models/             # Database ORM models (Prisma or Mongoose)
│   │   ├── routes/             # REST route declarations (/api/v1/students)
│   │   └── server.ts
│   ├── package.json
│   └── .env.example
├── .gitignore
├── README.md
└── docker-compose.yml          # Container configuration for DB + API`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'future' && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Platform Roadmap & Future Enhancements</h4>
              
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-slate-900 dark:text-white">Phase 1: WebAssembly Code Sandbox Execution</span>
                    <span className="text-[10px] text-emerald-600 font-mono">Q3 2026</span>
                  </div>
                  <p className="text-slate-500">Run Node.js directly inside the client browser using WebContainers / WebAssembly, eliminating the need for a separate backend runner.</p>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-slate-900 dark:text-white">Phase 2: Real-Time Pair Programming</span>
                    <span className="text-[10px] text-blue-600 font-mono">Q4 2026</span>
                  </div>
                  <p className="text-slate-500">Peer-to-peer WebRTC collaborative code editing where students can debug code together in real-time with cursor tracking.</p>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-slate-900 dark:text-white">Phase 3: Automated Pull Request Review Bot</span>
                    <span className="text-[10px] text-purple-600 font-mono">Q1 2027</span>
                  </div>
                  <p className="text-slate-500">Integration with GitHub webhooks to automatically review student capstone project pull requests for accessibility, security, and performance flaws.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
