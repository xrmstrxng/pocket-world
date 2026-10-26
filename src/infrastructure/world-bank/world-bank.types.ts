import type { z } from "zod";
import type { worldBankObservationSchema } from "./world-bank.schema";

export type WorldBankObservation = z.infer<typeof worldBankObservationSchema>;
