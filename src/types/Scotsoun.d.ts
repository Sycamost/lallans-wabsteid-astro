import type { defaultLocale } from '$i18n/locales';
import type Date from './Date';
import type Locale from './Locale';
import type Price from './Price';

type Scotsoun = {
  title: string;
  subtitle?: string;
  longName: string;
  author?: string;
  cdCount: number;
  price: Price;
  scotsounId: string;
  description?: { [key in Locale]?: string } & { [key in typeof defaultLocale]: string };
  coverArtist?: string;
  trackList?: string[];
  releaseDate?: Date;
};

export default Scotsoun;
