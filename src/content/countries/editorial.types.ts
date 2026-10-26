import type { Locale } from "@/shared/types/locale";

export type EditorialSectionKey =
  | "territory"
  | "geography"
  | "history"
  | "culture"
  | "customs"
  | "cuisine"
  | "religion"
  | "flag"
  | "sports";

export interface EditorialSource {
  id: string;
  label: string;
  publisher: string;
  url: string;
  accessedAt: string;
}

export interface EditorialTimelineEntry {
  period: string;
  title: string;
  description: string;
}

export interface EditorialDish {
  name: string;
  description: string;
  ingredients?: string[];
  category?: "national" | "regional" | "traditional";
}

export interface EditorialAchievement {
  year: string;
  title: string;
  description?: string;
}

export interface EditorialSection {
  key: EditorialSectionKey;
  title: string;
  summary: string;
  paragraphs: string[];
  sourceIds: string[];
  timeline?: EditorialTimelineEntry[];
  dishes?: EditorialDish[];
  flag?: {
    adoption?: string;
    colors?: Array<{ name: string; meaning: string }>;
    symbols?: string[];
    previousFlags?: Array<{ period: string; description: string }>;
  };
  sports?: {
    popular: string[];
    achievements: EditorialAchievement[];
  };
}

/**
 * full: UN members plus Vatican City, Palestine, Taiwan and Kosovo, with every section.
 * short: other territories, with territory, geography and history or political status only.
 */
export type EditorialTier = "full" | "short";

/** ai-draft: researched and written with AI, sources opened, not yet checked by a person. */
export type EditorialReviewStatus = "ai-draft" | "reviewed";

export const FULL_TIER_SECTION_KEYS: readonly EditorialSectionKey[] = [
  "territory", "geography", "history", "culture", "customs", "cuisine", "religion", "flag", "sports",
];

export const SHORT_TIER_SECTION_KEYS: readonly EditorialSectionKey[] = ["territory", "geography", "history"];

export interface CountryEditorialContent {
  alpha2: string;
  locale: Locale;
  tier: EditorialTier;
  reviewStatus: EditorialReviewStatus;
  introduction: string;
  sections: EditorialSection[];
  curiosities: string[];
  sources: EditorialSource[];
}

export interface CountryEditorialView {
  content: CountryEditorialContent | null;
  fallback: string;
  isPlaceholder: boolean;
}
