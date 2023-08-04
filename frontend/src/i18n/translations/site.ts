import type { TranslationsDictionary } from "../../types/TranslationsDictionary";

const siteTranslations = {
  'title': {
    'sco': 'Scots Leid Associe',
    'en-GB': 'Scots Language Society',
  },
};

type Keys = keyof typeof siteTranslations;
export default siteTranslations as TranslationsDictionary<Keys>;