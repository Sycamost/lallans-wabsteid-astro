import type User from '../types/User';

import RELYING_PARTY from './_relyingParty';
import simplewebauthn from '@simplewebauthn/server';
import getAuthenticators from '../db/_getAuthenticators';
import setCurrentChallenge from '../db/_setCurrentChallenge';

/**
 * Generates options for a user with an existing account on the website to
 * authenticate using an authenticator which is already associated with their
 * account in the database.
 * 
 * The result should be consumed by \@simplewebauthn/browser's
 * `startAuthentication()` method.
 */
export default async function generateAuthenticationOptions(user: User) {
  const userAuthenticators = await getAuthenticators(user.id, ['id', 'transports', 'type']);

  const options = await simplewebauthn.generateAuthenticationOptions({
    rpID: RELYING_PARTY.id,

    // Users must use one of the authenticators they've already registered
    allowCredentials: userAuthenticators,

    userVerification: 'preferred',
  });

  return options;
}
