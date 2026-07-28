"use client";

import Image from "next/image";
import { useState } from "react";
import type { EditorialSection, EditorialSectionKey } from "@/content/countries";

export interface EditorialLabels {
  open: string;
  close: string;
  timeline: string;
  dishes: string;
  ingredients: string;
  dishCategories: Readonly<Record<"national" | "regional" | "traditional", string>>;
  flagImage: string;
  adoption: string;
  colors: string;
  symbols: string;
  previousFlags: string;
  popularSports: string;
  achievements: string;
}

const sectionIcons: Record<EditorialSectionKey, string> = {
  territory: "MAP",
  geography: "MTN",
  history: "HIS",
  culture: "ART",
  customs: "LAW",
  cuisine: "EAT",
  religion: "BEL",
  flag: "FLG",
  sports: "SPO",
};

export function CountryEditorialAccordion({
  countryCode,
  countryName,
  flagUrl,
  sections,
  labels,
}: {
  countryCode: string;
  countryName: string;
  flagUrl?: string;
  sections: EditorialSection[];
  labels: EditorialLabels;
}) {
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(sections[0] ? [sections[0].key] : []));

  function toggle(key: string) {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="editorial-accordion">
      {sections.map((section, index) => {
        const isOpen = openSections.has(section.key);
        const triggerId = `editorial-${countryCode}-${section.key}-trigger`;
        const panelId = `editorial-${countryCode}-${section.key}-panel`;

        return (
          <section className={`editorial-panel${isOpen ? " is-open" : ""}`} key={section.key}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(section.key)}
              >
                <span className="editorial-panel__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="editorial-panel__icon" aria-hidden="true">{sectionIcons[section.key]}</span>
                <span className="editorial-panel__heading">
                  <strong>{section.title}</strong>
                  <small>{section.summary}</small>
                </span>
                <span className="editorial-panel__action">
                  <span className="sr-only">{isOpen ? labels.close : labels.open}</span>
                  <span aria-hidden="true">{isOpen ? "\u2212" : "+"}</span>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="editorial-panel__body"
              hidden={!isOpen}
            >
              <div className="editorial-panel__copy">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.timeline?.length ? <Timeline section={section} label={labels.timeline} /> : null}
              {section.dishes?.length ? <DishGrid section={section} labels={labels} /> : null}
              {section.flag ? (
                <FlagDetails
                  section={section}
                  flagUrl={flagUrl}
                  flagAlt={`${labels.flagImage}: ${countryName}`}
                  labels={labels}
                />
              ) : null}
              {section.sports ? <SportsDetails section={section} labels={labels} /> : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Timeline({ section, label }: { section: EditorialSection; label: string }) {
  return (
    <div className="editorial-subsection">
      <h4>{label}</h4>
      <ol className="editorial-timeline">
        {section.timeline?.map((entry) => (
          <li key={`${entry.period}-${entry.title}`}>
            <span>{entry.period}</span>
            <div><strong>{entry.title}</strong><p>{entry.description}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DishGrid({ section, labels }: { section: EditorialSection; labels: EditorialLabels }) {
  return (
    <div className="editorial-subsection">
      <h4>{labels.dishes}</h4>
      <div className="editorial-dishes">
        {section.dishes?.map((dish) => (
          <article key={dish.name}>
            <div>{dish.category ? <span className="editorial-badge">{labels.dishCategories[dish.category]}</span> : null}<h5>{dish.name}</h5></div>
            <p>{dish.description}</p>
            {dish.ingredients?.length ? <small><strong>{labels.ingredients}:</strong> {dish.ingredients.join(", ")}</small> : null}
          </article>
        ))}
      </div>
    </div>
  );
}

function FlagDetails({
  section,
  flagUrl,
  flagAlt,
  labels,
}: {
  section: EditorialSection;
  flagUrl?: string;
  flagAlt: string;
  labels: EditorialLabels;
}) {
  const flag = section.flag!;
  return (
    <div className="editorial-subsection editorial-flag">
      {flagUrl ? <Image src={flagUrl} alt={flagAlt} width={240} height={160} /> : null}
      <dl>
        {flag.adoption ? <div><dt>{labels.adoption}</dt><dd>{flag.adoption}</dd></div> : null}
        {flag.colors?.length ? <div><dt>{labels.colors}</dt><dd>{flag.colors.map((color) => <p key={color.name}><strong>{color.name}:</strong> {color.meaning}</p>)}</dd></div> : null}
        {flag.symbols?.length ? <div><dt>{labels.symbols}</dt><dd>{flag.symbols.join(" ")}</dd></div> : null}
        {flag.previousFlags?.length ? <div><dt>{labels.previousFlags}</dt><dd>{flag.previousFlags.map((item) => <p key={item.period}><strong>{item.period}:</strong> {item.description}</p>)}</dd></div> : null}
      </dl>
    </div>
  );
}

function SportsDetails({ section, labels }: { section: EditorialSection; labels: EditorialLabels }) {
  const sports = section.sports!;
  return (
    <div className="editorial-subsection editorial-sports">
      <div><h4>{labels.popularSports}</h4><ul className="editorial-tags">{sports.popular.map((sport) => <li key={sport}>{sport}</li>)}</ul></div>
      {sports.achievements.length ? (
        <div><h4>{labels.achievements}</h4><ul>{sports.achievements.map((item) => <li key={`${item.year}-${item.title}`}><span>{item.year}</span><div><strong>{item.title}</strong>{item.description ? <p>{item.description}</p> : null}</div></li>)}</ul></div>
      ) : null}
    </div>
  );
}
