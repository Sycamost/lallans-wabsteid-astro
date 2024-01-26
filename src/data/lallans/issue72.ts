import img192w from '$images/lallans/issue72-192w.jpg';
import img274w from '$images/lallans/issue72-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 72,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Simmer 2008',
  price: '8.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The seiventy-saicont issue o the Lallans magazine.',
    'en-GB': 'The seventy-second issue of the Lallans magazine.',
  },
  contributors: [
    'Sheena Blackhall',
    'Liz Niven',
    'Robert R Calder',
    'David C Purdie',
    'Andy Eagle',
    'David Purves',
    'Kenneth D Farrow',
    'Chris Robinson',
    'Sandy Fleemin',
    'Frances Robson',
    'Brent Hodgson',
    'Maggie Scott',
    'Dauvit Horsbroch',
    'Maureen Sangster',
    'Rowena M Love',
    'Betty Tindal',
    'Donald Mackay',
    'Raymond Vettese',
    'Ann Matheson',
    'Rab Wilson',
    'J Derrick McClure',
  ],
};

export default issue;
