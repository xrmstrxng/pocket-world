import type { z } from "zod";
import type { restCountriesPageSchema, restCountrySchema } from "./rest-countries.schema";

export type RestCountry = z.infer<typeof restCountrySchema>;
export type RestCountriesPage = z.infer<typeof restCountriesPageSchema>;

