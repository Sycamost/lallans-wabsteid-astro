import type Authenticator from '../types/Authenticator';

import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';

export default async function updateAuthenticator<
  T extends keyof Omit<Authenticator, 'id'>
>(id: string, updatedFields: Pick<Authenticator, T>): Promise<void> {
  const assignments = Object.entries(updatedFields)
    .filter(([key]) => key !== 'id') // never update the ID
    .map(([key, value]) => `${key}=${value}`)
    .join(', ');

  const query = `
    UPDATE ${AUTHENTICATORS.name}
    SET ${assignments}
    WHERE ${AUTHENTICATORS.fields.id} = '${id}';
  `;

  try {
    await sql.query(query);
  } catch (err) {
    throw new Error(`Failed to update authenticator with ID ${id} in database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
