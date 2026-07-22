import Link from "next/link";
import type { Locale } from "@/shared/types/locale";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { LocaleSwitcher } from "@/features/switch-locale/locale-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  return (
    <header className="site-header">
      <Link className="brand" href={`/${locale}#home`}><span className="brand-mark" aria-hidden="true">&#9672;</span><span>POCKET<br />WORLD</span></Link>
      <nav aria-label="Primary navigation">
        <Link href={`/${locale}#home`}>{dictionary.nav.home}</Link>
        <Link href={`/${locale}#featured`}>{dictionary.home.featured}</Link>
        <Link href={`/${locale}#continents`}>{dictionary.home.regions}</Link>
        <Link href={`/${locale}#journal`}>{dictionary.home.editorialTitle}</Link>
        <LocaleSwitcher locale={locale} label={dictionary.nav.language} />
      </nav>
    </header>
  );
}
