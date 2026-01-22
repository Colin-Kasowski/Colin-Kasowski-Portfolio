import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (p) => <h1 {...p} className="mb-4 text-3xl font-semibold tracking-tight" />,
  h2: (p) => <h2 {...p} className="mt-10 mb-3 text-xl font-semibold tracking-tight" />,
  h3: (p) => <h3 {...p} className="mt-8 mb-2 text-lg font-semibold tracking-tight" />,
  a: (p) => (
    <a
      {...p}
      className="text-brand underline underline-offset-4 hover:opacity-90"
      target={p.href?.startsWith("http") ? "_blank" : undefined}
      rel={p.href?.startsWith("http") ? "noreferrer" : undefined}
    />
  ),
  code: (p) => <code {...p} className="rounded-md bg-surface px-1.5 py-0.5 text-[0.95em]" />,
  pre: (p) => <pre {...p} className="rounded-xl border hairline bg-surface p-4 overflow-x-auto" />,
  img: (p) => <img {...p} className="rounded-xl border hairline" />,
};
