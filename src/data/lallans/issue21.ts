import img192w from '$images/lallans/issue21-192w.jpg';
import img274w from '$images/lallans/issue21-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 21,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1983',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    'en-GB': 'The twenty-first issue of the Lallans magazine.',
    sco: 'The twanty-first issue o the Lallans magazine.',
  },
  contributions: [
    {
      title: 'The Heid',
      author: 'Alistair Mackie',
    },
    {
      title: 'Ferkeekers an Siclike',
    },
    {
      title: 'On the Lorimer NT',
      author: 'Donald Campbell',
    },
  ],
};

export default issue;
