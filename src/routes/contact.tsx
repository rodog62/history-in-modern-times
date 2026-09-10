import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { GoldRule } from "@/components/gold-rule";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { series, site, tours } from "@/lib/content";
import { usePurchases } from "@/lib/purchases";

type ContactSearch = { topic?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    topic: typeof search.topic === "string" ? search.topic : undefined,
  }),
  component: ContactPage,
});

function ContactPage() {
  const { topic: topicFromSearch } = Route.useSearch();
  const addInquiry = usePurchases((s) => s.addInquiry);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(topicFromSearch ?? "general");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    addInquiry({ name, email, topic, message });
    setSent(true);
    toast.success("Inquiry saved on this device. We’ll wire email next.");
  }

  return (
    <SiteShell invertedHeader>
      <section className="border-b border-border bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            Correspondence
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-6xl">
            Inquire
          </h1>
          <GoldRule className="mt-6" />
          <p className="mt-5 max-w-xl text-cream/75">
            Book a talk, join a tour, or ask about a series. Mail also reaches{" "}
            <a className="text-gold underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.8fr]">
        {sent ? (
          <div className="border border-border bg-parchment p-8">
            <h2 className="font-display text-3xl text-navy">Received.</h2>
            <p className="mt-3 text-muted">
              In this prototype the note is stored on your device so we can
              show Tim the flow. Live email comes in a later pass.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
              />
            </Field>
            <Field label="Regarding" htmlFor="topic">
              <select
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={fieldClass}
              >
                <option value="general">A general question</option>
                <option value="booking">Booking Dr. Crain to speak</option>
                {series.map((s) => (
                  <option key={s.id} value={s.id}>
                    Series: {s.title}
                  </option>
                ))}
                {tours.map((t) => (
                  <option key={t.id} value={t.id}>
                    Tour: {t.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldClass} py-3`}
              />
            </Field>
            <Button type="submit" variant="navy" size="lg">
              Send inquiry
            </Button>
          </form>
        )}

        <aside className="h-fit bg-parchment p-6 shadow-[var(--shadow-border)] sm:p-8">
          <h2 className="font-display text-2xl text-navy">What this form is for</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Joining an Ireland tour as it is recruited.</li>
            <li>Asking a club or parish to host a lecture.</li>
            <li>Purchasing a series once checkout is connected.</li>
          </ul>
        </aside>
      </section>
    </SiteShell>
  );
}

const fieldClass =
  "mt-1.5 h-11 w-full border border-border bg-parchment px-3 font-sans text-sm text-ink outline-none ring-gold/60 focus:ring-2";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
