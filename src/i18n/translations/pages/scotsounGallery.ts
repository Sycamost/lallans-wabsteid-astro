import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const scotsounGalleryTranslations = {
  title: {
    sco: () => 'Scotsoun',
    'en-GB': () => 'Scotsoun',
  },
};

type Raw = typeof scotsounGalleryTranslations;
export default scotsounGalleryTranslations as TranslationsDictionary<Raw>;
