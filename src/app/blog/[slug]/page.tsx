import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-20">
      <div className="max-w-3xl mx-auto">
        {post.coverImage && (
          <div className="aspect-video mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          <time className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        </header>

        <div
          className="max-w-none prose prose-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Have questions about this topic? <a href="/contact" className="text-primary hover:underline">Contact us</a> or call <a href="tel:+916307972402" className="text-primary hover:underline">+91 63079 72402</a>
          </p>
        </div>
      </div>
    </article>
  );
}
