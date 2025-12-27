import type {CityType, Offer} from './offer';
import {store} from '../store';
import {SortOptions} from '../const.ts';

export type InitialState = {
  city: CityType;
  offers: Offer[];
  sortOptions: SortOptions;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
