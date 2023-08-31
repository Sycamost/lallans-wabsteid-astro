import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tComponent = {
  'back-to-top': {
    sco: () => 'Back til tap',
    'en-GB': () => 'Back to top',
  },
  'subscribe-to-rss': {
    sco: () => 'Subscrive til oor RSS feed',
    'en-GB': () => 'Subscribe to our RSS feed',
  },
};

type Raw = typeof tComponent;
export default tComponent as TranslationsDictionary<Raw>;
