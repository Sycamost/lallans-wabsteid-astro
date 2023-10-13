import img from '$images/scotsoun/sscd084.jpg';
import type Scotsoun from '$types/Scotsoun';

const cd: Scotsoun = {
  img,
  title: 'Gleg',
  subtitle: 'Learning Scots in song and story',
  longName: 'Gleg – Learning Scots in song and story',
  author: 'various',
  cdCount: 1,
  price: '11.00',
  scotsounId: '084',
  uploadDate: '2023-08-25',
  description: {
    sco: `
      ‘Gleg’  wis wrocht ti gie bairns an innin til Scots in the wee schuils - the accompanyin
      beuklet is ettelt ti provide copy maisters ti uise alang wi the recordin. Gin stock rins oot,
      we’ll send it as a PDF file for free.
      `,
    'en-GB': `
      ‘Gleg’ was created to give children an introduction to Scots in the small schools. The
      accompanying booklet is intended to provide copy masters to use alongside the recording.
      If stock runs out, we’ll send it as a PDF file for free.
      `,
  },
  trackList: ['The Twins and the Muckle Moggie', 'The Six Travellers'],
};

export default cd;
