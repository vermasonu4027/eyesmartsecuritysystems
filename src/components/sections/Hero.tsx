"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { isValidIndianMobile, normalizeIndianMobile } from "@/lib/validation";
import { Phone } from "lucide-react";

export function Hero() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!phone.trim()) {
        setError("Please enter your phone number");
        return;
      }

      if (!isValidIndianMobile(phone)) {
        setError("Please enter a valid 10-digit Indian mobile number");
        return;
      }

      const normalized = normalizeIndianMobile(phone);
      const message = `Hi, please call me back at +91${normalized}`;
      const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waLink, "_blank");
      setPhone("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Advanced Security Systems for Delhi NCR
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Professional CCTV, biometric access control, and comprehensive security solutions trusted by 1000+ homes and businesses since 2013.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-col gap-2 w-full max-w-md justify-center">
            <label htmlFor="phone-input" className="text-sm font-medium text-foreground">
              Phone Number
            </label>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                id="phone-input"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError("");
                }}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                disabled={loading}
              />
              <Button type="submit" size="lg" loading={loading} className="bg-primary hover:bg-primary-hover text-white">
                Get Free Quote
              </Button>
            </div>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </form>

        <div className="text-center">
          <p className="text-muted-foreground mb-2">Or call directly:</p>
          <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition">
            <Phone className="w-4 h-4" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
