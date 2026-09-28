export interface ResourceItem {
  name: string;
  category: 'Free Courses' | 'Official Documentation' | 'YouTube Channels' | 'Coding Platforms' | 'Open Source';
  description: string;
  url: string;
  badge?: string;
}

export const learningResources: ResourceItem[] = [
  // Free Courses
  {
    name: 'The Odin Project',
    category: 'Free Courses',
    description: 'An open-source full-stack web development curriculum with hands-on projects from basic HTML to full-stack JavaScript and React.',
    url: 'https://theodinproject.com',
    badge: 'Highly Recommended'
  },
  {
    name: 'freeCodeCamp',
    category: 'Free Courses',
    description: 'Comprehensive interactive coding certifications covering Responsive Web Design, JavaScript Algorithms, and Front End Development Libraries.',
    url: 'https://freecodecamp.org',
    badge: 'Certifications'
  },
  {
    name: 'CS50x: Introduction to Computer Science',
    category: 'Free Courses',
    description: 'Harvard University famous introductory course teaching algorithmic thinking, C, Python, SQL, and web technologies.',
    url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
    badge: 'Foundations'
  },
  {
    name: 'Full Stack Open',
    category: 'Free Courses',
    description: 'University of Helsinki deep-dive course into modern web development with React, Redux, Node.js, REST APIs, GraphQL, and TypeScript.',
    url: 'https://fullstackopen.com',
    badge: 'Advanced'
  },

  // Documentation
  {
    name: 'MDN Web Docs (Mozilla)',
    category: 'Official Documentation',
    description: 'The definitive encyclopedia for HTML, CSS, JavaScript, Web APIs, and accessibility guidelines.',
    url: 'https://developer.mozilla.org',
    badge: 'Essential'
  },
  {
    name: 'React Official Documentation',
    category: 'Official Documentation',
    description: 'Modern, interactive documentation for React covering functional components, state, hooks, and best practices.',
    url: 'https://react.dev'
  },
  {
    name: 'Tailwind CSS Docs',
    category: 'Official Documentation',
    description: 'Extensive reference for utility-first CSS classes, responsive design variants, and customization.',
    url: 'https://tailwindcss.com/docs'
  },
  {
    name: 'Node.js Documentation',
    category: 'Official Documentation',
    description: 'Official API documentation for Node.js runtime, file system, HTTP modules, and event loop.',
    url: 'https://nodejs.org/docs'
  },

  // YouTube Channels
  {
    name: 'Kevin Powell',
    category: 'YouTube Channels',
    description: 'The master of modern CSS, teaching Flexbox, Grid, container queries, and responsive layouts with unmatched visual clarity.',
    url: 'https://youtube.com/@KevinPowell',
    badge: 'CSS Guru'
  },
  {
    name: 'Traversy Media',
    category: 'YouTube Channels',
    description: 'Practical crash courses on HTML, CSS, JavaScript, Node.js, databases, and practical project builds.',
    url: 'https://youtube.com/@TraversyMedia'
  },
  {
    name: 'Web Dev Simplified',
    category: 'YouTube Channels',
    description: 'Bite-sized, high-density tutorials explaining React hooks, JavaScript nuances, and clean code principles in under 15 minutes.',
    url: 'https://youtube.com/@WebDevSimplified'
  },
  {
    name: 'Fireship',
    category: 'YouTube Channels',
    description: 'Fast-paced, entertaining "in 100 seconds" overviews and modern web development trend summaries.',
    url: 'https://youtube.com/@Fireship'
  },

  // Coding Platforms
  {
    name: 'Frontend Mentor',
    category: 'Coding Platforms',
    description: 'Real-world frontend design challenges with Figma files and assets to practice building production-grade web interfaces.',
    url: 'https://frontendmentor.io',
    badge: 'Portfolio Ready'
  },
  {
    name: 'Codewars',
    category: 'Coding Platforms',
    description: 'Gamified kata exercises to level up your JavaScript problem solving, algorithms, and array manipulations.',
    url: 'https://codewars.com'
  },
  {
    name: 'LeetCode',
    category: 'Coding Platforms',
    description: 'Industry-standard technical interview coding questions for data structures and algorithmic efficiency.',
    url: 'https://leetcode.com'
  },

  // Open Source Projects
  {
    name: 'first-contributions / first-contributions',
    category: 'Open Source',
    description: 'A hands-on GitHub project designed to guide beginners through their very first open-source Pull Request in 5 minutes.',
    url: 'https://github.com/firstcontributions/first-contributions',
    badge: 'First PR'
  },
  {
    name: 'freeCodeCamp / freeCodeCamp',
    category: 'Open Source',
    description: 'The open-source codebase behind freeCodeCamp; contribute translations, fix bugs, or improve curriculum exercises.',
    url: 'https://github.com/freeCodeCamp/freeCodeCamp'
  }
];
