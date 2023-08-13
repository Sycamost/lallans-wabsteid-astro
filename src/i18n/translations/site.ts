import type Locale from '../../types/Locale';
import type { TranslationsDictionary } from '../../types/TranslationsDictionary';

const siteTranslations = {
  title: {
    sco: () => 'Scots Leid Associe',
    'en-GB': () => 'Scots Language Society',
  },
  description: {
    sco: () => 'The wabsteid o the Scots Leid Associe',
    'en-GB': () => 'The website of the Scots Language Society',
  },
  lallans: {
    sco: () => 'Lallans',
    'en-GB': () => 'Lallans',
  },
  'scots-leid-associe': {
    sco: () => 'Scots Leid Associe',
    'en-GB': () => 'Scots Language Society',
  },
  by: {
    sco: () => 'bi',
    'en-GB': () => 'by',
  },
  locale: {
    sco: ({ locale }: { locale: Locale }) => {
      switch (locale) {
        case 'sco':
          return 'Scots';
        case 'en-GB':
          return 'Inglis';
      }
    },
    'en-GB': ({ locale }: { locale: Locale }) => {
      switch (locale) {
        case 'sco':
          return 'Scots';
        case 'en-GB':
          return 'English';
      }
    },
  },
};

type Raw = typeof siteTranslations;
export default siteTranslations as TranslationsDictionary<Raw>;
