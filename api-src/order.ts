import type { VercelRequest, VercelResponse } from '@vercel/node';
import type Order from './_Order';
import { paypalCreateOrder } from './_paypal';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'POST') {
    await handlePost(request, response);
  } else {
    console.warn('Method was not POST. Method was ' + request.method);
    response.status(404);
    return;
  }
}

async function handlePost(request: VercelRequest, response: VercelResponse) {
  const { productDescription, shortDescription, totalPrice }: Partial<Order> = request.body;
  
  if (!productDescription) {
    response.status(400).send('Expected body to contain productDescription, but none provided.');
  } else if (!shortDescription) {
    response.status(400).send('Expected body to contain shortDescription, but none provided.');
  } else if (!totalPrice) {
    response.status(400).send('Expected body to contain totalPrice, but none provided.');
  } else {
    try {
      const paypalResponse = await paypalCreateOrder({ productDescription, shortDescription, totalPrice });
      response.status(201).json({
        orderId: paypalResponse.id,
      });
    } catch (err) {
      response.status(500).send(`Internal server error. ${err}`);
    }
  }
}
