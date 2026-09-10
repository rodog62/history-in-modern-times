import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import type { Series } from "@/lib/content";
import { seriesPriceLabel } from "@/lib/content";
import { usePurchases } from "@/lib/purchases";

export function LectureCard({ item }: { item: Series }) {
  const unlocked = usePurchases((s) => s.unlocked.includes(item.id));
  const freeCount = item.episodes.filter((e) => e.isFree).length;

  return (
    <article className="group flex h-full flex-col bg-parchment shadow-[var(--shadow-border)]">
      <Link
        to="/lectures/$seriesId"
        params={{ seriesId: item.id }}
        className="relative block aspect-[3/2] overflow-hidden"
      >
        <img
          src={item.image}
          alt=""
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 bg-navy/90 px-2.5 py-1 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold">
          {item.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl leading-snug text-navy">
          <Link to="/lectures/$seriesId" params={{ seriesId: item.id }}>
            {item.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm italic text-gold-deep">{item.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {item.blurb}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 font-sans text-xs tracking-wide text-muted">
          <span>
            {item.episodes.length} lectures
            {freeCount ? ` · ${freeCount} free` : null}
          </span>
          <span className="inline-flex items-center gap-1.5 text-navy">
            {unlocked ? (
              "Unlocked"
            ) : (
              <>
                <Lock className="size-3" />
                {seriesPriceLabel(item.price)}
              </>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
