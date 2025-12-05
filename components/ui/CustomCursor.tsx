"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  isHidden: boolean;
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    isHidden: false,
  });

  useEffect(() => {
    // Update cursor position
    const updateMousePosition = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isHidden: false,
      }));
    };

    // Handle mouse leave/enter window
    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, isHidden: true }));
    };

    const handleMouseEnter = () => {
      setCursor(prev => ({ ...prev, isHidden: false }));
    };

    // Click handlers
    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    // Detect hoverable elements - FIXED TYPE ERROR
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if element is interactive
      const isInteractiveElement = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.getAttribute('role') === 'button' ||
        target.closest('button, a, [data-cursor-hover]') !== null ||
        getComputedStyle(target).cursor === 'pointer';
      
      setCursor(prev => ({ 
        ...prev, 
        isHovering: isInteractiveElement 
      }));
    };

    const handleMouseOut = () => {
      setCursor(prev => ({ ...prev, isHovering: false }));
    };

    // Event listeners
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';
    // Only disable user-select if you're sure you want this behavior
    // document.body.style.userSelect = 'none';

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      document.body.style.cursor = 'auto';
      // document.body.style.userSelect = 'auto';
    };
  }, []);

  const variants = {
    default: {
      x: cursor.x - 16,
      y: cursor.y - 16,
      scale: 1,
      opacity: cursor.isHidden ? 0 : 1,
      backgroundColor: "green",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      scale: 1.5,
      opacity: cursor.isHidden ? 0 : 1,
      backgroundColor: "var(--accent)",
      mixBlendMode: "difference" as const,
    },
    click: {
      x: cursor.x - 16,
      y: cursor.y - 16,
      scale: 0.8,
      opacity: cursor.isHidden ? 0 : 1,
      backgroundColor: "var(--destructive)",
      mixBlendMode: "difference" as const,
    }
  };

  const getCursorState = () => {
    if (cursor.isClicking) return "click";
    if (cursor.isHovering) return "hover";
    return "default";
  };

  // Performance optimization - only render if needed
  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] backdrop-filter backdrop-invert"
        variants={variants}
        animate={getCursorState()}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
          opacity: { type: "tween", duration: 0.2 }
        }}
      />
      
      {/* Optional trailing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursor.x - 4,
          y: cursor.y - 4,
          opacity: cursor.isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 40,
          mass: 0.3,
        }}
      />
      
      {/* Optional ring effect on click */}
      {cursor.isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border-2 border-destructive"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            x: cursor.x - 16,
            y: cursor.y - 16,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;