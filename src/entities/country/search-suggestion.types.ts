export type SearchSuggestionKind = "country" | "city" | "language";

export interface SearchSuggestion {
  id: string;
  kind: SearchSuggestionKind;
  label: string;
  context?: string;
  imageUrl?: string;
  countrySlug?: string;
  searchValue: string;
}
