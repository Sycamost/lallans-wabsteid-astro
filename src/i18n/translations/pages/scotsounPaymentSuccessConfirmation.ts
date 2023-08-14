import type ScotsounId from '$types/ScotsounId';
import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Payment Success',
    'en-GB': () => 'Payment Success',
  },
  'payment-confirmation-message': {
    sco: ({ scotsounId }: { scotsounId: ScotsounId }) => `
      Gin ye hae been sent til this page, at means ye hae successfully ordered
      Scotsoun ${scotsounId} an we’ll be pittin it in the post fur ye belyve!
    `,
    'en-GB': ({ scotsounId }: { scotsounId: ScotsounId }) => `
      If you have been directed to this page, that means you have successfully
      ordered Scotsoun ${scotsounId} and we shall be putting it in the post for
      you right away!
    `,
  },
  'back-button-text': {
    sco: ({ scotsounId }: { scotsounId: ScotsounId }) => `Retour til Scotsoun ${scotsounId}`,
    'en-GB': ({ scotsounId }: { scotsounId: ScotsounId }) => `Return to Scotsoun ${scotsounId}`,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
