"use client";

import Section from '@/components/ui/Section';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { sendEmail } from '@/lib/emailService';
import { toast } from 'sonner';
import {socials} from "../../data/socials"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'amanuel2123alex@gmail.com',
      href: 'mailto:amanuel2123alex@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+251 910639875',
      href: 'tel:+251 910639875',
      color: 'text-green-400'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Dilla,Ethiopia',
      href: '#',
      color: 'text-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <Section id="contact" >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
          <span className="w-12 h-px bg-primary" />
          04. What's Next?
          <span className="w-12 h-px bg-primary" />
        </div>
        
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Let's Work <span className="text-primary">Together</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to discuss potential opportunities?
          I'd love to hear from you. Let's create something amazing.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">Send me a message</h3>
          <p className="text-muted-foreground mb-8">I'll get back to you within 24 hours</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <MagneticWrapper>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </MagneticWrapper>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Contact Cards */}
          <div className="grid gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${item.color} group-hover:scale-110 transition-transform`}>
                    <div className="text-xl">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                    <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          
            <h4 className="text-lg font-medium text-foreground mb-4">Connect with me</h4>
            <div className="flex gap-4">
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
      className={`p-4 rounded-xl bg-gradient-to-br from-card/50 to-background/30 border border-border/50 ${social.color ?? ""} hover:border-primary/50 transition-all duration-300`}
      aria-label={social.name}
    >
      <div className="text-2xl">
        <social.icon /> 
      </div>
    </motion.a>
  ))}
</div>

          

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <MagneticWrapper strength={30}>
              <a
                href="mailto:amanuel2123alex@gmail.com"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-xl text-primary transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 font-medium text-lg">
                  Let's Start a Conversation
                </span>
                <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </a>
            </MagneticWrapper>
          </motion.div>
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
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full"
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
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-accent/30 rounded-full"
        />
      </div>
    </Section>
  );
};

export default Contact;