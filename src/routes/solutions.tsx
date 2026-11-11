import { createFileRoute } from "@tanstack/react-router";
import { PhoneCall, Hash, Cloud, Building2, Voicemail } from "lucide-react";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { SOLUTIONS } from "@/lib/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: meta("Communication & Dialer Solutions — Globalleadscenter", "SIP trunk, DID number, cloud dialer, business calling and Google Voice integration support for campaign teams.") }),
  component: Solutions,
});

const ICONS = [PhoneCall, Hash, Cloud, Building2, Voicemail];

function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Communication & dialer solutions" intro="Beyond leads, we help campaign teams plan the calling infrastructure to reach them. Each solution is scoped and arranged per client after consultation." />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => { const I = ICONS[i] ?? PhoneCall; return (
            <article key={s.name} className="card-lift rounded-xl border bg-card p-8"><I className="h-7 w-7 text-gold" /><h2 className="mt-5 text-xl font-semibold">{s.name}</h2><p className="mt-3 text-sm text-muted-foreground">{s.desc}</p></article>
          ); })}
        </div>
        <p className="mt-12 rounded-xl border p-6 text-sm text-muted-foreground">Telephony services are arranged individually for each client and are subject to provider availability, local regulations and acceptable-use terms. Nothing is provisioned until requirements are agreed.</p>
      </section>
      <CtaBand />
    </>
  );
}
