"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading, Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const Projects = () => {
  const projects = [
    {
      title: "GleamHR - AI-Powered HR Management",
      description:
        "Comprehensive cloud-based HR platform with AI-assisted recruitment, employee onboarding, time tracking, payroll processing, and performance reviews. Features face attendance, asset tracking, custom workflows, Pumble integration, and real-time analytics for data-driven HR decisions.",
      techStack: [
        "Flutter",
        "Next.js",
        "PostgreSQL",
        "Redis",
        "AI/ML",
        "Node.js",
      ],
      liveDemo:
        "https://play.google.com/store/apps/details?id=com.glowlogix.gleamhr&hl=en",
      featured: true,
      gradient: "from-blue-500 to-teal-500",
      projectType: "HR Management System",
      client: "Glowlogix",
    },
    {
      title: "KiddoMind - Kids Learning & Educational App",
      description:
        "Interactive kids learning app designed to make education fun and engaging through visuals, sounds, and activities. Features include animals & birds learning with real voices, alphabet & counting modules, drawing board, quizzes, and voice-guided learning. The app helps children improve recognition skills, pronunciation, and early education through gamified experiences and interactive UI.",
      techStack: [
        "Flutter",
        "Dart",
        "Android (Kotlin)",
        "Firebase",
        "Audio Processing",
        "Animations",
      ],
      liveDemo:
        "https://play.google.com/store/apps/details?id=com.irtechsolution.kiddomind",
      featured: true,
      gradient: "from-pink-500 to-yellow-500",
      projectType: "Kids Learning App",
      client: "IR Tech Solution",
    },
    {
      title: "Binomical",
      description:
        "Your AI-Powered Partner for Automated Business Processes. From data to insights to automation powered by AI using optimized design. Specializing in Salesforce implementation and intelligent workflow automation.",
      techStack: [
        "Flutter",
        "Next.js",
        "AI/ML",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Blockchain",
        "Cloud Computing",
      ],
      liveDemo: "https://binomical.com",
      featured: false,
      gradient: "from-blue-500 to-cyan-500",
      projectType: "AI-Powered Business Automation",
      client: "Binomical Inc.",
    },

    {
      title: "GIGSTRAP",
      description:
        "Gigstrap is an AI-powered service marketplace that connects users with service providers instantly through intelligent matching. It combines blockchain technology for secure transactions with features like multi-role access, Gigtoken rewards, and enterprise workforce management tools.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI/ML",
        "Blockchain",
        "Cloud Computing",
        "Flutter",
      ],
      liveDemo: "https://gigstrap.com",
      featured: false,
      gradient: "from-purple-500 to-pink-500",
      projectType: "Service Marketplace",
      client: "GIGSTRAP Technologies",
    },

    {
      title: "SaraaKuch - Beauty & Lifestyle E-Commerce ",
      description:
        "A complete one-stop online store solution for apparel, cosmetics, food items, and lifestyle products. Features include product catalog management, secure checkout, user authentication, and an intuitive shopping experience.",
      techStack: [
        "Flutter",
        "Firebase",
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
      ],
      liveDemo: "",
      featured: false,
      gradient: "from-green-500 to-teal-500",
      projectType: "E-Commerce Platform",
      client: "SaraaKuch Store",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-br from-gray-50 dark:from-gray-900 via-gray-100 dark:via-gray-800 to-gray-50 dark:to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured"
          highlight="Projects"
          subtitle="Explore my latest work showcasing expertise in Flutter and Next.js development"
        />

        <Stagger className="grid gap-8 lg:grid-cols-2" gap={0.12}>
          {projects.map((project, index) => (
            <StaggerItem key={index} className="h-full">
              <TiltCard className="h-full rounded-2xl">
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/15 dark:border-gray-700/50 dark:bg-gray-800/50 ${
                  project.featured ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {/* Top badges: project type (left) and featured (right) */}
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-slate-100 dark:bg-gray-700/60 backdrop-blur-sm text-slate-600 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                    {project.projectType}
                  </span>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                    {project.description}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm mt-3 flex items-center gap-2">
                    <span>👤</span> {project.client}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-600/30 hover:border-blue-500/50 transition-colors duration-300"
                     
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium transition-colors duration-300 hover:bg-blue-600/10 px-4 py-2 rounded-lg ${
                      !project.liveDemo ? "pointer-events-none opacity-50" : ""
                    }`}
                  >
                    <ExternalLink
                      size={16}
                      className="group-hover/link:translate-x-1 group-hover/link:translate-y-1 transition-transform"
                    />
                    <span>Live Demo</span>
                  </a>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* View all projects button */}
        <Reveal className="mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
          >
            View All Projects
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
