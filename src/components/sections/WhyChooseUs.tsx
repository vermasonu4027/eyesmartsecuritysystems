"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "13+ Years of Experience",
      description: "Trusted security partner since 2013 with 1000+ successful installations",
    },
    {
      title: "Expert Technicians",
      description: "Certified professionals who ensure flawless installation and setup",
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock technical support whenever you need us in NCR",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges. Clear quotes with detailed service breakdowns",
    },
    {
      title: "Latest Technology",
      description: "We install HD/4K cameras, AI biometrics, and cloud-enabled systems",
    },
    {
      title: "Fast Installation",
      description: "Most systems installed within 1-2 days with minimal disruption 98% uptime",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpContainer}
      className="py-20"
    >
      <div className="container">
        <motion.div className="text-center mb-12" variants={fadeInUpVariant}>
          <h2 className="text-4xl font-bold mb-4">Why Choose Eye Smart?</h2>
          <p className="text-lg text-muted-foreground">
            What makes us Delhi NCR's most trusted security provider
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUpVariant}
              className="group flex gap-4 p-6 rounded-lg border border-border bg-surface hover:bg-accent-soft/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-accent flex-shrink-0 mt-1 transition-colors" />
              <div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
