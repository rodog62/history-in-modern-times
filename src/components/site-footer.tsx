import { Link } from "@tanstack/react-router";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            {site.lecturer}
          </p>
          <p className="mt-2 font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
            Lecture series first. Tours as their own house. Built to grow as Dr.
            Crain records new work.
          </p>
        </div>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <Link to="/lectures" className="hover:text-gold">
                Lecture series
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-gold">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About Dr. Crain
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Inquire
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold">
            Domain
          </p>
          <p className="mt-3 text-sm text-cream/80">{site.domain}</p>
          <p className="mt-2 text-sm text-cream/60">
            Prototype. Copy, portrait, and lecture files will be swapped as Tim
            sends them.
          </p>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <p className="mx-auto max-w-6xl px-4 py-4 font-sans text-xs tracking-wide text-cream/45 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All lectures remain the
          property of Dr. Tim Crain.
        </p>
      </div>
    </footer>
  );
}
