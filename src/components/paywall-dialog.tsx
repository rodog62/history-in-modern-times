import { Lock, Unlock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Series } from "@/lib/content";
import { seriesPriceLabel } from "@/lib/content";
import { usePurchases } from "@/lib/purchases";

export function PaywallDialog({
  series,
  open,
  onClose,
}: {
  series: Series;
  open: boolean;
  onClose: () => void;
}) {
  const unlock = usePurchases((s) => s.unlock);
  const joinWaitlist = usePurchases((s) => s.joinWaitlist);
  const [email, setEmail] = useState("");

  if (!open) return null;

  function onWaitlist(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    joinWaitlist(series.id, email.trim());
    toast.success("You’re on the list. We’ll write when checkout is live.");
    setEmail("");
    onClose();
  }

  function onPreviewUnlock() {
    unlock(series.id);
    toast.success(`${series.title} unlocked for preview.`);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy/60 p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-lg bg-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
          Series paywall
        </p>
        <h2
          id="paywall-title"
          className="mt-2 font-display text-3xl font-normal text-navy"
        >
          {series.title}
        </h2>
        <p className="mt-3 text-[0.95rem]">
          The sample lecture on the main page is free. The rest of this series
          will sit behind a purchase — {series.episodes.length} lectures for{" "}
          {seriesPriceLabel(series.price)}. Checkout is not wired yet; leave an
          email, or unlock the series to preview how the player will feel.
        </p>

        <form onSubmit={onWaitlist} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="waitlist-email">
            Email
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email for when purchase opens"
            className="h-12 min-h-11 flex-1 rounded-sm border border-border bg-white px-4 font-sans text-[0.95rem] text-navy outline-none placeholder:text-muted/50 focus:border-gold"
          />
          <Button type="submit" variant="navy" className="shrink-0">
            <Lock className="size-3.5" />
            Notify me
          </Button>
        </form>

        <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">Prototype preview</p>
          <div className="flex gap-2">
            <Button type="button" variant="ghostInk" onClick={onClose}>
              Close
            </Button>
            <Button type="button" variant="gold" onClick={onPreviewUnlock}>
              <Unlock className="size-3.5" />
              Unlock series
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
