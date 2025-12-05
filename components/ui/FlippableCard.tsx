"use client";

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface FlippableCardProps {
  project: Project;
}

export default function FlippableCard({ project }: FlippableCardProps) {
  return (
    <div className="perspective-1000 h-64">
      <motion.div
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        whileHover={{ rotateY: 180 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-card p-6 rounded-lg border border-transparent hover:border-primary transition-all duration-300">
          <h3 className="font-mono text-xl font-semibold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <div className="absolute bottom-6 left-6">
            <ul className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <li key={tech} className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-primary p-6 rounded-lg text-background"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="font-mono text-xl font-semibold mb-4">Tech & Links</h3>
          <ul className="space-y-2 mb-6">
            {project.tech.map((tech) => (
              <li key={tech} className="font-mono text-sm">- {tech}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaGithub size={24} />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaExternalLinkAlt size={24} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}