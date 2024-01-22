import type Authenticator from '../types/Authenticator';
import type { AuthenticationResponseJSON, AuthenticatorDevice } from '@simplewebauthn/server/script/deps';

import simplewebauthn from '@simplewebauthn/server';
import RELYING_PARTY from './_relyingParty';

/// Verifies the registration response returned by @simplewebauthn/browser's
/// startAuthentication() method.
export default async function verifyAuthenticationResponse(
  authenticator: Pick<Authenticator, 'id' | 'publicKey' | 'counter' | 'transports'>,
  authenticationResponse: AuthenticationResponseJSON,
  expectedChallenge: string,
): Promise<boolean> {
  const adaptedAuthenticator: AuthenticatorDevice = {
    credentialID: authenticator.id,
    credentialPublicKey: authenticator.publicKey,
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
}
