import img from '$images/lallans/issue27.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 27,
  img,
  issueName: 'Mairtinmas 1986',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The twanty-seiventh issue o the Lallans magazine.',
    'en-GB': 'The twenty-seventh issue of the Lallans magazine.',
  },
  contributors: [
    'James Adam',
    'David Angus',
    'JK Annand',
    'JG Auld',
    'Sheena Blackhall',
    'Ian Bowman',
    'Peter Cameron',
    'Donald Campbell',
    'William Hershaw',
    'Tom Hubbard',
    'TS Law',
    'John McDonald',
    'Craig Nelder',
    'David Purves',
    'James Robertson',
    'Raymond Vettese',
  ],
};

export default issue;
