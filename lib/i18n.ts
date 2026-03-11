export const locales = ["en", "fr", "es", "pt", "zh", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

/** Detect locale from Accept-Language header value */
export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const languages = acceptLanguage
    .split(",")
    .map((tag) => tag.split(";")[0]?.trim().split("-")[0]?.toLowerCase())
    .filter(Boolean) as string[];

  for (const lang of languages) {
    if (hasLocale(lang)) return lang as Locale;
  }
  return defaultLocale;
}
