import { createFileRoute, Link } from "@tanstack/react-router";
import { GoldRule } from "@/components/gold-rule";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { about, site } from "@/lib/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell invertedHeader>
      <section className="border-b border-border bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            {site.lecturer}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">
            {about.headline}
          </h1>
          <GoldRule className="mt-6" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <figure>
          <img
            src="/images/about-study.jpg"
            alt="A historian’s study: books, lamp, and desk."
            className="w-full object-cover"
          />
          <figcaption className="mt-3 text-xs tracking-wide text-muted">
            {about.photoNote}
          </figcaption>
        </figure>
        <div>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-0 mb-5 leading-relaxed text-ink">
              {p}
            </p>
          ))}
          <Button asChild className="mt-4" variant="navy">
            <Link to="/contact" search={{ topic: "booking" }}>Write to Dr. Crain</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-parchment">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2">
          {about.credentials.map((c) => (
            <div key={c.label} className="bg-parchment px-6 py-8 sm:px-10">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-gold-deep">
                {c.label}
              </p>
              <p className="mt-2 font-display text-2xl text-navy">{c.value}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
