import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tEnum = {
  Preses: {
    sco: () => 'Preses',
    'en-GB': () => 'President',
  },
  Secretar: {
    sco: () => 'Secretar',
    'en-GB': () => 'Secretary',
  },
  Thesaurer: {
    sco: () => 'Thesaurer',
    'en-GB': () => 'Treasurer',
  },
  MemmershipSecretar: {
    sco: () => 'Memmership Secretar',
    'en-GB': () => 'Membership Secretary',
  },
  Wabmaister: {
    sco: () => 'Wabmaister',
    'en-GB': () => 'Webmaster',
  },
  LallansEiditor: {
    sco: () => 'Lallans Eiditor',
    'en-GB': () => 'Lallans Editor',
  },
  HonoraryPreses: {
    sco: () => 'Honorary Preses',
    'en-GB': () => 'Honorary President',
  },
};

type Raw = typeof tEnum;
export default tEnum as TranslationsDictionary<Raw>;
