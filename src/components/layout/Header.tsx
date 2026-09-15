"use client";

import { Link } from "@/i18n/routing";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block bg-primary/5 border-b border-border">
        <div className="container py-2 text-sm text-center text-muted-foreground">
          Serving all of Delhi NCR · Mon–Sat 9AM–8PM · 24/7 Emergency
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border">
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
            <LocaleSwitcher />
            <ThemeToggle />
            <Link href="/contact">
              <Button size="sm">Get Free Quote</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <MobileNav onClose={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
