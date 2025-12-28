import { createReducer } from '@reduxjs/toolkit';
import {changeCity, setOffers, changeSort, setOffersDataLoading, setOffer, setOfferLoading} from './action';
import type { InitialState } from '../types/state';
import {Cities} from '../const.ts';
import { SortOptions } from '../const';

const initialState: InitialState = {
  city: Cities.Paris,
  offers: [],
  currentOffer: null,
  sortOptions: SortOptions.Popular,
  isOffersDataLoading: false,
  isCurrentOfferLoading: false,
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
    });
});
