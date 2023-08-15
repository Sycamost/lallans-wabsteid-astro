import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tNewsPreviewLink = {
  'read-article': {
    sco: () => 'Read fu airticle',
    'en-GB': () => 'Read full article',
  },
};

type Raw = typeof tNewsPreviewLink;
export default tNewsPreviewLink as TranslationsDictionary<Raw>;
