import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export function buildMetadata(
  title: string,
  description: string,
  path: string = "",
  options?: {
    type?: "website" | "article";
    image?: string;
    publishedTime?: string;
    modifiedTime?: string;
  }
): Metadata {
  const canonical = path ? `${SITE_URL}${path}` : undefined;

  return {
    title,
    description,
    ...(canonical && {
      alternates: {
        canonical,
      },
    }),
    openGraph: {
      title,
      description,
      type: options?.type || "website",
      ...(canonical && { url: canonical }),
      ...(options?.image && { images: [{ url: options.image }] }),
      ...(options?.type === "article" && {
        publishedTime: options.publishedTime,
        modifiedTime: options.modifiedTime,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
