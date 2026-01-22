import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default function GalleryPage() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold tracking-tight">Gallery</h1>
      <p className="mt-2 text-muted max-w-[70ch]">
        Add screenshots, experiments, or visual work here.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} className="aspect-[4/3] p-0 overflow-hidden">
            <div className="h-full w-full bg-border/30" />
          </Card>
        ))}
      </div>
    </Container>
  );
}
