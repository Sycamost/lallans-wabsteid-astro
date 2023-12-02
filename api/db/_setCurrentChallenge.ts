import { sql } from '@vercel/postgres';
import { CURRENT_CHALLENGES } from './_tables';

export default async function setCurrentChallenge(userId: string, challenge: string) {
  try {
    const insert = `
      INSERT INTO ${CURRENT_CHALLENGES.name} (
        ${CURRENT_CHALLENGES.fields.userId},
        ${CURRENT_CHALLENGES.fields.currentChallenge}
      ) VALUES (
        ${userId},
        ${challenge}
      );
    `);

    const update = `
      UPDATE TABLE ${CURRENT_CHALLENGES.name}
      SET ${CURRENT_CHALLENGES.fields.currentChallenge} = ${challenge}
      WHERE ${CURRENT_CHALLENGES.fields.userId} = '${userId}';
    `);

    await sql.query(`
      BEGIN
        IF EXISTS (
          SELECT ${CURRENT_CHALLENGES.fields.userId} FROM ${CURRENT_CHALLENGES.name}
          WHERE ${CURRENT_CHALLENGES.fields.userId} = ${userId}
        )
          ${update};
        ELSE
          ${insert};
    `
  } catch (err) {
    throw new Error(`Failed to set current challenge for user with ID ${userId} in database.`, err);
  }
}