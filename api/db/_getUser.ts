import { QueryResultRow, sql } from '@vercel/postgres';
import User from '../types/User';
import { USERS } from './_tables';

export default async function getUser(
  userId: string
): Promise<Pick<User, 'id' | 'displayName'> | null> {
  const query = `
    SELECT
      ${USERS.fields.displayName}
    FROM ${USERS.name}
    WHERE ${USERS.fields.id} = '${userId}';
  `;

  try {
    const result = await sql.query(query);

    if (!result.rows.length) {
      return null;
    }

    const row: QueryResultRow = result.rows.at(0);

    return {
      id: userId,
      displayName: row[USERS.fields.displayName],
    };
  } catch (err) {
    throw new Error(`Failed to get user with ID ${userId} from database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
