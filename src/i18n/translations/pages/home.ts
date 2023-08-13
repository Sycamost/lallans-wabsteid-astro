import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const homeTranslations = {
  title: {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
};

type Raw = typeof homeTranslations;
export default homeTranslations as TranslationsDictionary<Raw>;
