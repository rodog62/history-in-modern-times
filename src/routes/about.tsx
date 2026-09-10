import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, Section, StackCard } from "@/components/page-frame";
import { Quote } from "@/components/quote";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <Section>
        <div className="mb-10 flex justify-center">
          <div className="flex size-[200px] items-center justify-center rounded-full bg-navy sm:size-[280px]">
            <span className="font-display text-5xl text-gold sm:text-6xl">
              TC
            </span>
          </div>
        </div>
        <PageIntro label="About" title={about.headline}>
          <p className="mt-3 text-sm">{about.photoNote}</p>
        </PageIntro>
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 28)} className="mt-5">
            {p}
          </p>
        ))}
        <Quote className="mt-8">“{about.quote}”</Quote>
        <div className="mt-10 space-y-5">
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
