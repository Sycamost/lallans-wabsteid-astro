import locales, { defaultLocale } from '$i18n/locales';
import type Locale from '$types/Locale';
import { correctLocaleCasing } from './correctLocaleCasing';

export function getLocaleFromPath(path: string): Locale | null {
  const regex = new RegExp(`^/(${locales.join('|')})`, 'i');
  const match = path.match(regex)?.[1];
  if (!match) {
    return null;
  }
  return correctLocaleCasing(match) as Locale;
}

export function getLocaleFromPathOrDefault(path: string): Locale {
  return getLocaleFromPath(path) ?? defaultLocale;
}

export function getLocaleFromPathOrThrow(path: string): Locale {
  const locale = getLocaleFromPath(path);
  if (!locale) {
    throw new Error(`Cannot find locale in path ${path}.`);
  }
  return locale;
}
