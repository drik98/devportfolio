import { Locale, Messages, defaultLocale } from "./i18n";
import defaultMessages from "@/messages/de.json";

export function formatDate(
  date?: Date,
  locale = defaultLocale,
  messages = defaultMessages
): string {
  if (!date) return messages.common.dateTime.today;
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateRange(
  startDate?: Date,
  endDate?: Date,
  locale?: Locale,
  messages?: Messages
): string {
  return [startDate, endDate]
    .map((date) => formatDate(date, locale, messages))
    .join(" - ");
}

function formatDateCV(
  date?: Date,
  locale = defaultLocale
): string | null{
  if (!date) return null;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
  }).format(date);
}

export function formatDateRangeCV(
  startDate?: Date,
  endDate?: Date,
  locale = defaultLocale,
  messages = defaultMessages
): string {
  const [formattedStartDate, formattedEndDate] = [startDate, endDate].map((date) => formatDateCV(date, locale));
  if(!formattedStartDate && !formattedEndDate) {
    return "";
  }
  if(!formattedEndDate) {
    return `${messages.cv.since} ${formattedStartDate}`;
  }
  return `${formattedStartDate}-${formattedEndDate}`;
}