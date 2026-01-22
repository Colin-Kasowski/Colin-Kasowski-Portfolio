import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentType = "blog" | "work";

export type ContentItem = {
  slug: string;
  type: ContentType;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  body: string;
  readingMinutes?: number;
};

function getDir(type: ContentType) {
  return path.join(process.cwd(), "content", type);
}

export function listContent(type: ContentType): ContentItem[] {
  const dir = getDir(type);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      type,
      title: String(data.title ?? slug),
      description: data.description ? String(data.description) : undefined,
      date: data.date ? String(data.date) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      body: content,
      readingMinutes: Math.max(1, Math.round(rt.minutes)),
    } satisfies ContentItem;
  });

  // newest first if date exists
  return items.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getContent(type: ContentType, slug: string): ContentItem {
  const file = path.join(getDir(type), `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const rt = readingTime(content);
  return {
    slug,
    type,
    title: String(data.title ?? slug),
    description: data.description ? String(data.description) : undefined,
    date: data.date ? String(data.date) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    body: content,
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
  };
}
