"use client";

import { Award, Clock, MapPin, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

const About = () => {
  const technologies = [
    {
      name: "Flutter",
      image: "/images/flutter.png",
      level: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dart",
      image: "/images/dart.png",
      level: 90,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Next.js",
      image: "/images/nextjs.png",
      level: 85,
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      name: "Tailwind CSS",
      image: "/images/tailwind.png",
      level: 88,
      color: "from-teal-500 to-emerald-500",
    },
    {
      name: "Firebase",
      image: "/images/firebase.png",
      level: 82,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "REST APIs",
      image: "/images/api.png",
      level: 92,
      color: "from-green-500 to-lime-500",
    },
  ];

  const stats = [
    { icon: <Users size={22} />, label: "Happy Clients", value: 50 },
    { icon: <Clock size={22} />, label: "Hours Coded", value: 8000 },
    { icon: <Award size={22} />, label: "Apps Published", value: 15 },
    { icon: <TrendingUp size={22} />, label: "Performance", value: 100 },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/8 via-transparent to-purple-500/8 dark:from-blue-500/12 dark:to-purple-500/12" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            About{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
          <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            I build thoughtful digital experiences that look sharp, feel fast,
            and solve real problems.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-shell p-6 sm:p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Professional <span className="text-blue-500">Summary</span>
            </h3>
            <p className="mb-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              I am a results-driven developer focused on creating exceptional
              mobile and web experiences. My work blends product thinking,
              modern UI systems, and reliable engineering so projects launch
              smoothly and stay easy to scale.
            </p>

            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70">
              <MapPin className="text-blue-500" size={20} />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Based in Gujrat, Pakistan
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Available for remote collaboration and on-site projects
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 shadow-sm hover:bg-white dark:border-slate-700/60 dark:bg-slate-900/70 dark:hover:bg-slate-800/70"
                >
                  <div className="mb-2 flex items-center gap-2 text-blue-500">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    <Counter
                      end={stat.value}
                      suffix={stat.label === "Performance" ? "%" : "+"}
                      className="inline-block"
                    />
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="section-shell p-6 sm:p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Core <span className="text-purple-500">Stack</span>
            </h3>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-linear-to-r ${tech.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
