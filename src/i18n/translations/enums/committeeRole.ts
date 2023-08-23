import type { TranslationsDictionary } from '$types/TranslationsDictionary';
import CommitteeRole from 'enums/CommitteeRole';

const tEnum = {
  [CommitteeRole.Preses]: {
    sco: () => 'Preses',
    'en-GB': () => 'President',
  },
  [CommitteeRole.Secretar]: {
    sco: () => 'Secretar',
    'en-GB': () => 'Secretar',
  },
  [CommitteeRole.Thesaurer]: {
    sco: () => 'Thesaurer',
    'en-GB': () => 'Treasurer',
  },
  [CommitteeRole.Wabmaister]: {
    sco: () => 'Wabmaister',
    'en-GB': () => 'Webmaster',
  },
  [CommitteeRole.LallansEiditor]: {
    sco: () => 'Lallans Eiditor',
    'en-GB': () => 'Lallans Editor',
  },
};

type Raw = typeof tEnum;
export default tEnum as TranslationsDictionary<Raw>;
