import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
      <div className="container text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
        <p className="text-lg mb-8 opacity-90">
          Get a free security assessment from our experts. No obligation, no pressure.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Get Free Quote
            </Button>
          </Link>
          <a href="tel:+916307972402">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Call Now: +91 63079 72402
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
