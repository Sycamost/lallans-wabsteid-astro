import type { TranslationsDictionary } from '../../../types/TranslationsDictionary';

const languageLinksTranslations = {
  'language-link-text': {
    sco: ({ language }: { language: string }) => `Get this page i ${language}`,
    'en-GB': ({ language }: { language: string }) => `Get this page in ${language}`,
  },
};

type Raw = typeof languageLinksTranslations;
export default languageLinksTranslations as TranslationsDictionary<Raw>;
