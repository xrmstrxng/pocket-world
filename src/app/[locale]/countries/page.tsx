import Link from "next/link";
import { notFound } from "next/navigation";
import { listCountrySummaries } from "@/application/countries/list-country-summaries";
import { countryRepository } from "@/infrastructure/repositories/local-country.repository";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { isLocale } from "@/shared/types/locale";
import { CountryGrid } from "@/widgets/country-grid/country-grid";
import { listSearchSuggestions } from "@/application/countries/list-search-suggestions";
import { CountrySearchAutocomplete } from "@/features/search-countries/country-search-autocomplete";
import { paginateCountries } from "@/application/countries/paginate-countries";
import { CountryPagination } from "@/widgets/country-pagination/country-pagination";

type Query = { q?: string | string[]; region?: string | string[]; official?: string | string[]; page?: string | string[] };

function single(value?: string | string[]) { return Array.isArray(value) ? value[0] : value ?? ""; }

export default async function CountriesPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<Query> }) {
  const [{ locale }, queryParams] = await Promise.all([params, searchParams]);
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const query = single(queryParams.q);
  const region = single(queryParams.region);
  const officialOnly = single(queryParams.official) === "1";
  const requestedPage = Number(single(queryParams.page)) || 1;
  const [allCountries, countries, suggestions] = await Promise.all([
    countryRepository.findAllSummaries(locale),
    listCountrySummaries(countryRepository, locale, { query, region, officialOnly }),
    listSearchSuggestions(countryRepository, locale),
  ]);
  const regions = [...new Set(allCountries.map((country) => country.region))].sort();
  const paginated = paginateCountries(countries, requestedPage);

  return (
    <section className="section listing-page">
      <div className="listing-header"><p className="eyebrow">✦ {dictionary.countries.eyebrow}</p><h1>{dictionary.countries.title}</h1><p>{dictionary.countries.description}</p></div>
      <form className="filter-bar">
        <CountrySearchAutocomplete
          id="country-search"
          locale={locale}
          suggestions={suggestions}
          defaultValue={query}
          labels={{
            field: dictionary.countries.search,
            placeholder: dictionary.countries.searchPlaceholder,
            hint: dictionary.countries.suggestionHint,
            types: dictionary.countries.suggestionTypes,
          }}
        />
        <label><span>{dictionary.detail.region}</span><select name="region" defaultValue={region}><option value="">{dictionary.countries.allRegions}</option>{regions.map((item) => <option key={item} value={item}>{dictionary.regions[item as keyof typeof dictionary.regions] ?? item}</option>)}</select></label>
        <label className="official-filter"><input type="checkbox" name="official" value="1" defaultChecked={officialOnly} /><span><strong>{dictionary.countries.officialOnly}</strong><small>{dictionary.countries.officialOnlyHint}</small></span></label>
        <button className="button button--dark" type="submit">{dictionary.countries.filter}</button>
      </form>
      <div className="result-count"><strong>{paginated.totalItems}</strong> {dictionary.countries.results}<span aria-hidden="true">◆◆◆</span></div>
      {paginated.totalItems ? <><CountryGrid countries={paginated.items} locale={locale} action={dictionary.countries.view} /><CountryPagination locale={locale} currentPage={paginated.page} totalPages={paginated.totalPages} query={query} region={region} officialOnly={officialOnly} labels={dictionary.countries.pagination} /></> : <div className="empty-state"><span>⌁</span><h2>{dictionary.countries.empty}</h2><Link className="button button--dark" href={`/${locale}/countries`}>{dictionary.countries.clear}</Link></div>}
    </section>
  );
}
