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
import { SERVICES, CONTACT } from "@/lib/site";
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
  details: z.string().trim().min(10, "Please describe your project (at least 10 characters)").max(3000),
});

const fieldCls =
  "w-full rounded-xl border border-stone-800/20 bg-white/90 px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900 focus:bg-white";

function HomePage() {
  const [selectedTier, setSelectedTier] = useState<string>("Premium Sweepstakes Lead Generation");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleQuoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setFormErrors(errs);
      return;
    }
    setFormErrors({});
    setSubmitStatus("sending");
    const { error } = await supabase.from("quote_requests").insert({
      ...parsed.data,
      requirements: parsed.data.requirements || null,
    });
    setSubmitStatus(error ? "error" : "done");
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
            {/* Massive condensed background headline */}
            <h1 className="font-display text-[4.5rem] sm:text-[7.5rem] md:text-[10.5rem] lg:text-[13rem] leading-[0.8] tracking-tight text-stone-900 font-bold uppercase select-none transition-all">
              PORTFOLIO
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

            {/* Hero Image Showcase Cutout Banner */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-stone-800/20 bg-stone-900 text-[#FAF7F2] shadow-xl">
              <div className="grid lg:grid-cols-12 items-center">
                <div className="p-8 lg:p-12 lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-stone-800/80 px-3.5 py-1 text-xs uppercase tracking-wider text-amber-300 font-semibold">
                    <Sparkles className="h-3.5 w-3.5" /> High-Performance Lead Generation
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-[#FAF7F2]">
                    High-Intent Prospects for Serious Campaigns
                  </h2>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    We plan targeted audience acquisition for sweepstakes, financial promotions, lottery-interest
                    campaigns, and B2B pipelines. Freshness and delivery windows are agreed upfront with complete opt-in
                    documentation.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="#services"
                      className="rounded-full bg-[#FAF7F2] px-6 py-2.5 font-display text-xs tracking-wider text-stone-900 hover:bg-stone-200 transition-colors"
                    >
                      EXPLORE SERVICES
                    </a>
                    <a
                      href="#workflow"
                      className="pill-badge bg-stone-800/90 text-[#FAF7F2] border-stone-700 hover:bg-stone-700"
                    >
                      <Play className="h-3 w-3 fill-current" /> WATCH SYSTEM REEL
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[280px] bg-stone-950/60 overflow-hidden flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-stone-800/30">
                  <img
                    src="/canva-assets/hero-portrait.jpg"
                    alt="Campaign strategy and workflow"
                    className="h-full w-full object-cover rounded-xl filter saturate-90 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="pill-badge bg-white/90 text-stone-900 text-[11px] shadow-sm">
                      Targeting · Freshness · Compliance
                    </span>
                  </div>
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
                      <div className="font-display text-2xl sm:text-3xl text-stone-900 font-bold">20M+</div>
                      <div className="text-[10px] sm:text-xs text-stone-600 font-semibold uppercase tracking-wider">
                        Leads Delivered
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-2xl sm:text-3xl text-stone-900 font-bold">5Yrs+</div>
                      <div className="text-[10px] sm:text-xs text-stone-600 font-semibold uppercase tracking-wider">
                        Expertise
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portrait with handwritten sticker */}
                <div className="sm:col-span-5 relative flex justify-center">
                  <div className="relative rounded-xl overflow-hidden border border-stone-800/20 bg-stone-400 shadow-md aspect-[4/5] w-full max-w-[210px]">
                    <img
                      src="/canva-assets/who-portrait.jpg"
                      alt="Primevalue Hub team lead"
                      className="h-full w-full object-cover filter saturate-95"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="font-script text-base text-stone-900 bg-white/90 px-2 py-0.5 rounded shadow-xs inline-block -rotate-3">
                        Primevalue Hub
                      </span>
                    </div>
                  </div>
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

          {/* Card B: QUALIFICATIONS & STANDARDS (Canva "QUALIFICATIONS") */}
          <div className="bento-card bg-[#CEC4BC] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-800/15 pb-4 mb-6">
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900">
                  QUALIFICATIONS
                </h2>
                <Award className="h-5 w-5 text-stone-700" />
              </div>

              <div className="grid sm:grid-cols-12 gap-6 items-center">
                {/* Certificate Mockup & Tool Badges */}
                <div className="sm:col-span-6 space-y-4">
                  <div className="rounded-xl border border-stone-800/20 bg-white p-3 shadow-xs">
                    <img
                      src="/canva-assets/qual-cert.jpg"
                      alt="Lead standards certificate"
                      className="w-full object-contain rounded"
                    />
                    <p className="text-[11px] font-semibold text-stone-800 text-center mt-2 uppercase tracking-wide">
                      Verified Campaign Compliance Standards
                    </p>
                  </div>

                  {/* Platforms Row */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900">Meta Ads</span>
                    <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900">Google</span>
                    <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900">HubSpot</span>
                    <span className="pill-badge text-[10px] bg-stone-900 text-white border-stone-900">Supabase</span>
                  </div>
                </div>

                {/* Right Certifications Pills Stack */}
                <div className="sm:col-span-6 flex flex-col justify-center space-y-2.5">
                  <div className="pill-badge w-full justify-between py-2 text-xs">
                    <span>Opt-In Consent Verified</span>
                    <Check className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <div className="pill-badge w-full justify-between py-2 text-xs">
                    <span>GDPR & TCPA Compliant</span>
                    <Check className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <div className="pill-badge w-full justify-between py-2 text-xs">
                    <span>Real-Time Bot & Fraud Scrubbing</span>
                    <Check className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <div className="pill-badge w-full justify-between py-2 text-xs">
                    <span>Direct Carrier SIP Trunks</span>
                    <Check className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <div className="pill-badge w-full justify-between py-2 text-xs">
                    <span>Documented Sourcing Reports</span>
                    <Check className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-800/15 flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold uppercase tracking-wider">Quality Guarantee:</span>
              <span>Screened, fresh & lawful delivery standards</span>
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
                  ALL 14 →
                </Link>
              </div>

              {/* 2x3 Grid matching the Canva layout */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* 1. Sweepstakes */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <div className="h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10">
                      <img
                        src="/canva-assets/service-1.jpg"
                        alt="Sweepstakes lead generation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      SWEEPSTAKES
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Sweepstakes Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Targeted opt-in acquisition and brief-led qualification for authorized campaigns.
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
                    <div className="h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10">
                      <img
                        src="/canva-assets/service-2.jpg"
                        alt="PCH lead generation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      PRIZE & PROMO
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      PCH & Prize Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Organized prize-and-promotion targeting with documented consent records.
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
                    <div className="h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10">
                      <img
                        src="/canva-assets/service-3.jpg"
                        alt="First hit lead generation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      FIRST HIT
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      First Hit Freshness
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Newly acquired prospects delivered within agreed time windows. No recycled lists.
                    </p>
                  </div>
                  <Link
                    to="/services/first-hit"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 4. Mega Millions / Lottery */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <div className="h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10">
                      <img
                        src="/canva-assets/service-4.jpg"
                        alt="Lottery campaign leads"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      LOTTERY AUDIENCE
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Mega Millions Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Jurisdiction-aware lottery-interest prospect generation for lawful operators.
                    </p>
                  </div>
                  <Link
                    to="/services/mega-millions"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    View details <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>

                {/* 5. Crypto & Financial */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <div className="h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10">
                      <img
                        src="/canva-assets/service-5.jpg"
                        alt="Crypto lead generation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      FINTECH & CRYPTO
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      Crypto & Forex Leads
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Prospect programmes for digital-asset businesses and licensed trading brokers.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    Request Quote <ChevronRight className="h-3 w-3" />
                  </a>
                </div>

                {/* 6. B2B & USA Targeted */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs flex flex-col justify-between hover:border-stone-900 transition-colors">
                  <div>
                    <div className="h-28 overflow-hidden rounded-lg bg-stone-200 mb-3 border border-stone-800/10">
                      <img
                        src="/canva-assets/service-6.jpg"
                        alt="B2B lead generation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] py-0.5 px-2 mb-2">
                      B2B & USA
                    </span>
                    <h3 className="font-display text-base uppercase tracking-wide text-stone-900 mt-1">
                      B2B & USA Nationwide
                    </h3>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                      Decision-maker prospecting by industry, role, state, and demographic criteria.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-3 text-[11px] font-semibold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    Request Quote <ChevronRight className="h-3 w-3" />
                  </a>
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

          {/* Card D: CASE STUDY (Canva In-Depth Case Study Breakdown) */}
          <div id="case-study" className="bento-card bg-[#CEC4BC] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-800/15 pb-4 mb-6">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900">
                    CASE STUDY
                  </h2>
                  <p className="text-xs text-stone-600 mt-0.5">Verified international acquisition breakdown</p>
                </div>
                <span className="pill-badge bg-emerald-800 text-white border-emerald-900 text-[10px]">
                  +142% CONVERSION
                </span>
              </div>

              {/* Case Study Summary Narrative */}
              <div className="rounded-xl border border-stone-800/20 bg-stone-900 text-[#FAF7F2] p-4 mb-5 shadow-xs">
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  We engineered a 30-day multi-channel lead acquisition campaign covering targeting, funnel optimization,
                  and direct SIP telephony routing. In 3 months, verified opt-in engagement grew by 142%.
                </p>
              </div>

              {/* 3 Step Breakdown matching the Canva template */}
              <div className="space-y-4">
                {/* 1. Website 01 Funnel */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs">
                  <div className="grid sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                        STEP 01 · FUNNEL OPTIMIZATION
                      </span>
                      <h4 className="font-display text-sm uppercase tracking-wide text-stone-900 mt-0.5">
                        Acquisition Funnel & Landing Architecture
                      </h4>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        Audited the existing web journey, eliminated friction in lead disclosures, and rebuilt the
                        opt-in capture mechanism from the ground up to ensure high intent.
                      </p>
                    </div>
                    <div className="sm:col-span-5 h-20 overflow-hidden rounded-lg bg-stone-200 border border-stone-800/10">
                      <img
                        src="/canva-assets/case-bag.jpg"
                        alt="Funnel optimization preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Instagram Feed / Audience Grid 02 */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs">
                  <div className="grid sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                        STEP 02 · AUDIENCE SEGMENTATION
                      </span>
                      <h4 className="font-display text-sm uppercase tracking-wide text-stone-900 mt-0.5">
                        30-Day Multi-Source Prospect Calendar
                      </h4>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        Segmented audiences by geographic and demographic parameters, deploying creative hooks across
                        social and search channels for authentic interest.
                      </p>
                    </div>
                    <div className="sm:col-span-5 h-20 overflow-hidden rounded-lg bg-stone-200 border border-stone-800/10">
                      <img
                        src="/canva-assets/case-grid.jpg"
                        alt="Audience grid preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Video Content / Direct Engagement 03 */}
                <div className="rounded-xl border border-stone-800/20 bg-white/95 p-3.5 shadow-xs">
                  <div className="grid sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-7">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
                        STEP 03 · DIRECT DISPATCH & CALL ROUTING
                      </span>
                      <h4 className="font-display text-sm uppercase tracking-wide text-stone-900 mt-0.5">
                        Short-Form Mobile & Dialer Automation
                      </h4>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        Routed qualified leads in real time into cloud dialers and client messaging endpoints,
                        maximizing connection rates within fresh delivery windows.
                      </p>
                    </div>
                    <div className="sm:col-span-5 h-20 overflow-hidden rounded-lg bg-stone-200 border border-stone-800/10">
                      <img
                        src="/canva-assets/case-phones.jpg"
                        alt="Mobile engagement mockups"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-800/15 flex items-center justify-between text-xs text-stone-700">
              <span>Full case study verified on record.</span>
              <Link to="/portfolio" className="font-semibold text-stone-900 hover:underline">
                Explore Portfolio Sheets →
              </Link>
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
                Through dynamic system automation and intentional campaign architecture, our proprietary pipelines ingest,
                verify, and route leads seamlessly into client CRM systems and telephony dialers.
              </p>
            </div>

            {/* Video Modal Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="pill-badge bg-stone-900 text-[#FAF7F2] border-stone-800 hover:bg-stone-800 text-xs py-2.5 px-5">
                  <Play className="h-3.5 w-3.5 fill-current mr-1.5" /> Watch System Workflow (1:56)
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl bg-[#231F1D] text-[#FAF7F2] border-stone-700">
                <DialogHeader className="pr-8">
                  <DialogTitle className="font-display text-2xl uppercase tracking-wide text-[#FAF7F2]">
                    Proprietary Campaign System Workflow
                  </DialogTitle>
                  <DialogDescription className="text-stone-400 text-xs">
                    Recorded system demonstration. Sensitive client record areas have been permanently redacted for public viewing.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black mt-3">
                  <video controls playsInline preload="metadata" poster={systemPoster.url} className="h-full w-full object-contain">
                    <source src={systemVideo.url} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* 4 Interactive Phone Mockup Frames (Replicating Canva Videography Row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone 1: Targeting */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                {/* Notch */}
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                {/* Screen Content */}
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 01</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">Audience Brief</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Targeted geo-filters, demographic parameters & authorized offer setup.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Region:</span><span className="text-emerald-400">US / CA / UK</span></div>
                    <div className="flex justify-between"><span>Consent:</span><span className="text-emerald-400">Explicit Opt-In</span></div>
                  </div>
                </div>
                {/* Home Indicator */}
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                CAMPAIGN TARGETING
              </span>
              <span className="text-[10px] text-stone-600 text-center">Multi-channel opt-in capture</span>
            </div>

            {/* Phone 2: Verification */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 02</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">Scrub & Filter</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Bot elimination, syntax checks, duplicate removal & compliance logs.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Bot Filter:</span><span className="text-emerald-400">Active (99.8%)</span></div>
                    <div className="flex justify-between"><span>DNC Check:</span><span className="text-emerald-400">Passed</span></div>
                  </div>
                </div>
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                QUALITY SCRUBBING
              </span>
              <span className="text-[10px] text-stone-600 text-center">Automated syntax & bot filters</span>
            </div>

            {/* Phone 3: Telephony */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 03</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">SIP & Dialer</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Carrier trunking and cloud dialer integration for instantaneous connect.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>SIP Line:</span><span className="text-emerald-400">Active Trunk</span></div>
                    <div className="flex justify-between"><span>Dialer:</span><span className="text-emerald-400">Ready</span></div>
                  </div>
                </div>
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                CALLER ROUTING
              </span>
              <span className="text-[10px] text-stone-600 text-center">SIP trunking & cloud dialer</span>
            </div>

            {/* Phone 4: CRM Delivery */}
            <div className="card-lift flex flex-col items-center">
              <div className="w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[5px] border-stone-900 bg-stone-950 p-2 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="w-16 h-3 bg-stone-900 rounded-full mx-auto mb-2"></div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-stone-800 to-stone-900 p-2.5 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-semibold text-amber-300 uppercase">STAGE 04</span>
                    <h5 className="font-display text-xs uppercase text-white tracking-wide mt-0.5">CRM Handover</h5>
                    <p className="text-[9px] text-stone-300 mt-1 leading-tight">
                      Secure encrypted delivery into client database, CSV, or webhook endpoints.
                    </p>
                  </div>
                  <div className="rounded bg-black/40 p-1.5 text-[8px] text-stone-300 space-y-1">
                    <div className="flex justify-between"><span>Delivery:</span><span className="text-emerald-400">Within Window</span></div>
                    <div className="flex justify-between"><span>Format:</span><span className="text-emerald-400">API / CSV</span></div>
                  </div>
                </div>
                <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mt-2"></div>
              </div>
              <span className="font-display text-xs uppercase tracking-wider text-stone-900 font-bold mt-3">
                DELIVERY & REVIEW
              </span>
              <span className="text-[10px] text-stone-600 text-center">Encrypted client handover</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. RATE CARD (Canva "RATE CARD")
      ───────────────────────────────────────────────────────────── */}
      <section id="rate-card" className="mx-auto max-w-7xl px-5 py-14">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-stone-600">Transparent Campaign Tiers</p>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-stone-900 mt-1">
            CAMPAIGN RATE CARD
          </h2>
          <p className="mt-3 text-sm text-stone-700 font-sans">
            Clear standards, predictable delivery schedules, and brief-led qualification fields.
            Choose a campaign tier to pre-select it in your quote inquiry below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Tier 1: Starter Batch */}
          <div className="bento-card bg-[#CEC4BC] p-7 flex flex-col justify-between hover:border-stone-900 transition-all">
            <div>
              <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] border-stone-800">
                PILOT & VALIDATION
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-stone-900 mt-3">Starter Test Batch</h3>
              <p className="text-xs text-stone-700 mt-1">
                Perfect for evaluating lead freshness, contact rates, and dialing responses.
              </p>

              <div className="my-6 border-y border-stone-800/15 py-4">
                <span className="font-display text-3xl text-stone-900 font-bold">500 - 1,000</span>
                <span className="text-xs text-stone-600 ml-2 font-semibold uppercase">Verified Leads</span>
              </div>

              <ul className="space-y-2.5 text-xs text-stone-800">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> 1 Permitted Target Country
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Explicit Opt-In Consent Documentation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Agreed Freshness Window
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Duplicate & Syntax Screening
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setSelectedTier("Starter Test Batch (500 - 1,000 leads)")}
              className="mt-8 block w-full text-center rounded-full border border-stone-800/30 bg-white/90 py-2.5 font-display text-xs tracking-wider text-stone-900 hover:bg-stone-900 hover:text-white transition-all shadow-xs"
            >
              SELECT STARTER BATCH
            </a>
          </div>

          {/* Tier 2: Growth Scale (Highlighted) */}
          <div className="bento-card bg-[#231F1D] text-[#FAF7F2] p-7 flex flex-col justify-between shadow-xl relative border-stone-700">
            <div className="absolute -top-3 right-6">
              <span className="rounded-full bg-amber-400 text-stone-950 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                MOST POPULAR
              </span>
            </div>

            <div>
              <span className="pill-badge text-[10px] bg-stone-800 text-amber-300 border-stone-700">
                ACTIVE OPERATIONS
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#FAF7F2] mt-3">Growth Pipeline</h3>
              <p className="text-xs text-stone-400 mt-1">
                Optimized for active outbound calling teams, brokers, and ongoing promotion campaigns.
              </p>

              <div className="my-6 border-y border-stone-700/50 py-4">
                <span className="font-display text-3xl text-[#FAF7F2] font-bold">2,500 - 10,000</span>
                <span className="text-xs text-stone-400 ml-2 font-semibold uppercase">Fresh Leads</span>
              </div>

              <ul className="space-y-2.5 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" /> Multi-Country Geographic Targeting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" /> Custom Qualification & Survey Fields
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" /> Rapid First-Hit Freshness Windows
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" /> SIP Trunk & Dialer Setup Consultation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" /> Priority Batch Delivery Schedules
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setSelectedTier("Growth Pipeline (2,500 - 10,000 leads)")}
              className="mt-8 block w-full text-center rounded-full bg-[#FAF7F2] py-2.5 font-display text-xs tracking-wider text-stone-950 hover:bg-stone-200 transition-all shadow-md font-bold"
            >
              SELECT GROWTH PIPELINE
            </a>
          </div>

          {/* Tier 3: Enterprise Custom */}
          <div className="bento-card bg-[#CEC4BC] p-7 flex flex-col justify-between hover:border-stone-900 transition-all">
            <div>
              <span className="pill-badge text-[10px] bg-stone-900 text-[#FAF7F2] border-stone-800">
                ENTERPRISE NETWORK
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-stone-900 mt-3">Custom Enterprise</h3>
              <p className="text-xs text-stone-700 mt-1">
                Bespoke high-volume architecture, dedicated dialer feeds, and bespoke compliance handling.
              </p>

              <div className="my-6 border-y border-stone-800/15 py-4">
                <span className="font-display text-3xl text-stone-900 font-bold">10,000+</span>
                <span className="text-xs text-stone-600 ml-2 font-semibold uppercase">High-Volume Scale</span>
              </div>

              <ul className="space-y-2.5 text-xs text-stone-800">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Nationwide US & Global Sourcing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Real-time Webhook / API CRM Ingestion
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Dedicated Telephony & DID Sourcing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-800 shrink-0" /> Dedicated Account Campaign Manager
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setSelectedTier("Custom Enterprise (10,000+ leads)")}
              className="mt-8 block w-full text-center rounded-full border border-stone-800/30 bg-white/90 py-2.5 font-display text-xs tracking-wider text-stone-900 hover:bg-stone-900 hover:text-white transition-all shadow-xs"
            >
              SELECT ENTERPRISE
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. TESTIMONIALS (Canva "TESTIMONIALS")
      ───────────────────────────────────────────────────────────── */}
      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-14">
        <div className="bento-card bg-[#CEC4BC] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-800/15 pb-5 mb-8 gap-3">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-stone-600">Client Feedback</p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-stone-900 mt-1">
                TESTIMONIALS
              </h2>
            </div>
            <div className="flex items-center gap-1 text-amber-700">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="text-xs font-bold text-stone-900 ml-1.5">5.0 Client Rating</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-stone-800/15 bg-white/90 p-5 shadow-xs flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                "GlobalLeadsCenter delivered exactly within the agreed delivery window. The opt-in sourcing documentation
                gave our compliance team complete confidence, and our contact rates were noticeably higher than previous
                vendors."
              </p>
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
              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                "Their First-Hit freshness standards are genuine. We connected our cloud dialer with their SIP guidance
                and observed an immediate 35% boost in live prospect answers on day one."
              </p>
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
              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                "Transparent communication from day one. When scaling our USA targeted investor campaign, they tailored
                the state criteria and delivered formatted data directly to our specification."
              </p>
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
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-800 animate-bounce" />
                <h4 className="font-display text-3xl uppercase tracking-wide text-stone-900">Inquiry Received</h4>
                <p className="max-w-md mx-auto text-sm text-stone-700">
                  Thank you. Our coordination team has received your brief and will review requirements and availability
                  before preparing a structured proposal.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="pill-badge bg-stone-900 text-white border-stone-900 mt-4 text-xs"
                >
                  Send another inquiry
                </button>
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
                    <option value="" disabled>Select a campaign service</option>
                    <option value="Starter Test Batch (500 - 1,000 leads)">Starter Test Batch (500 - 1,000 leads)</option>
                    <option value="Growth Pipeline (2,500 - 10,000 leads)">Growth Pipeline (2,500 - 10,000 leads)</option>
                    <option value="Custom Enterprise (10,000+ leads)">Custom Enterprise (10,000+ leads)</option>
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
                    Project Details & Qualification Criteria *
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

                {submitStatus === "error" && (
                  <div className="sm:col-span-2 p-3 rounded-lg bg-red-100 text-red-800 text-xs">
                    Something went wrong sending your inquiry. Please try again or reach out directly on Telegram.
                  </div>
                )}

                <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitStatus === "sending"}
                    className="w-full sm:w-auto rounded-full bg-stone-900 px-8 py-3.5 font-display text-xs tracking-wider text-[#FAF7F2] hover:bg-stone-800 transition-colors shadow-md disabled:opacity-50"
                  >
                    {submitStatus === "sending" ? "SUBMITTING BRIEF..." : "SUBMIT INQUIRY →"}
                  </button>
                  <span className="text-[11px] text-stone-600">Response typically within 2-4 hours.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
