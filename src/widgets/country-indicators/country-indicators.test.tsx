import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { CountryFactsView } from "@/application/countries/get-country-facts";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { CountryIndicators } from "./country-indicators";
import { formatIndicator } from "./format-indicator";

const worldBank = { id: "wb-gdp", label: "GDP per capita", publisher: "World Bank — World Development Indicators", url: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD", license: "CC BY 4.0" };
const wikidata = { id: "wikidata", label: "Highest point", publisher: "Wikidata", url: "https://www.wikidata.org/", license: "CC0 1.0" };

const complete: CountryFactsView = {
  facts: {
    alpha3: "BRA",
    indicators: { gdpPerCapitaUsd: { value: 10713.28, year: 2025, sourceId: "wb-gdp" } },
    highestPoint: { name: { "pt-BR": "Pico da Neblina", en: "Pico da Neblina" }, elevationM: 2994, wikidataId: "Q739484", sourceId: "wikidata" },
  },
  sourcesById: { "wb-gdp": worldBank, wikidata },
};

describe("CountryIndicators", () => {
  it("renders localized values with year and source links", () => {
    const html = renderToStaticMarkup(<CountryIndicators {...complete} locale="pt-BR" labels={getDictionary("pt-BR").detail.indicators} />);
    expect(html).toContain("PIB per capita");
    expect(html).toMatch(/US\$\s10\.713/);
    expect(html).toContain("2025");
    expect(html).toContain('href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD"');
    expect(html).toContain('rel="noopener noreferrer"');
    expect(html).toContain("Pico da Neblina · 2.994 m");
    expect(html).toContain('href="https://www.wikidata.org/wiki/Q739484"');
  });

  it("marks missing indicators without inventing values", () => {
    const html = renderToStaticMarkup(<CountryIndicators {...complete} locale="en" labels={getDictionary("en").detail.indicators} />);
    expect(html).toContain("Life expectancy");
    expect((html.match(/No data/g) ?? []).length).toBe(6);
    expect((html.match(/is-empty/g) ?? []).length).toBe(6);
  });
});

describe("formatIndicator", () => {
  it("formats each indicator kind for both locales", () => {
    expect(formatIndicator("gdpUsd", 2_279_920_092_492, "en")).toBe("$2.3T");
    expect(formatIndicator("lifeExpectancyYears", 76.023, "en")).toBe("76 years");
    expect(formatIndicator("lifeExpectancyYears", 76.5, "pt-BR")).toBe("76,5 anos");
    expect(formatIndicator("internetUsersPercent", 84.46, "en")).toBe("84.5%");
    expect(formatIndicator("co2PerCapitaTonnes", 2.318, "pt-BR")).toBe("2,3 t CO₂e");
    expect(formatIndicator("co2PerCapitaTonnes", 0.0021, "en")).toBe("0.002 t CO₂e");
  });
});
