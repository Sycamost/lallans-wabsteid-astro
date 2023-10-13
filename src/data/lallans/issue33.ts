import img192w from '$images/lallans/issue33-192w.jpg';
import img274w from '$images/lallans/issue33-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 33,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1989',
  price: '2.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The thirty-third issue o the Lallans magazine.',
    'en-GB': 'The thirty-third issue of the Lallans magazine.',
  },
  contributors: [
    'George Philp',
    'Walter Watson',
    'John S Phillips',
    'ME Alexander',
    'Soutar Davie',
    'Peter McCormack',
    'William Graham',
    'Peter Cameron',
    'Elliot Cowan Smith',
    'Gordon MacFarlane',
    'David Stevely',
    'EM Buchanan',
  ],
};

export default issue;
