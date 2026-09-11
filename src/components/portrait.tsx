import { cn } from "@/lib/utils";
import { about } from "@/lib/content";

export function Portrait({ className }: { className?: string }) {
  return (
    <img
      src={about.photo}
      alt={about.photoAlt}
      width={280}
      height={280}
      className={cn(
        "rounded-full object-cover object-[center_18%]",
        className,
      )}
    />
  );
}
