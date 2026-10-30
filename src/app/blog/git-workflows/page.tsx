import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, GitBranch, GitMerge } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Git Workflows 2026 | Rehman Farouq",
  description: "Master Git workflows including GitFlow, trunk-based development, feature branch workflow, and best practices for team collaboration and version control.",
  keywords: "Git workflows, GitFlow, trunk-based development, feature branch workflow, Git best practices, version control, team collaboration, Git 2026",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Git Workflows 2026 | Rehman Farouq",
    description: "Complete guide to Git workflows with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/git-workflows",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Git Workflows 2026",
    description: "Master Git workflows including GitFlow and trunk-based development.",
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
    canonical: "https://rehmanfarouq.site/blog/git-workflows",
  },
}

export default function GitWorkflows() {
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
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-8 md:p-12">
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
                17 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Git Workflows 2026: Master Version Control
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master Git workflows including GitFlow, trunk-based development, feature branch workflow, and best practices for team collaboration and version control.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Git Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Git Workflows</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                A Git workflow defines how your team uses Git to collaborate on code. Choosing the right workflow is crucial for maintaining code quality, enabling smooth releases, and supporting team collaboration.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This guide covers the most popular Git workflows and helps you choose the right one for your team.
              </p>
            </section>

            {/* Feature Branch Workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GitBranch className="text-orange-600" size={24} />
                Feature Branch Workflow
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The feature branch workflow is simple and effective for teams of all sizes. Each feature gets its own branch.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Create a new feature branch
git checkout -b feature/user-authentication

# Make changes and commit
git add .
git commit -m "Add user authentication"

# Push to remote
git push origin feature/user-authentication

# Create pull request
# Review and merge

# Delete branch after merge
git branch -d feature/user-authentication
git push origin --delete feature/user-authentication

# Update main branch
git checkout main
git pull origin main

# Branch naming conventions
feature/feature-name
bugfix/bug-description
hotfix/critical-fix
release/version-number
docs/documentation-update
refactor/code-refactoring
test/add-tests`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Best Practices</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Keep branches focused and short-lived</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Use descriptive commit messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Always pull before pushing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Require code reviews for all merges</span>
                </li>
              </ul>
            </section>

            {/* GitFlow Workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GitMerge className="text-orange-600" size={24} />
                GitFlow Workflow
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                GitFlow is a strict branching model designed for projects with scheduled release cycles.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# GitFlow branches
# main - production code
# develop - integration branch
# feature/* - new features
# release/* - release preparation
# hotfix/* - production fixes

# Initialize GitFlow
git flow init

# Start a new feature
git flow feature start user-authentication

# Finish feature (merge to develop)
git flow feature finish user-authentication

# Start a release
git flow release start v1.0.0

# Finish release (merge to main and develop)
git flow release finish v1.0.0

# Start a hotfix
git flow hotfix fix-critical-bug

# Finish hotfix
git flow hotfix finish fix-critical-bug

# Branch structure
main (production)
  ├── v1.0.0
  └── v1.1.0

develop (integration)
  ├── feature/user-auth
  ├── feature/payment
  └── release/v1.0.0

feature/* (new features)
  ├── feature/user-auth
  └── feature/payment

release/* (release preparation)
  └── release/v1.0.0

hotfix/* (production fixes)
  └── hotfix/critical-bug`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">When to Use GitFlow</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Pros</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Clear separation of concerns</li>
                    <li>• Structured release process</li>
                    <li>• Easy hotfix management</li>
                    <li>• Good for scheduled releases</li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Cons</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Complex branch structure</li>
                    <li>• More merge conflicts</li>
                    <li>• Slower development cycle</li>
                    <li>• Overkill for small teams</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Trunk-Based Development */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trunk-Based Development</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Trunk-based development is a modern approach where developers work directly on the main branch with short-lived feature branches.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Trunk-based workflow
# Create short-lived feature branch
git checkout -b feature/auth

# Make small, frequent commits
git add .
git commit -m "Add auth service"

# Push frequently
git push origin feature/auth

# Create pull request immediately
# Continuous integration runs tests

# Merge to main after approval
# Delete branch

# Repeat for each feature

# Feature flags for gradual rollout
const featureFlags = {
  NEW_AUTH: process.env.FEATURE_NEW_AUTH === 'true',
  PAYMENT_GATEWAY: process.env.FEATURE_PAYMENT === 'true'
}

if (featureFlags.NEW_AUTH) {
  // New authentication logic
} else {
  // Old authentication logic
}

# Branch protection rules
# - Require pull request
# - Require status checks
# - Require code owner review
# - Limit who can push to main
# - Enforce linear history`}
                </pre>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Trunk-Based Best Practices</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Keep branches under 2 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Use feature flags for new features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Implement comprehensive CI/CD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Automated testing is mandatory</span>
                </li>
              </ul>
            </section>

            {/* Commit Conventions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Commit Message Conventions</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Follow commit message conventions for better collaboration and automated changelog generation.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Conventional Commits format
<type>(<scope>): <subject>

<body>

<footer>

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style changes (formatting)
refactor: Code refactoring
perf:     Performance improvements
test:     Adding or updating tests
chore:    Maintenance tasks
ci:       CI/CD changes
build:    Build system changes
revert:   Revert a previous commit

# Examples
feat(auth): add user authentication
fix(api): resolve timeout issue in user endpoint
docs(readme): update installation instructions
style(button): fix linting errors
refactor(user): simplify user service
perf(image): optimize image loading
test(auth): add unit tests for auth service
chore(deps): update dependencies

# Breaking changes
feat(api)!: remove deprecated endpoint

# Detailed commit
feat(auth): add OAuth2 authentication

Add support for OAuth2 authentication with Google and GitHub providers.
This includes new middleware, controllers, and database schema updates.

Closes #123`}
                </pre>
              </div>
            </section>

            {/* Git Hooks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Git Hooks for Automation</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Automate workflows with Git hooks to enforce standards and improve code quality.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Pre-commit hook (.git/hooks/pre-commit)
#!/bin/bash
# Run linter before commit
npm run lint

# Pre-push hook (.git/hooks/pre-push)
#!/bin/bash
# Run tests before push
npm test

# Commit message hook (.git/hooks/commit-msg)
#!/bin/bash
# Validate commit message format
commit_regex='^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?: .{1,50}'
if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format"
    exit 1
fi

# Using Husky for Git hooks
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm test"

# Using lint-staged with Husky
npm install lint-staged --save-dev

# package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}

# .husky/pre-commit
npx lint-staged`}
                </pre>
              </div>
            </section>

            {/* Branch Protection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Branch Protection Rules</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Implement branch protection to maintain code quality and prevent accidental changes.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# GitHub Branch Protection Settings
# Settings > Branches > Add rule

# Rule: main branch
✓ Require pull request before merging
  - Require approvals: 1
  - Dismiss stale reviews
  - Require review from code owners
  - Require approval for apps

✓ Require status checks to pass
  - CI/CD pipeline
  - Code coverage
  - Security scans

✓ Require branches to be up to date
✓ Do not allow bypassing the settings
✓ Restrict who can push
✓ Require linear history
✓ Allow force pushes (disabled)
✓ Allow deletions (disabled)

# Using GitHub API for branch protection
curl -X PUT \\
  -H "Authorization: token YOUR_TOKEN" \\
  -H "Accept: application/vnd.github.v3+json" \\
  https://api.github.com/repos/owner/repo/branches/main/protection \\
  -d '{
    "required_status_checks": {
      "strict": true,
      "contexts": ["ci/circleci"]
    },
    "enforce_admins": true,
    "required_pull_request_reviews": {
      "required_approving_review_count": 1
    },
    "restrictions": null
  }'
`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Git Workflow Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Collaboration</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use descriptive branch names</li>
                    <li>• Write clear commit messages</li>
                    <li>• Review code thoroughly</li>
                    <li>• Communicate changes early</li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Quality</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Implement automated testing</li>
                    <li>• Use code review requirements</li>
                    <li>• Enable branch protection</li>
                    <li>• Run CI/CD on every push</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Workflow</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Keep branches short-lived</li>
                    <li>• Pull frequently</li>
                    <li>• Resolve conflicts early</li>
                    <li>• Delete merged branches</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">Automation</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use Git hooks</li>
                    <li>• Automate changelog</li>
                    <li>• Enable semantic versioning</li>
                    <li>• Automate releases</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Choosing the right Git workflow depends on your team size, release cycle, and project requirements. Feature branch workflow is great for most teams, GitFlow for scheduled releases, and trunk-based for continuous delivery.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Whatever workflow you choose, consistency and automation are key to success. Implement proper branch protection, automated testing, and clear communication guidelines.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Improve Your Git Workflow?</h3>
              <p className="text-white/90 mb-6">
                Explore more development tutorials and streamline your team collaboration!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
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
