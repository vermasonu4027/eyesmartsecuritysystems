import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, faqSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  return buildMetadata(post.title, post.excerpt, `/blog/${post.slug}`, {
    type: "article",
    image: post.coverImage,
    publishedTime: post.date,
    modifiedTime: post.updated || post.date,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <PageHero
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        align="left"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema({
            title: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.date,
            dateModified: post.updated,
            author: post.author,
            url: postUrl,
          })),
        }}
      />

      {post.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(post.faqs, postUrl)),
          }}
        />
      )}

      <article className="container py-20">
        <div className="max-w-3xl mx-auto">
          {post.coverImage ? (
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-full aspect-video mb-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-primary/40 text-lg">Blog post image</span>
            </div>
          )}

          <header className="mb-8">
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-4">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.updated && (
                <span>Updated {new Date(post.updated).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              )}
              {post.readingTime && (
                <span>{post.readingTime} min read</span>
              )}
              {post.author && (
                <span>by {post.author}</span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </header>

          <div
            className="max-w-none prose prose-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <details key={index} className="border border-border rounded-lg p-4">
                    <summary className="font-semibold cursor-pointer hover:text-primary">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Have questions about this topic?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our security experts are ready to help you find the perfect solution.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-hover transition"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+916307972402"
                  className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary/5 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
