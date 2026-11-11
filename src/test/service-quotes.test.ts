import { describe, expect, it } from "vitest";
import { SERVICES } from "@/lib/site";
import { serviceQuoteSearch } from "@/lib/service-quotes";

describe("Premium service quote preselection", () => {
  it.each([
    ["sweepstakes", "Premium Sweepstakes Lead Generation"],
    ["pch", "Premium PCH Lead Generation"],
    ["first-hit", "Premium First Hit Lead Generation"],
    ["mega-millions", "Premium Mega Millions Lead Generation"],
  ])("preselects the relevant service for %s", (slug, name) => {
    const service = SERVICES.find((item) => item.slug === slug);
    if (!service) throw new Error(`Missing service ${slug}`);
    expect(serviceQuoteSearch(service)).toEqual({ service: name });
    expect(SERVICES.some((option) => option.name === serviceQuoteSearch(service).service)).toBe(true);
  });
});