import { useTranslations } from "next-intl";

export default function HomePage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advanced CCTV & Security Systems for Delhi NCR
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Trusted since 2013 for HD/IP camera installation, biometric access control, alarms and complete security solutions — for homes, offices and industries.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary-hover transition">
            Get a Free Quote
          </button>
          <a href="tel:+916307972402" className="border border-border px-6 py-3 rounded font-medium hover:bg-surface transition">
            Call +91 6307972402
          </a>
        </div>
      </div>
    </div>
  );
}
