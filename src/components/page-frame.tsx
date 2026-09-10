import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  alt = false,
  className,
  children,
}: {
  alt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        alt ? "bg-cream" : "bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-[800px] px-6">{children}</div>
    </section>
  );
}

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mb-10">
      <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
        {label}
      </p>
      <h1 className="mt-3 font-display text-4xl font-normal text-navy sm:text-5xl">
        {title}
      </h1>
      {children}
    </header>
  );
}

export function StackCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-white p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
