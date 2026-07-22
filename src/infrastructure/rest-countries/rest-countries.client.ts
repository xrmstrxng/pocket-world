import { restCountriesPageSchema } from "./rest-countries.schema";
import type { RestCountry } from "./rest-countries.types";

const BASE_URL = "https://api.restcountries.com/countries/v5";
const PAGE_SIZE = 100;
const RESPONSE_FIELDS = [
  "names.common", "names.official", "names.alternates", "names.translations",
  "codes.alpha_2", "codes.alpha_3", "codes.ccn3", "flag", "capitals", "region", "subregion",
  "area.kilometers", "population", "borders", "calling_codes", "currencies", "languages",
  "timezones", "tlds", "coordinates",
].join(",");

export type FetchLike = typeof fetch;

export class RestCountriesClient {
  constructor(private readonly apiKey: string, private readonly fetcher: FetchLike = fetch) {
    if (!apiKey) throw new Error("REST_COUNTRIES_API_KEY is required");
  }

  async fetchAll(): Promise<RestCountry[]> {
    const countries: RestCountry[] = [];
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const url = new URL(BASE_URL);
      url.searchParams.set("limit", String(PAGE_SIZE));
      url.searchParams.set("offset", String(offset));
      url.searchParams.set("response_fields", RESPONSE_FIELDS);

      const response = await this.fetcher(url, {
        headers: { Authorization: `Bearer ${this.apiKey}`, Accept: "application/json" },
      });
      const payload: unknown = await response.json();
      if (!response.ok) {
        const message = typeof payload === "object" && payload && "errors" in payload
          ? JSON.stringify(payload.errors)
          : response.statusText;
        throw new Error(`REST Countries request failed (${response.status}): ${message}`);
      }

      const page = restCountriesPageSchema.parse(payload);
      countries.push(...page.data.objects);
      hasMore = page.data.meta.more;
      offset += page.data.meta.count;
      if (hasMore && page.data.meta.count === 0) throw new Error("Pagination stalled with an empty page");
    }

    return countries;
  }
}

