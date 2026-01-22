import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "ghost", className }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm transition-all";
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:opacity-90"
      : "border hairline bg-bg/30 text-fg hover:bg-bg/60";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}
