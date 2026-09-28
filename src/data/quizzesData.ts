import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-fund-1',
    topic: 'Web Fundamentals',
    question: 'What is the primary role of a DNS resolver during a web request?',
    options: [
      'To compile JavaScript code on the server',
      'To translate human-readable domain names into numeric IP addresses',
      'To encrypt cookies using SSL certificates',
      'To compress image files before rendering'
    ],
    correctIndex: 1,
    explanation: 'DNS acts like the phonebook of the Internet, translating domain names (like google.com) into IP addresses (like 142.250.190.46) so browsers can load internet resources.'
  },
  {
    id: 'q-fund-2',
    topic: 'Web Fundamentals',
    question: 'Which HTTP status code signifies that a resource was successfully created on the server?',
    options: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'],
    correctIndex: 1,
    explanation: 'HTTP 201 Created is the standard REST status code returned after a successful POST request that creates a new resource.'
  },
  {
    id: 'q-html-1',
    topic: 'HTML',
    question: 'Which HTML element is the most semantically appropriate for the primary navigation links of a website?',
    options: ['<div class="nav-bar">', '<section id="links">', '<nav>', '<aside>'],
    correctIndex: 2,
    explanation: 'The <nav> tag is the semantic HTML5 landmark for major navigation blocks, helping screen readers and search engines identify navigation menus.'
  },
  {
    id: 'q-html-2',
    topic: 'HTML',
    question: 'Why is it critical to always include a descriptive "alt" attribute on <img> tags?',
    options: [
      'It speeds up image loading by 50%',
      'It allows screen readers to announce the image content to visually impaired users and provides fallback text if loading fails',
      'It automatically resizes the image to fit mobile screens',
      'It is required by CSS stylesheets to apply styles'
    ],
    correctIndex: 1,
    explanation: 'The alt attribute provides alternative text for accessibility (screen readers) and acts as a visual fallback if the image URL fails to load.'
  },
  {
    id: 'q-css-1',
    topic: 'CSS',
    question: 'When using "box-sizing: border-box", an element with width: 300px and padding: 20px will have what total rendered width?',
    options: ['340px', '320px', '300px', '280px'],
    correctIndex: 2,
    explanation: 'Under border-box sizing, padding and border are included within the specified width, so the element remains exactly 300px wide on screen.'
  },
  {
    id: 'q-css-2',
    topic: 'CSS',
    question: 'In Flexbox, which property is used to align items along the cross axis?',
    options: ['justify-content', 'align-items', 'flex-direction', 'flex-wrap'],
    correctIndex: 1,
    explanation: 'justify-content aligns items along the main axis, while align-items aligns items along the cross axis (perpendicular to main axis).'
  },
  {
    id: 'q-js-1',
    topic: 'JavaScript',
    question: 'What is the output of typeof [] in standard JavaScript?',
    options: ['"array"', '"object"', '"list"', '"undefined"'],
    correctIndex: 1,
    explanation: 'In JavaScript, arrays are technically specialized objects, so typeof [] evaluates to "object". To check specifically for an array, use Array.isArray([]).'
  },
  {
    id: 'q-js-2',
    topic: 'JavaScript',
    question: 'Which array method transforms every element in an array and returns a new array of the same length?',
    options: ['filter()', 'forEach()', 'map()', 'reduce()'],
    correctIndex: 2,
    explanation: 'map() invokes a callback on each array element and returns a brand new array with the transformed items without mutating the original array.'
  },
  {
    id: 'q-react-1',
    topic: 'React',
    question: 'Why should you never mutate state directly in React (e.g. state.count = 5)?',
    options: [
      'It throws a fatal syntax error in JavaScript',
      'React will not detect the change and will not trigger a re-render of the component',
      'It will delete the component from the DOM permanently',
      'It slows down network connections'
    ],
    correctIndex: 1,
    explanation: 'React relies on state setter functions (like setCount) to schedule reconciliation and re-render the UI. Mutating state directly bypasses React re-render cycle.'
  },
  {
    id: 'q-back-1',
    topic: 'Backend & Databases',
    question: 'Why should you never store plain-text passwords in a database?',
    options: [
      'Plain-text takes up too much database storage space',
      'Database breaches will immediately expose all user passwords in clear text; passwords must always be salted and hashed (e.g. bcrypt)',
      'SQL does not allow storing strings longer than 8 characters',
      'Browsers automatically block servers that store plaintext passwords'
    ],
    correctIndex: 1,
    explanation: 'Storing plain-text passwords is a severe security vulnerability. Passwords must always be hashed with strong cryptographic hashing algorithms like bcrypt or argon2.'
  }
];

export const practiceAssignments = [
  {
    id: 'assign-1',
    title: 'Assignment 1: Accessible Recipe Card',
    level: 'Beginner',
    time: '2 hours',
    objectives: [
      'Write semantic HTML (<article>, <header>, <ol>, <ul>, <time>)',
      'Style with Flexbox or Grid for responsive layout',
      'Ensure WCAG AA contrast ratio of at least 4.5:1',
      'Include nutrition table with accessible <th> and <td> tags'
    ],
    rubric: 'Semantic structure (30%), CSS styling & mobile responsiveness (40%), Accessibility compliance (30%)'
  },
  {
    id: 'assign-2',
    title: 'Assignment 2: Interactive Task Manager (Vanilla JS)',
    level: 'Intermediate',
    time: '4 hours',
    objectives: [
      'Build add, toggle complete, and delete task features',
      'Filter tasks by All, Active, and Completed',
      'Save and restore tasks from localStorage so data persists across refreshes',
      'Add smooth CSS transition when marking items complete'
    ],
    rubric: 'Functionality & no bugs (40%), LocalStorage state sync (30%), Code structure & clean functions (30%)'
  },
  {
    id: 'assign-3',
    title: 'Assignment 3: Full-Stack Book Review API',
    level: 'Full-Stack',
    time: '6 hours',
    objectives: [
      'Set up Node.js and Express server with RESTful routes for /api/books',
      'Connect to PostgreSQL database or MongoDB collection',
      'Implement JWT authentication for posting reviews',
      'Handle error cases with structured JSON error responses (400, 404, 500)'
    ],
    rubric: 'REST endpoint architecture (35%), Database schema & queries (35%), Error handling & security (30%)'
  }
];

export const capstoneProjects = [
  {
    id: 'cap-1',
    title: 'Capstone A: DevConnect - Community Forum & Job Board',
    description: 'A full-stack web application where students can publish tech articles, post job openings, bookmark discussions, and vote on questions.',
    deliverables: ['Responsive React / Next.js frontend', 'Express / Node.js API', 'PostgreSQL database with relational schema', 'Deployed on Vercel + Render with live URL']
  },
  {
    id: 'cap-2',
    title: 'Capstone B: PulseMart - Real-Time Micro-Store',
    description: 'A high-speed e-commerce portal with instant client search, shopping cart drawer, simulated Stripe checkout, and admin product inventory manager.',
    deliverables: ['Custom design system in Tailwind', 'Zustand state store', 'Serverless API endpoints', 'Stripe checkout flow integration']
  }
];
