import { describe, expect, it, vi } from "vitest";
import { buildHighestPointQuery, WikidataClient, type FetchLike } from "./wikidata.client";

describe("Wikidata client", () => {
  it("builds a query by ISO code with an entity override for Kosovo", () => {
    const query = buildHighestPointQuery(["BRA", "UNK"]);
    expect(query).toContain('VALUES ?iso3 { "BRA" "UNK" }');
    expect(query).toContain('(wd:Q1246 "UNK")');
    expect(query).toContain("wikibase:BestRank");
  });

  it("strips anything that is not a letter from codes", () => {
    expect(buildHighestPointQuery(['BR"A }'])).toContain('"BRA"');
  });

  it("identifies itself and validates rows", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        results: {
          bindings: [{
            iso3: { type: "literal", value: "BRA" },
            point: { type: "uri", value: "http://www.wikidata.org/entity/Q739484" },
            labelEn: { type: "literal", value: "Pico da Neblina", "xml:lang": "en" },
            elevation: { type: "literal", value: "2994" },
          }],
        },
      }),
    } as Response);

    const rows = await new WikidataClient(fetcher as FetchLike).fetchHighestPoints(["BRA"]);
    expect(rows).toHaveLength(1);
    const init = fetcher.mock.calls[0][1] as RequestInit;
    expect((init.headers as Record<string, string>)["User-Agent"]).toContain("PocketWorld");
    expect(init.method).toBe("POST");
  });

  it("rejects malformed results", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ results: { bindings: [{ iso3: { type: "literal", value: "BRA" } }] } }) } as Response);
    await expect(new WikidataClient(fetcher as FetchLike).fetchHighestPoints(["BRA"])).rejects.toThrow();
  });
});
