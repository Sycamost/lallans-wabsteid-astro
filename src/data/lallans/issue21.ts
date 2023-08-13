import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 21,
  issueName: 'Mairtinmas 1983',
  price: '0.75',
  description: {
    'en-GB': 'The twenty-first issue of the Lallans magazine.',
    sco: 'The twanty-first issue o the Lallans magazine.',
  },
  contributions: [
    {
      title: 'The Heid',
      author: 'Alistair Mackie',
    },
    {
      title: 'Ferkeekers an Siclike',
    },
    {
      title: 'On the Lorimer NT',
      author: 'Donald Campbell',
    },
  ],
};

export default issue;
