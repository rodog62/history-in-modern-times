import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useState } from "react";
import { PaywallDialog } from "@/components/paywall-dialog";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video-player";
import { getEpisode } from "@/lib/content";
import { usePurchases } from "@/lib/purchases";

export const Route = createFileRoute("/lectures/$seriesId_/$episodeId")({
  component: EpisodePage,
});

function EpisodePage() {
  const { seriesId, episodeId } = Route.useParams();
  const found = getEpisode(seriesId, episodeId);
  const unlocked = usePurchases((s) => s.unlocked.includes(seriesId));
  const [paywall, setPaywall] = useState(false);

  if (!found) throw notFound();
  const { series, episode } = found;
  const open = episode.isFree || unlocked;

  return (
    <SiteShell invertedHeader>
      <article className="bg-navy-deep pb-16 text-cream">
        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            <Link
              to="/lectures/$seriesId"
              params={{ seriesId: series.id }}
              className="hover:text-gold-soft"
            >
              {series.title}
            </Link>
          </p>
          <h1 className="mt-3 font-display text-3xl text-cream sm:text-5xl">
            {episode.title}
          </h1>
          <p className="mt-3 text-sm text-cream/60">{episode.duration}</p>

          <div className="mt-8">
            {open && episode.videoSrc ? (
              <VideoPlayer
                src={episode.videoSrc}
                poster={episode.posterSrc ?? series.image}
                title={episode.title}
                caption={
                  episode.isFree
                    ? "Sample lecture preview. The recorded talk will replace this file."
                    : undefined
                }
              />
            ) : open ? (
              <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-navy px-6 text-center">
                <p className="font-display text-2xl text-cream">
                  Recording to be added
                </p>
                <p className="max-w-md text-sm text-cream/65">
                  This lecture is unlocked. When Dr. Crain sends the video file,
                  it will play here.
                </p>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={series.image}
                  alt=""
                  className="aspect-video w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy/55 px-6 text-center">
                  <Lock className="size-7 text-gold" />
                  <p className="font-display text-2xl text-cream">
                    This lecture is part of the series
                  </p>
                  <Button type="button" onClick={() => setPaywall(true)}>
                    Unlock the series
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 max-w-2xl">
            <h2 className="font-display text-2xl text-cream">About this lecture</h2>
            <p className="mt-3 leading-relaxed text-cream/75">
              {episode.synopsis}
            </p>
            <Link
              to="/lectures/$seriesId"
              params={{ seriesId: series.id }}
              className="mt-8 inline-flex min-h-11 items-center font-sans text-sm text-gold hover:text-gold-soft"
            >
              Back to the series
            </Link>
          </div>
        </div>
      </article>
      <PaywallDialog
        series={series}
        open={paywall}
        onClose={() => setPaywall(false)}
      />
    </SiteShell>
  );
}
