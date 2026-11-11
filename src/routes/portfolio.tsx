import { createFileRoute } from "@tanstack/react-router";
import { Maximize2, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, meta } from "@/components/SiteChrome";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  head: () => ({ meta: meta("Campaign Samples, System Video & Graphics — Globalleadscenter", "Explore Globalleadscenter's campaign samples, system workflow video and graphics, with private information removed for public viewing.") }),
  component: Portfolio,
});

const SAMPLES = [
  { image: sweepstakes, category: "Sweepstakes", title: "Sweepstakes audience sample", description: "A sample audience sheet with regional campaign fields.", redacted: true },
  { image: tracking, category: "Campaign operations", title: "Engagement & follow-up tracking", description: "Campaign channels, funnel stages and engagement sources.", redacted: true },
  { image: wallet, category: "Digital security", title: "Hardware-wallet audience sample", description: "A country-segmented audience sheet for a wallet-related campaign.", redacted: true },
  { image: qualification, category: "Qualification", title: "International qualification sample", description: "A sample qualification sheet organised across countries.", redacted: true },
  { image: crypto, category: "Cryptocurrency", title: "Crypto campaign sample", description: "A campaign sheet showing country and currency fields.", redacted: true },
  { image: commerce, category: "E-commerce", title: "Commerce campaign sample", description: "A sample commerce sheet with campaign and order field structure.", redacted: true },
  { image: growth, category: "Campaign graphics", title: "Campaign growth graphic", description: "An illustrative graphic for campaign and audience growth.", redacted: false },
];

function Portfolio() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Campaign samples, video & graphics" intro="A selection of campaign sample sheets, system footage and creative artwork from Globalleadscenter." />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b pb-6">
          <h2 className="text-2xl font-semibold">Selected portfolio</h2>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 shrink-0 text-primary" />Personal and financial details redacted</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="card-lift flex flex-col overflow-hidden rounded-lg border bg-card">
            <div className="flex aspect-[16/10] items-center border-b bg-secondary p-3">
              <video aria-label="Campaign system workflow video" controls playsInline preload="metadata" poster={systemPoster.url} className="h-full w-full object-contain">
                <source src={systemVideo.url} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase text-primary">System portfolio</p>
              <h3 className="mt-3 text-xl font-semibold">Campaign system workflow</h3>
              <p className="mt-3 text-sm text-muted-foreground">Supplied system footage with the private record area permanently covered and audio removed for public viewing.</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <span className="text-xs text-muted-foreground">Privacy-edited video · 1:56</span>
                <Dialog>
                  <DialogTrigger asChild><Button variant="outline" size="sm" aria-label="View campaign system workflow video"><Maximize2 />View</Button></DialogTrigger>
                  <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-lg">
                    <DialogHeader className="pr-8"><DialogTitle>Campaign system workflow</DialogTitle><DialogDescription>Private record areas are permanently covered. Audio has been removed.</DialogDescription></DialogHeader>
                    <video aria-label="Expanded campaign system workflow video" controls playsInline preload="metadata" poster={systemPoster.url} className="max-h-[70dvh] w-full object-contain">
                      <source src={systemVideo.url} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </article>
          {SAMPLES.map((sample) => (
            <article key={sample.title} className="card-lift flex flex-col overflow-hidden rounded-lg border bg-card">
              <div className="flex aspect-[16/10] items-center border-b bg-secondary p-3">
                <img src={sample.image.url} alt={sample.title + (sample.redacted ? " with private details redacted" : "")} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase text-primary">{sample.category}</p>
                <h3 className="mt-3 text-xl font-semibold">{sample.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{sample.description}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-xs text-muted-foreground">{sample.redacted ? "Redacted sample" : "Illustrative artwork"}</span>
                  <Dialog>
                    <DialogTrigger asChild><Button variant="outline" size="sm" aria-label={`View ${sample.title}`}><Maximize2 />View</Button></DialogTrigger>
                    <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-lg">
                      <DialogHeader className="pr-8"><DialogTitle>{sample.title}</DialogTitle><DialogDescription>{sample.redacted ? "Private details have been permanently removed from this public sample." : "Illustrative campaign artwork, not a performance report."}</DialogDescription></DialogHeader>
                      <img src={sample.image.url} alt={sample.title} className="max-h-[70dvh] w-full object-contain" />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}