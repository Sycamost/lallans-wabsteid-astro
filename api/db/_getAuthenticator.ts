import type Authenticator from '../types/Authenticator';

import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';

export default async function getAuthenticator<
  T extends keyof Authenticator
>(id: Authenticator['id'], fields: T[]): Promise<Pick<Authenticator, T>> {
  const query = `
    SELECT ${fields.join(', ')}
    FROM ${AUTHENTICATORS.name}
    WHERE ${AUTHENTICATORS.fields.id} = '{ ${id.toString()} }';
  `;

  try {
    const result = await sql.query(query);

    const row = result.rows.at(0);
    if (!row) {
      throw new Error(`No authenticator with ID [${id.toString()}] found in database.`);
    }

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
  } catch (err) {
    throw new Error(`Failed to get authenticator with ID [${id.toString()}] from database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
