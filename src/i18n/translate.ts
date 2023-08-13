import type Locale from '$types/Locale';
import type { TranslationsDictionary, Translation } from '$types/TranslationsDictionary';
import { defaultLocale } from './locales';

type TranslationsDictionaryWith<Key extends string, Params> = TranslationsDictionary<{
  [key in Key]: { [locale in typeof defaultLocale]: Translation<Params> } & {
    [locale in Locale]?: Translation<Params>;
  };
}>;

export default function (locale: Locale) {
  return function <
    Key extends string,
    Params,
    Dict extends TranslationsDictionaryWith<Key, Params>,
  >(dict: Dict, params: { key: Key } & { [Param in keyof Params]: string }) {
    const translation = dict[params.key][locale] ?? dict[params.key][defaultLocale];
    return translation(params);
  };
}
