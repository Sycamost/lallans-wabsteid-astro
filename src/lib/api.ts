import type {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';

const backendUrl = '/api';

export async function captureOrder(
  orderId: string
): Promise<TypedResponse<CaptureOrderResponseBody>> {
  const body = JSON.stringify({
    id: orderId,
    isApproved: true,
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${backendUrl}/payments/order`, {
    method: 'PATCH',
    body,
    headers,
  });

  return typeResponse(response);
}

type CaptureOrderResponseBody = {
  orderId: string;
  paypalStatus: string;
};

export async function createOrder(
  params: CreateOrderParams
): Promise<TypedResponse<CreateOrderResponseBody>> {
  const response = await fetch(`${backendUrl}/payments/order`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
  return typeResponse(response);
}

type CreateOrderParams = {
  productDescription: string;
  shortDescription: string;
  totalPrice: string;
};

type CreateOrderResponseBody = {
  orderId: string;
  approvalLink: string;
};

export async function getRegistrationOptions(
  params: GetRegistrationOptionsParams
): Promise<TypedResponse<GetRegistrationOptionsResponseBody>> {
  const queryString = new URLSearchParams(params).toString();
  // If last param ends with, e.g., `.com` as in an email address, the `.com`
  // will be interpreted as a file extension, and this will break everything.
  // Hack to avoid this bug.
  const hackyQueryString = `${queryString}&hack=toavoidbug`;

  const response = await fetch(`${backendUrl}/auth/registration?${hackyQueryString}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return typeResponse(response);
}

type GetRegistrationOptionsParams = {
  userId: string;
  displayName: string;
};

type GetRegistrationOptionsResponseBody = PublicKeyCredentialCreationOptionsJSON;

export async function verifyRegistrationResponse(params: VerifyRegistrationResponseParams) {
  return await fetch(`${backendUrl}/auth/registration`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
}

type VerifyRegistrationResponseParams = {
  userId: string;
  displayName: string;
  registrationResponse: RegistrationResponseJSON;
};

export async function getAuthenticationOptions(params: GetAuthenticationOptionsParams) {
  const queryString = new URLSearchParams(params).toString();
  return await fetch(`${backendUrl}/auth/authentication?${queryString}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
}

type GetAuthenticationOptionsParams = {
  userId: string;
};

export async function verifyAuthenticationResponse(params: VerifyAuthenticationResponseParams) {
  return await fetch(`${backendUrl}/auth/authentication`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
}

type VerifyAuthenticationResponseParams = {
  userId: string;
  authenticationResponse: AuthenticationResponseJSON;
};

async function typeResponse<T>(response: Response): Promise<TypedResponse<T>> {
  const typedResponse = {
    ...response,
    json: undefined,
    body: (await response.json().catch(() => null)) as T,
  };

  delete typedResponse.json;

  return typedResponse;
}

export type TypedResponse<T> = Omit<Response, 'body' | 'json'> & { body: T };
