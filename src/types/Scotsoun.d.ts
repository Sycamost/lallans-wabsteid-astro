import type { defaultLocale } from '../i18n/locales';
import type Date from './Date';
import type Locale from './Locale';
import type Price from './Price';

type Scotsoun = {
  'title': string,
  'subtitle'?: string,
  'long-name': string,
  'author'?: string,
  'cd-count': number,
  'price': Price,
  'scotsoun-id': string,
  'description'?: { [key in Locale]?: string } & { [key in typeof defaultLocale]: string },
  'cover-artist'?: string,
  'track-list'?: string[],
  'release-date'?: Date,
};

export default Scotsoun;