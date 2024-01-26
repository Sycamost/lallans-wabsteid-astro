import img192w from '$images/lallans/issue56-192w.jpg';
import img274w from '$images/lallans/issue56-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 56,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Voar 2000',
  price: '7.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The fifty-saxth issue o the Lallans magazine.',
    'en-GB': 'The fifty-sixth issue of the Lallans magazine.',
  },
  contributors: [
    'Sheena Blackhall',
    'Dauvit Horsbroch',
    'Robert Burns',
    'TS Law',
    'Robert Calder',
    'John Manson',
    'Aimée Chalmers',
    'Andrew McNeil',
    'RL Cook',
    'Pat McCrory',
    'Andrew Duncan',
    'Elaine Morton',
    'Andy Eagle',
    'George Philp',
    'Bob Fairnie',
    'David Purves',
    'Kenneth Farrow',
    'Lovina Roe',
    'George Hardie',
    'Scots Spellin Comatee',
    'Willie Hershaw',
    'John M Tait',
  ],
};

export default issue;
