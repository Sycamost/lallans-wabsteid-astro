import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Contact',
    'en-GB': () => 'Contact',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
