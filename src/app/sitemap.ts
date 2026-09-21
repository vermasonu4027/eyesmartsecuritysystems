import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { productCategories } from "@/data/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://eyesmartsecuritysystems.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), priority: 0.5 },
  ];

  const blogPosts = await getBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated ? new Date(post.updated) : new Date(post.date),
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = [];
  productCategories.forEach((category) => {
    category.products.forEach((product) => {
      productRoutes.push({
        url: `${baseUrl}/products/${category.slug}/${product.slug}`,
        lastModified: new Date(),
        priority: 0.6,
      });
    });
  });

  return [...staticRoutes, ...blogRoutes, ...productRoutes];
}
