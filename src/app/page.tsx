import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  alternates: { canonical: "https://rehmanfarouq.site" },
};

// Server component: each section owns its own (consistent) scroll animations,
// so the page itself ships no extra client JS and no duplicate wrapper animations.
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
}
