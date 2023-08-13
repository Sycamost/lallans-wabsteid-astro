import type { defaultLocale } from '$i18n/locales';
import type Locale from './Locale';

export type Translation<Params> = (params: { [key in keyof Params]: string }) => string;

export type TranslationsDictionary<Raw> = {
  [key in keyof Raw]: {
    [locale in Locale]?: Translation<Parameters<Raw[key][typeof defaultLocale]>[0]>;
  } & {
    [locale in typeof defaultLocale]: Translation<Parameters<Raw[key][typeof defaultLocale]>[0]>;
  };
};
