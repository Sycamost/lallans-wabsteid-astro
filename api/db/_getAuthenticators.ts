import type Authenticator from '../types/Authenticator';
import type User from '../types/User';

import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';

export default async function getAuthenticators<
  T extends keyof Authenticator
>(userId: User['id'], fields: T[]): Promise<Pick<Authenticator, T>[]> {
  const query = `
    SELECT ${fields.join(', ')}
    FROM ${AUTHENTICATORS.name}
    WHERE ${AUTHENTICATORS.fields.userId} = '${userId}';
  `;

  try {
    const result = await sql.query(query);

    return result.rows.map((row) => {
      const authenticator: Partial<Pick<Authenticator, T>> = {};
      for (const field in fields) {
        switch (field) {
          case 'id':
          case 'public_key':
            // Convert from number[] to Uint8Array
            // We know that we'll get Postgres integer[] as JavaScript number[]:
            // https://github.com/brianc/node-pg-types/blob/master/lib/textParsers.js
            authenticator[field] = new Uint8Array(row[AUTHENTICATORS.fields[field]]);
            break;
          default:
            // Assume adequate type conversion is already done by node-postgres
            authenticator[field] = row[AUTHENTICATORS.fields[field]];
        }
      }
      return authenticator as Pick<Authenticator, T>;
    });
  } catch (err) {
    throw new Error(`Failed to get authenticators for user with ID ${userId} from database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
