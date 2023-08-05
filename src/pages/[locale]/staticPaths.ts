import type Locale from '../../types/Locale';

// Defines what values to insert into the [locale] URL path parameter
// when generating a static site
const staticPaths: { params: { locale: Locale} }[] = [
  { params: { locale: 'sco' } },
  { params: { locale: 'en-GB' } },
]

export default staticPaths;