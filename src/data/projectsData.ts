import { ProjectTutorial } from '../types';

export const projectTutorials: ProjectTutorial[] = [
  {
    id: 'portfolio',
    title: '1. Personal Developer Portfolio Website',
    tagline: 'Your digital business card that helps you stand out to recruiters and land your first tech job.',
    level: 'Beginner',
    techStack: ['HTML5', 'CSS3', 'Modern JavaScript'],
    features: [
      'Sticky navigation bar with smooth scrolling links',
      'Hero section with headline, value proposition, and resume download',
      'Interactive Project Showcase cards with GitHub and Live Demo links',
      'Technical skills badge matrix (Frontend, Backend, Tools)',
      'Client-side validated contact form with email confirmation state',
      'Dark and Light theme toggle saved to localStorage'
    ],
    folderStructure: `my-portfolio/
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── avatar.jpg
│   ├── resume.pdf
│   └── icons/
└── README.md`,
    files: [
      {
        filename: 'index.html',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Alex Rivera | Full-Stack Software Engineer</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <nav class="navbar">
    <div class="brand">AR.</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="theme-toggle" aria-label="Toggle theme">🌓</button>
  </nav>

  <main>
    <section class="hero" id="about">
      <span class="greeting">Hi, my name is</span>
      <h1>Alex Rivera</h1>
      <h2>I build accessible, responsive websites from scratch.</h2>
      <p>Computer science student and full-stack developer passionate about clean UI and fast APIs.</p>
      <div class="cta-row">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
      </div>
    </section>

    <section class="projects-section" id="projects">
      <h2>Featured Projects</h2>
      <div class="project-grid">
        <article class="project-card">
          <div class="project-content">
            <h3>EduFlow LMS</h3>
            <p>Modern student dashboard with progress tracking and real-time quizzes.</p>
            <div class="tech-tags">React · Node.js · PostgreSQL</div>
            <div class="project-links">
              <a href="https://github.com" target="_blank">Code ↗</a>
              <a href="https://demo.com" target="_blank">Live Demo ↗</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
  <script src="app.js"></script>
</body>
</html>`
      },
      {
        filename: 'styles.css',
        language: 'css',
        code: `:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --text-muted: #64748b;
  --accent: #2563eb;
  --card-bg: #f8fafc;
  --border: #e2e8f0;
}

[data-theme="dark"] {
  --bg-primary: #0b0f19;
  --text-primary: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #3b82f6;
  --card-bg: #131c2e;
  --border: #1e293b;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background-color 200ms ease, color 200ms ease;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg-primary);
  z-index: 50;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
}

.hero {
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1.5rem;
}

.hero h1 {
  font-size: 3rem;
  line-height: 1.1;
  margin: 0.5rem 0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
}`
      },
      {
        filename: 'app.js',
        language: 'javascript',
        code: `// Theme toggle functionality with localStorage persistence
const themeToggle = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});`
      }
    ],
    stepByStepExplanation: [
      'Step 1: Set up HTML boilerplate with semantic tags (<nav>, <main>, <section>, <article>).',
      'Step 2: Configure CSS custom variables for light and dark themes with smooth transitions.',
      'Step 3: Implement CSS Grid for the project cards so they automatically wrap on mobile screens.',
      'Step 4: Write clean JavaScript to toggle dark mode and save user preference to browser localStorage.'
    ],
    deploymentGuide: [
      'Initialize Git: git init && git add . && git commit -m "initial portfolio commit"',
      'Push to GitHub: create a public repository named "yourusername.github.io" or "portfolio"',
      'Deploy to GitHub Pages: Under Settings -> Pages, select the "main" branch root, or connect to Vercel for instant deployments.'
    ]
  },
  {
    id: 'college-website',
    title: '2. College & University Portal Website',
    tagline: 'An institutional web portal with academic departments, admission details, and faculty directory.',
    level: 'Intermediate',
    techStack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Multi-page navigation: Admissions, Academics, Faculty, Campus Life, Contact',
      'Campus announcement news marquee ticker',
      'Filterable Faculty Directory (by department: CS, Engineering, Arts)',
      'Tuition fee calculator widget',
      'Downloadable course curriculum syllabus PDF triggers'
    ],
    folderStructure: `college-portal/
├── index.html
├── admissions.html
├── academics.html
├── faculty.html
├── js/
│   ├── main.js
│   └── filter.js
└── styles/
    └── output.css`,
    files: [
      {
        filename: 'faculty.html',
        language: 'html',
        code: `<!-- Faculty Directory Filter Component -->
<section class="max-w-6xl mx-auto px-4 py-12">
  <h2 class="text-3xl font-bold text-slate-900 mb-6">Faculty & Researchers</h2>
  
  <!-- Filter tabs -->
  <div class="flex gap-3 mb-8" id="department-filters">
    <button class="filter-btn active" data-dept="all">All Departments</button>
    <button class="filter-btn" data-dept="cs">Computer Science</button>
    <button class="filter-btn" data-dept="engineering">Engineering</button>
    <button class="filter-btn" data-dept="math">Mathematics</button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="faculty-grid">
    <!-- Rendered dynamically via JavaScript -->
  </div>
</section>`
      },
      {
        filename: 'filter.js',
        language: 'javascript',
        code: `const facultyMembers = [
  { id: 1, name: 'Dr. Evelyn Reed', dept: 'cs', title: 'Professor of AI & Machine Learning', email: 'ereed@university.edu' },
  { id: 2, name: 'Prof. Marcus Vance', dept: 'engineering', title: 'Chair of Robotics Engineering', email: 'mvance@university.edu' },
  { id: 3, name: 'Dr. Clara Thorne', dept: 'math', title: 'Associate Professor of Discrete Math', email: 'cthorne@university.edu' },
  { id: 4, name: 'Prof. Sean Miller', dept: 'cs', title: 'Senior Lecturer, Web & Mobile Systems', email: 'smiller@university.edu' }
];

const grid = document.querySelector('#faculty-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderFaculty(members) {
  grid.innerHTML = members.map(m => \`
    <div class="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
      <h3 class="font-bold text-lg text-slate-900">\${m.name}</h3>
      <p class="text-sm text-blue-600 font-medium">\${m.title}</p>
      <p class="text-xs text-slate-500 mt-3">\${m.email}</p>
    </div>
  \`).join('');
}

// Initial render
renderFaculty(facultyMembers);

// Filter interaction
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const dept = btn.dataset.dept;
    if (dept === 'all') {
      renderFaculty(facultyMembers);
    } else {
      renderFaculty(facultyMembers.filter(m => m.dept === dept));
    }
  });
});`
      }
    ],
    stepByStepExplanation: [
      'Step 1: Plan institutional page hierarchy (Home, Admissions, Academics, Faculty, News).',
      'Step 2: Structure semantic tables and admission deadline timelines.',
      'Step 3: Build an interactive faculty directory that filters professors dynamically using JavaScript array filter().',
      'Step 4: Implement quick search for courses by course code or keyword.'
    ],
    deploymentGuide: [
      'Bundle CSS assets using modern build tools or deploy as a static site on Netlify.',
      'Configure redirect rules in _redirects file for clean multi-page URL routing.'
    ]
  },
  {
    id: 'student-management',
    title: '3. Student Management System (Full-Stack CRUD)',
    tagline: 'Complete student record database application with create, read, update, delete operations and search.',
    level: 'Full-Stack',
    techStack: ['Node.js', 'Express', 'PostgreSQL / SQLite', 'React / Vanilla JS'],
    features: [
      'Student enrollment registration form with validation',
      'Search students by name, roll number, or department',
      'Inline edit student grade and attendance records',
      'Delete student with confirmation modal protection',
      'Export student data table to CSV format'
    ],
    folderStructure: `student-crud-system/
├── backend/
│   ├── server.js
│   ├── routes/students.js
│   ├── db.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── package.json`,
    files: [
      {
        filename: 'server.js',
        language: 'javascript',
        code: `import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory or database records
let students = [
  { id: 1, rollNo: 'CS-2026-01', name: 'Maria Chen', gpa: 3.9, status: 'Active' },
  { id: 2, rollNo: 'CS-2026-02', name: 'Liam Foster', gpa: 3.5, status: 'Active' }
];

// GET: Filter students by query
app.get('/api/students', (req, res) => {
  const { search } = req.query;
  if (!search) return res.json(students);
  
  const filtered = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(search.toLowerCase())
  );
  res.json(filtered);
});

// POST: Add new student
app.post('/api/students', (req, res) => {
  const { rollNo, name, gpa } = req.body;
  if (!rollNo || !name) {
    return res.status(400).json({ error: 'Roll number and name required.' });
  }
  const newStudent = { id: Date.now(), rollNo, name, gpa: parseFloat(gpa) || 0, status: 'Active' };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// DELETE: Remove student
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.status(204).send();
});

app.listen(5000, () => console.log('CRUD Server listening on port 5000'));`
      },
      {
        filename: 'app.js',
        language: 'javascript',
        code: `const API_URL = 'http://localhost:5000/api/students';

async function fetchStudents(searchQuery = '') {
  const url = searchQuery ? \`\${API_URL}?search=\${encodeURIComponent(searchQuery)}\` : API_URL;
  const res = await fetch(url);
  const data = await res.json();
  renderTable(data);
}

function renderTable(students) {
  const tbody = document.querySelector('#students-tbody');
  tbody.innerHTML = students.map(s => \`
    <tr class="border-b">
      <td class="p-3 font-mono text-sm">\${s.rollNo}</td>
      <td class="p-3 font-medium">\${s.name}</td>
      <td class="p-3 tabular-nums">\${s.gpa.toFixed(2)}</td>
      <td class="p-3">
        <button onclick="deleteStudent(\${s.id})" class="text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  \`).join('');
}

async function deleteStudent(id) {
  if (confirm('Are you sure you want to remove this student record?')) {
    await fetch(\`\${API_URL}/\${id}\`, { method: 'DELETE' });
    fetchStudents();
  }
}`
      }
    ],
    stepByStepExplanation: [
      'Step 1: Architect backend Express REST API with standard status codes (200, 201, 204, 400).',
      'Step 2: Connect to relational PostgreSQL database or SQLite for durable storage.',
      'Step 3: Build frontend client with asynchronous fetch() calls to load, add, and delete records without reloading the page.',
      'Step 4: Add debounce to the search input to prevent firing network requests on every keystroke.'
    ],
    deploymentGuide: [
      'Deploy backend to Render as a Web Service.',
      'Create a free PostgreSQL database on Render or Supabase and paste DATABASE_URL into Render environment variables.',
      'Deploy frontend to Vercel and point API_URL to the Render production URL.'
    ]
  },
  {
    id: 'blog-website',
    title: '4. Modern Tech Blog with Markdown & Tagging',
    tagline: 'A fast, SEO-optimized publication for sharing engineering tutorials and technical insights.',
    level: 'Intermediate',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Markdown / MDX'],
    features: [
      'Dynamic article routes with Next.js App Router (app/posts/[slug])',
      'Tag filtering system (HTML, CSS, JavaScript, React, System Design)',
      'Estimated reading time calculator and publication timestamp',
      'Syntax highlighted code blocks with one-click copy button',
      'Automated table of contents generated from article headings'
    ],
    folderStructure: `tech-blog/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── posts/
│       └── [slug]/
│           └── page.tsx
├── content/
│   ├── learn-flexbox.md
│   └── modern-js-tips.md
├── lib/
│   └── posts.ts
└── tailwind.config.js`,
    files: [
      {
        filename: 'lib/posts.ts',
        language: 'typescript',
        code: `export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export const samplePosts: Post[] = [
  {
    slug: 'mastering-css-grid',
    title: 'Mastering CSS Grid: From 1fr to Auto-Responsive Layouts',
    description: 'Learn how to build magazine layouts and product grids without complex media queries.',
    date: '2026-03-20',
    tags: ['CSS', 'Frontend'],
    readingTime: '5 min read',
    content: 'CSS Grid provides a two-dimensional grid-based layout system...'
  }
];`
      }
    ],
    stepByStepExplanation: [
      'Step 1: Set up Next.js App Router with TypeScript.',
      'Step 2: Create a content folder storing articles as Markdown files with YAML frontmatter.',
      'Step 3: Parse markdown files on the server using gray-matter and render sanitized HTML.',
      'Step 4: Implement OpenGraph image tags and metadata for social media sharing.'
    ],
    deploymentGuide: [
      'Push to GitHub and connect repository to Vercel.',
      'Vercel builds static pages automatically on git push using Static Site Generation (SSG).'
    ]
  },
  {
    id: 'ecommerce',
    title: '5. Modern E-Commerce Store with Shopping Cart',
    tagline: 'Full-featured online shop with product filter grid, persistent cart drawer, and checkout flow.',
    level: 'Full-Stack',
    techStack: ['React', 'Next.js', 'Zustand / Context', 'Stripe API', 'Tailwind CSS'],
    features: [
      'Product grid with category filter, price range slider, and search',
      'Slide-over shopping cart drawer with quantity increments and badge count',
      'Persistent cart state stored across sessions in localStorage',
      'Checkout modal with Stripe Payment Elements integration',
      'Order confirmation screen with order summary and printable invoice'
    ],
    folderStructure: `ecommerce-store/
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── CartDrawer.tsx
│   │   └── CheckoutModal.tsx
│   ├── store/
│   │   └── cartStore.ts
│   └── data/
│       └── products.ts
└── package.json`,
    files: [
      {
        filename: 'src/store/cartStore.ts',
        language: 'typescript',
        code: `export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Simple state management for cart
export class CartManager {
  private static STORAGE_KEY = 'academy_cart';

  static getCart(): CartItem[] {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  static addItem(product: { id: string; title: string; price: number; image: string }): CartItem[] {
    const cart = this.getCart();
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    return cart;
  }

  static calculateTotal(cart: CartItem[]): number {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}`
      }
    ],
    stepByStepExplanation: [
      'Step 1: Model product schema with SKU, title, price, inventory count, and category.',
      'Step 2: Build responsive product cards with hover preview and "Add to Cart" triggers.',
      'Step 3: Create global state management for the shopping cart with quantity multipliers.',
      'Step 4: Integrate Stripe checkout session on the server for secure card processing.'
    ],
    deploymentGuide: [
      'Frontend deployed on Vercel.',
      'Stripe Webhooks configured on server to safely verify payment completion.'
    ]
  },
  {
    id: 'course-platform',
    title: '6. Interactive Online Course Platform (LMS)',
    tagline: 'Comprehensive learning management system with video lessons, quiz checkpoints, and certificates.',
    level: 'Full-Stack',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Curriculum sidebar with collapsible modules and active lesson indicator',
      'Lesson completion checkpoint buttons that update student progress bar',
      'In-lesson interactive coding exercises with instant output preview',
      'End-of-module multiple-choice quiz evaluation',
      'Dynamic Certificate of Completion generator with student verification ID'
    ],
    folderStructure: `lms-platform/
├── src/
│   ├── components/
│   │   ├── LessonViewer.tsx
│   │   ├── QuizModal.tsx
│   │   ├── CertificateGenerator.tsx
│   │   └── ProgressTracker.tsx
│   ├── context/
│   │   └── CourseContext.tsx
│   └── data/
│       └── syllabus.ts
└── package.json`,
    files: [
      {
        filename: 'src/components/ProgressTracker.tsx',
        language: 'tsx',
        code: `interface ProgressTrackerProps {
  completedCount: number;
  totalCount: number;
}

export function ProgressTracker({ completedCount, totalCount }: ProgressTrackerProps) {
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center text-sm font-medium mb-2">
        <span className="text-slate-700">Course Progress</span>
        <span className="text-blue-600 font-semibold tabular-nums">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
      <p className="text-xs text-slate-500 mt-2">
        {completedCount} of {totalCount} lessons completed
      </p>
    </div>
  );
}`
      }
    ],
    stepByStepExplanation: [
      'Step 1: Structure multi-tier course data model (Course -> Modules -> Lessons -> Quizzes).',
      'Step 2: Build responsive video/lesson player with notes panel and completion checkboxes.',
      'Step 3: Compute overall course completion percentage dynamically in state.',
      'Step 4: Unlock downloadable/printable SVG Certificate when progress reaches 100%.'
    ],
    deploymentGuide: [
      'Deploy Next.js application on Vercel with PostgreSQL database provisioned on Neon or Supabase.'
    ]
  }
];
