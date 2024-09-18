import img192w from '$images/lallans/issue103-192w.webp';
import img274w from '$images/lallans/issue103-274w.webp';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 103,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Yuiltide 2023',
  price: '10.00',
  uploadDate: '2024-09-18',
  description: {
    'en-GB': 'The hundred-and-third issue of the Lallans magazine.',
    sco: 'The hunner-an-thrid issue o the Lallans magazine.',
  },
  contributors: [
    /* TODO */
  ],
};

export default issue;
