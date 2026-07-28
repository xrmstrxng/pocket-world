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

export interface CountryEditorialContent {
  alpha2: string;
  locale: Locale;
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
