import { describe, expect, it } from "vitest";
import { mapHighestPoints } from "./wikidata.mapper";
import type { HighestPointRow } from "./wikidata.types";

const literal = (value: string) => ({ type: "literal", value });

function row(iso3: string, qid: string, labels: { en?: string; ptBr?: string; pt?: string }, elevation?: string): HighestPointRow {
  return {
    iso3: literal(iso3),
    point: { type: "uri", value: `http://www.wikidata.org/entity/${qid}` },
    labelEn: labels.en ? literal(labels.en) : undefined,
    labelPtBr: labels.ptBr ? literal(labels.ptBr) : undefined,
    labelPt: labels.pt ? literal(labels.pt) : undefined,
    elevation: elevation ? literal(elevation) : undefined,
  };
}

const known = new Set(["NPL", "BRA", "PSE"]);

describe("mapHighestPoints", () => {
  it("prefers pt-br, then pt, then English labels for Portuguese", () => {
    const result = mapHighestPoints([
      row("NPL", "Q513", { en: "Mount Everest", pt: "Everest" }, "8848.86"),
      row("BRA", "Q739484", { en: "Pico da Neblina", ptBr: "Pico da Neblina (BR)", pt: "Pico da Neblina (PT)" }, "2994"),
      row("PSE", "Q6922335", { en: "Mount Nabi Yunis" }, "1026"),
    ], known);

    expect(result.get("NPL")?.name).toEqual({ "pt-BR": "Everest", en: "Mount Everest" });
    expect(result.get("BRA")?.name["pt-BR"]).toBe("Pico da Neblina (BR)");
    expect(result.get("PSE")?.name["pt-BR"]).toBe("Mount Nabi Yunis");
    expect(result.get("PSE")?.missingPortugueseName).toBe(true);
    expect(result.get("NPL")).not.toHaveProperty("missingPortugueseName");
    expect(result.get("NPL")).toMatchObject({ elevationM: 8848.86, wikidataId: "Q513", sourceId: "wikidata" });
  });

  it("keeps the highest of several candidate points", () => {
    const result = mapHighestPoints([
      row("NPL", "Q1", { en: "Lower peak" }, "6000"),
      row("NPL", "Q513", { en: "Mount Everest" }, "8848.86"),
      row("NPL", "Q2", { en: "Unknown height" }),
    ], known);
    expect(result.get("NPL")?.wikidataId).toBe("Q513");
  });

  it("skips unlabeled points and unknown countries", () => {
    const result = mapHighestPoints([row("NPL", "Q9", {}, "100"), row("ZZZ", "Q10", { en: "Elsewhere" }, "100")], known);
    expect(result.size).toBe(0);
  });
});
