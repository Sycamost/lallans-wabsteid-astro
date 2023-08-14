import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Payment Success',
    'en-GB': () => 'Payment Success',
  },
  'payment-confirmation-message': {
    sco: ({ issueNumber }: { issueNumber: string }) => `
      Gin ye hae been sent til this page, at means ye hae successfully ordered
      Lallans ${issueNumber} an we’ll be pittin it in the post fur ye belyve!
    `,
    'en-GB': ({ issueNumber }: { issueNumber: string }) => `
      If you have been directed to this page, that means you have successfully
      ordered Lallans ${issueNumber} and we shall be putting it in the post for
      you right away!
    `,
  },
  'back-button-text': {
    sco: ({ issueNumber }: { issueNumber: string }) => `Retour til Lallans ${issueNumber}`,
    'en-GB': ({ issueNumber }: { issueNumber: string }) => `Return to Lallans ${issueNumber}`,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
