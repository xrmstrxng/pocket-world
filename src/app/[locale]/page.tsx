import Link from "next/link";
import { notFound } from "next/navigation";
import { countryRepository } from "@/infrastructure/repositories/local-country.repository";
import { listCountrySummaries } from "@/application/countries/list-country-summaries";
import { CountryGrid } from "@/widgets/country-grid/country-grid";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { isLocale } from "@/shared/types/locale";
import { listSearchSuggestions } from "@/application/countries/list-search-suggestions";
import { CountrySearchAutocomplete } from "@/features/search-countries/country-search-autocomplete";
import { HeroGlobeAnimation } from "@/widgets/hero/hero-globe-animation";

const regionIcons: Record<string, string> = {
  Africa: "\u{1F30D}",
  Americas: "\u{1F30E}",
  Asia: "\u{1F30F}",
  Europe: "\u{1F3DB}\u{FE0F}",
  Oceania: "\u{1F3DD}\u{FE0F}",
  Antarctic: "\u{2744}\u{FE0F}",
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const [countries, suggestions] = await Promise.all([
    listCountrySummaries(countryRepository, locale),
    listSearchSuggestions(countryRepository, locale),
  ]);
  const featuredCodes = ["BRA", "JPN", "CAN", "MAR"];
  const featured = featuredCodes.flatMap((code) => countries.filter((country) => country.alpha3 === code));
  const regions = [...new Set(countries.map((country) => country.region))].sort();

  return (
    <>
      <section className="hero section-wide" id="home">
        <div className="hero__copy">
          <p className="eyebrow"><span aria-hidden="true">&#10022;</span> {dictionary.home.eyebrow}</p>
          <h1>{dictionary.home.title}</h1>
          <p className="hero__description">{dictionary.home.description}</p>
          <form className="search-bar" action={`/${locale}/countries`}>
            <CountrySearchAutocomplete id="home-search" locale={locale} suggestions={suggestions} labels={{ field: dictionary.countries.search, placeholder: dictionary.home.searchPlaceholder, hint: dictionary.countries.suggestionHint, types: dictionary.countries.suggestionTypes }} variant="hero" />
          </form>
          <Link className="button button--cream" href={`/${locale}/countries`}>{dictionary.home.explore} <span aria-hidden="true">&#8599;</span></Link>
        </div>
        <div className="hero__art" aria-hidden="true">
          <div className="orbit orbit--one" /><div className="orbit orbit--two" />
          <HeroGlobeAnimation />
        </div>
      </section>

      <section className="section panel-section" id="featured">
        <div className="section-heading"><div><p className="eyebrow">01 / COLLECTION</p><h2>{dictionary.home.featured}</h2><p>{dictionary.home.featuredDescription}</p></div><Link href={`/${locale}/countries`}>{dictionary.home.explore} <span aria-hidden="true">&#8594;</span></Link></div>
        <CountryGrid countries={featured} locale={locale} action={dictionary.countries.view} />
      </section>

      <section className="section region-section" id="continents">
        <div className="section-heading"><div><p className="eyebrow">02 / MAP</p><h2>{dictionary.home.regions}</h2></div></div>
        <div className="region-grid">{regions.map((region) => <Link key={region} href={`/${locale}/countries?region=${encodeURIComponent(region)}`}><span aria-hidden="true">{regionIcons[region] ?? "\u{1F5FA}\u{FE0F}"}</span><strong>{dictionary.regions[region as keyof typeof dictionary.regions] ?? region}</strong><small>{countries.filter((country) => country.region === region).length} {dictionary.countries.results}</small></Link>)}</div>
      </section>

      <section className="home-journal-quadrant" id="journal">
        <div className="section editorial-banner"><div className="editorial-banner__icon" aria-hidden="true">&#9636;</div><div><p className="eyebrow">03 / FIELD NOTES</p><h2>{dictionary.home.editorialTitle}</h2><p>{dictionary.home.editorialText}</p></div><span className="editorial-banner__stamp" aria-hidden="true">PW<br />001</span></div>
      </section>
    </>
  );
}
