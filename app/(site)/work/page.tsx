import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { listContent } from "@/lib/content";
import Link from "next/link";

export default function WorkIndex() {
  const items = listContent("work");

  return (
    <Container>
      <h1 className="text-2xl font-semibold tracking-tight">Work</h1>
      <p className="mt-2 text-muted max-w-[70ch]">
        Selected projects. Keep descriptions short—let screenshots and structure do the work.
      </p>

      <div className="mt-8 space-y-3">
        {items.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`}>
            <Card className="hover:shadow-soft transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-base font-medium">{p.title}</div>
                  {p.description && <div className="mt-1 text-sm text-muted">{p.description}</div>}
                </div>
                <div className="flex gap-2">
                  {(p.tags ?? []).slice(0, 3).map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
