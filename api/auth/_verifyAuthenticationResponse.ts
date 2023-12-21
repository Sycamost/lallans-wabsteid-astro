import type Authenticator from '../types/Authenticator';
import type { AuthenticationResponseJSON, AuthenticatorDevice } from '@simplewebauthn/server/script/deps';

import getCurrentChallenge from '../db/_getCurrentChallenge';
import getUser from '../db/_getUser';
import simplewebauthn from '@simplewebauthn/server';
import RELYING_PARTY from './_relyingParty';
import getAuthenticator from '../db/_getAuthenticator';
import updateAuthenticator from '../db/_updateAuthenticator';

/// Verifies the registration response returned by @simplewebauthn/browser's
/// startAuthentication() method. Includes checking the provided challenge
/// matches the most recent challenge for the salient user. If verification is
/// successful, saves the new authenticator to the database.
export default async function verifyAuthenticationResponse(
  userId: string,
  authenticatorId: string,
  authenticationResponse: AuthenticationResponseJSON,
): Promise<boolean> {
  const user = await getUser(userId);
  if (!user) {
    return Promise.reject(`
      Failed to verify authentication response because user with ID ${userId}
      did not exist.
    `);
  }

  const expectedChallenge = await getCurrentChallenge(userId);
  if (!expectedChallenge) {
    return Promise.reject(`
      Failed to verify authentication response because user with ID ${userId}
      did not have any existing challenges in the database.
    `);
  }

  const textEncoder = new TextEncoder();
  const fields: (keyof Authenticator)[] = ['id', 'publicKey', 'counter', 'transports'];
  const authenticator = await getAuthenticator(authenticatorId, fields);
  const adaptedAuthenticator: AuthenticatorDevice = {
    credentialID: textEncoder.encode(authenticator.id),
    credentialPublicKey: textEncoder.encode(authenticator.publicKey),
    counter: authenticator.counter,
    transports: authenticator.transports,
  }

  const verification = await simplewebauthn.verifyAuthenticationResponse({
    response: authenticationResponse,
    expectedChallenge,
    expectedOrigin: origin,
    expectedRPID: RELYING_PARTY.id,
    authenticator: adaptedAuthenticator,
  }).catch((err) => {
    throw new Error('Registration response verification failed.', err);
  });

  if (!verification.verified) {
    return false;
  }

  updateAuthenticator(authenticator.id, { counter: authenticator.counter + 1 });
}