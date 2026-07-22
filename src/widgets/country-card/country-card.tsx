import Link from "next/link";
import Image from "next/image";
import type { CountrySummary } from "@/entities/country/country-summary.types";
import type { Locale } from "@/shared/types/locale";

export function CountryCard({ country, locale, action }: { country: CountrySummary; locale: Locale; action: string }) {
  return (
    <Link className="country-card" href={`/${locale}/countries/${country.slug}`}>
      <span className="country-card__flag">
        {country.flagUrl
          ? <Image src={country.flagUrl} alt={`${country.name} flag`} fill sizes="112px" />
          : <span aria-hidden="true">{country.flagEmoji || "◆"}</span>}
      </span>
      <span className="country-card__region">{country.region} · {country.alpha3}</span>
      <strong>{country.name}</strong>
      <span>{country.capital ?? country.officialName}</span>
      <span className="country-card__action">{action} →</span>
    </Link>
  );
}
