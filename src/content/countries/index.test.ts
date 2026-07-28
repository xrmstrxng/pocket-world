import { describe, expect, it } from "vitest";
import { getCountryEditorialContent } from ".";

describe("country editorial content", () => {
  it("provides explicit localized placeholders", () => {
    const pt = getCountryEditorialContent("BR", "pt-BR");
    const en = getCountryEditorialContent("BR", "en");
    expect(pt.isPlaceholder).toBe(true);
    expect(pt.content).toBeNull();
    expect(en.content).toBeNull();
    expect(pt.fallback).not.toBe(en.fallback);
    expect(pt.fallback).toContain("dados gerais");
  });

  it("returns complete localized Afghanistan content through the service", () => {
    const pt = getCountryEditorialContent("af", "pt-BR");
    const en = getCountryEditorialContent("AF", "en");

    expect(pt.isPlaceholder).toBe(false);
    expect(pt.content?.sections.map((section) => section.key)).toEqual([
      "territory",
      "geography",
      "history",
      "culture",
      "customs",
      "cuisine",
      "religion",
      "flag",
      "sports",
    ]);
    expect(pt.content?.sections.find((section) => section.key === "history")?.timeline).toHaveLength(6);
    expect(pt.content?.sections.find((section) => section.key === "cuisine")?.dishes).toHaveLength(4);
    expect(pt.content?.sources.length).toBeGreaterThan(0);
    expect(en.content?.introduction).not.toBe(pt.content?.introduction);
  });

  it("does not expose source ids that are absent from the bibliography", () => {
    const content = getCountryEditorialContent("AF", "en").content!;
    const sourceIds = new Set(content.sources.map((source) => source.id));
    const referencedIds = content.sections.flatMap((section) => section.sourceIds);

    expect(referencedIds.every((id) => sourceIds.has(id))).toBe(true);
  });
});
