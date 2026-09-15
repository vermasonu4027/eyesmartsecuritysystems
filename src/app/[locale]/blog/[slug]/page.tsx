import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function generateStaticParams() {
  const enPosts = await getBlogPosts("en");
  const hiPosts = await getBlogPosts("hi");
  const allPosts = [...enPosts, ...hiPosts];

  return allPosts.map((post) => ({
    slug: post.slug,
    locale: "en",
  }));
}

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug, locale);

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

        <div className="prose prose-invert max-w-none dark:prose-invert">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                ],
              },
            }}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Have questions about this topic? <a href="/en/contact" className="text-primary hover:underline">Contact us</a> or call <a href="tel:+916307972402" className="text-primary hover:underline">+91 63079 72402</a>
          </p>
        </div>
      </div>
    </article>
  );
}
