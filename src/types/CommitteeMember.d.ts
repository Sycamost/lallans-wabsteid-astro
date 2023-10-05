import type CommitteeRole from '$enums/CommitteeRole';
import type Locale from './Locale';

type CommitteeMember = {
  name: string;
  roles: CommitteeRole[];
  bio?: { [key in Locale]: string };
  img?: ImageMetadata;
};
