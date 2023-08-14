import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Furthsettins',
    'en-GB': () => 'Publications',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
