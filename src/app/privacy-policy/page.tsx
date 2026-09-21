import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildMetadata(
  "Privacy Policy",
  "Read our privacy policy to understand how Eye Smart Security Systems collects, uses, and protects your personal information."
);

export default function PrivacyPage() {
  return (
    <div className="container py-20 max-w-2xl">
      <h1>Privacy Policy</h1>
      <p>Last Updated: September 15, 2026</p>
      <p>Eye Smart Security Systems is committed to protecting your privacy.</p>
      <h2>Information We Collect</h2>
      <p>We collect information you provide directly to us.</p>
      <h2>How We Use Information</h2>
      <p>We use your information to respond to inquiries and improve our services.</p>
    </div>
  );
}
