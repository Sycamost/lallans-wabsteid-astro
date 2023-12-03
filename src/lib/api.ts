import type {
  PublicKeyCredentialCreationOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';

const backendUrl = '/api';

export async function captureOrder(orderId: string) {
  const body = JSON.stringify({
    id: orderId,
    isApproved: true,
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  return await fetch(`${backendUrl}/payments/order`, {
    method: 'PATCH',
    body,
    headers,
  });
}

export async function createOrder(params: CreateOrderParams) {
  return await fetch(`${backendUrl}/payments/order`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
}

type CreateOrderParams = {
  productDescription: string;
  shortDescription: string;
  totalPrice: string;
};

export async function getRegistrationOptions(params: GetRegistrationOptionsParams) {
  const queryString = new URLSearchParams(params).toString();
  // If last param ends with, e.g., `.com` as in an email address, the `.com`
  // will be interpreted as a file extension, and this will break everything.
  // Hack to avoid this bug.
  return await fetch(`${backendUrl}/auth/registration?${queryString}&hack=toavoidbug`, {
    method: 'GET',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
}

type GetRegistrationOptionsParams = {
  userId: string;
  displayName: string;
};

export type GetRegistrationOptionsResponseBody = PublicKeyCredentialCreationOptionsJSON;

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
