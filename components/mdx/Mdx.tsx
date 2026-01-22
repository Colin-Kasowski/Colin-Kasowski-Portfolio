import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./MdxComponents";

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
