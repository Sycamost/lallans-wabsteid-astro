import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Page no fund',
    'en-GB': () => 'Page not found',
  },
  message: {
    sco: () => `
        Yon page disna exeist. Try gaein til oor
        <a href="/sco" class="link">hame page</a>?
    `,
    'en-GB': () => `
        That page doesn’t exist. Try going to our
        <a href="/en-GB" class="link">home page</a>?
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
