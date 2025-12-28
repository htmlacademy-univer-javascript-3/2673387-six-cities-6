import { createAction } from '@reduxjs/toolkit';
import type {CityType, CurrentOffer, Offer} from '../types/offer';
import {SortOptions} from '../const.ts';

export const changeCity = createAction<CityType>('offers/changeCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
export const changeSort = createAction<SortOptions>('main/changeSort');

export const setOffersDataLoading = createAction<boolean>('data/setOffersDataLoading');

export const setOffer = createAction<CurrentOffer>('offer/setOffer');
export const setOfferLoading = createAction<boolean>('offer/setOfferLoading');
