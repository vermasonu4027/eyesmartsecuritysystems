import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Delhi NCR's Trusted Security Partner Since 2013</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            EYE SMART SECURITY SYSTEMS is a top-rated security system supplier and installer serving Noida, Greater Noida, and Ghaziabad since 2013. We bring professional-grade security solutions within reach of every home and business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Founded in 2013, Eye Smart Security Systems began with a simple mission: to make professional-grade security affordable and accessible to every property owner in Delhi NCR.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What started as a small team of passionate security experts has grown into Delhi NCR's most trusted security partner. Over the years, we've installed systems in over 1,000 homes and businesses, earning the trust and confidence of our customers through reliability, transparency, and 24/7 support.
          </p>
        </div>
      </section>

      <AnimatedStats />

      <TrustStrip />

      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">We believe in honest pricing and transparent dealings with every client.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">Your security is our responsibility — 24/7 support, always there when you need us.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">We stay current with the latest security technology to keep you protected.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
