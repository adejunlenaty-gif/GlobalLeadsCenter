import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "./SiteChrome";
import { Button } from "./ui/button";
import { SERVICES } from "@/lib/site";
import { serviceQuoteSearch } from "@/lib/service-quotes";

export function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service?.details) return null;
  return (
    <>
      <PageHero eyebrow="Premium Lead Generation" title={service.name} intro={service.summary} />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <Button asChild variant="link" className="mb-10 px-0"><Link to="/services" hash={service.slug}><ArrowLeft />All services</Link></Button>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">A programme built around your brief</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">{service.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <aside className="border-t pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-2xl font-semibold">Service standards</h2>
            <ul className="mt-6 space-y-4">{service.focus.map((benefit) => <li key={benefit} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{benefit}</li>)}</ul>
            <Button asChild className="mt-8"><Link to="/contact" search={serviceQuoteSearch(service)}>Request a Quote<ArrowRight /></Link></Button>
          </aside>
        </div>
      </section>
    </>
  );
}