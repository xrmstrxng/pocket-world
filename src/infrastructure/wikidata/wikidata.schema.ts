import { z } from "zod";

const sparqlTermSchema = z.object({
  type: z.string(),
  value: z.string(),
  "xml:lang": z.string().optional(),
});

export const sparqlResultsSchema = z.object({
  results: z.object({
    bindings: z.array(z.record(z.string(), sparqlTermSchema)),
  }),
});

export const highestPointRowSchema = z.object({
  iso3: sparqlTermSchema,
  point: sparqlTermSchema,
  labelEn: sparqlTermSchema.optional(),
  labelPtBr: sparqlTermSchema.optional(),
  labelPt: sparqlTermSchema.optional(),
  elevation: sparqlTermSchema.optional(),
});
