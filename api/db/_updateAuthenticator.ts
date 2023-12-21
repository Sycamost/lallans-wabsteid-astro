import type Authenticator from '../types/Authenticator';

import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';

export default async function updateAuthenticator<
  T extends keyof Omit<Authenticator, 'id'>
>(id: string, updatedFields: Pick<Authenticator, T>): Promise<void> {
  try {
    const assignments = Object.entries(updatedFields)
      .filter(([key]) => key !== 'id') // never update the ID
      .map(([key, value]) => `${key}=${value}`)
      .join(', ');

    await sql.query(`
      UPDATE ${AUTHENTICATORS.name}
      SET ${assignments}
      WHERE ${AUTHENTICATORS.fields.id} = '${id}';
    `);
  } catch (err) {
    throw new Error(`Failed to update authenticator with ID ${id} in database.`, err);
  }
}
