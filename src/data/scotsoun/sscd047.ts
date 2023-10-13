import img192w from '$images/scotsoun/sscd047-192w.jpg';
import type Scotsoun from '$types/Scotsoun';

const cd: Scotsoun = {
  img: {
    width192: img192w,
  },
  title: 'Ceòl Beag from the Castle',
  longName: 'Ceòl Beag from the Castle',
  author: 'Pipe Major Angus Macdonald',
  cdCount: 1,
  price: '11.00',
  scotsounId: '047',
  uploadDate: '2023-08-25',
  description: {
    sco: `
      A programme o pipe muisic devised an played by Pipe Major Angus Macdonald
      o The Scots Guards an recordit i the King’s Dinin Ruim i Embro Castle.
      `,
    'en-GB': `
      A programme of pipe music devised and played by Pipe Major Angus Macdonald
      of The Scots Guards and recorded in the King’s Dining Room in Edinburgh Castle.'
      `,
  },
  trackList: ['Tam Bain’s Lum / Jim Tweedie’s Sea Legs', 'Black Bear / Hieland Laddie'],
};

export default cd;
