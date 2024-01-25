import MembershipType from '$enums/MembershipType';

export const annualSubscriptionPrice: { [key in MembershipType]: number } = {
  [MembershipType.IndividualUk]: 20.0,
  [MembershipType.IndividualNonUk]: 30.0,
  [MembershipType.InstitutionUk]: 25.0,
};
