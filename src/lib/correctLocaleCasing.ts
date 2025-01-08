import locales from '$i18n/locales';

export function correctLocaleCasing(str: string) {
  const strLowercase = str.toLowerCase();

  for (const locale of locales) {
    if (strLowercase === locale.toLowerCase()) {
      return locale;
    }
  }

  return str;
}
