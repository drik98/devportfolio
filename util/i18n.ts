export type Locale = "de" | "en";
export const supportedLocales: Locale[] = ["de", "en"];
export const [defaultLocale] = supportedLocales;

export type MultilingualContent<T> = Partial<Record<Locale, T>> | T;
export type MultilingualString = MultilingualContent<string>;
export type MultilingualList = MultilingualContent<string[]>;

function isMultiLingualContent<T>(
  content: MultilingualContent<T>
): content is Record<Locale, T> {
  return content && typeof content === "object" && defaultLocale in content;
}

export function getMultilingualContent<T>(
  content: MultilingualContent<T>,
  locale: Locale
): T {
  if (isMultiLingualContent(content)) {
    return content[locale] ?? content[defaultLocale];
  }
  return content;
}
