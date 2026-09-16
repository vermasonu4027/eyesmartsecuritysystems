"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { AnimatedHamburger } from "./AnimatedHamburger";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div className="hidden md:block bg-black border-b border-border">
        <div className="container py-2 text-sm text-center text-white">
          Serving all of Delhi NCR · Mon-Sat 9AM-8PM
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border md:z-40">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition">
              About
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition">
              Products
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${business.phone}`} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{business.phoneDisplay}</span>
            </a>
            <Link href="/contact">
              <Button size="sm">Get Free Quote</Button>
            </Link>
          </div>

          <div className="md:hidden relative">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 hover:bg-accent/10 active:bg-accent/20 rounded-lg transition-colors duration-200 relative z-50"
              aria-label="Toggle menu"
              aria-expanded={open}
              type="button"
            >
              <AnimatedHamburger isOpen={open} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        <MobileNav isOpen={open} onClose={() => setOpen(false)} />
      </AnimatePresence>
    </>
  );
}
