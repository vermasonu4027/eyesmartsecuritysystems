"use client";

import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div key={step.number} variants={fadeInUpVariant} className="relative">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
