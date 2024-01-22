import type { VercelRequest } from '@vercel/node';

export function getFirstQueryParam(key: string, query: VercelRequest['query']): string | null {
  const value = query[key];
  if (!value) {
    return null;
  }
  if (typeof(value) === 'string') {
    return value;
  }
  return value[0] as string;
}

