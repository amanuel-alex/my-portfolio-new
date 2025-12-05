"use client";

import Section from '@/components/ui/Section';
import { projects } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { SiVercel, SiNetlify } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { scaleIn, staggerContainer } from '@/lib/animation';
import Image from 'next/image';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa6';

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="work"  className="py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4 text-primary relative inline-block">
          Featured Projects
          <motion.div 
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of my recent work and side projects
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
      
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-card to-background/50 border border-border/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 h-full">
              
              {/* Project Image/Video */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                    
                    {/* Live Preview Badge */}
                    {project.liveUrl && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full" />
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-sm font-medium hover:bg-primary/20 transition-all group/link"
                          >
                            <span>Live Preview</span>
                            <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 flex items-center justify-center">
                    <div className="text-5xl text-primary/30">
                      {project.icon || <FaCode />}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.category}
                    </p>
                  </div>
                  
                  {/* GitHub Stats */}
                  {project.githubStats && (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar className="w-4 h-4" />
                        <span>{project.githubStats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1 text-purple-500">
                        <FaCodeBranch className="w-4 h-4" />
                        <span>{project.githubStats.forks}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 bg-primary/5 text-primary text-xs font-mono rounded-full border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary rounded-lg transition-all group/btn"
                    >
                      <FaGithub className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all group/btn2"
                      >
                        <span className="text-sm font-medium">Live Demo</span>
                        <FaExternalLinkAlt className="w-3 h-3 group-hover/btn2:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                  
                  {/* Deployment Badge */}
                  {project.deployment && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {project.deployment === 'vercel' ? (
                        <SiVercel className="w-4 h-4" />
                      ) : project.deployment === 'netlify' ? (
                        <SiNetlify className="w-4 h-4" />
                      ) : null}
                      <span>Deployed on {project.deployment}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Floating Elements on Hover */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <>
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-accent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
        >
          <span>View All Projects</span>
          <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </a>
      </motion.div>
    </Section>
  );
};

export default Work;