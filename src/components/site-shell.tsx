import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({
  children,
  invertedHeader = false,
}: {
  children: ReactNode;
  invertedHeader?: boolean;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <SiteHeader inverted={invertedHeader} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
