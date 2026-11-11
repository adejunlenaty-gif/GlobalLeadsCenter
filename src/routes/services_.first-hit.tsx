import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { meta } from "@/components/SiteChrome";

export const Route = createFileRoute("/services_/first-hit")({
  head: () => ({ meta: meta("Premium First Hit Lead Generation — Globalleadscenter", "Newly acquired leads within agreed freshness and delivery windows, with campaign-specific qualification, geographic targeting and documented consent.") }),
  component: () => <ServiceDetail slug="first-hit" />,
});