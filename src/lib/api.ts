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
