import img from '$images/lallans/issue39.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 39,
  img,
  issueName: 'Mairtinmas 1992',
  price: '2.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The thirty-ninth issue o the Lallans magazine.',
    'en-GB': 'The thirty-ninth issue of the Lallans magazine.',
  },
  contributors: [
    'Peter Cameron',
    'Margaret Macaulay',
    'Colin Wilson',
    'ME Alexander',
    'John Manson',
    'Soutar Davie',
    'John McDonald',
    'Douglas Kynoch',
    'Gavin Sprott',
    'Kahlil Gibran',
    'Lilian Anderson',
    'John Burns',
    'Eric Scott Petrie',
    'Rob Lindsay o Pitscottie',
    'Gordon McFarlane',
    'Seumas Scott',
  ],
};

export default issue;
