import { createSelector } from '@reduxjs/toolkit';
import { SliceType } from '../const';
import { sortOffers } from './utils';
import {State} from './index.ts';

export const getOffers = (state: State) => state[SliceType.Offers].offers;
export const getCity = (state: State) => state[SliceType.App].city;
export const getSortOption = (state: State) => state[SliceType.App].sortOptions;
export const getAuthorizationStatus = (state: State) => state[SliceType.User].authorizationStatus;
export const getUser = (state: State) => state[SliceType.User].user;

export const getFilteredSortedOffers = createSelector(
  [getOffers, getCity, getSortOption],
  (offers, city, sortOption) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    return sortOffers(filteredOffers, sortOption);
  }
);
