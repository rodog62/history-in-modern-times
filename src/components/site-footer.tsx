import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white py-12 text-center">
      <p className="font-display text-xl text-navy">
        History in <span className="text-gold">Modern Times</span>
      </p>
      <p className="mt-1 text-sm tracking-wide text-muted">
        Lectures and tours with {site.lecturer}
      </p>
      <p className="mt-6 text-xs text-muted/70">
        © {new Date().getFullYear()} {site.name} · {site.domain}
      </p>
    </footer>
  );
}
