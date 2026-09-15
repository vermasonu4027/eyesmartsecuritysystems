import fs from "fs";
import path from "path";
import { BlogPost } from "@/types";

const blogDir = path.join(process.cwd(), "src", "data", "blog");

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogDir)) return [];

    const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".json"));

    const posts = files.map((file) => {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content) as BlogPost;
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(blogDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as BlogPost;
  } catch {
    return null;
  }
}
