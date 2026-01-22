import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { FadeIn } from "@/components/motion/Motion";
import { listContent } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  const work = listContent("work").slice(0, 3);
  const blog = listContent("blog").slice(0, 3);

  return (
    <Container>
      <FadeIn>
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Web Developer building clean, fast, modern experiences.
            </h1>
            <p className="mt-3 text-muted leading-relaxed">
              Replace this with your short intro. Keep it calm and minimal—this is where the “Magic Portfolio”
              vibe comes from: spacing, typography, and restraint.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Next.js</Pill>
              <Pill>Tailwind</Pill>
              <Pill>Framer Motion</Pill>
              <Pill>MDX</Pill>
            </div>

            <div className="mt-6 flex gap-3">
              <Button href="/work" variant="primary">View Work</Button>
              <Button href="/about" variant="ghost">About</Button>
            </div>
          </div>

          <Card className="h-fit">
            <div className="text-sm text-muted">Currently</div>
            <div className="mt-1 text-base font-medium">Open to freelance / full-time</div>
            <div className="mt-4 text-sm text-muted">Contact</div>
            <div className="mt-1 flex flex-col gap-1 text-sm">
              <a className="text-brand underline underline-offset-4" href="mailto:you@email.com">
                you@email.com
              </a>
              <a className="text-brand underline underline-offset-4" href="https://github.com/yourname" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="text-brand underline underline-offset-4" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </Card>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-sm font-medium text-muted">Selected Work</h2>
              <Link className="text-sm text-brand underline underline-offset-4" href="/work">All</Link>
            </div>
            <div className="space-y-3">
              {work.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`}>
                  <Card className="hover:shadow-soft transition-shadow">
                    <div className="text-base font-medium">{p.title}</div>
                    {p.description && <div className="mt-1 text-sm text-muted">{p.description}</div>}
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-sm font-medium text-muted">Latest Writing</h2>
              <Link className="text-sm text-brand underline underline-offset-4" href="/blog">All</Link>
            </div>
            <div className="space-y-3">
              {blog.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <Card className="hover:shadow-soft transition-shadow">
                    <div className="text-base font-medium">{p.title}</div>
                    <div className="mt-1 text-sm text-muted">
                      {p.date ? p.date : "—"} · {p.readingMinutes} min read
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </FadeIn>
    </Container>
  );
}
