import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { meta } from "@/components/SiteChrome";

export const Route = createFileRoute("/services_/mega-millions")({
  head: () => ({ meta: meta("Premium Mega Millions Lead Generation — Globalleadscenter", "Lottery-interest audiences for authorised promotions with jurisdiction-aware targeting, eligibility criteria and privacy-conscious opt-in delivery.") }),
  component: () => <ServiceDetail slug="mega-millions" />,
});