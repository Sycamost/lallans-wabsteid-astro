import type Date from '$types/Date';
import type Month from '$types/Month';
import type Locale from '$types/Locale';
import type { TranslationsDictionary } from '$types/TranslationsDictionary';
import locales from '../locales';

const tSite = {
  title: {
    sco: () => 'Scots Leid Associe',
    'en-GB': () => 'Scots Language Society',
  },
  description: {
    sco: () => 'The wabsteid o the Scots Leid Associe',
    'en-GB': () => 'The website of the Scots Language Society',
  },
  lallans: {
    sco: () => 'Lallans',
    'en-GB': () => 'Lallans',
  },
  scotsoun: {
    sco: () => 'Scotsoun',
    'en-GB': () => 'Scotsoun',
  },
  'scots-leid-associe': {
    sco: () => 'Scots Leid Associe',
    'en-GB': () => 'Scots Language Society',
  },
  by: {
    sco: () => 'bi',
    'en-GB': () => 'by',
  },
  and: {
    sco: () => 'an',
    'en-GB': () => 'and',
  },
  'back-to-top': {
    sco: () => 'Back til tap',
    'en-GB': () => 'Back to top',
  },
  locale: {
    sco: ({ locale }: { locale: Locale }) => {
      switch (locale) {
        case 'sco':
          return 'Scots';
        case 'en-GB':
          return 'Inglis';
      }
    },
    'en-GB': ({ locale }: { locale: Locale }) => {
      switch (locale) {
        case 'sco':
          return 'Scots';
        case 'en-GB':
          return 'English';
      }
    },
  },
  'long-date': Object.fromEntries(
    locales.map((locale) => {
      return [
        locale,
        ({ date }: { date: Date }) => `
          ${tSite['ordinal'][locale]({ n: date.slice(8) })}
          ${tSite['month'][locale]({ month: date.slice(5, 7) as Month })}
          ${date.slice(0, 4)}
        `,
      ];
    })
  ),
  ordinal: {
    sco: ({ n }: { n: string }) => {
      const m = n.replace(/^0+/, '');
      switch (m.at(-1)) {
        case '1':
          // Exception for numbers ending in eleven
          if (m.length > 1 && m.at(-2) === '1') {
            return `${m}t`;
          }
          return `${m}st`;
        case '2':
          // Exception for numbers ending in twelve
          if (m.length > 1 && m.at(-2) === '1') {
            return `${m}t`;
          }
          return `${m}nt`;
        case '3':
          // Exception for numbers ending in thirteen
          if (m.length > 1 && m.at(-2) === '1') {
            return `${m}t`;
          }
          return `${m}rd`;
        default:
          return `${m}t`;
      }
    },
    'en-GB': ({ n }: { n: string }) => {
      const m = n.replace(/^0+/, '');
      switch (m.at(-1)) {
        case '1':
          // Exception for numbers ending in eleven
          if (m.length > 1 && m.at(-2) === '1') {
            return `${m}th`;
          }
          return `${m}st`;
        case '2':
          // Exception for numbers ending in twelve
          if (m.length > 1 && m.at(-2) === '1') {
            return `${m}th`;
          }
          return `${m}nd`;
        case '3':
          // Exception for numbers ending in thirteen
          if (m.length > 1 && m.at(-2) === '1') {
            return `${m}th`;
          }
          return `${m}rd`;
        default:
          return `${m}th`;
      }
    },
  },
  month: {
    sco: ({ month }: { month: Month }) => {
      switch (month) {
        case '01':
          return 'Januar';
        case '02':
          return 'Februar';
        case '03':
          return 'Mairch';
        case '04':
          return 'April';
        case '05':
          return 'Mey';
        case '06':
          return 'June';
        case '07':
          return 'July';
        case '08':
          return 'August';
        case '09':
          return 'Septemmer';
        case '10':
          return 'October';
        case '11':
          return 'Novemmer';
        case '12':
          return 'Decemmer';
      }
    },
    'en-GB': ({ month }: { month: Month }) => {
      switch (month) {
        case '01':
          return 'January';
        case '02':
          return 'February';
        case '03':
          return 'March';
        case '04':
          return 'April';
        case '05':
          return 'May';
        case '06':
          return 'June';
        case '07':
          return 'July';
        case '08':
          return 'August';
        case '09':
          return 'September';
        case '10':
          return 'October';
        case '11':
          return 'November';
        case '12':
          return 'December';
      }
    },
  },
};

type Raw = typeof tSite;
export default tSite as TranslationsDictionary<Raw>;
