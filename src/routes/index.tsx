import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";
import { LectureCard } from "@/components/lecture-card";
import { Portrait } from "@/components/portrait";
import { SiteShell } from "@/components/site-shell";
import { TourCard } from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import { about, series, site, tours } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <section className="flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center px-6 py-16 text-center">
        <BrandMark className="mb-8 size-28 rounded-lg sm:size-40" />
        <h1 className="font-display text-4xl font-normal text-navy sm:text-5xl md:text-6xl">
          History in <span className="text-gold">Modern Times</span>
        </h1>
        <p className="mt-5 font-sans text-[0.8rem] font-semibold uppercase tracking-label text-muted">
          {site.kicker}
        </p>
        <p className="mt-8 max-w-xl text-[1.1rem] leading-relaxed">
          {site.tagline} Lectures and lecture series for colleges, community
          organizations, and general audiences — with tours as a second, separate
          piece of the work.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact" search={{ topic: "booking" }}>
              Let’s talk
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-10 flex justify-center">
            <Portrait className="size-[200px] sm:size-[280px]" />
          </div>
          <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
            About
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal text-navy">
            {about.headline}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-5">
              {p}
            </p>
          ))}
          <Link
            to="/about"
            className="mt-8 inline-flex min-h-11 items-center font-sans text-sm font-semibold text-gold hover:text-gold-deep"
          >
            Read more →
          </Link>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
            The lectures
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal text-navy">
            Lectures
          </h2>
          <p className="mt-4">
            Hundreds of lectures and lecture series nationwide. Recorded series
            will be added in the coming months; until then, this is the live
            work — book a talk, or ask about a series.
          </p>
          <div className="mt-10 space-y-5">
            {series.map((item) => (
              <LectureCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/lectures">View lecture subjects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
            A separate entity
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal text-navy">
            Tours
          </h2>
          <p className="mt-4">
            Kept apart from the lectures on purpose. Ireland first, then others
            as they are recruited.
          </p>
          <div className="mt-10 space-y-5">
            {tours.map((item) => (
              <TourCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal text-navy">
            Let’s talk
          </h2>
          <p className="mx-auto mt-4 max-w-lg">
            Book a lecture, join a tour, or ask about a series. I’d be glad to
            hear from you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact" search={{ topic: "booking" }}>
                Inquire
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
