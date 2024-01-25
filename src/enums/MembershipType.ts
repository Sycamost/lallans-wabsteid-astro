enum MembershipType {
  IndividualUk,
  IndividualNonUk,
  InstitutionUk,
}

export type MembershipTypeSnakeCase = 'individual-uk' | 'individual-non-uk' | 'institution-uk';

const allMembershipTypesSnakeCaseHash: { [key in MembershipTypeSnakeCase]: null } = {
  'individual-uk': null,
  'individual-non-uk': null,
  'institution-uk': null,
};
export const allMembershipTypesSnakeCase = Object.keys(
  allMembershipTypesSnakeCaseHash
) as MembershipTypeSnakeCase[];

export function membershipTypeToSnakeCase(membershipType: MembershipType): MembershipTypeSnakeCase {
  switch (membershipType) {
    case MembershipType.IndividualUk:
      return 'individual-uk';
    case MembershipType.IndividualNonUk:
      return 'individual-non-uk';
    case MembershipType.InstitutionUk:
      return 'institution-uk';
  }
}

export function snakeCaseToMembershipType(membershipType: MembershipTypeSnakeCase): MembershipType {
  switch (membershipType) {
    case 'individual-uk':
      return MembershipType.IndividualUk;
    case 'individual-non-uk':
      return MembershipType.IndividualNonUk;
    case 'institution-uk':
      return MembershipType.InstitutionUk;
  }
}

export const allMembershipTypes = allMembershipTypesSnakeCase.map(snakeCaseToMembershipType);

export default MembershipType;
