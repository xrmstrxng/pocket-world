import Link from "next/link";
import type { Locale } from "@/shared/types/locale";

type PageItem = number | "ellipsis";

function pageItems(currentPage: number, totalPages: number): PageItem[] {
  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const visible = [...pages].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
  const items: PageItem[] = [];
  for (const page of visible) {
    const previous = items.at(-1);
    if (typeof previous === "number" && page - previous > 1) items.push("ellipsis");
    items.push(page);
  }
  return items;
}

export function CountryPagination({ locale, currentPage, totalPages, query, region, officialOnly, labels }: {
  locale: Locale;
  currentPage: number;
  totalPages: number;
  query: string;
  region: string;
  officialOnly: boolean;
  labels: { navigation: string; previous: string; next: string; page: string };
}) {
  if (totalPages <= 1) return null;

  const href = (page: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (region) params.set("region", region);
    if (officialOnly) params.set("official", "1");
    if (page > 1) params.set("page", String(page));
    const suffix = params.toString();
    return `/${locale}/countries${suffix ? `?${suffix}` : ""}`;
  };

  return (
    <nav className="pagination" aria-label={labels.navigation}>
      {currentPage > 1
        ? <Link className="pagination__direction" href={href(currentPage - 1)} rel="prev"><span aria-hidden="true">&larr;</span> {labels.previous}</Link>
        : <span className="pagination__direction is-disabled" aria-disabled="true"><span aria-hidden="true">&larr;</span> {labels.previous}</span>}
      <div className="pagination__pages">
        {pageItems(currentPage, totalPages).map((item, index) => item === "ellipsis"
          ? <span className="pagination__ellipsis" key={`ellipsis-${index}`} aria-hidden="true">&hellip;</span>
          : <Link className="pagination__page" key={item} href={href(item)} aria-current={item === currentPage ? "page" : undefined} aria-label={`${labels.page} ${item}`}>{item}</Link>)}
      </div>
      {currentPage < totalPages
        ? <Link className="pagination__direction" href={href(currentPage + 1)} rel="next">{labels.next} <span aria-hidden="true">&rarr;</span></Link>
        : <span className="pagination__direction is-disabled" aria-disabled="true">{labels.next} <span aria-hidden="true">&rarr;</span></span>}
    </nav>
  );
}
