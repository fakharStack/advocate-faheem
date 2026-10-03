import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/book-appointment")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
  component: () => null,
});
