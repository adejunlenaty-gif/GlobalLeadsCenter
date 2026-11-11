import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Crosshair, Globe2, Handshake, Eye, ShieldCheck, Layers, Scale, PhoneCall, Database, Users, BarChart3 } from "lucide-react";
import hero from "@/assets/campaign-growth-graphic.png.asset.json";
import { CtaBand, ContactButtons, meta } from "@/components/SiteChrome";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("Globalleadscenter — Connecting Businesses With Quality Leads", "International lead generation agency delivering campaign-specific, consent-based leads for businesses and campaign operators worldwide.") }),
  component: Home,
});

export const WHY = [
  { icon: Globe2, t: "International business focus", d: "We plan campaigns across countries, languages and time zones." },
  { icon: Crosshair, t: "Campaign-specific targeting", d: "Every audience is defined from your brief, not a generic list." },
  { icon: Handshake, t: "Professional project coordination", d: "A dedicated point of contact from scoping to delivery." },
  { icon: Eye, t: "Transparent communication", d: "Clear sourcing explanations and regular status updates." },
  { icon: ShieldCheck, t: "Privacy-conscious data handling", d: "Consent-based collection and careful handling of personal data." },
  { icon: Layers, t: "Flexible custom solutions", d: "Fields, formats and volumes adapted to your operation." },
  { icon: Scale, t: "Responsible lead generation", d: "We only support lawful, appropriately authorised campaigns." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div className="fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Your Global Partner in Targeted Lead Generation</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Connecting Businesses With <span className="text-gold-gradient">Quality Leads.</span> Creating Opportunities Worldwide.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">Globalleadscenter is an international lead generation agency. We design campaign-specific programmes for businesses and campaign operators, built on transparent sourcing, consent-based collection and privacy-conscious delivery.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 font-semibold text-navy-deep">Explore Our Services <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="rounded-md border px-6 py-3 font-semibold hover:border-gold hover:text-gold">Request a Quote</Link>
            </div>
            <div className="mt-8"><ContactButtons compact /></div>
          </div>
          <img src={hero.url} alt="Campaign growth graphic showing a laptop with rising charts" width={786} height={768} className="w-full rounded-lg border shadow-gold" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Services</p><h2 className="mt-3 text-3xl font-semibold md:text-4xl">Lead generation across 14 specialisms</h2></div>
          <Link to="/services" className="inline-flex items-center gap-2 text-gold">View all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <Link key={s.slug} to="/services" hash={s.slug} className="card-lift rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Globalleadscenter</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">A responsible partner for serious campaigns</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-xl border p-6"><I className="h-6 w-6 text-gold" /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Capabilities</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">End-to-end campaign support</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[{ i: Users, t: "Audience strategy", d: "Defining who to reach, where and why." }, { i: Database, t: "Sourcing & collection", d: "Consent-based capture with documented origins." }, { i: BarChart3, t: "Quality screening", d: "Duplicate and format checks before handover." }, { i: PhoneCall, t: "Communication solutions", d: "SIP, DID and dialer consultation.", to: true }].map(({ i: I, t, d, to }) => (
            <div key={t} className="card-lift rounded-xl border bg-card p-6"><I className="h-6 w-6 text-gold" /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p>{to && <Link to="/solutions" className="mt-3 inline-block text-sm text-gold">See solutions →</Link>}</div>
          ))}
        </div>
      </section>

      <section className="border-y bg-navy-deep">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Portfolio</p><h2 className="mt-3 text-3xl font-semibold md:text-4xl">How our campaigns are structured</h2></div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-gold">View portfolio <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["B2B Lead Generation", "USA Targeted Lead Generation", "Forex Lead Generation"].map((c) => (
              <div key={c} className="rounded-xl border bg-card p-6"><span className="rounded-full border px-3 py-1 text-xs text-gold">Sample layout</span><h3 className="mt-4 text-xl font-semibold">{c}</h3><p className="mt-2 text-sm text-muted-foreground">Illustrative campaign structure. Verified case studies will be published with client permission.</p></div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
