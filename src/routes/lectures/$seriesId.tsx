import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Lock, Play } from "lucide-react";
import { useState } from "react";
import { PageIntro, Section, StackCard } from "@/components/page-frame";
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
    <SiteShell>
      <Section>
        <PageIntro
          label={`${item.category} · ${item.episodes.length} lectures`}
          title={item.title}
        >
          <p className="mt-4 text-lg italic">{item.subtitle}</p>
          <p className="mt-4">{item.blurb}</p>
        </PageIntro>
        <img
          src={item.image}
          alt=""
          className="mb-10 aspect-video w-full rounded-lg object-cover"
        />
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          {unlocked ? (
            <p className="font-sans text-sm font-semibold text-gold">
              Series unlocked
            </p>
          ) : (
            <Button type="button" onClick={() => setPaywall(true)}>
              Purchase series · {seriesPriceLabel(item.price)}
            </Button>
          )}
          <Link
            to="/lectures"
            className="inline-flex min-h-11 items-center font-sans text-sm font-semibold text-gold hover:text-gold-deep"
          >
            All series
          </Link>
        </div>
        <ol className="space-y-5">
          {item.episodes.map((episode, index) => {
            const open = episode.isFree || unlocked;
            return (
              <li key={episode.id}>
                <StackCard>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="font-display text-2xl tabular-nums text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-[1.35rem] font-medium text-navy">
                        {episode.title}
                      </h2>
                      <p className="mt-1 text-sm">
                        {episode.duration}
                        {episode.isFree ? " · Sample · Free" : null}
                      </p>
                      <p className="mt-3 text-[0.95rem]">{episode.synopsis}</p>
                    </div>
                    <div className="shrink-0">
                      {open ? (
                        <Button asChild size="sm">
                          <Link
                            to="/lectures/$seriesId/$episodeId"
                            params={{
                              seriesId: item.id,
                              episodeId: episode.id,
                            }}
                          >
                            <Play className="ml-0.5 size-3.5 fill-current" />
                            Play
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => setPaywall(true)}
                        >
                          <Lock className="size-3.5" />
                          Locked
                        </Button>
                      )}
                    </div>
                  </div>
                </StackCard>
              </li>
            );
          })}
        </ol>
      </Section>

      <PaywallDialog
        series={item}
        open={paywall}
        onClose={() => setPaywall(false)}
      />
    </SiteShell>
  );
}
