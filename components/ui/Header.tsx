"use client";

import { useState, useEffect, useCallback } from 'react';
import { socials } from '@/data/socials';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Home','About', 'Experience', 'Work', 'Contact'];

  // Social icon mapping
  const socialIcons: { [key: string]:React.JSX.Element } = {
    github: <FaGithub size={20} />,
    linkedin: <FaLinkedin size={20} />,
    twitter: <FaTwitter size={20} />,
    email: <FaEnvelope size={20} />,
    devpost: <SiDevpost size={20} />
  };

  // Handle scroll for active section and header background
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow/background when scrolled
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = navItems.map(item => item.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Handle escape key to close mobile menu
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Handle click outside to close mobile menu
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle smooth scroll with offset for fixed header
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0 }
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b shadow-lg' 
          : 'bg-background/90 backdrop-blur-sm border-b'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="#home" 
            className="font-mono text-lg font-bold text-primary hover:text-primary/80 transition-colors"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Amanuel.script
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => {
            const sectionId = item.toLowerCase();
            return (
              <motion.div
                key={item}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${sectionId}`}
                  className={`font-mono text-sm capitalize transition-all duration-200 relative px-2 py-1 ${
                    activeSection === sectionId 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={(e) => handleNavClick(e, sectionId)}
                >
                  {item}
                  {activeSection === sectionId && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            );
          })}
        </nav>

        {/* Right Side: Theme Toggle + Socials */}
        <div className="flex items-center space-x-4">
        
          
          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4 border-l pl-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ y: -5 }}
                className={`p-1 rounded-xl bg-gradient-to-br from-card/50 to-background/30 border border-border/50 ${social.color ?? ""} hover:border-primary/50 transition-all duration-300`}
                aria-label={social.name}
              >
                <div className="text-lg">
                  <social.icon /> 
                </div>
              </motion.a>
            ))}
          </div>

           

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground menu-button p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mobile-menu bg-card border-t overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6">
              <nav className="flex flex-col space-y-4 mb-6">
                {navItems.map((item, index) => {
                  const sectionId = item.toLowerCase();
                  return (
                    <motion.a
                      key={item}
                      href={`#${sectionId}`}
                      className={`font-mono text-lg capitalize py-2 px-4 rounded-lg transition-colors ${
                        activeSection === sectionId
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                      onClick={(e) => handleNavClick(e, sectionId)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-muted transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {socialIcons[social.name.toLowerCase()] || <FaGithub size={24} />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;