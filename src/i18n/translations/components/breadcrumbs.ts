import type { TranslationsDictionary } from '../../../types/TranslationsDictionary';

// This maun be kept up til date bi haund. There is
// nae compile-time check that aw routes hae been
// translatit.
const breadcrumbsTranslations = {
  '/': {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
  '/furthsettins/': {
    sco: () => 'Furthsettins',
    'en-GB': () => 'Publications',
  },
  '/furthsettins/lallans/': {
    sco: () => 'Lallans',
    'en-GB': () => 'Lallans',
  },
};

type Raw = typeof breadcrumbsTranslations;
export default breadcrumbsTranslations as TranslationsDictionary<Raw>;
