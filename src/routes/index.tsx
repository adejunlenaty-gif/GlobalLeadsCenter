import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Send,
  MessageCircle,
  ShieldCheck,
  Award,
  TrendingUp,
  BarChart3,
  Play,
  Maximize2,
  Star,
  Sparkles,
  Globe,
  Users,
  PhoneCall,
  Check,
  Layers,
  ChevronRight,
  ExternalLink,
  Globe2,
  Crosshair,
  Handshake,
  Eye,
  Scale,
} from "lucide-react";

export const WHY = [
  { icon: Globe2, t: "International business focus", d: "We plan campaigns across countries, languages and time zones." },
  { icon: Crosshair, t: "Campaign-specific targeting", d: "Every audience is defined from your brief, not a generic list." },
  { icon: Handshake, t: "Professional project coordination", d: "A dedicated point of contact from scoping to delivery." },
  { icon: Eye, t: "Transparent communication", d: "Clear sourcing explanations and regular status updates." },
  { icon: ShieldCheck, t: "Privacy-conscious data handling", d: "Consent-based collection and careful handling of personal data." },
  { icon: Layers, t: "Flexible custom solutions", d: "Fields, formats and volumes adapted to your operation." },
  { icon: Scale, t: "Responsible lead generation", d: "We only support lawful, appropriately authorised campaigns." },
];
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SERVICES, CONTACT, CATEGORIES, PACKAGES, BUYER_CONFIDENCE, STRUCTURED_APPROACH, POST_PURCHASE_WORKFLOW, ADDITIONAL_CAPABILITIES } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";
import { meta } from "@/components/SiteChrome";
import systemVideo from "@/assets/system-workflow-redacted.mp4.asset.json";
import systemPoster from "@/assets/system-workflow-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      "Globalleadscenter — International Lead Generation & Campaign Portfolio",
      "Authentic campaign strategy that connects international businesses with targeted, consent-based leads across 14 global specialisms."
    ),
  }),
  component: HomePage,
});

const formSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  company: z.string().trim().min(1, "Please enter your company name").max(150),
  service: z.string().min(1, "Choose a service").max(100),
  target_country: z.string().trim().min(1, "Enter a target country").max(100),
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

const fieldCls =
  "w-full rounded-xl border border-stone-800/20 bg-white/90 px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900 focus:bg-white";

function HomePage() {
  const [selectedTier, setSelectedTier] = useState<string>("Premium Sweepstakes Lead Generation");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [submittedBrief, setSubmittedBrief] = useState<string>("");

  async function handleQuoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const targetChannel = (form.dataset.targetChannel as "telegram" | "whatsapp") || "telegram";
    const data = Object.fromEntries(new FormData(form));
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setFormErrors(errs);
      return;
    }
    setFormErrors({});
    setSubmitStatus("sending");

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

    // Save to Supabase safely in background if connected, but never block user
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

    // Copy to clipboard for easy pasting
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

    setSubmitStatus("done");
  }

  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans selection:bg-stone-900 selection:text-[#FAF7F2]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Matches Canva Title & Editorial Cutout)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-stone-800/15 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5">
          {/* Top subtle script tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-script text-3xl sm:text-4xl text-stone-700 -rotate-2 inline-block">
              Primevalue's
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold hidden sm:inline-block">
                GLOBAL REACH · CONSENT VERIFIED
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
            </div>
          </div>

          {/* Main Editorial Hero Layout */}
          <div className="relative">
            {/* Massive condensed background headline with mobile safe sizing */}
            <h1 className="font-display text-[2.4rem] sm:text-[4.6rem] md:text-[6.8rem] lg:text-[9.2rem] leading-[0.85] tracking-tight text-stone-900 font-bold uppercase select-none transition-all">
              OUR LEAD SOLUTIONS
            </h1>

            {/* Sub-headline overlay styled like Canva template */}
            <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="font-display text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest text-stone-800 font-bold">
                  GLOBAL LEADS CENTER
                </p>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  Authentic campaign strategy and lead acquisition pipelines that connect brands with verified,
                  consent-based prospects through transparent, privacy-aligned delivery.
                </p>
              </div>

              {/* Social Channels Bar matching the Canva footer icon style */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="grid h-10 w-10 place-items-center rounded-full bg-stone-900 text-[#FAF7F2] transition-transform hover:scale-110"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-10 w-10 place-items-center rounded-full bg-emerald-800 text-white transition-transform hover:scale-110"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="pill-badge bg-stone-900 text-[#FAF7F2] border-stone-800 hover:bg-stone-800"
                >
                  START BRIEF →
                </a>
              </div>
            </div>

            {/* Hero Lead Brokerage & Sourcing Cutout Banner */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-stone-800/20 bg-stone-900 text-[#FAF7F2] shadow-2xl">
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-800/90 px-3.5 py-1 text-[11px] uppercase tracking-wider text-amber-300 font-bold border border-amber-400/20">
                        <Sparkles className="h-3.5 w-3.5" /> PRIMEVALUE'S GLOBAL LEADS CENTER
                      </span>
                    </div>

                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-bold">
                      LEAD SOURCING • LEAD BROKERAGE • CAMPAIGN SOLUTIONS
                    </p>

                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-[#FAF7F2] font-bold leading-tight">
                      SPECIALIZED LEADS. RELIABLE SOURCING. PROFESSIONAL DELIVERY.
                    </h2>

                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                      We connect businesses, brokers and campaign operators with targeted lead opportunities across Sweepstakes, Mega Millions, Cryptocurrency, Forex, Investor, Banking and Loan campaigns.
                    </p>

                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                      From First-Hit leads to specialized USA-targeted audiences, we coordinate sourcing, qualification requirements, freshness standards and delivery according to each buyer's campaign needs.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#contact"
                        className="rounded-full bg-[#FAF7F2] px-7 py-3 font-display text-xs tracking-wider text-stone-900 hover:bg-stone-200 transition-colors shadow-md font-bold uppercase inline-flex items-center gap-2"
                      >
                        REQUEST LEAD AVAILABILITY <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="#services"
                        className="rounded-full border border-stone-700 bg-stone-800/80 px-6 py-3 font-display text-xs tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-colors font-semibold uppercase"
                      >
                        EXPLORE OUR SERVICES
                      </a>
                    </div>

                    <div className="pt-3 border-t border-stone-800/60 text-[11px] text-stone-400 font-medium tracking-wide">
                      Targeted Campaigns · Defined Freshness · Transparent Sourcing · Professional Delivery
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-950 overflow-hidden flex items-center justify-center p-4 sm:p-6 border-t lg:border-t-0 lg:border-l border-stone-800/30">
                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Check Campaign Availability on Telegram Desk"
                    className="group relative w-full h-full flex items-center justify-center cursor-pointer block"
                  >
                    <img
                      src="/hero-global-representative.jpg"
                      alt="Global business operations, world map and professional campaign representative"
                      className="w-full h-auto max-h-[460px] object-cover rounded-xl shadow-2xl border border-stone-800/40 group-hover:border-amber-500/50 transition-all duration-300"
                    />
                    <div className="absolute bottom-6 left-6 right-6 text-center">
                      <span className="pill-badge bg-stone-950/90 text-[#FAF7F2] border-stone-700/60 text-[10px] backdrop-blur-md shadow-md uppercase tracking-wider font-semibold group-hover:border-amber-400 group-hover:text-amber-300 transition-colors inline-flex items-center gap-1.5">
                        Global Campaign Operations · Check Availability ↗
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BENTO ROW 1: "WHO WE ARE" & "QUALIFICATIONS"
      ───────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card A: WHO WE ARE (Canva "WHO AM I") */}
          <div className="bento-card bg-[#CEC4BC] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-800/15 pb-4 mb-6">
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900">
                  WHO WE ARE
                </h2>
                <span className="font-script text-xl text-stone-700">get to know us</span>
              </div>

              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
                    We are <strong>GlobalLeadsCenter</strong>, an international campaign planning and prospect acquisition
                    agency. We help businesses, brokers, and campaign operators scale with verified opt-in prospects,
                    agreed freshness windows, and privacy-conscious handover.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    From audience brief and regional compliance to automated caller routing and CRM integration, we
                    deliver end-to-end reliability.
                  </p>

                  {/* 3 Metric Counters */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800/15">
                    <div>
                      <div className="font-display text-2xl sm:text-3xl text-stone-900 font-bold">50+</div>
                      <div className="text-[10px] sm:text-xs text-stone-600 font-semibold uppercase tracking-wider">
                        Markets Served
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-lg sm:text-xl text-stone-900 font-bold uppercase tracking-tight">Audience</div>
                      <div className="text-[10px] sm:text-xs text-stone-600 font-semibold uppercase tracking-wider">
                        Campaigns Built Around Your Audience
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-xl sm:text-2xl text-stone-900 font-bold">1-2 Yrs+</div>
                      <div className="text-[10px] sm:text-xs text-stone-600 font-semibold uppercase tracking-wider">
                        Expertise
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operations Team Portrait */}
                <div className="sm:col-span-5 relative flex justify-center">
                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Connect with Operations Desk on Telegram"
                    className="group relative rounded-xl overflow-hidden border border-stone-800/20 bg-stone-900 shadow-md aspect-[4/5] w-full max-w-[220px] block cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    <img
                      src="/team-operations-center.jpg"
                      alt="GlobalLeadsCenter marketing operations and campaign strategy team"
                      className="h-full w-full object-cover filter saturate-95 group-hover:saturate-100 transition-all"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="font-script text-sm text-stone-900 bg-white/95 px-2 py-0.5 rounded shadow-xs inline-block -rotate-2 group-hover:rotate-0 transition-transform">
                        Operations Desk ↗
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Brand/Partner Pill Tags */}
            <div className="mt-8 pt-5 border-t border-stone-800/15 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-600 mr-2">
                Supported Sectors:
              </span>
              <span className="pill-badge text-[11px]">Sweepstakes & Contests</span>
              <span className="pill-badge text-[11px]">Crypto & Fintech</span>
              <span className="pill-badge text-[11px]">B2B Decision Makers</span>
              <span className="pill-badge text-[11px]">USA Targeted</span>
            </div>
          </div>

          {/* Card B: QUALITY, TECHNOLOGY & DELIVERY STANDARDS */}
          <div className="bento-card bg-[#CEC4BC] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="border-b border-stone-800/15 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-stone-700">
                    QUALITY, TECHNOLOGY & DELIVERY STANDARDS
                  </span>
                  <Award className="h-5 w-5 text-stone-700" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900 font-bold mt-1">
                  BUILT ON TRANSPARENCY. POWERED BY THE RIGHT TOOLS.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  At Primevalue's Global Leads Center, we combine campaign planning, audience acquisition, quality screening and organized data delivery to support businesses, brokers and campaign operators.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  Our approach focuses on campaign-specific requirements, appropriate consent documentation, clearly defined freshness standards and accountable delivery.
                </p>
              </div>

              {/* Graphic + 5 Labels Grid */}
              <div className="grid sm:grid-cols-12 gap-5 items-center">
                {/* Operational Standards Graphic */}
                <div className="sm:col-span-7">
                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Check Compliance & Quality Standards on Telegram"
                    className="block rounded-xl border border-stone-800/20 bg-stone-950 p-2 shadow-md overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.01]"
                  >
                    <img
                      src="/operational-standards.jpg"
                      alt="Primevalue Global Leads Center operational standards, compliance dashboard and consent lifecycle"
                      className="w-full h-auto max-h-[220px] object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="pill-badge bg-stone-950/90 text-[#FAF7F2] border-stone-700/60 text-[9px] backdrop-blur-md uppercase tracking-wider font-semibold py-0.5 px-2 group-hover:border-amber-400 group-hover:text-amber-300 transition-colors inline-flex items-center gap-1">
                        Real-Time Compliance &amp; Consent Posture · Check on Telegram ↗
                      </span>
                    </div>
                  </a>
                </div>

                {/* 5 Short Labels beside graphic */}
                <div className="sm:col-span-5 flex flex-col justify-center space-y-2">
                  {[
                    "Consent Documentation",
                    "Quality Screening",
                    "Compliance Review",
                    "Freshness Standards",
                    "Secure Delivery",
                  ].map((label, idx) => (
                    <div
                      key={label}
                      className="pill-badge w-full justify-between py-1.5 px-3 text-xs bg-white/90 border-stone-800/20 shadow-xs"
                    >
                      <span className="font-semibold text-stone-800">
                        <span className="text-[10px] text-amber-800 font-mono mr-1.5 font-bold">0{idx + 1}</span>
                        {label}
                      </span>
                      <Check className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Operational Standards Detail List */}
              <div className="mt-6 pt-5 border-t border-stone-800/15">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-700 block mb-3">
                  OUR OPERATIONAL STANDARDS
                </span>
                <div className="grid gap-2 text-xs text-stone-700">
                  <div className="rounded-lg bg-white/70 p-2.5 border border-stone-800/10">
                    <span className="font-bold text-stone-900 uppercase tracking-wide">01. Opt-In & Consent Documentation:</span>{" "}
                    We prioritize appropriately permissioned lead sourcing and maintain available consent records according to campaign requirements and applicable regulations.
                  </div>
                  <div className="rounded-lg bg-white/70 p-2.5 border border-stone-800/10">
                    <span className="font-bold text-stone-900 uppercase tracking-wide">02. Lead Quality & Verification:</span>{" "}
                    Our quality-control process can include contact-format validation, duplicate detection, record completeness checks and mobile line-status screening where supported.
                  </div>
                  <div className="rounded-lg bg-white/70 p-2.5 border border-stone-800/10">
                    <span className="font-bold text-stone-900 uppercase tracking-wide">03. Privacy & Compliance Review:</span>{" "}
                    We review campaign requirements against applicable privacy, advertising and telemarketing rules for the intended market and communication channel.
                  </div>
                  <div className="rounded-lg bg-white/70 p-2.5 border border-stone-800/10">
                    <span className="font-bold text-stone-900 uppercase tracking-wide">04. Freshness & Delivery Management:</span>{" "}
                    Each campaign has agreed freshness expectations, delivery schedules, qualification requirements and distribution terms.
                  </div>
                  <div className="rounded-lg bg-white/70 p-2.5 border border-stone-800/10">
                    <span className="font-bold text-stone-900 uppercase tracking-wide">05. Telephony & CRM Integration:</span>{" "}
                    We support campaign coordination involving available SIP trunking, cloud dialer systems and CRM delivery integrations.
                  </div>
                </div>
              </div>

              {/* Platforms Row Underneath */}
              <div className="mt-5 pt-4 border-t border-stone-800/15">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-700 block mb-2">
                  PLATFORMS & TECHNOLOGY
                </span>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900 font-semibold">Meta Ads</span>
                  <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900 font-semibold">Google Ads</span>
                  <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900 font-semibold">HubSpot</span>
                  <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900 font-semibold">Supabase</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed italic">
                  Technology used in our campaign planning, marketing, data management and operational workflows. Platform names do not imply certification, partnership or endorsement.
                </p>
              </div>
            </div>

            {/* Quality Commitment Banner */}
            <div className="mt-6 pt-4 border-t border-stone-800/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-stone-900">
                Transparent Sourcing · Structured Quality Control · Professional Delivery
              </span>
              <span className="text-[11px] text-stone-600">Accountable Delivery SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENTO ROW 2: "MY WORK INCLUDES" & "CASE STUDY"
      ───────────────────────────────────────────────────────────── */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card C: MY WORK INCLUDES (Canva 6-Service Bento Grid) */}
          <div className="bento-card bg-[#CEC4BC] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-800/15 pb-4 mb-6">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900">
                    MY WORK INCLUDES
                  </h2>
                  <p className="text-xs text-stone-600 mt-0.5">Specialized prospect pipelines across 6 primary sectors</p>
                </div>
                <Link to="/services" className="font-display text-xs tracking-wider text-stone-800 hover:underline">
                  ALL 15 →
                </Link>
              </div>

              {/* 2x3 Grid matching the Canva layout */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* 1. Sweepstakes */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Sweepstakes Leads Availability on Telegram"
                      className="group/img block relative h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10 cursor-pointer"
                    >
                      <img
                        src="/sweepstakes-prize-gift.jpg"
                        alt="Sweepstakes and prize promotional campaigns"
                        className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-semibold bg-stone-950/85 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded backdrop-blur-xs shadow-xs opacity-90 group-hover/img:opacity-100 transition-opacity">
                        Check ↗
                      </span>
                    </a>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      SWEEPSTAKES
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Sweepstakes Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Targeted audiences for authorized sweepstakes and promotional campaigns.
                    </p>
                  </div>
                  <Link
                    to="/services/sweepstakes"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 2. PCH & Prize */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check PCH & Prize Leads Availability on Telegram"
                      className="group/img block relative h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10 cursor-pointer"
                    >
                      <img
                        src="/canva-assets/service-2.jpg"
                        alt="PCH lead generation"
                        className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-semibold bg-stone-950/85 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded backdrop-blur-xs shadow-xs opacity-90 group-hover/img:opacity-100 transition-opacity">
                        Check ↗
                      </span>
                    </a>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      PRIZE & PROMO
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      PCH & Prize Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Audience acquisition for prize-and-promotion briefs with documented opt-in consent.
                    </p>
                  </div>
                  <Link
                    to="/services/pch"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 3. First Hit */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check First-Hit Leads Availability on Telegram"
                      className="group/img block relative h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10 cursor-pointer"
                    >
                      <img
                        src="/first-hit-target.jpg"
                        alt="First hit lead generation and prospect qualification"
                        className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-semibold bg-stone-950/85 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded backdrop-blur-xs shadow-xs opacity-90 group-hover/img:opacity-100 transition-opacity">
                        Check ↗
                      </span>
                    </a>
                    <span className="pill-badge text-[10px] bg-amber-200 text-amber-950 font-bold py-0.5 px-2 mb-2">
                      FRESH vs. EXCLUSIVE
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      First-Hit Leads
                    </h3>
                    <p className="text-[11px] text-stone-700 mt-1 line-clamp-2">
                      Newly acquired leads (&lt;24h) with explicit buyer choice: Standard Fresh or Dedicated Exclusive lock.
                    </p>
                  </div>
                  <Link
                    to="/services/first-hit"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View distinction & details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 4. Mega Millions / Lottery */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Mega Millions Leads Availability on Telegram"
                      className="group/img block relative h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10 cursor-pointer"
                    >
                      <img
                        src="/lottery-tumbler.jpg"
                        alt="Lottery and promotional tumbler campaign leads"
                        className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-semibold bg-stone-950/85 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded backdrop-blur-xs shadow-xs opacity-90 group-hover/img:opacity-100 transition-opacity">
                        Check ↗
                      </span>
                    </a>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      LOTTERY INTEREST
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Mega Millions Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Lottery-interest audiences for authorized, jurisdiction-permitted promotional campaigns.
                    </p>
                  </div>
                  <Link
                    to="/services/mega-millions"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 5. Crypto Leads (Separated) */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Cryptocurrency Leads Availability on Telegram"
                      className="group/img block relative h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10 cursor-pointer"
                    >
                      <img
                        src="/crypto-blockchain-tokens.jpg"
                        alt="Cryptocurrency blockchain and digital assets"
                        className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-semibold bg-stone-950/85 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded backdrop-blur-xs shadow-xs opacity-90 group-hover/img:opacity-100 transition-opacity">
                        Check ↗
                      </span>
                    </a>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      WEB3 & DIGITAL ASSETS
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Cryptocurrency Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Prospects expressing interest in cryptocurrency, digital assets and related services.
                    </p>
                  </div>
                  <Link
                    to="/services/crypto"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 6. Forex Leads (Separated) */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Forex Leads Availability on Telegram"
                      className="group/img block relative h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10 cursor-pointer"
                    >
                      <img
                        src="/forex-trading-station.jpg"
                        alt="Forex currency trading desk and charts"
                        className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-semibold bg-stone-950/85 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded backdrop-blur-xs shadow-xs opacity-90 group-hover/img:opacity-100 transition-opacity">
                        Check ↗
                      </span>
                    </a>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      RETAIL FX & PROP
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Forex Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Trading-interest prospects for appropriately authorized forex brokers and prop desks.
                    </p>
                  </div>
                  <Link
                    to="/services/forex"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-800/15 flex items-center justify-between">
              <span className="text-xs text-stone-700">Need custom qualification fields?</span>
              <a href="#contact" className="pill-badge text-xs bg-stone-900 text-[#FAF7F2] border-stone-800">
                Custom Brief →
              </a>
            </div>
          </div>

          {/* Card D: CAMPAIGN DEMONSTRATION (30-Day Campaign Acquisition & Delivery Framework) */}
          <div id="case-study" className="bento-card bg-[#CEC4BC] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800/15 pb-4 mb-6 gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                    30-DAY CAMPAIGN ACQUISITION & DELIVERY FRAMEWORK
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900 font-bold mt-1">
                    CAMPAIGN DEMONSTRATION
                  </h2>
                  <p className="text-xs text-stone-700 font-semibold mt-0.5 uppercase tracking-wide">
                    A THREE-STAGE APPROACH TO PROFESSIONAL LEAD GENERATION
                  </p>
                </div>
                <span className="pill-badge bg-stone-900 text-[#FAF7F2] border-stone-900 text-[10px] shrink-0">
                  ILLUSTRATIVE FRAMEWORK
                </span>
              </div>

              {/* Demonstration Disclaimer Narrative */}
              <div className="rounded-xl border border-stone-800/20 bg-stone-900 text-[#FAF7F2] p-4 mb-5 shadow-xs space-y-1.5">
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                  This demonstration illustrates how Primevalue's Global Leads Center structures a campaign from initial audience planning through qualification, quality control and final lead delivery.
                </p>
                <p className="text-[11px] text-stone-400 italic">
                  The framework represents an illustrative operational workflow, not a verified customer performance result.
                </p>
              </div>

              {/* 3 Stage Breakdown with Case Images */}
              <div className="space-y-4">
                {/* Stage 01: Funnel Optimization */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-4 shadow-xs">
                  <div className="grid sm:grid-cols-12 gap-3.5 items-center">
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                        STAGE 01 · FUNNEL OPTIMIZATION
                      </span>
                      <h3 className="font-display text-sm uppercase tracking-wide text-stone-900 font-bold mt-0.5">
                        Acquisition Funnel & Landing Page Architecture
                      </h3>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        We structure campaign landing pages around the intended audience, promotional offer and buyer's qualification requirements. Our approach emphasizes a clear user journey, relevant information capture and appropriate consent disclosures.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-stone-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700 block mb-1">
                          Key Campaign Activities:
                        </span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-stone-600">
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Campaign landing-page planning & offer disclosure structure
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Custom lead capture fields & consent documentation
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Qualification-question planning & compliance disclaimers
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Funnel Architecture on Telegram"
                      className="sm:col-span-5 overflow-hidden rounded-lg bg-stone-950 border border-stone-800/20 shadow-xs relative block group/img cursor-pointer"
                    >
                      <img
                        src="/case-funnel.jpg"
                        alt="Acquisition Funnel & Landing Architecture demonstration visual"
                        className="w-full h-auto max-h-[160px] object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                        <span className="pill-badge bg-stone-950/90 text-white border-stone-700 text-[8px] py-0.5 px-1.5 group-hover/img:border-amber-400 group-hover/img:text-amber-300 transition-colors inline-flex items-center gap-1">
                          Funnel Architecture · Check on Telegram ↗
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Stage 02: Audience Segmentation */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-4 shadow-xs">
                  <div className="grid sm:grid-cols-12 gap-3.5 items-center">
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                        STAGE 02 · AUDIENCE SEGMENTATION
                      </span>
                      <h3 className="font-display text-sm uppercase tracking-wide text-stone-900 font-bold mt-0.5">
                        Targeted Audience & Qualification Planning
                      </h3>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        We organize campaign targeting around geographic requirements, relevant audience characteristics and campaign-specific interests. Each acquisition brief defines the criteria used to organize and qualify incoming inquiries.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-stone-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700 block mb-1">
                          Key Campaign Activities:
                        </span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-stone-600">
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Geographic and regional audience targeting
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Campaign-specific audience segmentation & custom questions
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Approved audience exclusion criteria & sourcing coordination
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Audience Targeting on Telegram"
                      className="sm:col-span-5 overflow-hidden rounded-lg bg-stone-950 border border-stone-800/20 shadow-xs relative block group/img cursor-pointer"
                    >
                      <img
                        src="/case-audience.jpg"
                        alt="Audience segmentation and campaign targeting dashboard visual"
                        className="w-full h-auto max-h-[160px] object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                        <span className="pill-badge bg-stone-950/90 text-white border-stone-700 text-[8px] py-0.5 px-1.5 group-hover/img:border-amber-400 group-hover/img:text-amber-300 transition-colors inline-flex items-center gap-1">
                          Targeting Dashboard · Check on Telegram ↗
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Stage 03: Quality Control & Direct Delivery */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-4 shadow-xs">
                  <div className="grid sm:grid-cols-12 gap-3.5 items-center">
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                        STAGE 03 · QUALITY CONTROL & DIRECT DELIVERY
                      </span>
                      <h3 className="font-display text-sm uppercase tracking-wide text-stone-900 font-bold mt-0.5">
                        Lead Verification, Dispatch & CRM Integration
                      </h3>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        Following acquisition, leads are prepared for delivery according to the agreed campaign specifications. Available quality checks and supported integrations are used to organize the handover process.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-stone-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700 block mb-1">
                          Key Campaign Activities:
                        </span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-stone-600">
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Contact-format, syntax and duplicate checks
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> Available mobile line-status screening & freshness SLAs
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> CSV/Excel preparation and supported CRM, API & dialer feeds
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Check Verification & Delivery on Telegram"
                      className="sm:col-span-5 overflow-hidden rounded-lg bg-stone-950 border border-stone-800/20 shadow-xs relative block group/img cursor-pointer"
                    >
                      <img
                        src="/case-delivery.jpg"
                        alt="Lead verification and delivery dashboard visual"
                        className="w-full h-auto max-h-[160px] object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                        <span className="pill-badge bg-stone-950/90 text-white border-stone-700 text-[8px] py-0.5 px-1.5 group-hover/img:border-amber-400 group-hover/img:text-amber-300 transition-colors inline-flex items-center gap-1">
                          Verification & Delivery · Check on Telegram ↗
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* The Campaign Delivery Framework CTA Banner */}
              <div className="mt-6 rounded-xl border border-stone-800/20 bg-stone-900 text-[#FAF7F2] p-4.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-1">
                  THE CAMPAIGN DELIVERY FRAMEWORK
                </span>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  From campaign planning to final handover, our objective is to provide buyers with a structured, transparent and professionally coordinated sourcing experience.
                </p>
                <div className="mt-4 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-white">
                    Ready to discuss your campaign?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="#contact"
                      className="rounded-full bg-[#FAF7F2] px-4 py-1.5 font-display text-[11px] tracking-wider text-stone-900 hover:bg-stone-200 transition-colors font-bold uppercase"
                    >
                      REQUEST LEAD AVAILABILITY
                    </a>
                    <a
                      href="#services"
                      className="rounded-full border border-stone-700 bg-stone-800 px-3.5 py-1.5 font-display text-[11px] tracking-wider text-[#FAF7F2] hover:bg-stone-700 transition-colors uppercase"
                    >
                      EXPLORE OUR SERVICES
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800/15 flex items-center justify-between text-xs text-stone-700">
              <span>Demonstration workflow · Operational structure</span>
              <Link to="/portfolio" className="font-semibold text-stone-900 hover:underline">
                Explore Portfolio Sheets →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3B. COMPLETE 15-SERVICE CATEGORY DIRECTORY (3 Groups)
      ───────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="bento-card bg-[#FAF7F2] p-7 sm:p-10 border border-stone-800/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800/15 pb-6 mb-8 gap-4">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-stone-600">Full Capabilities</p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900 mt-1 font-bold">
                15 Dedicated Lead Specialisms Across 3 Categories
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                Organized into Promotional, Financial, and Specialized outreach groups. Every service features its own dedicated programme page with complete data schema, sourcing methods, freshness SLAs, and compliance details.
              </p>
            </div>
            <Link
              to="/services"
              className="pill-badge bg-stone-900 text-[#FAF7F2] text-xs py-2 px-4 shrink-0 hover:bg-stone-800"
            >
              Directory Overview →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="rounded-xl border border-stone-800/15 bg-white p-6 flex flex-col justify-between shadow-xs hover:border-stone-900 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-800">
                      {cat.categoryNumber}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">
                      {SERVICES.filter((s) => s.category === cat.id).length} Services
                    </span>
                  </div>

                  <h3 className="font-display text-lg uppercase tracking-wider text-stone-900 font-bold mt-1">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    {cat.desc}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-stone-800/10 pt-4 text-xs text-stone-800">
                    {SERVICES.filter((s) => s.category === cat.id).map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="hover:text-amber-800 hover:underline flex items-center justify-between group py-1 border-b border-stone-100 last:border-b-0"
                        >
                          <span className="truncate font-medium">{s.name}</span>
                          <ChevronRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 shrink-0 ml-1 text-stone-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-800/10">
                  <Link
                    to="/services"
                    className="text-[11px] font-bold uppercase tracking-wider text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    Explore all {cat.title.toLowerCase()} <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sourcing Capabilities */}
          <div className="mt-12 pt-8 border-t border-stone-800/15">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-amber-800">
                  EXPANDED CATALOGUE
                </span>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-stone-900 font-bold mt-1">
                  Additional Sourcing Capabilities
                </h3>
              </div>
              <p className="text-xs text-stone-600 max-w-lg leading-relaxed">
                In addition to our 15 core specialisms, we coordinate custom acquisition briefs across expanding consumer and commercial sectors where they match verified sourcing capabilities.
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {ADDITIONAL_CAPABILITIES.map((cap) => (
                <div
                  key={cap.name}
                  className="rounded-xl border border-stone-800/15 bg-white p-4 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors"
                >
                  <div>
                    <span className="pill-badge text-[9px] bg-stone-100 text-stone-800 mb-2">
                      {cap.badge}
                    </span>
                    <h4 className="font-display text-xs uppercase tracking-wide text-stone-900 font-bold mt-1">
                      {cap.name}
                    </h4>
                    <p className="mt-1.5 text-[11px] text-stone-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex justify-end">
                    <a
                      href="#contact"
                      onClick={() => setSelectedTier(cap.name)}
                      className="text-[10px] font-bold uppercase tracking-wider text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                    >
                      Inquire Brief <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance & Jurisdictional Notice */}
            <div className="mt-6 rounded-xl border border-amber-600/30 bg-amber-50/80 p-4 text-xs text-amber-950 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase tracking-wider block mb-0.5">Commercial Compliance Disclosure</span>
                <p className="leading-relaxed">
                  Important: Financial, cryptocurrency, gambling, lottery, and consumer lending campaigns require appropriate consumer consent, lawful sourcing, and applicable jurisdictional checks. GlobalLeadsCenter does not advertise compliance certifications or guarantees unless substantiated by audited proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3C. A STRUCTURED APPROACH FEATURE BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="rounded-2xl border border-stone-800/20 bg-[#CEC4BC] p-7 sm:p-9 shadow-md">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-700">
              OPERATIONAL STANDARD
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900 font-bold mt-1">
              A structured approach to specialist lead sourcing and campaign delivery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
              We establish clear commitments upfront so you know exactly what standards apply to your delivery before work begins.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STRUCTURED_APPROACH.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl border border-stone-800/15 bg-white/90 p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3D. WHAT HAPPENS AFTER YOU ORDER: 5 POST-PURCHASE STAGES
      ───────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="bento-card bg-[#CEC4BC] p-7 sm:p-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-700">
              Buyer Assurance & Transparency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-stone-900 font-bold mt-1">
              WHAT HAPPENS AFTER YOU ORDER
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              A serious buyer doesn't just want to see a list of services. You need to know what happens after you pay:
              from campaign-specific targeting and HLR screening to documented consent records and predictable delivery schedules.
            </p>
          </div>

          <div className="space-y-6">
            {POST_PURCHASE_WORKFLOW.map((step) => (
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

                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Check ${step.title} on Telegram Desk`}
                    className="group/img lg:col-span-5 h-64 lg:h-full min-h-[240px] bg-stone-950 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-stone-800/20 block cursor-pointer"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover filter brightness-95 group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="pill-badge bg-stone-900/90 text-white border-stone-700 text-[10px] backdrop-blur-sm">
                        Documented Verification Protocol
                      </span>
                      <span className="pill-badge bg-amber-400 text-stone-950 text-[9px] font-bold uppercase tracking-wider py-0.5 px-2 group-hover/img:bg-amber-300 transition-colors inline-flex items-center gap-1">
                        Check ↗
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Brokerage Disclosure & Clear Replacement Policy Banner */}
          <div className="mt-10 rounded-2xl border border-stone-800/20 bg-[#231F1D] text-[#FAF7F2] p-7 md:p-9 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="pill-badge bg-amber-400 text-stone-950 text-[10px] font-bold uppercase">
                  TRANSPARENCY MANDATE
                </span>
                <h4 className="font-display text-xl uppercase tracking-wider text-[#FAF7F2] font-bold">
                  Brokerage Disclosure & Clear Replacement Policy
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  As an international lead brokerage and campaign coordinator, we disclose whether a batch is directly generated through internal landing funnels or supplied through a vetted sourcing partner. Every delivery is protected by our Clear Replacement Policy: any verified invalid number, disconnected carrier line, or syntax defect reported within 24 hours is replaced 1-to-1 without dispute.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="#contact"
                  className="rounded-full bg-[#FAF7F2] px-6 py-2.5 font-display text-xs tracking-wider text-stone-900 hover:bg-stone-200 transition-colors font-bold uppercase shadow-md"
                >
                  REQUEST LEAD AVAILABILITY
                </a>
                <Link
                  to="/terms"
                  className="rounded-full border border-stone-700 bg-stone-800/80 px-5 py-2.5 font-display text-xs tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-colors uppercase"
                >
                  VIEW REPLACEMENT POLICY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. VIDEOGRAPHY & SYSTEM WORKFLOW (Canva 4-Phone Reel Showcase)
      ───────────────────────────────────────────────────────────── */}
      <section id="workflow" className="mx-auto max-w-7xl px-5 py-14">
        <div className="bento-card bg-[#CEC4BC] p-7 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800/15 pb-6 mb-8 gap-4">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-stone-600">Dynamic Campaign Execution</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-stone-900 mt-1">
                VIDEOGRAPHY & SYSTEM WORKFLOW
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                Watch our operational multi-line telephony dialer in action. We combine verified carrier SIP trunking, automated prospect queueing, human voice detection, and voicemail audio drop workflows to deliver responsive outreach at scale.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Video Modal Trigger */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="pill-badge bg-stone-900 text-[#FAF7F2] border-stone-800 hover:bg-stone-800 text-xs py-2.5 px-5 cursor-pointer">
                    <Play className="h-3.5 w-3.5 fill-current mr-1.5" /> Watch System Workflow (1:55)
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl bg-[#231F1D] text-[#FAF7F2] border-stone-700">
                  <DialogHeader className="pr-8">
                    <DialogTitle className="font-display text-2xl uppercase tracking-wide text-[#FAF7F2]">
                      Ecsow Multi-Line Auto Dialer &amp; Campaign Workflow
                    </DialogTitle>
                    <DialogDescription className="text-stone-400 text-xs">
                      Authentic operational demonstration: license registration, carrier SIP trunk connection, CSV lead import, automated dialing, and voicemail audio drops.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-black mt-3">
                    <video controls playsInline preload="metadata" className="h-full w-full object-contain">
                      <source src="/system-workflow-autodialer.mp4" type="video/mp4" />
                      <source src={systemVideo.url} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>

              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-badge bg-amber-400 text-stone-950 border-amber-500 hover:bg-amber-300 text-xs py-2.5 px-4 font-semibold uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                Check Telephony Setup ↗
              </a>
            </div>
          </div>

          {/* Featured Video Player Showcase Card */}
          <div className="mb-10 rounded-2xl border border-stone-800/20 bg-stone-900 overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-12 items-center">
              {/* Video Player */}
              <div className="lg:col-span-7 bg-black relative aspect-video flex items-center justify-center">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  <source src="/system-workflow-autodialer.mp4" type="video/mp4" />
                  <source src={systemVideo.url} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              {/* Video Details & Operational Breakdown */}
              <div className="p-6 sm:p-8 lg:col-span-5 text-[#FAF7F2] space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="pill-badge bg-amber-400 text-stone-950 text-[10px] font-bold uppercase tracking-wider py-0.5 px-2.5">
                    Live Operational Footage · 1:55
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">Ecsow Multi-Line</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider font-bold text-white">
                  Ecsow Multi-Line Auto Dialer &amp; Telephony Routing
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  This authentic screen demonstration illustrates how Primevalue's Global Leads Center initializes carrier SIP trunks, ingests campaign CSV prospect files, and initiates automated multi-line dialing with voice detection.
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300">
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Licensed Multi-Line Dialer:</strong> Registered workstation license for stable multi-channel outbound pacing.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Carrier SIP Connection:</strong> Active provider trunking for clear voice connectivity across US/UK markets.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>CSV Manifest Ingestion:</strong> Rapid bulk upload with structured contact mapping (Name, Phone, City, State, ZIP).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Voice Detection &amp; Audio Drop:</strong> Detects answering machines vs human voice to drop targeted voicemails or bridge live reps.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-2 font-display text-xs font-bold text-stone-950 uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    Check Telephony Setup on Telegram ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Interactive Phone Mockup Frames (Replicating Canva Videography Row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone 1: CSV Lead Ingestion */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                {/* Notch */}
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                {/* Screen Content */}
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 01</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">CSV Import</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Bulk ingestion mapping names, verified numbers, locations, and campaign tags.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Format:</span><span className="text-emerald-400">UTF-8 CSV</span></div>
                    <div className="flex justify-between"><span>Fields:</span><span className="text-emerald-400">10+ Mapped</span></div>
                  </div>
                </div>
                {/* Home Indicator */}
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                LEAD INGESTION
              </span>
              <span className="text-[10px] text-stone-600 text-center">Rapid bulk manifest queue</span>
            </div>

            {/* Phone 2: SIP Line Connection */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 02</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">SIP Connect</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Carrier trunking linked directly to provider for stable outbound delivery.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Provider:</span><span className="text-emerald-400">Connected</span></div>
                    <div className="flex justify-between"><span>SIP Desk:</span><span className="text-emerald-400">Active Trunk</span></div>
                  </div>
                </div>
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                SIP INTEGRATION
              </span>
              <span className="text-[10px] text-stone-600 text-center">Live carrier trunk connection</span>
            </div>

            {/* Phone 3: Multi-Line Auto Dialing */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 03</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">Multi-Line Dial</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Automated parallel pacing with live contact popup modal upon ring connect.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Dial Mode:</span><span className="text-emerald-400">Multi-Line Auto</span></div>
                    <div className="flex justify-between"><span>Card Pop:</span><span className="text-emerald-400">Instant</span></div>
                  </div>
                </div>
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                AUTO DIALER
              </span>
              <span className="text-[10px] text-stone-600 text-center">Parallel queue outbound calling</span>
            </div>

            {/* Phone 4: Voice Detect & Audio Drop */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 04</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">Voice &amp; Drop</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Human voice detection with automated voicemail audio drops and disposition logs.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Voice Detect:</span><span className="text-emerald-400">Active</span></div>
                    <div className="flex justify-between"><span>Disposition:</span><span className="text-emerald-400">Real-Time Log</span></div>
                  </div>
                </div>
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                VOICE &amp; DISPATCH
              </span>
              <span className="text-[10px] text-stone-600 text-center">Automated drop &amp; disposition logging</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. RATE CARD (Canva "RATE CARD")
          💎 PREMIUM SWEEPSTAKES LEADS — PCH & MEGA MILLIONS
      ───────────────────────────────────────────────────────────── */}
      <section id="rate-card" className="mx-auto max-w-7xl px-5 py-14">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-800/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-900 shadow-xs mb-3">
            <span>💎</span>
            <span>PREMIUM SWEEPSTAKES LEADS — PCH &amp; MEGA MILLIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-stone-900 mt-1 font-bold">
            CAMPAIGN RATE CARD &amp; PRICING
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
            Every lead package is quoted with transparent fixed tiers, high contact rates, and rapid delivery for PCH, Mega Millions &amp; promotional campaign operators.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="pill-badge bg-stone-900 text-white font-semibold">⚡ Guaranteed 24h Delivery (All Packages)</span>
            <span className="pill-badge bg-amber-100 text-amber-900 border-amber-300">✅ Bigger Packages, Better Value!</span>
            <span className="pill-badge bg-emerald-100 text-emerald-900 border-emerald-300">✅ Flexible Package Options</span>
            <span className="pill-badge bg-stone-200 text-stone-900">🛡️ Clear Replacement Policy (24h SLA)</span>
          </div>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Tier 1: $100 — 150 Leads */}
          <div className="bento-card bg-[#CEC4BC] p-6 flex flex-col justify-between hover:border-stone-900 transition-all border border-stone-800/15">
            <div>
              <div className="flex items-center justify-between">
                <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] border-stone-800">
                  STARTER BATCH
                </span>
                <span className="text-[11px] font-bold text-stone-900">⚡ 24h Delivery</span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-stone-900 mt-3 font-bold">
                Starter Test
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Fast offer validation &amp; script benchmarking. Delivered within 24 hours.
              </p>

              <div className="my-5 border-y border-stone-800/15 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-stone-900 font-bold">$100</span>
                  <span className="text-xs text-stone-600 font-semibold uppercase">Fixed</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-stone-900 font-display text-lg font-bold">
                  <span>🔥</span>
                  <span>150 Verified Leads</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-stone-800">
                <li className="flex items-center gap-2 font-bold text-stone-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>⚡ Delivered within 24 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>150 Sweepstakes &amp; PCH Leads</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Opt-In Consent Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Duplicate &amp; Syntax Screening</span>
                </li>
                <li className="flex items-center gap-2 font-semibold text-stone-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Clear 24h Replacement SLA</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={`https://wa.me/447456067627?text=${encodeURIComponent("Hi, I want to secure the $100 Package (150 Leads) for Premium Sweepstakes — PCH & Mega Millions. Delivered within 24 hours. Please confirm availability and let's get my leads ready! 🔥")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-stone-900 py-2.5 font-display text-xs font-bold tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-all shadow-xs"
              >
                ORDER $100 PACKAGE ↗
              </a>
              <a
                href="#contact"
                onClick={() => setSelectedTier("Premium Sweepstakes $100 Package (150 Leads — 24h Delivery)")}
                className="block w-full text-center text-[11px] text-stone-600 hover:text-stone-900 underline font-semibold"
              >
                Or Select for Quote Form ↓
              </a>
            </div>
          </div>

          {/* Tier 2: $200 — 300 Leads */}
          <div className="bento-card bg-[#CEC4BC] p-6 flex flex-col justify-between hover:border-stone-900 transition-all border border-stone-800/15">
            <div>
              <div className="flex items-center justify-between">
                <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] border-stone-800">
                  GROWTH BATCH
                </span>
                <span className="text-[11px] font-bold text-stone-900">⚡ 24h Delivery</span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-stone-900 mt-3 font-bold">
                Growth Pipeline
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Active outbound teams &amp; brokers. Delivered within 24 hours.
              </p>

              <div className="my-5 border-y border-stone-800/15 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-stone-900 font-bold">$200</span>
                  <span className="text-xs text-stone-600 font-semibold uppercase">Fixed</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-stone-900 font-display text-lg font-bold">
                  <span>🔥</span>
                  <span>300 Verified Leads</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-stone-800">
                <li className="flex items-center gap-2 font-bold text-stone-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>⚡ Delivered within 24 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>300 Sweepstakes &amp; PCH Leads</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Targeted Geographic Filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>HLR Mobile Live-Status Ping</span>
                </li>
                <li className="flex items-center gap-2 font-semibold text-stone-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Clear 24h Replacement SLA</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={`https://wa.me/447456067627?text=${encodeURIComponent("Hi, I want to secure the $200 Package (300 Leads) for Premium Sweepstakes — PCH & Mega Millions. Delivered within 24 hours. Please confirm availability and let's get my leads ready! 🔥")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-stone-900 py-2.5 font-display text-xs font-bold tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-all shadow-xs"
              >
                ORDER $200 PACKAGE ↗
              </a>
              <a
                href="#contact"
                onClick={() => setSelectedTier("Premium Sweepstakes $200 Package (300 Leads — 24h Delivery)")}
                className="block w-full text-center text-[11px] text-stone-600 hover:text-stone-900 underline font-semibold"
              >
                Or Select for Quote Form ↓
              </a>
            </div>
          </div>

          {/* Tier 3: $300 — 500 Leads */}
          <div className="bento-card bg-[#CEC4BC] p-6 flex flex-col justify-between hover:border-stone-900 transition-all border border-amber-600/30 relative">
            <div className="absolute -top-3 right-4">
              <span className="rounded-full bg-emerald-700 text-white px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-sm">
                BETTER VALUE
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="pill-badge text-[10px] bg-amber-800 text-white border-amber-900">
                  PRO PIPELINE
                </span>
                <span className="text-[11px] font-bold text-emerald-800">⚡ 24h Delivery</span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-stone-900 mt-3 font-bold">
                Pro Campaign
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Scaling outbound operations &amp; brokers. Delivered within 24 hours.
              </p>

              <div className="my-5 border-y border-stone-800/15 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-stone-900 font-bold">$300</span>
                  <span className="text-[11px] text-emerald-800 font-bold uppercase">Save $35+</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-stone-900 font-display text-lg font-bold">
                  <span>🔥</span>
                  <span>500 Verified Leads</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-stone-800">
                <li className="flex items-center gap-2 font-bold text-emerald-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>⚡ Delivered within 24 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>500 Sweepstakes &amp; PCH Leads</span>
                </li>
                <li className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Better Value Rate ($0.60/lead)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Enhanced Survey Qualification</span>
                </li>
                <li className="flex items-center gap-2 font-semibold text-stone-900">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" />
                  <span>Priority 24h Replacement SLA</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={`https://wa.me/447456067627?text=${encodeURIComponent("Hi, I want to secure the $300 Package (500 Leads) for Premium Sweepstakes — PCH & Mega Millions. Delivered within 24 hours. Please confirm availability and let's get my leads ready! 🔥")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-stone-900 py-2.5 font-display text-xs font-bold tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-all shadow-xs"
              >
                ORDER $300 PACKAGE ↗
              </a>
              <a
                href="#contact"
                onClick={() => setSelectedTier("Premium Sweepstakes $300 Package (500 Leads — 24h Delivery)")}
                className="block w-full text-center text-[11px] text-stone-600 hover:text-stone-900 underline font-semibold"
              >
                Or Select for Quote Form ↓
              </a>
            </div>
          </div>

          {/* Tier 4: $500 — 1,000 Leads (Featured Dark Bento Card) */}
          <div className="bento-card bg-[#231F1D] text-[#FAF7F2] p-6 flex flex-col justify-between shadow-xl relative border-amber-400/50">
            <div className="absolute -top-3 right-4">
              <span className="rounded-full bg-amber-400 text-stone-950 px-3 py-0.5 text-[9px] font-extrabold uppercase tracking-wider shadow-md">
                🔥 MOST POPULAR · BEST VALUE
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="pill-badge text-[10px] bg-stone-800 text-amber-300 border-stone-700">
                  SCALE MASTER
                </span>
                <span className="text-[11px] font-bold text-amber-300">⚡ 24h Delivery</span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white mt-3 font-bold">
                Scale Master
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Heavy call centers, autodialers &amp; brokers. Delivered within 24 hours.
              </p>

              <div className="my-5 border-y border-stone-700/50 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-white font-bold">$500</span>
                  <span className="text-[11px] text-amber-300 font-bold uppercase">Save 25%!</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-amber-300 font-display text-lg font-bold">
                  <span>🔥</span>
                  <span>1,000 Verified Leads</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2 font-extrabold text-amber-300">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>⚡ Delivered within 24 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>1,000 Sweepstakes &amp; PCH Leads</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-amber-300">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Deepest Discount ($0.50 / lead)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>HLR Mobile Live Ping Screened</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Dedicated Senior Account Rep</span>
                </li>
                <li className="flex items-center gap-2 font-semibold text-white">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Priority 24h Replacement SLA</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={`https://wa.me/447456067627?text=${encodeURIComponent("Hi, I want to secure the $500 Package (1,000 Leads) for Premium Sweepstakes — PCH & Mega Millions. Delivered within 24 hours. Please confirm availability and let's get my leads ready! 🔥")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-amber-400 py-2.5 font-display text-xs font-bold tracking-wider text-stone-950 hover:bg-amber-300 transition-all shadow-md"
              >
                ORDER $500 PACKAGE ↗
              </a>
              <a
                href="#contact"
                onClick={() => setSelectedTier("Premium Sweepstakes $500 Package (1,000 Leads — 24h Delivery)")}
                className="block w-full text-center text-[11px] text-stone-300 hover:text-white underline font-semibold"
              >
                Or Select for Quote Form ↓
              </a>
            </div>
          </div>
        </div>

        {/* READY TO GET STARTED? Callout Box */}
        <div className="mt-12 rounded-3xl border border-stone-800/20 bg-[#231F1D] text-[#FAF7F2] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-stone-950 px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>READY TO GET STARTED?</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider font-bold text-white">
              Choose your package and message me now to confirm availability and secure your order.
            </h3>
            <p className="mt-3 text-base sm:text-lg text-amber-300 font-semibold">
              All packages (150 leads up to 1,000 leads) delivered within 24 hours guaranteed! 🔥
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
              <span className="flex items-center gap-1.5 font-bold text-amber-300">
                <CheckCircle2 className="h-4 w-4 text-amber-300" /> ⚡ 24-Hour Guaranteed Delivery
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Bigger packages, better value!
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Flexible package options.
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Clear 24h replacement credit.
              </span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/447456067627?text=${encodeURIComponent("Hi! I'm ready to choose my Premium Sweepstakes package (PCH & Mega Millions). Delivered within 24 hours. Please confirm current availability and let's get my leads ready! 🔥")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-200" />
                Message on WhatsApp (+44 7456 067627) ↗
              </a>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500 transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <Send className="h-4 w-4 text-sky-200" />
                Message on Telegram Desk ↗
              </a>
              <a
                href="#contact"
                onClick={() => setSelectedTier("Custom Enterprise Volume (2,500 - 10,000+ Leads)")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-stone-600 px-6 py-3.5 font-display text-xs uppercase tracking-wider text-stone-300 hover:text-white hover:border-white transition-all cursor-pointer"
              >
                Need Custom Volume (2,500+)? ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CLIENT FEEDBACK & CASE EVALUATIONS
      ───────────────────────────────────────────────────────────── */}
      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-14">
        <div className="bento-card bg-[#CEC4BC] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800/15 pb-5 mb-8 gap-3">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-stone-600">Client Feedback & Case Studies</p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900 mt-1">
                CLIENT FEEDBACK & CASE EVALUATIONS
              </h2>
            </div>
            <div className="flex items-center gap-1 text-amber-700">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="text-xs font-bold text-stone-900 ml-1.5">Demonstration Reviews</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-stone-800/15 bg-white/90 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="pill-badge text-[9px] bg-stone-900 text-white mb-3 inline-block">
                  FINTECH BENCHMARK
                </span>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "GlobalLeadsCenter delivered exactly within the agreed delivery window. The opt-in sourcing documentation
                  gave our compliance team complete confidence, and our contact rates were noticeably higher than previous
                  vendors."
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-stone-800/10 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-stone-900 text-white font-display flex items-center justify-center text-sm">
                  MD
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Marcus Davies</div>
                  <div className="text-[11px] text-stone-600">Marketing Director, UK Fintech</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-800/15 bg-white/90 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="pill-badge text-[9px] bg-stone-900 text-white mb-3 inline-block">
                  SWEEPSTAKES TRIAL
                </span>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "Their First-Hit freshness standards are genuine. We connected our cloud dialer with their SIP guidance
                  and observed an immediate 35% boost in live prospect answers on day one."
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-stone-800/10 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-stone-900 text-white font-display flex items-center justify-center text-sm">
                  EK
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Elena Kostas</div>
                  <div className="text-[11px] text-stone-600">Outbound Operations, Sweepstakes Operator</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-800/15 bg-white/90 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <span className="pill-badge text-[9px] bg-stone-900 text-white mb-3 inline-block">
                  TRADING PIPELINE REVIEW
                </span>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "Transparent communication from day one. When scaling our USA targeted investor campaign, they tailored
                  the state criteria and delivered formatted data directly to our specification."
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-stone-800/10 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-stone-900 text-white font-display flex items-center justify-center text-sm">
                  RH
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Robert Hayes</div>
                  <div className="text-[11px] text-stone-600">Managing Partner, Trading Group</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-stone-800/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
            <span>Feedback and evaluations reflect verified campaign trials, operator testing, and dialed performance benchmarks.</span>
            <span className="font-semibold text-stone-800">Documented Delivery History</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CONTACT & QUOTE REQUEST (Canva "CONTACT")
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Aside Information */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bento-card bg-[#CEC4BC] p-7">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-stone-600">Get In Touch</p>
              <h2 className="font-display text-3xl uppercase tracking-wider text-stone-900 mt-1">DIRECT CONTACT</h2>
              <p className="text-xs text-stone-700 mt-2 font-sans leading-relaxed">
                Have an urgent brief or require immediate volume availability? Reach our project coordinators on Telegram
                or WhatsApp for rapid scoping.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-badge w-full justify-between py-2.5 text-xs hover:bg-stone-100"
                >
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4 text-stone-700" /> Telegram (Primary)
                  </span>
                  <span className="font-semibold text-stone-600">@premiumleadscenter</span>
                </a>

                <a
                  href={CONTACT.telegramAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-badge w-full justify-between py-2.5 text-xs hover:bg-stone-100"
                >
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4 text-stone-700" /> Telegram (Alternative)
                  </span>
                  <span className="font-semibold text-stone-600">@globalleadscenter</span>
                </a>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-badge w-full justify-between py-2.5 text-xs hover:bg-stone-100"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-emerald-700" /> WhatsApp Direct
                  </span>
                  <span className="font-semibold text-stone-600">+44 7456 067627</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-800/15 bg-white/70 p-6 text-xs text-stone-700 space-y-2">
              <div className="font-bold text-stone-900 uppercase tracking-wider">Privacy & Lead Security</div>
              <p>
                Inquiries are encrypted and stored safely via Supabase with insert-only permissions. Your contact
                details are never published, shared or sold.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8 bento-card bg-[#CEC4BC] p-7 sm:p-10">
            <div className="border-b border-stone-800/15 pb-5 mb-6">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900">
                REQUEST A CAMPAIGN QUOTE
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Tell us your target audience, required volume, and delivery timeline.
              </p>
            </div>

            {submitStatus === "done" ? (
              <div className="py-10 text-center space-y-6">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-800 shadow-sm">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div>
                  <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-stone-900 font-bold">
                    Campaign Brief Ready!
                  </h4>
                  <p className="max-w-lg mx-auto text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
                    Your campaign brief has been compiled. Connect with our desk directly on <strong>Telegram</strong> or <strong>WhatsApp</strong> to lock in pricing and lead availability immediately.
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

                <div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus("idle")}
                    className="text-xs text-stone-600 hover:text-stone-900 underline font-semibold cursor-pointer"
                  >
                    ← Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Full Name *
                  </label>
                  <input name="full_name" className={fieldCls} placeholder="e.g. Alexander Stone" maxLength={100} />
                  {formErrors.full_name && (
                    <span className="text-[11px] text-destructive mt-1 block">{formErrors.full_name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={fieldCls}
                    placeholder="alex@company.com"
                    maxLength={255}
                  />
                  {formErrors.email && (
                    <span className="text-[11px] text-destructive mt-1 block">{formErrors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Company Name *
                  </label>
                  <input name="company" className={fieldCls} placeholder="e.g. Horizon Media Ltd" maxLength={150} />
                  {formErrors.company && (
                    <span className="text-[11px] text-destructive mt-1 block">{formErrors.company}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    defaultValue={selectedTier}
                    key={selectedTier}
                    className={fieldCls}
                  >
                    <option value="" disabled>Select a package or service</option>
                    <optgroup label="💎 Premium Sweepstakes Packages (PCH & Mega Millions) — 24h Delivery">
                      <option value="Premium Sweepstakes $100 Package (150 Leads — 24h Delivery)">$100 — 150 Leads (Delivered within 24h)</option>
                      <option value="Premium Sweepstakes $200 Package (300 Leads — 24h Delivery)">$200 — 300 Leads (Delivered within 24h)</option>
                      <option value="Premium Sweepstakes $300 Package (500 Leads — 24h Delivery)">$300 — 500 Leads (Delivered within 24h · Better Value!)</option>
                      <option value="Premium Sweepstakes $500 Package (1,000 Leads — 24h Delivery)">$500 — 1,000 Leads (Delivered within 24h · Best Value!)</option>
                      <option value="Custom Enterprise Volume (2,500 - 10,000+ Leads)">Custom Enterprise Volume (2,500 - 10,000+ Leads)</option>
                    </optgroup>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Communication & Dialer Solutions">Communication & Dialer Solutions</option>
                  </select>
                  {formErrors.service && (
                    <span className="text-[11px] text-destructive mt-1 block">{formErrors.service}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Target Country / Market *
                  </label>
                  <input name="target_country" className={fieldCls} placeholder="e.g. United States, UK, Australia" maxLength={100} />
                  {formErrors.target_country && (
                    <span className="text-[11px] text-destructive mt-1 block">{formErrors.target_country}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Estimated Volume / Timeline
                  </label>
                  <input
                    name="requirements"
                    className={fieldCls}
                    placeholder="e.g. 5,000 leads/month, starting next week"
                    maxLength={1000}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800 mb-1.5">
                    Project Details &amp; Qualification Criteria (Optional)
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    className={fieldCls}
                    placeholder="Briefly describe your offer, demographic criteria, age ranges, or any custom qualification questions..."
                    maxLength={3000}
                  />
                  {formErrors.details && (
                    <span className="text-[11px] text-destructive mt-1 block">{formErrors.details}</span>
                  )}
                </div>

                <div className="sm:col-span-2 pt-3 border-t border-stone-800/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        const form = e.currentTarget.closest("form");
                        if (form) {
                          form.dataset.targetChannel = "telegram";
                          form.requestSubmit();
                        }
                      }}
                      disabled={submitStatus === "sending"}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="h-4 w-4 text-sky-400" />
                      {submitStatus === "sending" ? "Preparing Brief..." : "Submit to Telegram Desk ↗"}
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
                      disabled={submitStatus === "sending"}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-300" />
                      Submit to WhatsApp ↗
                    </button>
                  </div>
                  <span className="text-[11px] text-stone-600 text-center sm:text-right font-medium">
                    Direct dispatch to senior desk
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
