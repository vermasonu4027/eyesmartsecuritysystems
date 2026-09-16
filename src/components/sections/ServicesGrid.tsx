"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { Camera, Lock, Video, AlertCircle, Headphones, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUpVariant, fadeInUpContainer } from "@/lib/motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Lock,
  Video,
  AlertCircle,
  Headphones,
  Zap,
  Shield,
};

export function ServicesGrid() {
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
          <h2 className="text-4xl font-bold mb-4">Our Security Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete solutions for every security need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <motion.div key={service.slug} variants={fadeInUpVariant}>
                <Link href={`/products#${service.slug}`} className="group">
                  <div className="bg-card border border-border rounded-lg p-6 h-full group-hover:border-primary/50 transition">
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
