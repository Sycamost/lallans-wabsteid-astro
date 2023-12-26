import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Successfullie signed up',
    'en-GB': () => 'Successfully signed up',
  },
  'para-1': {
    sco: ({ displayName }: { displayName: string }) => `
      Walcome, ${displayName}! You hae successfullie registered a new account
      wi us.
    `,
    'en-GB': ({ displayName }: { displayName: string }) => `
      Welcome, ${displayName}! You have successfully registered a new account
      with us.
    `,
  },
  'para-2': {
    sco: ({ userId }: { userId: string }) => `
      Your new unique user ID is ${userId}. Uise this neist time you wad log in.
    `,
    'en-GB': ({ userId }: { userId: string }) => `
      Your new unique user ID is ${userId}. Use this next time you want to log in.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
