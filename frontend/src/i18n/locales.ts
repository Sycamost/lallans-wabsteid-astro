import type Locale from '../types/Locale';

// Use the magic of TypeScript to guarantee completeness
const localesHash: { [key in Locale]: 1 } = {
  'sco': 1,
  'en-GB': 1,
};

export default Object.keys(localesHash) as Locale[];