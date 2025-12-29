import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../api/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchOfferAction } from './api-action';
import { AppDispatch, State } from './index';

describe('Async actions', () => {
  const api = createAPI();
  const mockAxiosAdapter = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    AnyAction,
    AppDispatch
  >(middlewares);

  it('should dispatch fetchOffersAction.pending and fetchOffersAction.fulfilled when GET /offers', async () => {
    const mockOffers = [{ id: '1', title: 'Offer 1' }];
    mockAxiosAdapter.onGet('/offers').reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchOffersAction.pending.type);
    expect(actions[1].type).toBe(fetchOffersAction.fulfilled.type);
    expect(actions[1].payload).toEqual(mockOffers);
  });

  it('should dispatch fetchOfferAction.pending and fetchOfferAction.fulfilled when GET /offers/:id', async () => {
    const mockOffer = { id: '1', title: 'Offer 1' };
    const offerId = '1';
    mockAxiosAdapter.onGet(`/offers/${offerId}`).reply(200, mockOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction(offerId));

    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchOfferAction.pending.type);
    expect(actions[1].type).toBe(fetchOfferAction.fulfilled.type);
    expect(actions[1].payload).toEqual(mockOffer);
  });
});
