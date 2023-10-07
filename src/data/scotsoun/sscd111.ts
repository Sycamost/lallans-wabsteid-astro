import img from '$images/scotsoun/sscd111.jpg';
import type Scotsoun from '$types/Scotsoun';

const cd: Scotsoun = {
  img,
  title: 'Brockit, the fermtoon cat',
  longName: 'Brockit, the fermtoon cat',
  author: 'Les Wheeler',
  cdCount: 1,
  price: '11.00',
  scotsounId: '111',
  uploadDate: '2023-08-25',
  trackList: ['Brockit an The Berries', 'Brockit The Hero'],
  description: {
    sco: `
      Eleiven aventurs o Brockit, the fermtoon cat. Read bi George Philp,
      Sheena Blackhall, Alastair Taylor an Leslie Wheeler.
      `,
    'en-GB': `
      Eleven adventures of Brockit, the fermtoon cat. Read by George Philp,
      Sheena Blackhall, Alastair Taylor and Leslie Wheeler.
      `,
  },
  coverArtist: 'Rosemary Taylor',
};

export default cd;
