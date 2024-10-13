import type { TranslationsDictionary } from '$types/TranslationsDictionary';

const tPage = {
  title: {
    sco: () => 'Submit',
    'en-GB': () => 'Submit',
  },
  '105-submissions-full': {
    sco: () => `
      Lallans 105 is steikit fu, and we canna accept ony mair submeissions. We
      will apen submeissions again ance Lallans 105 is out.
    `,
    'en-GB': () => `
      Lallans 105 is full to the brim, and we can’t accept any more
      submissions. We will open submissions again once Lallans 105 is out.
    `,
  },
  'submit-para-1': {
    sco: () => `
      We ar acceptin submeissions til Lallans 105.
    `,
    'en-GB': () => `
      We are accepting submissions to Lallans 105.
    `,
  },
  'submit-para-2': {
    sco: () => `
      Send us your cuttie tales, poesie and drama til
      <a href="mailto:lallans@hotmail.co.uk">lallans@hotmail.co.uk</a>.
    `,
    'en-GB': () => `
      Send us your short stories, poetry and drama to
      <a href="mailto:lallans@hotmail.co.uk">lallans@hotmail.co.uk</a>.
    `,
  },
  'submit-para-3': {
    sco: () => `
      We luik forrit tae haein your submeission, whither you’ve been submittin
      for years or you’re a first-time writer!
    `,
    'en-GB': () => `
      We look forward to having your submission, whether you’ve been
      submitting for years or you’re a first-time writer!
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
