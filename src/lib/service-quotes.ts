import type { Service } from "./site";

export function serviceQuoteSearch(service: Service) {
  return { service: service.name };
}