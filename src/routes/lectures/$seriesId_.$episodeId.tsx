import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useState } from "react";
import { PageIntro, Section } from "@/components/page-frame";
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
    <SiteShell>
      <Section>
        <PageIntro label="Lecture" title={episode.title}>
          <p className="mt-3 text-sm">
            <Link
              to="/lectures/$seriesId"
              params={{ seriesId: series.id }}
              className="font-semibold text-gold hover:text-gold-deep"
            >
              {series.title}
            </Link>
            <span> · {episode.duration}</span>
          </p>
        </PageIntro>

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
          <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-lg bg-navy px-6 text-center">
            <p className="font-display text-2xl text-cream">
              Recording to be added
            </p>
            <p className="max-w-md text-sm text-cream/70">
              This lecture is unlocked. When Dr. Crain sends the video file, it
              will play here.
            </p>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={series.image}
              alt=""
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy/70 px-6 text-center">
              <Lock className="size-7 text-gold" />
              <p className="font-display text-2xl text-cream">
                This lecture is part of the series
              </p>
              <Button type="button" variant="gold" onClick={() => setPaywall(true)}>
                Unlock the series
              </Button>
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-[1.75rem] font-medium text-navy">
            About this lecture
          </h2>
          <p className="mt-4">{episode.synopsis}</p>
          <Link
            to="/lectures/$seriesId"
            params={{ seriesId: series.id }}
            className="mt-8 inline-flex min-h-11 items-center font-sans text-sm font-semibold text-gold hover:text-gold-deep"
          >
            ← Back to the series
          </Link>
        </div>
      </Section>
      <PaywallDialog
        series={series}
        open={paywall}
        onClose={() => setPaywall(false)}
      />
    </SiteShell>
  );
}
