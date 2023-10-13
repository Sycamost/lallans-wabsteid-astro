import img192w from '$images/lallans/issue64-192w.jpg';
import img274w from '$images/lallans/issue64-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 64,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Ware 204',
  price: '7.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The saxty-fowerth issue o the Lallans magazine.',
    'en-GB': 'The sixty-fourth issue of the Lallans magazine.',
  },
  contributors: [
    'Lillian Anderson',
    'Ann Matheson',
    'Robert R Calder',
    'J Derrick McClure',
    'Aimée Chalmers',
    'Alistair McDonald',
    'Colin Donati',
    'Liz Niven',
    'Sheila Douglas',
    'Charles P O’Connor',
    'Andy Eagle',
    'David C Purdie',
    'Kenneth D Farrow',
    'David Purves',
    'Iain Forde',
    'John Tait',
    'Brent Hodgson',
    'Williamina Thom',
    'Dauvit Horsbroch',
    'Raymond Vettese',
    'Mary Johnstone',
    'Rab Wilson',
    'Caroline Macafee',
    'Tom Wilson',
  ],
};

export default issue;
