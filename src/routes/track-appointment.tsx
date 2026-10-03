import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/track-appointment")({
  beforeLoad: () => {
    throw redirect({ to: "/chambers" });
  },
  component: () => null,
});
