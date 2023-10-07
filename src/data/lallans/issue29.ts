import img from '$images/lallans/issue29.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 29,
  img,
  issueName: 'Mairtinmas 1987',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The twanty-ninth issue o the Lallans magazine.',
    'en-GB': 'The twenty-ninth issue of the Lallans magazine.',
  },
  contributors: [
    'ME Alexander',
    'Sheena Blackhall',
    'Peter Cameron',
    'Sandy Fenton',
    'John Galt',
    'William Hershaw',
    'Gordon McFarlane',
    'Alexander McGregor',
    'John Manson',
    'William Neill',
    'John S Phillips',
    'James F Robertson',
  ],
};

export default issue;
