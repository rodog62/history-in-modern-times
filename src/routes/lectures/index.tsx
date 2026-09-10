import { createFileRoute } from "@tanstack/react-router";
import { LectureCard } from "@/components/lecture-card";
import { PageIntro, Section } from "@/components/page-frame";
import { SiteShell } from "@/components/site-shell";
import { series } from "@/lib/content";

export const Route = createFileRoute("/lectures/")({ component: LecturesIndex });

function LecturesIndex() {
  return (
    <SiteShell>
      <Section>
        <PageIntro label="The catalog" title="Lecture series">
          <p className="mt-4">
            Each series is purchased as a whole. One sample lecture is free on
            the main page. New series can be added here as they are recorded.
          </p>
        </PageIntro>
        <div className="space-y-5">
          {series.map((item) => (
            <LectureCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
