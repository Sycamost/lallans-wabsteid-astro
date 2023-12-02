import type Authenticator from '../types/Authenticator';

import { sql } from '@vercel/postgres';
import { AUTHENTICATORS } from './_tables';

export default async function addAuthenticator(authenticator: Authenticator) {
  try {
    await sql.query(`
      INSERT INTO ${AUTHENTICATORS.name} (
        ${AUTHENTICATORS.fields.id},
        ${AUTHENTICATORS.fields.backedUp},
        ${AUTHENTICATORS.fields.counter},
        ${AUTHENTICATORS.fields.deviceType},
        ${AUTHENTICATORS.fields.publicKey}
        ${AUTHENTICATORS.fields.transports},
        ${AUTHENTICATORS.fields.type},
        ${AUTHENTICATORS.fields.userId}
      ) VALUES (
        ${authenticator.id},
        ${authenticator.backedUp},
        ${authenticator.counter},
        ${authenticator.deviceType},
        ${authenticator.publicKey}
        { ${authenticator.transports.join(', ')} },
        ${authenticator.type},
        ${authenticator.userId}
      );
    `);
  } catch (err) {
    throw new Error(`Failed to insert authenticator into database: ${JSON.stringify(authenticator)}.`, err);
  }
}