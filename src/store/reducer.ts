import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  setAuthorizationStatus, setNearbyOffers,
  setOffer,
  setOfferLoading,
  setOffers,
  setOffersDataLoading, setReviews,
  setUser
} from './action';
import type {InitialState} from '../types/state';
import {AuthStatus, Cities} from '../const.ts';
import {SortOptions} from '../const';

const initialState: InitialState = {
  city: Cities.Paris,
  offers: [],
  currentOffer: null,
  sortOptions: SortOptions.Popular,
  isOffersDataLoading: false,
  isCurrentOfferLoading: false,
  authorizationStatus: AuthStatus.NotAuthorised,
  user: null,
  reviews: [],
  nearbyOffers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortOptions = action.payload;
    })
    .addCase(setOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOfferLoading, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    })
    .addCase(setNearbyOffers, (state, { payload }) => {
      state.nearbyOffers = payload;
    });
});
