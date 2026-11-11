import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { meta } from "@/components/SiteChrome";

export const Route = createFileRoute("/services_/sweepstakes")({
  head: () => ({ meta: meta("Premium Sweepstakes Lead Generation — Globalleadscenter", "Targeted sweepstakes audience acquisition with campaign qualification, documented opt-in sourcing and agreed freshness and delivery standards.") }),
  component: () => <ServiceDetail slug="sweepstakes" />,
});