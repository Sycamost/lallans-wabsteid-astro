import type { defaultLocale } from '$i18n/locales';
import type Locale from './Locale';

export type Translation<Params, TParams> = (params: { [key in keyof Params]: TParams }) => string;

export type TranslationsDictionary<Raw> = {
  readonly [key in keyof Raw]: {
    [locale in Locale]?: Translation<
      Parameters<Raw[key][typeof defaultLocale]>[0],
      Raw[typeof defaultLocale][Parameters<Raw[key][typeof defaultLocale]>[0]]
    >;
  } & {
    [locale in typeof defaultLocale]: Translation<
      Parameters<Raw[key][typeof defaultLocale]>[0],
      Raw[typeof defaultLocale][Parameters<Raw[key][typeof defaultLocale]>[0]]
    >;
  };
};
