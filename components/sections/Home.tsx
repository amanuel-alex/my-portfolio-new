"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { socials } from '@/data/socials';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaServer, FaMobile, FaCloud } from 'react-icons/fa';
import { slideInFromLeft, fadeIn } from '@/lib/animation';
import Contact from './Contact';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I build things for the web and beyond.";
  
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const ySubtext = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    let mounted = true;
    let index = 0;
    const interval = setInterval(() => {
      if (!mounted) return;
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <FaGithub />;
      case 'linkedin':
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="font-mono text-5xl md:text-7xl font-bold text-foreground mb-4"
          style={{ y: yText }}
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          Hi, my name is
        </motion.h1>
        
        <motion.h2
          className="font-mono text-6xl md:text-8xl font-bold text-primary mb-6"
          style={{ y: yText }}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Amanuel Alemayehu
        </motion.h2>
        
        <motion.h3
          className="font-mono text-3xl md:text-4xl text-muted-foreground mb-6 h-10"
          style={{ y: ySubtext }}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {text}
          <span className="animate-pulse text-primary">|</span>
        </motion.h3>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          style={{ y: ySubtext }}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          I'm a <span className="text-primary font-semibold">full-stack developer</span> with expertise in web, mobile, and cloud technologies. 
          I specialize in building exceptional digital experiences that solve real-world problems.
        </motion.p>

        {/* Skills/Expertise Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: <FaCode />, label: 'Web Development', color: 'bg-blue-500/10 text-blue-400' },
            { icon: <FaMobile />, label: 'Mobile Apps', color: 'bg-purple-500/10 text-purple-400' },
            { icon: <FaServer />, label: 'Backend Systems', color: 'bg-green-500/10 text-green-400' },
            { icon: <FaCloud />, label: 'Cloud & DevOps', color: 'bg-orange-500/10 text-orange-400' },
          ].map((skill, index) => (
            <motion.div
              key={skill.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${skill.color} border border-border/50 backdrop-blur-sm`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              {skill.icon}
              <span className="font-medium">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
         
        </motion.div>

        {/* Call to Action */}
        
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-10 w-6 h-6 bg-accent/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;