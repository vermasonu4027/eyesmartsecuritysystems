"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";

interface MobileNavProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const containerVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial="closed"
      animate="open"
      variants={containerVariants}
      exit="closed"
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 md:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="container h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center gap-12">
          <motion.nav className="flex flex-col gap-2" variants={containerVariants}>
            {links.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition duration-300 block py-3"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div variants={itemVariants} className="border-t border-border pt-8 flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Need immediate help?</p>
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-3 text-xl font-semibold text-primary hover:text-primary-hover transition"
              >
                <Phone className="w-6 h-6" />
                {business.phoneDisplay}
              </a>
            </div>

            <Link href="/contact" onClick={onClose}>
              <Button size="lg" className="w-full text-base">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
