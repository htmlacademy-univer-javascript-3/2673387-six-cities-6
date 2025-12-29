import {combineReducers} from '@reduxjs/toolkit';
import {SliceType} from '../const.ts';
import {appSlice} from './slices/app-slice.ts';
import {offersSlice} from './slices/offers-slice.ts';
import {userSlice} from './slices/user-slice.ts';

export const reducer = combineReducers({
  [SliceType.App]: appSlice.reducer,
  [SliceType.Offers]: offersSlice.reducer,
  [SliceType.User]: userSlice.reducer,
});

