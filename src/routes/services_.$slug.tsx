import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { meta } from "@/components/SiteChrome";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((item) => item.slug === params.slug);
    const title = s ? `${s.name} — Globalleadscenter` : "Lead Generation Service — Globalleadscenter";
    const desc = s ? s.summary : "Targeted, consent-based lead generation for international campaigns.";
    return { meta: meta(title, desc) };
  },
  component: ServiceRouteComponent,
});

function ServiceRouteComponent() {
  const { slug } = Route.useParams();
  return <ServiceDetail slug={slug} />;
}
