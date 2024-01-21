import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  message: {
    sco: () => `
      Your browser sent a registration response til our server, but we coudna be
      shair that it wis suithfest.
    `,
    'en-GB': () => `
      Your browser sent a registration response to our server, but we coudn’t
      verify that it was valid.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
