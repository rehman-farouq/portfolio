import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Container, Layers, Terminal } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Docker for Developers 2026 | Rehman Farouq",
  description: "Master Docker containerization for developers. Learn Docker fundamentals, Dockerfile best practices, Docker Compose, container orchestration, and deployment…",
  keywords: "Docker tutorial, containerization, Docker Compose, Dockerfile, container orchestration, Docker deployment, DevOps, microservices, Docker best practices, container security",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Docker for Developers 2026 | Rehman Farouq",
    description: "Complete guide to Docker containerization for developers with practical examples.",
    url: "https://rehmanfarouq.site/blog/docker-for-developers",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Docker for Developers 2026",
    description: "Master Docker containerization from basics to advanced deployment strategies.",
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
    canonical: "https://rehmanfarouq.site/blog/docker-for-developers",
  },
}

export default function DockerForDevelopers() {
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
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 md:p-12">
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
                16 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Docker for Developers 2026: Complete Containerization Guide
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master Docker containerization for modern development. Learn to containerize applications, use Docker Compose for multi-container setups, and deploy with confidence.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | DevOps & Containerization Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Docker Matters</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Docker has revolutionized how we develop, ship, and run applications. By containerizing applications, you ensure consistency across development, testing, and production environments, eliminating the "it works on my machine" problem.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This guide covers everything you need to know about Docker, from basic concepts to advanced deployment strategies.
              </p>
            </section>

            {/* Docker Fundamentals */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Container className="text-cyan-600" size={24} />
                Docker Fundamentals
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Understanding Docker's core concepts is essential for effective containerization. Docker uses a client-server architecture with images, containers, and registries.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Images</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Read-only templates that define your application environment
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Containers</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Running instances of images with isolated filesystems
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Registries</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Storage and distribution systems for Docker images
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-cyan-400 text-sm overflow-x-auto">
                  <code>{`# Basic Docker commands
docker build -t myapp:latest .
docker run -p 3000:3000 myapp:latest
docker ps                    # List running containers
docker logs &lt;container-id&gt;   # View container logs
docker exec -it &lt;container-id&gt; /bin/bash  # Access container shell`}</code>
                </pre>
              </div>
            </section>

            {/* Dockerfile */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Terminal className="text-cyan-600" size={24} />
                Writing Dockerfiles
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A Dockerfile is a script that defines how to build a Docker image. Following best practices ensures efficient, secure, and maintainable images.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-cyan-400 text-sm overflow-x-auto">
                  <code>{`# Multi-stage Dockerfile for Next.js
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]`}</code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dockerfile Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use multi-stage builds to reduce image size</li>
                <li>Leverage Docker layer caching with proper command ordering</li>
                <li>Use specific version tags instead of latest</li>
                <li>Minimize the number of layers</li>
                <li>Run containers as non-root users for security</li>
                <li>Use .dockerignore to exclude unnecessary files</li>
              </ul>
            </section>

            {/* Docker Compose */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="text-cyan-600" size={24} />
                Docker Compose for Multi-Container Apps
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Docker Compose simplifies running multi-container applications. It's perfect for development environments where you need to coordinate multiple services.
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-cyan-400 text-sm overflow-x-auto">
                  <code>{`# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`}</code>
                </pre>
              </div>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 mb-6">
                <pre className="text-cyan-400 text-sm overflow-x-auto">
                  <code>{`# Docker Compose commands
docker-compose up              # Start all services
docker-compose up -d           # Start in detached mode
docker-compose down            # Stop and remove containers
docker-compose logs            # View logs
docker-compose exec app bash   # Execute command in service`}</code>
                </pre>
              </div>
            </section>

            {/* Development Workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Docker in Development Workflow</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Integrating Docker into your development workflow improves consistency and productivity. Here's how to use Docker effectively throughout the development lifecycle.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Local Development</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Use Docker Compose to spin up local development environments with all dependencies
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Testing</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Run tests in containers to ensure consistency across different environments
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">CI/CD Integration</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Build and test containers in CI/CD pipelines before deployment
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Production Deployment</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Deploy containers to cloud platforms or orchestration systems
                  </p>
                </div>
              </div>
            </section>

            {/* Security Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Docker Security Best Practices</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Security is crucial when containerizing applications. Follow these practices to ensure your containers are secure.
              </p>
              
              <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Use official base images:</strong> Start with trusted, official images from Docker Hub</li>
                <li><strong>Scan images for vulnerabilities:</strong> Use tools like Docker Scout or Trivy</li>
                <li><strong>Minimize attack surface:</strong> Use minimal base images like Alpine</li>
                <li><strong>Run as non-root:</strong> Create and use non-root users in containers</li>
                <li><strong>Keep images updated:</strong> Regularly update base images and dependencies</li>
                <li><strong>Use secrets management:</strong> Never hardcode sensitive data in images</li>
                <li><strong>Limit container capabilities:</strong> Drop unnecessary Linux capabilities</li>
                <li><strong>Network isolation:</strong> Use Docker networks to isolate containers</li>
              </ul>
            </section>

            {/* Orchestration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Container Orchestration</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For production deployments with multiple containers, orchestration platforms provide scaling, load balancing, and management capabilities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kubernetes</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Industry-standard orchestration platform with extensive ecosystem
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Docker Swarm</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Simple, built-in orchestration for Docker
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AWS ECS</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Managed container service by AWS
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Google Cloud Run</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Serverless container platform
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Docker has become an essential tool for modern developers. By mastering containerization, you can build more reliable, scalable, and portable applications. Start with simple containers, gradually adopt Docker Compose for development, and explore orchestration for production deployments.
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
