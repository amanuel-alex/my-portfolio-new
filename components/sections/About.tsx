"use client";

import Image from 'next/image';
import Section from '@/components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaVideo, FaChartLine, FaMobile, FaTools, FaGraduationCap, FaBriefcase, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = {
    development: [
      { name: 'React/Next.js', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Flutter/Dart', level: 88, icon: '📱' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'SQL/NoSQL', level: 85, icon: '🗄️' },
    ],
    creative: [
      { name: 'Video Editing', level: 92, icon: '🎬' },
      { name: 'Adobe Suite', level: 85, icon: '🎨' },
      { name: 'Motion Graphics', level: 80, icon: '✨' },
      { name: 'Color Grading', level: 85, icon: '🎨' },
      { name: 'Sound Design', level: 75, icon: '🎵' },
    ],
    analytics: [
      { name: 'Power BI', level: 90, icon: '📊' },
      { name: 'Excel/Sheets', level: 95, icon: '📈' },
      { name: 'Data Analysis', level: 88, icon: '🔍' },
      { name: 'Data Visualization', level: 85, icon: '📉' },
      { name: 'SharePoint', level: 80, icon: '🏢' },
    ]
  };

  const timeline = [
    {
      year: '2024',
      title: 'Lead Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading cross-functional teams in building scalable web applications.'
    },
    {
      year: '2023',
      title: 'Mobile App Developer',
      company: 'Creative Solutions',
      description: 'Developed and launched 5+ Flutter applications with 50k+ downloads.'
    },
    {
      year: '2022',
      title: 'Video Editor & Analyst',
      company: 'Media Studio',
      description: 'Produced 100+ video projects while managing data analytics workflows.'
    },
    {
      year: '2021',
      title: 'Junior Developer',
      company: 'Startup Hub',
      description: 'Built first commercial applications and learned modern tech stacks.'
    }
  ];

  const passions = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable solutions'
    },
    {
      icon: <FaVideo />,
      title: 'Storytelling',
      description: 'Creating compelling narratives through video and design'
    },
    {
      icon: <FaChartLine />,
      title: 'Data Insights',
      description: 'Transforming raw data into actionable intelligence'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile First',
      description: 'Building responsive experiences for all devices'
    }
  ];

  return (
    <Section id="about" className="mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
          <span className="w-12 h-px bg-primary" />
          01. About Me
          <span className="w-12 h-px bg-primary" />
        </div>
        
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Crafting <span className="text-primary">Digital Experiences</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer • Video Editor • Data Analyst • Flutter Expert
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Profile & Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-card to-background/50 border border-border/50 rounded-2xl p-2 overflow-hidden">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/aman.jpg"
                  alt="Amanuel Alemayehu"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30" />
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full">
                    <FaCode className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">Developer</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full">
                    <FaVideo className="w-3 h-3 text-accent" />
                    <span className="text-xs font-medium text-accent">Editor</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Bar */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                <div className="text-center px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div className="text-center px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-xs text-muted-foreground">Passion</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Amanuel Alemayehu</span> 👋
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-medium">multi-disciplinary creative technologist</span> with a passion for building digital experiences that combine technical excellence with artistic vision.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began with editing video content, which evolved into data analysis, and eventually led me to <span className="text-primary font-medium">full-stack development</span>. This unique combination allows me to approach problems from multiple perspectives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of <span className="text-primary font-medium">interdisciplinary collaboration</span> - where code meets creativity, data meets design, and technology meets storytelling.
            </p>

            {/* Passions Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-background/30 border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      {passion.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{passion.title}</div>
                      <div className="text-sm text-muted-foreground">{passion.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {['skills', 'timeline', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card'
                }`}
              >
                {tab === 'skills' && 'Skills & Expertise'}
                {tab === 'timeline' && 'Career Timeline'}
                {tab === 'education' && 'Education'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                    <div
                      key={category}
                      className="bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {category === 'development' && <FaCode />}
                          {category === 'creative' && <FaVideo />}
                          {category === 'analytics' && <FaChartLine />}
                        </div>
                        <h4 className="text-lg font-bold text-foreground capitalize">
                          {category}
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {skillList.map((skill, index) => (
                          <div key={skill.name}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-foreground">
                                {skill.icon} {skill.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full h-2 bg-background/20 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2" />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`relative flex items-center gap-8 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
                      
                      {/* Timeline Content */}
                      <div className={`flex-1 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}>
                        <div className="bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                          <div className="text-sm font-mono text-primary mb-2">
                            {item.year}
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-2">
                            {item.title}
                          </h4>
                          <div className="text-sm text-muted-foreground mb-2">
                            {item.company}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Timeline Year */}
                      <div className={`hidden md:block flex-1 ${
                        index % 2 === 0 ? 'text-left' : 'text-right'
                      }`}>
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  {
                    degree: 'software Engineering',
                    school: 'Haramaya University ',
                    year: '2022-2026',
                    description: 'Specialized in software engineering and data structures'
                  },
                  {
                    degree: 'Digital Media Certification',
                    school: 'Creative Arts Institute',
                    year: '2021',
                    description: 'Advanced video editing and motion graphics training'
                  },
                  {
                    degree: 'Data Analytics Bootcamp',
                    school: 'Tech Academy',
                    year: '2022',
                    description: 'Intensive training in data visualization and BI tools'
                  },
                  {
                    degree: 'Flutter Development',
                    school: 'Google Developer Program',
                    year: '2023',
                    description: 'Certified Flutter developer with mobile expertise'
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <FaGraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <div className="text-sm text-muted-foreground mb-2">
                          {edu.school} • {edu.year}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="mb-50 relative bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 ">
            <div className="text-5xl text-primary/20 mb-4">"</div>
            <p className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              I don't just build products; I craft experiences that tell stories, 
              solve problems, and create value at the intersection of technology and creativity.
            </p>
            <div className="flex items-center justify-center gap-2">
              <FaHeart className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Passionate about making a difference through technology
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute top-1/4 left-20 w-3 h-3 rounded-full bg-primary/20"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-20 w-4 h-4 rounded-full bg-accent/20"
        />
      </div>
    </Section>
  );
};

export default About;