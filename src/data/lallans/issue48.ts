import img192w from '$images/lallans/issue48-192w.jpg';
import img274w from '$images/lallans/issue48-274w.jpg';
import type LallansIssue from '$types/LallansIssue';

const issue: LallansIssue = {
  issueNumber: 48,
  img: {
    width192: img192w,
    width274: img274w,
  },
  issueName: 'Caunilmass 1997',
  price: '3.00',
  uploadDate: '2023-08-25',
  description: {
    sco: 'The forty-echtth issue o the Lallans magazine.',
    'en-GB': 'The forty-eighth issue of the Lallans magazine.',
  },
};

export default issue;
