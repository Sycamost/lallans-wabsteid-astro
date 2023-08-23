import type CommitteeRole from '$enums/CommitteeRole';
import type Locale from '$types/Locale';
import type { TranslationsDictionary, Translation } from '$types/TranslationsDictionary';
import { defaultLocale } from './locales';

type TranslationsDictionaryWith<
  Key extends string | CommitteeRole,
  Params,
> = TranslationsDictionary<{
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
    if (!(params.key in dict)) {
      throw new Error(`
        Could not find translation for key '${params.key}'. Available keys were:
        ${Object.keys(dict)
          .map((k) => `'${k}'`)
          .join(', ')}
      `);
    }
    const translation = dict[params.key][locale] ?? dict[params.key][defaultLocale];
    return translation(params);
  };
}
