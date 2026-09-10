import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = [
  { to: "/lectures", label: "Lectures" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "relative z-30 border-b",
        inverted
          ? "border-gold/20 bg-navy text-cream"
          : "border-border bg-cream text-navy",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link to="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "block font-sans text-[0.65rem] uppercase tracking-[0.28em]",
              inverted ? "text-gold" : "text-gold-deep",
            )}
          >
            {site.lecturer}
          </span>
          <span className="block truncate font-display text-xl font-semibold leading-tight sm:text-[1.35rem]">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "font-sans text-sm tracking-wide transition-colors duration-150",
                  inverted
                    ? active
                      ? "text-gold"
                      : "text-cream/80 hover:text-gold"
                    : active
                      ? "text-navy"
                      : "text-muted hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/lectures/$seriesId/$episodeId"
            params={{ seriesId: "ireland", episodeId: "landscapes" }}
            className={cn(
              "inline-flex h-10 items-center px-4 font-sans text-sm font-medium",
              inverted
                ? "bg-gold text-navy-deep hover:bg-gold-soft"
                : "bg-navy text-cream hover:bg-navy-mid",
            )}
          >
            Sample lecture
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "relative z-40 inline-flex size-11 items-center justify-center md:hidden",
            inverted ? "text-cream" : "text-navy",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t px-4 py-4 md:hidden",
            inverted
              ? "border-gold/20 bg-navy-deep"
              : "border-border bg-parchment",
          )}
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center font-sans text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/lectures/$seriesId/$episodeId"
              params={{ seriesId: "ireland", episodeId: "landscapes" }}
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center bg-gold font-sans text-sm font-medium text-navy-deep"
            >
              Sample lecture
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
