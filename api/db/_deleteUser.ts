import type User from '../types/User';

import { sql } from '@vercel/postgres';
import { USERS } from './_tables';

export default async function deleteUser(id: User['id']) {
  const query = `
    DELETE FROM ${USERS.name}
    WHERE ${USERS.fields.id} = '${id}',
    ;
  `;

  try {
    await sql.query(query);
  } catch (err) {
    throw new Error(`Failed to delete user from database with ID: ${id}. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
