"use client";

import Link from "next/link";
import { business } from "@/data/business";
import { footerNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Eye Smart Security</h3>
            <p className="text-sm text-muted-foreground">Your trusted security partner since 2013</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerNav.quickLinks.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-muted-foreground hover:text-primary transition">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products#cctv-surveillance" className="text-muted-foreground hover:text-primary transition">CCTV Systems</Link></li>
              <li><Link href="/products#biometric-access" className="text-muted-foreground hover:text-primary transition">Access Control</Link></li>
              <li><Link href="/products#alarm-intruder" className="text-muted-foreground hover:text-primary transition">Alarm Systems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><a href={`tel:${business.phone}`} className="text-primary hover:text-primary-hover transition">{business.phoneDisplay}</a></p>
              <p><a href={`mailto:${business.email}`} className="text-primary hover:text-primary-hover transition">{business.email}</a></p>
              <p>{business.address.street}, {business.address.city}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Eye Smart Security Systems. All rights reserved.</p>
            <div className="flex gap-6">
              {footerNav.legal.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-primary transition">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
