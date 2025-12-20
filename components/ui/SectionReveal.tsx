import React from 'react';
import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "100%" | "fit-content";
}

const SectionReveal: React.FC<SectionRevealProps> = ({ children, delay = 0, width = "100%" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
