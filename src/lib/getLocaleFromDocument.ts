import locales from '$i18n/locales';
import type Locale from '$types/Locale';

/**
 * Gets the locale from the provided document.
 *
 * Assuming the document is generated using a layout inherited from Layout, the
 * locale should be set in the `lang` attribute of the <html> element.
 *
 * @returns {Locale}
 */
export function getLocaleFromDocumentOrThrow(d: Document) {
  const locale = d.getElementsByTagName('html')[0].lang as Locale;
  if (!locales.includes(locale)) {
    throw new Error(`
      Tried to find a supported locale in the lang attribute of the HTML
      element, but none was found. Found: "${locale}".
    `);
  }

  return locale;
}
