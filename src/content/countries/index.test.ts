import { describe, expect, it } from "vitest";
import countries from "@/data/generated/countries.json";
import type { Country } from "@/entities/country/country.types";
import { FULL_TIER_EXTRA_ALPHA3_CODES, UN_MEMBER_ALPHA3_CODES } from "@/shared/constants/un-member-codes";
import { editorialByAlpha2, getCountryEditorialContent } from ".";
import { FULL_TIER_SECTION_KEYS, SHORT_TIER_SECTION_KEYS } from "./editorial.types";

const alpha3ByAlpha2 = new Map((countries as Country[]).map((country) => [country.codes.alpha2, country.codes.alpha3]));
const entries = Object.entries(editorialByAlpha2);

describe("country editorial content", () => {
  it("provides explicit localized placeholders for countries without content", () => {
    const pt = getCountryEditorialContent("ZZ", "pt-BR");
    const en = getCountryEditorialContent("ZZ", "en");
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
    expect(pt.content?.sections.find((section) => section.key === "history")?.timeline).toHaveLength(6);
    expect(pt.content?.sections.find((section) => section.key === "cuisine")?.dishes).toHaveLength(4);
    expect(en.content?.introduction).not.toBe(pt.content?.introduction);
  });
});

describe.each(entries)("editorial entry %s", (alpha2, byLocale) => {
  const pt = byLocale["pt-BR"];
  const en = byLocale.en;

  it("belongs to a country in the snapshot and matches its key", () => {
    expect(alpha3ByAlpha2.has(alpha2)).toBe(true);
    expect(pt.alpha2).toBe(alpha2);
    expect(en.alpha2).toBe(alpha2);
    expect(pt.locale).toBe("pt-BR");
    expect(en.locale).toBe("en");
  });

  it("uses the tier required for the country and the sections that tier requires", () => {
    const alpha3 = alpha3ByAlpha2.get(alpha2)!;
    const expectedTier = UN_MEMBER_ALPHA3_CODES.has(alpha3) || FULL_TIER_EXTRA_ALPHA3_CODES.has(alpha3) ? "full" : "short";
    const expectedSections = expectedTier === "full" ? FULL_TIER_SECTION_KEYS : SHORT_TIER_SECTION_KEYS;
    for (const content of [pt, en]) {
      expect(content.tier).toBe(expectedTier);
      expect(content.sections.map((section) => section.key)).toEqual(expectedSections);
    }
  });

  it("keeps both locales structurally aligned", () => {
    expect(pt.tier).toBe(en.tier);
    expect(pt.reviewStatus).toBe(en.reviewStatus);
    expect(pt.curiosities.length).toBe(en.curiosities.length);
    expect(pt.sources.map((source) => source.id)).toEqual(en.sources.map((source) => source.id));
    pt.sections.forEach((section, index) => {
      const other = en.sections[index];
      expect(other.sourceIds).toEqual(section.sourceIds);
      expect(other.paragraphs.length).toBe(section.paragraphs.length);
      expect(other.timeline?.length).toBe(section.timeline?.length);
      expect(other.dishes?.length).toBe(section.dishes?.length);
      expect(other.sports?.achievements.length).toBe(section.sports?.achievements.length);
    });
    expect(en.introduction).not.toBe(pt.introduction);
  });

  it("cites only declared sources and declares no unused ones", () => {
    for (const content of [pt, en]) {
      const declared = content.sources.map((source) => source.id);
      const cited = new Set(content.sections.flatMap((section) => section.sourceIds));
      expect(new Set(declared).size).toBe(declared.length);
      expect([...cited].every((id) => declared.includes(id))).toBe(true);
      expect(declared.filter((id) => !cited.has(id))).toEqual([]);
      expect(content.sections.every((section) => section.sourceIds.length > 0)).toBe(true);
      expect(content.sources.every((source) => /^https:\/\//.test(source.url) && /^\d{4}-\d{2}-\d{2}$/.test(source.accessedAt))).toBe(true);
    }
  });

  it("has no empty text", () => {
    for (const content of [pt, en]) {
      const texts = [
        content.introduction,
        ...content.curiosities,
        ...content.sections.flatMap((section) => [section.title, section.summary, ...section.paragraphs]),
      ];
      expect(texts.every((text) => text.trim().length > 0)).toBe(true);
    }
  });
});
