"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Tools", href: "/tools" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.1 }}
      className={`site-navbar fixed inset-x-0 top-4 z-50 w-[95%] max-w-7xl mx-auto rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.16)] border border-white/70 dark:border-slate-800/70"
          : "bg-white/40 dark:bg-slate-900/30 backdrop-blur-xl border border-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
              RF
            </div>
            <span className="font-semibold text-slate-800 dark:text-white hidden sm:inline group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Rehman Farouq
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/25"
                    />
                  )}
                  {!active && (
                    <span className="absolute inset-0 rounded-full bg-slate-900/0 transition-colors duration-300 hover:bg-slate-900/5 dark:hover:bg-white/10" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}

            <Link
              href="/#contact"
              className="ml-3 flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/40"
            >
              <Sparkles size={16} />
              Let&apos;s Talk
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-125 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 p-2 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/20"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-md"
                }`}
                style={{ animationDelay: `${50 + index * 30}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 mt-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold text-center shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
