import { worldBankErrorSchema, worldBankPageSchema } from "./world-bank.schema";
import type { WorldBankObservation } from "./world-bank.types";

const BASE_URL = "https://api.worldbank.org/v2/country/all/indicator";
const PAGE_SIZE = 1000;

export type FetchLike = typeof fetch;

export class WorldBankClient {
  constructor(private readonly fetcher: FetchLike = fetch) {}

  /** Returns the most recent non-empty observation of an indicator for every economy and aggregate. */
  async fetchLatest(indicatorCode: string): Promise<WorldBankObservation[]> {
    const observations: WorldBankObservation[] = [];
    let page = 1;
    let pages = 1;

    while (page <= pages) {
      const url = new URL(`${BASE_URL}/${encodeURIComponent(indicatorCode)}`);
      url.searchParams.set("format", "json");
      url.searchParams.set("mrnev", "1");
      url.searchParams.set("per_page", String(PAGE_SIZE));
      url.searchParams.set("page", String(page));

      const response = await this.fetcher(url, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`World Bank request failed for ${indicatorCode} (${response.status}): ${response.statusText}`);
      const payload: unknown = await response.json();

      const error = worldBankErrorSchema.safeParse(payload);
      if (error.success) throw new Error(`World Bank rejected ${indicatorCode}: ${error.data[0].message.map((item) => item.value).join("; ")}`);

      const [meta, rows] = worldBankPageSchema.parse(payload);
      observations.push(...(rows ?? []));
      pages = meta.pages;
      page += 1;
    }

    return observations;
  }
}
