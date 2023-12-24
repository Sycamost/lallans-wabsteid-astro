import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';
import Authenticator from '../types/Authenticator';

export default async function getAuthenticator<
  T extends keyof Authenticator
>(id: string, fields: T[]): Promise<Pick<Authenticator, T>> {
  const query = `
    SELECT ${fields.join(', ')}
    FROM ${AUTHENTICATORS.name}
    WHERE ${AUTHENTICATORS.fields.id} = '${id}';
  `;

  try {
    const result = await sql.query(query);

    const row = result.rows.at(0);
    if (!row) {
      throw new Error(`No authenticator with ID ${id} found in database.`);
    }

    const authenticator: Partial<Pick<Authenticator, T>> = {};
    for (const field in fields) {
      // Assume type conversion is already done by node-postgres
      authenticator[field] = row[AUTHENTICATORS.fields[field]];
    }
    return authenticator as Pick<Authenticator, T>;
  } catch (err) {
    throw new Error(`Failed to get authenticator with ID ${id} from database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
