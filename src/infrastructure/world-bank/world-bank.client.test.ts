import { describe, expect, it, vi } from "vitest";
import { WorldBankClient, type FetchLike } from "./world-bank.client";

const row = (iso3: string, value: number | null) => ({
  indicator: { id: "NY.GDP.PCAP.CD", value: "GDP per capita (current US$)" },
  country: { id: iso3.slice(0, 2), value: iso3 },
  countryiso3code: iso3,
  date: "2025",
  value,
});

function response(payload: unknown, ok = true) {
  return { ok, status: ok ? 200 : 500, statusText: ok ? "OK" : "Server Error", json: async () => payload } as Response;
}

describe("WorldBankClient", () => {
  it("requests the most recent non-empty value and follows every page", async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(response([{ page: 1, pages: 2, per_page: 1000, total: 2 }, [row("BRA", 10713)]]))
      .mockResolvedValueOnce(response([{ page: 2, pages: 2, per_page: 1000, total: 2 }, [row("ARG", 13000)]]));
    const result = await new WorldBankClient(fetcher as FetchLike).fetchLatest("NY.GDP.PCAP.CD");

    expect(result.map((item) => item.countryiso3code)).toEqual(["BRA", "ARG"]);
    expect(fetcher).toHaveBeenCalledTimes(2);
    const firstUrl = String(fetcher.mock.calls[0][0]);
    expect(firstUrl).toContain("/indicator/NY.GDP.PCAP.CD");
    expect(firstUrl).toContain("mrnev=1");
    expect(String(fetcher.mock.calls[1][0])).toContain("page=2");
  });

  it("accepts an empty page", async () => {
    const fetcher = vi.fn().mockResolvedValue(response([{ page: 1, pages: 0, per_page: 1000, total: 0 }, null]));
    await expect(new WorldBankClient(fetcher as FetchLike).fetchLatest("X")).resolves.toEqual([]);
  });

  it("surfaces API error messages", async () => {
    const fetcher = vi.fn().mockResolvedValue(response([{ message: [{ id: "120", key: "Invalid value", value: "The provided parameter value is not valid" }] }]));
    await expect(new WorldBankClient(fetcher as FetchLike).fetchLatest("BAD")).rejects.toThrow("not valid");
  });

  it("rejects malformed payloads and HTTP failures", async () => {
    const malformed = vi.fn().mockResolvedValue(response({ unexpected: true }));
    await expect(new WorldBankClient(malformed as FetchLike).fetchLatest("X")).rejects.toThrow();
    const failing = vi.fn().mockResolvedValue(response(null, false));
    await expect(new WorldBankClient(failing as FetchLike).fetchLatest("X")).rejects.toThrow("(500)");
  });
});
