import { Link } from "@tanstack/react-router";
import type { Series } from "@/lib/content";
import { seriesPriceLabel } from "@/lib/content";
import { usePurchases } from "@/lib/purchases";

export function LectureCard({ item }: { item: Series }) {
  const unlocked = usePurchases((s) => s.unlocked.includes(item.id));
  const freeCount = item.episodes.filter((e) => e.isFree).length;

  return (
    <Link
      to="/lectures/$seriesId"
      params={{ seriesId: item.id }}
      className="block rounded-lg border border-border bg-white p-8 transition-colors duration-200 hover:border-gold/50"
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
        {item.category}
      </p>
      <h3 className="mt-2 font-display text-[1.35rem] font-medium text-navy">
        {item.title}
      </h3>
      <p className="mt-2 text-[0.95rem]">{item.blurb}</p>
      <p className="mt-4 text-sm">
        {item.episodes.length} lectures
        {freeCount ? ` · ${freeCount} free` : null}
        {" · "}
        {unlocked ? "Unlocked" : seriesPriceLabel(item.price)}
      </p>
    </Link>
  );
}
