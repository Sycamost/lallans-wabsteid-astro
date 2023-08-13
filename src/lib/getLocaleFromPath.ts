import locales from '$i18n/locales';
import type Locale from '$types/Locale';

export default function (path: string): Locale {
  const regex = new RegExp(`^/(${locales.join('|')})`);
  const match = path.match(regex)?.[1];
  if (!match) {
    throw new Error(`Cannot find locale in path ${path}.`);
  }
  return match as Locale;
}
