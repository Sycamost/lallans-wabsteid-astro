import img from '$images/scotsoun/sscd815.jpg';
import type Scotsoun from '$types/Scotsoun';

const cd: Scotsoun = {
  img,
  title: 'Peewits',
  longName: 'Peewits',
  author: 'The Bowhill Players',
  cdCount: 2,
  price: '18.00',
  scotsounId: '815',
  uploadDate: '2023-08-25',
  coverArtist: 'Mary an David Hershaw',
  releaseDate: '2020-06-24',
  trackList: ['Daft Laddie in the Wuids', 'Daftboy Suite (Instrumental)'],
  description: {
    'en-GB': `
        Music inspired by the Scots poem <i>The Daft Boy – for John Hershaw: 11th
        Februar, 1941</i> by Willie Hershaw, published by Neepheid Publications, 2019.
      </p>

      <p>
        The Bowhill Players are: William Hershaw (guitar, vocals, spoken voice), Erik Knussen
        (cello, double bass), Jenn Knussen (harp, vocals) and David Hershaw (guitar, vocals).
      `,
    sco: `
        Muisic inspired by the Scots poem <i>The Daft Boy – for John Hershaw: 11th
        Februar, 1941</i> by Willie Hershaw, publisht by Neepheid Publications, 2019.
      </p>

      <p>
        The Bowhill Players ar: William Hershaw (guitar, vocals, spoken vyce), Erik Knussen
        (cello, double bass), Jenn Knussen (harp, vocals) and David Hershaw (guitar, vocals).
      `,
  },
};

export default cd;
