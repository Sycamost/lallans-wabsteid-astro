import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tComponent = {
  title: {
    sco: () => 'News',
    'en-GB': () => 'News',
  },
  'no-news': {
    sco: () => 'The ar nae news at the present time. Caw again later!',
    'en-GB': () => 'There is no news at the current time. Check in again later!',
  },
  'read-article': {
    sco: () => 'Read fu airticle',
    'en-GB': () => 'Read full article',
  },
};

type Raw = typeof tComponent;
export default tComponent as TranslationsDictionary<Raw>;
