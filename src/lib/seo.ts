import { Metadata } from "next";

export function buildMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
