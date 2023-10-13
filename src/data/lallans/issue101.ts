import img192w from '$images/lallans/issue101-192w.jpg';
import img274w from '$images/lallans/issue101-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 101,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Yuil 222',
  price: '10.00',
  uploadDate: '2023-08-25',
  description: {
    'en-GB': 'The hundred-and-first issue of the Lallans magazine.',
    sco: 'The hunner-an-first issue o the Lallans magazine.',
  },
  contributors: [
    'JK Annand',
    'George T Watt',
    'Stuart McHardy',
    'Tony Beekman',
    'John Burns',
    'Lyn Valentine',
    'Gillian Shearer',
    'Anne Jones',
    'Jeanette Abendstern',
    'Jerry Randalls',
    'Elaine Morton',
    'Maureen Sangster',
    'Donald Goodbrand Saunders',
    'Hamish Scott',
    'Alan Millar',
    'David Bleiman',
    'Billy Kay',
    'Lorraine Montgomerie',
    'Derrick McClure',
    'Ross Crawford',
    'Jock Stein',
    'J Roddie',
    'WS Milne',
    'Irene Howatt',
    'Kevin Connelly',
    'Hamish Wallochie',
    'Sheena Blackhall',
  ],
};

export default issue;
