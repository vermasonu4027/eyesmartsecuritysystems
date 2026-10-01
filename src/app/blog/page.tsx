import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = buildMetadata(
  "Blog",
  "Read insights and guides from our security experts about CCTV systems, security best practices, and industry trends.",
  "/blog"
);

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts.length) {
    return (
      <>
        <PageHero
          title="Insights & Guides"
          description="Learn about the latest security trends and best practices"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
          primaryCta={{
            label: "Get Free Quote",
            href: "/contact",
          }}
        />
        <div className="container py-20">
          <p className="text-muted-foreground">No posts available yet.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Insights & Guides from Our Security Experts"
        description="Learn about the latest security trends and best practices"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        primaryCta={{
          label: "Get Free Quote",
          href: "/contact",
        }}
      />

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden group-hover:border-primary/50 transition">
                {post.coverImage ? (
                  <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary/40">No image</span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <time className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-primary font-medium group-hover:translate-x-1 transition">
                    Read More →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
