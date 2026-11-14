import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, meta } from "@/components/SiteChrome";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: meta(
      "Privacy Policy & Data Handling Standards — Globalleadscenter",
      "Comprehensive information on our consent-based collection, TCPA/GDPR compliance, data retention, encryption standards, and subject rights."
    ),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      <PageHero
        eyebrow="Compliance & Governance"
        title="PRIVACY POLICY & DATA HANDLING"
        intro="Our strict privacy governance framework ensures affirmative consent, transparent sourcing audit trails, and bank-grade data security across all campaigns."
      />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="space-y-10 rounded-2xl border border-stone-800/15 bg-white/95 p-8 md:p-12 shadow-sm text-stone-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Effective Date: January 2026</span>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold mt-1">
              1. Principles of Responsible Data Collection
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed font-sans">
              Globalleadscenter ("we", "us", or "our") operates strictly as a compliant lead brokerage and campaign sourcing coordinator. We never engage in web scraping, unauthorized database harvesting, or unverified cold directory sharing. Every prospect record generated or brokered through our platform originates from affirmative consumer opt-in funnels where clear disclosures were presented prior to submission.
            </p>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
              2. Sourcing Consent & Audit Trails
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              To satisfy regional regulatory mandates—including the US Telephone Consumer Protection Act (TCPA), the UK Data Protection Act, and the EU General Data Protection Regulation (GDPR)—every delivered lead includes verifiable audit metadata:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Opt-In Timestamp:</strong> Exact ISO 8601 UTC timestamp of submission.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Originating URL:</strong> Verified domain where the prospect entered information.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Consent Disclosures:</strong> Verifiable opt-in wording agreed to by the user.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>IP Address:</strong> Logged at point of capture for digital verification.</span>
              </li>
            </ul>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
              3. Strict Financial Data Boundaries (Banking & Web3)
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              We enforce an uncompromising zero-tolerance policy regarding sensitive personal financial data:
            </p>
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50/60 p-4 text-xs text-red-950 font-medium space-y-2">
              <p>
                <strong>Zero Financial Credentials:</strong> Under no circumstances do we collect, process, or transmit private bank account numbers, passwords, PINs, card CVVs, crypto wallet private keys, seed phrases, or credit balances.
              </p>
              <p>
                <strong>Marketing Inquiries Only:</strong> Banking and Financial Leads refer exclusively to consumers who have submitted inquiries requesting information on retail financial products, commercial merchant solutions, or authorized trading services.
              </p>
            </div>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
              4. Data Retention, Encryption & Storage
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              Inquiry forms and project brief submissions are transmitted via 256-bit TLS encryption and stored in secure Supabase databases with strict Row-Level Security (RLS) policies. Campaign files transferred to clients via secure CSV or SFTP are encrypted and purged from intermediary delivery servers 30 days after handover.
            </p>
          </div>

          <hr className="border-stone-800/10" />

          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-stone-900 font-bold">
              5. Consumer & Subject Rights
            </h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              Any individual has the right to request access to records concerning them, request rectification of inaccurate data, or request immediate removal from our systems. Inquiries regarding opt-outs or data subject requests should be directed to our Data Protection Coordinator at:
            </p>
            <div className="mt-3 rounded-lg border border-stone-800/10 bg-stone-100 p-3 text-xs text-stone-800">
              <strong>Email:</strong> privacy@globalleadscenter.com / contact@globalleadscenter.com<br />
              <strong>Response SLA:</strong> Within 48 business hours.
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
