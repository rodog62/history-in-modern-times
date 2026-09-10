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
    <Link
      to="/tours/$tourId"
      params={{ tourId: item.id }}
      className="block rounded-lg border border-border bg-white p-8 transition-colors duration-200 hover:border-gold/50"
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
        {statusLabel[item.status]}
      </p>
      <h3 className="mt-2 font-display text-[1.35rem] font-medium text-navy">
        {item.title}
      </h3>
      <p className="mt-2 inline-flex items-center gap-1.5 text-[0.95rem]">
        <MapPin className="size-3.5" />
        {item.place}
      </p>
      <p className="mt-2 text-[0.95rem]">{item.blurb}</p>
      <p className="mt-4 text-sm">{item.dates}</p>
    </Link>
  );
}
