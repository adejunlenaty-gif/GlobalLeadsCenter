import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  CheckCircle2,
  Send,
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight,
  Phone,
  AlertCircle,
} from "lucide-react";
import { ContactButtons, PageHero, meta } from "@/components/SiteChrome";
import { SERVICES, CONTACT, PACKAGES } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string | undefined; package?: string | undefined } => ({
    service: typeof s["service"] === "string" ? s["service"] : undefined,
    package: typeof s["package"] === "string" ? s["package"] : undefined,
  }),
  head: () => ({
    meta: meta(
      "Contact & Request a Campaign Quote — Globalleadscenter",
      "Request a customized proposal for verified lead generation. Direct contact via Telegram, WhatsApp, and official email with response times under 30 minutes."
    ),
  }),
  component: ContactPage,
});

const schema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  company: z.string().trim().min(1, "Please enter your company name").max(150),
  service: z.string().min(1, "Choose a service").max(100),
  target_country: z.string().trim().min(1, "Enter a target country or region").max(100),
  requirements: z.string().trim().max(1000).optional(),
  details: z.string().trim().max(3000).optional(),
});

function buildQuoteMessage(data: {
  full_name: string;
  email: string;
  company: string;
  service: string;
  target_country: string;
  requirements?: string | null;
  details?: string | null;
}) {
  return [
    `🔔 NEW CAMPAIGN QUOTE REQUEST — GlobalLeadsCenter`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 Full Name: ${data.full_name}`,
    `🏢 Company: ${data.company}`,
    `📧 Email: ${data.email}`,
    `🎯 Service: ${data.service}`,
    `🌍 Target Market: ${data.target_country}`,
    data.requirements ? `📊 Volume / Timeline: ${data.requirements}` : null,
    data.details ? `📝 Requirements: ${data.details}` : null,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Direct Request via GlobalLeadsCenter Portal`,
  ]
    .filter(Boolean)
    .join("\n");
}

const inputClass =
  "w-full rounded-xl border border-stone-800/20 bg-white/90 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:border-stone-900 focus:ring-1 focus:ring-stone-900";

function Field({
  name,
  label,
  errors,
  children,
}: {
  name: string;
  label: string;
  errors: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-700">
        {label}
      </span>
      {children}
      {errors[name] && (
        <span className="mt-1 flex items-center gap-1 text-xs text-red-700 font-semibold">
          <AlertCircle className="h-3 w-3" /> {errors[name]}
        </span>
      )}
    </label>
  );
}

function ContactPage() {
  const search = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [submittedBrief, setSubmittedBrief] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const targetChannel = (form.dataset.targetChannel as "telegram" | "whatsapp") || "telegram";
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    const briefText = buildQuoteMessage({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      company: parsed.data.company,
      service: parsed.data.service,
      target_country: parsed.data.target_country,
      requirements: parsed.data.requirements || null,
      details: parsed.data.details || null,
    });
    setSubmittedBrief(briefText);

    // Try saving to Supabase in background without blocking buyer
    try {
      await supabase.from("quote_requests").insert({
        full_name: parsed.data.full_name,
        email: parsed.data.email,
        company: parsed.data.company,
        service: parsed.data.service,
        target_country: parsed.data.target_country,
        requirements: parsed.data.requirements || null,
        details: parsed.data.details || parsed.data.requirements || "Quote request",
      });
    } catch (err) {
      console.warn("Supabase quote insert:", err);
    }

    // Auto-copy brief to clipboard for convenient pasting
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(briefText);
      }
    } catch {}

    // Dispatch directly to WhatsApp or Telegram
    if (targetChannel === "whatsapp") {
      const waUrl = `https://wa.me/447456067627?text=${encodeURIComponent(briefText)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } else {
      window.open(CONTACT.telegram, "_blank", "noopener,noreferrer");
    }

    setStatus("done");
  }

  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      <PageHero
        eyebrow="Direct Campaign Intake"
        title="Request a Custom Lead Generation Proposal"
        intro="Tell us about your audience criteria, target geography, and volume needs. Our campaign coordinators respond promptly with a structured proposal."
      />

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Contact & SLAs */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bento-card p-6 md:p-8 space-y-6 bg-[#FAF7F2]">
              <div>
                <span className="pill-badge bg-emerald-100 text-emerald-900 border-emerald-300 text-xs">
                  <Clock className="h-3 w-3" /> Response Time Guarantee
                </span>
                <h2 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold mt-3">
                  Direct Communications
                </h2>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  Need immediate pricing or campaign scoping? Reach our senior desk coordinators directly on verified messaging lines:
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-stone-800/15 bg-white p-3.5 transition-transform hover:scale-[1.02] shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-sky-600 text-white">
                      <Send className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Telegram Official Desk</div>
                      <div className="text-[11px] text-stone-500">Live Acquisition Line</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700">Online Now</span>
                </a>

                <a
                  href={CONTACT.telegramAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-stone-800/15 bg-white p-3.5 transition-transform hover:scale-[1.02] shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-sky-700 text-white">
                      <Send className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Telegram Channel</div>
                      <div className="text-[11px] text-stone-500">Inventory Updates</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700">Online</span>
                </a>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-stone-800/15 bg-white p-3.5 transition-transform hover:scale-[1.02] shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-600 text-white">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">WhatsApp Business</div>
                      <div className="text-[11px] text-stone-500">+44 7456 067627</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700">Verified Line</span>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-between rounded-xl border border-stone-800/15 bg-white p-3.5 transition-transform hover:scale-[1.02] shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-stone-900 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Official Desk Email</div>
                      <div className="text-[11px] text-stone-500">{CONTACT.email}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-stone-600">&lt; 30m SLA</span>
                </a>
              </div>

              <div className="rounded-xl border border-stone-800/10 bg-stone-100/70 p-4 text-xs text-stone-600 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-stone-900">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" /> Confidential Brief Intake
                </div>
                <p>
                  Your campaign brief, target criteria, and proprietary offer details are treated with institutional non-disclosure and used solely to formulate your proposal.
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Comprehensive Proposal Form */}
          <div className="lg:col-span-8">
            <div className="bento-card p-6 md:p-10 bg-[#FAF7F2]">
              {status === "done" ? (
                <div className="py-10 text-center space-y-6">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-800 shadow-sm">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900 font-bold">
                      Campaign Proposal Brief Ready!
                    </h2>
                    <p className="max-w-md mx-auto text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
                      Your campaign brief has been compiled. Connect with our desk directly on <strong>Telegram</strong> or <strong>WhatsApp</strong> to lock in volume pricing and delivery schedules immediately.
                    </p>
                  </div>

                  {/* Direct Action Buttons to Telegram & WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500 shadow-md transition-colors"
                    >
                      <Send className="h-4 w-4" /> Open Telegram Desk ↗
                    </a>
                    <a
                      href={`https://wa.me/447456067627?text=${encodeURIComponent(submittedBrief)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-600 shadow-md transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" /> Send on WhatsApp ↗
                    </a>
                  </div>

                  {/* Formatted Brief Preview & Copy Box */}
                  {submittedBrief && (
                    <div className="max-w-xl mx-auto text-left rounded-xl bg-stone-900 text-[#FAF7F2] p-4 text-xs font-mono border border-stone-800 shadow-inner space-y-2">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                        <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                          Prepared Brief Summary (Auto-Copied to Clipboard)
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof navigator !== "undefined" && navigator.clipboard) {
                              navigator.clipboard.writeText(submittedBrief);
                              alert("Copied brief to clipboard!");
                            }
                          }}
                          className="text-[10px] text-stone-400 hover:text-white underline cursor-pointer"
                        >
                          Copy Brief
                        </button>
                      </div>
                      <pre className="whitespace-pre-wrap text-[11px] text-stone-300 font-sans leading-relaxed">
                        {submittedBrief}
                      </pre>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      onClick={() => setStatus("idle")}
                      variant="outline"
                      className="border-stone-800/30 hover:bg-stone-200 cursor-pointer"
                    >
                      ← Submit Another Brief
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold">
                      Campaign Brief & Requirements
                    </h2>
                    <p className="text-xs text-stone-600 mt-1">
                      Complete this intake form to receive a structured quote with volume pricing and delivery SLAs.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field errors={errors} name="full_name" label="Full Name">
                      <input
                        name="full_name"
                        placeholder="e.g. Alex Henderson"
                        className={inputClass}
                        maxLength={100}
                      />
                    </Field>

                    <Field errors={errors} name="email" label="Business Email">
                      <input
                        name="email"
                        type="email"
                        placeholder="alex@company.com"
                        className={inputClass}
                        maxLength={255}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field errors={errors} name="company" label="Company / Trading Name">
                      <input
                        name="company"
                        placeholder="e.g. Apex Media Group"
                        className={inputClass}
                        maxLength={150}
                      />
                    </Field>

                    <Field errors={errors} name="service" label="Target Specialism">
                      <select
                        name="service"
                        defaultValue={search.service ?? ""}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select a lead generation programme or package
                        </option>
                        <optgroup label="💎 Premium Sweepstakes Packages (PCH & Mega Millions)">
                          <option value="Premium Sweepstakes $100 Package (150 Leads)">$100 — 150 Leads (Starter Test)</option>
                          <option value="Premium Sweepstakes $200 Package (300 Leads)">$200 — 300 Leads (Growth Pipeline)</option>
                          <option value="Premium Sweepstakes $300 Package (500 Leads)">$300 — 500 Leads (Better Value!)</option>
                          <option value="Premium Sweepstakes $500 Package (1,000 Leads)">$500 — 1,000 Leads (Most Popular & Best Value!)</option>
                          <option value="Custom Enterprise Volume (2,500 - 10,000+ Leads)">Custom Enterprise Volume (2,500 - 10,000+ Leads)</option>
                        </optgroup>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name} ({s.category})
                          </option>
                        ))}
                        <option value="Communication & Dialer Solutions">
                          Communication & Dialer Solutions
                        </option>
                        <option value="Custom Bespoke Acquisition">
                          Custom Bespoke Acquisition
                        </option>
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field errors={errors} name="target_country" label="Target Geography / Countries">
                      <input
                        name="target_country"
                        placeholder="e.g. USA (Tier 1 States), UK, Canada, Australia"
                        className={inputClass}
                        maxLength={100}
                      />
                    </Field>

                    <Field errors={errors} name="requirements" label="Desired Volume & Cadence">
                      <input
                        name="requirements"
                        defaultValue={search.package ? `Package: ${search.package}` : ""}
                        placeholder="e.g. 2,500 leads/week, Daily batch delivery, Standard Fresh"
                        className={inputClass}
                        maxLength={1000}
                      />
                    </Field>
                  </div>

                  <Field errors={errors} name="details" label="Campaign Context & Qualification Criteria (Optional)">
                    <textarea
                      name="details"
                      rows={5}
                      placeholder="Please specify: Your campaign offer, required qualification fields (e.g. age bracket, trading experience, loan amount), delivery format (CSV / API webhook), and desired launch timeline..."
                      className={inputClass}
                      maxLength={3000}
                    />
                  </Field>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-stone-800/10">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          const form = e.currentTarget.closest("form");
                          if (form) {
                            form.dataset.targetChannel = "telegram";
                            form.requestSubmit();
                          }
                        }}
                        disabled={status === "sending"}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-4 font-display text-xs uppercase tracking-wider text-[#FAF7F2] font-bold hover:bg-stone-800 transition-colors shadow-md disabled:opacity-60 cursor-pointer"
                      >
                        <Send className="h-4 w-4 text-sky-400" />
                        {status === "sending" ? "Transmitting..." : "Submit to Telegram Desk ↗"}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          const form = e.currentTarget.closest("form");
                          if (form) {
                            form.dataset.targetChannel = "whatsapp";
                            form.requestSubmit();
                          }
                        }}
                        disabled={status === "sending"}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-6 py-4 font-display text-xs uppercase tracking-wider text-white font-bold hover:bg-emerald-700 transition-colors shadow-md disabled:opacity-60 cursor-pointer"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-300" />
                        Submit to WhatsApp ↗
                      </button>
                    </div>

                    <p className="text-xs text-stone-500 text-center sm:text-right font-medium">
                      Avg. Proposal Turnaround: <strong className="text-stone-900">Under 30 Minutes</strong>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
