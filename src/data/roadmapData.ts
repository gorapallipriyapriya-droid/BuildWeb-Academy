import { RoadmapModule } from '../types';

export const roadmapModules: RoadmapModule[] = [
  {
    id: 'web-fundamentals',
    letter: 'A',
    title: 'Web Fundamentals',
    subtitle: 'The Building Blocks of the Internet',
    estimatedHours: '4-6 hours',
    difficulty: 'Beginner',
    summary: 'Master how the internet works, how browsers translate code into pixels, DNS resolution, and the critical difference between HTTP and HTTPS.',
    lessons: [
      {
        id: 'internet-basics',
        title: '1. Internet Basics & Network Topology',
        description: 'Understand packets, IP addresses, routers, and the TCP/IP stack.',
        content: `The Internet is a global network of computers connected together via physical fiber-optic cables under oceans, copper wires, and satellite links.

When you send a message or request a web page:
1. Your data is split into small pieces called **packets** (usually ~1500 bytes each).
2. Each packet has a header containing the **Source IP Address** and **Destination IP Address**.
3. **Routers** along the internet path examine each packet and forward it along the fastest route.
4. The destination server reassembles the packets in the correct order using the **TCP protocol** (Transmission Control Protocol).`,
        tips: [
          'An IP address is like your device postal address on the internet (e.g., IPv4: 192.168.1.1 or IPv6: 2001:db8::1).',
          'TCP guarantees that no packet is lost; if a packet fails to arrive, the server asks your computer to resend it.'
        ],
        codeSnippet: `# Check your device IP and ping a remote server via terminal
ping google.com
# Trace the packet hops across the globe to a server
traceroute github.com`,
        language: 'bash'
      },
      {
        id: 'how-browsers-work',
        title: '2. How Browsers Work & The Critical Rendering Path',
        description: 'The journey from raw HTML/CSS strings into painted pixels on your screen.',
        content: `When your browser receives an HTML file, it runs through the **Critical Rendering Path**:
1. **DOM Construction**: The browser parses HTML tokens and builds the Document Object Model (DOM) tree.
2. **CSSOM Construction**: The browser parses CSS stylesheets and builds the CSS Object Model tree.
3. **Render Tree**: DOM + CSSOM are combined, filtering out non-visible elements like <head> or display: none.
4. **Layout (Reflow)**: Calculates the exact geometry (width, height, coordinates) of every element.
5. **Paint & Composite**: Fills pixels with colors, borders, images, and shadows, then composites layers onto the GPU.`,
        interactiveComponent: 'web-flow',
        tips: [
          'Large unoptimized images or blocking JavaScript files inside <head> delay DOM construction.',
          'Always use the defer or async attribute on external <script> tags to prevent blocking HTML parsing.'
        ],
        codeSnippet: `<!-- Non-blocking script loading -->
<script src="app.js" defer></script>
<!-- CSS should always stay in <head> so styling applies immediately -->
<link rel="stylesheet" href="styles.css">`,
        language: 'html'
      },
      {
        id: 'http-and-https',
        title: '3. HTTP, HTTPS, & Status Codes',
        description: 'The protocol powering every web request, encryption via TLS, and HTTP response codes.',
        content: `HTTP (Hypertext Transfer Protocol) is an application-layer request-response protocol.

**HTTPS** adds **TLS/SSL Encryption** (Transport Layer Security). With HTTPS:
- Data sent between browser and server is encrypted with asymmetric keys.
- Eavesdroppers on public Wi-Fi cannot read passwords, cookies, or credit card numbers.

**Key HTTP Methods**:
- GET: Retrieve data
- POST: Send new data to create a record
- PUT/PATCH: Update existing data
- DELETE: Remove data

**Essential HTTP Status Codes**:
- 200 OK / 201 Created (Success)
- 301 Moved Permanently / 304 Not Modified (Redirect/Cache)
- 400 Bad Request / 401 Unauthorized / 403 Forbidden / 404 Not Found (Client Errors)
- 500 Internal Server Error / 502 Bad Gateway (Server Errors)`,
        codeSnippet: `// Example HTTP Request Headers
GET /api/students HTTP/1.1
Host: webdevacademy.edu
User-Agent: Mozilla/5.0
Accept: application/json

// Example HTTP Response Headers
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: max-age=3600
{
  "status": "success",
  "data": [{ "id": 1, "name": "Alex Rivers" }]
}`,
        language: 'http'
      },
      {
        id: 'domains-hosting-dns',
        title: '4. Domains, Hosting, & DNS Explained',
        description: 'How human names like google.com resolve to numeric IP addresses.',
        content: `When you type "mysite.com" in the browser:
1. **Local DNS Cache**: Browser checks if it already knows the IP.
2. **Recursive Resolver**: Asks your ISP or public DNS (like Cloudflare 1.1.1.1 or Google 8.8.8.8).
3. **Root Nameserver**: Points to the Top-Level Domain (TLD) server (.com, .org, .edu).
4. **Authoritative Nameserver**: Returns the exact **A Record** (IPv4) or **AAAA Record** (IPv6).

Common DNS Record Types:
- **A Record**: Points a domain to an IPv4 address (e.g., mysite.com -> 76.76.21.21).
- **CNAME Record**: Aliases one domain name to another (e.g., www.mysite.com -> mysite.com).
- **MX Record**: Routes emails to mail servers like Google Workspace.
- **TXT Record**: Verification strings for domain ownership and SPF/DKIM email security.`,
        tips: [
          'Domain registrars (Namecheap, Porkbun, Cloudflare) sell domain names for ~$10/year.',
          'Web hosts (Vercel, Netlify, Render, AWS) provide the physical server hardware that stores your code.'
        ],
        exercise: {
          prompt: 'Look up the DNS records of any website using dig or nslookup in your terminal.',
          solution: 'dig google.com +short\nnslookup github.com'
        }
      }
    ]
  },
  {
    id: 'html',
    letter: 'B',
    title: 'HTML5 Essentials',
    subtitle: 'The Semantic Skeleton of the Web',
    estimatedHours: '6-8 hours',
    difficulty: 'Beginner',
    summary: 'Master semantic tags, accessible forms, tables, modern markup best practices, and WCAG accessibility compliance.',
    lessons: [
      {
        id: 'html-structure',
        title: '1. Standard HTML5 Document Boilerplate',
        description: 'Understand the anatomy of an HTML document and the purpose of every tag.',
        content: `Every web page starts with a clean HTML5 standard structure:
- \`<!DOCTYPE html>\`: Informs the browser to render using modern HTML5 standards.
- \`<html lang="en">\`: Identifies language for screen readers and search engines.
- \`<meta charset="UTF-8">\`: Enables characters, accents, and symbols from all world languages.
- \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`: Crucial for responsive mobile viewports.`,
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>WebCraft Academy</h1>
    </header>
    <main>
      <p>Hello world! Welcome to modern web development.</p>
    </main>
    <footer>
      <p>&copy; 2026 WebCraft Academy</p>
    </footer>
    <script src="script.js"></script>
  </body>
</html>`,
        language: 'html'
      },
      {
        id: 'tags-and-elements',
        title: '2. Tags, Elements, Attributes & Text Formatting',
        description: 'Headings, paragraphs, anchors, images, lists, and inline vs block elements.',
        content: `HTML elements consist of a start tag, attributes, content, and an end tag:
- **Block Elements**: Take up 100% of the available width and start on a new line (<div>, <p>, <h1>-<h6>, <section>, <ul>).
- **Inline Elements**: Only take up as much width as their content and do not cause a line break (<span>, <a>, <strong>, <em>).
- **Self-Closing Elements**: Do not contain text content (<img />, <input />, <hr />, <br />).`,
        codeSnippet: `<!-- Accessible links and images -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
  Learn on MDN
</a>

<!-- Always provide descriptive alt text for accessibility -->
<img src="avatar.jpg" alt="Headshot portrait of Maria Chen smiling" width="120" height="120" />

<!-- Unordered and Ordered Lists -->
<ul>
  <li>HTML5 Semantic Markup</li>
  <li>CSS3 Responsive Layouts</li>
  <li>Modern JavaScript ES6+</li>
</ul>`,
        language: 'html'
      },
      {
        id: 'forms-and-validation',
        title: '3. Forms, Input Types, & Native Validation',
        description: 'Build production-ready user input forms with validation and accessibility.',
        content: `Forms are the primary way users submit data to servers.
Key form best practices:
- Always wrap inputs with a corresponding \`<label for="id">\` or place the input inside the label.
- Use specific input types (\`email\`, \`tel\`, \`number\`, \`url\`, \`password\`) so mobile devices display the appropriate virtual keyboard.
- Use native validation attributes (\`required\`, \`minlength\`, \`pattern\`).`,
        codeSnippet: `<form action="/api/register" method="POST" class="signup-form">
  <div class="form-group">
    <label for="student-name">Full Name</label>
    <input type="text" id="student-name" name="name" required minlength="3" placeholder="Jane Doe" />
  </div>

  <div class="form-group">
    <label for="student-email">Email Address</label>
    <input type="email" id="student-email" name="email" required placeholder="jane@example.com" />
  </div>

  <div class="form-group">
    <label for="track">Choose Course Track</label>
    <select id="track" name="track">
      <option value="frontend">Frontend Specialist</option>
      <option value="backend">Backend & APIs</option>
      <option value="fullstack">Full Stack Developer</option>
    </select>
  </div>

  <button type="submit">Complete Enrollment</button>
</form>`,
        language: 'html'
      },
      {
        id: 'semantic-html-accessibility',
        title: '4. Semantic HTML & Accessibility (a11y)',
        description: 'Why <div> soup hurts SEO and screen readers, and how to write semantic code.',
        content: `Semantic HTML means using HTML elements according to their intended meaning rather than purely visual presentation.

**Why Semantic HTML Matters**:
1. **Screen Readers**: Blind or visually impaired users navigate by landmarks (<header>, <nav>, <main>, <article>, <footer>).
2. **SEO**: Search engine crawlers (Googlebot) prioritize content inside <h1> and <article> tags.
3. **Maintainability**: Cleaner code that teammates can immediately understand.

**Common Semantic Replacements**:
- Instead of \`<div class="header">\` -> use \`<header>\`
- Instead of \`<div class="menu">\` -> use \`<nav>\`
- Instead of \`<div class="content">\` -> use \`<main>\`
- Instead of \`<div onclick="...">\` -> use \`<button type="button">\``,
        tips: [
          'Never use a <div> as a clickable button! A real <button> is automatically keyboard-accessible with Tab and Enter keys.',
          'Always maintain heading hierarchy: never skip from <h1> straight to <h4>.'
        ],
        codeSnippet: `<!-- Accessible Semantic Article -->
<article aria-labelledby="post-title">
  <header>
    <h2 id="post-title">Understanding the Box Model</h2>
    <p class="meta">By Sarah Connor on <time datetime="2026-03-15">March 15, 2026</time></p>
  </header>
  <p>Every element in CSS is treated as a rectangular box...</p>
</article>`,
        language: 'html'
      }
    ]
  },
  {
    id: 'css',
    letter: 'C',
    title: 'CSS3 & Modern Styling',
    subtitle: 'From Box Model to Responsive Grids',
    estimatedHours: '8-10 hours',
    difficulty: 'Beginner',
    summary: 'Master the CSS Box Model, Flexbox, CSS Grid, mobile-first media queries, typography, transitions, and modern variables.',
    lessons: [
      {
        id: 'box-model',
        title: '1. The CSS Box Model Explained',
        description: 'Content, padding, border, and margin — the core of all page geometry.',
        content: `Every HTML element rendered on screen is enclosed in a rectangular box consisting of four layers from inside out:
1. **Content**: The actual text, image, or video inside the element.
2. **Padding**: Transparent inner space surrounding the content.
3. **Border**: The stroke line wrapping the padding and content.
4. **Margin**: Transparent outer space separating this element from surrounding elements.

**box-sizing: border-box** is the modern universal standard. It ensures that width and height include padding and borders, preventing accidental layout overflows.`,
        interactiveComponent: 'box-model',
        codeSnippet: `/* Essential Global CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card {
  width: 320px;
  padding: 24px;       /* Inner breathing room */
  border: 1px solid #cbd5e1;
  margin: 16px auto;   /* Centered horizontally */
  border-radius: 8px;
  background-color: #ffffff;
}`,
        language: 'css'
      },
      {
        id: 'flexbox',
        title: '2. Flexbox (Flexible Box Layout)',
        description: 'One-dimensional layouts for navigation bars, card alignments, and centering.',
        content: `Flexbox is designed for 1-dimensional layouts (along either a row or a column).
- **display: flex**: Activates flex context on the container.
- **flex-direction**: \`row\` (default horizontal) or \`column\` (vertical).
- **justify-content**: Aligns items along the main axis (\`flex-start\`, \`center\`, \`flex-end\`, \`space-between\`, \`space-around\`).
- **align-items**: Aligns items along the cross axis (\`stretch\`, \`center\`, \`flex-start\`, \`flex-end\`).
- **gap**: The modern way to add spacing between child items without tricky margins!`,
        interactiveComponent: 'flexbox',
        codeSnippet: `/* Centering anything in CSS perfectly */
.center-container {
  display: flex;
  justify-content: center; /* Main axis center */
  align-items: center;     /* Cross axis center */
  min-height: 100vh;
}

/* Modern responsive nav bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1.5rem;
}`,
        language: 'css'
      },
      {
        id: 'css-grid',
        title: '3. CSS Grid (Two-Dimensional Layouts)',
        description: 'Build complete magazine layouts, product matrices, and dashboard grids with ease.',
        content: `While Flexbox is 1D (rows OR columns), CSS Grid is 2D (rows AND columns simultaneously).
Key Grid Concepts:
- **grid-template-columns**: Defines columns using pixel, percentage, or fractional units (\`fr\`).
- **repeat(auto-fit, minmax(280px, 1fr))**: The famous auto-responsive grid that requires NO media queries!
- **grid-template-areas**: Name regions like "header header", "sidebar content", "footer footer".`,
        codeSnippet: `/* Auto-responsive card grid without media queries */
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Holy Grail 2-column layout */
.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}`,
        language: 'css'
      },
      {
        id: 'responsive-design',
        title: '4. Responsive Web Design & Media Queries',
        description: 'Mobile-first workflows, fluid typography, and breakpoint strategies.',
        content: `More than 60% of global web traffic comes from mobile devices. Responsive web design ensures your website looks great on smartphones, tablets, laptops, and ultra-wide desktop monitors.

**The Mobile-First Philosophy**:
Write base styles for small phone screens first (clean single-column layouts). Then use \`@media (min-width: ...)\` to progressively enhance the experience as the screen expands.`,
        codeSnippet: `/* Base Mobile Styles (under 640px) */
.content-wrapper {
  padding: 1rem;
  font-size: 1rem;
}

/* Tablet (min-width: 768px) */
@media (min-width: 768px) {
  .content-wrapper {
    padding: 2rem;
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }
}`,
        language: 'css'
      },
      {
        id: 'animations-transitions',
        title: '5. Animations & Smooth Transitions',
        description: 'Hardware-accelerated CSS transitions, keyframes, and performance best practices.',
        content: `CSS transitions and animations add delight and direct the user's attention.
**Golden Rule of Web Animation**: Only animate \`transform\` (translate, scale, rotate) and \`opacity\`. These two properties are processed by the GPU compositor and will never trigger costly layout recalculations or browser lag.`,
        codeSnippet: `/* Smooth button hover interaction */
.btn-primary {
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1), background-color 180ms ease;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
}`,
        language: 'css'
      }
    ]
  },
  {
    id: 'javascript',
    letter: 'D',
    title: 'JavaScript (ES6+)',
    subtitle: 'The Programming Language of the Web',
    estimatedHours: '12-16 hours',
    difficulty: 'Intermediate',
    summary: 'Variables, data structures, DOM manipulation, asynchronous programming, Promises, Fetch API, and modern ES6+ features.',
    lessons: [
      {
        id: 'variables-data-types',
        title: '1. Variables, Data Types & Operators',
        description: 'let vs const, primitive vs reference types, and template literals.',
        content: `JavaScript is the dynamic programming language that makes websites interactive.
- Always declare variables with **const** (for values that don't change) or **let** (for values that will be reassigned). Never use \`var\`.
- **7 Primitive Data Types**: String, Number, Boolean, Null, Undefined, BigInt, Symbol.
- **Reference Types**: Objects, Arrays, and Functions.`,
        codeSnippet: `const studentName = 'Sarah Jenkins'; // String
const currentScore = 95;             // Number
const isEnrolled = true;             // Boolean
let completedModules = null;         // Intentionally empty object

// Modern Template Literals with backticks
const greeting = \`Welcome back, \${studentName}! Your score is \${currentScore}%.\`;
console.log(greeting);`,
        language: 'javascript'
      },
      {
        id: 'functions-scope',
        title: '2. Functions, Arrow Functions & Scope',
        description: 'Function declarations, concise arrow functions, parameters, and closures.',
        content: `Functions encapsulate reusable blocks of logic. Arrow functions (\`=>\`) provide a cleaner syntax and inherit the \`this\` binding from their lexical scope.`,
        codeSnippet: `// Standard function declaration
function calculateGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  return 'C';
}

// Modern Arrow Function with implicit return
const formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;

// Array filtering with arrow functions
const testScores = [88, 92, 74, 99, 65];
const honorRoll = testScores.filter((score) => score >= 90);
console.log(honorRoll); // [92, 99]`,
        language: 'javascript'
      },
      {
        id: 'arrays-objects',
        title: '3. Arrays, Objects & ES6+ Destructuring',
        description: 'Work with collections using map, filter, reduce, spread operator, and destructuring.',
        content: `Modern JavaScript applications deal with JSON collections of arrays and objects from databases and APIs.
Essential array methods:
- **map()**: Transforms every element and returns a new array.
- **filter()**: Keeps elements that match a truthy condition.
- **reduce()**: Accumulates items into a single final value (e.g. cart total).`,
        codeSnippet: `const courses = [
  { id: 1, title: 'HTML5 Semantic Web', price: 0 },
  { id: 2, title: 'CSS3 Flex & Grid Masterclass', price: 29 },
  { id: 3, title: 'React & Next.js Architecture', price: 49 }
];

// Destructuring in action
const { title, price } = courses[0];

// Calculate total cart value using reduce
const totalCartPrice = courses.reduce((sum, item) => sum + item.price, 0);
console.log(\`Total: $\${totalCartPrice}\`); // Total: $78`,
        language: 'javascript'
      },
      {
        id: 'dom-manipulation-events',
        title: '4. DOM Manipulation & Event Handling',
        description: 'Selecting elements, updating styles, listening for clicks, keyboard events, and forms.',
        content: `The DOM (Document Object Model) is JavaScript's bridge to HTML.
Key methods:
- \`document.querySelector('.class')\` or \`document.getElementById('id')\`
- \`element.textContent\` or \`element.innerHTML\`
- \`element.classList.add()\` / \`remove()\` / \`toggle()\`
- \`element.addEventListener('click', (event) => { ... })\``,
        codeSnippet: `// Interactive counter implementation in pure JavaScript
const counterDisplay = document.querySelector('#count-display');
const incrementBtn = document.querySelector('#increment-btn');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
  
  if (count >= 10) {
    counterDisplay.style.color = '#16a34a'; // Green highlight
  }
});`,
        language: 'javascript'
      },
      {
        id: 'async-await-fetch',
        title: '5. Asynchronous JavaScript: Promises & Fetch API',
        description: 'How to fetch data from remote servers without freezing the browser UI.',
        content: `JavaScript is single-threaded. When fetching data from an API across the internet, you must not freeze the browser while waiting for the response.
- **Promises**: Objects representing the eventual completion (or failure) of an asynchronous task.
- **async / await**: Clean, readable syntax for handling asynchronous operations sequentially.
- **try / catch**: Robust error handling for network timeouts or broken endpoints.`,
        codeSnippet: `// Fetching student profiles asynchronously
async function loadStudents() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(\`Network error: \${response.status}\`);
    }

    const students = await response.json();
    console.log('Loaded students:', students);
    return students;
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'frontend-frameworks',
    letter: 'E',
    title: 'Frontend Frameworks (React & Next.js)',
    subtitle: 'Modern Component-Driven Web Apps',
    estimatedHours: '14-18 hours',
    difficulty: 'Intermediate',
    summary: 'Build high-performance web applications using React components, props, hooks, Next.js server rendering, and modern state management.',
    lessons: [
      {
        id: 'why-react',
        title: '1. Why React? Component-Based Architecture',
        description: 'Learn why industry teams build UI with declarative reusable components.',
        content: `Before React, developers manually updated DOM elements with innerHTML and querySelector. As applications grew, keeping the UI in sync with changing data became messy and bug-prone.

**React Solves This With**:
1. **Declarative UI**: You declare what the UI should look like for a given state; React handles DOM updates automatically.
2. **Component Reusability**: Break your UI into small, self-contained pieces (Button, Card, Modal, Navbar).
3. **Virtual DOM**: React compares previous and new renders in memory (Reconciliation) and only mutates the minimal real DOM elements.`,
        codeSnippet: `// Reusable CourseCard component in React
interface CourseCardProps {
  title: string;
  duration: string;
  isPopular?: boolean;
}

export function CourseCard({ title, duration, isPopular }: CourseCardProps) {
  return (
    <div className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
      {isPopular && <span className="text-xs text-blue-600 font-semibold uppercase">Popular</span>}
      <h3 className="text-lg font-bold mt-1">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{duration} total</p>
    </div>
  );
}`,
        language: 'tsx'
      },
      {
        id: 'react-hooks',
        title: '2. React State & Hooks (useState, useEffect)',
        description: 'Manage dynamic application state and lifecycle side effects.',
        content: `Hooks allow functional components to have state and lifecycle capabilities.
- **useState**: Stores values that trigger a component re-render when changed.
- **useEffect**: Runs side effects like fetching data, attaching timers, or syncing with localStorage after the component renders.`,
        codeSnippet: `import { useState, useEffect } from 'react';

export function StudentTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    // Cleanup function when unmounted
    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <div>
      <p>Study Session Time: {seconds}s</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start Focus'}
      </button>
    </div>
  );
}`,
        language: 'tsx'
      },
      {
        id: 'nextjs-architecture',
        title: '3. Next.js, SSR, SSG & The App Router',
        description: 'Server-side rendering, static site generation, and file-system based routing.',
        content: `Next.js is the production framework built on top of React.
Key Rendering Strategies:
- **SSG (Static Site Generation)**: Pages are pre-rendered into HTML files at build time. Blazing fast, great for blogs and marketing pages.
- **SSR (Server-Side Rendering)**: HTML is generated on the server on every request. Ideal for real-time user dashboards.
- **CSR (Client-Side Rendering)**: Standard React where the browser downloads JavaScript and builds the UI.`,
        codeSnippet: `// Next.js App Router (app/courses/[id]/page.tsx)
interface PageProps {
  params: { id: string };
}

// Server Component (fetches data directly on server without client waterfall)
export default async function CourseDetailPage({ params }: PageProps) {
  const course = await getCourseById(params.id);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-4 text-slate-600">{course.description}</p>
    </main>
  );
}`,
        language: 'tsx'
      },
      {
        id: 'vue-overview',
        title: '4. Vue.js & Modern Framework Landscape',
        description: 'Comparing React, Vue 3 Composition API, and choosing the right framework.',
        content: `Vue.js is known for its gentle learning curve and Single File Components (SFCs) containing \`<template>\`, \`<script>\`, and \`<style>\` in one file.
While React uses JSX and explicit functional hooks, Vue uses reactive proxies (\`ref\` and \`reactive\`). Both frameworks share component-based architectures.`,
        codeSnippet: `<!-- Vue 3 Single File Component (SFC) -->
<template>
  <button @click="increment" class="btn">
    Clicked: {{ count }} times
  </button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const increment = () => count.value++;
</script>`,
        language: 'vue'
      }
    ]
  },
  {
    id: 'backend-development',
    letter: 'F',
    title: 'Backend Development & Node.js',
    subtitle: 'Server Architecture, Express, & REST APIs',
    estimatedHours: '12-16 hours',
    difficulty: 'Intermediate',
    summary: 'Build scalable backend services with Node.js, Express, RESTful routing, authentication with JWT, middleware, and secure CRUD operations.',
    lessons: [
      {
        id: 'nodejs-express',
        title: '1. Node.js Architecture & Express Server',
        description: 'Understand the V8 JavaScript runtime, event loop, and Express HTTP framework.',
        content: `Node.js allows you to execute JavaScript on the server rather than just in the browser. It uses an **event-driven, non-blocking I/O model**, making it lightweight and capable of handling thousands of simultaneous connections efficiently.

Express is the minimalist web framework for Node.js that simplifies routing, handling requests, and parsing JSON bodies.`,
        codeSnippet: `// Express server setup (server.js)
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming application/json bodies

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
        language: 'javascript'
      },
      {
        id: 'rest-api-crud',
        title: '2. RESTful API Architecture & CRUD Operations',
        description: 'Design standardized endpoints following REST conventions for Create, Read, Update, Delete.',
        content: `REST (Representational State Transfer) is the architectural pattern for web APIs.
Standard REST Route Conventions for a "students" resource:
- **GET /api/students**: Retrieve all students
- **GET /api/students/:id**: Retrieve one student by ID
- **POST /api/students**: Create a new student (body contains JSON)
- **PUT /api/students/:id**: Replace a student record
- **PATCH /api/students/:id**: Partially update fields
- **DELETE /api/students/:id**: Delete a student`,
        codeSnippet: `// Full CRUD Routes in Express
let students = [
  { id: 1, name: 'Maya Patel', track: 'Full Stack' }
];

// GET all
app.get('/api/students', (req, res) => {
  res.json(students);
});

// POST new student
app.post('/api/students', (req, res) => {
  const { name, track } = req.body;
  if (!name || !track) {
    return res.status(400).json({ error: 'Name and track are required.' });
  }
  const newStudent = { id: Date.now(), name, track };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// DELETE student
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.status(204).send();
});`,
        language: 'javascript'
      },
      {
        id: 'auth-jwt-security',
        title: '3. Authentication, Password Hashing & JWT',
        description: 'Implement secure registration, bcrypt password hashing, and stateless JWT tokens.',
        content: `Security is paramount on the backend:
1. **Never store plain text passwords in a database!** Always hash passwords using algorithms like **bcrypt** with a salt factor (10+ rounds).
2. **JWT (JSON Web Tokens)**: A compact URL-safe token containing header, payload, and signature. Upon login, the client receives the JWT and passes it in the \`Authorization: Bearer <token>\` header for authenticated endpoints.`,
        codeSnippet: `import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Registration: Hash password before saving
async function registerUser(email, plainPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  // Store email and hashedPassword in database
}

// Login: Compare password and issue JWT token
async function loginUser(email, plainPassword, storedHash) {
  const isMatch = await bcrypt.compare(plainPassword, storedHash);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: 'student' },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return token;
}`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'databases',
    letter: 'G',
    title: 'Databases & Data Modeling',
    subtitle: 'SQL, PostgreSQL, & MongoDB',
    estimatedHours: '8-12 hours',
    difficulty: 'Intermediate',
    summary: 'Master relational SQL vs document NoSQL databases, schema design, primary and foreign keys, queries, and normalization.',
    lessons: [
      {
        id: 'sql-vs-nosql',
        title: '1. Relational (SQL) vs Document (NoSQL)',
        description: 'Understand PostgreSQL/MySQL vs MongoDB and when to choose each.',
        content: `Choosing the right database determines how your data will scale:

| Criteria | Relational (SQL) | Document NoSQL |
| :--- | :--- | :--- |
| **Examples** | PostgreSQL, MySQL, SQLite | MongoDB, CouchDB |
| **Data Structure** | Structured Tables with Rows & Columns | JSON-like BSON Documents |
| **Schema** | Rigid, predefined schema | Flexible, dynamic schema |
| **Relationships** | Powerful JOINs across foreign keys | Embedded sub-documents or manual refs |
| **Best For** | Banking, E-commerce, ERPs, structured data | Content management, IoT, rapid prototypes |`,
        tips: [
          'PostgreSQL is currently the most popular and versatile open-source relational database in modern software engineering.',
          'MongoDB is great when your data model is constantly evolving or looks like unstructured JSON.'
        ],
        codeSnippet: `-- SQL Table Creation with Foreign Key
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_name VARCHAR(100) NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);`,
        language: 'sql'
      },
      {
        id: 'database-design-queries',
        title: '2. SQL Queries, JOINs & Schema Design',
        description: 'Master SELECT, INSERT, UPDATE, DELETE, and relational INNER/LEFT JOINs.',
        content: `Relational databases excel at querying related tables. The **JOIN** operation combines rows from two or more tables based on a related column.`,
        codeSnippet: `-- Fetching students along with their enrolled courses
SELECT 
  users.username, 
  users.email, 
  enrollments.course_name, 
  enrollments.completed
FROM users
INNER JOIN enrollments ON users.id = enrollments.user_id
WHERE enrollments.completed = true
ORDER BY users.username ASC;`,
        language: 'sql'
      },
      {
        id: 'mongodb-atlas',
        title: '3. MongoDB & Mongoose Schema Modeling',
        description: 'Work with MongoDB documents, collections, and Mongoose ORM models in Node.js.',
        content: `In MongoDB, data is stored in BSON documents inside collections. Mongoose provides a schema layer for Node.js applications to validate and structure MongoDB data.`,
        codeSnippet: `import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  enrolledTrack: { 
    type: String, 
    enum: ['frontend', 'backend', 'fullstack'], 
    default: 'frontend' 
  },
  completedLessons: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export const Student = mongoose.model('Student', StudentSchema);`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'deployment',
    letter: 'H',
    title: 'Git, GitHub & Deployment',
    subtitle: 'Ship Your Websites to the Real World',
    estimatedHours: '6-8 hours',
    difficulty: 'Intermediate',
    summary: 'Master version control with Git, team collaboration on GitHub, continuous deployment on Vercel, Netlify, and Render, and custom domain setup.',
    lessons: [
      {
        id: 'git-essentials',
        title: '1. Git Version Control Fundamentals',
        description: 'Initialize repos, stage changes, commit history, and branches.',
        content: `Git is a distributed version control system that tracks changes in your source code over time.
Essential Git commands every student must know:
- \`git init\`: Starts a new local repository.
- \`git status\`: Shows modified and staged files.
- \`git add .\`: Stages all changed files for commit.
- \`git commit -m "feat: add contact form"\`: Saves a snapshot in history.
- \`git branch <name>\` & \`git checkout -b <name>\`: Creates and switches to a feature branch.`,
        codeSnippet: `# Standard Git workflow from scratch
git init
git add .
git commit -m "Initial commit: website structure"

# Connect to GitHub remote
git remote add origin https://github.com/yourusername/my-website.git
git branch -M main
git push -u origin main`,
        language: 'bash'
      },
      {
        id: 'github-collaboration',
        title: '2. GitHub & Open-Source Collaboration',
        description: 'Pushing code, opening Pull Requests (PRs), code reviews, and resolving merge conflicts.',
        content: `GitHub is the cloud platform that hosts Git repositories and enables developer collaboration worldwide.
The GitHub Pull Request (PR) workflow:
1. Fork or branch from \`main\` (e.g., \`git checkout -b fix/mobile-nav\`).
2. Make your code changes and commit.
3. Push branch to GitHub: \`git push origin fix/mobile-nav\`.
4. Open a Pull Request for review.
5. Automated CI checks run tests; team reviews code and approves.
6. Merge into \`main\`.`,
        tips: [
          'Write clear commit messages starting with conventional prefixes: feat:, fix:, docs:, style:, refactor:.',
          'Never commit sensitive API keys or .env files! Always add .env to your .gitignore file.'
        ],
        codeSnippet: `# Recommended .gitignore file
node_modules/
.env
.env.local
dist/
build/
.DS_Store`,
        language: 'text'
      },
      {
        id: 'hosting-platforms',
        title: '3. Hosting Platforms: Vercel, Netlify & Render',
        description: 'Connect your GitHub repo for instant automatic CI/CD deployments on git push.',
        content: `Modern web hosting uses **Git-based Continuous Deployment (CI/CD)**:
- **Vercel**: The gold standard for Next.js and frontend React apps. Every git push creates an instant preview deployment.
- **Netlify**: Superb for static sites, forms, and serverless functions.
- **Render / Railway**: Ideal for full-stack Node.js servers, Docker containers, and PostgreSQL databases.

**Deployment Steps in 3 Minutes**:
1. Push your code to a GitHub repository.
2. Sign up on Vercel or Netlify with GitHub.
3. Click "Import Repository".
4. Set build command (\`npm run build\`) and output directory (\`dist\` or \`.next\`).
5. Add any required environment variables.
6. Click "Deploy" — your site is live with global CDN caching and free HTTPS!`,
        codeSnippet: `// Example vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true
}`,
        language: 'json'
      }
    ]
  }
];
