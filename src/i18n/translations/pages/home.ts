import type { TranslationsDictionary } from '../../../types/TranslationsDictionary';

const homeTranslations = {
  title: {
    sco: 'Hame',
    'en-GB': 'Home',
  },
};

type Keys = keyof typeof homeTranslations;
export default homeTranslations as TranslationsDictionary<Keys>;
