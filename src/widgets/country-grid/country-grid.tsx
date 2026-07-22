import type { CountrySummary } from "@/entities/country/country-summary.types";
import type { Locale } from "@/shared/types/locale";
import { CountryCard } from "@/widgets/country-card/country-card";

export function CountryGrid({ countries, locale, action }: { countries: CountrySummary[]; locale: Locale; action: string }) {
  return <div className="country-grid">{countries.map((country) => <CountryCard key={country.id} country={country} locale={locale} action={action} />)}</div>;
}

