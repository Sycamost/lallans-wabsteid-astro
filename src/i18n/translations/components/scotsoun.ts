import tSite from '../site';
import type { TranslationsDictionary } from '$types/TranslationsDictionary';
import type Date from '$types/Date';
import { defaultLocale } from '$i18n/locales';

const tScotsoun = {
  'cover-artist': {
    sco: ({ coverArtist }: { coverArtist: string }) => `Cover airtist: ${coverArtist}.`,
    'en-GB': ({ coverArtist }: { coverArtist: string }) => `Cover airtist: ${coverArtist}.`,
  },
  'release-date': {
    sco: ({ releaseDate }: { releaseDate: Date }) => {
      const tDate = tSite['long-date']['sco'];
      return `Releast: ${tDate({ date: releaseDate })}`;
    },
    'en-GB': ({ releaseDate }: { releaseDate: Date }) => {
      const tDate = tSite['long-date']['en-GB'] ?? tSite['long-date'][defaultLocale];
      return `Released: ${tDate({ date: releaseDate })}`;
    },
  },
};

type Raw = typeof tScotsoun;
export default tScotsoun as TranslationsDictionary<Raw>;
