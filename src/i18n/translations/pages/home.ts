import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
  intro: {
    sco: () => 'Hullo! We ar the Scots Leid Associe.',
    'en-GB': () => 'Hello! We are the Scots Language Society.',
  },
  submit: {
    sco: () => 'Submit stuff',
    'en-GB': () => 'Submit stuff',
  },
  buy: {
    sco: () => 'Buy stuff',
    'en-GB': () => 'Buy stuff',
  },
  join: {
    sco: () => 'Jyne us',
    'en-GB': () => 'Join us',
  },
  news: {
    sco: () => 'Read our news',
    'en-GB': () => 'Read our news',
  },
  about: {
    sco: () => 'Lairn mair about us',
    'en-GB': () => 'Learn more about us',
  },
  committee: {
    sco: () => 'Meet our comatee',
    'en-GB': () => 'Meet our committee',
  },
  contact: {
    sco: () => 'Contact us',
    'en-GB': () => 'Contact us',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
