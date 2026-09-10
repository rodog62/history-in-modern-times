import { cn } from "@/lib/utils";

export function GoldRule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block h-px w-16 bg-gold", className)}
    />
  );
}
