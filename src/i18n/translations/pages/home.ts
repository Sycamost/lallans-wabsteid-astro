import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
  'about-us': {
    sco: () => 'Aboot us',
    'en-GB': () => 'About us',
  },
  'about-us-para-1': {
    sco: () => `
      The Scots Leid Associe wis fundit i 1972 wi an anely brief: tae promuive
      the Scots leid and leitratur bi furthsettin the anely magazine dedicatit
      til new Scots scrievin.
    `,
    'en-GB': () => `
      The Scots Language Society was founded in 1972 with a single mission: to
      promote the Scots language and literature by publishing the only magazine
      dedicated to new Scots writing.
    `,
  },
  'about-us-para-2': {
    sco: () => `
      Ower five decades later, that is oor meission else. Asides Lallans, we
      rin an annual Scots-leid scrievin competition, the Sangschaw, an we
      forby hae furthset an anely ingaitherin o Scots-leid recordins in our
      Scotsoun series o CDs.
    `,
    'en-GB': () => `
      Over five decades later, that remains our mission. Besides Lallans, we run
      an annual Scots-language writing competition, the Sangschaw, and we have
      also published a unique collection of Scots-language recordings in our
      Scotsoun series of CDs.
    `,
  },
  'about-us-para-3': {
    sco: () => `
      Mairfortaken, we hae annual Collogues, whaur we ingaither oor memmers
      an hear talks on Scots-leid cultur an hear Sangschaw winners readin
      their nain wark.
    `,
    'en-GB': () => `
      Furthermore, we have annual Conferences, where we gather together our
      members and hear talks on Scots-language culture and hear Sangschaw winners
      reading their own work.
    `,
  },
  'meet-the-commattee': {
    sco: () => 'Meet the Commattee',
    'en-GB': () => 'Meet the Committee',
  },
  furthsettins: {
    sco: () => 'Furth\u00adsettins',
    'en-GB': () => 'Public\u00adations',
  },
  'furthsettins-para': {
    sco: () => `
      We ar ane o the foremaist furthsetters o new Scots leitratur.
      Oor maist important furthsettins ar
      <a href="/sco/furthsettins/lallans">Lallans</a> an
      <a href="/sco/furthsettins/scotsoun">Scotsoun</a>.
    `,
    'en-GB': () => `
      We are one of the leading publishers of new Scots literature.
      Our most important publications are
      <a href="/en-GB/furthsettins/lallans">Lallans</a> and
      <a href="/en-GB/furthsettins/scotsoun">Scotsoun</a>.
    `,
  },
  'aw-furthsettins': {
    sco: () => 'Aw furthsettins',
    'en-GB': () => 'All publications',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
