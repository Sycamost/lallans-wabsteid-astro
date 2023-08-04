import type { defaultLocale } from "../i18n/locales";
import type Locale from "./Locale";

type TranslationsDictionary<Keys> = {
    [key in Keys]: { [key in Locale]?: string } & { [key in typeof defaultLocale]: string }
};