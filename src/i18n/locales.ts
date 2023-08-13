import type Locale from '$types/Locale';

// Use the magic of TypeScript to guarantee completeness
const localesHash: { [key in Locale]: 1 } = {
  sco: 1,
  'en-GB': 1,
};

// Use the magic of TypeScript to guarantee that the
// default locale is a locale, but also have const
// string type
const defaultLocaleAsLocale: Locale = 'sco';
const defaultLocale: 'sco' = defaultLocaleAsLocale;

export { defaultLocale };
export default Object.keys(localesHash) as Locale[];
