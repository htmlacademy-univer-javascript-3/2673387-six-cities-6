import type {CityType, Offer, CurrentOffer} from './offer';
import {store} from '../store';
import {SortOptions} from '../const.ts';

export type InitialState = {
  city: CityType;
  offers: Offer[];
  currentOffer: CurrentOffer | null;
  sortOptions: SortOptions;
  isOffersDataLoading: boolean;
  isCurrentOfferLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
