import { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export const metadata: Metadata = buildMetadata(
  "Frequently Asked Questions",
  "Browse all FAQs about our CCTV camera installation, biometric systems, security solutions, and support services across Delhi NCR."
);

export default function FAQsPage() {
  return (
    <>
      <section className="relative py-30 md:py-42 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bgCover/faqs_bg.jpg"
            alt="FAQs hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 max-w-3xl text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">
            Everything you need to know about our security systems, installation, and support
          </p>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
