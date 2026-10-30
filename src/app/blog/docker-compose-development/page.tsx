import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Server, Database } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Docker Compose for Development 2026 | Rehman Farouq",
  description: "Master Docker Compose for development environments. Learn multi-container setups, development workflows, service orchestration, and best practices for local…",
  keywords: "Docker Compose, Docker development, multi-container setups, Docker Compose tutorial, container orchestration, development environment, Docker 2026, DevOps",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Docker Compose for Development 2026 | Rehman Farouq",
    description: "Complete guide to Docker Compose for development with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/docker-compose-development",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Docker Compose for Development 2026",
    description: "Master Docker Compose for development environments with practical examples.",
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
    canonical: "https://rehmanfarouq.site/blog/docker-compose-development",
  },
}

export default function DockerComposeDevelopment() {
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Tutorial</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 md:p-12">
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
                18 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Docker Compose for Development 2026: Multi-Container Setups
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Master Docker Compose for development environments. Learn multi-container setups, development workflows, service orchestration, and best practices.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | DevOps Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Docker Compose</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Docker Compose simplifies multi-container Docker applications. It's perfect for development environments, allowing you to define and run multi-container applications with a single command.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This guide covers everything from basic setups to advanced multi-container orchestration for development workflows.
              </p>
            </section>

            {/* Basic Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Server className="text-blue-600" size={24} />
                Basic Docker Compose Setup
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Get started with a simple Docker Compose configuration for a web application.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev

# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Run with
docker-compose up
docker-compose up -d  # detached mode
docker-compose down   # stop and remove`}
                </pre>
              </div>
            </section>

            {/* Multi-Container Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="text-blue-600" size={24} />
                Multi-Container Application
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Set up a complete application with web server, database, and cache.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - .:/app
      - /app/node_modules

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:

# Network configuration
networks:
  default:
    driver: bridge`}
                </pre>
              </div>
            </section>

            {/* Development Workflow */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Development Workflow</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Optimize your development workflow with Docker Compose commands and patterns.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# Development commands
docker-compose up              # Start all services
docker-compose up -d           # Start in detached mode
docker-compose down            # Stop and remove containers
docker-compose logs            # View logs
docker-compose logs -f web     # Follow logs for specific service
docker-compose ps              # List running containers
docker-compose exec web bash   # Execute command in container
docker-compose restart web     # Restart specific service
docker-compose build           # Rebuild images
docker-compose pull            # Pull latest images

# Development override
# docker-compose.dev.yml
version: '3.8'

services:
  web:
    build:
      context: .
      target: development
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - CHOKIDAR_USEPOLLING=true
    command: npm run dev

# Run with override
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# Hot reload configuration
# Dockerfile
FROM node:18-alpine AS base
WORKDIR /app

FROM base AS development
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS production
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["npm", "start"]`}
                </pre>
              </div>
            </section>

            {/* Service Health Checks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Health Checks and Dependencies</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Implement health checks to ensure services are ready before dependent services start.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# docker-compose.yml with health checks
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myapp
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

# Wait script for dependencies
# wait-for-it.sh
#!/bin/sh
TIMEOUT=15
QUIET=0
HOST=$1
PORT=$2
shift 2
COMMAND=$@

if [ "$QUIET" -ne 1 ]; then
  echo "Waiting for $HOST:$PORT..."
end

for i in $(seq 1 $TIMEOUT); do
  nc -z "$HOST" "$PORT" >/dev/null 2>&1
  
  if [ $? -eq 0 ]; then
    if [ "$QUIET" -ne 1 ]; then
      echo "$HOST:$PORT is available"
    fi
    exec $COMMAND
  fi
  
  sleep 1
done

echo "Timeout reached for $HOST:$PORT"
exit 1}`}
                </pre>
              </div>
            </section>

            {/* Environment Variables */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Environment Configuration</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Manage environment variables across different environments with Docker Compose.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# .env file
DATABASE_URL=postgresql://user:password@db:5432/myapp
REDIS_URL=redis://redis:6379
API_KEY=your_api_key
NODE_ENV=development

# .env.production
DATABASE_URL=postgresql://prod_user:prod_pass@prod_db:5432/myapp
REDIS_URL=redis://prod_redis:6379
API_KEY=prod_api_key
NODE_ENV=production

# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    environment:
      - NODE_ENV=\${NODE_ENV:-development}

# Using different env files
docker-compose --env-file .env.production up

# Environment substitution
version: '3.8'

services:
  web:
    image: nginx:\${NGINX_VERSION:-latest}
    ports:
      - "\${WEB_PORT:-80}:80"
    environment:
      - APP_NAME=\${APP_NAME}
      - DEBUG=\${DEBUG:-false}`}
                </pre>
              </div>
            </section>

            {/* Volumes and Networking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Volumes and Networking</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Configure volumes for data persistence and custom networks for service communication.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# docker-compose.yml with volumes and networks
version: '3.8'

services:
  web:
    build: .
    volumes:
      - ./src:/app/src              # Bind mount for development
      - node_modules:/app/node_modules  # Named volume for dependencies
      - ./logs:/app/logs            # Log directory
    networks:
      - frontend
      - backend

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - backend

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    networks:
      - backend

volumes:
  postgres_data:
    driver: local
  redis_data:
    driver: local
  node_modules:

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true  # No external access

# Volume backup and restore
# Backup
docker run --rm -v myapp_postgres_data:/data -v $(pwd):/backup \
  alpine tar czf /backup/postgres_backup.tar.gz /data

# Restore
docker run --rm -v myapp_postgres_data:/data -v $(pwd):/backup \
  alpine tar xzf /backup/postgres_backup.tar.gz -C /`}
                </pre>
              </div>
            </section>

            {/* Production Deployment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Production Considerations</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Best practices for using Docker Compose in production environments.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`# docker-compose.prod.yml
version: '3.8'

services:
  web:
    image: myapp:latest
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"

  db:
    image: postgres:15-alpine
    deploy:
      resources:
        limits:
          memory: 1G
    restart: unless-stopped
    volumes:
      - postgres_data:/var/lib/postgresql/data

# Security best practices
# Use non-root users
# Dockerfile
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
WORKDIR /app

# Scan images for vulnerabilities
docker scan myapp:latest

# Use specific image versions
# Instead of latest
image: postgres:15-alpine

# Limit container capabilities
cap_drop:
  - ALL
cap_add:
  - NET_BIND_SERVICE

# Read-only filesystem
read_only: true
tmpfs:
  - /tmp`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Docker Compose Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Development</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use bind mounts for code</li>
                    <li>• Enable hot reload</li>
                    <li>• Separate dev and prod configs</li>
                    <li>• Use environment variables</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-cyan-900 dark:text-cyan-300 mb-2">Performance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use named volumes for data</li>
                    <li>• Optimize Dockerfile layers</li>
                    <li>• Use .dockerignore</li>
                    <li>• Cache dependencies</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">Security</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Scan images for vulnerabilities</li>
                    <li>• Use specific image versions</li>
                    <li>• Run as non-root user</li>
                    <li>• Limit container capabilities</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Maintenance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Version control compose files</li>
                    <li>• Document service dependencies</li>
                    <li>• Use health checks</li>
                    <li>• Monitor resource usage</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Docker Compose is an essential tool for development environments, making it easy to manage multi-container applications. By following these patterns and best practices, you can create efficient, reproducible development setups.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Start with simple setups and gradually add complexity as your application grows. Remember to separate development and production configurations for optimal results.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Containerize Your Development?</h3>
              <p className="text-white/90 mb-6">
                Explore more DevOps tutorials and streamline your development workflow!
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
