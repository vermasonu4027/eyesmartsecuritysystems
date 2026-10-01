import { ReactNode } from "react";
import { SITE_URL } from "@/lib/constants";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchema {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

/**
 * Generate BreadcrumbList schema
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Article schema for blog posts
 */
export function articleSchema(data: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    image: data.image ? `${SITE_URL}${data.image}` : undefined,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: data.author
      ? {
          "@type": "Person",
          name: data.author,
        }
      : undefined,
    url: data.url,
    publisher: {
      "@type": "Organization",
      name: "Eye Smart Security Systems",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

/**
 * Generate FAQPage schema
 */
export function faqSchema(faqs: FAQItem[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a.replace(/<[^>]*>/g, ""), // Strip HTML for plain text
      },
    })),
  };
}

/**
 * Helper to create JSON-LD script element
 */
export function createJsonLdScript(data: Record<string, any>) {
  return {
    __html: JSON.stringify(data),
  };
}
