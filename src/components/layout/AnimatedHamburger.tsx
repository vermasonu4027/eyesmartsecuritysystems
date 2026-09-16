"use client";

import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
  isOpen: boolean;
}

export function AnimatedHamburger({ isOpen }: AnimatedHamburgerProps) {
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 9 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -9 },
  };

  return (
    <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
      <motion.div
        variants={topLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-foreground"
      />
      <motion.div
        variants={middleLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-foreground"
      />
      <motion.div
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-foreground"
      />
    </div>
  );
}
