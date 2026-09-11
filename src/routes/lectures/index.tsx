import { createFileRoute, Link } from "@tanstack/react-router";
import { LectureCard } from "@/components/lecture-card";
import { PageIntro, Section } from "@/components/page-frame";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { series } from "@/lib/content";

export const Route = createFileRoute("/lectures/")({ component: LecturesIndex });

function LecturesIndex() {
  return (
    <SiteShell>
      <Section>
        <PageIntro label="The lectures" title="Subjects">
          <p className="mt-4">
            Dr. Crain has delivered hundreds of lectures and lecture series
            nationwide. Recorded series will be added in the coming months. For
            now, these are the subjects he is booked to speak on.
          </p>
        </PageIntro>
        <div className="space-y-5">
          {series.map((item) => (
            <LectureCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link to="/contact" search={{ topic: "booking" }}>
              Book a lecture
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
