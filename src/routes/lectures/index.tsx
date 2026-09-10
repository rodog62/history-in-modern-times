import { createFileRoute } from "@tanstack/react-router";
import { GoldRule } from "@/components/gold-rule";
import { LectureCard } from "@/components/lecture-card";
import { SiteShell } from "@/components/site-shell";
import { series } from "@/lib/content";

export const Route = createFileRoute("/lectures/")({ component: LecturesIndex });

function LecturesIndex() {
  return (
    <SiteShell invertedHeader>
      <section className="border-b border-border bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            The catalog
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-6xl">
            Lecture series
          </h1>
          <GoldRule className="mt-6" />
          <p className="mt-5 max-w-2xl text-cream/75">
            Each series is purchased as a whole. One sample lecture is free on
            the main page. New series can be added here as they are recorded.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {series.map((item) => (
            <LectureCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
