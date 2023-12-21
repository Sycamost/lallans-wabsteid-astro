import type { VercelRequest, VercelResponse } from '@vercel/node';

import getUser from 'db/_getUser';

/**
 * # user
 * 
 * ## GET
 * 
 * Gets the user with the given user ID.
 * 
 * ### Parameters
 * 
 * - `userId: string`. The ID of the user to get.
 * 
 * ### Response
 * 
 * `{ id: string, displayName: string }`. The user with the provided ID.
 */
export default async function handler(request: VercelRequest, response: VercelResponse) {
  switch (request.method) {
    case 'GET': {
      const { userId } = request.body;

      if (!userId) {
        response
          .status(400)
          .send('Expected request body to contain a userId, but none was provided.');
        return;
      }

      try {
        const user = await getUser(userId);
        response.status(200).send(user);
        return;
      } catch (err) {
        response
          .status(400)
          .send(`Failed to get user with ID ${userId}. ${err}`);
        return;
      }
    }
  }
}
