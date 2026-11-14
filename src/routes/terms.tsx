import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CtaBand, meta } from "@/components/SiteChrome";
import { ShieldCheck, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: meta(
      "Terms of Service & Replacement Warranty — Globalleadscenter",
      "Terms of service, lead brokerage disclosures, 100% replacement warranty terms, and buyer protection policies."
    ),
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      <PageHero
        eyebrow="Commercial Governance"
        title="TERMS OF SERVICE & BUYER PROTECTION"
        intro="Clear commercial agreements, transparent sourcing disclosures, and our comprehensive 100% replacement warranty on invalid records."
      />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="space-y-10 rounded-2xl border border-stone-800/15 bg-white/95 p-8 md:p-12 shadow-sm text-stone-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Commercial Standard 2026</span>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold mt-1">
              1. Sourcing Brokerage & Agency Role Disclosure
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed font-sans">
              Globalleadscenter acts as an international campaign planner, lead broker, and sourcing coordinator. To ensure complete buyer confidence and commercial transparency, we explicitly disclose the sourcing nature of every delivered batch before work commences:
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl border border-stone-800/15 bg-stone-50 p-4">
                <span className="font-bold uppercase tracking-wider text-stone-900 block mb-1">Directly Generated Batches</span>
                <p className="text-stone-600 leading-relaxed">
                  Batches captured directly through our proprietary landing funnels, survey tools, and promotional sweepstakes entry portals configured specifically for your brief.
                </p>
              </div>
              <div className="rounded-xl border border-stone-800/15 bg-stone-50 p-4">
                <span className="font-bold uppercase tracking-wider text-stone-900 block mb-1">Partner Sourced & Coordinated</span>
                <p className="text-stone-600 leading-relaxed">
                  Batches curated from vetted third-party sourcing networks and advertising syndicates, subjected to our rigorous HLR line screening and consent audits.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="h-6 w-6 text-emerald-800" />
              <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
                2. 100% Replacement Warranty Policy
              </h2>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              We stand behind data quality with a transparent, binding replacement guarantee:
            </p>
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 text-xs text-emerald-950 space-y-3">
              <p className="font-semibold text-sm text-emerald-900">
                Any record identified as disconnected, containing syntax errors, or showing historical duplication is replaced 1-to-1 free of charge.
              </p>
              <ul className="space-y-1.5 text-xs text-emerald-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  <span><strong>48-Hour Reporting Window:</strong> Submit dispute lists within 48 hours of batch receipt.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  <span><strong>Eligible Discrepancies:</strong> Disconnected lines, non-existent phone numbers, corrupted formatting, or identical duplicates from a previous order.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  <span><strong>Replacement Fulfillment:</strong> Replacement credits are issued within 24 business hours or included in your subsequent delivery cycle.</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
              3. First-Hit Freshness & Exclusivity Standards
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              Buyers must specify their exclusivity preference prior to campaign launch:
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-stone-700">
              <li className="p-3 rounded-lg border border-stone-800/10 bg-white">
                <strong className="text-stone-900 uppercase">Option A: Standard Fresh (&lt;24h Window)</strong> — Records are newly acquired within an agreed 0–24 hour freshness window with exact ISO capture timestamps. Leads are priced at standard tiered rates.
              </li>
              <li className="p-3 rounded-lg border border-stone-800/10 bg-white">
                <strong className="text-stone-900 uppercase">Option B: Dedicated Exclusive (1-to-1 Lock)</strong> — Records are exclusively assigned to your organization with contractual guarantees of zero secondary or parallel distribution for the agreed lock period.
              </li>
            </ul>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
              4. Buyer Compliance & Operating Obligations
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              All buyers must hold appropriate legal licenses in their operational jurisdictions. Lead data must only be utilized for lawful promotional, brokerage, or business outreach activities. Buyers agree to respect applicable Do-Not-Call (DNC) lists, honor unsubscribes promptly, and adhere to local outreach calling hours.
            </p>
          </div>

          <hr className="border-stone-800/10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-900">Questions about our terms?</p>
              <p className="text-xs text-stone-600">Contact our legal coordination desk at contact@globalleadscenter.com</p>
            </div>
            <Button asChild className="bg-stone-900 text-white hover:bg-stone-800">
              <Link to="/contact">Request a Campaign Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
