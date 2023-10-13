import type { defaultLocale } from '$i18n/locales';
import type Date from './Date';
import type Locale from './Locale';
import type Price from './Price';
import type ScotsounId from './ScotsounId';

type Scotsoun = {
  title: string;
  subtitle?: string;
  longName: string;
  img: {
    width192: ImageMetadata;
  };
  author?: string;
  cdCount: number;
  price: Price;
  scotsounId: ScotsounId;
  description?: { [key in Locale]?: string } & { [key in typeof defaultLocale]: string };
  coverArtist?: string;
  trackList?: string[];
  releaseDate?: Date;
  uploadDate: Date;
};

export default Scotsoun;
