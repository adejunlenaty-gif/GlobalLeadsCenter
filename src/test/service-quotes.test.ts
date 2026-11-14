import { describe, expect, it } from "vitest";
import { SERVICES } from "@/lib/site";
import { serviceQuoteSearch } from "@/lib/service-quotes";

describe("Premium service quote preselection", () => {
  it.each([
    ["sweepstakes", "Sweepstakes Leads"],
    ["pch", "PCH & Prize Leads"],
    ["first-hit", "First-Hit Leads"],
    ["mega-millions", "Mega Millions / Lottery-Interest Leads"],
  ])("preselects the relevant service for %s", (slug, name) => {
    const service = SERVICES.find((item) => item.slug === slug);
    if (!service) throw new Error(`Missing service ${slug}`);
    expect(serviceQuoteSearch(service)).toEqual({ service: name });
    expect(SERVICES.some((option) => option.name === serviceQuoteSearch(service).service)).toBe(true);
  });
});
