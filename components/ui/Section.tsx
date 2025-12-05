"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { slideUp } from '@/lib/animation';
import { cn } from '@/lib/utils'; // Optional: for better className merging

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '',
  containerClassName = ''
}) => {
  return (
    <motion.section
      id={id}
      className={cn(
        "py-20 md:py-24",
        className
      )}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={cn(
        "max-w-6xl mx-auto px-6",
        containerClassName
      )}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;