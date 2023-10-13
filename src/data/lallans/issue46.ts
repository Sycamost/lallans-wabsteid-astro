import img192w from '$images/lallans/issue46-192w.jpg';
import img274w from '$images/lallans/issue46-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 46,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1996',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-saxt issue o the Lallans magazine.',
    'en-GB': 'The forty-sixth issue of the Lallans magazine.',
  },
  contributors: [
    'Kate Armstrong',
    'Soutar Davie',
    'Christine De Luca',
    'Lady Mary Drummond',
    'Andrew A Duncan',
    'John Erskine o Dun',
    'Alexander Fenton',
    'Pete Fortune',
    'Tom Hubhard',
    'Charles Kemp',
    'Neil R MacCallum',
    'Mary Mclntosh',
    'John Manson',
    'William Neill',
    'David Purves',
    'William J Rae',
    'Xavier De Tandual',
    'David Tomassini',
    'James Hall Thomson',
    'Peter D Wright',
  ],
};

export default issue;
