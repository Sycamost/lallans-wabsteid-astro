import type User from '../types/User';

import { sql } from '@vercel/postgres';
import { USERS } from './_tables';

export default async function addUser(user: User) {
  try {
    await sql.query(`
      INSERT INTO ${USERS.name} (
        ${USERS.fields.id},
        ${USERS.fields.displayName}
      ) VALUES (
        '${user.id}',
        '${user.displayName}'
      );
    `);
  } catch (err) {
    throw new Error(`Failed to insert user into database: ${JSON.stringify(user)}.`, err);
  }
}