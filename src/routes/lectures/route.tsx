import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/lectures")({
  component: () => <Outlet />,
});
