import img192w from '$images/lallans/issue41-192w.jpg';
import img274w from '$images/lallans/issue41-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 41,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1993',
  price: '2.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-first issue o the Lallans magazine.',
    'en-GB': 'The forty-first issue of the Lallans magazine.',
  },
  contributors: [
    'Gavin Sprott',
    'Kahlil Gibran',
    'Mary Strathie',
    'Margaret MacDougall',
    'Ronald W McDonald',
    'Soutar Davie',
    'David Glenday',
    'William Donaldson',
    'Neil R MacCallum',
    'Mary Rawnsley',
    'John Murray',
    'Ian D Colvin',
    'Sheila Douglas',
    'William Pritchard',
    'Bessie JB MacArthur',
    'John S Phillips',
    'Gordon McFarlane',
    'Lilian Anderson',
    'George Philip',
    'Sir Gilbert Hay',
    'WL Wilson',
    'Margaret Rose Harris',
  ],
};

export default issue;
