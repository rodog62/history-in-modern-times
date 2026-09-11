import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageIntro, Section } from "@/components/page-frame";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getSeries } from "@/lib/content";

export const Route = createFileRoute("/lectures/$seriesId")({
  component: SeriesPage,
});

function SeriesPage() {
  const { seriesId } = Route.useParams();
  const item = getSeries(seriesId);
  if (!item) throw notFound();

  return (
    <SiteShell>
      <Section>
        <PageIntro label="Lecture" title={item.title}>
          <p className="mt-4">{item.blurb}</p>
        </PageIntro>
        <p>
          Recordings of this series are not online yet. To book Dr. Crain to
          deliver it for a college, parish, club, or civic group, write below.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild>
            <Link to="/contact" search={{ topic: item.id }}>
              Book this lecture
            </Link>
          </Button>
          <Link
            to="/lectures"
            className="inline-flex min-h-11 items-center font-sans text-sm font-semibold text-gold hover:text-gold-deep"
          >
            All subjects
          </Link>
        </div>
      </Section>
    </SiteShell>
  );
}
