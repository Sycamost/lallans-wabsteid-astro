import { sql } from '@vercel/postgres';
import { CURRENT_CHALLENGES } from './_tables';

export default async function deleteCurrentChallenge(userId: string) {
  const query = `
    DELETE FROM ${CURRENT_CHALLENGES.name}
    WHERE ${CURRENT_CHALLENGES.fields.userId} = '${userId}'
  `;

  try {
    await sql.query(query);
  } catch (err) {
    throw new Error(`Failed to delete current challenge for user with ID ${userId} in database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
