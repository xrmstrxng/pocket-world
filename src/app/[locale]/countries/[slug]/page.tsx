import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  const countryNamesByAlpha3 = new Map(summaries.map((item) => [item.alpha3, item.name]));
  const borderingCountries = country.borders.map((alpha3) => countryNamesByAlpha3.get(alpha3) ?? alpha3);
  const facts = [
    { icon: "capital", label: dictionary.detail.capital, value: country.capital?.name },
    { icon: "region", label: dictionary.detail.region, value: dictionary.regions[country.region as keyof typeof dictionary.regions] ?? country.region },
    { icon: "subregion", label: dictionary.detail.subregion, value: country.subregion },
    { icon: "population", label: dictionary.detail.population, value: numberFormat(locale, country.population) },
    { icon: "area", label: dictionary.detail.area, value: country.areaKm2 ? `${numberFormat(locale, country.areaKm2)} km²` : null },
    { icon: "density", label: dictionary.detail.density, value: country.densityPerKm2 ? `${numberFormat(locale, country.densityPerKm2)} / km²` : null },
  ];

  return (
    <article className="country-page">
      <section className="country-hero section-wide">
        <div><Link className="back-link" href={`/${locale}/countries`}>← {dictionary.detail.back}</Link><p className="eyebrow">{country.codes.alpha3} / {country.region}</p><h1>{country.flag.pngUrl || country.flag.svgUrl ? <Image className="country-hero__flag" src={(country.flag.pngUrl ?? country.flag.svgUrl)!} alt={`${country.names.common[locale]} flag`} width={128} height={84} priority /> : <span aria-hidden="true">{country.flag.emoji}</span>}<span>{country.names.common[locale]}</span></h1><p>{country.names.official[locale]}</p></div>
        <div className="passport-stamp" aria-hidden="true"><span>POCKET</span><strong>{country.codes.alpha2}</strong><span>WORLD</span></div>
      </section>
      <section className="country-notebook">
        <div className="country-notebook__content detail-grid">
          <div className="facts-panel">
            <p className="eyebrow">01 / DATA LOG</p>
            <h2>{dictionary.detail.overview}<span className="facts-panel__spark" aria-hidden="true">✦</span></h2>
            <dl>
              {facts.map((fact) => (
                <OverviewFact key={fact.label} icon={fact.icon} label={fact.label} value={fact.value ?? dictionary.detail.noData} />
              ))}
            </dl>
          </div>
          <div className="data-panels">
            <DataPanel
              icon={<DataSticker kind="language" />}
              title={dictionary.detail.languages}
              values={country.languages.map((item) => item.name)}
              empty={dictionary.detail.noData}
            />
            <DataPanel
              icon={<DataSticker kind="currency" />}
              title={dictionary.detail.currencies}
              values={country.currencies.map((item) => `${item.code} · ${item.name}`)}
              empty={dictionary.detail.noData}
            />
            <DataPanel icon={<DataSticker kind="phone" />} title={dictionary.detail.callingCodes} values={country.callingCodes} empty={dictionary.detail.noData} />
            <DataPanel icon={<DataSticker kind="clock" />} title={dictionary.detail.timezones} values={country.timezones} empty={dictionary.detail.noData} />
            <DataPanel icon={<DataSticker kind="domain" />} title={dictionary.detail.tlds} values={country.tlds} empty={dictionary.detail.noData} />
            <DataPanel icon={<DataSticker kind="border" />} title={dictionary.detail.borders} values={borderingCountries} empty={dictionary.detail.noData} />
          </div>
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

type FactIconName = "capital" | "region" | "subregion" | "population" | "area" | "density";

function OverviewFact({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="overview-fact">
      <dt><FactIcon name={icon as FactIconName} /><span>{label}</span></dt>
      <dd>{value}</dd>
    </div>
  );
}

function FactIcon({ name }: { name: FactIconName }) {
  const paths: Record<FactIconName, ReactNode> = {
    capital: <><path d="M12 3 4 8v10h16V8l-8-5Z" /><path d="M9 18v-6h6v6M3 21h18" /></>,
    region: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12S9.7 18.5 12 21" /></>,
    subregion: <><path d="m4 6 5-3 6 3 5-3v15l-5 3-6-3-5 3V6Z" /><path d="M9 3v15M15 6v15" /></>,
    population: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20c.4-4 2.4-6 6-6s5.6 2 6 6M14 15c3.6-.4 5.8 1.3 6 4" /></>,
    area: <><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" /><path d="M8 8h8v8H8z" /></>,
    density: <><circle cx="6" cy="6" r="1.5" /><circle cx="12" cy="6" r="1.5" /><circle cx="18" cy="6" r="1.5" /><circle cx="6" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" /><circle cx="6" cy="18" r="1.5" /><circle cx="12" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /></>,
  };
  return <svg className="overview-fact__icon" aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

type StickerKind = "language" | "currency" | "phone" | "clock" | "domain" | "border";

function DataSticker({ kind }: { kind: StickerKind }) {
  if (kind === "currency") {
    return <Image className="data-sticker__img" src="/images/currency-coin-pastel-v2.png" alt="" width={94} height={100} aria-hidden="true" />;
  }
  if (kind === "language") {
    return <Image className="data-sticker__img" src="/images/language-translation-icon.png" alt="" width={120} height={82} aria-hidden="true" />;
  }
  const artwork: Record<Exclude<StickerKind, "currency" | "language">, ReactNode> = {
    phone: <><path d="M15 8 10 3 6 7l4 6-3 3 6 5 5-4-5-5 2-4Z" /><path d="m9 5 4 4M10 16l4 3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /><path d="M12 1v2M12 21v2M1 12h2M21 12h2" /></>,
    domain: <><path d="M5 3v15l4-4 3 7 3-2-3-7h6L5 3Z" /><path d="m14 17 3-2" /></>,
    border: <><path d="m3 19 6-10 4 6 3-5 5 9H3Z" /><path d="M3 21h18M7 15l2-2 2 2" /></>,
  };
  return <svg className={`data-sticker__svg data-sticker__svg--${kind}`} aria-hidden="true" viewBox="0 0 24 24">{artwork[kind]}</svg>;
}

function DataPanel({ icon, title, values, empty }: { icon: ReactNode; title: string; values: string[]; empty: string }) {
  return (
    <section className="data-panel">
      <span className="data-sticker" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{values.length ? values.join(" · ") : empty}</p>
    </section>
  );
}
