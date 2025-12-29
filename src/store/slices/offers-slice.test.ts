import { fetchOffersAction, fetchOfferAction } from '../api-action';
import {offersSlice} from './offers-slice.ts';

describe('offersSlice Slice', () => {
  const initialState = {
    offers: [],
    isOffersDataLoading: false,
    currentOffer: null,
    isCurrentOfferLoading: false,
    reviews: [],
    nearbyOffers: [],
    favoriteOffers: [],
    isFavoritesLoading: false,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = offersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should set isoffersSliceLoading to true when fetchOffersAction is pending', () => {
    const result = offersSlice.reducer(initialState, {
      type: fetchOffersAction.pending.type,
    });
    expect(result.isOffersDataLoading).toBe(true);
  });

  it('should set offers and isoffersSliceLoading to false when fetchOffersAction is fulfilled', () => {
    const mockOffers = [{ id: '1', title: 'Offer 1' }];
    const result = offersSlice.reducer(initialState, {
      type: fetchOffersAction.fulfilled.type,
      payload: mockOffers,
    });
    expect(result.offers).toEqual(mockOffers);
    expect(result.isOffersDataLoading).toBe(false);
  });

  it('should set isCurrentOfferLoading to true when fetchOfferAction is pending', () => {
    const result = offersSlice.reducer(initialState, {
      type: fetchOfferAction.pending.type,
    });
    expect(result.isCurrentOfferLoading).toBe(true);
  });

  it('should set currentOffer and isCurrentOfferLoading to false when fetchOfferAction is fulfilled', () => {
    const mockOffer = { id: '1', title: 'Offer 1' };
    const result = offersSlice.reducer(initialState, {
      type: fetchOfferAction.fulfilled.type,
      payload: mockOffer,
    });
    expect(result.currentOffer).toEqual(mockOffer);
    expect(result.isCurrentOfferLoading).toBe(false);
  });
});
