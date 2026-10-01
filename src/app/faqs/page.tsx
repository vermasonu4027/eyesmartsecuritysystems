import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export const metadata: Metadata = buildMetadata(
  "Frequently Asked Questions",
  "Browse all FAQs about our CCTV camera installation, biometric systems, security solutions, and support services across Delhi NCR.",
  "/faqs"
);

export default function FAQsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Everything you need to know about our security systems, installation, and support"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
        image={{
          src: "/images/bgCover/faqs_bg.jpg",
          alt: "FAQs hero background",
        }}
        primaryCta={{
          label: "Get Free Quote",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Call Now",
          href: "tel:+916307972402",
        }}
      />

      <FAQAccordion />
    </>
  );
}
