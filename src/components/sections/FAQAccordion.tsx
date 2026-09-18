"use client";

import { faqs } from "@/data/faqs";
import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";

export function FAQAccordion() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpContainer}
      className="py-20 bg-surface"
    >
      <div className="container max-w-3xl">
        <motion.div className="text-center mb-12" variants={fadeInUpVariant}>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our security systems
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.details key={idx} variants={fadeInUpVariant} className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold flex items-center justify-between">
                {faq.question}
                <span className="text-primary group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
