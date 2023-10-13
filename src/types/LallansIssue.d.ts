import type Date from './Date';
import type LallansIssueNumber from './LallansIssueNumber';
import type Price from './Price';

type LallansIssue = {
  issueNumber: LallansIssueNumber;
  img: {
    width192: ImageMetadata;
    width274: ImageMetadata;
  };
  issueName: string;
  uploadDate: Date;
  price: Price;
  description: {
    sco: string;
    'en-GB': string;
  };
  coverArtist?: string;
  trackList?: string[];
} & ({ contributors: Contributor[] } | { contributions: Contribution[] } | Record<string, never>);

export type Contributor = string;
export type Contribution = { author?: string; title: string };

export default LallansIssue;
