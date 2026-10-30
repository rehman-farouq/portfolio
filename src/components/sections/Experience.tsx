"use client";

import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionHeading, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Application Developer",
      company: "Glowlogix",
      location: "Gujrat, Punjab, Pakistan",
      period: "10/2025 - Present",
      description: "A company focused on technology solutions",
      logo: "/images/glowlogix_white.png",
      achievements: [
        "Engineered and deployed multiple high-performance cross-platform mobile applications using Flutter and Dart, enhancing user experience and engagement",
        "Built scalable cross-platform mobile applications using Flutter, ensuring consistent performance across Android and iOS devices",
        "Architected and deployed full-featured Flutter applications with integrated backend and third-party APIs",
        "Enhanced app performance through code refactoring and optimization, achieving smoother frame rendering and faster load times",
      ],
      techStack: ["Flutter", "Dart", "Firebase", "APIs", "React Native"],
      featured: true,
    },
    {
      title: "App & Web Developer",
      company: "Softaxion",
      location: "Rawalpindi, Punjab, Pakistan",
      period: "05/2024 - 08/2025",
      description:
        "A software development company specializing in mobile and web applications",
      logo: "/images/softaxion-logo.png",
      achievements: [
        "Engineered full-stack mobile and web applications using Flutter and Next.js with Tailwind CSS, delivering seamless cross-platform experiences",
        "Designed responsive web interfaces that improved user engagement and interaction flow",
        "Integrated complex third-party APIs and backend services, ensuring seamless data flow and real-time updates",
        "Optimized application performance through systematic refactoring, resulting in enhanced rendering speed and reduced latency",
      ],
      techStack: ["Flutter", "Next.js", "Tailwind CSS", "APIs"],
      featured: false,
    },
    {
      title: "Application Developer",
      company: "TeqHolic",
      location: "Jhelum, Punjab, Pakistan",
      period: "01/2023 - 03/2024",
      description: "A mobile application development company",
      logo: "/images/teqholic-logo.png",
      achievements: [
        "Designed and developed mobile applications using Flutter and Dart, focusing on intuitive UI/UX and smooth user experiences",
        "Implemented AdMob monetization strategies, increasing in-app revenue",
        "Deployed multiple apps to the Google Play Store",
        "Reduced crash rates through proactive debugging and performance optimization",
        "Collaborated with designers and backend teams to deliver projects ahead of schedule and within scope",
      ],
      techStack: ["Flutter", "Dart", "AdMob", "Firebase"],
      featured: false,
    },
  ];

  const education = [
    {
      degree: "FSC (Pre-Engineering / Computer Science)",
      institution: "Associate College",
      location: "Mangowal, Punjab, Pakistan",
      period: "01/2020 - 01/2022",
      logo: "/images/associate-college-logo.svg",
      description:
        "Graduated with honors, focused on software engineering and mobile development",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-transparent via-white/45 to-transparent dark:via-white/[0.025] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work" highlight="Experience" subtitle="My professional journey through technology companies and projects" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Reveal key={index} direction={index % 2 === 0 ? "right" : "left"} distance={48}>
              <div
                className={`relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:shadow-blue-500/10 hover:border-gray-300/50 dark:hover:border-gray-600/50 hover:-translate-y-1 ${
                  exp.featured ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {/* Featured badge */}
                {exp.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Current Position
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-3">
                        <Briefcase className="text-blue-400" size={20} />
                        <div className="flex items-center gap-4">
                          {/* Enhanced Logo Container with Next.js Image */}
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div className="relative bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                              <div className="relative w-16 h-16">
                                <Image
                                  src={exp.logo}
                                  alt={`${exp.company} logo`}
                                  fill
                                  sizes="64px"
                                  className="object-contain filter drop-shadow-md"
                                  onError={(e) => {
                                    // Fallback if image doesn't exist
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                  }}
                                />
                                {/* Fallback div if image fails to load */}
                                <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg items-center justify-center text-white font-bold text-xl">
                                  {exp.company.charAt(0)}
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="font-semibold text-lg text-gray-800 dark:text-white">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:ml-2">
                        <MapPin className="text-purple-400" size={18} />
                        <span className="text-gray-600 dark:text-gray-400">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                    <Calendar className="text-green-400" size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-blue-400 pl-4 bg-gradient-to-r from-blue-500/5 to-transparent py-2 rounded-r-lg">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 group transition-all duration-300"
                        style={{ animationDelay: `${200 + achIndex * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <Stagger className="flex flex-wrap gap-2" gap={0.05}>
                  {exp.techStack.map((tech, techIndex) => (
                    <StaggerItem key={techIndex}>
                    <span
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-600/20 dark:border-blue-600/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
                     
                    >
                      {tech}
                    </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education Section */}
        <Reveal className="mt-20">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:shadow-blue-500/10">
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-xl font-semibold text-foreground dark:text-white mb-3">
                  {education[0].degree}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-4 group">
                    {/* Enhanced Education Logo with Next.js Image */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 transform">
                        <div className="relative w-16 h-16">
                          <Image
                            src={education[0].logo}
                            alt={`${education[0].institution} logo`}
                            fill
                            sizes="64px"
                            className="object-contain filter drop-shadow-md"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                          {/* Fallback div if image fails to load */}
                          <div className="hidden w-full h-full bg-gradient-to-br from-green-500 to-blue-500 rounded-lg items-center justify-center text-white font-bold text-xl">
                            {education[0].institution.charAt(0)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-lg text-gray-800 dark:text-white block group-hover:text-blue-400 transition-colors duration-300">
                        {education[0].institution}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="text-blue-400" size={16} />
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {education[0].location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mt-4 md:mt-0 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50 transform hover:-translate-y-1 transition-all duration-300">
                <Calendar className="text-purple-400" size={18} />
                <span className="font-medium">{education[0].period}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
