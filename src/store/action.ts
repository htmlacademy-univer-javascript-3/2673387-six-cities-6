import { createAction } from '@reduxjs/toolkit';
import type {CityType, CurrentOffer, Offer} from '../types/offer';
import {AuthStatus, SortOptions} from '../const.ts';
import {UserData} from '../types/auth-data.ts';

export const changeCity = createAction<CityType>('offers/changeCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
export const changeSort = createAction<SortOptions>('main/changeSort');

export const setOffersDataLoading = createAction<boolean>('data/setOffersDataLoading');

export const setOffer = createAction<CurrentOffer>('offer/setOffer');
export const setOfferLoading = createAction<boolean>('offer/setOfferLoading');

export const setAuthorizationStatus = createAction<AuthStatus>('auth/setAuthorizationStatus');
export const setUser = createAction<UserData | null>('user/setUser');
