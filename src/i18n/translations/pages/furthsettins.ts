import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const furthsettinsTranslations = {
  title: {
    sco: () => 'Furthsettins',
    'en-GB': () => 'Publications',
  },
};

type Raw = typeof furthsettinsTranslations;
export default furthsettinsTranslations as TranslationsDictionary<Raw>;
