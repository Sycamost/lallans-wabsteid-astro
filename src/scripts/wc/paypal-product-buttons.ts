import type { PayPalNamespace } from '@paypal/paypal-js';

import { loadScript } from '@paypal/paypal-js';
import * as api from '$lib/api';

class PaypalProductButtons extends HTMLElement {
  constructor() {
    super();

    try {
      const paypalClientId = this.getAttribute('paypal-client-id');

      const paypalOptions = {
        clientId: paypalClientId,
        locale: 'en_GB',
        commit: false,
        currency: 'GBP',
        intent: 'capture',
      };

      loadScript(paypalOptions)
        .catch((err) => {
          this.innerHTML = `
            <details>
              <summary>Failed to load PayPal buttons</summary>
              <p>${err}</p>
            </details>
          `;
          console.error(`Failed to load the PayPal JS SDK script. ${err}`);
        })
        .then((paypal) => {
          const constructButtons = paypal?.Buttons;
          if (paypal && constructButtons) {
            const successPageUrl = this.getAttribute('success-page-url');
            this.innerHTML = '';
            const div = document.createElement('div');
            this.appendChild(div);
            this.makePaypalButtons(constructButtons, successPageUrl).render(div);
          }
        })
        .catch((err) => {
          this.innerHTML = `
            <details>
              <summary>Failed to load PayPal buttons</summary>
              <p>${err}</p>
            </details>
          `;
          console.error(`Failed to construct the PayPal buttons. ${err}`);
        });
    } catch (err) {
      this.innerHTML = `
        <details>
          <summary>Failed to load PayPal buttons</summary>
          <p>${err}</p>
        </details>
      `;
    }
  }

  makePaypalButtons(
    constructButtons: Required<PayPalNamespace>['Buttons'],
    successPageUrl: string
  ) {
    const productDescription = this.getAttribute('product-description');
    const shortDescription = this.getAttribute('short-description');
    const totalPrice = this.getAttribute('total-price');

    return constructButtons({
      // This function is called to set up the transaction details without actually carrying it out
      async createOrder() {

        let response: Response;
        try {
          response = await api.createOrder({ productDescription, shortDescription, totalPrice });
        } catch (err) {
          throw new Error(`Failed to create order. ${err}`);
        }

        if (!response.ok) {
          throw new Error(`
            Failed to create order. Backend response was
            ${response.status} ${response.statusText}. ${await response.text()}
          `);
        }

        const { orderId, approvalLink } = await response.json();
        console.info(`
          Successfully created order with ID
          ${orderId}. Approval link: ${approvalLink}
        `);
        return orderId;
      },

      // This function is called after payment is confirmed
      async onApprove(data) {
        let response: Response;
        try {
          response = await api.captureOrder(data.orderID);
        } catch (err) {
          throw new Error(`Failed to capture order. ${err}`);
        }

        if (!response.ok) {
          throw new Error(`
            Failed to capture order. Backend response was ${response.status}
            ${response.statusText}. ${await response.text()}
          `);
        }

        const { orderId, requestStatus } = await response.json();
        console.info(`
          Successfully captured order with ID ${orderId},
          request status is ${requestStatus}.
        `);

        console.info(`Redirecting to confirmation page, ${successPageUrl}...`);
        window.location.href = successPageUrl;
      },
    });
  }

  getAttribute(key: string): string {
    const value = super.getAttribute(key);
    if (!value || typeof value !== 'string') {
      throw new Error(`${key} attribute not provided to PaypalProductButtons component.`);
    }
    return value;
  }
}

customElements.define('paypal-product-buttons', PaypalProductButtons);
