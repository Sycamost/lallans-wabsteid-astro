import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tContact = {
  title: {
    sco: () => 'Contact us',
    'en-GB': () => 'Contact us',
  },
	'submit-enquiry-online': {
		sco: () => 'Submit enquiry online',
		'en-GB': () => 'Submit enquiry online',
	},
	'name-label': {
		sco: () => 'Nem',
		'en-GB': () => 'Name',
	},
	'email-label': {
		sco: () => 'Email',
		'en-GB': () => 'Email',
	},
	'subject-label': {
		sco: () => 'Subject',
		'en-GB': () => 'Subject',
	},
	'message-body-label': {
		sco: () => 'Message',
		'en-GB': () => 'Message',
	},
	'submit-button': {
		sco: () => 'Submit',
		'en-GB': () => 'Submit',
	},
};

type Raw = typeof tContact;
export default tContact as TranslationsDictionary<Raw>;

