import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Quote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-gold py-1 pl-6 text-base italic leading-[1.8] text-muted",
        className,
      )}
    >
      {children}
    </blockquote>
  );
}
