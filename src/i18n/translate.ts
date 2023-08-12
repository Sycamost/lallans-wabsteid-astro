import type Locale from '../types/Locale';
import type { TranslationsDictionary } from '../types/TranslationsDictionary';
import { defaultLocale } from './locales';

export default function (locale: Locale) {
  return function <T extends string>(dict: TranslationsDictionary<T>, key: T) {
    return dict[key][locale] ?? dict[key][defaultLocale];
  };
}
