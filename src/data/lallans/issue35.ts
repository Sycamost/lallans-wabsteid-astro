import img192w from '$images/lallans/issue35-192w.jpg';
import img274w from '$images/lallans/issue35-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 35,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1990',
  price: '2.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The thirty-fift issue o the Lallans magazine.',
    'en-GB': 'The thirty-fifth issue of the Lallans magazine.',
  },
  contributors: [
    'Kenneth D Farrow',
    'George Hardie',
    'William Graham',
    'Eilidh NicBhaltair',
    'William J Rae',
    'Robert Calder',
    'James S Adam',
    'Soutar Davie',
    'Gordon McFarlane',
    'John Buchan',
    'James S Robertson',
  ],
};

export default issue;
