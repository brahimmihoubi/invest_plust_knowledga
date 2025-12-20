import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface IconButtonProps extends HTMLMotionProps<'button'> {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  variant = 'ghost', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative flex items-center justify-center rounded-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 overflow-hidden";
  
  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const variantStyles = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20",
    secondary: "bg-slate-100 text-slate-700",
    ghost: "text-slate-500 hover:text-slate-900",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white"
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Background Hover Glow */}
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0.5 },
          hover: { opacity: 1, scale: 1.5 }
        }}
        className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"
      />

      <motion.span
        variants={{
          initial: { scale: 1, y: 0 },
          hover: { 
            scale: 1.15, 
            y: -1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          },
          tap: { scale: 0.9 }
        }}
        className="flex items-center justify-center relative z-10"
      >
        {icon}
      </motion.span>
    </motion.button>
  );
};

export default IconButton;
