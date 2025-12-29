import {Host} from './offer.ts';

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
};

export type ReviewRequest = {
  offerId: string;
  comment: string;
  rating: number;
};

export default Review;
