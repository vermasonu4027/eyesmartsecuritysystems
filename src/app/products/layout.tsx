import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Security Products",
  "Browse our comprehensive range of CCTV systems, access control, biometric solutions, alarm systems, and more for home and business security."
);

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
