import type { CountryFactsView } from "@/application/countries/get-country-facts";
import { indicatorKeys, type FactSource, type IndicatorKey } from "@/entities/country-facts/country-facts.types";
import type { Locale } from "@/shared/types/locale";
import { formatElevation, formatIndicator } from "./format-indicator";

export interface CountryIndicatorsLabels {
  title: string;
  description: string;
  items: Record<IndicatorKey | "highestPoint", string>;
  year: string;
  source: string;
  noData: string;
}

const icons: Record<IndicatorKey | "highestPoint", string> = {
  gdpUsd: "$",
  gdpPerCapitaUsd: "¢",
  lifeExpectancyYears: "♥",
  urbanPopulationPercent: "▦",
  internetUsersPercent: "@",
  forestAreaPercent: "♣",
  co2PerCapitaTonnes: "☁",
  highestPoint: "▲",
};

type Props = CountryFactsView & { locale: Locale; labels: CountryIndicatorsLabels };

export function CountryIndicators({ facts, sourcesById, locale, labels }: Props) {
  const point = facts.highestPoint;

  return (
    <section className="section indicators-section" aria-labelledby="indicators-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / STAT SHEET</p>
          <h2 id="indicators-title">{labels.title}</h2>
          <p>{labels.description}</p>
        </div>
      </div>
      <dl className="indicator-grid">
        {indicatorKeys.map((key) => {
          const indicator = facts.indicators[key];
          return (
            <IndicatorCard
              key={key}
              icon={icons[key]}
              label={labels.items[key]}
              value={indicator ? formatIndicator(key, indicator.value, locale) : labels.noData}
              year={indicator?.year}
              source={indicator ? sourcesById[indicator.sourceId] : undefined}
              labels={labels}
            />
          );
        })}
        <IndicatorCard
          icon={icons.highestPoint}
          label={labels.items.highestPoint}
          value={point ? [point.name[locale], point.elevationM !== undefined ? formatElevation(point.elevationM, locale) : null].filter(Boolean).join(" · ") : labels.noData}
          source={point && sourcesById[point.sourceId] ? { ...sourcesById[point.sourceId], url: `https://www.wikidata.org/wiki/${point.wikidataId}` } : undefined}
          labels={labels}
        />
      </dl>
    </section>
  );
}

function IndicatorCard({ icon, label, value, year, source, labels }: { icon: string; label: string; value: string; year?: number; source?: FactSource; labels: CountryIndicatorsLabels }) {
  return (
    <div className={`indicator-card${source ? "" : " is-empty"}`}>
      <dt><span className="indicator-card__icon" aria-hidden="true">{icon}</span>{label}</dt>
      <dd>
        <strong>{value}</strong>
        {source ? (
          <small>
            {year ? <><span className="sr-only">{labels.year}: </span>{year} · </> : null}
            <span className="sr-only">{labels.source}: </span>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.publisher.split(" — ")[0]}<span aria-hidden="true"> ↗</span></a>
          </small>
        ) : null}
      </dd>
    </div>
  );
}
