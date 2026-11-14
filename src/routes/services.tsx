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
  FileCheck2,
  Sliders,
  Database,
  Truck,
  Headphones,
  Check,
} from "lucide-react";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { SERVICES, CATEGORIES, ServiceCategory, CONTACT, STRUCTURED_APPROACH, POST_PURCHASE_WORKFLOW } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { serviceQuoteSearch } from "@/lib/service-quotes";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: meta(
      "All Lead Generation Services (15) — Globalleadscenter",
      "Explore 15 specialized lead generation categories across 3 dedicated groups: Promotional & Sweepstakes, Financial & Investment, and Specialized Outreach."
    ),
  }),
  component: ServicesPage,
});

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      <PageHero
        eyebrow="Specialist Catalogue · 15 Services"
        title="OUR LEAD SOLUTIONS & SPECIALISMS"
        intro="Structured into three distinct operational groups: Promotional & Sweepstakes, Financial & Investment, and Specialized High-Intent Outreach."
      />

      {/* ─────────────────────────────────────────────────────────────
          A STRUCTURED APPROACH FEATURE BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-stone-800/15 bg-[#CDC4BC] py-8">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-700">
              OPERATIONAL STANDARD
            </span>
            <h2 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-stone-900 font-bold mt-1">
              A structured approach to specialist lead sourcing and campaign delivery
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STRUCTURED_APPROACH.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl border border-stone-800/15 bg-white/80 p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-stone-900 text-[11px] font-bold text-white">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SERVICES DIRECTORY WITH CATEGORY TABS
      ───────────────────────────────────────────────────────────── */}
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
            All 15 Specialisms
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
              {cat.categoryNumber}: {cat.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="bento-card p-6 md:p-7 flex flex-col justify-between scroll-mt-24 transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#FAF7F2]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="pill-badge bg-stone-200 text-stone-800 text-[10px] font-semibold">
                    {s.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-amber-800 font-medium">
                    <Clock className="h-3 w-3" /> {s.freshnessWindow.split("(")[0]}
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-wider text-stone-900 font-bold">
                  {s.name}
                </h3>

                <p className="mt-2.5 text-xs text-stone-700 leading-relaxed">
                  {s.summary}
                </p>

                {/* Exclusivity Alert for First Hit */}
                {s.slug === "first-hit" && (
                  <div className="mt-3.5 rounded-lg border border-amber-300 bg-amber-50 p-2.5 text-[11px] text-amber-950 font-medium">
                    <span className="font-bold uppercase tracking-wider">Buyer Choice:</span> Standard Fresh (0-24h window) or Dedicated Exclusive (1-to-1 lock).
                  </div>
                )}

                {/* Banking Notice */}
                {s.slug === "banking" && (
                  <div className="mt-3.5 rounded-lg border border-blue-200 bg-blue-50 p-2.5 text-[11px] text-blue-950 font-medium">
                    <span className="font-bold uppercase tracking-wider">Zero Account Data:</span> Inquiries for banking products only. Never collects private bank account details or balances.
                  </div>
                )}

                {/* Investor Notice */}
                {s.slug === "investor" && (
                  <div className="mt-3.5 rounded-lg border border-stone-300 bg-stone-100 p-2.5 text-[11px] text-stone-800 font-medium">
                    <span className="font-bold uppercase tracking-wider">Investor Interest:</span> Prospective inquiries matched to criteria; not described as accredited unless verified.
                  </div>
                )}

                {/* Key Focus Highlights */}
                <ul className="mt-4 space-y-1.5 border-t border-stone-800/10 pt-3.5 text-xs text-stone-700">
                  {s.focus.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/10 flex flex-wrap items-center justify-between gap-2">
                <Button asChild size="sm" className="bg-stone-900 text-[#FAF7F2] hover:bg-stone-800 text-xs">
                  <Link to="/contact" search={serviceQuoteSearch(s)}>
                    Request Quote <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="sm" className="border-stone-800/30 hover:bg-stone-200 text-xs">
                  <Link to={`/services/${s.slug}`}>
                    Details <ChevronRight className="h-3 w-3 ml-0.5" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          WHAT HAPPENS AFTER YOU PAY: 5 POST-PURCHASE STAGES
      ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-stone-800/15 bg-[#CEC4BC] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-700">
              Buyer Assurance & Transparency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-stone-900 font-bold mt-1">
              WHAT HAPPENS AFTER YOU ORDER
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed font-sans">
              A serious buyer doesn't just want a list of services. You need to know exactly how your data is sourced,
              screened, formatted, and delivered after you submit your campaign brief.
            </p>
          </div>

          <div className="space-y-6">
            {POST_PURCHASE_WORKFLOW.map((step, idx) => (
              <div
                key={step.step}
                className="overflow-hidden rounded-2xl border border-stone-800/20 bg-white/95 shadow-md"
              >
                <div className="grid lg:grid-cols-12 items-center">
                  <div className="p-6 sm:p-8 lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-full bg-stone-900 px-3 py-1 font-display text-xs font-bold text-white tracking-widest">
                        STAGE {step.step}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900 block mb-2">
                        Key Verification Deliverables:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs text-stone-800">
                        {step.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 h-64 lg:h-full min-h-[240px] bg-stone-950 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-stone-800/20">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="pill-badge bg-stone-900/90 text-white border-stone-700 text-[10px] backdrop-blur-sm">
                        Documented Verification Protocol
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Brokerage Transparency & Replacement Guarantee Box */}
          <div className="mt-12 rounded-2xl border border-stone-800/20 bg-[#231F1D] text-[#FAF7F2] p-7 md:p-9 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="pill-badge bg-amber-400 text-stone-950 text-[10px] font-bold uppercase">
                  TRANSPARENCY MANDATE
                </span>
                <h4 className="font-display text-xl uppercase tracking-wider text-[#FAF7F2] font-bold">
                  Brokerage Disclosure & 100% Replacement Warranty
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  As an international lead brokerage and campaign coordinator, we clearly disclose whether each delivery batch is directly generated through our internal assets or sourced via vetted partner networks. Every order includes our unconditional 48-hour warranty: any invalid number or syntax error is replaced 1-to-1 without dispute.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button asChild className="bg-[#FAF7F2] text-stone-900 hover:bg-stone-200">
                  <Link to="/contact">
                    Request Lead Availability <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-stone-700 text-[#FAF7F2] hover:bg-stone-800">
                  <Link to="/terms">
                    View Replacement Policy
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
