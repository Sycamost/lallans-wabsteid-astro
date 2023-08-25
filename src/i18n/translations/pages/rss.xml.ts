import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tFeed = {
  title: {
    sco: () => 'Scots Leid Associe News',
    'en-GB': () => 'Scots Language Society News',
  },
  description: {
    sco: () => 'The latest updates frae the Scots Leid Associe',
    'en-GB': () => 'The latest updates from the Scots Language Society',
  },
};

type Raw = typeof tFeed;
export default tFeed as TranslationsDictionary<Raw>;
