import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  message: {
    sco: ({ userId }: { userId: string }) => `
      There’s else a user wi the ID ${userId}.
    `,
    'en-GB': ({ userId }: { userId: string }) => `
      A user already exists with the ID ${userId}.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
