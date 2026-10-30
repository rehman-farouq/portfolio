import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "JavaScript ES6+ Features 2026 | Rehman Farouq",
  description: "Complete guide to JavaScript ES6+ features including arrow functions, destructuring, async/await, modules, classes, and latest ES2020-ES2026 features.",
  keywords: "JavaScript ES6 features, modern JavaScript, ES2020, ES2021, ES2022, ES2023, ES2024, ES2025, ES2026, arrow functions, destructuring, async await, JavaScript modules, JavaScript classes, template literals, spread operator, JavaScript development, web development, frontend development",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "JavaScript ES6+ Features 2026 | Rehman Farouq",
    description: "Complete guide to JavaScript ES6+ features with practical examples and latest updates.",
    url: "https://rehmanfarouq.site/blog/javascript-es6-features",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "JavaScript ES6+ Features 2026 | Modern JavaScript Guide",
    description: "Complete guide to JavaScript ES6+ features with practical examples and latest updates.",
    creator: "@rehmanfarouq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/blog/javascript-es6-features",
  },
}

export default function JavaScriptES6Features() {
  const yesterdayDate = getYesterdayDate()

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/blog"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Blog</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Web Dev</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                Web Dev
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                20 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              JavaScript ES6+ Features 2026: Complete Modern JavaScript Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master modern JavaScript development with ES6+ features including arrow functions, destructuring, async/await, and latest ES2020-ES2026 updates.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | JavaScript Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Evolution of JavaScript</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                JavaScript has evolved dramatically from simple scripting language to a powerful, feature-rich programming language. ES6 (ECMAScript 2015) marked the beginning of modern JavaScript, introducing features that transformed how we write code.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In this comprehensive guide, we'll explore all the essential ES6+ features that every modern JavaScript developer must know, from the basics to the latest ES2026 features.
              </p>
            </section>

            {/* Core ES6 Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core ES6 Features</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">1. Arrow Functions</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with multiple statements
const calculate = (x, y) => {
  const result = x * y + 10;
  return result;
};

// Arrow function with single parameter
const square = n => n * n;

// Arrow functions and 'this' binding
const person = {
  name: 'John',
  hobbies: ['reading', 'coding'],
  showHobbies() {
    this.hobbies.forEach(hobby => {
      console.log(\`\${this.name} loves \${hobby}\`);
    });
  }
};`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">2. Template Literals</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// String concatenation (old way)
const name = 'John';
const greeting = 'Hello, ' + name + '!';

// Template literals (new way)
const greeting = \`Hello, \${name}!\`;

// Multi-line strings
const message = \`
  Dear \${name},
  
  Thank you for your interest in our course.
  
  Best regards,
  The Team
\`;

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const highlighted = highlight\`Hello \${name}, welcome to \${'JavaScript'}!\`;`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">3. Destructuring</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1, 2, [3, 4, 5]

// Object destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const { name, age, city = 'Unknown' } = person;
console.log(name, age, city); // John, 30, New York

// Destructuring in function parameters
const greetUser = ({ name, age }) => {
  return \`Hello \${name}, you are \${age} years old!\`;
};

// Nested destructuring
const user = {
  profile: {
    name: 'John',
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  }
};

const { profile: { name, address: { city } } } = user;`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">4. Spread and Rest Operators</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread operator with objects
const person = { name: 'John', age: 30 };
const employee = { ...person, job: 'Developer' };
// { name: 'John', age: 30, job: 'Developer' }

// Rest operator in function parameters
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

sum(1, 2, 3, 4, 5); // 15

// Rest operator in destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first, rest); // 1, [2, 3, 4, 5]`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">5. Default Parameters</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Before ES6
function greet(name) {
  name = name || 'Guest';
  return \`Hello \${name}!\`;
}

// With ES6 default parameters
const greet = (name = 'Guest', age = 25) => {
  return \`Hello \${name}, you are \${age} years old!\`;
};

// Default parameters with destructuring
const createUser = ({ name = 'Anonymous', age = 0, role = 'user' } = {}) => {
  return { name, age, role };
};

// Default parameters with functions
const calculateTotal = (price, tax = price * 0.1) => {
  return price + tax;
};`}
                </pre>
              </div>
            </section>

            {/* Modern JavaScript Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-title text-gray-900 dark:text-white mb-4">Modern JavaScript Features (ES2020-ES2026)</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">1. Async/Await (ES2017)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Promise-based approach
function fetchData() {
  return fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Async/Await approach
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Async arrow function
const getData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};

// Parallel async operations
async function fetchMultipleData() {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  return { users, posts, comments };
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">2. Optional Chaining (ES2020)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Before optional chaining
const city = user && user.profile && user.profile.address && user.profile.address.city;

// With optional chaining
const city = user?.profile?.address?.city;

// Optional chaining with function calls
const result = data?.method?.();

// Optional chaining with array access
const firstItem = items?.[0];

// Combining with nullish coalescing
const displayName = user?.profile?.name ?? 'Anonymous';`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">3. Nullish Coalescing Operator (ES2020)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Using OR operator (problematic for falsy values)
const volume = settings.volume || 0.5; // 0 becomes 0.5
const name = user.name || 'Anonymous'; // '' becomes 'Anonymous'

// Using nullish coalescing operator
const volume = settings.volume ?? 0.5; // Only null/undefined trigger default
const name = user.name ?? 'Anonymous'; // Only null/undefined trigger default

// Practical examples
const config = {
  timeout: 0,
  retries: null,
  enabled: false
};

const timeout = config.timeout ?? 1000; // 0 (keeps original value)
const retries = config.retries ?? 3; // 3 (null triggers default)
const enabled = config.enabled ?? true; // false (keeps original value)`}
                </pre>
              </div>
            </section>

            {/* Advanced Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Modern Features</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">1. Modules (ES2015)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// math.js - Named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export
export default class Calculator {
  add(a, b) {
    return a + b;
  }
}

// main.js - Importing modules
import Calculator, { PI, add, multiply } from './math.js';
import * as math from './math.js';

// Using imports
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(PI); // 3.14159
console.log(math.multiply(4, 5)); // 20

// Dynamic imports
async function loadModule() {
  const { default: Calculator } = await import('./math.js');
  const calc = new Calculator();
  return calc;
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">2. Classes (ES2015)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Class definition
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  // Instance method
  speak() {
    return \`\${this.name} makes a sound\`;
  }
  
  // Static method
  static getKingdom() {
    return 'Animalia';
  }
  
  // Getter
  get description() {
    return \`\${this.name} is a \${this.species}\`;
  }
  
  // Setter
  set setName(newName) {
    this.name = newName;
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog');
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks!\`;
  }
  
  // Private method (using #)
  #wagTail() {
    return '*wags tail*';
  }
  
  showExcitement() {
    return \`\${this.speak()} \${this.#wagTail()}\`;
  }
}

// Using classes
const dog = new Dog('Rex', 'Golden Retriever');
console.log(dog.speak()); // Rex barks!
console.log(dog.description); // Rex is a Dog`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">3. Generators (ES2015)</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Using generator
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

// Infinite generator
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2

// Generator for iteration
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of range(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern JavaScript Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-3">✅ Do's</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Use const by default, let when reassignment is needed</li>
                    <li>• Prefer arrow functions for callbacks</li>
                    <li>• Use template literals for string interpolation</li>
                    <li>• Leverage destructuring for cleaner code</li>
                    <li>• Use async/await over Promise chains</li>
                    <li>• Implement proper error handling with try/catch</li>
                    <li>• Use modules for code organization</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-3">❌ Don'ts</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Don't use var for variable declarations</li>
                    <li>• Don't mix callbacks and promises unnecessarily</li>
                    <li>• Don't forget to handle promise rejections</li>
                    <li>• Don't use == instead of ===</li>
                    <li>• Don't create global variables</li>
                    <li>• Don't ignore TypeScript benefits</li>
                    <li>• Don't forget about browser compatibility</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Performance Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimization</h2>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">1. Efficient Array Operations</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Use appropriate array methods
const numbers = [1, 2, 3, 4, 5];

// Good: Use map for transformation
const doubled = numbers.map(n => n * 2);

// Good: Use filter for selection
const evens = numbers.filter(n => n % 2 === 0);

// Good: Use reduce for aggregation
const sum = numbers.reduce((total, n) => total + n, 0);

// Good: Use find for searching
const found = numbers.find(n => n > 3);

// Good: Use some/every for conditions
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">2. Memory Management</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Avoid memory leaks
class DataProcessor {
  constructor() {
    this.data = [];
    this.processed = 0;
  }
  
  processData(items) {
    // Process in chunks to avoid memory issues
    const chunkSize = 1000;
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      this.processChunk(chunk);
      
      // Allow garbage collection
      if (i % 10000 === 0) {
        setTimeout(() => {}, 0);
      }
    }
  }
  
  processChunk(chunk) {
    // Process chunk
    this.data.push(...chunk.map(this.transform));
    this.processed += chunk.length;
  }
  
  transform(item) {
    return { ...item, processed: true };
  }
  
  // Cleanup method
  cleanup() {
    this.data = [];
    this.processed = 0;
  }
}`}
                </pre>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Modern JavaScript with ES6+ features provides powerful tools for writing clean, efficient, and maintainable code. From arrow functions and destructuring to async/await and private class fields, these features significantly improve the developer experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Mastering these features is essential for any modern web developer. They not only make your code more readable but also more performant and easier to maintain. Keep practicing and exploring new features as JavaScript continues to evolve!
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master Modern JavaScript?</h3>
              <p className="text-white/90 mb-6">
                Explore more web development tutorials and build amazing applications with modern JavaScript!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  More Tutorials
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
