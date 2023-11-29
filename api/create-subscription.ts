import type { VercelRequest, VercelResponse } from '@vercel/node';

import { sql } from '@vercel/postgres';
import { tableSubscriptions } from '_postgres';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { subscriptionId, emailAddress }: Partial<RequestBody> = request.body;

  if (!subscriptionId) throw new Error('Missing parameter: subscriptionId.');
  if (!emailAddress) throw new Error('Missing parameter: emailAddress.');

  try {
    const result = await sql`
      INSERT INTO ${tableSubscriptions} (id, email_address)
      VALUES (${subscriptionId}, ${emailAddress})
    ;`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}

type RequestBody = {
  subscriptionId: string,
  emailAddress: string,
};
