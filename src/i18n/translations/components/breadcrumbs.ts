import { getLallansIssue } from '$data/lallans';
import { getScotsoun } from '$data/scotsoun';
import type { TranslationsDictionary } from '$types/TranslationsDictionary';

// This maun be kept up til date bi haund. There is
// nae compile-time check that aw routes hae been
// translatit.
const breadcrumbsTranslations = {
  '/': {
    sco: () => 'Hame',
    'en-GB': () => 'Home',
  },
  '/furthsettins/': {
    sco: () => 'Furthsettins',
    'en-GB': () => 'Publications',
  },
  '/furthsettins/lallans/': {
    sco: () => 'Lallans',
    'en-GB': () => 'Lallans',
  },
  ...Object.fromEntries(
    Object.keys(getLallansIssue).map((lallansIssueNumber) => [
      `/furthsettins/lallans/${lallansIssueNumber}/`,
      {
        sco: () => `Lallans ${lallansIssueNumber}`,
        'en-GB': () => `Lallans ${lallansIssueNumber}`,
      },
    ])
  ),
  ...Object.fromEntries(
    Object.keys(getScotsoun).map((scotsounId) => [
      `/furthsettins/scotsoun/${scotsounId}/`,
      {
        sco: () => `Scotsoun ${scotsounId}`,
        'en-GB': () => `Scotsoun ${scotsounId}`,
      },
    ])
  ),
};

type Raw = typeof breadcrumbsTranslations;
export default breadcrumbsTranslations as TranslationsDictionary<Raw>;
