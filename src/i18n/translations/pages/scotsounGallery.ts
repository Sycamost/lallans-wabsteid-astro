import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Scotsoun',
    'en-GB': () => 'Scotsoun',
  },
  'about-scotsoun': {
    sco: () => `
      Scotsoun is oor lang-rinnin series o Scots-leid audio recordins, i the form o tales,
      drama, sangs, an poesie readins. Forby, we hae some muisic CDs.
    `,
    'en-GB': () => `
      Scotsoun is our long-running series of Scots-language audio recordings, in the form
      of stories, drama, songs and poetry readings. We also have some music CDs.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
