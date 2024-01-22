import RELYING_PARTY from './_relyingParty';
import simplewebauthn from '@simplewebauthn/server';
import getUser from '../db/_getUser';
import getAuthenticators from '../db/_getAuthenticators';
import setCurrentChallenge from '../db/_setCurrentChallenge';

/**
 * Generates options for a user with an existing account on the website to
 * authenticate using an authenticator which is already associated with their
 * account in the database.
 * 
 * If a user doesn't currently have an account, they have to create one first,
 * get their account ID and register an authenticator.
 * 
 * The result should be consumed by \@simplewebauthn/browser's
 * `startAuthentication()` method.
 */
export default async function generateAuthenticationOptions(userId: string) {
  const user = await getUser(userId);
  if (!user) {
    return Promise.reject(`
      Failed to generate authentication options because user with ID ${userId}
      did not exist.
    `);
  }

  const userAuthenticators = await getAuthenticators(userId, ['id', 'transports', 'type']);

  const options = await simplewebauthn.generateAuthenticationOptions({
    rpID: RELYING_PARTY.id,

    // Users must use one of the authenticators they've already registered
    allowCredentials: userAuthenticators,

    userVerification: 'preferred',
  });

  await setCurrentChallenge(userId, options.challenge);

  return options;
}
