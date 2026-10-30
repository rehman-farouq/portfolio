import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Database, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "TypeScript Advanced Patterns 2026 | Rehman Farouq",
  description: "Master advanced TypeScript patterns including generics, utility types, decorators, conditional types, and type guards.",
  keywords: "TypeScript advanced patterns, TypeScript generics, utility types, TypeScript decorators, conditional types, type guards, TypeScript best practices, type safety, TypeScript 2026",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "TypeScript Advanced Patterns 2026 | Rehman Farouq",
    description: "Complete guide to advanced TypeScript patterns with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/typescript-advanced-patterns",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "TypeScript Advanced Patterns 2026",
    description: "Master advanced TypeScript patterns with practical examples and best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/typescript-advanced-patterns",
  },
}

export default function TypeScriptAdvancedPatterns() {
  const yesterdayDate = getYesterdayDate()

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Tutorial</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                Tutorial
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                22 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              TypeScript Advanced Patterns 2026: Master Type-Safe Development
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Deep dive into advanced TypeScript patterns including generics, utility types, decorators, conditional types, and type guards. Build robust, type-safe applications with confidence.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | TypeScript Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Advanced TypeScript</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TypeScript goes beyond basic type annotations. Advanced patterns enable you to create flexible, reusable, and type-safe code that scales with your application. From generics to decorators, these patterns transform how you write TypeScript.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In this comprehensive guide, we'll explore the most powerful TypeScript patterns that every senior developer should know.
              </p>
            </section>

            {/* Generics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="text-blue-600" size={24} />
                Advanced Generics
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Generics allow you to create reusable components that work with different types while maintaining type safety.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Basic generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic with constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Generic interfaces
interface Box<T> {
  value: T;
  getValue(): T;
}

class GenericBox<T> implements Box<T> {
  constructor(private value: T) {}
  
  getValue(): T {
    return this.value;
  }
}

// Generic with default type
interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
}

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Generic with keyof operator
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Generic Best Practices</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Use descriptive type parameter names (T, U, V)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Apply constraints when needed with extends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Provide default types for flexibility</span>
                </li>
              </ul>
            </section>

            {/* Utility Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-blue-600" size={24} />
                Utility Types
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TypeScript provides built-in utility types that transform types in powerful ways.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Partial - Make all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

// Required - Make all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - Make all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - Select specific properties
type UserSummary = Pick<User, 'id' | 'name'>;

// Omit - Remove specific properties
type CreateUser = Omit<User, 'id'>;

// Record - Create object type with specific keys
type UserMap = Record<string, User>;

// Exclude - Exclude types from union
type Primitive = Exclude<string | number | boolean, string>;

// Extract - Extract types from union
type StringOrNumber = Extract<string | number | boolean, string | number>;

// NonNullable - Remove null and undefined
type NonNullableUser = NonNullable<User | null>;

// ReturnType - Get return type of function
type UserCreator = () => User;
type UserType = ReturnType<UserCreator>;

// Parameters - Get parameter types of function
type UserParams = Parameters<(id: number, name: string) => void>;

// Awaited - Unwrap Promise type
type AsyncUser = Promise<User>;
type ResolvedUser = Awaited<AsyncUser>;`}
                </pre>
              </div>
            </section>

            {/* Conditional Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conditional Types</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Conditional types select one type over another based on a condition.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Basic conditional type
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<string>;  // false

// Conditional with union types
type ToArray<T> = T extends any[] ? T : T[];

type Result1 = ToArray<string>;   // string[]
type Result2 = ToArray<number[]>; // number[]

// Distributive conditional types
type Flatten<T> = T extends any[] ? T[number] : T;

type Flat1 = Flatten<string[]>;      // string
type Flat2 = Flatten<number>;        // number
type Flat3 = Flatten<(string | number)[]>; // string | number

// Infer keyword
type UnboxArray<T> = T extends (infer U)[] ? U : T;

type Unboxed1 = UnboxArray<string[]>; // string
type Unboxed2 = UnboxArray<number>;   // number

// Conditional type with constraints
type NonNullable<T> = T extends null | undefined ? never : T;

// Complex conditional types
type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object';

type T1 = TypeName<string>;   // 'string'
type T2 = TypeName<number[]>; // 'object'`}
                </pre>
              </div>
            </section>

            {/* Type Guards */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Type Guards & Discriminated Unions</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Type guards narrow down types within conditional blocks.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// typeof type guard
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase(); // string
  }
  return value.toFixed(2); // number
}

// instanceof type guard
class Dog {
  bark() { console.log('Woof!'); }
}

class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function isBird(animal: Bird | Fish): animal is Bird {
  return 'fly' in animal;
}

function move(animal: Bird | Fish) {
  if (isBird(animal)) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// Discriminated unions
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}

// in operator type guard
interface HasEmail {
  email: string;
}

interface HasPhone {
  phone: string;
}

function contact(user: HasEmail | HasPhone) {
  if ('email' in user) {
    console.log(user.email);
  } else {
    console.log(user.phone);
  }
}`}
                </pre>
              </div>
            </section>

            {/* Mapped Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mapped Types</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Mapped types transform properties of an existing type.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Basic mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyUser = Readonly<User>;

// Make optional
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Nullable
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Template literal types
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number; }

// Key remapping
type Stringify<T> = {
  [P in keyof T as string & P]: string;
};

// Conditional mapped types
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

type StringProperties = PickByType<Product, string>;
// { name: string; }`}
                </pre>
              </div>
            </section>

            {/* Decorators */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Decorators</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Decorators provide a way to add annotations and meta-programming syntax for class declarations and members.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Enable decorators in tsconfig.json
// "experimentalDecorators": true

// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class MyClass {
  // ...
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey} with\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Property decorator
function format(target: any, propertyKey: string) {
  let value: string;
  
  const getter = () => value;
  const setter = (newValue: string) => {
    value = newValue.trim().toUpperCase();
  };
  
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class User {
  @format
  name: string = '';
}

// Parameter decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  const existingRequiredParameters = Reflect.getMetadata(
    'required',
    target,
    propertyKey
  ) || [];
  
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    'required',
    existingRequiredParameters,
    target,
    propertyKey
  );
}

class Validator {
  validate(@required value: string) {
    console.log(value);
  }
}`}
                </pre>
              </div>
            </section>

            {/* Template Literal Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Template Literal Types</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Template literal types allow you to manipulate string types at the type level.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Basic template literal types
type Greeting = "Hello" | "Hi";
type Name = "World" | "User";
type Message = \`\${Greeting}, \${Name}!\`;
// "Hello, World!" | "Hello, User!" | "Hi, World!" | "Hi, User!"

// String manipulation
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<'click'>; // "onClick"
type ChangeEvent = EventName<'change'>; // "onChange"

// Uppercase, Lowercase, Capitalize, Uncapitalize
type Upper = Uppercase<'hello'>; // "HELLO"
type Lower = Lowercase<'HELLO'>; // "hello"
type Cap = Capitalize<'hello'>; // "Hello"
type Uncap = Uncapitalize<'Hello'>; // "hello"

// Complex template literal types
type CssColor = 'red' | 'blue' | 'green';
type CssProperty = 'background' | 'color' | 'border';
type CssRule = \`\${CssProperty}: \${CssColor}\`;

// String union manipulation
type AllKeys<T> = T extends any ? keyof T : never;

type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface State {
  count: number;
  name: string;
}

type StateGetters = Getters<State>;
// { getCount: () => number; getName: () => string; }`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TypeScript Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Type Safety</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Enable strict mode in tsconfig</li>
                    <li>• Avoid any, use unknown instead</li>
                    <li>• Use type assertions sparingly</li>
                    <li>• Prefer interfaces over type aliases for objects</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">Code Organization</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Keep types close to usage</li>
                    <li>• Use barrel files for exports</li>
                    <li>• Separate utility types</li>
                    <li>• Document complex types</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Performance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Avoid excessive generics</li>
                    <li>• Use type inference when possible</li>
                    <li>• Don't over-engineer types</li>
                    <li>• Profile type checking performance</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Maintainability</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use meaningful type names</li>
                    <li>• Leverage utility types</li>
                    <li>• Create reusable type utilities</li>
                    <li>• Keep types simple and readable</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Advanced TypeScript patterns empower you to write more robust, maintainable, and type-safe code. By mastering generics, utility types, conditional types, and other advanced features, you can create sophisticated type systems that catch errors at compile time.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Remember that TypeScript is a tool to help you write better JavaScript. Use these patterns judiciously and always prioritize code readability and maintainability.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master TypeScript?</h3>
              <p className="text-white/90 mb-6">
                Explore more TypeScript tutorials and build type-safe applications!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
