import { Link } from "@tanstack/react-router";
import type { Series } from "@/lib/content";

export function LectureCard({ item }: { item: Series }) {
  return (
    <Link
      to="/lectures/$seriesId"
      params={{ seriesId: item.id }}
      className="block rounded-lg border border-border bg-white p-8 transition-colors duration-200 hover:border-gold/50"
    >
      <h3 className="font-display text-[1.35rem] font-medium text-navy">
        {item.title}
      </h3>
      <p className="mt-2 text-[0.95rem]">{item.blurb}</p>
    </Link>
  );
}
