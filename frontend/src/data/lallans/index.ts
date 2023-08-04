import type LallansIssue from '../../types/LallansIssue';
import type LallansIssueNumber from '../../types/LallansIssueNumber';

/**
 * This might seem like an odd syntax, but this is so
 * that we can use TypeScript to guarantee that every
 * Lallans issue is accounted for.
 */
export const getLallansIssue: LallansIssueGetterTable = {
  21: async () => (await import('./issue21')).default,
  22: async () => (await import('./issue22')).default,
  23: async () => (await import('./issue23')).default,
  24: async () => (await import('./issue24')).default,
  25: async () => (await import('./issue25')).default,
  27: async () => (await import('./issue27')).default,
  29: async () => (await import('./issue29')).default,
  30: async () => (await import('./issue30')).default,
  33: async () => (await import('./issue33')).default,
  35: async () => (await import('./issue35')).default,
  36: async () => (await import('./issue36')).default,
  38: async () => (await import('./issue38')).default,
  39: async () => (await import('./issue39')).default,
  41: async () => (await import('./issue41')).default,
  42: async () => (await import('./issue42')).default,
  43: async () => (await import('./issue43')).default,
  45: async () => (await import('./issue45')).default,
  46: async () => (await import('./issue46')).default,
  47: async () => (await import('./issue47')).default,
  48: async () => (await import('./issue48')).default,
  49: async () => (await import('./issue49')).default,
  50: async () => (await import('./issue50')).default,
  51: async () => (await import('./issue51')).default,
  52: async () => (await import('./issue52')).default,
  53: async () => (await import('./issue53')).default,
  54: async () => (await import('./issue54')).default,
  55: async () => (await import('./issue55')).default,
  56: async () => (await import('./issue56')).default,
  57: async () => (await import('./issue57')).default,
  59: async () => (await import('./issue59')).default,
  60: async () => (await import('./issue60')).default,
  61: async () => (await import('./issue61')).default,
  62: async () => (await import('./issue62')).default,
  63: async () => (await import('./issue63')).default,
  64: async () => (await import('./issue64')).default,
  65: async () => (await import('./issue65')).default,
  66: async () => (await import('./issue66')).default,
  67: async () => (await import('./issue67')).default,
  68: async () => (await import('./issue68')).default,
  69: async () => (await import('./issue69')).default,
  70: async () => (await import('./issue70')).default,
  71: async () => (await import('./issue71')).default,
  72: async () => (await import('./issue72')).default,
  73: async () => (await import('./issue73')).default,
  74: async () => (await import('./issue74')).default,
  75: async () => (await import('./issue75')).default,
  76: async () => (await import('./issue76')).default,
  77: async () => (await import('./issue77')).default,
  78: async () => (await import('./issue78')).default,
  79: async () => (await import('./issue79')).default,
  80: async () => (await import('./issue80')).default,
  81: async () => (await import('./issue81')).default,
  82: async () => (await import('./issue82')).default,
  83: async () => (await import('./issue83')).default,
  84: async () => (await import('./issue84')).default,
  85: async () => (await import('./issue85')).default,
  86: async () => (await import('./issue86')).default,
  87: async () => (await import('./issue87')).default,
  88: async () => (await import('./issue88')).default,
  89: async () => (await import('./issue89')).default,
  90: async () => (await import('./issue90')).default,
  91: async () => (await import('./issue91')).default,
  92: async () => (await import('./issue92')).default,
  93: async () => (await import('./issue93')).default,
  96: async () => (await import('./issue96')).default,
  97: async () => (await import('./issue97')).default,
  98: async () => (await import('./issue98')).default,
  99: async () => (await import('./issue99')).default,
  100: async () => (await import('./issue100')).default,
  101: async () => (await import('./issue101')).default,
};

export type LallansIssueGetterTable = { [key in LallansIssueNumber]: () => Promise<LallansIssue> };

export async function getAllLallansIssues(): Promise<LallansIssue[]> {
  return Promise.all(Object.values(getLallansIssue).map(f => f()));
}