import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageIntro, Section, StackCard } from "@/components/page-frame";
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
    <SiteShell>
      <Section>
        <PageIntro label="Tour" title={item.title}>
          <p className="mt-4 inline-flex items-center gap-1.5">
            <MapPin className="size-4" />
            {item.place}
          </p>
          <p className="mt-4">{item.blurb}</p>
        </PageIntro>
        <img
          src={item.image}
          alt=""
          className="mb-10 aspect-video w-full rounded-lg object-cover"
        />
        <div className="mb-10">
          <Button asChild>
            <Link to="/contact" search={{ topic: item.id }}>
              Inquire about this tour
            </Link>
          </Button>
        </div>
        <h2 className="font-display text-[1.75rem] font-medium text-navy">
          On the ground
        </h2>
        <ul className="mt-6 space-y-5">
          {item.details.map((line) => (
            <li key={line}>
              <StackCard>
                <p className="text-[0.95rem]">{line}</p>
              </StackCard>
            </li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-[1.75rem] font-medium text-navy">
          Shape of the days
        </h2>
        <ol className="mt-6 space-y-5">
          {item.itinerary.map((stop) => (
            <li key={stop.title}>
              <StackCard>
                <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
                  {stop.day}
                </p>
                <p className="mt-2 font-display text-[1.35rem] font-medium text-navy">
                  {stop.title}
                </p>
                <p className="mt-2 text-[0.95rem]">{stop.note}</p>
              </StackCard>
            </li>
          ))}
        </ol>
      </Section>
    </SiteShell>
  );
}
