import type ScotsounId from '$types/ScotsounId';
import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: ({ scotsounId, name }: { scotsounId: ScotsounId; name: string }) =>
      `${name} (Scotsoun SSCD${scotsounId})`,
    'en-GB': ({ scotsounId, name }: { scotsounId: ScotsounId; name: string }) =>
      `${name} (Scotsoun SSCD${scotsounId})`,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
