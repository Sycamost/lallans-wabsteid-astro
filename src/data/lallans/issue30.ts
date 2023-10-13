import img192w from '$images/lallans/issue30-192w.jpg';
import img274w from '$images/lallans/issue30-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 30,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1988',
  price: '1.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The thirtieth issue o the Lallans magazine.',
    'en-GB': 'The thirtieth issue of the Lallans magazine.',
  },
  contributors: [
    'Peter Cameron',
    'Ken Morrice',
    'James Miller',
    'Sandy Fenton',
    'Joy Hendry',
    'William J Rae',
    'William Neill',
    'George Philp',
    'David Ogston',
    'James Hall Thomson',
    'Gordon McFarlane',
    'Tarrybreeks',
    'John McDonald',
  ],
};

export default issue;
