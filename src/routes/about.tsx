import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { WHY } from "./index";
import profile from "@/assets/primevalue-hub-profile.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta("About Us — Globalleadscenter", "Learn about Globalleadscenter, an international agency providing targeted, consent-based lead generation for businesses worldwide.") }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="An international agency built on responsible lead generation" intro="Globalleadscenter partners with businesses and campaign operators to plan and deliver targeted lead programmes across industries and regions." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <img src={profile.url} alt="Primevalue Hub — supplied profile artwork" width={768} height={768} className="mb-8 aspect-square w-full max-w-80 rounded-lg object-contain" />
          <h2 className="text-3xl font-semibold">Who we are</h2>
          <p className="mt-5 text-muted-foreground">We are a team of campaign planners, sourcing specialists and project coordinators. Our work begins with understanding your offer, your audience and the rules that apply in your markets, and ends with organised, documented lead delivery.</p>
          <p className="mt-4 text-muted-foreground">We focus on transparency: you know how leads are sourced, which consent was given, and how data is handled from collection to handover.</p>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <h2 className="text-2xl font-semibold">Our approach</h2>
          <ol className="mt-6 space-y-5">
            {["Discovery — we review your brief, markets and compliance needs.", "Targeting — we define audience criteria and sourcing channels.", "Collection — consent-based capture with documented origins.", "Screening — format and duplicate checks before delivery.", "Delivery & review — agreed formats, schedules and feedback."].map((s, i) => (
              <li key={s} className="flex gap-4"><span className="font-display text-2xl text-gold">0{i + 1}</span><span className="text-muted-foreground">{s}</span></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-semibold">What we stand for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: I, t, d }) => <div key={t} className="rounded-xl border p-6"><I className="h-6 w-6 text-gold" /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
