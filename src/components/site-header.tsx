import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = [
  { to: "/about", label: "About" },
  { to: "/lectures", label: "Lectures" },
  { to: "/tours", label: "Tours" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b border-border bg-white transition-shadow duration-300",
        scrolled && "shadow-header",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1100px] items-center justify-between gap-4 px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 text-navy"
          onClick={() => setOpen(false)}
        >
          <BrandMark className="size-12" />
          <span className="flex flex-col leading-[1.15] font-display text-[0.95rem] font-medium sm:text-lg">
            <span>History in</span>
            <span className="text-gold">Modern Times</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "font-sans text-[0.9rem] font-medium tracking-wide transition-colors duration-200",
                  active ? "text-gold" : "text-navy hover:text-gold",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="relative z-40 inline-flex size-11 items-center justify-center text-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-6 py-2 md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-border font-sans text-base text-navy last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
