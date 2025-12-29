import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {CurrentOffer, Offer} from '../types/offer';
import {setAuthorizationStatus, setOffer, setOfferLoading, setOffers, setOffersDataLoading, setUser} from './action';
import {dropToken, saveToken} from '../api/token.ts';
import {AuthData, UserData} from '../types/auth-data.ts';
import {AppDispatch, State} from './index.ts';
import {AuthStatus} from '../const.ts';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>('/login');

      dispatch(setUser(data));

      dispatch(setAuthorizationStatus(AuthStatus.Authorised));
    } catch {
      dispatch(setAuthorizationStatus(AuthStatus.NotAuthorised));
      dispatch(setUser(null));
      dropToken();
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>('/login', { email, password });

    saveToken(data.token);

    dispatch(setUser(data));

    dispatch(setAuthorizationStatus(AuthStatus.Authorised));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('/logout');

    dropToken();

    dispatch(setAuthorizationStatus(AuthStatus.NotAuthorised));
    dispatch(setUser(null));
  },
);
