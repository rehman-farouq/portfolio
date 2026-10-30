"use client";

import {
  Smartphone,
  Globe,
  Database,
  Server,
  Code2,
  Palette,
  GitBranch,
  Cloud,
  Zap,
  Shield,
  Layout,
  Terminal,
  Rocket,
  Target,
  Sparkles,
  Monitor,
  SmartphoneIcon,
  Users,
} from "lucide-react";
import { SectionHeading, Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    // Mobile Development
    {
      name: "Flutter",
      icon: <Smartphone size={32} />,
      category: "Mobile",
      level: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dart",
      icon: <Code2 size={32} />,
      category: "Mobile",
      level: 90,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "iOS Developer",
      icon: <SmartphoneIcon size={32} />,
      category: "Mobile",
      level: 75,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Android Development",
      icon: <Smartphone size={32} />,
      category: "Mobile",
      level: 85,
      color: "from-green-500 to-green-600",
    },
    {
      name: "React Native",
      icon: <SmartphoneIcon size={32} />,
      category: "Mobile",
      level: 70,
      color: "from-cyan-500 to-blue-500",
    },

    // Web Development
    {
      name: "Next.js",
      icon: <Globe size={32} />,
      category: "Web",
      level: 85,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "React",
      icon: <Layout size={32} />,
      category: "Web",
      level: 82,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      icon: <Terminal size={32} />,
      category: "Web",
      level: 78,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "JavaScript",
      icon: <Code2 size={32} />,
      category: "Web",
      level: 88,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "HTML5/CSS3",
      icon: <Palette size={32} />,
      category: "Web",
      level: 92,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette size={32} />,
      category: "Web",
      level: 88,
      color: "from-teal-500 to-green-500",
    },
    {
      name: "Responsive Web",
      icon: <Monitor size={32} />,
      category: "Web",
      level: 90,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Web Application",
      icon: <Globe size={32} />,
      category: "Web",
      level: 85,
      color: "from-cyan-500 to-blue-500",
    },

    // Backend & Database
    {
      name: "Google Firebase",
      icon: <Cloud size={32} />,
      category: "Backend",
      level: 82,
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "REST APIs",
      icon: <Server size={32} />,
      category: "Backend",
      level: 92,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "GraphQL",
      icon: <Server size={32} />,
      category: "Backend",
      level: 75,
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "Node.js",
      icon: <Server size={32} />,
      category: "Backend",
      level: 70,
      color: "from-green-600 to-green-700",
    },
    {
      name: "MySQL",
      icon: <Database size={32} />,
      category: "Backend",
      level: 35,
      color: "from-blue-500 to-blue-600",
    },

    // Design & UI/UX
    {
      name: "UI/UX Design",
      icon: <Palette size={32} />,
      category: "Design",
      level: 85,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Figma",
      icon: <Palette size={32} />,
      category: "Design",
      level: 78,
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Adobe XD",
      icon: <Palette size={32} />,
      category: "Design",
      level: 72,
      color: "from-pink-600 to-rose-600",
    },
    {
      name: "Material Design",
      icon: <Layout size={32} />,
      category: "Design",
      level: 90,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Responsive Design",
      icon: <Monitor size={32} />,
      category: "Design",
      level: 92,
      color: "from-teal-500 to-green-500",
    },

    // Tools & Deployment
    {
      name: "GIT Version Control",
      icon: <GitBranch size={32} />,
      category: "Tools",
      level: 88,
      color: "from-red-500 to-orange-500",
    },
    {
      name: "GitHub",
      icon: <GitBranch size={32} />,
      category: "Tools",
      level: 90,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "GitLab",
      icon: <GitBranch size={32} />,
      category: "Tools",
      level: 75,
      color: "from-orange-600 to-red-600",
    },
    {
      name: "VS Code",
      icon: <Code2 size={32} />,
      category: "Tools",
      level: 95,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Android Studio",
      icon: <Terminal size={32} />,
      category: "Tools",
      level: 85,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Xcode",
      icon: <Terminal size={32} />,
      category: "Tools",
      level: 70,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Mobile App Publishing",
      icon: <Rocket size={32} />,
      category: "Deployment",
      level: 95,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Docker",
      icon: <Server size={32} />,
      category: "Deployment",
      level: 65,
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Vercel",
      icon: <Rocket size={32} />,
      category: "Deployment",
      level: 80,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Netlify",
      icon: <Rocket size={32} />,
      category: "Deployment",
      level: 78,
      color: "from-cyan-500 to-blue-500",
    },

    // Monetization & Analytics
    {
      name: "AdMob Integration",
      icon: <Target size={32} />,
      category: "Monetization",
      level: 85,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Google Analytics",
      icon: <Target size={32} />,
      category: "Monetization",
      level: 80,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Firebase Analytics",
      icon: <Cloud size={32} />,
      category: "Monetization",
      level: 82,
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "In-App Purchases",
      icon: <Target size={32} />,
      category: "Monetization",
      level: 75,
      color: "from-purple-500 to-pink-500",
    },

    // Expertise & Soft Skills
    {
      name: "Debugging & Troubleshooting",
      icon: <Zap size={32} />,
      category: "Expertise",
      level: 92,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Cross-Platform Development",
      icon: <Layout size={32} />,
      category: "Expertise",
      level: 95,
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Performance Optimization",
      icon: <Zap size={32} />,
      category: "Expertise",
      level: 88,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Code Review",
      icon: <Shield size={32} />,
      category: "Expertise",
      level: 85,
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "Agile/Scrum",
      icon: <Target size={32} />,
      category: "Expertise",
      level: 80,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Problem Solving",
      icon: <Zap size={32} />,
      category: "Expertise",
      level: 90,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Team Collaboration",
      icon: <Users size={32} />,
      category: "Expertise",
      level: 92,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Project Management",
      icon: <Target size={32} />,
      category: "Expertise",
      level: 78,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "API Integration",
      icon: <Server size={32} />,
      category: "Expertise",
      level: 90,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Security Best Practices",
      icon: <Shield size={32} />,
      category: "Expertise",
      level: 82,
      color: "from-red-500 to-orange-500",
    },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mobile":
        return <Smartphone size={20} className="text-blue-400" />;
      case "Web":
        return <Globe size={20} className="text-purple-400" />;
      case "Design":
        return <Palette size={20} className="text-pink-400" />;
      case "Backend":
        return <Server size={20} className="text-orange-400" />;
      case "Deployment":
        return <Rocket size={20} className="text-indigo-400" />;
      case "Tools":
        return <GitBranch size={20} className="text-red-400" />;
      case "Monetization":
        return <Target size={20} className="text-green-400" />;
      case "Expertise":
        return <Sparkles size={20} className="text-yellow-400" />;
      default:
        return <Target size={20} className="text-gray-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills &"
          highlight="Expertise"
          subtitle="Comprehensive skill set covering mobile development, web technologies, and modern development practices"
        />

        <div className="space-y-12 sm:space-y-16">
          {categories.map((category) => (
            <div key={category} className="space-y-6 sm:space-y-8">
              <Reveal direction="right" distance={24} className="flex items-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50 sm:h-12 sm:w-12"
                >
                  {getCategoryIcon(category)}
                </motion.div>
                <h3 className="text-xl font-semibold capitalize text-slate-900 dark:text-white sm:text-2xl">
                  {category}{" "}
                  <span className="font-normal text-slate-500 dark:text-gray-400">Technologies</span>
                </h3>
              </Reveal>

              <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4" gap={0.06}>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <StaggerItem key={index} className="h-full">
                      <TiltCard className="h-full rounded-2xl" max={6}>
                        <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-blue-500/15 dark:border-gray-700/50 dark:bg-gray-800/50 sm:p-6">
                          <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${skill.color} text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-16 sm:w-16`}
                            >
                              <span className="text-sm sm:text-base">{skill.icon}</span>
                            </div>
                            <div className="w-full space-y-2">
                              <span className="block text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white sm:text-base lg:text-lg">
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-700/50 sm:h-2">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                  />
                                </div>
                                <span className="whitespace-nowrap rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-gray-700/50 dark:text-gray-400 sm:px-3 sm:text-sm">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            aria-hidden
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]`}
                          />
                        </div>
                      </TiltCard>
                    </StaggerItem>
                  ))}
              </Stagger>
            </div>
          ))}
        </div>

        {/* Skills summary */}
        <Reveal className="mt-16 text-center sm:mt-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 backdrop-blur-sm sm:gap-4 sm:px-6 sm:py-3">
            <Rocket className="text-blue-500" size={20} />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300 sm:text-base">
              {skills.length}+ Technologies mastered across {categories.length} categories
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
