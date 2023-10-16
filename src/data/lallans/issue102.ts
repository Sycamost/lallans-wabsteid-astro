import img192w from '$images/lallans/issue102-192w.webp';
import img274w from '$images/lallans/issue102-274w.webp';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 102,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Beltane/Lammas 2023',
  price: '10.00',
  uploadDate: '2023-10-16',
  description: {
    'en-GB': 'The hundred-and-second issue of the Lallans magazine.',
    sco: 'The hunner-an-saicont issue o the Lallans magazine.',
  },
};

export default issue;
