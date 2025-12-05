"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  
  strength?: number;
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const strength = 30; // The strength of the magnetic pull

  const backgroundX = useSpring(useTransform(mouseX, (x) => x / strength));
  const backgroundY = useSpring(useTransform(mouseY, (y) => y / strength));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        x: backgroundX,
        y: backgroundY,
      }}
      
    >
      {children}
    </motion.div>
  );
};



interface MagneticWrapperProps {
  children: ReactNode;
  strength?: number;
}



 

  

  

export default MagneticWrapper;