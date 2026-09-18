"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";

export function Testimonials() {
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
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by 1000+ satisfied customers across Delhi NCR
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUpVariant} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
