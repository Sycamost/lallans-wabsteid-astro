import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';
import User from '../types/User';

export default async function deleteUserAuthenticators(userId: User['id']) {
  const query = `
    DELETE FROM ${AUTHENTICATORS.name}
    WHERE ${AUTHENTICATORS.fields.id} = '${id}';
  `;

  try {
    await sql.query(query);
  } catch (err) {
    throw new Error(`Failed to delete authenticators for user with ID ${userId} from database. Query was ${query.replace(/\s+/g, ' ')}. ${err}`);
  }
}
