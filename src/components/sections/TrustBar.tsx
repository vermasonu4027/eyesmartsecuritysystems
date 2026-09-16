"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const installations = useCountUp(1000, isInView ? 2 : 0);
  const years = useCountUp(13, isInView ? 2 : 0);
  const coverage = useCountUp(7, isInView ? 2 : 0);

  const stats = [
    { ref: installations, suffix: "+", label: "Installations" },
    { ref: years, suffix: "+", label: "Years Experience" },
    { ref: coverage, suffix: "+", label: "Delhi NCR and Agra" },
    { text: "24/7", label: "Emergency Support" },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="py-12 bg-surface border-y border-border"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.ref ? (
                  <>
                    <span ref={stat.ref}>0</span>
                    {stat.suffix}
                  </>
                ) : (
                  stat.text
                )}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
