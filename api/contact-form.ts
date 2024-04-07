import type { VercelRequest, VercelResponse } from '@vercel/node';
import ContactFormSubmission from '_ContactFormSubmission';
import CONTACT_DETAILS from '_contactDetails';
import { sendEmail } from '_send-email';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
		response.status(405).send('To send an enquiry, use the POST method.');
		return;
	}

	const { recipient, name, email, subject, message }: Partial<ContactFormSubmission> = request.body;

	if (!recipient || recipient === '') {
		response.status(400).send('Expected body to identify the recipient, but none was provided.');
	} else if (!name || name === '') {
		response.status(400).send('Expected body to contain the name of the sender, but none was provided.');
	} else if (!email || email === '') {
		response.status(400).send('Expected body to contain the email of the sender, but none was provided.');
	} else if (!subject || subject === '') {
		response.status(400).send('Expected body to contain the subject of the enquiry, but none was provided.');
	} else if (!message || message === '') {
		response.status(400).send('Expected body to contain the message body, but none was provided.');
	}

	const validRecipients = Object.keys(CONTACT_DETAILS);
	if (!validRecipients.includes(recipient)) {
		response.status(400).send(
			'Invalid recipient. Recipient must be one of: '
			+ validRecipients.join(', ')
			+ '.'
		);
	}

	try {
		sendEmail({
			recipient,
			senderName: name,
			senderEmail: email,
			subject,
			body: message,
		});
	} catch (err) {
		response.status(500).send('Failed to send email: ' + err.toString());
		return;
	}

	response.status(201).send(`Sent email to ${CONTACT_DETAILS[recipient].displayName}.`)
}

