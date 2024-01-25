import type { TranslationsDictionary, LocalesTranslationHash } from '$types/TranslationsDictionary';

import MembershipType from '$enums/MembershipType';

const tEnum: { [key in MembershipType]: LocalesTranslationHash<object> } = {
  [MembershipType.IndividualUk]: {
    sco: () => 'Individual (UK)',
    'en-GB': () => 'Individual (UK)',
  },
  [MembershipType.IndividualNonUk]: {
    sco: () => 'Individual (non-UK)',
    'en-GB': () => 'Individual (non-UK)',
  },
  [MembershipType.InstitutionUk]: {
    sco: () => 'Institutional (UK)',
    'en-GB': () => 'Institutional (UK)',
  },
};

type Raw = typeof tEnum;
export default tEnum as TranslationsDictionary<Raw>;
