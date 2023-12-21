import RELYING_PARTY from './_relyingParty';
import { generateRegistrationOptions } from '@simplewebauthn/server';

/**
 * Generates options for a user without an existing account on the website to
 * register a new authenticator and remembers the generated challenge.
 *
 * This function assumes that no user already exists with the given ID.
 * It's the responsibility of the caller to make sure this assumption is true.
 *
 * If the user already has an account, they can't yet add more authenticators.
 * This feature might be added in a future version of the website if there is a
 * demonstrable need for it (or if I just get bored one day).
 */
export default async function generateRegistrationOptionsForNewUser(userId: string, displayName: string) {
  const options = await generateRegistrationOptions({
    rpName: RELYING_PARTY.name,
    rpID: RELYING_PARTY.id,

    userID: userId,
    userName: displayName,

    // Don't prompt users for additional information about the authenticator
    attestationType: 'none',

    // Prevents users from re-registering existing authenticators. In our case,
    // we only allow new users right now, so they don't have any existing
    // authenticators.
    excludeCredentials: []
  });

  return options;
}
