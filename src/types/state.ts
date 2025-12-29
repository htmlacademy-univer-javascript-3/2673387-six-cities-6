import type {CityType, Offer, CurrentOffer} from './offer';
import {AuthStatus, SortOptions} from '../const.ts';
import {UserData} from './auth-data.ts';

export type InitialState = {
  city: CityType;
  offers: Offer[];
  currentOffer: CurrentOffer | null;
  sortOptions: SortOptions;
  isOffersDataLoading: boolean;
  isCurrentOfferLoading: boolean;
  authorizationStatus: AuthStatus;
  user: UserData | null;
};


