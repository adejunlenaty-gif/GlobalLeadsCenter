import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { meta } from "@/components/SiteChrome";

export const Route = createFileRoute("/services_/pch")({
  head: () => ({ meta: meta("Premium PCH Lead Generation — Globalleadscenter", "Prize-and-promotion audience programmes with geographic targeting, documented consent and transparent campaign-specific delivery standards.") }),
  component: () => <ServiceDetail slug="pch" />,
});