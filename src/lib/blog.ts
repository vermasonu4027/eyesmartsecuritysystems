import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types";

const blogDir = (locale: string) => path.join(process.cwd(), "content", "blog", locale);

export async function getBlogPosts(locale: string = "en"): Promise<BlogPost[]> {
  try {
    const dir = blogDir(locale);
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));

    const posts = files.map((file) => {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);

      return {
        slug: file.replace(".md", ""),
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        coverImage: data.coverImage || "",
        content: "",
      };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string, locale: string = "en"): Promise<BlogPost | null> {
  try {
    const dir = blogDir(locale);
    const filePath = path.join(dir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      if (locale !== "en") {
        return getBlogPost(slug, "en");
      }
      return null;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const { data, content: postContent } = matter(content);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      coverImage: data.coverImage || "",
      content: postContent,
    };
  } catch {
    return null;
  }
}
