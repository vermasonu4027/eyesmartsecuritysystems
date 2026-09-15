"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onClose?: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col gap-6 py-6">
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose} className="text-lg font-medium hover:text-primary transition">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="border-t pt-4 flex flex-col gap-3">
        <a href="tel:+916307972402" className="text-base font-medium text-primary">
          +91 63079 72402
        </a>
        <Link href="/contact" onClick={onClose}>
          <Button className="w-full">Get Free Quote</Button>
        </Link>
      </div>
    </div>
  );
}
