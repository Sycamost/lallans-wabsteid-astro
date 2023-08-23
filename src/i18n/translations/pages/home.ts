import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
  news: {
    sco: () => 'Recent News',
    'en-GB': () => 'Recent News',
  },
  'aw-news': {
    sco: () => 'Aw news',
    'en-GB': () => 'All news',
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
    sco: () => 'Furthsettins',
    'en-GB': () => 'Publications',
  },
  'furthsettins-para': {
    sco: () => `
      We ar ane o the foremaist furthsetters o new Scots leitratur.
      Oor maist important furthsettins ar
      <a href="/sco/furthsettins/lallans" class="link">Lallans</a> an
      <a href="/sco/furthsettins/scotsoun" class="link">Scotsoun</a>.
    `,
    'en-GB': () => `
      We are one of the leading publishers of new Scots literature.
      Our most important publications are
      <a href="/en-GB/furthsettins/lallans" class="link">Lallans</a> and
      <a href="/en-GB/furthsettins/scotsoun" class="link">Scotsoun</a>.
    `,
  },
  'aw-furthsettins': {
    sco: () => 'Aw furthsettins',
    'en-GB': () => 'All publications',
  },
  jyne: {
    sco: () => 'Jyne',
    'en-GB': () => 'Join',
  },
  'why-jyne': {
    sco: () => 'Why jyne the Scots Leid Associe?',
    'en-GB': () => 'Why join the Scots Language Society?',
  },
  'why-jyne-para-1': {
    sco: () => `
      Bi jynin us, ye ar helpin us tae heize up the Scots leid, maistly bi giein
      Scots scrievers a place tae lairn frae anither an finnd their ain Scots vyce.
    `,
    'en-GB': () => `
      By joining us, you are helping us to champion the Scots language,
      especially by giving Scots writers a place to learn from one
      another and to find their own Scots voice.
    `,
  },
  'why-jyne-para-2': {
    sco: () => `
      Forby, memmers get biannual issues o our aesome <i>Lallans</i> magazine gratis,
      an hae the richt tae atten our Annual Collogues, whaur we haud our AGM an
      enjoy talks frae kenspeckle spikkers on thochtie maiters effeirin til Scots
      leid an leiteratur.
    `,
    'en-GB': () => `
      In addition, members get biannual issues of our unique <i>Lallans</i>
      magazine gratis, and have the right to attend our Annual Conferences, where
      we hold our AGM and enjoy talks from highly regarded speakers on
      thought-provoking subjects relating to Scots language and literature.
    `,
  },
  'why-jyne-para-3': {
    sco: () => `
      Gin whit ye ar seekin is a community o prose-scrievers, makars, pleywreichts
      an owersetters, aw wi muckle care fur the Scots leid, the ar nae peer wi hus,
      the auldest Scots-leid activist organisation that’s about eenou an the anely
      fully dedicatit til the forderance o new Scots leiteratur.
    `,
    'en-GB': () => `
      If what you’re looking for is a community of prose-writers, poets,
      playwrights and translators with a passion for the Scots language, we have
      no equal. We are the oldest extant Scots-language activist organisation and
      the only one solely dedicated to the development of new Scots literature.
    `,
  },
  'hou-jyne': {
    sco: () => 'Hou can A jyne?',
    'en-GB': () => 'How can I join?',
  },
  'hou-jyne-para-1': {
    sco: () => `
      Fur individuals, memmership costs £20 per annum. Fur aw ithers, the stent is £25 per annum.
    `,
    'en-GB': () => `
      For individuals, membership costs £20 per annum. For all others, the fee is £25 per annum.
    `,
  },
  'hou-jyne-para-2': {
    sco: ({ membershipEmail }: { membershipEmail: string }) => `
      Fur tae become a memmer, simply get in titch wi us at
      <a class="link" href="mailto:${membershipEmail}">${membershipEmail}</a>
      an we’ll provide ye wi our bank details; or ye can jyne bi sendin us a cheque
      made peyable til <b>The Scots Language Society</b>. See
      <a class="link" href="#contact">Contact us</a>
      fur our address.
    `,
    'en-GB': ({ membershipEmail }: { membershipEmail: string }) => `
      To become a member, simply get in touch with us at
      <a class="link" href="mailto:${membershipEmail}">${membershipEmail}</a>
      and we’ll provide you with our bank details; or you can join by sending us
      a cheque made payable to <b>The Scots Language Society</b>. See
      <a class="link" href="#contact">Contact us</a> for our address.
    `,
  },
  contact: {
    sco: () => 'Contact us',
    'en-GB': () => 'Contact us',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
