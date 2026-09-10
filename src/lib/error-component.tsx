import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white px-6 text-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
        Error
      </p>
      <h1 className="font-display text-3xl font-normal text-navy">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm break-words text-muted">
        {errorMessage(error)}
      </p>
    </main>
  );
}
