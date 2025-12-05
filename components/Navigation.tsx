// components/ScrollToTop.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaArrowDown, FaHome } from 'react-icons/fa';

const ScrollButtons = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show top button when scrolled down 300px
      setShowTop(window.scrollY > 300);
      
      // Check if at bottom
      const isBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsAtBottom(isBottom);
      
      // Show bottom button when not at bottom and scrolled past some content
      setShowBottom(!isBottom && window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && !isAtBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 p-3 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Bottom */}
      <AnimatePresence>
        {showBottom && !isAtBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToBottom}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-br from-card to-background/80 backdrop-blur-sm border border-white/10 rounded-full shadow-xl hover:shadow-2xl transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Home Button (when at bottom) */}
      <AnimatePresence>
        {isAtBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={() => scrollToSection('home')}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHome className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollButtons;