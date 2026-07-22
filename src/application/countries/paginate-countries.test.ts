import { describe, expect, it } from "vitest";
import { paginateCountries } from "./paginate-countries";

describe("paginateCountries", () => {
  const items = Array.from({ length: 53 }, (_, index) => index + 1);

  it("returns only the requested page", () => {
    const result = paginateCountries(items, 2, 24);
    expect(result.items).toEqual(Array.from({ length: 24 }, (_, index) => index + 25));
    expect(result).toMatchObject({ page: 2, totalItems: 53, totalPages: 3 });
  });

  it("clamps invalid and out-of-range pages", () => {
    expect(paginateCountries(items, Number.NaN, 24).page).toBe(1);
    expect(paginateCountries(items, -4, 24).page).toBe(1);
    expect(paginateCountries(items, 99, 24).page).toBe(3);
  });
});
