import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {CurrentOffer, Offer} from '../types/offer';
import {setOffer, setOfferLoading, setOffers, setOffersDataLoading} from './action';
import { AppDispatch, State } from '../types/state';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoading(true));

    const { data } = await api.get<Offer[]>('/offers');

    dispatch(setOffersDataLoading(false));

    dispatch(setOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setOfferLoading(true));

    try {
      const { data } = await api.get<CurrentOffer>(`/offers/${offerId}`);
      dispatch(setOffer(data));
    } catch { /* empty */ } finally {
      dispatch(setOfferLoading(false));
    }
  },
);
