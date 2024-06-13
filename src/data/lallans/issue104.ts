import img192w from '$images/lallans/issue104-192w.jpg';
import img274w from '$images/lallans/issue104-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 104,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Lammas 2024',
  price: '10.00',
  uploadDate: '2024-06-12',
  description: {
    'en-GB': 'The hundred-and-fourth issue of the Lallans magazine.',
    sco: 'The hunner-an-fowert issue o the Lallans magazine.',
  },
  contributors: [
    'Brendan McCluskey',
    'Braxfield',
    'Craig Aitchison',
    'Tracy Ann Harvey',
    'Tom Ellett',
    'Hugh McMillan',
    'Jim Aitken',
    'Lynn Valentine',
    'Gavin MacDougall',
    'David Bleiman',
    'Dauvit Horsbroch',
    'Iain WD Forde',
    'Hugh Pyper',
    'Maureen Sangster',
    'Stuart McHardy',
    'Tom Hubbard',
    'Andrew Matthews',
    'Elaine Morton',
    'Kevin Connelly',
    'George T Watt',
    'WS Milne',
    'Andrew Urquhart',
    'Moira Dalgetty',
    'Olive Ritchie',
  ],
};

export default issue;
