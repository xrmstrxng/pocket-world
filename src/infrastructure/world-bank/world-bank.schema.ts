import { z } from "zod";

export const worldBankObservationSchema = z.object({
  indicator: z.object({ id: z.string(), value: z.string() }),
  country: z.object({ id: z.string(), value: z.string() }),
  countryiso3code: z.string(),
  date: z.string(),
  value: z.number().nullable(),
});

export const worldBankPageSchema = z.tuple([
  z.object({
    page: z.number().int().positive(),
    pages: z.number().int().nonnegative(),
    per_page: z.number().int().positive(),
    total: z.number().int().nonnegative(),
  }),
  z.array(worldBankObservationSchema).nullable(),
]);

export const worldBankErrorSchema = z.tuple([
  z.object({ message: z.array(z.object({ id: z.string(), key: z.string(), value: z.string() })) }),
]);
