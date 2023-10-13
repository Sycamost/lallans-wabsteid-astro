import img192w from '$images/lallans/issue36-192w.jpg';
import img274w from '$images/lallans/issue36-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 36,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Whitsuntid 1991',
  price: '2.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The thirty-saxt issue o the Lallans magazine.',
    'en-GB': 'The thirty-sixth issue of the Lallans magazine.',
  },
  contributors: [
    'Sheena Blackhall',
    'Gavin Sprott',
    'Geoffrey Dutton',
    'David Ogston',
    'Lilian Anderson',
    'JK Annand',
    'Kate Armstrong',
    'Raymond Vettese',
    'ME Alexander',
    'Peter Cameron',
    'William Imray',
    'John Murray',
    'James S Marshall',
    'John Barbour',
    'John Manson',
    'Soutar Davie',
    'Colvin Stewart',
    'Harvey Holton',
  ],
};

export default issue;
