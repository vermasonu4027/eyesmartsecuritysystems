import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eyesmartsecuritysystems.com";
  const locales = ["en", "hi"];
  const routes = ["/", "/about", "/products", "/blog", "/contact", "/privacy-policy", "/terms-of-service"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        priority: route === "/" ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
