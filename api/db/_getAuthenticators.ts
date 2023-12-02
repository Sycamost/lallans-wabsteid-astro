import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';
import Authenticator from '../types/Authenticator';

export default async function getAuthenticators<
  T extends keyof Authenticator
>(userId: string, fields: T[]): Promise<Pick<Authenticator, T>[]> {
  try {
    const result = await sql.query(`
      SELECT ${fields.join(', ')}
      FROM ${AUTHENTICATORS.name}
      WHERE ${AUTHENTICATORS.fields.userId} = '${userId}';
    `);

    return result.rows.map((row) => {
      const authenticator: Partial<Pick<Authenticator, T>> = {};
      for (const field in fields) {
        // Assume type conversion is already done by node-postgres
        authenticator[field] = row[AUTHENTICATORS.fields[field]];
      }
      return authenticator as Pick<Authenticator, T>;
    });
  } catch (err) {
    throw new Error(`Failed to get authenticators for user with ID ${userId} from database.`, err);
  }
}