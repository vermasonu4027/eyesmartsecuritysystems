"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";

export function TrustStrip() {
  const logos = [
    { name: "Brand 1", initials: "B1" },
    { name: "Brand 2", initials: "B2" },
    { name: "Brand 3", initials: "B3" },
    { name: "Brand 4", initials: "B4" },
    { name: "Brand 5", initials: "B5" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUpContainer}
      className="py-16 bg-surface"
    >
      <div className="container">
        <motion.div className="text-center mb-12" variants={fadeInUpVariant}>
          <h2 className="text-3xl font-bold mb-3">Trusted by Leading Brands</h2>
          <p className="text-muted-foreground">We partner with industry-leading organizations</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUpVariant}
              className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-lg bg-card border border-border"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{logo.initials}</p>
                <p className="text-xs text-muted-foreground mt-1">Logo</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeInUpVariant} className="text-center text-sm text-muted-foreground mt-12">
          Placeholder logos — replace with real partner/client logos
        </motion.p>
      </div>
    </motion.section>
  );
}
