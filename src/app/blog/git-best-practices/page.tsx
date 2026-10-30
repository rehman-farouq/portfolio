import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, GitBranch, GitMerge, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Git Best Practices 2026 | Complete Version Control Guide",
  description: "Master Git best practices for teams. Learn branching strategies, commit conventions, code review workflows, Git hooks, and advanced Git techniques for…",
  keywords: "Git best practices, version control, branching strategy, Git workflow, commit conventions, code review, Git hooks, Git commands, team collaboration, Git 2026",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Git Best Practices 2026 | Complete Version Control Guide",
    description: "Complete guide to Git best practices for professional development teams.",
    url: "https://rehmanfarouq.site/blog/git-best-practices",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Git Best Practices 2026",
    description: "Master Git workflows, branching strategies, and team collaboration best practices.",
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
    canonical: "https://rehmanfarouq.site/blog/git-best-practices",
  },
}

export default function GitBestPractices() {
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
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 md:p-12">
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
              Git Best Practices 2026: Complete Version Control Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master Git workflows, branching strategies, and team collaboration. Learn commit conventions, code review processes, and advanced Git techniques for professional development.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Version Control Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Git Best Practices Matter</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Git is the foundation of modern software development. Following best practices ensures clean history, effective collaboration, and maintainable codebases. Poor Git habits can lead to confusion, merge conflicts, and lost work.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This guide covers essential Git practices that every developer should know, from commit conventions to advanced workflows.
              </p>
            </section>

            {/* Branching Strategies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GitBranch className="text-indigo-600" size={24} />
                Branching Strategies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A clear branching strategy is crucial for team collaboration. Different strategies work for different team sizes and project requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Git Flow</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Structured workflow with master, develop, feature, release, and hotfix branches
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitHub Flow</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Simple workflow with main branch and feature branches using pull requests
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trunk-Based Development</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Everyone commits to main branch with short-lived branches
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitLab Flow</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Combines feature branches with environment branches
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Branch Naming Conventions</h3>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-indigo-400 text-sm overflow-x-auto">
                  <code>{`# Good branch names
feature/user-authentication
bugfix/login-error
hotfix/security-patch
refactor/database-optimization
docs/update-readme

# Avoid
fix-stuff
new-feature
temp-branch`}</code>
                </pre>
              </div>
            </section>

            {/* Commit Conventions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Commit Message Conventions</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Clear commit messages make history understandable and enable automated changelog generation. The Conventional Commits specification is widely adopted.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-indigo-400 text-sm overflow-x-auto">
                  <code>{`# Conventional Commits format
&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;

&lt;body&gt;

&lt;footer&gt;

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style changes (formatting, etc.)
refactor: Code refactoring
perf:     Performance improvements
test:     Adding or updating tests
chore:    Build process or auxiliary tool changes
ci:       CI/CD changes

# Examples
feat(auth): add user login functionality
fix(api): resolve timeout issue on user endpoint
docs(readme): update installation instructions
refactor(components): simplify button component logic`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Commit Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Make atomic commits - one logical change per commit</li>
                <li>Write clear, descriptive commit messages</li>
                <li>Capitalize the subject line</li>
                <li>Don't end the subject line with a period</li>
                <li>Use the imperative mood in the subject line</li>
                <li>Keep the subject line under 50 characters</li>
                <li>Wrap the body at 72 characters</li>
              </ul>
            </section>

            {/* Code Review */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GitMerge className="text-indigo-600" size={24} />
                Code Review Workflow
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Code reviews are essential for maintaining code quality and sharing knowledge. A good review process catches bugs early and improves team collaboration.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Before Submitting</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Self-review your changes, ensure tests pass, and update documentation
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">During Review</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Focus on logic, readability, and potential bugs. Be constructive and specific
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">After Approval</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Squash commits if needed, resolve conflicts, and merge using the appropriate strategy
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-indigo-400 text-sm overflow-x-auto">
                  <code>{`# Pull Request template
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing`}</code>
                </pre>
              </div>
            </section>

            {/* Git Hooks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-indigo-600" size={24} />
                Git Hooks for Automation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Git hooks automate tasks at specific points in the Git workflow. They're perfect for enforcing standards and running automated checks.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">pre-commit</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Run linters and formatters before committing
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">commit-msg</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Validate commit message format
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">pre-push</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Run tests before pushing to remote
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">pre-receive</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Server-side hook for enforcing policies
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-indigo-400 text-sm overflow-x-auto">
                  <code>{`# Using Husky for Git hooks
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/commit-msg 'npx commitlint --edit $1'

# package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}`}</code>
                </pre>
              </div>
            </section>

            {/* Advanced Git Techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Git Techniques</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Mastering advanced Git commands helps you handle complex situations and work more efficiently.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-indigo-400 text-sm overflow-x-auto">
                  <code>{`# Interactive rebase for clean history
git rebase -i HEAD~3

# Squash commits
git rebase -i HEAD~3
# Change 'pick' to 'squash' for commits to combine

# Cherry-pick specific commits
git cherry-pick &lt;commit-hash&gt;

# Stash changes temporarily
git stash
git stash pop
git stash list

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Recover lost commits
git reflog
git checkout &lt;lost-commit-hash&gt;

# Bisect to find buggy commit
git bisect start
git bisect bad
git bisect good &lt;good-commit-hash&gt;`}</code>
                </pre>
              </div>
            </section>

            {/* Team Collaboration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Team Collaboration Guidelines</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Effective team collaboration requires clear guidelines and communication. Establish these practices to ensure smooth workflows.
              </p>
              
              <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Sync regularly:</strong> Pull and rebase frequently to minimize conflicts</li>
                <li><strong>Communicate changes:</strong> Notify team members of breaking changes</li>
                <li><strong>Review promptly:</strong> Respond to pull requests in a timely manner</li>
                <li><strong>Document decisions:</strong> Record important decisions in commit messages or documentation</li>
                <li><strong>Use issue tracking:</strong> Link commits to issues for traceability</li>
                <li><strong>Protect main branches:</strong> Require reviews for main branch merges</li>
                <li><strong>Automate checks:</strong> Use CI/CD to run tests automatically</li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Git best practices are essential for professional software development. By following these guidelines for branching, committing, code review, and collaboration, you'll maintain a clean history, improve team productivity, and deliver higher quality software. Remember that the best Git workflow is one that your team consistently follows and adapts to your needs.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
