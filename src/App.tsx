import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SearchModal } from './components/SearchModal';
import { CertificateModal } from './components/CertificateModal';
import { SitemapModal } from './components/SitemapModal';
import { motion, AnimatePresence } from 'framer-motion';

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[85vh] relative z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        >
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
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Interactive Web Playground
                </h1>
                <p className="text-sm text-zinc-400 mt-2 max-w-3xl leading-relaxed">
                  Experiment with HTML, CSS, and modern JavaScript in real time with an instant browser iframe preview, built-in developer console, and ready-made interactive starter templates.
                </p>
              </div>
              <InteractiveCodePlayground />
            </div>
          )}
          {currentSection === 'resources' && <ResourcesSection />}
          {currentSection === 'dashboard' && <StudentDashboardSection />}
          {currentSection === 'forum' && <ForumSection />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-blue-600/30 selection:text-white relative overflow-hidden">
        <BackgroundEffects />
        <Navbar />
        <div className="flex-1 relative z-10">
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
