import img192w from '$images/lallans/issue43-192w.jpg';
import img274w from '$images/lallans/issue43-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 43,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1994',
  price: '2.50',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-fowerth issue o the Lallans magazine.',
    'en-GB': 'The forty-fourth issue of the Lallans magazine.',
  },
  contributors: [
    'Betty Whutson',
    'James Hall Thomson',
    'George Hardie',
    'William J Rae',
    'Andrew A Duncan',
    'Andrew Murray Scott',
    'Lilian Anderson',
    'Kenneth Farrow',
    'John S Phillips',
    'Reid Moffat',
    'Soutar Davie',
    'IR Mitchell',
    'Ian B Kerr',
    'James S Adam',
    'Craig Halliday',
    'Bill McCoubrey',
    'Andrew Kerr',
    'David Lindsay',
  ],
};

export default issue;
