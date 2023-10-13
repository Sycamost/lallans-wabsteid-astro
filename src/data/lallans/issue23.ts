import img192w from '$images/lallans/issue23-192w.jpg';
import img274w from '$images/lallans/issue23-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 23,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Mairtinmas 1984',
  price: '0.75',
  uploadDate: '2023-08-25',
  description: {
    'en-GB': 'The twenty-third issue of the Lallans magazine.',
    sco: 'The twanty-third issue o the Lallans magazine.',
  },
};

export default issue;
