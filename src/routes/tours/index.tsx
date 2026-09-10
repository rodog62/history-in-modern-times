import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, Section } from "@/components/page-frame";
import { SiteShell } from "@/components/site-shell";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/content";

export const Route = createFileRoute("/tours/")({ component: ToursIndex });

function ToursIndex() {
  return (
    <SiteShell>
      <Section>
        <PageIntro label="A second entity" title="Tours">
          <p className="mt-4">
            Kept apart from the lecture catalog on purpose. Dr. Crain will
            recruit for journeys as they come — Ireland first, then others.
          </p>
        </PageIntro>
        <div className="space-y-5">
          {tours.map((item) => (
            <TourCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
