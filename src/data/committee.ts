import type { CommitteeMember } from '$types/CommitteeMember';
import CommitteeRole from '$enums/CommitteeRole';
import RabWilsonImg106Src from '$images/committee/rab-wilson-106w.webp';
import RabWilsonImg146Src from '$images/committee/rab-wilson-146w.webp';
import RabWilsonImg192Src from '$images/committee/rab-wilson-192w.webp';
import RabWilsonImg222Src from '$images/committee/rab-wilson-222w.webp';
import JoeCarstairsImg106Src from '$images/committee/joe-carstairs-106w.webp';
import JoeCarstairsImg146Src from '$images/committee/joe-carstairs-146w.webp';
import JoeCarstairsImg192Src from '$images/committee/joe-carstairs-192w.webp';
import JoeCarstairsImg222Src from '$images/committee/joe-carstairs-222w.webp';
import TonyBeekmanImg106Src from '$images/committee/tony-beekman-106w.webp';
import TonyBeekmanImg146Src from '$images/committee/tony-beekman-146w.webp';
import TonyBeekmanImg192Src from '$images/committee/tony-beekman-192w.webp';
import TonyBeekmanImg222Src from '$images/committee/tony-beekman-222w.webp';
import DavidBleimanImg106Src from '$images/committee/david-bleiman-106w.webp';
import DavidBleimanImg146Src from '$images/committee/david-bleiman-146w.webp';
import DavidBleimanImg192Src from '$images/committee/david-bleiman-192w.webp';
import DavidBleimanImg222Src from '$images/committee/david-bleiman-222w.webp';
import WilliamHershawImg106Src from '$images/committee/william-hershaw-106w.webp';
import WilliamHershawImg146Src from '$images/committee/william-hershaw-146w.webp';
import WilliamHershawImg192Src from '$images/committee/william-hershaw-192w.webp';
import WilliamHershawImg222Src from '$images/committee/william-hershaw-222w.webp';
import GeorgeTWattImg106Src from '$images/committee/george-t-watt-106w.webp';
import GeorgeTWattImg146Src from '$images/committee/george-t-watt-146w.webp';
import GeorgeTWattImg192Src from '$images/committee/george-t-watt-192w.webp';
import GeorgeTWattImg222Src from '$images/committee/george-t-watt-222w.webp';

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
    img: {
      width106: RabWilsonImg106Src,
      width146: RabWilsonImg146Src,
      width192: RabWilsonImg192Src,
      width222: RabWilsonImg222Src,
    },
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
    img: {
      width106: JoeCarstairsImg106Src,
      width146: JoeCarstairsImg146Src,
      width192: JoeCarstairsImg192Src,
      width222: JoeCarstairsImg222Src,
    },
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
    img: {
      width106: TonyBeekmanImg106Src,
      width146: TonyBeekmanImg146Src,
      width192: TonyBeekmanImg192Src,
      width222: TonyBeekmanImg222Src,
    },
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
    img: {
      width106: DavidBleimanImg106Src,
      width146: DavidBleimanImg146Src,
      width192: DavidBleimanImg192Src,
      width222: DavidBleimanImg222Src,
    },
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
          href="http://www.scottishpoetrylibrary.org.uk/poetry/poets/william-hershaw"
        >
          poet
        </a> and
        <a
          href="https://en-gb.facebook.com/bowhillplayers"
        >
          singer
        </a>. Brocht up as a native Scots speiker in a Fife
        mining community he trowes that ‘the Scots leid is for aabody’ and
        “gin ye tint your leid ye tint your sel’. Aa Scots leid has a feir in
        Lallans.  William can be contacted at
        <a href="mailto:w.hershaw678@btinternet.com">
          w.hershaw678@btinternet.com
        </a>.
      `,
      'en-GB': `
        William Hershaw is the current editor of Lallans. He is a well-known
        <a
          href="http://www.scottishpoetrylibrary.org.uk/poetry/poets/william-hershaw"
        >
          poet
        </a> and
        <a
          href="https://en-gb.facebook.com/bowhillplayers"
        >
          singer
        </a>. Brought up as a native Scots speaker in a Fife mining
        community, he believes that ‘the Scots language is for everyone’ and
        “if you lose your language you lose your self.’ All Scots language can
        give it a shot in Lallans. William can be contacted at
        <a href="mailto:w.hershaw678@btinternet.com">
          w.hershaw678@btinternet.com
        </a>.
      `,
    },
    img: {
      width106: WilliamHershawImg106Src,
      width146: WilliamHershawImg146Src,
      width192: WilliamHershawImg192Src,
      width222: WilliamHershawImg222Src,
    },
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
        <a href="/en-GB/furthsettins/scotsoun">Scotsoun</a> anaa.
      `,
      'en-GB': `
        George T Watt is a writer in Scots poetry, short stories and articles.
        He has been published in many anthologies and magazines as well as
        Lallans. He has also produced several recordings for
        <a href="/en-GB/furthsettins/scotsoun">Scotsoun</a>.
      `,
    },
    img: {
      width106: GeorgeTWattImg106Src,
      width146: GeorgeTWattImg146Src,
      width192: GeorgeTWattImg192Src,
      width222: GeorgeTWattImg222Src,
    },
  },
];

export default committee;
