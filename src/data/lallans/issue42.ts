import img192w from '$images/lallans/issue42-192w.jpg';
import img274w from '$images/lallans/issue42-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 42,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1994',
  price: '2.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-saicont issue o the Lallans magazine.',
    'en-GB': 'The forty-second issue of the Lallans magazine.',
  },
  contributors: [
    'John Burns',
    'Margaret Rose Harris',
    'Mavis Beckett',
    'James Hall Thomson',
    'George Philp',
    'Vagaland',
    'Alexander McGregor',
    'Soutar Davie',
    'Donald W McDonald',
    'John Manson',
    'Sheila Douglas',
    'Aitken Fyall',
    'Lionel Hawes',
    'Robert Louis Stevenson',
  ],
};

export default issue;
