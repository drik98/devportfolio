import { defaultLocale } from "./i18n";

export function formatDate(date?: Date, locale = defaultLocale): string {
  if (!date) return "Heute";
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateRange(
  startDate?: Date,
  endDate?: Date,
  locale?: string
): string {
  return [startDate, endDate]
    .map((date) => formatDate(date, locale))
    .join(" - ");
}
