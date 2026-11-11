import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Send, MessageCircle, ExternalLink, ArrowRight } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site";
import { Button } from "@/components/ui/button";
import profile from "@/assets/primevalue-hub-profile.jpg.asset.json";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Globalleadscenter home">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-stone-800/20 bg-stone-300">
        <img
          src={profile.url}
          alt="Primevalue Hub profile image"
          width={44}
          height={44}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-script -mb-1 text-base text-stone-600 transition-colors group-hover:text-stone-900">
          Primevalue's
        </span>
        <span className="font-display text-lg font-bold tracking-wider text-stone-900">
          GLOBAL<span className="text-amber-700">LEADS</span>CENTER
        </span>
      </div>
    </Link>
  );
}

export const CANVA_SECTIONS = [
  { to: "/#services", label: "MY WORK" },
  { to: "/#case-study", label: "CASE STUDY" },
  { to: "/#workflow", label: "WORKFLOW" },
  { to: "/#rate-card", label: "RATE CARD" },
  { to: "/#testimonials", label: "TESTIMONIALS" },
  { to: "/#contact", label: "CONTACT" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/15 bg-[#D8CFCA]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Logo />

        {/* Canva-inspired condensed uppercase navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {CANVA_SECTIONS.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="font-display text-sm tracking-widest text-stone-700 transition-colors hover:text-stone-950 hover:underline hover:decoration-amber-700 hover:underline-offset-4"
            >
              {n.label}
            </a>
          ))}
          <Link
            to="/services"
            className="font-display text-xs tracking-widest text-stone-500 hover:text-stone-800"
          >
            ALL SERVICES →
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-badge hover:bg-stone-100 transition-colors"
          >
            <Send className="h-3.5 w-3.5 text-stone-700" />
            Telegram
          </a>
          <a
            href="/#contact"
            className="rounded-full bg-stone-900 px-5 py-2 font-display text-xs tracking-wider text-[#FAF7F2] transition-colors hover:bg-stone-800 shadow-sm"
          >
            REQUEST A QUOTE
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-stone-900 hover:bg-stone-800/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-stone-800/10 bg-[#D4CBC5] px-5 py-5 lg:hidden shadow-lg" aria-label="Mobile">
          <div className="flex flex-col space-y-3">
            {CANVA_SECTIONS.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-lg tracking-widest text-stone-800 hover:text-stone-950 py-1"
              >
                {n.label}
              </a>
            ))}
            <hr className="my-2 border-stone-800/15" />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link to="/about" onClick={() => setOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">
                About Us
              </Link>
              <Link to="/services" onClick={() => setOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">
                All 14 Services
              </Link>
              <Link to="/portfolio" onClick={() => setOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">
                Portfolio Gallery
              </Link>
              <Link to="/solutions" onClick={() => setOpen(false)} className="text-sm text-stone-700 hover:text-stone-900">
                Dialer Solutions
              </Link>
            </div>
            <div className="pt-4">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-stone-900 py-2.5 font-display text-sm tracking-wider text-[#FAF7F2]"
              >
                REQUEST A QUOTE
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function ContactButtons({ compact = false }: { compact?: boolean }) {
  const cls =
    "inline-flex items-center gap-2 rounded-full border border-stone-800/20 bg-white/90 px-4 py-2 text-xs font-semibold text-stone-800 transition-all hover:border-stone-900 hover:bg-white hover:shadow-xs";
  return (
    <div className="flex flex-wrap gap-2.5">
      <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className={cls}>
        <Send className="h-3.5 w-3.5 text-stone-700" />
        Telegram{compact ? "" : " (Primary)"}
      </a>
      <a href={CONTACT.telegramAlt} target="_blank" rel="noopener noreferrer" className={cls}>
        <Send className="h-3.5 w-3.5 text-stone-700" />
        Telegram{compact ? " 2" : " (Alt)"}
      </a>
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={cls}>
        <MessageCircle className="h-3.5 w-3.5 text-emerald-700" />
        WhatsApp
      </a>
    </div>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
      <a
        href={CONTACT.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Telegram"
        className="grid h-12 w-12 place-items-center rounded-full bg-stone-900 text-[#FAF7F2] shadow-lg transition-transform hover:scale-110 hover:bg-stone-800"
      >
        <Send className="h-5 w-5" />
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-emerald-800 text-white shadow-lg transition-transform hover:scale-110 hover:bg-emerald-700"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone-800/15 bg-[#231F1D] text-[#FAF7F2]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-stone-400 max-w-sm">
            An international lead generation agency connecting businesses with targeted, consent-based leads and telephony solutions across global industries.
          </p>
        </div>
        <div>
          <h2 className="font-display mb-4 text-base tracking-widest text-[#FAF7F2] uppercase">Explore Navigation</h2>
          <ul className="grid grid-cols-2 gap-2.5 text-sm text-stone-400">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-[#FAF7F2]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display mb-4 text-base tracking-widest text-[#FAF7F2] uppercase">Direct Communications</h2>
          <p className="mb-4 text-xs text-stone-400">
            Instant campaign coordination on verified Telegram & WhatsApp lines:
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-badge bg-stone-800 text-[#FAF7F2] border-stone-700 hover:bg-stone-700"
            >
              <Send className="h-3 w-3" /> Telegram Primary
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-badge bg-emerald-950 text-emerald-200 border-emerald-800 hover:bg-emerald-900"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp Line
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-800/30 px-5 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Globalleadscenter. All rights reserved. Built with editorial precision.
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="border-b border-stone-800/15 bg-[#CDC4BC]">
      <div className="fade-up mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="font-display mb-3 text-xs uppercase tracking-[0.25em] text-stone-700">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-stone-900">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-stone-700 font-sans">{intro}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="bento-card-dark p-8 text-center md:p-14">
        <p className="font-script text-2xl text-amber-300">Ready to expand your pipeline?</p>
        <h2 className="font-display text-3xl md:text-5xl uppercase tracking-wider text-[#FAF7F2] mt-1">
          Plan your next global campaign
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-stone-300 text-sm md:text-base">
          Share your target vertical, countries, and lead volumes. Our team will prepare a structured proposal with verified sourcing standards.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] px-8 py-3.5 font-display text-sm tracking-wider text-stone-900 hover:bg-stone-200 transition-colors shadow-md"
          >
            REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
          </a>
          <ContactButtons />
        </div>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
