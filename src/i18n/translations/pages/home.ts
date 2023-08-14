import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
