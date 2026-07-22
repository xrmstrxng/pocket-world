import { describe, expect, it, vi } from "vitest";
import { RestCountriesClient, type FetchLike } from "./rest-countries.client";
import { rawCountryFixture } from "./rest-countries.fixture";

function response(objects: unknown[], more: boolean, offset: number) {
  return { ok: true, json: async () => ({ data: { objects, meta: { total: 2, count: objects.length, limit: 100, offset, more } } }) } as Response;
}

describe("RestCountriesClient", () => {
  it("paginates until meta.more is false", async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(response([rawCountryFixture], true, 0))
      .mockResolvedValueOnce(response([{ ...rawCountryFixture, names: { ...rawCountryFixture.names, common: "Argentina" }, codes: { alpha_2: "AR", alpha_3: "ARG" } }], false, 1));
    const result = await new RestCountriesClient("secret", fetcher as FetchLike).fetchAll();
    expect(result).toHaveLength(2);
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(String(fetcher.mock.calls[1][0])).toContain("offset=1");
  });

  it("never puts the API key in the URL", async () => {
    const fetcher = vi.fn().mockResolvedValue(response([], false, 0));
    await new RestCountriesClient("server-secret", fetcher as FetchLike).fetchAll();
    expect(String(fetcher.mock.calls[0][0])).not.toContain("server-secret");
    expect(fetcher.mock.calls[0][1].headers.Authorization).toBe("Bearer server-secret");
  });
});
