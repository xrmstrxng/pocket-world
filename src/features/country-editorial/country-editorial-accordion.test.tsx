import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getCountryEditorialContent } from "@/content/countries";
import { CountryEditorialAccordion } from "./country-editorial-accordion";

const labels = {
  open: "Expand",
  close: "Collapse",
  timeline: "Timeline",
  dishes: "Dishes",
  ingredients: "Ingredients",
  dishCategories: { national: "National", regional: "Regional", traditional: "Traditional" },
  flagImage: "Flag",
  adoption: "Adoption",
  colors: "Colors",
  symbols: "Symbols",
  previousFlags: "Previous flags",
  popularSports: "Popular sports",
  achievements: "Achievements",
};

describe("CountryEditorialAccordion", () => {
  it("renders every chapter in the initial HTML with accessible relationships", () => {
    const content = getCountryEditorialContent("AF", "en").content!;
    const html = renderToStaticMarkup(
      <CountryEditorialAccordion
        countryCode="af"
        countryName="Afghanistan"
        sections={content.sections}
        labels={labels}
      />,
    );

    expect(html).toContain('aria-expanded="true"');
    expect(html).toContain('aria-expanded="false"');
    expect(html).toContain('aria-controls="editorial-af-history-panel"');
    expect(html).toContain('aria-labelledby="editorial-af-history-trigger"');
    expect(html).toContain("Soviet–Afghan War");
    expect(html).toContain("Kabuli palaw");
  });
});
