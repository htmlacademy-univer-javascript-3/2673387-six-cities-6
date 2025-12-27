import { createAction } from '@reduxjs/toolkit';
import type {CityType, Offer} from '../types/offer';
import {SortOptions} from '../const.ts';

export const changeCity = createAction<CityType>('offers/changeCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
export const changeSort = createAction<SortOptions>('main/changeSort');
