export type NavSection =
  | 'intro'
  | 'roadmap'
  | 'tools'
  | 'process'
  | 'projects'
  | 'careers'
  | 'interview'
  | 'practice'
  | 'playground'
  | 'resources'
  | 'dashboard'
  | 'forum';

export interface LessonItem {
  id: string;
  title: string;
  description: string;
  content: string;
  codeSnippet?: string;
  language?: string;
  interactiveComponent?: 'web-flow' | 'box-model' | 'flexbox' | 'sql-diagram';
  tips?: string[];
  exercise?: {
    prompt: string;
    starterCode?: string;
    solution?: string;
  };
}

export interface RoadmapModule {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  estimatedHours: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  lessons: LessonItem[];
}

export interface WebTool {
  id: string;
  name: string;
  category: 'Editor' | 'Version Control' | 'Design' | 'DevTools' | 'API' | 'Cloud/Hosting' | 'Database';
  purpose: string;
  installation: string;
  usageGuide: string;
  realWorldExample: string;
  codeOrCommand: string;
  officialLink: string;
}

export interface DevProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  keyActivities: string[];
  deliverables: string[];
  proTips: string[];
  recommendedTools: string[];
}

export interface ProjectTutorial {
  id: string;
  title: string;
  tagline: string;
  level: 'Beginner' | 'Intermediate' | 'Full-Stack';
  techStack: string[];
  features: string[];
  folderStructure: string;
  files: {
    filename: string;
    language: string;
    code: string;
  }[];
  stepByStepExplanation: string[];
  deploymentGuide: string[];
}

export interface CareerPath {
  id: string;
  role: string;
  tagline: string;
  overview: string;
  requiredSkills: {
    core: string[];
    goodToHave: string[];
  };
  salaryRanges: {
    junior: string;
    mid: string;
    senior: string;
  };
  careerGrowthSteps: string[];
  interviewPrepTips: string[];
}

export interface InterviewQuestion {
  id: string;
  category: 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'Backend' | 'Database';
  question: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  answer: string;
  codeExample?: string;
}

export interface CodingChallenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium';
  category: string;
  description: string;
  starterCode: string;
  testCases: {
    input: string;
    expected: string;
  }[];
  solution: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface StudentNote {
  id: string;
  title: string;
  topic: string;
  content: string;
  updatedAt: string;
}

export interface ForumPost {
  id: string;
  author: string;
  avatarSeed: string;
  topic: string;
  title: string;
  content: string;
  upvotes: number;
  createdAt: string;
  replies: {
    id: string;
    author: string;
    content: string;
    createdAt: string;
  }[];
}
