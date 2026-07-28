import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCountryEditorial } from "@/content/countries";
import { countryRepository } from "@/infrastructure/repositories/local-country.repository";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { isLocale, locales } from "@/shared/types/locale";
import { CountryEditorialAccordion } from "@/features/country-editorial/country-editorial-accordion";
import { CountryGrid } from "@/widgets/country-grid/country-grid";

const numberFormat = (locale: string, value?: number) => value === undefined ? null : new Intl.NumberFormat(locale).format(value);

export async function generateStaticParams() {
  const countries = await countryRepository.findAllSummaries("en");
  return locales.flatMap((locale) => countries.map((country) => ({ locale, slug: country.slug })));
}

type CountryPageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const country = await countryRepository.findBySlug(slug, locale);
  if (!country) return {};
  const editorial = getCountryEditorial(country, locale);
  return {
    title: country.names.common[locale],
    description: editorial.content?.introduction ?? `${country.names.official[locale]} — ${country.region}`,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const country = await countryRepository.findBySlug(slug, locale);
  if (!country) notFound();
  const dictionary = getDictionary(locale);
  const editorial = getCountryEditorial(country, locale);
  const summaries = await countryRepository.findAllSummaries(locale);
  const related = summaries.filter((item) => item.region === country.region && item.id !== country.id).slice(0, 3);
  const facts = [
    [dictionary.detail.capital, country.capital?.name],
    [dictionary.detail.region, dictionary.regions[country.region as keyof typeof dictionary.regions] ?? country.region],
    [dictionary.detail.subregion, country.subregion],
    [dictionary.detail.population, numberFormat(locale, country.population)],
    [dictionary.detail.area, country.areaKm2 ? `${numberFormat(locale, country.areaKm2)} km²` : null],
    [dictionary.detail.density, country.densityPerKm2 ? `${numberFormat(locale, country.densityPerKm2)} / km²` : null],
  ];

  return (
    <article className="country-page">
      <section className="country-hero section-wide">
        <div><Link className="back-link" href={`/${locale}/countries`}>← {dictionary.detail.back}</Link><p className="eyebrow">{country.codes.alpha3} / {country.region}</p><h1>{country.flag.pngUrl || country.flag.svgUrl ? <Image className="country-hero__flag" src={(country.flag.pngUrl ?? country.flag.svgUrl)!} alt={`${country.names.common[locale]} flag`} width={128} height={84} priority /> : <span aria-hidden="true">{country.flag.emoji}</span>}<span>{country.names.common[locale]}</span></h1><p>{country.names.official[locale]}</p></div>
        <div className="passport-stamp" aria-hidden="true"><span>POCKET</span><strong>{country.codes.alpha2}</strong><span>WORLD</span></div>
      </section>
      <section className="section detail-grid">
        <div className="facts-panel"><p className="eyebrow">01 / DATA LOG</p><h2>{dictionary.detail.overview}</h2><dl>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value ?? dictionary.detail.noData}</dd></div>)}</dl></div>
        <div className="data-panels">
          <DataPanel icon="◈" title={dictionary.detail.languages} values={country.languages.map((item) => item.name)} empty={dictionary.detail.noData} />
          <DataPanel icon="¤" title={dictionary.detail.currencies} values={country.currencies.map((item) => `${item.code} · ${item.name}`)} empty={dictionary.detail.noData} />
          <DataPanel icon="⌁" title={dictionary.detail.callingCodes} values={country.callingCodes} empty={dictionary.detail.noData} />
          <DataPanel icon="◷" title={dictionary.detail.timezones} values={country.timezones} empty={dictionary.detail.noData} />
          <DataPanel icon="⌘" title={dictionary.detail.tlds} values={country.tlds} empty={dictionary.detail.noData} />
        </div>
      </section>
      <section className="section country-editorial">
        <div className="country-editorial__heading">
          <p className="eyebrow">02 / FIELD NOTES</p>
          <h2>{dictionary.detail.editorialDetail.title}</h2>
          <p>{editorial.content?.introduction ?? editorial.fallback}</p>
          {editorial.content ? <small>{dictionary.detail.editorialDetail.description}</small> : null}
        </div>
        {editorial.content ? (
          <>
            <CountryEditorialAccordion
              countryCode={country.codes.alpha2.toLowerCase()}
              countryName={country.names.common[locale]}
              flagUrl={country.flag.pngUrl ?? country.flag.svgUrl}
              sections={editorial.content.sections}
              labels={dictionary.detail.editorialDetail}
            />
            {editorial.content.curiosities.length ? (
              <section className="country-curiosities">
                <div><span aria-hidden="true">?</span><h3>{dictionary.detail.editorialDetail.curiosities}</h3></div>
                <ul>{editorial.content.curiosities.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
            {editorial.content.sources.length ? (
              <section className="editorial-sources">
                <h3>{dictionary.detail.editorialDetail.sources}</h3>
                <ol>
                  {editorial.content.sources.map((source) => {
                    const usedBy = editorial.content!.sections.filter((section) => section.sourceIds.includes(source.id)).map((section) => section.title);
                    return (
                      <li key={source.id}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          <strong>{source.label}</strong><span aria-hidden="true"> ↗</span>
                        </a>
                        <span>{source.publisher}</span>
                        <small>{dictionary.detail.editorialDetail.sourceFor}: {usedBy.join(", ")} · {dictionary.detail.editorialDetail.accessedAt}: {source.accessedAt}</small>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ) : null}
          </>
        ) : (
          <div className="editorial-placeholder" role="status"><span aria-hidden="true">◇</span><p>{editorial.fallback}</p></div>
        )}
      </section>
      <section className="section related-section"><div className="section-heading"><div><p className="eyebrow">03 / NEXT QUEST</p><h2>{dictionary.detail.related}</h2></div></div><CountryGrid countries={related} locale={locale} action={dictionary.countries.view} /></section>
    </article>
  );
}

function DataPanel({ icon, title, values, empty }: { icon: string; title: string; values: string[]; empty: string }) {
  return <section className="data-panel"><span aria-hidden="true">{icon}</span><div><h3>{title}</h3><p>{values.length ? values.join(" · ") : empty}</p></div></section>;
}
