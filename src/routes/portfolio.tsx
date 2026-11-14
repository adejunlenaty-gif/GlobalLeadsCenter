import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock,
  Database,
  FileCheck,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BUYER_CONFIDENCE, PACKAGES, CONTACT } from "@/lib/site";
import sweepstakes from "@/assets/sweepstakes-sample.png.asset.json";
import tracking from "@/assets/campaign-tracking-sample.png.asset.json";
import wallet from "@/assets/wallet-audience-sample.png.asset.json";
import qualification from "@/assets/qualification-sample.png.asset.json";
import crypto from "@/assets/crypto-campaign-sample.png.asset.json";
import commerce from "@/assets/commerce-sample.png.asset.json";
import growth from "@/assets/campaign-growth-graphic.png.asset.json";
import systemVideo from "@/assets/system-workflow-redacted.mp4.asset.json";
import systemPoster from "@/assets/system-workflow-poster.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: meta(
      "Buyer Proof, Compliance & Campaign Samples — Globalleadscenter",
      "Inspect verifiable proof of opt-in sourcing, consent audit tokens, freshness delivery standards, and redacted campaign sample sheets."
    ),
  }),
  component: PortfolioPage,
});

const SAMPLES = [
  {
    image: sweepstakes,
    category: "Promotional",
    title: "Sweepstakes Audience Manifest",
    description: "Sample audience sheet showing geographic and qualification fields with verified opt-in timestamps.",
    redacted: true,
  },
  {
    image: tracking,
    category: "Operations",
    title: "Campaign Channel & Funnel Tracking",
    description: "Multi-channel funnel analytics showing acquisition sources, qualification steps, and delivery velocity.",
    redacted: true,
  },
  {
    image: wallet,
    category: "Web3 Security",
    title: "Hardware Wallet Audience Sample",
    description: "Country-segmented audience manifest for high-intent digital asset security buyers.",
    redacted: true,
  },
  {
    image: qualification,
    category: "Qualification",
    title: "International Lead Qualification Sample",
    description: "Cross-border qualification sheet formatted with carrier checks and compliance tokens.",
    redacted: true,
  },
  {
    image: crypto,
    category: "Cryptocurrency",
    title: "Crypto Campaign Lead Manifest",
    description: "Active trader campaign sheet showing experience tiers, permitted regions, and contact data.",
    redacted: true,
  },
  {
    image: commerce,
    category: "E-Commerce",
    title: "Commerce & Reward Inquiry Sample",
    description: "Consumer retail inquiry structure showing order interest and verified mobile contact lines.",
    redacted: true,
  },
  {
    image: growth,
    category: "Analytics",
    title: "Campaign Growth & Delivery Velocity",
    description: "Illustrative delivery ramp chart demonstrating volume pacing from pilot to enterprise scale.",
    redacted: false,
  },
];

function PortfolioPage() {
  return (
    <div className="bg-[#D8CFCA] text-stone-900 font-sans min-h-screen">
      <PageHero
        eyebrow="Verification & Proof Center"
        title="Buyer Confidence: Sourcing, Consent & Delivery Proof"
        intro="We believe in absolute operational transparency. Inspect our data verification standards, consent compliance tokens, live system workflow, and redacted lead manifests."
      />

      {/* 1. BUYER CONFIDENCE PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-script text-2xl text-stone-700">Verified Standards</span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider text-stone-900 font-bold mt-1">
            How We Guarantee Quality & Compliance
          </h2>
          <p className="mt-2 text-sm text-stone-700">
            Every batch delivered meets five strict commercial verification pillars.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BUYER_CONFIDENCE.map((item, idx) => (
            <div key={item.title} className="bento-card p-6 flex flex-col justify-between bg-[#FAF7F2]">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-amber-800">
                  {item.tagline}
                </span>
                <h3 className="font-display text-xl uppercase tracking-wider text-stone-900 font-bold mt-2">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-stone-700">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-800/10 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                <span>Audited in every delivery manifest</span>
              </div>
            </div>
          ))}

          {/* 100% Replacement Guarantee Feature Card */}
          <div className="bento-card-dark p-6 flex flex-col justify-between text-[#FAF7F2]">
            <div>
              <span className="pill-badge bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-[11px]">
                Zero-Risk Guarantee
              </span>
              <h3 className="font-display text-xl uppercase tracking-wider text-[#FAF7F2] font-bold mt-3">
                100% Free Replacement Warranty
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-stone-300">
                Should any delivered lead record contain an invalid phone number, disconnected line, or duplicate from a previous batch within 48 hours of delivery, our team replaces it 1-to-1 without question.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-medium">Included with all packages</span>
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYSTEM WORKFLOW VIDEO & AUDIT */}
      <section className="border-y border-stone-800/15 bg-[#CDC4BC] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-800/15 pb-6">
            <div>
              <p className="font-script text-xl text-stone-700">Live Infrastructure</p>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900 font-bold">
                Campaign Operations System Video
              </h2>
            </div>
            <p className="flex items-center gap-2 text-xs font-semibold text-stone-700">
              <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" />
              Private records & audio permanently removed for public demonstration
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-stone-800/20 bg-stone-900 shadow-xl">
                <div className="relative aspect-[16/10] bg-stone-950 flex items-center justify-center">
                  <video
                    aria-label="Campaign system workflow video"
                    controls
                    playsInline
                    preload="metadata"
                    poster={systemPoster.url}
                    className="h-full w-full object-contain"
                  >
                    <source src={systemVideo.url} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="pill-badge bg-stone-900 text-[#FAF7F2] text-[11px]">
                Video Walkthrough · 1:56
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wider text-stone-900 font-bold">
                End-to-End Ingestion, Scrubbing & Delivery
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Watch our operational dashboard in action. This footage shows real-time lead ingestion from live campaigns, automated syntax parsing, live HLR carrier pings to weed out disconnected numbers, and final manifest export into encrypted batches.
              </p>

              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Demonstrates automated phone status screening prior to client handover</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Shows ISO timestamping and geographic metadata assignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Audio removed and contact fields blurred to strictly protect consumer privacy</span>
                </li>
              </ul>

              <div className="pt-2">
                <Button asChild className="bg-stone-900 text-[#FAF7F2] hover:bg-stone-800">
                  <Link to="/contact">Request Full Campaign Audit Sample →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REDACTED SAMPLE MANIFESTS */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-800/15 pb-6">
          <div>
            <p className="font-script text-xl text-stone-700">Audit Proof</p>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-stone-900 font-bold">
              Redacted Lead Manifests & Field Structure
            </h2>
          </div>
          <span className="pill-badge bg-white/80 text-stone-700 border-stone-800/20 text-xs">
            7 Verified Sample Formats
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLES.map((sample) => (
            <article
              key={sample.title}
              className="bento-card flex flex-col justify-between overflow-hidden bg-[#FAF7F2] transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] border-b border-stone-800/10 bg-stone-200/60 p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={sample.image.url}
                  alt={sample.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-800">
                    {sample.category}
                  </span>
                  <h3 className="font-display text-lg uppercase tracking-wider text-stone-900 font-bold mt-1">
                    {sample.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    {sample.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-800/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-stone-500">
                    {sample.redacted ? "Privacy Redacted" : "Illustrative Chart"}
                  </span>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-stone-800/30 hover:bg-stone-200">
                        <Maximize2 className="h-3 w-3 mr-1" /> Expand
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto bg-[#FAF7F2] border-stone-800/20">
                      <DialogHeader className="pr-8">
                        <DialogTitle className="font-display text-xl uppercase tracking-wider text-stone-900">
                          {sample.title}
                        </DialogTitle>
                        <DialogDescription className="text-xs text-stone-600">
                          {sample.redacted
                            ? "All private consumer phone numbers, personal names, and financial details have been permanently redacted from this public sample in compliance with privacy mandates."
                            : sample.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 overflow-hidden rounded-xl border border-stone-800/15 bg-white p-2">
                        <img
                          src={sample.image.url}
                          alt={sample.title}
                          className="max-h-[70dvh] w-full object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
