import type { TranslationsDictionary } from '$types/TranslationsDictionary';

import MembershipType from '$enums/MembershipType';
import { annualSubscriptionPrice } from '$data/subscriptionPrices';
import tMembershipType from '$i18n/translations/enums/membershipType';
import translate from '$i18n/translate';

const tPage = {
  title: {
    sco: () => 'Jyne',
    'en-GB': () => 'Join',
  },
  'why-jyne': {
    sco: () => 'Why jyne the Scots Leid Associe?',
    'en-GB': () => 'Why join the Scots Language Society?',
  },
  'why-jyne-para-1': {
    sco: () => `
      Bi jynin us, ye ar helpin us tae heize up the Scots leid, maistly bi giein
      Scots scrievers a place tae lairn frae anither an finnd their ain Scots vyce.
    `,
    'en-GB': () => `
      By joining us, you are helping us to champion the Scots language,
      especially by giving Scots writers a place to learn from one
      another and to find their own Scots voice.
    `,
  },
  'why-jyne-para-2': {
    sco: () => `
      Forby, memmers get biannual issues o our aesome <i>Lallans</i> magazine gratis,
      an hae the richt tae atten our Annual Collogues, whaur we haud our AGM an
      enjoy talks frae kenspeckle spikkers on thochtie maiters effeirin til Scots
      leid an leiteratur.
    `,
    'en-GB': () => `
      In addition, members get biannual issues of our unique <i>Lallans</i>
      magazine gratis, and have the right to attend our Annual Conferences, where
      we hold our AGM and enjoy talks from highly regarded speakers on
      thought-provoking subjects relating to Scots language and literature.
    `,
  },
  'why-jyne-para-3': {
    sco: () => `
      Gin whit ye ar seekin is a community o prose-scrievers, makars, pleywreichts
      an owersetters, aw wi muckle care fur the Scots leid, the ar nae peer wi hus,
      the auldest Scots-leid activist organisation that’s about eenou an the anely
      fully dedicatit til the forderance o new Scots leiteratur.
    `,
    'en-GB': () => `
      If what you’re looking for is a community of prose-writers, poets,
      playwrights and translators with a passion for the Scots language, we have
      no equal. We are the oldest extant Scots-language activist organisation and
      the only one solely dedicated to the development of new Scots literature.
    `,
  },
  'hou-jyne': {
    sco: () => 'Hou can A jyne?',
    'en-GB': () => 'How can I join?',
  },
  'hou-jyne-intro': {
    sco: () => `
      For tae jyne, ye can pey by PayPal, bank transfer or cheque. The fee is
      as ablo.
    `,
    'en-GB': () => `
      To join, you can pay by PayPal, bank transfer or cheque. The fee is as below.
    `,
  },
  'subscription-price-table-caption': {
    sco: () => 'Annual subscription price per membership type',
    'en-GB': () => 'Annual subscription price per membership type',
  },
  'hou-pey-by-paypal-title': {
    sco: () => 'PayPal',
    'en-GB': () => 'PayPal',
  },
  'hou-pey-by-paypal-para': {
    sco: () => 'Select a membership type',
    'en-GB': () => 'Select a membership type',
  },
  'membership-type-individual-uk': {
    sco: () => 'Ane year individual UK membership',
    'en-GB': () => 'One year individual UK membership',
  },
  'membership-type-individual-uk-para': {
    sco: () => `
      Here, ye can pey for ane year’s annual subscription til the Scots Leid Associe
      gin ye ar an individual and ye want yer copies o <i>Lallans</i> sent til
      a UK address. This will cost
      £${annualSubscriptionPrice[MembershipType.IndividualUk]}. Gin ye want
      some ither kind o membership,
      <a href="/sco/jyne/paypal">see the ither options</a>.
    `,
    'en-GB': () => `
      Here, you can pay for one year’s annual subscription to the Scots Language
      Society if you are an individual and you want your copies of <i>Lallans</i>
      sent to a UK address. This will cost
      £${annualSubscriptionPrice[MembershipType.IndividualNonUk]}. If you want
      some other kind of membership,
      <a href="/en-GB/jyne/paypal">see the other options</a>.
    `,
  },
  'membership-type-individual-non-uk': {
    sco: () => 'Ane year individual non-UK membership',
    'en-GB': () => 'One year individual non-UK membership',
  },
  'membership-type-individual-non-uk-para': {
    sco: () => `
      Here, ye can pey for ane year’s annual subscription til the Scots Leid Associe
      gin ye ar an individual an ye want yer copies o <i>Lallans</i> sent til
      a non-UK address. This will cost
      £${annualSubscriptionPrice[MembershipType.IndividualNonUk]}. Gin ye want
      some ither kind o membership,
      <a href="/sco/jyne/paypal">see the ither options</a>.
    `,
    'en-GB': () => `
      Here, you can pay for one year’s annual subscription to the Scots Language
      Society if you are an individual and you want your copies of <i>Lallans</i>
      sent to a non-UK address. This will cost
      £${annualSubscriptionPrice[MembershipType.IndividualNonUk]}. If you want
      some other kind of membership,
      <a href="/en-GB/jyne/paypal">see the other options</a>.
    `,
  },
  'membership-type-institution-uk': {
    sco: () => 'Ane year UK institutional membership',
    'en-GB': () => 'One year UK institutional membership',
  },
  'membership-type-institution-uk-para': {
    sco: () => `
      Here, ye can pey for ane year’s annual subscription til the Scots Leid Associe
      gin ye ar an institution. This will cost
      £${annualSubscriptionPrice[MembershipType.InstitutionUk]}. Gin ye want
      some ither kind o membership,
      <a href="/sco/jyne/paypal">see the ither options</a>.
    `,
    'en-GB': () => `
      Here, you can pay for one year’s annual subscription to the Scots
      Language Society if you are an institution based in the UK. This will
      cost £${annualSubscriptionPrice[MembershipType.InstitutionUk]}. If you
      want some other kind of membership,
      <a href="/en-GB/jyne/paypal">see the other options</a>.
    `,
  },
  'hou-pey-by-bank-transfer-title': {
    sco: () => 'Bank transfer',
    'en-GB': () => 'Bank transfer',
  },
  'hou-pey-by-bank-transfer-para': {
    sco: () => `
      To pay by bank transfer, please send £20 to the following bank details,
      and include your name and the word 'STENT' in the reference. You may
      need to shorten your name to fit in the reference. For example, 'J BLOGGS
      STENT'.
    `,
    'en-GB': () => `
      For tae pey by bank transfer, pleise send £20 til the follaein bank
      details, and include your name and the wird 'STENT' in the reference. You
      micht hae tae shorten your name for tae fit it intil the reference. For
      ensaumple, 'J BLOGGS STENT'.
    `,
  },
  'hou-pey-by-cheque-title': {
    sco: () => 'Cheque',
    'en-GB': () => 'Cheque',
  },
  'hou-pey-by-cheque-para': {
    sco: ({ address }: { address: string[] }) => `
      Mak out a cheque til <b>The Scots Language Society</b>, syne send it til us at the follaein address:
      <address>${address.join('<br />')}</address>
    `,
    'en-GB': ({ address }: { address: string[] }) => `
      Make out a cheque to <b>The Scots Language Society</b>, then send it to us at the following address:
      <address>${address.join('<br />')}</address>
    `,
  },
  success: {
    sco: () => 'Successfullie bocht membership',
    'en-GB': () => 'Successfully bought membership',
  },
  'success-para': {
    sco: ({ membershipType }: { membershipType: MembershipType }) => `
      Ye hae successfullie bocht ane year’s
      ${translate('sco')(tMembershipType, { key: membershipType })}
      membership. We shuid be in contact wi ye some time shuin.
    `,
    'en-GB': ({ membershipType }: { membershipType: MembershipType }) => `
      You have successfully bought one year’s
      ${translate('en-GB')(tMembershipType, { key: membershipType })}
      membership. We should be in contact with you some time soon.
    `,
  },
};

type Raw = typeof tPage;
export default tPage as TranslationsDictionary<Raw>;
