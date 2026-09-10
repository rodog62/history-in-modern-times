import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFoundComponent() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-white px-6 text-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-normal text-navy">
        Page not found
      </h1>
      <Link
        to="/"
        className="mt-6 inline-flex min-h-11 items-center font-sans text-sm font-semibold text-gold hover:text-gold-deep"
      >
        Return home
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundComponent,
  });
}
