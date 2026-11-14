import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { SERVICES, CATEGORIES, ServiceCategory, CONTACT } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { serviceQuoteSearch } from "@/lib/service-quotes";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: meta(
      "All Lead Generation Services — Globalleadscenter",
      "Explore 14 specialized lead generation categories: Promotional sweepstakes, crypto, forex, accredited investors, B2B decision-makers, and custom campaign pipelines."
    ),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      <PageHero
        eyebrow="Specialist Services Directory"
        title="14 Targeted Lead Generation Programmes"
        intro="Every campaign is engineered around verified opt-in sourcing, documented consent, transparent delivery SLAs, and strict phone line validation."
      />

      <section className="mx-auto max-w-7xl px-5 py-14">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`pill-badge text-xs transition-colors ${
              activeCategory === "All"
                ? "bg-stone-900 text-[#FAF7F2] border-stone-900 shadow-md"
                : "bg-white/80 text-stone-700 border-stone-800/20 hover:bg-white"
            }`}
          >
            All Specialisms ({SERVICES.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pill-badge text-xs transition-colors ${
                activeCategory === cat.id
                  ? "bg-stone-900 text-[#FAF7F2] border-stone-900 shadow-md"
                  : "bg-white/80 text-stone-700 border-stone-800/20 hover:bg-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {filteredServices.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="bento-card p-6 md:p-8 flex flex-col justify-between scroll-mt-24 transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#FAF7F2]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="pill-badge bg-stone-200 text-stone-800 text-[11px] font-semibold">
                    {s.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-800 font-medium">
                    <Clock className="h-3.5 w-3.5" /> {s.freshnessWindow.split("(")[0]}
                  </span>
                </div>

                <h2 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold">
                  {s.name}
                </h2>

                <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                  {s.summary}
                </p>

                {/* Exclusivity Alert for First Hit */}
                {s.slug === "first-hit" && (
                  <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-950 font-medium">
                    <span className="font-bold uppercase tracking-wider">Buyer Choice:</span> Standard Fresh (0-24h window) or Dedicated Exclusive (1-to-1 lock).
                  </div>
                )}

                {/* Key Focus Highlights */}
                <ul className="mt-5 space-y-2 border-t border-stone-800/10 pt-4 text-xs text-stone-700">
                  {s.focus.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-800/10 flex flex-wrap items-center justify-between gap-3">
                <Button asChild size="sm" className="bg-stone-900 text-[#FAF7F2] hover:bg-stone-800">
                  <Link to="/contact" search={serviceQuoteSearch(s)}>
                    Request Quote <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="sm" className="border-stone-800/30 hover:bg-stone-200">
                  <Link to={`/services/${s.slug}`}>
                    Full Service Details <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Responsible Sourcing Disclaimer */}
        <div className="mt-14 rounded-2xl border border-stone-800/15 bg-white/70 p-6 md:p-8 text-xs text-stone-600 space-y-2">
          <p className="font-semibold text-stone-900 uppercase tracking-wider">
            Commercial Standards & Compliance Notice:
          </p>
          <p>
            Globalleadscenter provides audience acquisition services solely for lawful, authorized campaigns. Data collection is governed by transparent opt-in disclosures, documented consent records, and regional consumer protection frameworks (including TCPA and GDPR). Volumes, delivery schedules, and screening criteria are agreed in writing in your campaign agreement prior to launch.
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
