import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
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
  'hou-jyne-intro': {
    sco: () => `
      Fur individuals, memmership costs £20 per annum. Fur institutions, the stent is £25 per annum.
      Ye can pey by bank transfer or cheque.
    `,
    'en-GB': () => `
      For individuals, membership costs £20 per annum. For institutions, the fee is £25 per annum.
      You can pay by bank transfer or cheque.
    `,
  },
  'hou-pey-by-bank-transfer-title': {
    sco: () => 'Bank transfer',
    'en-GB': () => 'Bank transfer',
  },
  'hou-pey-by-bank-transfer-para': {
    sco: ({ emailAddress }: { emailAddress: string }) => `
      Send us an email at <a href="mailto:${emailAddress}">${emailAddress}</a> an we’ll send ye oor bank details.
    `,
    'en-GB': ({ emailAddress }: { emailAddress: string }) => `
      Send us an email at <a href="mailto:${emailAddress}">${emailAddress}</a> and we’ll send you our bank details.
    `,
  },
  'hou-pey-by-cheque-title': {
    sco: () => 'Cheque',
    'en-GB': () => 'Cheque',
  },
  'hou-pey-by-cheque-para': {
    sco: ({ address }: { address: string[] }) => `
      Mak out a cheque til <b>The Scots Language Society</b>, syne send it til us at the follaein address:
      <address>${address.join('<br />')}</address>
    `,
    'en-GB': ({ address }: { address: string[] }) => `
      Make out a cheque to <b>The Scots Language Society</b>, then send it to us at the following address:
      <address>${address.join('<br />')}</address>
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
