import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildMetadata(
  "Privacy Policy",
  "Read our privacy policy to understand how Eye Smart Security Systems collects, uses, and protects your personal information.",
  "/privacy-policy"
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <div className="container py-20 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy Details</h2>
        <p className="text-sm text-muted-foreground mb-6">Last Updated: September 15, 2026</p>
        <p className="mb-6">Eye Smart Security Systems is committed to protecting your privacy.</p>
        <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
        <p className="mb-6">We collect information you provide directly to us.</p>
        <h3 className="text-xl font-semibold mb-3">How We Use Information</h3>
        <p>We use your information to respond to inquiries and improve our services.</p>
      </div>
    </>
  );
}
