import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Lallans',
    'en-GB': () => 'Lallans',
  },
  'about-lallans': {
    sco: () => `
      Lallans is the foremaist leiterar journal dedicatit til new Scots-leid leiteratur.
      We hae furthset it isyne 1972 an pit two issues furth per year. We accep Scots
      frae aw airts an in aw styles an dialects. Ye can finnd oot hoo tae submit til
      Lallans on the hame page.
    `,
    'en-GB': () => `
      Lallans is the leading literary journal dedicated to new Scots-language
      literature. We have published it since 1972 and publish biannually. We accept
      Scots of all kinds and in all styles and dialects. You can find out how to
      submit to Lallans on the home page.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
