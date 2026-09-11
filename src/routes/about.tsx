import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Section, StackCard } from "@/components/page-frame";
import { Portrait } from "@/components/portrait";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <Section>
        <div className="mb-10 flex justify-center">
          <Portrait className="size-[200px] sm:size-[280px]" />
        </div>
        <PageIntro label="About" title={about.headline} />
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 40)} className="mt-5">
            {p}
          </p>
        ))}
        <div className="mt-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
            Honors
          </p>
          <div className="mt-5 space-y-5">
            {about.honors.map((c) => (
              <StackCard key={c.label}>
                <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
                  {c.label}
                </p>
                <p className="mt-2 font-display text-[1.35rem] font-medium text-navy">
                  {c.value}
                </p>
              </StackCard>
            ))}
          </div>
        </div>
        <div className="mt-12 space-y-5">
          {about.credentials.map((c) => (
            <StackCard key={c.label}>
              <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
                {c.label}
              </p>
              <p className="mt-2 font-display text-[1.35rem] font-medium text-navy">
                {c.value}
              </p>
            </StackCard>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link to="/contact" search={{ topic: "booking" }}>
              Write to Dr. Crain
            </Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
