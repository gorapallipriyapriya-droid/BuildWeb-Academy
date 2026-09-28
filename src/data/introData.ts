export interface WebsiteType {
  title: string;
  category: string;
  description: string;
  examples: string[];
  keyFeatures: string[];
  recommendedTech: string;
}

export const websiteTypes: WebsiteType[] = [
  {
    title: 'Personal Portfolio',
    category: 'Showcase',
    description: 'A platform to highlight your projects, skills, resume, and contact links for recruiters and clients.',
    examples: ['brittanychiang.com', 'leerob.io', 'personal domain'],
    keyFeatures: ['About Me section', 'Interactive project gallery', 'Live demo links', 'Contact form'],
    recommendedTech: 'HTML, CSS/Tailwind, JavaScript or React'
  },
  {
    title: 'Blog / Content Publication',
    category: 'Content',
    description: 'An article-based website for sharing tutorials, essays, industry news, and guides organized by categories.',
    examples: ['dev.to', 'Medium', 'Smashing Magazine'],
    keyFeatures: ['Markdown article viewer', 'Search & tag filtering', 'Comments section', 'Reading time & RSS'],
    recommendedTech: 'Next.js, Astro, or WordPress / Headless CMS'
  },
  {
    title: 'E-commerce Store',
    category: 'Commerce',
    description: 'An online marketplace where customers browse product catalogs, add items to cart, and checkout securely.',
    examples: ['Amazon', 'Shopify stores', 'Etsy'],
    keyFeatures: ['Product grid with filters', 'Shopping cart & persistent state', 'Stripe payment gateway', 'Order tracking'],
    recommendedTech: 'Next.js, Node.js, Express, PostgreSQL / MongoDB, Stripe'
  },
  {
    title: 'Business / Corporate Website',
    category: 'Company',
    description: 'The official digital storefront of an organization building credibility, detailing services, and gathering leads.',
    examples: ['Stripe.com', 'Airbnb.com corporate', 'Vercel.com'],
    keyFeatures: ['Hero brand value prop', 'Services & pricing tiers', 'Customer testimonials', 'Lead capture forms'],
    recommendedTech: 'React / Next.js with Tailwind CSS'
  },
  {
    title: 'Educational & E-Learning Portal',
    category: 'Education',
    description: 'An interactive platform offering structured courses, coding playgrounds, quizzes, and certificates.',
    examples: ['Coursera', 'freeCodeCamp', 'Khan Academy'],
    keyFeatures: ['Module syllabus progression', 'Video / code lessons', 'Automated quiz scoring', 'Student dashboard'],
    recommendedTech: 'React, Node.js, PostgreSQL/Firebase, Web Workers'
  },
  {
    title: 'News & Media Magazine',
    category: 'Media',
    description: 'High-traffic publication delivering breaking news, multimedia stories, editorial columns, and newsletters.',
    examples: ['BBC', 'The Verge', 'TechCrunch'],
    keyFeatures: ['Breaking news ticker', 'Media embeds & photo carousels', 'Newsletter subscription', 'Ad/paywall integration'],
    recommendedTech: 'Next.js (SSR/ISR for fast SEO), CDN caching'
  },
  {
    title: 'Social Media & Community',
    category: 'Interactive',
    description: 'User-driven networks with personal feeds, posts, real-time messaging, notifications, and follower graphs.',
    examples: ['Twitter/X', 'Reddit', 'LinkedIn'],
    keyFeatures: ['User authentication & profiles', 'Post creation & media upload', 'Likes/comments/upvotes', 'Real-time WebSocket notifications'],
    recommendedTech: 'React, Node.js, WebSocket (Socket.io), Redis, PostgreSQL'
  }
];

export const webPillars = [
  {
    term: 'Internet',
    analogy: 'The Highway System',
    description: 'A global network of interconnected physical cables, optical fibers, satellites, and routers communicating via TCP/IP protocols.'
  },
  {
    term: 'Browser',
    analogy: 'The Customer / Vehicle',
    description: 'A software program (Chrome, Firefox, Safari) on your device that takes HTML, CSS, and JS files from a server and translates them into a visual, clickable web page.'
  },
  {
    term: 'Domain Name',
    analogy: 'The Street Address',
    description: 'A human-readable name (like google.com or myportfolio.dev) that translates through DNS into a numeric IP address like 142.250.190.46.'
  },
  {
    term: 'DNS (Domain Name System)',
    analogy: 'The Global Phonebook',
    description: 'Translates domain names into IP addresses in milliseconds so browsers know exactly which computer in the world to connect to.'
  },
  {
    term: 'Web Server & Hosting',
    analogy: 'The Physical Building / Shop',
    description: 'A computer connected to the internet 24/7 with a dedicated IP address that stores your website files and delivers them when requested.'
  }
];

export const frontendVsBackendComparison = {
  frontend: {
    title: 'Frontend (Client-Side)',
    subtitle: 'What the user sees, touches, and interacts with directly in the browser.',
    icon: 'Monitor',
    responsibilities: [
      'Visual layout, typography, and color aesthetics',
      'Interactive buttons, navigation menus, and animations',
      'Client-side form validation before submitting',
      'Handling responsive design across mobile, tablet, and desktop',
      'Calling REST / GraphQL APIs to fetch or mutate data'
    ],
    technologies: ['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Vue.js'],
    analogy: 'The dining room of a restaurant: the decor, menu design, friendly waiters, comfortable seats, and plates on your table.'
  },
  backend: {
    title: 'Backend (Server-Side)',
    subtitle: 'The behind-the-scenes engine that processes logic, secures data, and talks to databases.',
    icon: 'Server',
    responsibilities: [
      'Business logic and algorithmic calculations',
      'Secure user authentication (passwords, JWT tokens, OAuth)',
      'Database operations (Create, Read, Update, Delete)',
      'Securing private API keys and payment processing',
      'Handling background jobs, emails, and file storage'
    ],
    technologies: ['Node.js', 'Express.js', 'Python / Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    analogy: 'The kitchen and inventory storage of the restaurant: the chefs, recipes, food safety checks, secret sauces, and supply delivery.'
  }
};
