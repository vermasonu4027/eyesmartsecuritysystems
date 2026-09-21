"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { mainNav, footerNav } from "@/data/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 0);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      onClose?.();
    }
  };

  return (
    <motion.div
      ref={navRef}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="container h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center gap-12">
          <motion.nav className="flex flex-col gap-2" variants={containerVariants}>
            {mainNav.map((link, idx) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  ref={idx === 0 ? firstLinkRef : null}
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
