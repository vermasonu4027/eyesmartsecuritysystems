import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts.length) {
    return (
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-8">Insights & Guides</h1>
        <p className="text-muted-foreground">No posts available yet.</p>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Insights & Guides from Our Security Experts</h1>
        <p className="text-lg text-muted-foreground">Learn about the latest security trends and best practices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden group-hover:border-primary/50 transition">
              {post.coverImage && (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
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
  );
}
