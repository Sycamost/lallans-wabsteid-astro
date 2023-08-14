import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Scotsoun',
    'en-GB': () => 'Scotsoun',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
