import { sql } from '@vercel/postgres';
import { CURRENT_CHALLENGES } from './_tables';

export default async function setCurrentChallenge(userId: string, challenge: string) {
  const deleteExistingChallenges = `
    DELETE FROM ${CURRENT_CHALLENGES.name}
    WHERE ${CURRENT_CHALLENGES.fields.userId} = '${userId}'
  `;

  const insertCurrentChallenge = `
    INSERT INTO ${CURRENT_CHALLENGES.name} (
      ${CURRENT_CHALLENGES.fields.userId},
      ${CURRENT_CHALLENGES.fields.currentChallenge}
    ) VALUES (
      '${userId}',
      '${challenge}'
    )
  `;

  const query = `
    BEGIN;
    ${deleteExistingChallenges};
    ${insertCurrentChallenge};
    COMMIT;
  `;

  try {
    await sql.query(query);
  } catch (err) {
    throw new Error(`Failed to set current challenge for user with ID ${userId} in database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
