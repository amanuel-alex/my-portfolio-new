"use client";

import Section from '@/components/ui/Section';
import { experiences } from '@/data/experience';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaBuilding } from 'react-icons/fa';
import { useState } from 'react';

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <Section id="experience" className="mt-55">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 mt-80">
          <span className="w-12 h-px bg-primary" />
          02. Experience
          <span className="w-12 h-px bg-primary" />
        </div>
        
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Professional <span className="text-primary">Journey</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A timeline of my professional growth and contributions
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Timeline Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex gap-2">
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveExp(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                  activeExp === index
                    ? 'bg-primary/10 border-primary text-primary shadow-lg'
                    : 'bg-card/50 border-border text-muted-foreground hover:text-foreground hover:bg-card'
                } border`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FaBuilding className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{exp.company}</div>
                  <div className="text-xs opacity-70">{exp.duration.split('•')[0].trim()}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
                
                {/* Timeline Date */}
                <div className={`hidden md:block flex-1 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <div className="sticky top-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                      <FaCalendarAlt className="w-3 h-3 text-primary" />
                      <span className="text-sm font-medium text-primary">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all ${
                      activeExp === index
                        ? 'border-primary/30 bg-primary/5'
                        : 'border-border/50 bg-card/50'
                    }`}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative p-6 md:p-8">
                      {/* Card Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          {/* Company Logo */}
                          
                          
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {exp.position}
                              </h3>
                              {exp.contract && (
                                <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                                  {exp.contract}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center gap-1.5 text-primary">
                                <FaBuilding className="w-3 h-3" />
                                <span className="text-lg font-medium">{exp.company}</span>
                              </div>
                              {exp.location && (
                                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                  <FaMapMarkerAlt className="w-3 h-3" />
                                  <span>{exp.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile Date */}
                        <div className="md:hidden ">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                            <FaCalendarAlt className="w-3 h-3 text-primary" />
                            <span className="text-sm font-medium text-primary">{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3 mb-6">
                        {exp.description.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-primary/5 text-primary text-xs font-mono rounded-lg border border-primary/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-foreground mb-3">Key Achievements</h4>
                          <div className="grid gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 p-3 bg-success/5 rounded-lg border border-success/10">
                                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xs text-success">✓</span>
                                </div>
                                <p className="text-sm text-success-foreground">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Links */}
                      {exp.website && (
                        <div className="pt-4 border-t border-border/50">
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            <span>View Company Website</span>
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'Companies', value: experiences.length.toString() },
            { label: 'Projects', value: '50+' },
            { label: 'Technologies', value: '25+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-10 w-3 h-3 rounded-full bg-primary/20"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-10 w-4 h-4 rounded-full bg-accent/20"
        />
      </div>
    </Section>
  );
};

export default Experience;