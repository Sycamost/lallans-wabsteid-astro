import type { defaultLocale } from '$i18n/locales';
import type Locale from './Locale';

export type Translation<ParamsHash extends object> = (params: ParamsHash) => string;
export type LocalesTranslationHash<ParamsHash extends object> = {
  [locale in Locale]?: Translation<ParamsHash>;
} & {
  [locale in typeof defaultLocale]: Translation<ParamsHash>;
};

export type TranslationsDictionary<Raw> = {
  readonly [key in keyof Raw]: LocalesTranslationHash<
    Parameters<Raw[key][typeof defaultLocale]>[0]
  >;
};
