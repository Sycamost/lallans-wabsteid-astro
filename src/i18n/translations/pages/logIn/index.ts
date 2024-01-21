import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Log in',
    'en-GB': () => 'Log in',
  },
  'label-username': {
    sco: () => 'Username',
    'en-GB': () => 'Username',
  },
  submit: {
    sco: () => 'Log in',
    'en-GB': () => 'Log in',
  },
  'status-working': {
    sco: () => 'Loggin you in…',
    'en-GB': () => 'Logging you in…',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
