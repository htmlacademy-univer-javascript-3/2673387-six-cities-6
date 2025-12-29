import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceType, Cities, SortOptions } from '../../const';
import { CityType } from '../../types/offer';

type AppState = {
  city: CityType;
  sortOptions: SortOptions;
};

const initialState: AppState = {
  city: Cities.Paris,
  sortOptions: SortOptions.Popular,
};

export const appSlice = createSlice({
  name: SliceType.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityType>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortOptions>) => {
      state.sortOptions = action.payload;
    },
  },
});

export const { changeCity, changeSort } = appSlice.actions;
