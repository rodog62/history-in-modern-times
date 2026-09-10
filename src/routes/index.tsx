import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GoldRule } from "@/components/gold-rule";
import { LectureCard } from "@/components/lecture-card";
import { SiteShell } from "@/components/site-shell";
import { TourCard } from "@/components/tour-card";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video-player";
import { sampleLecture, sampleSeries, series, site, tours } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell invertedHeader>
      <section className="relative isolate overflow-hidden bg-navy text-cream">
        <img
          src="/images/hero-hall.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy/70 to-navy" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-gold">
            {site.kicker}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] text-cream sm:text-6xl md:text-7xl">
            History in
            <br />
            Modern Times
          </h1>
          <GoldRule className="mt-8" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {site.tagline} The lectures are the main work. The tours are a
            second house, growing as Dr. Crain leads them.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link
                to="/lectures/$seriesId/$episodeId"
                params={{ seriesId: "ireland", episodeId: "landscapes" }}
              >
                Watch the sample lecture
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/lectures">Browse the series</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold-deep">
              On the main page
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Sample lecture
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              {sampleLecture.title}. From the series{" "}
              <em>{sampleSeries.title}</em>. Remaining lectures in each series
              sit behind a purchase.
            </p>
            <div className="mt-8">
              <VideoPlayer
                src={sampleLecture.videoSrc ?? ""}
                poster={sampleLecture.posterSrc}
                title={sampleLecture.title}
                caption="Cinematic preview of the hall. Dr. Crain’s recorded lecture will replace this file."
              />
            </div>
          </div>
          <aside className="flex flex-col justify-center border border-border bg-parchment p-6 sm:p-8">
            <p className="font-display text-2xl italic text-navy">
              “To me, it really didn’t make any sense that something like this
              could happen.”
            </p>
            <p className="mt-4 text-sm text-muted">
              Dr. Crain, on first learning of the Holocaust as a boy in a Roman
              Catholic grade school — the question that opened a career in
              Jewish–Christian history, Ireland, and the modern age.
            </p>
            <GoldRule className="mt-8" />
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-navy hover:text-gold-deep"
            >
              Read the biographical note
              <ArrowRight className="size-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-parchment">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold-deep">
                Primary work
              </p>
              <h2 className="mt-3 font-display text-4xl text-navy">
                Lecture series
              </h2>
            </div>
            <Link
              to="/lectures"
              className="inline-flex min-h-11 items-center gap-2 font-sans text-sm text-navy hover:text-gold-deep"
            >
              All series
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {series.slice(0, 3).map((item) => (
              <LectureCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold-deep">
            A separate house
          </p>
          <h2 className="mt-3 font-display text-4xl text-navy">Tours</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Lectures and tours are kept as two entities. The tours will fill as
            Dr. Crain recruits for them.
          </p>
          <div className="mt-10 grid gap-6">
            {tours.map((item) => (
              <TourCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
