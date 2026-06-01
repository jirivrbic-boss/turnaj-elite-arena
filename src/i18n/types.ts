export type Locale = "cs" | "en" | "uk";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "cs", label: "Čeština" },
  { code: "en", label: "English" },
  { code: "uk", label: "Українська" },
];

export const LOCALE_STORAGE_KEY = "elite-arena-locale";

export const DEFAULT_LOCALE: Locale = "cs";
