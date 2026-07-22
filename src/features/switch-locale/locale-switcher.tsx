"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "@/shared/types/locale";

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const targetLocale = locale === "pt-BR" ? "en" : "pt-BR";
  const targetPath = pathname.replace(/^\/(pt-BR|en)(?=\/|$)/, `/${targetLocale}`);
  const query = searchParams.toString();

  return (
    <a className="locale-switcher" href={`${targetPath}${query ? `?${query}` : ""}`} aria-label={`${label}: ${targetLocale}`}>
      <svg className="locale-switcher__icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9" />
      </svg>
      <span>{targetLocale === "pt-BR" ? "PT" : "EN"}</span>
    </a>
  );
}
