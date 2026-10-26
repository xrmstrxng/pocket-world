import type { HighestPoint } from "@/entities/country-facts/country-facts.types";
import type { HighestPointRow } from "./wikidata.types";

export const WIKIDATA_SOURCE_ID = "wikidata";

function entityId(uri: string): string {
  return uri.slice(uri.lastIndexOf("/") + 1);
}

function toHighestPoint(row: HighestPointRow): HighestPoint | null {
  const english = row.labelEn?.value;
  const portuguese = row.labelPtBr?.value ?? row.labelPt?.value;
  if (!english && !portuguese) return null;

  const elevation = row.elevation ? Number(row.elevation.value) : undefined;
  return {
    name: { "pt-BR": portuguese ?? english!, en: english ?? portuguese! },
    elevationM: elevation !== undefined && Number.isFinite(elevation) ? Math.round(elevation * 100) / 100 : undefined,
    wikidataId: entityId(row.point.value),
    sourceId: WIKIDATA_SOURCE_ID,
  };
}

/**
 * A country may list several highest points (shared or disputed summits, duplicated statements).
 * The one with the greatest known elevation wins, which is what "highest point" means.
 */
export function mapHighestPoints(rows: HighestPointRow[], knownAlpha3: Set<string>): Map<string, HighestPoint> {
  const points = new Map<string, HighestPoint>();

  for (const row of rows) {
    const alpha3 = row.iso3.value.toUpperCase();
    if (!knownAlpha3.has(alpha3)) continue;
    const point = toHighestPoint(row);
    if (!point) continue;

    const previous = points.get(alpha3);
    if (previous && (previous.elevationM ?? -Infinity) >= (point.elevationM ?? -Infinity)) continue;
    points.set(alpha3, point);
  }

  return points;
}
