import { QueryResultRow, sql } from '@vercel/postgres';
import { CURRENT_CHALLENGES } from './_tables';

export default async function getCurrentChallenge(userId: string): Promise<string | null> {
  try {
    const result = await sql.query(`
      SELECT ${CURRENT_CHALLENGES.fields.currentChallenge}
      FROM ${CURRENT_CHALLENGES.name}
      WHERE ${CURRENT_CHALLENGES.fields.userId} = '${userId}';
    `);

    if (!result.rows.length) {
      return null;
    }

    const row: QueryResultRow = result.rows.at(0);

    // If the result is NULL in Postgres, it should be JavaScript `null` here.
    // See https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/result.js
    return row[CURRENT_CHALLENGES.fields.currentChallenge];
  } catch (err) {
    throw new Error(`Failed to get current challenge for user with ID ${userId} from database.`, err);
  }
}