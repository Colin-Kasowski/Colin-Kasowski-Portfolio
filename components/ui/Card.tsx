import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border hairline bg-surface/60 p-5 shadow-[0_1px_0_rgb(0_0_0/0.02)]",
        "dark:bg-surface/70",
        className
      )}
    >
      {children}
    </div>
  );
}
