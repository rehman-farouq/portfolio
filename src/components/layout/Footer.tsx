"use client";

import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const getHomeLink = () => {
    return pathname === "/" ? "#home" : "/";
  };

  const getSectionLink = (section: string) => {
    if (pathname === "/" && section !== "tools") {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  const getDirectLink = (page: string) => {
    if (pathname === "/" && page !== "tools") {
      return `#${page}`;
    }
    return `/${page}`;
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-slate-200 dark:border-gray-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Stagger className="grid gap-12 lg:grid-cols-3" gap={0.14}>
          {/* Brand */}
          <StaggerItem className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                REHMAN FAROUQ
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
                App & Web Developer skilled in Flutter and Next.js, dedicated to
                building scalable, high-performance mobile and web applications
                with modern UI/UX.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Rehman532"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200 dark:border-gray-700/50 rounded-full flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rehman-farouq-93727526b"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200 dark:border-gray-700/50 rounded-full flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rehmanfarouq9@gmail.com"
                className="group w-12 h-12 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200 dark:border-gray-700/50 rounded-full flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
              >
                <Mail size={18} />
              </a>
            </div>
          </StaggerItem>

          {/* Essential Links */}
          <StaggerItem>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Essential Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="group text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Blog & Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="group text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Get In Touch
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Contact Info - ONLY EMAIL CLICKABLE */}
          <StaggerItem>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="group flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm border border-slate-200/80 dark:border-gray-700/30 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-800/50 hover:border-blue-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                <Mail className="text-blue-600 dark:text-blue-400" size={18} />
                <a
                  href="mailto:rehmanfarouq9@gmail.com"
                  className="text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors hover:underline"
                >
                  rehmanfarouq9@gmail.com
                </a>
              </div>

              <div className="group flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm border border-slate-200/80 dark:border-gray-700/30 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-800/50 hover:border-purple-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                <span className="text-purple-600 dark:text-purple-400">📱</span>
                <span className="text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  92 3456920533
                </span>
              </div>

              <div className="group flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm border border-slate-200/80 dark:border-gray-700/30 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-800/50 hover:border-green-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                <span className="text-emerald-600 dark:text-green-400">📍</span>
                <span className="text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                 Gujrat , Punjab , Pakistan
                </span>
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="mt-16 pt-8 border-t border-slate-200 dark:border-gray-800/50" distance={16}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 text-sm">
                <span>© {currentYear} REHMAN FAROUQ. All rights reserved.</span>
                <Heart className="text-red-500" size={14} />
                <span>Made with</span>
                <Sparkles className="text-blue-600 dark:text-blue-400" size={14} />
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="text-slate-400 dark:text-gray-600">•</span>
                <Link
                  href="/terms-of-service"
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:underline"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200 dark:border-gray-700/50 px-4 py-2 rounded-full hover:bg-white dark:hover:bg-gray-800/70 hover:border-blue-500/50 hover:scale-105"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform"
              />
              <span className="text-sm font-medium">Back to top</span>
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
