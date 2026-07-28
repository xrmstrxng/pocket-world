import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/shared/types/locale";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { LocaleSwitcher } from "@/features/switch-locale/locale-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  return (
    <header className="site-header">
      <Link className="brand" href={`/${locale}#home`} aria-label="Pocket World">
        <span className="brand-mark" aria-hidden="true">
          <Image
            src="/images/pocket-world-logo-generated.png"
            alt=""
            width={1207}
            height={1094}
            priority
          />
        </span>
        <span className="brand-name" aria-hidden="true">
          <span className="brand-name__pocket">POCKET</span>
          <span className="brand-name__world">
            <span className="brand-letter brand-letter--book-w">W</span>
            <span className="brand-letter brand-letter--compass">O</span>
            <span className="brand-letter brand-letter--cut">R</span>
            <span className="brand-letter">L</span>
            <span className="brand-letter brand-letter--cut">D</span>
          </span>
        </span>
      </Link>
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
