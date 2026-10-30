"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Counter from "@/components/ui/Counter";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const ROLES = [
  "Flutter apps that feel native",
  "Next.js sites that rank & convert",
  "Clean architecture, fast delivery",
  "Play Store & App Store launches",
];

const ORBIT = [
  { name: "Flutter", src: "/images/flutter.png" },
  { name: "Dart", src: "/images/dart.png" },
  { name: "Next.js", src: "/images/nextjs.png" },
  { name: "Firebase", src: "/images/firebase.png" },
  { name: "Tailwind", src: "/images/tailwind.png" },
  { name: "API", src: "/images/api.png" },
];

const TECH = ["Flutter", "Next.js", "UI/UX", "Android", "iOS", "Firebase", "API Integration", "Animations"];

const STATS = [
  { end: 4, suffix: "+", label: "Years experience" },
  { end: 50, suffix: "+", label: "Projects shipped" },
  { end: 100, suffix: "%", label: "Client delight" },
];

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative mb-6 h-8 overflow-hidden text-lg font-medium text-slate-700 dark:text-slate-200 sm:text-xl" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.p
          key={ROLES[i]}
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -22, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="absolute inset-x-0 lg:inset-x-auto"
        >
          <span className="text-blue-600 dark:text-blue-400">›</span> {ROLES[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

const Hero = () => {
  // Cursor spotlight + photo parallax driven by motion values: zero React re-renders on mousemove.
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(99,102,241,0.18), transparent 70%)`;
  const photoX = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });
  const photoY = useSpring(useTransform(py, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });
  const photoRotY = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), { stiffness: 90, damping: 18 });
  const photoRotX = useSpring(useTransform(py, [-0.5, 0.5], [12, -12]), { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, px, py]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
    >
            <motion.div aria-hidden style={{ background: spotlight }} className="pointer-events-none absolute inset-0 hidden md:block" />

      {/* floating orbs (CSS only, GPU-friendly) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -left-10 top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="animate-float absolute right-0 top-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl [animation-delay:1.2s]" />
        <div className="animate-float absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-pink-500/15 blur-3xl [animation-delay:2.4s]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div style={{ x: photoX, y: photoY, rotateX: photoRotX, rotateY: photoRotY, transformPerspective: 1000 }} className="relative">
              <div aria-hidden className="orbit-ring pointer-events-none hidden lg:block">
                {ORBIT.map((o, i) => (
                  <div key={o.name} className="orbit-chip" style={{ ["--i" as string]: i }}>
                    <Image src={o.src} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                  </div>
                ))}
              </div>
              <div aria-hidden className="absolute -inset-3 animate-[spin_9s_linear_infinite] rounded-[2.2rem] bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#ec4899,#3b82f6)] opacity-70 blur-xl" />
              <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-[0_30px_90px_rgba(37,99,235,0.25)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70">
                <div className="relative h-72 w-56 overflow-hidden rounded-[1.5rem] sm:h-80 sm:w-64 md:h-96 md:w-72 lg:h-[28rem] lg:w-80">
                  <Image
                    src="/images/profile-photo.png"
                    alt="Rehman Farouq, Flutter and Next.js developer"
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover"
                    sizes="(max-width: 1024px) 288px, 320px"
                  />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 14 }}
                className="absolute -bottom-3 -right-3 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-white"
              >
                <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Open to work
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.div
              variants={rise}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-300"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
              Available for freelance and full-time work
            </motion.div>

            <motion.h1 variants={rise} className="mb-4 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="block text-slate-800 dark:text-white">Hi, I&apos;m</span>
              <span className="animate-gradient block bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rehman Farouq
              </span>
              <span className="mt-2 block text-2xl font-bold text-slate-600 dark:text-slate-300 sm:text-3xl">
                Flutter &amp; Next.js Developer
              </span>
            </motion.h1>

            <motion.div variants={rise}>
              <RoleRotator />
            </motion.div>

            <motion.div variants={rise} className="mb-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {TECH.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -3, scale: 1.06 }}
                  className="cursor-default rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.p variants={rise} className="mx-auto mb-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:mx-0 lg:text-lg">
              I craft polished mobile and web products with clean architecture, thoughtful interactions, and measurable
              product impact. From start-ups to modern brands, I turn ideas into fast, elegant experiences.
            </motion.p>

            <motion.div variants={rise} className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/projects"
                  className="group flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.3)]"
                >
                  View Projects
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 font-semibold text-slate-700 shadow-sm hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  <Mail size={18} /> Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={rise} className="mb-10 flex justify-center gap-3 lg:justify-start">
              {[
                { href: "https://github.com/Rehman532", label: "GitHub", Icon: Github, hover: "hover:border-blue-400 hover:text-blue-600" },
                { href: "https://www.linkedin.com/in/rehman-farouq-93727526b", label: "LinkedIn", Icon: Linkedin, hover: "hover:border-purple-400 hover:text-purple-600" },
              ].map(({ href, label, Icon, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 ${hover}`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={rise} className="grid gap-3 sm:grid-cols-3">
              {STATS.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60"
                >
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    <Counter end={s.end} suffix={s.suffix} className="inline-block" />
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-5 items-start justify-center rounded-full border border-slate-400/70 dark:border-slate-600">
          <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-slate-600 dark:bg-slate-400" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
