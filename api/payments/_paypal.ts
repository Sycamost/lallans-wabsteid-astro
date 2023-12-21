import type Order from '../types/Order';

import env from '_env';

export async function paypalCreateOrder(order: Order) {
  const accessToken = await getLazyAccessToken();
  const url = `${PAYPAL_URL}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: 'POST',
    headers: paypalCreateOrderRequestHeaders(accessToken),
    body: paypalCreateOrderRequestBody(order),
  });
  return await handle(response);
}

export async function paypalCaptureOrder(orderId: string) {
  const accessToken = await getLazyAccessToken();
  const url = `${PAYPAL_URL}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: 'POST',
    headers: paypalCaptureOrderRequestHeaders(accessToken),
  });
  return await handle(response);
}

async function handle(response: Response) {
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to communicate with PayPal. ' + await response.text());
}

function paypalCreateOrderRequestBody(order: Order) {
  const body = JSON.stringify({
    intent: 'CAPTURE',
    purchase_units: [
      {
        description: order.productDescription,
        soft_descriptor: order.shortDescription,
        amount: {
          currency_code: 'GBP',
          value: order.totalPrice,
        },
      },
    ],
  });
  return body;
}

function paypalCreateOrderRequestHeaders(accessToken: string) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
}

function paypalCaptureOrderRequestHeaders(accessToken: string) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
}

const getLazyAccessToken = (() => {
  let accessToken: string;
  let timeRequested: number;
  let timeExpires: number;
  return async function (): Promise<string> {
    const isNearlyExpired = timeExpires - Date.now() < 10_000;
    if (!accessToken || isNearlyExpired) {
      timeRequested = Date.now();
      let secondsUntilExpires: number;
      ({ accessToken, secondsUntilExpires } = await generateAccessToken());
      const msUntilExpires = secondsUntilExpires * 1000;
      timeExpires = timeRequested + msUntilExpires;
    }
    return accessToken;
  };
})();

async function generateAccessToken(): Promise<AccessTokenResponse> {
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_SECRET).toString('base64');
  const response = await fetch(`${PAYPAL_URL}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const { access_token, expires_in } = await response.json();
  if (access_token && expires_in) {
    return {
      accessToken: access_token,
      secondsUntilExpires: expires_in,
    };
  }
  throw new Error('Could not fetch access token from PayPal.');
}

type AccessTokenResponse = {
  accessToken: string;
  secondsUntilExpires: number;
};

const PAYPAL_CLIENT_ID =
    env.ENVIRONMENT === 'prod'
    ? env.PAYPAL_LIVE_CLIENT_ID
    : env.PAYPAL_SANDBOX_CLIENT_ID;
const PAYPAL_SECRET =
    env.ENVIRONMENT === 'prod'
    ? env.PAYPAL_LIVE_SECRET
    : env.PAYPAL_SANDBOX_SECRET;
const PAYPAL_URL =
    env.ENVIRONMENT === 'prod'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com'