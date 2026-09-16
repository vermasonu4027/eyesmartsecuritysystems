import { QuoteForm } from "@/components/forms/QuoteForm";
import { business } from "@/data/business";
import { faqs } from "@/data/faqs";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us - Get a Free Quote | Eye Smart Security Systems",
  description: "Contact Eye Smart Security Systems for a free security quote. Call +91 6307972402 or fill out our contact form. We respond within 24 hours.",
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.displayName,
    description: "Professional CCTV surveillance, biometric access control, and comprehensive security solutions",
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: business.phone,
      hoursAvailable: business.hours.emergency,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get a Free Security Quote</h1>
            <p className="text-xl text-muted-foreground">
              Let our experts assess your security needs and recommend the perfect solution for your property.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us your details</h2>
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Call Us
              </h3>
              <p className="text-muted-foreground mb-3">For urgent queries, call us directly:</p>
              <a href={`tel:${business.phone}`} className="text-primary font-semibold text-lg hover:text-primary-hover">
                {business.phoneDisplay}
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Visit Us
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {business.address.street}
              </p>
              <p className="text-muted-foreground text-sm">
                {business.address.city}, {business.address.state} {business.address.postalCode}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Hours
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {business.hours.weekdays}
              </p>
              <p className="text-primary font-semibold text-sm">
                {business.hours.emergency}
              </p>
            </div>

            <div className="bg-accent-soft border border-accent-soft rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Quick response on WhatsApp
              </p>
              <a
                href={`https://wa.me/${business.whatsapp}?text=Hi, I need a security quote for my property`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL && (
        <div className="py-12 bg-surface">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}

      <div className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Emergency Support Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">1000+</p>
              <p className="text-muted-foreground">Installations & Counting</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">1-2 Days</p>
              <p className="text-muted-foreground">Fast Installation</p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-8">
            <h3 className="font-semibold text-lg mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq, idx) => (
                <details key={idx} className="cursor-pointer group">
                  <summary className="font-semibold text-primary flex items-center justify-between py-3 px-4 bg-background rounded-lg">
                    {faq.question}
                    <span className="text-lg group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3 px-4 pb-4 border-t border-border">{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              <a href="/#faqs" className="text-primary hover:underline">View all FAQs →</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
