import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import type { Tour } from "@/lib/content";

const statusLabel: Record<Tour["status"], string> = {
  recruiting: "Recruiting",
  scheduled: "Scheduled",
  waitlist: "Waitlist",
};

export function TourCard({ item }: { item: Tour }) {
  return (
    <article className="group grid overflow-hidden bg-parchment shadow-[var(--shadow-border)] md:grid-cols-2">
      <Link
        to="/tours/$tourId"
        params={{ tourId: item.id }}
        className="relative block aspect-[16/10] md:aspect-auto md:min-h-[18rem]"
      >
        <img
          src={item.image}
          alt=""
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-gold-deep">
          {statusLabel[item.status]}
        </p>
        <h3 className="mt-2 font-display text-3xl text-navy">
          <Link to="/tours/$tourId" params={{ tourId: item.id }}>
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-3.5" />
          {item.place}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {item.blurb}
        </p>
        <p className="mt-5 font-sans text-xs uppercase tracking-[0.18em] text-navy">
          {item.dates}
        </p>
      </div>
    </article>
  );
}
