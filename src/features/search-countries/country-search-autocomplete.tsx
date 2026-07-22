"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { SearchSuggestion, SearchSuggestionKind } from "@/entities/country/search-suggestion.types";
import { matchSearchSuggestions } from "@/application/countries/list-search-suggestions";
import type { Locale } from "@/shared/types/locale";

interface SearchLabels {
  field: string;
  placeholder: string;
  hint: string;
  types: Record<SearchSuggestionKind, string>;
}

interface CountrySearchAutocompleteProps {
  id: string;
  locale: Locale;
  suggestions: SearchSuggestion[];
  labels: SearchLabels;
  defaultValue?: string;
  variant?: "hero" | "filter";
}

export function CountrySearchAutocomplete({ id, locale, suggestions, labels, defaultValue = "", variant = "filter" }: CountrySearchAutocompleteProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const matches = useMemo(() => matchSearchSuggestions(suggestions, value), [suggestions, value]);
  const listboxId = `${id}-suggestions`;

  function choose(suggestion: SearchSuggestion) {
    setValue(suggestion.label);
    setIsOpen(false);
    setActiveIndex(-1);
    if (suggestion.kind === "country" && suggestion.countrySlug) {
      router.push(`/${locale}/countries/${suggestion.countrySlug}`);
      return;
    }
    requestAnimationFrame(() => containerRef.current?.closest("form")?.requestSubmit());
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown" && matches.length) {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) => (index + 1) % matches.length);
    } else if (event.key === "ArrowUp" && matches.length) {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) => index <= 0 ? matches.length - 1 : index - 1);
    } else if (event.key === "Enter" && isOpen && activeIndex >= 0) {
      event.preventDefault();
      choose(matches[activeIndex]);
    } else if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div className={`autocomplete autocomplete--${variant}`} ref={containerRef}>
      {variant === "filter" && <label htmlFor={id}>{labels.field}</label>}
      <div className="autocomplete__control">
        <span aria-hidden="true">⌕</span>
        <input
          id={id}
          name="q"
          value={value}
          placeholder={labels.placeholder}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen && matches.length > 0}
          aria-controls={listboxId}
          aria-activedescendant={activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
          onChange={(event) => { setValue(event.target.value); setIsOpen(true); setActiveIndex(-1); }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
          onKeyDown={handleKeyDown}
        />
        {variant === "hero" && <button type="submit" aria-label={labels.field}>→</button>}
      </div>
      {isOpen && matches.length > 0 && (
        <div className="autocomplete__menu" id={listboxId} role="listbox" aria-label={labels.hint}>
          {matches.map((suggestion, index) => (
            <button
              type="button"
              role="option"
              aria-selected={index === activeIndex}
              id={`${id}-option-${index}`}
              className={index === activeIndex ? "is-active" : undefined}
              key={suggestion.id}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => choose(suggestion)}
            >
              <span className="autocomplete__main">
                {suggestion.imageUrl && <Image className="autocomplete__flag" src={suggestion.imageUrl} alt="" width={36} height={24} />}
                <span className="autocomplete__copy"><strong>{suggestion.label}</strong>{suggestion.context && <small>{suggestion.context}</small>}</span>
              </span>
              <span className={`autocomplete__badge autocomplete__badge--${suggestion.kind}`}>{labels.types[suggestion.kind]}</span>
            </button>
          ))}
          <p className="autocomplete__hint">↑↓ {labels.hint}</p>
        </div>
      )}
    </div>
  );
}
