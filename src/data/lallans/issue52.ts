import img from '$images/lallans/issue52.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 52,
  img,
  issueName: 'Whitsuntid 1998',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The fifty-saicont issue o the Lallans magazine.',
    'en-GB': 'The fifty-second issue of the Lallans magazine.',
  },
  contributors: [
    'Hugh Barclay o Ladyland',
    'Peter Cameron',
    'Donald Farquhar',
    'Duncan Glen',
    'Tom Hubbard',
    'J Derrick McClure',
    'Alexander McGregor',
    'Stuart McHardy',
    'Mary McIntosh',
    'John Manson',
    'Reid Moffat',
    'Alexander Montgomerie',
    'William Neill',
    'WG Pritchard',
    'David C Purdie',
    'David Purves',
    'Raymond Vettese',
    'Peter D Wright',
  ],
};

export default issue;
