import { createAction } from '@reduxjs/toolkit';
import type {CityType, Offer} from '../types/offer';

export const changeCity = createAction<CityType>('offers/changeCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
