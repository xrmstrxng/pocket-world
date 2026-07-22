import { describe, expect, it } from "vitest";
import { restCountrySchema } from "./rest-countries.schema";
import { mapRestCountry } from "./rest-countries.mapper";
import { rawCountryFixture } from "./rest-countries.fixture";

describe("REST Countries validation and mapper", () => {
  it("rejects malformed external payloads", () => {
    expect(() => restCountrySchema.parse({ names: {} })).toThrow();
  });

  it("maps external data to the internal localized model", () => {
    const mapped = mapRestCountry(restCountrySchema.parse(rawCountryFixture));
    expect(mapped.slug).toBe("brazil");
    expect(mapped.names.common).toEqual({ "pt-BR": "Brasil", en: "Brazil" });
    expect(mapped.callingCodes).toEqual(["+55"]);
    expect(mapped.currencies[0].code).toBe("BRL");
    expect(mapped.densityPerKm2).toBeGreaterThan(20);
    expect(mapped.flag.pngUrl).toBe("https://flags.restcountries.com/v5/w320/br.png");
  });
});
