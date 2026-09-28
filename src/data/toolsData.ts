import { WebTool } from '../types';

export const webTools: WebTool[] = [
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'Editor',
    purpose: 'The most popular, highly extensible code editor in modern software engineering, developed by Microsoft.',
    installation: 'Download for Windows, macOS, or Linux from code.visualstudio.com. Run the installer and check "Add to PATH" so you can open any folder with "code .".',
    usageGuide: 'Use Command Palette (Ctrl+Shift+P / Cmd+Shift+P) to run any command. Install essential web extensions: Prettier (code formatter), ESLint (syntax linter), Tailwind CSS IntelliSense, Live Server, and Auto Rename Tag.',
    realWorldExample: 'Developers write React components, debug Node.js backends with built-in breakpoints, and run integrated terminals all within VS Code.',
    codeOrCommand: `# Open current project folder in VS Code
code .

# Recommended Extensions in .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ritwickdey.liveserver"
  ]
}`,
    officialLink: 'https://code.visualstudio.com'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Version Control',
    purpose: 'Cloud platform for Git version control, collaborative code reviews, CI/CD automated testing, and developer portfolio showcasing.',
    installation: 'Create a free account at github.com. Configure your SSH key or Personal Access Token with git config --global user.name and user.email.',
    usageGuide: 'Create new repositories, commit regularly with descriptive messages, open Pull Requests with descriptive summaries, and review peer code using inline comments.',
    realWorldExample: 'Open-source projects like React, Next.js, and Linux host their source code on GitHub with thousands of contributors collaborating via Pull Requests.',
    codeOrCommand: `# Set up Git credentials on your machine
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git clone https://github.com/facebook/react.git`,
    officialLink: 'https://github.com'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    purpose: 'Collaborative vector design and prototyping tool where designers craft wireframes, mockups, design systems, and component tokens before coding.',
    installation: 'Runs natively in any web browser at figma.com, or download the desktop app for macOS and Windows.',
    usageGuide: 'Create frames (e.g., Desktop 1440px or iPhone 15), use Auto-layout for responsive alignment, define typographic scales and color variables, and inspect CSS styles in Dev Mode.',
    realWorldExample: 'Designers at Airbnb and Spotify create pixel-perfect UI kits in Figma, which frontend developers inspect to copy exact padding, fonts, and hex colors.',
    codeOrCommand: `/* Developer handoff from Figma Dev Mode:
- Inspect element: Frame padding: 24px 32px
- Color token: var(--primary-accent, #2563eb)
- Font: Plus Jakarta Sans, 24px, SemiBold (600) */`,
    officialLink: 'https://figma.com'
  },
  {
    id: 'chrome-devtools',
    name: 'Chrome DevTools',
    category: 'DevTools',
    purpose: 'Built-in browser diagnostic tools to inspect HTML/CSS elements, debug JavaScript console errors, analyze network waterfalls, and measure Lighthouse performance.',
    installation: 'Pre-installed in Google Chrome. Open via Right-Click -> Inspect, or press F12 / Cmd+Option+I.',
    usageGuide: 'Elements panel: live edit CSS properties. Console: run JS expressions and check errors. Network panel: inspect API payload, response status, and asset load latency. Lighthouse: audit SEO, performance, and accessibility.',
    realWorldExample: 'When an API call fails with status 500, a developer opens the Network tab, clicks the failed request, and examines the exact error JSON returned by the backend.',
    codeOrCommand: `// Console debugging tricks
console.table([{ name: 'Alex', score: 95 }, { name: 'Jordan', score: 88 }]);
console.time('fetchTimer');
// ... perform async operation ...
console.timeEnd('fetchTimer');`,
    officialLink: 'https://developer.chrome.com/docs/devtools/'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'API',
    purpose: 'API development platform to construct, test, automate, and document REST, GraphQL, and WebSocket API requests without writing frontend code.',
    installation: 'Download desktop client from postman.com/downloads or use the browser-based Postman workspace.',
    usageGuide: 'Create an API Collection (e.g., "Student API"), configure environment variables like {{BASE_URL}}, set HTTP method to POST, supply JSON body, and write automated test scripts.',
    realWorldExample: 'Backend developers verify their authentication endpoints return valid JWT tokens before handing the API endpoints over to the frontend team.',
    codeOrCommand: `// Postman automated response test script
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
pm.test("Response returns JWT token", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.token).to.be.a('string');
});`,
    officialLink: 'https://postman.com'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Cloud/Hosting',
    purpose: 'Cloud platform designed for frontend frameworks like Next.js, React, and Svelte, offering zero-configuration deployments, global CDN edge caching, and preview URLs.',
    installation: 'Sign up at vercel.com with your GitHub account, or install the CLI: npm install -g vercel.',
    usageGuide: 'Import any GitHub repository. Vercel automatically detects the framework, runs the build script, provisions an SSL certificate, and provides instant URL updates on every git push.',
    realWorldExample: 'When a developer opens a Pull Request on GitHub, Vercel automatically deploys an ephemeral staging preview link for QA and team review.',
    codeOrCommand: `# Instant deployment via Vercel CLI
npx vercel

# Production deploy
npx vercel --prod`,
    officialLink: 'https://vercel.com'
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'Cloud/Hosting',
    purpose: 'All-in-one platform for deploying modern web projects, serverless functions, form handling, and edge computing.',
    installation: 'Sign up at netlify.com. Connect via GitHub, GitLab, or Bitbucket. CLI: npm install -g netlify-cli.',
    usageGuide: 'Drag-and-drop a build folder for instant static hosting, or connect your Git repository. Take advantage of Netlify Forms: add netlify attribute to any HTML form to receive submissions without a backend.',
    realWorldExample: 'Marketing landing pages capture customer inquiries directly into Netlify Forms with built-in spam filtering and email forwarding.',
    codeOrCommand: `<!-- Netlify Zero-Backend Form Capture -->
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <button type="submit">Send Message</button>
</form>`,
    officialLink: 'https://netlify.com'
  },
  {
    id: 'mongodb-atlas',
    name: 'MongoDB Atlas',
    category: 'Database',
    purpose: 'Fully managed cloud database-as-a-service providing scalable MongoDB clusters with automated backups, monitoring, and global distribution.',
    installation: 'Sign up at mongodb.com/atlas. Create a free shared M0 cluster, whitelist your IP address, and generate a database user and password.',
    usageGuide: 'Copy the connection string (URI) into your .env file as MONGODB_URI. Connect via Mongoose in Node.js or use MongoDB Compass desktop GUI to inspect collections visually.',
    realWorldExample: 'Full-stack MERN (MongoDB, Express, React, Node) applications store user profiles, product catalogs, and comments directly in cloud-hosted Atlas databases.',
    codeOrCommand: `# .env connection string
MONGODB_URI="mongodb+srv://studentUser:SuperSecretPass@cluster0.abcde.mongodb.net/academy?retryWrites=true&w=majority"

# Connect in Node.js
import mongoose from 'mongoose';
await mongoose.connect(process.env.MONGODB_URI);`,
    officialLink: 'https://www.mongodb.com/atlas'
  }
];
