import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { GoldRule } from "@/components/gold-rule";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getTour } from "@/lib/content";

export const Route = createFileRoute("/tours/$tourId")({
  component: TourPage,
});

function TourPage() {
  const { tourId } = Route.useParams();
  const item = getTour(tourId);
  if (!item) throw notFound();

  return (
    <SiteShell invertedHeader>
      <section className="relative isolate overflow-hidden bg-navy text-cream">
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            Tour
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">
            {item.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-1.5 text-cream/80">
            <MapPin className="size-4" />
            {item.place}
          </p>
          <GoldRule className="mt-6" />
          <p className="mt-5 max-w-2xl text-cream/80">{item.blurb}</p>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact" search={{ topic: item.id }}>
                Inquire about this tour
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-navy">On the ground</h2>
          <ul className="mt-6 space-y-3">
            {item.details.map((line) => (
              <li
                key={line}
                className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-parchment p-6 shadow-[var(--shadow-border)] sm:p-8">
          <h2 className="font-display text-3xl text-navy">Shape of the days</h2>
          <ol className="mt-6 space-y-5">
            {item.itinerary.map((stop) => (
              <li key={stop.title}>
                <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold-deep">
                  {stop.day}
                </p>
                <p className="mt-1 font-display text-xl text-navy">
                  {stop.title}
                </p>
                <p className="mt-1 text-sm text-muted">{stop.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
