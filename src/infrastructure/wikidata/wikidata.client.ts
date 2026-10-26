import { highestPointRowSchema, sparqlResultsSchema } from "./wikidata.schema";
import type { HighestPointRow, SparqlResults } from "./wikidata.types";

const SPARQL_ENDPOINT = "https://query.wikidata.org/sparql";
// Wikimedia asks automated clients to identify themselves.
const USER_AGENT = "PocketWorld/0.1 (https://pocket-world-six.vercel.app; facts sync)";

export type FetchLike = typeof fetch;

/** Snapshot countries whose Wikidata item has no ISO 3166-1 alpha-3 (P298) statement. */
const ENTITIES_WITHOUT_ALPHA3: Record<string, string> = {
  UNK: "Q1246", // Kosovo
};

function sanitizeCode(code: string): string {
  return code.toUpperCase().replace(/[^A-Z]/g, "");
}

export function buildHighestPointQuery(alpha3Codes: string[]): string {
  const values = alpha3Codes.map((code) => `"${sanitizeCode(code)}"`).join(" ");
  const overrides = alpha3Codes
    .filter((code) => ENTITIES_WITHOUT_ALPHA3[code])
    .map((code) => `(wd:${ENTITIES_WITHOUT_ALPHA3[code]} "${sanitizeCode(code)}")`)
    .join(" ");
  // BestRank skips deprecated or superseded measurements; psn: normalizes elevations to metres.
  return `
SELECT ?iso3 ?point ?labelEn ?labelPtBr ?labelPt ?elevation WHERE {
  { VALUES ?iso3 { ${values} } ?country wdt:P298 ?iso3 . }
  ${overrides ? `UNION { VALUES (?country ?iso3) { ${overrides} } }` : ""}
  ?country wdt:P610 ?point .
  OPTIONAL { ?point p:P2044 ?elevationStatement . ?elevationStatement a wikibase:BestRank ; psn:P2044/wikibase:quantityAmount ?elevation . }
  OPTIONAL { ?point rdfs:label ?labelEn . FILTER(LANG(?labelEn) = "en") }
  OPTIONAL { ?point rdfs:label ?labelPtBr . FILTER(LANG(?labelPtBr) = "pt-br") }
  OPTIONAL { ?point rdfs:label ?labelPt . FILTER(LANG(?labelPt) = "pt") }
}`;
}

export class WikidataClient {
  constructor(private readonly fetcher: FetchLike = fetch) {}

  async query(sparql: string): Promise<SparqlResults["results"]["bindings"]> {
    const response = await this.fetcher(SPARQL_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/sparql-results+json",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": USER_AGENT,
      },
      body: new URLSearchParams({ query: sparql }).toString(),
    });
    if (!response.ok) throw new Error(`Wikidata request failed (${response.status}): ${response.statusText}`);
    return sparqlResultsSchema.parse(await response.json()).results.bindings;
  }

  async fetchHighestPoints(alpha3Codes: string[]): Promise<HighestPointRow[]> {
    const bindings = await this.query(buildHighestPointQuery(alpha3Codes));
    return bindings.map((binding) => highestPointRowSchema.parse(binding));
  }
}
