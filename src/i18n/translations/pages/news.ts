import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'News',
    'en-GB': () => 'News',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
