import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { PageIntro, Section, StackCard } from "@/components/page-frame";
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
  const [topic, setTopic] = useState(topicFromSearch ?? "booking");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    addInquiry({ name, email, topic, message });
    setSent(true);
    toast.success("Inquiry saved on this device. We’ll wire email next.");
  }

  return (
    <SiteShell>
      <Section>
        <PageIntro label="Get in touch" title="Let’s talk">
          <p className="mt-4">
            Book a lecture, join a tour, or ask a question. Mail also reaches{" "}
            <a
              className="font-medium text-navy hover:text-gold"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            .
          </p>
        </PageIntro>
        <div className="mt-2 mb-10 flex items-center gap-3 text-[0.95rem] text-navy">
          <Mail className="size-5 text-muted" />
          <a className="hover:text-gold" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>

        {sent ? (
          <StackCard>
            <h2 className="font-display text-3xl font-normal text-navy">
              Received.
            </h2>
            <p className="mt-3">
              In this prototype the note is stored on this device. Live email
              comes in a later pass.
            </p>
          </StackCard>
        ) : (
          <form onSubmit={onSubmit}>
            <Field label="Your name" htmlFor="name">
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                placeholder="Your name"
              />
            </Field>
            <Field label="Email address" htmlFor="email">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Regarding" htmlFor="topic">
              <select
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={`${fieldClass} appearance-auto bg-white leading-normal`}
              >
                <option value="booking">Booking Dr. Crain to speak</option>
                <option value="general">A general question</option>
                {series.map((s) => (
                  <option key={s.id} value={s.id}>
                    Lecture: {s.title}
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
                className={`${fieldClass} min-h-40 py-3`}
                placeholder="Tell me what you’re working on…"
              />
            </Field>
            <Button type="submit" size="lg" className="mt-2">
              Send message
            </Button>
          </form>
        )}
      </Section>
    </SiteShell>
  );
}

const fieldClass =
  "mt-2 h-12 w-full rounded-sm border border-border bg-white px-4 font-sans text-[0.95rem] leading-none text-navy outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-gold";

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
    <label htmlFor={htmlFor} className="mb-6 block">
      <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-btn text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
