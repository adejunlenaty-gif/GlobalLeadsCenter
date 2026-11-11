import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Send, MessageCircle } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site";
import { Button } from "@/components/ui/button";
import profile from "@/assets/primevalue-hub-profile.jpg.asset.json";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Globalleadscenter home">
      <img src={profile.url} alt="Primevalue Hub profile image" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-contain" />
      <span className="font-sans text-sm font-bold md:text-lg">GLOBAL<span className="text-gold">LEADS</span>CENTER</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-navy-deep/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-gold" activeProps={{ className: "text-sm text-gold" }} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:block"><Link to="/contact" className="rounded-md bg-gold-gradient px-4 py-2 text-sm font-semibold text-navy-deep">Request a Quote</Link></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && (
        <nav className="border-t px-5 pb-5 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-gold">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function ContactButtons({ compact = false }: { compact?: boolean }) {
  const cls = "inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:border-gold hover:text-gold";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className={cls}><Send className="h-4 w-4" />Telegram{compact ? "" : " (Primary)"}</a>
      <a href={CONTACT.telegramAlt} target="_blank" rel="noopener noreferrer" className={cls}><Send className="h-4 w-4" />Telegram{compact ? " 2" : " (Alternative)"}</a>
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={cls}><MessageCircle className="h-4 w-4" />WhatsApp</a>
    </div>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" aria-label="Chat on Telegram" className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-navy-deep shadow-gold"><Send className="h-5 w-5" /></a>
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-navy-deep shadow-gold"><MessageCircle className="h-5 w-5" /></a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground">An international lead generation agency connecting businesses with targeted, consent-based leads across industries and regions.</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Talk to us</h2>
          <ContactButtons compact />
        </div>
      </div>
      <p className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Globalleadscenter. All rights reserved.</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="border-b bg-navy-deep">
      <div className="fade-up mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="rounded-2xl border bg-card p-10 text-center shadow-gold md:p-14">
        <h2 className="text-3xl font-semibold md:text-4xl">Ready to plan your next campaign?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Share your brief and our team will respond with a tailored proposal for targeting, sourcing and delivery.</p>
        <div className="mt-8 flex flex-col items-center gap-5">
          <Link to="/contact" className="rounded-md bg-gold-gradient px-6 py-3 font-semibold text-navy-deep">Request a Quote</Link>
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
