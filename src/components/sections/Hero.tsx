import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Advanced Security Systems for Delhi NCR
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Professional CCTV, biometric access control, and comprehensive security solutions trusted by 1000+ homes and businesses since 2013.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact">
            <Button size="lg">Get Free Quote</Button>
          </Link>
          <a href={`tel:${business.phone}`}>
            <Button size="lg" variant="outline">
              Call {business.phoneDisplay}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
