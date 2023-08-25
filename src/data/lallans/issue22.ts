import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 22,
  issueName: 'Whitsunday 1984',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    'en-GB': 'The twenty-second issue of the Lallans magazine.',
    sco: 'The twanty-saicont issue o the Lallans magazine.',
  },
  contributions: [
    {
      title: 'Montrose Poems',
      author: 'Raymond Vettese',
    },
    {
      title: 'Maisters',
      author: 'JK Annand',
    },
    {
      title: 'A Bairn’s Tale',
      author: 'June Walker Leonard',
    },
    {
      title: 'Stories, Articles, Poems',
      author: 'David Purves, William Montgomerie and Davie Angus',
    },
  ],
};

export default issue;
