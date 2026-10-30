"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (d: Direction, px: number) =>
  d === "up" ? { y: px } : d === "down" ? { y: -px } : d === "left" ? { x: px } : d === "right" ? { x: -px } : {};

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  distance?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p";
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport">;

/** Single, consistent scroll-reveal used everywhere (fade + small slide). */
export function Reveal({ children, direction = "up", delay = 0, distance = 28, className, as = "div", ...rest }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

const stagger = (gap: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren } },
});

const item = (d: Direction, px: number): Variants => ({
  hidden: { opacity: 0, ...offset(d, px) },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: EASE } },
});

/** Parent that staggers its <StaggerItem> children when scrolled into view. */
export function Stagger({
  children,
  gap = 0.09,
  delay = 0,
  className,
}: {
  children: ReactNode;
  gap?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 28,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  className?: string;
}) {
  return (
    <motion.div variants={item(direction, distance)} className={className}>
      {children}
    </motion.div>
  );
}

/** Section heading: title fades up, gradient underline draws itself. */
export function SectionHeading({
  title,
  highlight,
  subtitle,
  light = false,
}: {
  title: string;
  highlight: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <Reveal>
        <h2
          className={`mb-4 text-3xl font-bold sm:text-4xl md:text-5xl ${
            light ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h2>
      </Reveal>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mx-auto mb-5 h-1 w-24 origin-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
      />
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mx-auto max-w-2xl text-base sm:text-lg ${
              light ? "text-gray-400" : "text-slate-600 dark:text-gray-400"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
