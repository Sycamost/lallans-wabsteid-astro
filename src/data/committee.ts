import type { CommitteeMember } from '$types/CommitteeMember';
import CommitteeRole from '$enums/CommitteeRole';

const committee: CommitteeMember[] = [
  {
    name: 'Joe Carstairs',
    roles: [CommitteeRole.Secretar, CommitteeRole.Wabmaister],
    bio: {
      sco: `
        Joe haes been i the Associe syne 2019. He is a Scots leid lairner an
        believes eydent at the Scots leid belangs awbody. He is frae Perth
        but bides eenou i Embro, at he haes bidden in syne 2018.
      `,
      'en-GB': `
        Joe has been in the Society since 2019. He is a Scots language learner
        and believes passionately that the Scots language belongs to everyone.
        He is from Perth but now lives in Edinburgh, where he lived since 2018.
      `,
    },
    imgSrc: '/images/commattee/joe-carstairs.jpg',
  },
  {
    name: 'Tony Beekman',
    roles: [],
  },
  {
    name: 'David Bleiman',
    roles: [CommitteeRole.OrdinaryMember],
    bio: {
      sco: `
        David bides i Cramond on the Embro Riviera. He is a makar, an is the winner
        o the 2020 Sangschaw Prize an 2023 McCash Prize fur poyums in Scots. He
        sells buiks on
        <a href="https://poetrykilt.bigcartel.com/" class="link">
          poetrykilt.bigcartel.com
        </a>.
      `,
      'en-GB': `
        David lives in Cramond on the Edinburgh Riviera. He is a poet, and is the
        winner of the 2020 Sangschaw Prize and 2023 McCash Prize for poems in Scots.
        He sells books on
        <a href="https://poetrykilt.bigcartel.com/" class="link">
          poetrykilt.bigcartel.com
        </a>.
      `,
    },
    imgSrc: '/images/commattee/david-bleiman.jpg',
  },
  {
    name: 'Michael Everson',
    roles: [],
  },
  {
    name: 'Wullie Hershaw',
    roles: [],
  },
  {
    name: 'Derrick McClure',
    roles: [],
  },
  {
    name: 'Elaine Morton',
    roles: [],
  },
  {
    name: 'Colin Robertson',
    roles: [],
  },
  {
    name: 'Jack Stuart',
    roles: [],
  },
  {
    name: 'George T Watt',
    roles: [CommitteeRole.MemmershipSecretar],
    bio: {
      sco: `
        George T Watt is a writer in Scots poesie, cutty tales and airticles.
        This cheil haes been published in mony anthologies an magazines as weel
        as Lallans. He haes produced seiveral recordings fur
        <a class="link" href="/en-GB/furthsettins/scotsoun">Scotsoun</a> anaa.
      `,
      'en-GB': `
        George T Watt is a writer in Scots poetry, short stories and articles.
        He has been published in many anthologies and magazines as well as
        Lallans. He has also produced several recordings for
        <a class="link" href="/en-GB/furthsettins/scotsoun">Scotsoun</a>.
      `,
    },
    imgSrc: '/images/commattee/george-t-watt.jpg',
  },
  {
    name: 'Rab Wilson',
    roles: [],
  },
];

export default committee;
