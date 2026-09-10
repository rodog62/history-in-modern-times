import { createFileRoute } from "@tanstack/react-router";
import { GoldRule } from "@/components/gold-rule";
import { SiteShell } from "@/components/site-shell";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/content";

export const Route = createFileRoute("/tours/")({ component: ToursIndex });

function ToursIndex() {
  return (
    <SiteShell invertedHeader>
      <section className="border-b border-border bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            A second entity
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-6xl">
            Tours
          </h1>
          <GoldRule className="mt-6" />
          <p className="mt-5 max-w-2xl text-cream/75">
            Kept apart from the lecture catalog on purpose. Dr. Crain will
            recruit for journeys as they come — Ireland first, then others.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 sm:py-16">
        {tours.map((item) => (
          <TourCard key={item.id} item={item} />
        ))}
      </section>
    </SiteShell>
  );
}
