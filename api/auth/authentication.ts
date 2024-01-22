import type { AuthenticationResponseJSON } from '@simplewebauthn/server/script/deps';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import generateAuthenticationOptions from './_generateAuthenticationOptions';
import { getFirstQueryParam } from '_getFirstQueryParam';
import getUser from 'db/_getUser';
import setCurrentChallenge from 'db/_setCurrentChallenge';
import getCurrentChallenge from 'db/_getCurrentChallenge';
import verifyAuthenticationResponse from './_verifyAuthenticationResponse';
import updateAuthenticator from 'db/_updateAuthenticator';
import getAuthenticators from 'db/_getAuthenticators';

/**
  * # authentication
  * 
  * ## GET
  *
  * Generates authentication options.
  *
  * ### Parameters
  *
  * - `userId: string`. A user must exist with this ID.
  *
  * ### Responses
  *
  * - `200 OK`: Authentication options. Client should consume these using
  *   \@simplewebauthn/browser’s `startAuthentication()` method.
  * - `400 BAD REQUEST`: No `userId` was provided.
  * - `404 NOT FOUND`: No user exists with the provided `userId`.
  *
  * ## POST
  *
  * Verifies authentication response from \@simplewebauthn/browser’s
  * `startAuthentication()` method.
  *
  * ### Parameters
  *
  * - `userId: string`. A user must exist with this ID, and must have an
  *   existing challenge and at least one authenticator in the database.
  * - `authenticationResponse: AuthenticationResponseJSON`. The response from
  *   \@simplewebauthn/browser’s `startAuthentication()` method.
  *
  * ### Responses
  *
  * - `200 OK`: Returns a boolean string. `'true'` if verification was
  *   successful, and `'false'` otherwise.
  * - `400 BAD REQUEST`: No `userId` was provided.
  * - `404 NOT FOUND`: No user exists with the provided `userId`.
  * - `500 INTERNAL SERVER ERROR`: The user with the provided `userId` did not
  *   have any existing challenges or authenticators in the database.
  * - `501 NOT IMPLEMENTED`: The user with the provided `userId` had more than
  *   one authenticator in the database. This is not yet supported.
  */
export default async function handler(request: VercelRequest, response: VercelResponse): Promise<void> {
  if (request.method === 'GET') {
    (await handleGet(request))(response);
    return;
  }

  else if (request.method === 'POST') {
    (await handlePost(request))(response);
    return;
  }
}

async function handleGet(request: VercelRequest): Promise<(r: VercelResponse) => void> {
  const userId = getFirstQueryParam('userId', request.query);

  if (!userId) {
    return (response) => void (
      response.status(400).send('Expected body to contain userId, but none provided.')
    );
  }

  const user = await getUser(userId);
  if (!user) {
    return (response) => void (
      response.status(404).send(`
        Failed to generate authentication options because there was no user
        with the ID ${userId}.
      `)
    );
  }

  const options = await generateAuthenticationOptions(user);
  
  await setCurrentChallenge(user.id, options.challenge);
  return (response) => void response.json(options);
}

async function handlePost(request: VercelRequest): Promise<(r: VercelResponse) => void> {
  type Body = {
    userId: string;
    authenticationResponse: AuthenticationResponseJSON;
  };
  const { userId, authenticationResponse }: Body = request.body;

  if (!userId) {
    return (response) => void (
      response.status(400).send('Expected body to contain userId, but none provided.')
    );
  }

  if (!authenticationResponse) {
    return (response) => void (
      response.status(400).send('Expected body to contain authenticationResponse, but none provided.')
    );
  }

  const user = await getUser(userId);
  if (!user) {
    return (response) => void (
      response.status(404).send(`
        Failed to verify authentication response because no user existed with
        ID ${userId}.
      `)
    );
  }

  const expectedChallenge = await getCurrentChallenge(userId);
  if (!expectedChallenge) {
    return (response) => void (
      response.status(500).send(`
      Failed to verify authentication response because user with ID ${userId}
      did not have any existing challenges in the database.
    `)
    );
  }

  const authenticators = await getAuthenticators(user.id, ['id', 'publicKey', 'counter', 'transports']);
  if (!authenticators || authenticators.length === 0) {
    return (response) => void (
      response.status(500).send(`
        Failed to verify authentication response because user with ID ${userId}
        did not have any authenticators in the database.
      `)
    );
  } else if (authenticators.length > 1) {
    // TODO: implement support for multiple authenticators
    return (response) => void (
      response.status(501).send(`
        Failed to verify authentication response because user with ID ${userId}
        had more than one authenticator in the database. We only currently
        support a single authenticator per user.
      `)
    );
  }

  const isVerified = await verifyAuthenticationResponse(
    authenticators[0],
    authenticationResponse,
    expectedChallenge
  );

  if (isVerified) {
    for (const authenticator of authenticators) {
      updateAuthenticator(authenticator.id, { counter: authenticator.counter + 1 });
    }
  }

  return (response) => void (
    response.status(200).send(isVerified ? 'true' : 'false')
  );
}

