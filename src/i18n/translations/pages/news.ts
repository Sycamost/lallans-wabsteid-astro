import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'News',
    'en-GB': () => 'News',
  },
  'no-news': {
    sco: () => 'The ar nae news at the present time. Caw again later!',
    'en-GB': () => 'There is no news at the current time. Check in again later!',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
