import img192w from '$images/lallans/issue51-192w.jpg';
import img274w from '$images/lallans/issue51-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 51,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Caunilmass 1998',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The fifty-first issue o the Lallans magazine.',
    'en-GB': 'The fifty-first issue of the Lallans magazine.',
  },
  contributors: [
    'AJ Aitken',
    'Mavis Beckett',
    'John Bellenden',
    'Sheena Blackhall',
    'CM Costie',
    'Soutar Davie',
    'Bill Findlay',
    'Pete Fortune',
    'Robert Garioch',
    'George Hardie',
    'Jilly Hawker',
    'Bruce Leeming',
    'Mary McIntosh',
    'Jean Massie',
    'Ann Matheson',
    'Lady Carolina Nairn',
    'William Neill',
    'WG Pritchard',
    'David Purves',
    'Gillian Rankin',
    'Christine Robinson',
    'James Hall Thomson',
    'Dawn Louis Turner',
    'Christine De Burgh White',
  ],
};

export default issue;
