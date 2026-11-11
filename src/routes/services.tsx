import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { SERVICES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { serviceQuoteSearch } from "@/lib/service-quotes";

const DETAIL_PAGES = {
  sweepstakes: "/services/sweepstakes",
  pch: "/services/pch",
  "first-hit": "/services/first-hit",
  "mega-millions": "/services/mega-millions",
} as const;

function detailPage(slug: string) {
  return Object.entries(DETAIL_PAGES).find(([key]) => key === slug)?.[1];
}

export const Route = createFileRoute("/services")({
  head: () => ({ meta: meta("Lead Generation Services — Globalleadscenter", "Sweepstakes, crypto, forex, investor, B2B, USA-targeted and custom lead generation, with consent-based collection and transparent sourcing.") }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services Directory" title="Specialist lead generation for every campaign" intro="Each programme is scoped to your brief, with campaign targeting, transparent sourcing, consent-based collection, data quality checks and privacy compliance at its core." />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <nav aria-label="Services" className="mb-14 flex flex-wrap gap-2">
          {SERVICES.map((s) => <a key={s.slug} href={`#${s.slug}`} className="rounded-full border px-3 py-1.5 text-xs text-muted-foreground hover:border-gold hover:text-gold">{s.name.replace(" Lead Generation", "")}</a>)}
        </nav>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const detail = detailPage(s.slug);
            return (
             <article key={s.slug} id={s.slug} className="card-lift flex h-full scroll-mt-28 flex-col rounded-xl border bg-card p-8">
              <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl font-semibold">{s.name}</h2>
              <p className="mt-3 text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 space-y-2">{s.focus.map((f) => <li key={f} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{f}</li>)}</ul>
               <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                 <Button asChild variant="link" className="px-0 font-semibold"><Link to="/contact" search={serviceQuoteSearch(s)}>Request a Quote →</Link></Button>
                 {detail && <Button asChild variant="link" className="px-0"><Link to={detail}>Service details →</Link></Button>}
               </div>
            </article>
          ); })}
        </div>
        <p className="mt-12 rounded-xl border p-6 text-sm text-muted-foreground">We only work on lawful campaigns operated by appropriately authorised businesses. Volumes, quality and outcomes depend on each brief and are agreed in writing before work begins.</p>
      </section>
      <CtaBand />
    </>
  );
}
