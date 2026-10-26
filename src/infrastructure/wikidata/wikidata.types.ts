import type { z } from "zod";
import type { highestPointRowSchema, sparqlResultsSchema } from "./wikidata.schema";

export type SparqlResults = z.infer<typeof sparqlResultsSchema>;
export type HighestPointRow = z.infer<typeof highestPointRowSchema>;
