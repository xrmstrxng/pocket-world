import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SiteHeader } from "@/widgets/site-header/site-header";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { isLocale, locales } from "@/shared/types/locale";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <div className="site-shell">
      <Suspense fallback={<div className="header-placeholder" />}><SiteHeader locale={locale} /></Suspense>
      <main>{children}</main>
      <footer><span className="pixel-divider" aria-hidden="true">◆ ◆ ◆</span><p>{dictionary.footer}</p></footer>
    </div>
  );
}
