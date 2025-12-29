import {CityType, CurrentOffer, Offer} from './offer.ts';
import {AuthStatus, SortOptions} from '../const.ts';
import Review from './review.ts';
import {UserData} from './auth-data.ts';

export type AppState = {
  city: CityType;
  sortOptions: SortOptions;
};

export type OffersState = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  currentOffer: CurrentOffer | null;
  isCurrentOfferLoading: boolean;
  reviews: Review[];
  nearbyOffers: Offer[];
  favoriteOffers: Offer[];
  isFavoritesLoading: boolean;
};

export type UserState = {
  authorizationStatus: AuthStatus;
  user: UserData | null;
};


