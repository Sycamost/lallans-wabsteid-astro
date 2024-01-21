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
  'status-working': {
    sco: () => 'Signin you up…',
    'en-GB': () => 'Signing you up…',
  },
  'unexpected-error': {
    sco: () => 'There wis an unexpectit mishanter.',
    'en-GB': () => 'There was an expected error.',
  },
  'error-getting-registration-options': {
    sco: () => 'There wis a mishanter gettin registration options frae the server.',
    'en-GB': () => 'There was an error getting registration options from the server.',
  },
  'error-starting-registration': {
    sco: () => 'There wis a mishanter whan your browser tried tae stert registration.',
    'en-GB': () => 'There was an error when your browser tried to start registration.',
  },
  'error-verifying-registration-response': {
    sco: () =>
      'There wis a mishanter whan the server tried tae check that the registration response wis suithfest.',
    'en-GB': () => 'There was an error when the server tried to verify the registration response.',
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
