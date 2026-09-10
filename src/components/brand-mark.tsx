import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="8" fill="#0C2340" />
      <path
        d="M16 22c0 0 8-4.2 16-4.2S48 22 48 22v22s-8-4-16-4-16 4-16 4V22Z"
        fill="none"
        stroke="#C4A574"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 17.8V40" stroke="#C4A574" strokeWidth="2" />
      <path d="M22 48h20" stroke="#C4A574" strokeWidth="1.8" />
    </svg>
  );
}
