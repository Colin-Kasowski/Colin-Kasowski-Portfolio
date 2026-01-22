import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
  return (
    <Container>
      <Reveal>
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="mt-3 text-muted leading-relaxed max-w-[70ch]">
          Add your longer bio and a CV-style overview here.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm text-muted">Focus</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Modern React + Next.js</li>
              <li>Design systems</li>
              <li>Performance + accessibility</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm text-muted">Tooling</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>MDX content</li>
            </ul>
          </Card>
        </div>
      </Reveal>
    </Container>
  );
}
