import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CertificateModal } from './components/CertificateModal';
import { SitemapModal } from './components/SitemapModal';

// Section Views
import { IntroSection } from './components/sections/IntroSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { ToolsSection } from './components/sections/ToolsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CareersSection } from './components/sections/CareersSection';
import { InterviewSection } from './components/sections/InterviewSection';
import { PracticeSection } from './components/sections/PracticeSection';
import { InteractiveCodePlayground } from './components/InteractiveCodePlayground';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { StudentDashboardSection } from './components/sections/StudentDashboardSection';
import { ForumSection } from './components/sections/ForumSection';

const MainContent: React.FC = () => {
  const { currentSection } = useApp();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[80vh]">
      {currentSection === 'intro' && <IntroSection />}
      {currentSection === 'roadmap' && <RoadmapSection />}
      {currentSection === 'tools' && <ToolsSection />}
      {currentSection === 'process' && <ProcessSection />}
      {currentSection === 'projects' && <ProjectsSection />}
      {currentSection === 'careers' && <CareersSection />}
      {currentSection === 'interview' && <InterviewSection />}
      {currentSection === 'practice' && <PracticeSection />}
      {currentSection === 'playground' && (
        <div className="py-8 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Interactive Web Playground
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Experiment with HTML, CSS, and modern JavaScript in real time with an instant browser iframe preview, built-in developer console, and ready-made interactive starter templates.
            </p>
          </div>
          <InteractiveCodePlayground />
        </div>
      )}
      {currentSection === 'resources' && <ResourcesSection />}
      {currentSection === 'dashboard' && <StudentDashboardSection />}
      {currentSection === 'forum' && <ForumSection />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <Navbar />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
        <SearchModal />
        <CertificateModal />
        <SitemapModal />
      </div>
    </AppProvider>
  );
}
