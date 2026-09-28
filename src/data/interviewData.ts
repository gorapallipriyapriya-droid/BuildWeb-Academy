import { InterviewQuestion, CodingChallenge } from '../types';

export const interviewQuestions: InterviewQuestion[] = [
  // HTML
  {
    id: 'html-1',
    category: 'HTML',
    difficulty: 'Easy',
    question: 'What is the purpose of Semantic HTML, and why should you avoid "div soup"?',
    answer: 'Semantic HTML uses meaningful tags (such as <header>, <nav>, <main>, <article>, <section>, <footer>) instead of generic <div> tags. This improves accessibility for screen reader users, optimizes SEO ranking by helping search engines understand content structure, and enhances code readability and maintainability for engineering teams.'
  },
  {
    id: 'html-2',
    category: 'HTML',
    difficulty: 'Medium',
    question: 'What is the difference between defer and async script loading attributes?',
    answer: 'Both "defer" and "async" download scripts in the background without blocking HTML parsing. However, "async" executes the script as soon as it finishes downloading (out of order, possibly interrupting parsing), whereas "defer" preserves document order and delays script execution until after the HTML parsing is completely finished (just before DOMContentLoaded). Use "defer" for application scripts with dependencies.',
    codeExample: '<!-- Defer preserves execution order -->\n<script src="library.js" defer></script>\n<script src="main.js" defer></script>'
  },
  {
    id: 'html-3',
    category: 'HTML',
    difficulty: 'Medium',
    question: 'What are HTML data-* attributes and when should you use them?',
    answer: 'Data attributes allow developers to embed custom private attributes on standard HTML elements without interfering with standard presentation. They are accessible in JavaScript via the element.dataset object and in CSS via attribute selectors [data-*].',
    codeExample: '<button data-user-id="42" data-role="admin">Edit Profile</button>\n\n// In JS:\nconst userId = button.dataset.userId; // "42"'
  },

  // CSS
  {
    id: 'css-1',
    category: 'CSS',
    difficulty: 'Easy',
    question: 'Explain the CSS Box Model and the significance of box-sizing: border-box.',
    answer: 'The CSS Box Model consists of Content, Padding, Border, and Margin. By default, box-sizing is content-box, meaning setting width: 200px and padding: 20px makes the element 240px wide on screen. Setting box-sizing: border-box forces the browser to absorb padding and borders inside the declared width, so width: 200px remains 200px total.'
  },
  {
    id: 'css-2',
    category: 'CSS',
    difficulty: 'Medium',
    question: 'What is the difference between Flexbox and CSS Grid, and when should you use each?',
    answer: 'Flexbox is one-dimensional (content flows either along a row OR a column). It is ideal for component-level UI like navigation bars, button groups, and centering elements. CSS Grid is two-dimensional (simultaneous rows AND columns). It is ideal for macro page layouts, photo galleries, dashboards, and complex content grids.'
  },
  {
    id: 'css-3',
    category: 'CSS',
    difficulty: 'Medium',
    question: 'How does CSS specificity work, and what is the specificity hierarchy?',
    answer: 'Specificity determines which CSS rule wins when multiple rules target the same element. The hierarchy from lowest to highest: 1. Element selectors & pseudo-elements (0,0,1); 2. Class, attribute, and pseudo-class selectors (0,1,0); 3. ID selectors (1,0,0); 4. Inline style attributes (1,0,0,0); 5. !important overrides standard specificity rules (use sparingly).'
  },
  {
    id: 'css-4',
    category: 'CSS',
    difficulty: 'Hard',
    question: 'What is a BFC (Block Formatting Context) and how can it prevent margin collapsing?',
    answer: 'A Block Formatting Context is an independent rendering region in which block boxes are laid out. Elements inside a BFC do not visually overlap with external floats, and vertical margins between elements inside and outside the BFC do not collapse. You can establish a new BFC using display: flow-root, overflow: hidden/auto, or display: flex/grid.'
  },

  // JavaScript
  {
    id: 'js-1',
    category: 'JavaScript',
    difficulty: 'Easy',
    question: 'What is the difference between let, const, and var?',
    answer: '"var" is function-scoped (or globally scoped) and hoisted with an initial value of undefined, which leads to tricky bugs. "let" and "const" are block-scoped ({ ... }) and reside in a "Temporal Dead Zone" from block entry until declared, preventing premature access. "const" prevents variable reassignment, while "let" allows reassignment.'
  },
  {
    id: 'js-2',
    category: 'JavaScript',
    difficulty: 'Medium',
    question: 'What is a Closure in JavaScript and give a practical use case?',
    answer: 'A closure is the combination of a function bundled together with references to its surrounding lexical environment. In other words, an inner function has access to the outer function’s scope even after the outer function has returned. Common use cases include data privacy (private variables) and function currying / memoization.',
    codeExample: 'function createCounter() {\n  let count = 0; // Private variable enclosed in scope\n  return {\n    increment: () => ++count,\n    get: () => count\n  };\n}\nconst counter = createCounter();\ncounter.increment();\nconsole.log(counter.get()); // 1'
  },
  {
    id: 'js-3',
    category: 'JavaScript',
    difficulty: 'Hard',
    question: 'Explain the JavaScript Event Loop, Call Stack, Microtask Queue, and Macrotask Queue.',
    answer: 'JavaScript is single-threaded. Synchronous code executes in the Call Stack. When asynchronous operations occur: 1. Web APIs execute in the background; 2. Microtasks (Promise.then, MutationObserver, queueMicrotask) queue up in the Microtask Queue; 3. Macrotasks (setTimeout, setInterval, I/O events) queue up in the Task Queue. The Event Loop prioritizes emptying the entire Microtask Queue before picking the next Macrotask.'
  },
  {
    id: 'js-4',
    category: 'JavaScript',
    difficulty: 'Medium',
    question: 'What is Event Bubbling and Event Delegation?',
    answer: 'Event Bubbling means when an event happens on an element, it first runs handlers on that element, then on its parent, and all the way up through ancestors. Event Delegation leverages this by attaching a single event listener to a common ancestor element instead of registering dozens of listeners on individual child nodes, improving performance and handling dynamically added items.'
  },

  // React
  {
    id: 'react-1',
    category: 'React',
    difficulty: 'Medium',
    question: 'What is the Virtual DOM and how does React reconciliation work?',
    answer: 'The Virtual DOM is a lightweight JavaScript representation of the actual DOM tree kept in memory. When component state changes, React creates a new virtual DOM tree, computes the difference (the "diffing" algorithm) between the previous and new tree, and batch-updates only the real DOM nodes that actually changed. This minimizes expensive browser reflows and repaints.'
  },
  {
    id: 'react-2',
    category: 'React',
    difficulty: 'Medium',
    question: 'What are the rules of React Hooks and why do they exist?',
    answer: 'The two foundational rules: 1. Only call Hooks at the top level of your component (never inside loops, conditions, or nested functions); 2. Only call Hooks from React function components or custom hooks. These rules ensure React can correctly preserve hook state across multiple re-renders based on call order.'
  },
  {
    id: 'react-3',
    category: 'React',
    difficulty: 'Hard',
    question: 'How do you prevent unnecessary re-renders in a React application?',
    answer: '1. Use React.memo() on functional components to memoize rendering when props have not shallowly changed; 2. Use useMemo() to cache the result of expensive calculations; 3. Use useCallback() to cache function definitions passed as props to memoized child components; 4. Colocate state as close to where it is used as possible; 5. Use primitive keys correctly in lists.'
  },

  // Backend
  {
    id: 'backend-1',
    category: 'Backend',
    difficulty: 'Medium',
    question: 'What is Middleware in Express.js and how does next() work?',
    answer: 'Middleware functions have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle. They perform tasks such as logging, parsing JSON bodies, authenticating tokens, or checking user roles. Calling next() passes control to the next handler; forgetting to call next() or send a response leaves the client hanging.'
  },
  {
    id: 'backend-2',
    category: 'Backend',
    difficulty: 'Medium',
    question: 'What is the difference between Authentication (AuthN) and Authorization (AuthZ)?',
    answer: 'Authentication verifies WHO you are (e.g., logging in with email and password, verifying a JWT token or biometric). Authorization verifies WHAT you are permitted to do (e.g., checking if the logged-in student has "admin" privileges to delete another user account). Authentication always precedes authorization.'
  },
  {
    id: 'backend-3',
    category: 'Backend',
    difficulty: 'Hard',
    question: 'What is CORS (Cross-Origin Resource Sharing) and how do you resolve CORS errors?',
    answer: 'CORS is a browser security mechanism that restricts web pages from making HTTP requests to a different domain/port than the one that served the web page. To resolve CORS errors, the server must respond with specific HTTP headers (like Access-Control-Allow-Origin: * or specific trusted domains). In Express, this is typically handled using the "cors" middleware package.'
  },

  // Database
  {
    id: 'db-1',
    category: 'Database',
    difficulty: 'Easy',
    question: 'What is a Primary Key and a Foreign Key in relational databases?',
    answer: 'A Primary Key is a column (or set of columns) that uniquely identifies every row in a table (e.g., student_id). It cannot contain NULL values. A Foreign Key is a column in one table that references the Primary Key of another table, establishing a relational link between them and enforcing referential integrity.'
  },
  {
    id: 'db-2',
    category: 'Database',
    difficulty: 'Medium',
    question: 'What are Database Indexes and how do they speed up queries?',
    answer: 'A database index is a specialized data structure (typically a B-Tree) that holds a sorted copy of specific columns along with pointers to the full table rows. Without an index, the database must perform a sequential full-table scan (O(N)). With an index, search lookups drop to logarithmic time (O(log N)). The trade-off is slightly slower writes (INSERT/UPDATE/DELETE) and extra disk storage.'
  },
  {
    id: 'db-3',
    category: 'Database',
    difficulty: 'Hard',
    question: 'What are ACID properties in database transactions?',
    answer: 'ACID guarantees database transaction reliability: 1. Atomicity (All or nothing: if any operation in a transaction fails, everything rolls back); 2. Consistency (Transactions bring the database from one valid state to another, upholding all constraints); 3. Isolation (Concurrent transactions do not interfere with each other); 4. Durability (Once committed, changes survive system crashes and power failures).'
  }
];

export const codingChallenges: CodingChallenge[] = [
  {
    id: 'reverse-string',
    title: '1. Reverse a String',
    difficulty: 'Easy',
    category: 'JavaScript Basics',
    description: 'Write a function reverseString(str) that takes a string and returns it reversed without using built-in Array.reverse().',
    starterCode: `function reverseString(str) {
  // Write your code here
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
    testCases: [
      { input: 'hello', expected: 'olleh' },
      { input: 'WebCraft', expected: 'tfarCbeW' },
      { input: 'code', expected: 'edoc' }
    ],
    solution: `function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`
  },
  {
    id: 'fizz-buzz',
    title: '2. Classic FizzBuzz',
    difficulty: 'Easy',
    category: 'Algorithms',
    description: 'Write a function fizzBuzz(n) that returns an array of numbers from 1 to n. For multiples of 3, return "Fizz", for multiples of 5, return "Buzz", and for multiples of both 3 and 5, return "FizzBuzz".',
    starterCode: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  return result;
}`,
    testCases: [
      { input: '5', expected: '[1, 2, "Fizz", 4, "Buzz"]' },
      { input: '15', expected: '[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]' }
    ],
    solution: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  return result;
}`
  },
  {
    id: 'two-sum',
    title: '3. Two Sum Problem',
    difficulty: 'Medium',
    category: 'Hash Maps',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    starterCode: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    testCases: [
      { input: '[2, 7, 11, 15], 9', expected: '[0, 1]' },
      { input: '[3, 2, 4], 6', expected: '[1, 2]' }
    ],
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
  },
  {
    id: 'is-palindrome',
    title: '4. Palindrome Checker',
    difficulty: 'Easy',
    category: 'Strings',
    description: 'Write a function isPalindrome(str) that returns true if the given string is a palindrome (ignoring casing and spaces), false otherwise.',
    starterCode: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`,
    testCases: [
      { input: '"racecar"', expected: 'true' },
      { input: '"hello"', expected: 'false' },
      { input: '"A man, a plan, a canal: Panama"', expected: 'true' }
    ],
    solution: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`
  }
];
