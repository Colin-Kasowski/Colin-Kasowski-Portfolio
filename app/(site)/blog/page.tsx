import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { listContent } from "@/lib/content";
import Link from "next/link";

export default function BlogIndex() {
  const items = listContent("blog");

  return (
    <Container>
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted max-w-[70ch]">
        Notes on building, design, and lessons learned.
      </p>

      <div className="mt-8 space-y-3">
        {items.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <Card className="hover:shadow-soft transition-shadow">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-base font-medium">{p.title}</div>
                  {p.description && <div className="mt-1 text-sm text-muted">{p.description}</div>}
                </div>
                <div className="text-sm text-muted whitespace-nowrap">
                  {p.date ?? "—"} · {p.readingMinutes}m
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
