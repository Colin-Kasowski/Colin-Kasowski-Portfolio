import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border hairline bg-bg/40 px-2.5 py-1 text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
