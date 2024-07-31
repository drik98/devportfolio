import defaultMessages from '@/messages/de.json';
export type Messages = typeof defaultMessages;

export enum Locale {
  de = "de",
  en = "en",
}
export const supportedLocales = Object.values(Locale);
export const defaultLocale = Locale.de;

/**
 * Makes sure that at least the translation for the default locale is set.
 * Translations for all other locales are optional.
 * Use getMultilingualContent to get the translation of a locale or fallback to the default locale.
 */
export type MultilingualContent<T> = { [Locale.de]: T } & Partial<
  Record<Locale, T>
>;
export type MultilingualString = MultilingualContent<string>;
export type MultilingualList = MultilingualContent<string[]>;

export type MaybeMultiLingualContent<T> = MultilingualContent<T> | T;
export type MaybeMultilingualString = MaybeMultiLingualContent<string>;
export type MaybeMultilingualList = MaybeMultiLingualContent<string[]>;

function isMultiLingualContent<T>(
  content: MaybeMultiLingualContent<T>
): content is MultilingualContent<T> {
  return content && typeof content === "object" && defaultLocale in content;
}

export function getMultilingualContent<T>(
  content: MaybeMultiLingualContent<T>,
  locale: Locale
): T {
  if (isMultiLingualContent(content)) {
    return content[locale] ?? content[defaultLocale];
  }
  return content;
}
