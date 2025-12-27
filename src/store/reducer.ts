import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers, changeSort } from './action';
import type { InitialState } from '../types/state';
import { MOCKED_OFFERS } from '../mocks/offers';
import {Cities} from '../const.ts';
import { SortOptions } from '../const';

const initialState: InitialState = {
  city: Cities.Paris,
  offers: MOCKED_OFFERS,
  sortOptions: SortOptions.Popular,
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
    });
});
