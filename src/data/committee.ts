import type { CommitteeMember } from '$types/CommitteeMember';
import CommitteeRole from '$enums/CommitteeRole';
import RabWilsonImgSrc from '$images/committee/rab-wilson.jpg';
import JoeCarstairsImgSrc from '$images/committee/joe-carstairs.jpg';
import TonyBeekmanImgSrc from '$images/committee/tony-beekman.jpg';
import DavidBleimanImgSrc from '$images/committee/david-bleiman.jpg';
import WilliamHershawImgSrc from '$images/committee/william-hershaw.jpg';
import GeorgeTWattImgSrc from '$images/committee/george-t-watt.jpg';

const committee: CommitteeMember[] = [
  {
    name: 'Rab Wilson',
    roles: [CommitteeRole.Preses],
    bio: {
      sco: `
        Rab Wilson is a poet wha scrieves predominantly i the Scots leid. He wis
        born an aye-an-oan bides i New Cumnock, East Ayrshire. He is forby a
        playwreicht, newspaper columnist an commentator on the Scots leid.
      `,
      'en-GB': `
        Rab Wilson is a poet who scrieves predominantly in the Scots language.
        He was born and remains in New Cumnock, East Ayrshire. He is also a
        playwright, newpapaer columnist and commentator on the Scots language. 
      `,
    },
    img: RabWilsonImgSrc,
  },
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
    img: JoeCarstairsImgSrc,
  },
  {
    name: 'Tony Beekman',
    roles: [CommitteeRole.Thesaurer],
    bio: {
      sco: `
        Tony pits in a shift in the day job as a Community Lairnin an
        Development Warker for a central Scottish cooncil. He is also a trade
        union shop steward. Tony is a lifelang lairner o philosophy an likes
        tae reflect on it in the pub ower a pint or a dram. This helps him
        scrieve cutty tales whit he is chuffed tae see in Lallans occasionally.
      `,
      'en-GB': `
        By day, Tony puts in a shift as the Community Learning and Development
        Worker for a central Scottish council. He is also a trade union shop
        steward. Tony is a lifelong learner of philosophy and likes to reflect
        on it in the pub over a pint or a dram. This helps him to write short
        stories which he is chuffed to see in Lallans occasionally.
      `,
    },
    img: TonyBeekmanImgSrc,
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
    img: DavidBleimanImgSrc,
  },
  {
    name: 'Michael Everson',
    roles: [],
  },
  {
    name: 'William Hershaw',
    roles: [CommitteeRole.LallansEiditor],
    bio: {
      sco: `
        William Hershaw is the praisent eiditor o Lallans. He is a weill-kent
        <a
          class="link"
          href="http://www.scottishpoetrylibrary.org.uk/poetry/poets/william-hershaw"
        >
          poet
        </a> and
        <a
          class="link"
          href="https://en-gb.facebook.com/bowhillplayers"
        >
          singer
        </a>. Brocht up as a native Scots speiker in a Fife
        mining community he trowes that ‘the Scots leid is for aabody’ and
        “gin ye tint your leid ye tint your sel’. Aa Scots leid has a feir in
        Lallans.  William can be contacted at
        <a class="link" href="mailto:w.hershaw678@btinternet">
          w.hershaw678@btinternet
        </a>.
      `,
      'en-GB': `
        William Hershaw is the current editor of Lallans. He is a well-known
        <a
          class="link"
          href="http://www.scottishpoetrylibrary.org.uk/poetry/poets/william-hershaw"
        >
          poet
        </a> and
        <a
          class="link"
          href="https://en-gb.facebook.com/bowhillplayers"
        >
          singer
        </a>. Brought up as a native Scots speaker in a Fife mining
        community, he believes that ‘the Scots language is for everyone’ and
        “if you lose your language you lose your self.’ All Scots language can
        give it a shot in Lallans. William can be contacted at
        <a class="link" href="mailto:w.hershaw678@btinternet">
          w.hershaw678@btinternet
        </a>.
      `,
    },
    img: WilliamHershawImgSrc,
  },
  {
    name: 'Derrick McClure',
    roles: [],
  },
  {
    name: 'Elaine Morton',
    roles: [CommitteeRole.OrdinaryMember],
    bio: {
      sco: `
        Elaine is a past editor o Lallans an bides on the Commattee tae owersee
        the Sangschaw competeition. Edinburgh is hame an she haes been wi the
        Associe sin 1998. She wad be blithe o mair weemen on the Commattee, sae,
        lasses, dinnae be blate tae come forrit!
      `,
      'en-GB': `
        Elaine is a past editor of Lallans and remains on the Committee to oversee
        the Sangschaw competition. Edinburgh is home and she has been with the
        Society since 1998. She would be pleased to see more women on the
        Committee, so, girls, don’t be shy to come forward!
      `,
    },
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
    img: GeorgeTWattImgSrc,
  },
];

export default committee;
