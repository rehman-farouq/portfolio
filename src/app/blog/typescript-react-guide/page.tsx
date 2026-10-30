import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "TypeScript for React Developers 2026 | Rehman Farouq",
  description: "Master TypeScript in React development. Learn interfaces, generics, props typing, hooks, and advanced TypeScript patterns for building type-safe React…",
  keywords: "TypeScript React tutorial, React TypeScript guide, TypeScript interfaces, React props typing, TypeScript generics, type-safe React, TypeScript hooks, React TypeScript best practices",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "TypeScript for React Developers 2026 | Complete Guide",
    description: "Complete guide to TypeScript in React with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/typescript-react-guide",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "TypeScript for React Developers 2026",
    description: "Complete guide to TypeScript in React with practical examples.",
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
    canonical: "https://rehmanfarouq.site/blog/typescript-react-guide",
  },
}

export default function TypeScriptReactGuide() {
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
                15 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              TypeScript for React Developers 2026: Build Type-Safe Applications
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master TypeScript in React development. From basic interfaces to advanced patterns, learn how to build robust, type-safe React applications.
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why TypeScript with React?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TypeScript adds static typing to JavaScript, catching errors during development rather than in production. When combined with React, it provides excellent IntelliSense, better refactoring support, and more maintainable code.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In this guide, we'll cover everything you need to know to use TypeScript effectively in your React applications.
              </p>
            </section>

            {/* Basic Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Setting Up TypeScript with React</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Modern React projects with Create React App or Next.js come with TypeScript support out of the box.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Create React App with TypeScript
npx create-react-app my-app --template typescript

# Next.js with TypeScript
npx create-next-app@latest my-app --typescript

# Vite with React + TypeScript
npm create vite@latest my-app -- --template react-ts`}
                </pre>
              </div>
            </section>

            {/* Basic Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic TypeScript Types in React</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Let's start with the fundamental types you'll use in React components.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React from 'react';

// Basic component with TypeScript
const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  const [name, setName] = React.useState<string>('');

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;`}
                </pre>
              </div>
            </section>

            {/* Interfaces for Props */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Typing Component Props with Interfaces</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Interfaces define the shape of your component props, ensuring type safety.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React from 'react';

// Define interface for props
interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string; // Optional property
  };
  onClick?: (id: number) => void; // Optional function
  className?: string; // Optional string
}

// Component with typed props
const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onClick, 
  className = '' 
}) => {
  const handleCardClick = (): void => {
    if (onClick) {
      onClick(user.id);
    }
  };

  return (
    <div className={className} onClick={handleCardClick}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;`}
                </pre>
              </div>
            </section>

            {/* Typing Hooks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Typing React Hooks</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                React hooks have specific typing patterns you should follow.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { useState, useEffect, useRef } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
  // useState with typing
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useRef with typing
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect with proper cleanup
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData: User = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
};`}
                </pre>
              </div>
            </section>

            {/* Generics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Using Generics in React</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Generics make your components more reusable by allowing them to work with different types.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React from 'react';

// Generic interface for list props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  onItemClick?: (item: T) => void;
}

// Generic List component
const List = <T,>({ 
  items, 
  renderItem, 
  keyExtractor, 
  onItemClick 
}: ListProps<T>): React.ReactElement => {
  return (
    <ul>
      {items.map(item => (
        <li 
          key={keyExtractor(item)}
          onClick={() => onItemClick?.(item)}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

// Usage with different types
const UserList = () => {
  const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
  ];

  return (
    <List
      items={users}
      renderItem={(user) => <div>{user.name} - {user.email}</div>}
      keyExtractor={(user) => user.id}
      onItemClick={(user) => console.log('Clicked:', user.name)}
    />
  );
};`}
                </pre>
              </div>
            </section>

            {/* Custom Hooks with TypeScript */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Hooks with TypeScript</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Custom hooks benefit greatly from TypeScript for better type safety.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import { useState, useEffect } from 'react';

// Generic API hook
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: T = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

// Usage
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile = ({ userId }: { userId: number }) => {
  const { data: user, loading, error } = useApi<User>(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return <div>{user.name}</div>;
};`}
                </pre>
              </div>
            </section>

            {/* Event Handlers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Typing Event Handlers</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Properly typing event handlers prevents runtime errors and provides better IntelliSense.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React, { FormEvent, ChangeEvent, MouseEvent } from 'react';

const FormExample: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
  };

  // Input change handler
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  // Button click handler
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log('Button clicked');
  };

  // Generic change handler
  const handleInputChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T>
  ): void => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleButtonClick}>
        Click me
      </button>
    </form>
  );
};`}
                </pre>
              </div>
            </section>

            {/* Advanced Patterns */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced TypeScript Patterns</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Let's explore some advanced patterns for more complex scenarios.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React from 'react';

// Discriminated unions for component variants
type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

interface PrimaryButtonProps extends BaseButtonProps {
  variant: 'primary';
  color?: 'blue' | 'green';
}

interface SecondaryButtonProps extends BaseButtonProps {
  variant: 'secondary';
  outline?: boolean;
}

interface DangerButtonProps extends BaseButtonProps {
  variant: 'danger';
  confirmText?: string;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps | DangerButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, disabled = false } = props;

  const getClassName = (): string => {
    const baseClass = 'button';
    const disabledClass = disabled ? 'disabled' : '';
    
    switch (props.variant) {
      case 'primary':
        return \`\${baseClass} primary \${props.color || 'blue'} \${disabledClass}\`;
      case 'secondary':
        return \`\${baseClass} secondary \${props.outline ? 'outline' : ''} \${disabledClass}\`;
      case 'danger':
        return \`\${baseClass} danger \${disabledClass}\`;
      default:
        return baseClass;
    }
  };

  return (
    <button className={getClassName()} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

// Usage
const App = () => {
  return (
    <div>
      <Button variant="primary" color="blue" onClick={() => console.log('Primary')}>
        Primary Button
      </Button>
      <Button variant="secondary" outline onClick={() => console.log('Secondary')}>
        Secondary Button
      </Button>
      <Button variant="danger" confirmText="Are you sure?" onClick={() => console.log('Danger')}>
        Danger Button
      </Button>
    </div>
  );
};`}
                </pre>
              </div>
            </section>

            {/* Utility Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Utility Types in React</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TypeScript provides utility types that are particularly useful in React development.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`import React from 'react';

// Partial - Make all properties optional
interface UserForm {
  name: string;
  email: string;
  age: number;
}

const updateUser = (updates: Partial<UserForm>): void => {
  // updates.name, updates.email, and updates.age are all optional
  console.log(updates);
};

// Pick - Select specific properties
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

const UserCard: React.FC<{ user: PublicUser }> = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

// Omit - Remove specific properties
type CreateUserRequest = Omit<User, 'id'>;

const CreateUserForm: React.FC<{
  onSubmit: (user: CreateUserRequest) => void;
}> = ({ onSubmit }) => {
  const handleSubmit = (formData: CreateUserRequest) => {
    onSubmit(formData);
  };

  // Form implementation...
  return <div>Form</div>;
};

// Record - Create object types
type ThemeColors = Record<'primary' | 'secondary' | 'success', string>;

const ThemeProvider: React.FC<{ colors: ThemeColors }> = ({ colors }) => {
  return (
    <div style={{ color: colors.primary }}>
      Themed content
    </div>
  );
};`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TypeScript Best Practices for React</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-3">✅ Do's</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Use interfaces for component props</li>
                    <li>• Type all event handlers properly</li>
                    <li>• Use generics for reusable components</li>
                    <li>• Prefer explicit return types for functions</li>
                    <li>• Use utility types when appropriate</li>
                    <li>• Enable strict mode in tsconfig.json</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-3">❌ Don'ts</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Don't use 'any' unless absolutely necessary</li>
                    <li>• Don't skip typing event handlers</li>
                    <li>• Don't ignore TypeScript errors</li>
                    <li>• Don't over-complicate type definitions</li>
                    <li>• Don't forget to type custom hooks</li>
                    <li>• Don't disable TypeScript rules without good reason</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Configuration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TypeScript Configuration</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Here's a recommended tsconfig.json for React projects:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{
`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@/components/*": ["components/*"],
      "@/hooks/*": ["hooks/*"],
      "@/types/*": ["types/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}`
}
                </pre>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TypeScript brings significant benefits to React development, including better error catching, improved developer experience, and more maintainable code. While it might require some initial learning, the long-term benefits are well worth it.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Start with basic typing and gradually incorporate more advanced patterns as you become comfortable. The key is consistency and gradually improving your type definitions as your applications grow.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Happy coding with TypeScript and React!
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Type-Safe Apps?</h3>
              <p className="text-white/90 mb-6">
                Explore more TypeScript and React tutorials to level up your development skills!
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
                  Ask Questions
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
