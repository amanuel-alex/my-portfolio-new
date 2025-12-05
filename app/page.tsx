// app/page.tsx - Fixed version
"use client";

import Header from '@/components/ui/Header';
import HomePages from '@/components/sections/Home';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Work from '@/components/sections/Work';
import Contact from '@/components/sections/Contact';
import TechStack3D from '@/components/sections/TechStack3D';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animation';

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="main-content"
        className="relative bg-background text-foreground font-sans"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Header />
        <HomePages />
        <About />
        
        {/* A visually impressive break to showcase your tech stack */}
        <section id="tech" className="relative h-screen w-full flex items-center justify-center">
          <TechStack3D />
        </section>

        <Experience />
        <Work />
        <Contact />
      </motion.main>
    </AnimatePresence>
  );
}