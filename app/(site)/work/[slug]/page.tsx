import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { getContent, listContent } from "@/lib/content";
import { Mdx } from "@/components/mdx/Mdx";

export function generateStaticParams() {
  return listContent("work").map((p) => ({ slug: p.slug }));
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const item = getContent("work", params.slug);

  return (
    <Container>
      <h1 className="text-2xl font-semibold tracking-tight">{item.title}</h1>
      {item.description && <p className="mt-2 text-muted max-w-[70ch]">{item.description}</p>}

      <div className="mt-4 flex flex-wrap gap-2">
        {(item.tags ?? []).map((t) => <Pill key={t}>{t}</Pill>)}
      </div>

      <div className="mt-10">
        <Mdx source={item.body} />
      </div>
    </Container>
  );
}
