import type { TranslationsDictionary } from "../../types/TranslationsDictionary";

const siteTranslations = {
  'title': {
    'sco': 'Scots Leid Associe',
    'en-GB': 'Scots Language Society',
  },
  'description': {
    'sco': 'The wabsteid o the Scots Leid Associe',
    'en-GB': 'The website of the Scots Language Society',
  },
  'lallans': {
    'sco': 'Lallans',
    'en-GB': 'Lallans',
  },
  'by': {
    'sco': 'bi',
    'en-GB': 'by',
  },
};

type Keys = keyof typeof siteTranslations;
export default siteTranslations as TranslationsDictionary<Keys>;