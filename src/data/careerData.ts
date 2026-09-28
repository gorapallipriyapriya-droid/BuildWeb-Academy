import { CareerPath } from '../types';

export const careerPaths: CareerPath[] = [
  {
    id: 'frontend-dev',
    role: 'Frontend Developer',
    tagline: 'Specializes in user interfaces, responsive web design, accessibility, and client-side performance.',
    overview: 'Frontend engineers craft what users interact with directly. They translate Figma mockups into accessible, lightning-fast web applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.',
    requiredSkills: {
      core: [
        'Semantic HTML5 & Web Accessibility (WCAG / ARIA)',
        'Modern CSS3, Flexbox, CSS Grid, & Tailwind CSS',
        'JavaScript (ES6+) & TypeScript',
        'React.js / Next.js component architecture & hooks',
        'State management & asynchronous REST / GraphQL API consumption',
        'Browser DevTools, Lighthouse audits, and bundle optimization'
      ],
      goodToHave: [
        'Animation libraries (Framer Motion / CSS transitions)',
        'Testing tools (Vitest, React Testing Library, Playwright)',
        'Server-Side Rendering (SSR) & Static Site Generation (SSG)'
      ]
    },
    salaryRanges: {
      junior: '$65,000 - $85,000',
      mid: '$90,000 - $130,000',
      senior: '$140,000 - $185,000+'
    },
    careerGrowthSteps: [
      'Junior Frontend Developer: Building reusable UI components, styling bug fixes, responsive layouts',
      'Mid-Level Frontend Developer: Architecting application state, API integrations, performance tuning',
      'Senior Frontend Engineer: Leading frontend architecture, design system leadership, mentoring juniors',
      'Staff Engineer / Tech Lead: Cross-team web platform strategy, tech stack selection, core infrastructure'
    ],
    interviewPrepTips: [
      'Master the CSS Box Model, specificity rules, and centering with Flexbox/Grid on a whiteboard or live editor.',
      'Be prepared to code a live interactive component (e.g., autocomplete search, modal, accordion) from scratch in pure JS or React.',
      'Understand the Event Loop, microtasks vs macrotasks, closures, and how React re-rendering works.'
    ]
  },
  {
    id: 'backend-dev',
    role: 'Backend Developer',
    tagline: 'Builds scalable server architectures, secure APIs, business logic, and database systems.',
    overview: 'Backend developers engineer the engines running on cloud servers. They handle business logic, database queries, authentication protocols, rate limiting, and integrations with third-party providers like payment gateways.',
    requiredSkills: {
      core: [
        'Node.js & Express / Python (Django/FastAPI) / Go',
        'Relational Databases (PostgreSQL / MySQL) & complex SQL queries',
        'NoSQL Databases (MongoDB, Redis caching)',
        'RESTful API design principles & HTTP status codes',
        'Authentication protocols (JWT, OAuth 2.0, bcrypt hashing, session cookies)',
        'Security practices (CORS, CSRF protection, SQL injection prevention, rate limiting)'
      ],
      goodToHave: [
        'Docker containerization & Microservices architecture',
        'Message queues (RabbitMQ, Kafka) & background workers',
        'GraphQL & WebSockets for real-time applications'
      ]
    },
    salaryRanges: {
      junior: '$70,000 - $90,000',
      mid: '$95,000 - $140,000',
      senior: '$150,000 - $195,000+'
    },
    careerGrowthSteps: [
      'Junior Backend Developer: Writing CRUD endpoints, database migrations, unit tests',
      'Mid-Level Backend Developer: Designing database schemas, caching layers, securing sensitive endpoints',
      'Senior Backend Engineer: Scaling distributed systems, database optimization, zero-downtime deployments',
      'Principal Backend Architect: Designing high-throughput cloud infrastructure and security compliance'
    ],
    interviewPrepTips: [
      'Practice relational database design: normalize tables, define foreign keys, write JOINs and index strategies.',
      'Be ready to explain REST conventions, idempotency (GET vs PUT vs POST), and error handling.',
      'Prepare system design basics: how would you design a URL shortener or rate limiter?'
    ]
  },
  {
    id: 'fullstack-dev',
    role: 'Full Stack Developer',
    tagline: 'Versatile engineers capable of delivering an entire web application from UI to database.',
    overview: 'Full Stack Developers bridge the gap between user experience and server infrastructure. They can build a feature from the database schema up to the client interface, making them invaluable at startups and product teams.',
    requiredSkills: {
      core: [
        'Frontend fundamentals (HTML5, CSS3, JavaScript/TypeScript, React)',
        'Backend server development (Node.js, Express, Next.js Full-Stack)',
        'Database modeling & querying (PostgreSQL, Prisma, MongoDB)',
        'API construction and consumption (REST, JSON, Fetch)',
        'Version control with Git & GitHub workflows',
        'Cloud deployment & CI/CD (Vercel, Render, Docker)'
      ],
      goodToHave: [
        'Cloud services (AWS S3, Cloudflare, Supabase)',
        'Payment integration (Stripe, PayPal)',
        'DevOps pipelines & automated end-to-end testing'
      ]
    },
    salaryRanges: {
      junior: '$75,000 - $95,000',
      mid: '$105,000 - $145,000',
      senior: '$155,000 - $205,000+'
    },
    careerGrowthSteps: [
      'Junior Full Stack Developer: Shipping end-to-end features, fixing bugs across frontend and backend',
      'Mid-Level Full Stack Developer: Leading entire product features from database schema to polished UI',
      'Senior Full Stack Engineer: Making high-level tech decisions, code architecture, mentor teams',
      'Founding Engineer / CTO: Leading technological vision, hiring engineering teams, scaling products'
    ],
    interviewPrepTips: [
      'Build and deploy at least 2 full-stack projects on your portfolio with working authentication and databases.',
      'Be able to explain how data travels from a user click on the browser all the way to a database disk write and back.',
      'Demonstrate trade-off thinking: when to choose SQL vs NoSQL, or SSR vs CSR.'
    ]
  },
  {
    id: 'ui-ux-designer',
    role: 'UI/UX Designer',
    tagline: 'Designs intuitive, user-centered digital experiences, wireframes, and scalable design systems.',
    overview: 'UI/UX Designers conduct user research, map out user journeys, build wireframes, and design high-fidelity design systems in Figma. They collaborate closely with frontend engineers to turn concepts into reality.',
    requiredSkills: {
      core: [
        'Figma mastery (Auto-layout, components, variants, design tokens)',
        'User research, usability testing, and persona creation',
        'Information architecture and user journey mapping',
        'Visual hierarchy, typography scales, and 60-30-10 color theory',
        'Accessibility compliance (WCAG contrast ratios, touch target sizing)',
        'Interactive prototyping and design handoff to engineers'
      ],
      goodToHave: [
        'Basic HTML/CSS understanding for realistic technical constraints',
        'Micro-interaction design and motion prototyping',
        'Design system tokenization (Storybook synchronization)'
      ]
    },
    salaryRanges: {
      junior: '$60,000 - $80,000',
      mid: '$85,000 - $120,000',
      senior: '$130,000 - $175,000+'
    },
    careerGrowthSteps: [
      'Junior UI Designer: Creating icon assets, adapting design components, user testing notes',
      'Mid-Level Product Designer: Owning end-to-end product flows, conducting user interviews',
      'Lead Product Designer: Creating and scaling company design systems, strategic product direction',
      'Head of Design / VP of UX: Setting visual brand standards and managing design org'
    ],
    interviewPrepTips: [
      'Prepare a portfolio presentation detailing 2-3 case studies with the "Problem -> Research -> Wireframe -> Solution -> Outcome" narrative.',
      'Show that you design for real user needs rather than just making "pretty" Dribbble shots.',
      'Demonstrate understanding of accessibility and responsive screen constraints.'
    ]
  },
  {
    id: 'devops-engineer',
    role: 'DevOps & Cloud Engineer',
    tagline: 'Automates deployment pipelines, ensures cloud uptime, monitors performance, and manages security.',
    overview: 'DevOps engineers bridge software development and IT operations. They maintain CI/CD pipelines, container orchestration, cloud servers (AWS, GCP), and automated monitoring to ensure websites stay online 24/7.',
    requiredSkills: {
      core: [
        'Linux command line, Bash scripting & system administration',
        'Docker containerization & multi-stage Dockerfiles',
        'CI/CD automated pipelines (GitHub Actions, GitLab CI)',
        'Cloud infrastructure (AWS, Google Cloud, DigitalOcean)',
        'Infrastructure as Code (Terraform)',
        'Networking, DNS, SSL/TLS certificates, reverse proxies (Nginx)'
      ],
      goodToHave: [
        'Kubernetes container orchestration',
        'Monitoring & observability (Prometheus, Grafana, Datadog)',
        'Security compliance & secrets management (HashiCorp Vault)'
      ]
    },
    salaryRanges: {
      junior: '$75,000 - $95,000',
      mid: '$110,000 - $150,000',
      senior: '$160,000 - $210,000+'
    },
    careerGrowthSteps: [
      'Junior DevOps / Cloud Engineer: Writing deployment scripts, maintaining CI checks, monitoring logs',
      'Mid-Level DevOps Engineer: Architecting automated CI/CD pipelines, containerizing legacy apps',
      'Senior Site Reliability Engineer (SRE): Managing Kubernetes clusters, ensuring 99.99% high-availability',
      'Head of Infrastructure: Cloud cost optimization, global data security compliance, disaster recovery'
    ],
    interviewPrepTips: [
      'Be fluent in Linux command line tools (grep, awk, curl, netstat, systemctl).',
      'Understand how DNS, SSL handshakes, and reverse proxies (like Nginx) operate under the hood.',
      'Demonstrate experience writing a multi-step GitHub Actions CI/CD workflow.'
    ]
  }
];
