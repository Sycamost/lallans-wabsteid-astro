import type { RegistrationResponseJSON } from '@simplewebauthn/server/script/deps';
import type { VercelRequest, VercelResponse } from '@vercel/node';

import generateRegistrationOptionsForNewUser from './_generateRegistrationOptionsForNewUser';
import verifyRegistrationResponse from './_verifyRegistrationResponse';
import getUser from '../db/_getUser';
import getCurrentChallenge from '../db/_getCurrentChallenge';
import setCurrentChallenge from '../db/_setCurrentChallenge';
import { getFirstQueryParam } from '../_getFirstQueryParam';
import addUser from 'db/_addUser';
import addAuthenticator from 'db/_addAuthenticator';

/**
 * # registration
 * 
 * ## GET
 * 
 * Generates registration options.
 * 
 * ### Parameters
 * 
 * - `userId: string`. User must not already exist with this ID.
 * - `displayName: string`. Name of the user to use in UIs.
 * 
 * ### Responses
 * 
 * - `200 OK`: Registration options. Client should consume these options using
 * \@simplewebauthn/browser's `startRegistration()` method.
 * - `400 BAD REQUEST`: client failed to provide all the required parameters.
 * - `409 CONFLICT`: user with provided ID already exists.
 *
 * ## POST
 * 
 * Verifies registration options from \@simplewebauthn/browser's
 * `startRegistration()` method.
 * 
 * ### Parameters
 * 
 * - `userId: string`. User ID as provided in the registration options. The
 *   user ID must not already exist in the database.
 * - `displayName: string`. Display name as provided in the registration
 *   options.
 * - `registrationResponse: RegistrationResponseJSON`. The result of calling
 *   \@simplewebauthn/browser's `startRegistration()` method on the client.
 * 
 * ### Response
 * 
 * - `200 OK`: Returns a boolean string. `'true'` if verification was
 *   successful, `'false'` otherwise.
 * - `400 BAD REQUEST`: either the client failed to provide all the required
 *   parameters, or the user was not associated with any existing challenges.
 *   In the latter case, the user probably skipped or messed up the step to get
 *   registration options.
 * - `409 CONFLICT`: a user already exists with the given ID.
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
  const displayName = getFirstQueryParam('displayName', request.query);

  if (!userId) {
    return (response) => void (
      response.status(400).send('Expected body to contain userId, but none provided.')
    );
  }

  if (!displayName) {
    return (response) => void (
      response.status(400).send('Expected body to contain displayName, but none provided.')
    );
  }

  const userAlreadyExists = await getUser(userId);
  if (userAlreadyExists) {
    return (response) => void (
      response.status(409).send(`
        Failed to generate registration options because there was already a user
        with the ID ${userId}.
      `)
    );
  }

  const options = await generateRegistrationOptionsForNewUser(userId, displayName);
  setCurrentChallenge(options.user.id, options.challenge);
  return (response) => void (response.status(200).json(options));
}

async function handlePost(request: VercelRequest): Promise<(r: VercelResponse) => void> {
  type Body = {
    userId: string,
    displayName: string,
    registrationResponse: RegistrationResponseJSON
  };
  const { userId, displayName, registrationResponse }: Body = request.body;

  if (!userId) {
    return (response) => void (
      response.status(400).send('Expected body to contain userId, but none provided.')
    );
  }

  if (!displayName) {
    return (response) => void (
      response.status(400).send('Expected body to contain displayName, but none provided.')
    );
  }

  if (!registrationResponse) {
    return (response) => void (
      response.status(400).send('Expected body to contain registrationOptions, but none provided.')
    );
  }

  const userIdAlreadyExists = await getUser(userId);
  if (userIdAlreadyExists) {
    return (response) => void (
      response.status(409).send(`
        Failed to verify registration response because there was already a user
        with the user ID ${userId}.
      `)
    );
  }

  const newUser = { id: userId, displayName };

  const expectedChallenge = await getCurrentChallenge(newUser.id);
  if (!expectedChallenge) {
    return (response) => void (
      response.status(400).send(`
        Failed to verify registration response because user ID ${newUser.id} was not
        associated with any existing challenges in the database.
      `)
    );
  }

  const authenticator = await verifyRegistrationResponse(newUser, expectedChallenge, registrationResponse);
  const isVerified = !!authenticator;

  if (isVerified) {
    await addUser(newUser);
    await addAuthenticator(authenticator);
  }

  return (response) => void (
    response.status(200).send(isVerified ? 'true' : 'false')
  );
}
