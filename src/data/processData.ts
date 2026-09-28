import { DevProcessStep } from '../types';

export const devProcessSteps: DevProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Requirement Gathering & Scope Definition',
    description: 'Understand what problem the website solves, identify the target user personas, and establish project boundaries.',
    keyActivities: [
      'Interview stakeholders and end users to define goals',
      'Document functional requirements (features users can do: e.g. login, search, pay)',
      'Document non-functional requirements (page load under 2s, 99.9% uptime, mobile responsiveness)',
      'Draft user stories: "As a [role], I want to [action] so that [benefit]"'
    ],
    deliverables: ['Product Requirement Document (PRD)', 'Feature scope list & MVP boundaries', 'User persona profiles'],
    proTips: [
      'Scope creep is the #1 killer of beginner projects. Always lock down your MVP (Minimum Viable Product) before writing code.',
      'Ask "What is the ONE core problem this website solves if only one feature works?"'
    ],
    recommendedTools: ['Notion', 'Google Docs', 'Miro', 'Slack']
  },
  {
    stepNumber: 2,
    title: 'Planning & Technical Architecture',
    description: 'Select the optimal technology stack, organize timelines, and map out the sitemap.',
    keyActivities: [
      'Define the information architecture (Sitemap & route structure)',
      'Choose the technology stack (HTML/CSS/JS vs React/Next.js vs Node.js/PostgreSQL)',
      'Break tasks into milestones using Agile sprints or Kanban boards',
      'Plan API contracts and third-party integrations (Stripe, Cloudinary, SendGrid)'
    ],
    deliverables: ['Site Architecture Map', 'Tech Stack Evaluation Matrix', 'Trello / GitHub Project Board'],
    proTips: [
      'Match technology to the project goals, not hype. A simple portfolio does not need a Kubernetes cluster; static HTML or Vite is faster and cheaper.',
      'Estimate conservatively: multiply your initial time estimate by 1.5x for unexpected debugging.'
    ],
    recommendedTools: ['GitHub Projects', 'Linear', 'Trello', 'Lucidchart']
  },
  {
    stepNumber: 3,
    title: 'Wireframing (Low-Fidelity Layout)',
    description: 'Block out spatial layout and content hierarchy with simple grayscale boxes before choosing colors.',
    keyActivities: [
      'Sketch initial layouts with pencil and paper or digital whiteboard',
      'Create low-fidelity wireframes showing content placement and navigation structure',
      'Test user flow: how many clicks from landing on home to completing key action?',
      'Verify mobile viewport hierarchy before desktop layouts'
    ],
    deliverables: ['Low-fidelity wireframe clickable walkthrough', 'Information layout blueprints'],
    proTips: [
      'Do not use real colors or detailed fonts in wireframes! Colors distract from fundamental layout and navigation flaws.',
      'Focus on content hierarchy: what is the most important element on the screen?'
    ],
    recommendedTools: ['Figma', 'Balsamiq', 'Excalidraw', 'Paper & Pen']
  },
  {
    stepNumber: 4,
    title: 'UI/UX Design & Design System',
    description: 'Transform wireframes into high-fidelity mockups with colors, typography, spacing tokens, and components.',
    keyActivities: [
      'Establish a 60-30-10 color palette (dominant canvas, structural surface, high-contrast accent)',
      'Set typographic scale (Display heading, subhead, body text, monospace for data)',
      'Design modular component states (Default, Hover, Active, Disabled, Error)',
      'Ensure WCAG AA contrast compliance (minimum 4.5:1 for body text)'
    ],
    deliverables: ['High-fidelity interactive prototype', 'Design Token Library (colors, spacing, typography)', 'Asset exports (SVGs, icons)'],
    proTips: [
      'Stick to 1 primary accent color and a family of subtle neutrals (slate, zinc, or gray).',
      'Use 8px spacing increments (8px, 16px, 24px, 32px, 48px) for harmonious spatial alignment.'
    ],
    recommendedTools: ['Figma', 'Adobe XD', 'Coolors.co', 'Contrast Checker']
  },
  {
    stepNumber: 5,
    title: 'Frontend Development',
    description: 'Convert visual Figma designs into clean, accessible, semantic, and responsive code.',
    keyActivities: [
      'Set up Vite / Next.js project with Tailwind CSS and TypeScript',
      'Build reusable layout components (Navbar, Footer, Sidebar, PageContainer)',
      'Implement mobile-first responsive styling across breakpoints (sm, md, lg, xl)',
      'Wire up client-side interactivity, state management, and form validation'
    ],
    deliverables: ['Responsive, accessible frontend application', 'Modular component library', 'Clean git repository'],
    proTips: [
      'Build components in isolation before connecting them to complex global state.',
      'Always use semantic HTML tags (<button>, <main>, <nav>) instead of clickable <div> tags.'
    ],
    recommendedTools: ['VS Code', 'React / Next.js', 'Tailwind CSS', 'Chrome DevTools']
  },
  {
    stepNumber: 6,
    title: 'Backend Development & API Architecture',
    description: 'Build server-side endpoints, business logic, security middleware, and authentication.',
    keyActivities: [
      'Initialize Node.js and Express server with CORS and JSON parsing',
      'Construct RESTful endpoints following standard HTTP methods (GET, POST, PUT, DELETE)',
      'Implement authentication with bcrypt password hashing and JWT / session cookies',
      'Write input validation middleware (Zod or Joi) to sanitize all incoming data'
    ],
    deliverables: ['Secure RESTful API server', 'Authentication endpoints & protected routes', 'API documentation'],
    proTips: [
      'Never trust user input from the client! Always re-validate all data on the server.',
      'Keep controllers thin: separate business logic into dedicated service functions.'
    ],
    recommendedTools: ['Node.js', 'Express', 'Postman', 'Zod', 'jsonwebtoken']
  },
  {
    stepNumber: 7,
    title: 'Database Integration & Modeling',
    description: 'Design relational tables or document collections, define relationships, and write queries.',
    keyActivities: [
      'Design database schema with Entity-Relationship (ER) diagrams',
      'Configure ORM / query builder (Prisma, Drizzle, or Mongoose)',
      'Run database migrations and seed initial development data',
      'Optimize query performance with indexes on frequently filtered columns'
    ],
    deliverables: ['Configured PostgreSQL / MongoDB database', 'ORM schema models & migrations', 'Seeded sample data'],
    proTips: [
      'Always add indexes to columns used in WHERE, JOIN, and ORDER BY clauses.',
      'Never store sensitive plaintext credentials; use environment variables for connection strings.'
    ],
    recommendedTools: ['PostgreSQL', 'MongoDB Atlas', 'Prisma', 'Drizzle ORM', 'DBeaver']
  },
  {
    stepNumber: 8,
    title: 'Testing & Quality Assurance (QA)',
    description: 'Ensure bug-free code, cross-browser compatibility, accessibility compliance, and performance.',
    keyActivities: [
      'Unit testing: Test pure functions and state calculations (Vitest / Jest)',
      'Integration testing: Test API endpoints and database operations (Supertest)',
      'Cross-browser and device testing (Chrome, Safari, Firefox, iOS, Android)',
      'Run Google Lighthouse audits for Performance, Accessibility, and SEO (aim for 90+)'
    ],
    deliverables: ['Automated test suite passing', 'Lighthouse 90+ audit report', 'Bug-free QA signoff'],
    proTips: [
      'Test your web app on a real mobile device, not just simulated browser devtools.',
      'Check color contrast and keyboard navigation (Tab, Shift+Tab, Enter) for accessibility.'
    ],
    recommendedTools: ['Vitest', 'Playwright', 'Chrome Lighthouse', 'WAVE Accessibility Tool']
  },
  {
    stepNumber: 9,
    title: 'Deployment & CI/CD Pipeline',
    description: 'Launch your application to production on high-availability global cloud infrastructure.',
    keyActivities: [
      'Configure Git repository on GitHub and link to hosting providers',
      'Deploy frontend to Vercel / Netlify with automated preview branches',
      'Deploy backend to Render / Railway with production environment variables',
      'Connect custom domain with DNS A and CNAME records and verify SSL/HTTPS certificate'
    ],
    deliverables: ['Live production website with HTTPS padlock', 'Automated CI/CD build on git push', 'Custom domain configuration'],
    proTips: [
      'Double check that all production environment secrets (API keys, database URLs) are set in the cloud dashboard.',
      'Ensure 404 error pages and OpenGraph social preview tags are configured.'
    ],
    recommendedTools: ['Vercel', 'Netlify', 'Render', 'Cloudflare DNS', 'GitHub Actions']
  },
  {
    stepNumber: 10,
    title: 'Maintenance, Monitoring & Iteration',
    description: 'Keep the website secure, monitor real user performance, fix bugs, and iterate based on feedback.',
    keyActivities: [
      'Set up error logging (Sentry) and uptime monitoring (UptimeRobot)',
      'Analyze anonymous web traffic and drop-off rates (Plausible / Google Analytics)',
      'Perform regular dependency security updates (npm audit & Dependabot)',
      'Gather user feedback to prioritize features for the next release'
    ],
    deliverables: ['Active uptime monitoring alerts', 'Error tracking dashboard', 'Regular security patch schedule'],
    proTips: [
      'A website is never truly "finished" — it is a living product that evolves with user feedback.',
      'Regularly review server logs to catch unexpected client errors before users complain.'
    ],
    recommendedTools: ['Sentry', 'UptimeRobot', 'Google Search Console', 'GitHub Dependabot']
  }
];
