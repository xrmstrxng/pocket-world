export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

export function createSlug(value: string): string {
  return normalizeSearchText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function calculateDensity(population?: number, areaKm2?: number): number | undefined {
  if (!population || !areaKm2 || areaKm2 <= 0) return undefined;
  return Number((population / areaKm2).toFixed(2));
}

export function assertCountriesAreConsistent(countries: Array<{ slug: string; codes: { alpha2: string; alpha3: string }; borders: string[] }>): void {
  const duplicate = (values: string[]) => values.find((value, index) => values.indexOf(value) !== index);
  const duplicateSlug = duplicate(countries.map((country) => country.slug));
  const duplicateAlpha2 = duplicate(countries.map((country) => country.codes.alpha2));
  const duplicateAlpha3 = duplicate(countries.map((country) => country.codes.alpha3));

  if (duplicateSlug) throw new Error(`Duplicate slug: ${duplicateSlug}`);
  if (duplicateAlpha2) throw new Error(`Duplicate alpha-2 code: ${duplicateAlpha2}`);
  if (duplicateAlpha3) throw new Error(`Duplicate alpha-3 code: ${duplicateAlpha3}`);

  const alpha3Codes = new Set(countries.map((country) => country.codes.alpha3));
  const invalidBorders = countries.flatMap((country) =>
    country.borders.filter((border) => !alpha3Codes.has(border)).map((border) => `${country.codes.alpha3}->${border}`),
  );
  if (invalidBorders.length) throw new Error(`Invalid borders: ${invalidBorders.join(", ")}`);
}

