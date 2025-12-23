import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import type { InitialState } from '../types/state';
import { MOCKED_OFFERS } from '../mocks/offers';
import {Cities} from '../const.ts';

const initialState: InitialState = {
  city: Cities.Paris,
  offers: MOCKED_OFFERS
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state, { payload }) => {
      state.offers = payload;
    });
});
