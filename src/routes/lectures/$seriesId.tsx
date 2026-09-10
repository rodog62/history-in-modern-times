import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Lock, Play } from "lucide-react";
import { useState } from "react";
import { GoldRule } from "@/components/gold-rule";
import { PaywallDialog } from "@/components/paywall-dialog";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getSeries, seriesPriceLabel } from "@/lib/content";
import { usePurchases } from "@/lib/purchases";

export const Route = createFileRoute("/lectures/$seriesId")({
  component: SeriesPage,
});

function SeriesPage() {
  const { seriesId } = Route.useParams();
  const item = getSeries(seriesId);
  const unlocked = usePurchases((s) => s.unlocked.includes(seriesId));
  const [paywall, setPaywall] = useState(false);

  if (!item) throw notFound();

  return (
    <SiteShell invertedHeader>
      <section className="relative isolate overflow-hidden bg-navy text-cream">
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            {item.category} · {item.episodes.length} lectures
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg italic text-gold-soft">
            {item.subtitle}
          </p>
          <GoldRule className="mt-6" />
          <p className="mt-5 max-w-2xl text-cream/80">{item.blurb}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {unlocked ? (
              <p className="font-sans text-sm text-gold">Series unlocked</p>
            ) : (
              <Button type="button" onClick={() => setPaywall(true)}>
                Purchase series · {seriesPriceLabel(item.price)}
              </Button>
            )}
            <Link
              to="/lectures"
              className="inline-flex min-h-11 items-center font-sans text-sm text-cream/70 hover:text-gold"
            >
              All series
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ol className="divide-y divide-border border border-border bg-parchment">
          {item.episodes.map((episode, index) => {
            const open = episode.isFree || unlocked;
            return (
              <li key={episode.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:p-6">
                <span className="font-display text-2xl tabular-nums text-gold-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-2xl text-navy">
                    {episode.title}
                  </h2>
                  <p className="mt-1 font-sans text-xs tracking-wide text-muted">
                    {episode.duration}
                    {episode.isFree ? " · Sample · Free" : null}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {episode.synopsis}
                  </p>
                </div>
                <div className="shrink-0">
                  {open ? (
                    <Button asChild variant="navy" size="sm">
                      <Link
                        to="/lectures/$seriesId/$episodeId"
                        params={{ seriesId: item.id, episodeId: episode.id }}
                      >
                        <Play className="ml-0.5 size-3.5 fill-current" />
                        Play
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="cream"
                      size="sm"
                      className="border border-border"
                      onClick={() => setPaywall(true)}
                    >
                      <Lock className="size-3.5" />
                      Locked
                    </Button>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <PaywallDialog
        series={item}
        open={paywall}
        onClose={() => setPaywall(false)}
      />
    </SiteShell>
  );
}
