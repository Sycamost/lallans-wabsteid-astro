import nodemailer from 'nodemailer';
import CONTACT_DETAILS from '_contactDetails';

const transporter = nodemailer.createTransport({
  host: TODO,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: TODO,
    pass: TODO,
  },
});

export async function sendEmail({ recipient, senderName, senderEmail, subject, body }: SendEmailArgs) {
	const validRecipients = Object.keys(CONTACT_DETAILS);
	if (!validRecipients.includes(recipient)) {
		throw new Error(
			'Invalid recipient. Recipient must be one of: '
			+ validRecipients.join(', ')
			+ '.'
		);
	}
	const contactDetails = CONTACT_DETAILS[recipient];

  const info = await transporter.sendMail({
    from: `"${senderName}" <${senderEmail}>`,
    to: contactDetails.email,
    subject,
    text: body,
  });

  console.log("Message sent: %s", info.messageId);
}

type SendEmailArgs = {
	recipient: string,
	senderName: string,
	senderEmail: string,
	subject: string,
	body: string,
};
