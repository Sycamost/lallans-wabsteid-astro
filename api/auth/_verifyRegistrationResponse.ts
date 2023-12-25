import type Authenticator from '../types/Authenticator';
import type User from '../types/User';
import { type RegistrationResponseJSON } from '@simplewebauthn/server/script/deps';

import { verifyRegistrationResponse as innerVerifyRegistrationResponse } from '@simplewebauthn/server';
import RELYING_PARTY from './_relyingParty';
import addAuthenticator from '../db/_addAuthenticator';
import addUser from '../db/_addUser';
import env from '../_env';

/**
 * Verifies the registration response returned by @simplewebauthn/browser's
 * startAuthentication() method. Includes checking the provided challenge
 * matches the expected challenge, which should be the most recent challenge
 * to be associated with the given user.
 *
 * If verification is successful, saves the new user and their new
 * authenticator to the database.
 */
export default async function verifyRegistrationResponse(
  newUser: User,
  expectedChallenge: string,
  registrationResponse: RegistrationResponseJSON,
): Promise<boolean> {
  const verification = await innerVerifyRegistrationResponse({
    response: registrationResponse,
    expectedChallenge,
    expectedOrigin: env.ENVIRONMENT === 'prod'
      ? 'https://scotsleidassocie.org'
      : 'https://staging.scotsleidassocie.org',
    expectedRPID: RELYING_PARTY.id,
  }).catch((err) => {
    throw new Error(`Registration response verification failed. ${err}`);
  });

  if (!verification.verified || !verification.registrationInfo) {
    return false;
  }

  const textDecoder = new TextDecoder();

  const authenticator: Authenticator = {
    id: textDecoder.decode(verification.registrationInfo.credentialID),
    backedUp: verification.registrationInfo.credentialBackedUp,
    counter: verification.registrationInfo.counter,
    deviceType: verification.registrationInfo.credentialDeviceType,
    publicKey: textDecoder.decode(verification.registrationInfo.credentialPublicKey),
    type: verification.registrationInfo.credentialType,
    userId: newUser.id,

    // transports doesn't seem to be implemented on the RegistrationInfo object
    // provided by @simplewebauthn/server. We'll default to an empty array for
    // now, and if the property is ever implemented, if we're lucky, we might
    // get it for free. It's not clear to me how this property affects
    // behaviour, but it's not required to be populated by the WebAuthn
    // standard.
    transports: verification.registrationInfo['transports'] ?? [],
  };

  addUser(newUser);
  addAuthenticator(authenticator);
}
