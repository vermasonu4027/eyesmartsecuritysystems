"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";
import { DragTimeline } from "./DragTimeline";

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Site Survey & Consultation",
      description: "Our experts visit your property to assess security needs and recommend optimal solutions",
    },
    {
      number: "2",
      title: "Customized Quote",
      description: "We provide detailed pricing and system design based on your specific requirements",
    },
    {
      number: "3",
      title: "Professional Installation",
      description: "Expert technicians install and configure your system with minimal disruption",
    },
    {
      number: "4",
      title: "Training & Support",
      description: "We provide training and 24/7 emergency support for peace of mind",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpContainer}
      className="py-20 bg-surface"
    >
      <div className="container">
        <motion.div className="text-center mb-12" variants={fadeInUpVariant}>
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step process to secure your property
          </p>
        </motion.div>

        <motion.div variants={fadeInUpVariant}>
          <DragTimeline steps={steps} />
        </motion.div>
      </div>
    </motion.section>
  );
}
