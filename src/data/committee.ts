import type { CommitteeMember } from '$types/CommitteeMember';
import CommitteeRole from 'enums/CommitteeRole';

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
];

export default committee;
