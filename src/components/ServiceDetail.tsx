import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Database,
  Globe,
  AlertTriangle,
  Lock,
  Layers,
  Sparkles,
  Send,
  MessageCircle,
} from "lucide-react";
import { PageHero, ContactButtons } from "./SiteChrome";
import { Button } from "./ui/button";
import { SERVICES, PACKAGES, CONTACT } from "@/lib/site";
import { serviceQuoteSearch } from "@/lib/service-quotes";

export function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="mt-3 text-stone-600">The requested lead generation programme does not exist.</p>
        <Button asChild className="mt-6">
          <Link to="/services">Back to All Services</Link>
        </Button>
      </div>
    );
  }

  const isFirstHit = service.slug === "first-hit";

  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-stone-800/10 bg-[#CDC4BC]/70 px-5 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs font-medium text-stone-600">
          <Link to="/" className="hover:text-stone-900">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900">
            Services
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">{service.name}</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="border-b border-stone-800/15 bg-[#CDC4BC] pt-12 pb-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-stone-900 text-[#FAF7F2] border-stone-800">
              {service.category}
            </span>
            <span className="pill-badge bg-amber-100 text-amber-900 border-amber-300">
              <Clock className="h-3 w-3" /> SLA: {service.freshnessWindow}
            </span>
            <span className="pill-badge bg-emerald-100 text-emerald-900 border-emerald-300">
              <ShieldCheck className="h-3 w-3" /> 100% Replacement Warranty
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-stone-900 font-bold max-w-4xl">
            {service.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base sm:text-lg text-stone-700 leading-relaxed">
            {service.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-stone-900 text-[#FAF7F2] hover:bg-stone-800">
              <Link to="/contact" search={serviceQuoteSearch(service)}>
                Request a Proposal <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-stone-800/30 bg-stone-100/80 px-4 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-900 hover:bg-white"
            >
              <Send className="h-4 w-4 text-sky-600" /> Chat on Telegram
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-stone-800/30 bg-stone-100/80 px-4 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-900 hover:bg-white"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp Line
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
          <div className="space-y-10">
            {/* FIRST HIT EXCLUSIVITY VS FRESHNESS GUIDE (prominent callout for First Hit) */}
            {isFirstHit && (
              <div className="rounded-2xl border-2 border-amber-600/40 bg-amber-50/90 p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-700 shrink-0 mt-1" />
                  <div>
                    <h2 className="font-display text-xl uppercase tracking-wider text-amber-950 font-bold">
                      Buyer Distinction: Exclusivity vs. Freshness Window
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-widest text-amber-800 font-semibold">
                      Please read before placing a First Hit order
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-amber-300 bg-white/90 p-4">
                    <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                      <Clock className="h-4 w-4 text-amber-600" />
                      Option A: Standard Fresh Delivery
                    </div>
                    <p className="mt-2 text-xs text-stone-700 leading-relaxed">
                      Leads are newly generated and delivered within a guaranteed 0-24 hour window of user opt-in, complete with exact ISO capture timestamps. Economical tier designed for high-velocity outbound teams where fast dialing speed is priority.
                    </p>
                    <span className="mt-3 inline-block rounded bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
                      Freshness Window SLA: &lt; 24h
                    </span>
                  </div>

                  <div className="rounded-xl border border-amber-400 bg-white/90 p-4 shadow-sm">
                    <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                      <Lock className="h-4 w-4 text-emerald-600" />
                      Option B: Dedicated Exclusive Delivery
                    </div>
                    <p className="mt-2 text-xs text-stone-700 leading-relaxed">
                      The record is locked to your organization on a 1-to-1 basis. Zero secondary buyers, zero concurrent campaign routing. Contractually reserved for 30, 60, or 90 days. Ideal for high-ticket offers and proprietary campaigns.
                    </p>
                    <span className="mt-3 inline-block rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-900">
                      Strict 1-to-1 Client Lock
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t border-amber-200/80 pt-3 text-xs text-amber-900 font-medium">
                  {service.exclusivityNote}
                </div>
              </div>
            )}

            {/* In-Depth Programme Scope */}
            <div className="bento-card p-6 md:p-8 space-y-6">
              <h2 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold border-b border-stone-800/10 pb-4">
                Programme Scope & Deliverables
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                {service.details.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Data Schema & Fields Captured */}
            <div className="bento-card p-6 md:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-800/10 pb-4">
                <div>
                  <h2 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold">
                    Delivered Data Fields
                  </h2>
                  <p className="text-xs text-stone-600 mt-1">
                    Every lead file is formatted to your CRM schema and includes compliance audit tokens
                  </p>
                </div>
                <Database className="h-6 w-6 text-stone-600" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {service.fieldsCaptured.map((field) => (
                  <div
                    key={field}
                    className="flex items-center gap-2.5 rounded-lg border border-stone-800/10 bg-stone-100/80 p-3 text-xs font-semibold text-stone-800"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sourcing & Verification Methodology */}
            <div className="bento-card p-6 md:p-8 space-y-5">
              <h2 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold border-b border-stone-800/10 pb-4">
                Sourcing Channels & Verification
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="font-display text-sm uppercase tracking-wide text-stone-900 font-bold">
                    Acquisition Channels
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {service.sourcingMethods.map((method) => (
                      <li key={method} className="flex items-start gap-2">
                        <span className="text-amber-700 font-bold">›</span>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-sm uppercase tracking-wide text-stone-900 font-bold">
                    Quality Gate Controls
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>HLR carrier ping to verify line connectability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>100% duplicate scrubbing against historical batches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>Affirmative consent timestamp and IP address proof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>Strict redaction of sensitive payment details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Aside: Key Specs, Pricing, and Action Box */}
          <aside className="space-y-6">
            <div className="bento-card p-6 space-y-5 sticky top-24">
              <h2 className="font-display text-lg uppercase tracking-wider text-stone-900 font-bold border-b border-stone-800/10 pb-3">
                Campaign Specifications
              </h2>

              <dl className="space-y-3.5 text-xs">
                <div>
                  <dt className="text-stone-500 font-semibold uppercase tracking-wider">Vertical Category</dt>
                  <dd className="mt-1 font-bold text-stone-900">{service.category}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 font-semibold uppercase tracking-wider">Freshness Window SLA</dt>
                  <dd className="mt-1 font-bold text-amber-800">{service.freshnessWindow}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 font-semibold uppercase tracking-wider">Minimum Order Volume</dt>
                  <dd className="mt-1 font-bold text-stone-900">{service.minVolume}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 font-semibold uppercase tracking-wider">Top Regional Coverage</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5 pt-1">
                    {service.popularCountries.map((c) => (
                      <span key={c} className="rounded bg-stone-200/80 px-2 py-0.5 text-[11px] font-medium text-stone-800">
                        {c}
                      </span>
                    ))}
                  </dd>
                </div>

                <div>
                  <dt className="text-stone-500 font-semibold uppercase tracking-wider">Delivery Formats</dt>
                  <dd className="mt-1 text-stone-700">Encrypted CSV, Excel, SFTP drop, or Real-Time Webhook</dd>
                </div>
              </dl>

              <div className="rounded-xl border border-emerald-600/30 bg-emerald-50/70 p-3.5 text-xs text-emerald-900">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" /> 100% Replacement Guarantee
                </div>
                Any invalid numbers or format discrepancies reported within 48 hours are replaced free of charge.
              </div>

              <div className="pt-2 space-y-3">
                <Button asChild className="w-full bg-stone-900 text-[#FAF7F2] hover:bg-stone-800 py-6 font-display uppercase tracking-wider text-sm font-bold shadow-md">
                  <Link to="/contact" search={serviceQuoteSearch(service)}>
                    Request Quote for This Service →
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full border-stone-800/30 hover:bg-stone-200">
                  <Link to="/services">
                    <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to All Services
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Package Tiers for this Service */}
      <section className="border-t border-stone-800/15 bg-[#CDC4BC] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-script text-2xl text-stone-700">Flexible Delivery</span>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider text-stone-900 font-bold mt-1">
              Select Your Campaign Package
            </h2>
            <p className="mt-2 text-sm text-stone-700">
              Volumes scaled to your sales desk capacity with guaranteed delivery SLAs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bento-card p-6 flex flex-col justify-between ${
                  pkg.id === "growth" ? "ring-2 ring-stone-900 shadow-xl bg-white" : "bg-[#FAF7F2]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="pill-badge bg-stone-900 text-[#FAF7F2] text-[10px]">
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-stone-500 font-semibold">{pkg.freshness}</span>
                  </div>

                  <h3 className="font-display text-xl uppercase tracking-wider text-stone-900 font-bold mt-4">
                    {pkg.name}
                  </h3>

                  <div className="mt-2 font-display text-2xl text-amber-800 font-bold">
                    {pkg.volume}
                  </div>

                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">{pkg.idealFor}</p>

                  <ul className="mt-5 space-y-2 border-t border-stone-800/10 pt-4 text-xs text-stone-700">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/10">
                  <Button asChild className="w-full bg-stone-900 text-[#FAF7F2] hover:bg-stone-800 text-xs font-bold uppercase tracking-wider">
                    <Link to="/contact" search={{ service: service.name }}>
                      Choose {pkg.name} →
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
