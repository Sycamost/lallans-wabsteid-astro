import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tLanguageLinks = {
  'language-link-text': {
    sco: ({ language }: { language: string }) => `Get this page i ${language}`,
    'en-GB': ({ language }: { language: string }) => `Get this page in ${language}`,
  },
};

type Raw = typeof tLanguageLinks;
export default tLanguageLinks as TranslationsDictionary<Raw>;
