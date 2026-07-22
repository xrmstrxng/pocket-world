import { z } from "zod";

const localizedNameSchema = z.object({
  common: z.string(),
  official: z.string(),
});

export const restCountrySchema = z.object({
  names: z.object({
    common: z.string(),
    official: z.string(),
    alternates: z.array(z.string()).optional().default([]),
    translations: z.record(z.string(), localizedNameSchema).optional().default({}),
  }),
  codes: z.object({
    alpha_2: z.string(),
    alpha_3: z.string(),
    ccn3: z.string().optional(),
  }),
  flag: z.object({
    emoji: z.string().optional(),
    svg: z.string().url().optional(),
    png: z.string().url().optional(),
    description: z.string().optional(),
  }).default({}),
  capitals: z.array(z.object({
    name: z.string(),
    coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
  })).optional().default([]),
  region: z.string(),
  subregion: z.string().optional(),
  area: z.object({ kilometers: z.number().nonnegative().optional() }).optional(),
  population: z.number().nonnegative().optional(),
  borders: z.array(z.string()).optional().default([]),
  calling_codes: z.array(z.union([z.string(), z.number()])).optional().default([]),
  currencies: z.array(z.object({
    code: z.string(),
    name: z.string(),
    symbol: z.string().optional(),
  })).optional().default([]),
  languages: z.array(z.object({
    iso_639_1: z.string().optional(),
    iso_639_2: z.string().optional(),
    name: z.string(),
  })).optional().default([]),
  timezones: z.array(z.string()).optional().default([]),
  tlds: z.array(z.string()).optional().default([]),
  coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
});

export const restCountriesPageSchema = z.object({
  data: z.object({
    objects: z.array(restCountrySchema),
    meta: z.object({
      total: z.number().int().nonnegative(),
      count: z.number().int().nonnegative(),
      limit: z.number().int().positive(),
      offset: z.number().int().nonnegative(),
      more: z.boolean(),
    }),
  }),
});
