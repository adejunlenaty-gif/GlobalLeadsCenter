import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { ContactButtons, PageHero, meta } from "@/components/SiteChrome";
import { SERVICES } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string | undefined } => ({ service: typeof s["service"] === "string" ? s["service"] : undefined }),
  head: () => ({ meta: meta("Contact Us & Request a Quote — Globalleadscenter", "Request a lead generation quote or reach Globalleadscenter on Telegram and WhatsApp.") }),
  component: Contact,
});

const schema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  company: z.string().trim().min(1, "Please enter your company name").max(150),
  service: z.string().min(1, "Choose a service").max(100),
  target_country: z.string().trim().min(1, "Enter a target country").max(100),
  requirements: z.string().trim().max(1000).optional(),
  details: z.string().trim().min(10, "Please describe your project (at least 10 characters)").max(3000),
});

const field = "w-full rounded-md border bg-input/40 px-4 py-3 text-sm outline-none focus:border-gold";

function F({ name, label, errors, children }: { name: string; label: string; errors: Record<string, string>; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-medium">{label}</span>{children}{errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}</label>;
}

function Contact() {
  const { service } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("quote_requests").insert({ ...parsed.data, requirements: parsed.data.requirements || null });
    setStatus(error ? "error" : "done");
  }

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Request a quote" intro="Tell us about your campaign and our team will reply with a tailored proposal. Prefer to chat? Reach us directly on Telegram or WhatsApp." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-3">
        <aside className="space-y-6">
          <div className="rounded-xl border bg-card p-6"><h2 className="text-xl font-semibold">Direct contact</h2><p className="mt-2 text-sm text-muted-foreground">Primary Telegram: @premiumleadscenter<br />Alternative Telegram: @globalleadscenter<br />WhatsApp: +44 7456 067627</p><div className="mt-5"><ContactButtons /></div></div>
          <div className="rounded-xl border p-6 text-sm text-muted-foreground">Your inquiry is stored securely and used only to respond to your request.</div>
        </aside>
        <div className="rounded-2xl border bg-card p-8 lg:col-span-2">
          {status === "done" ? (
            <div className="py-16 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-gold" /><h2 className="mt-4 text-2xl font-semibold">Inquiry received</h2><p className="mt-2 text-muted-foreground">Thank you. Our team will review your request and get back to you.</p></div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 md:grid-cols-2">
              <F errors={errors} name="full_name" label="Full name"><input name="full_name" className={field} maxLength={100} /></F>
              <F errors={errors} name="email" label="Business email"><input name="email" type="email" className={field} maxLength={255} /></F>
              <F errors={errors} name="company" label="Company name"><input name="company" className={field} maxLength={150} /></F>
              <F errors={errors} name="service" label="Service required"><select name="service" defaultValue={service ?? ""} className={field}><option value="" disabled>Select a service</option>{SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Communication & Dialer Solutions</option></select></F>
              <F errors={errors} name="target_country" label="Target country"><input name="target_country" className={field} maxLength={100} /></F>
              <F errors={errors} name="requirements" label="Estimated campaign requirements"><input name="requirements" placeholder="e.g. volume, timeline, fields" className={field} maxLength={1000} /></F>
              <div className="md:col-span-2"><F errors={errors} name="details" label="Project details"><textarea name="details" rows={6} className={field} maxLength={3000} /></F></div>
              {status === "error" && <p className="text-sm text-destructive md:col-span-2">Something went wrong sending your inquiry. Please try again or contact us on Telegram or WhatsApp.</p>}
              <button disabled={status === "sending"} className="rounded-md bg-gold-gradient px-6 py-3 font-semibold text-navy-deep disabled:opacity-60 md:col-span-2 md:justify-self-start">{status === "sending" ? "Sending…" : "Submit Inquiry"}</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
