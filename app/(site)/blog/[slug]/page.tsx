import { Container } from "@/components/ui/Container";
import { getContent, listContent } from "@/lib/content";
import { Mdx } from "@/components/mdx/Mdx";

export function generateStaticParams() {
  return listContent("blog").map((p) => ({ slug: p.slug }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = getContent("blog", params.slug);

  return (
    <Container>
      <h1 className="text-2xl font-semibold tracking-tight">{post.title}</h1>
      <div className="mt-2 text-sm text-muted">
        {post.date ?? "—"} · {post.readingMinutes} min read
      </div>

      <div className="mt-10">
        <Mdx source={post.body} />
      </div>
    </Container>
  );
}
