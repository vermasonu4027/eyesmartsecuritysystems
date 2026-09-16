"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUpVariant } from "@/lib/motion";

export function AnimatedStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const installs = useCountUp(1000, isInView ? 2 : 0);
  const years = useCountUp(13, isInView ? 2 : 0);
  const cities = useCountUp(6, isInView ? 2 : 0);
  const satisfaction = useCountUp(98, isInView ? 2 : 0);

  const stats = [
    { ref: installs, suffix: "+", label: "Installations" },
    { ref: years, suffix: "+", label: "Years in Business" },
    { ref: cities, suffix: "+", label: "Cities Served" },
    { ref: satisfaction, suffix: "%", label: "Customer Satisfaction" },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent-soft"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUpVariant}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span ref={stat.ref}>0</span>
                {stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
