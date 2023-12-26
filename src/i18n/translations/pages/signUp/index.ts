import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Sign up',
    'en-GB': () => 'Sign up',
  },
  'label-email': {
    sco: () => 'Email',
    'en-GB': () => 'Email',
  },
  'label-display-name': {
    sco: () => 'Name',
    'en-GB': () => 'Name',
  },
  submit: {
    sco: () => 'Sign up',
    'en-GB': () => 'Sign up',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
