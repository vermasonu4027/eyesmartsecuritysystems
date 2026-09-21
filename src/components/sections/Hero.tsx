"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { isValidIndianMobile, normalizeIndianMobile } from "@/lib/validation";
import { useHeroParallax } from "@/hooks/useHeroParallax";
import { HeroBackground } from "./HeroBackground";

const container = {
  hidden: {},
  visible: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const chips = [
  { icon: CalendarDays, label: `Since ${business.founded}` },
  { icon: ShieldCheck, label: "1000+ installations" },
  { icon: Clock, label: business.hours.emergency },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { bgScrollY, bgX, bgY, cardX, cardY, onPointerMove, onPointerLeave } =
    useHeroParallax(sectionRef);

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
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-slate-950 py-20 text-white md:py-28"
    >
      <HeroBackground scrollY={bgScrollY} x={bgX} y={bgY} />

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
          Delhi NCR&apos;s <span className="text-green-400">Trusted</span> Security Partner Since{" "}
          {business.founded}.
        </h1>

        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            Professional CCTV, biometric access control and smart security for homes, offices and
            industrial sites, from site survey to 24/7 support.
          </motion.p>

          <motion.div style={{ x: cardX, y: cardY }} className="mx-auto mb-6 max-w-lg">
            <motion.form
              variants={item}
              onSubmit={handleSubmit}
              noValidate
              className="glass-card rounded-2xl p-5 text-left sm:p-6"
            >
              <label htmlFor="phone-input" className="mb-2 block text-sm font-medium text-white">
                Your mobile number
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="phone-input"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setError("");
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "phone-error" : undefined}
                  className="flex-1 rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 disabled:opacity-60"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  size="lg"
                  loading={loading}
                  className="bg-primary-hover text-white transition-transform hover:scale-[1.02] hover:bg-green-800 focus-visible:ring-white/80"
                >
                  Call Me Back
                </Button>
              </div>
              {error && (
                <p id="phone-error" className="mt-3 text-sm text-red-300">
                  {error}
                </p>
              )}
            </motion.form>
          </motion.div>

          <motion.ul
            variants={item}
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            {chips.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-100"
              >
                <Icon className="h-4 w-4 text-green-400" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item}>
            <p className="mb-2 text-slate-300">Or call directly:</p>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 font-medium text-white underline-offset-4 transition hover:text-green-300 hover:underline"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-surface" />
    </section>
  );
}
