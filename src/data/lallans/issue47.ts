import img192w from '$images/lallans/issue47-192w.jpg';
import img274w from '$images/lallans/issue47-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 47,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1996',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-seiventh issue o the Lallans magazine.',
    'en-GB': 'The forty-seventh issue of the Lallans magazine.',
  },
  contributors: [
    'Lilian Anderson',
    'Mavis Beckett',
    'Soutar Davie',
    'Sheila Douglas',
    'Kenneth D Farrow',
    'Pete Fortune',
    'Laureen Johnson',
    'Margaret Rose Harris',
    'TS Law',
    'Mary McIntosh',
    'AD Mackie',
    'John Manson',
    'James Melville',
    'William Neill',
    'Stuart A Paterson',
    'John S Phillips',
    'David C Purdie',
    'David Purves',
    'Lydia Robb',
    'Elliot Cowan Smith',
    'Gavin Sprott',
    'Robert Tannahill',
  ],
};

export default issue;
