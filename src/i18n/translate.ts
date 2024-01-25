import type Locale from '$types/Locale';
import type {
  TranslationsDictionary,
  Translation,
  LocalesTranslationHash,
} from '$types/TranslationsDictionary';
import { defaultLocale } from './locales';

type TranslationsDictionaryWith<
  Key extends string | number,
  ParamsHash extends object,
> = TranslationsDictionary<{
  [key in Key]: LocalesTranslationHash<ParamsHash>;
}>;

export default function (locale: Locale) {
  return function <Key extends string | number, ParamsHash extends object>(
    dict: TranslationsDictionaryWith<Key, ParamsHash>,
    params: { key: Key } & ParamsHash
  ) {
    if (!(params.key in dict)) {
      throw new Error(`
        Could not find translation for key '${params.key}'. Available keys were:
        ${Object.keys(dict)
          .map((k) => `'${k}'`)
          .join(', ')}
      `);
    }
    const localesTranslationHash: LocalesTranslationHash<ParamsHash> = dict[params.key];
    const translation: Translation<ParamsHash> =
      localesTranslationHash[locale] ?? localesTranslationHash[defaultLocale];
    return translation(params);
  };
}
